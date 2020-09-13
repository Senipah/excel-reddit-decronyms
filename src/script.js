const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const table = require('markdown-table');
const Papa = require('papaparse');
const path = require('path');
const JSON_PATH = path.join(process.cwd(), 'decronyms', 'index.json');

class FunctionDefinition {
  constructor(parentCategory, category, name, description, link) {
    const _missingDesc =
      'No Description Provided. Click here to go to the documentation page.';
    this.parentCategory = parentCategory;
    this.category = category;
    this.name = name;
    this.description = description || _missingDesc;
    this.link = link;
  }

  get decronymDescription() {
    const nbsp = /[\xa0]/g;
    // eslint-disable-next-line no-control-regex
    const charSet = /[^\x00-\x7F]/g;
    const desc = this.description.replace(nbsp, ' ').replace(charSet, '');
    return !['CUSTOM', 'Excel Function'].includes(this.parentCategory)
      ? `${this.parentCategory}: ${desc}`
      : desc;
  }

  get decronymName() {
    const exceptions = ['N', 'T', 'TRUE', 'FALSE'];
    return exceptions.includes(this.name) ? this.name + '(' : this.name;
  }
}

function writeFile(outputFile, outputString) {
  fs.writeFile(outputFile, outputString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${outputFile} Updated`);
    }
  });
}

function mdLink(text, href) {
  return `[${text}](${href})`;
}

function toURI(...args) {
  const sep = '_';
  return encodeURIComponent(args.join(sep).toLowerCase().split(' ').join(sep));
}

function getNavbar(arr, active, pageName) {
  return arr.reduce((acc, cur) => {
    const val =
      cur === active
        ? `**${cur}**`
        : mdLink(cur, `/r/excel/wiki/decronym/${pageName}#wiki_${toURI(cur)}`);
    return acc + val + '\n|\n';
  }, '');
}

function sectionHeader(e) {
  return `### ${e}`;
}

function createTable(arr) {
  const headers = ['Function name', 'Type and description'];
  const rows = arr.map((e) => {
    return [mdLink(e.name, e.link), e.description];
  });
  const tableData = [headers, ...rows];
  const result = table(tableData);
  return result;
}

function formatSection(header, navbar, dataTable) {
  const horRule = '---';
  const section =
    header +
    '\n' +
    horRule +
    '\n\n' +
    navbar +
    '\n\n' +
    horRule +
    '\n' +
    dataTable +
    '\n\n';
  return section;
}

// eslint-disable-next-line no-unused-vars
function createCategoricalWiki(data, parentCategory) {
  const uniqueCategories = [...new Set(data.map((e) => e.category))].sort();
  const pageHeader = `## ${parentCategory} (By Category) \n\n`;
  const pageName = toURI(parentCategory, 'categorical');
  const createSection = (currentCategory) => {
    const funcsInCategory = data.filter((e) => e.category === currentCategory);
    const header = sectionHeader(currentCategory);
    const navbar = getNavbar(uniqueCategories, currentCategory, pageName);
    const dataTable = createTable(funcsInCategory);
    return formatSection(header, navbar, dataTable);
  };
  const sections = uniqueCategories.map((e) => createSection(e));
  const outputString = pageHeader + sections.join('');
  const outputFile = path.join(process.cwd(), 'wiki_pages', pageName + '.md');
  writeFile(outputFile, outputString);
}

// eslint-disable-next-line no-unused-vars
function createAlphabeticalWiki(data, parentCategory) {
  const startingLetters = data.map((e) => {
    return e.name.substring(0, 1).toUpperCase();
  });
  const uniqueLetters = [...new Set(startingLetters)].sort();
  const pageHeader = `## ${parentCategory} (Alphabetical List) \n\n`;
  const pageName = toURI(parentCategory, 'alphabetical');
  const createSection = (currentLetter) => {
    const funcsInCategory = data.filter(
      (e) => e.name.substring(0, 1).toUpperCase() === currentLetter
    );
    const header = sectionHeader(currentLetter);
    const navbar = getNavbar(uniqueLetters, currentLetter, pageName);
    const dataTable = createTable(funcsInCategory);
    return formatSection(header, navbar, dataTable);
  };
  const sections = uniqueLetters.map((e) => createSection(e));
  const outputString = pageHeader + sections.join('');
  const outputFile = path.join(process.cwd(), 'wiki_pages', pageName + '.md');
  writeFile(outputFile, outputString);
}

// eslint-disable-next-line no-unused-vars
function createWikiPages(data) {
  const parentCategories = data.reduce((acc, cur) => {
    const curCat = cur.parentCategory;
    if (!acc.includes(curCat)) {
      acc.push(curCat);
    }
    return acc;
  }, []);
  parentCategories.forEach((cat) => {
    const funcsInGroup = data.filter((e) => e.parentCategory === cat);
    const maybePlural = cat.split(' ').pop() === 'Function' ? cat + 's' : cat;
    createAlphabeticalWiki(funcsInGroup, maybePlural);
    createCategoricalWiki(funcsInGroup, maybePlural);
  });
}

// eslint-disable-next-line no-unused-vars
function createCSV(data) {
  const outputPath = path.join(process.cwd(), 'csv', 'clippy_ref_formulas.csv');
  const headers = ['Formula', 'Address', 'Called', 'Contents'];
  const body = data.map((cur) => {
    const contents = [
      `**${cur.name}**:`,
      `${cur.description}`,
      mdLink('Read more on Office Support.', cur.link),
    ].join('\n\n');
    return [cur.name, cur.link, 0, contents];
  });
  const csvData = [headers, ...body];
  const BOM = '\ufeff';
  const outputString = BOM + Papa.unparse(csvData);
  writeFile(outputPath, outputString);
}

async function getCustomDefinitions() {
  const manualAdditions = path.join(
    process.cwd(),
    'csv',
    'manual_additions',
    'decronym_format.csv'
  );
  const PARENT_CATEGORY = 'CUSTOM';
  const CATEGORY = PARENT_CATEGORY;
  const csvString = await fs.promises.readFile(manualAdditions, 'utf8');
  // clean first surrounding quote - important
  const cleanCSV = csvString.slice(1);
  const parsedCSV = Papa.parse(cleanCSV, {
    skipEmptyLines: true, // true is 'greedy', meaning skip delimiters, quotes, and whitespace.
    header: true, // converts to array of obj with column headers as prop names
  });
  const csvData = parsedCSV.data;
  const customDefinitions = csvData.map((e) =>
    Object.assign(new FunctionDefinition(PARENT_CATEGORY, CATEGORY), e)
  );
  return customDefinitions;
}

async function getDOM(url) {
  const resp = await fetch(url);
  const respText = await resp.text();
  return new JSDOM(respText).window.document;
}

async function getExcelFunctions() {
  const EX_BASE = 'https://support.microsoft.com';
  const PARENT_CATEGORY = 'Excel Function';
  const FUNC_URL_FRAGEMENT =
    '/en-us/office/excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188';
  const excelFuncsURL = EX_BASE + FUNC_URL_FRAGEMENT;
  const excelFuncsDocument = await getDOM(excelFuncsURL);
  const dataTable = excelFuncsDocument.querySelector('#tblID0EBDAAA');
  const rows = dataTable.querySelectorAll('tbody>tr');
  const rowArray = Array.from(rows);
  const excelFunctions = rowArray
    .map((e) => {
      const linkText = e.children[0]
        .querySelector('p>a')
        .text.replace(/ function(?:s)?/, '');
      const href = e.children[0].querySelector('p>a').href;
      const blurb = e.children[1]
        .querySelector('p')
        .textContent.replace('\n              ', '');
      const [cat, desc] = blurb.split(/:\s+/, 2);
      if (linkText.includes(',')) {
        // linkText contains two or more entries, e.g "MID, MIDB".
        // return a separate obj for each with same desc and link
        const titles = linkText.split(', ');
        return titles.map((title) => {
          return new FunctionDefinition(
            PARENT_CATEGORY,
            cat,
            title,
            desc,
            EX_BASE + href
          );
        });
      }
      return new FunctionDefinition(
        PARENT_CATEGORY,
        cat,
        linkText,
        desc,
        EX_BASE + href
      );
    })
    .flat();
  return excelFunctions;
}

// eslint-disable-next-line no-unused-vars
async function getPowerQueryFunctions() {
  const PQ_BASE = 'https://docs.microsoft.com/en-us/powerquery-m/';
  const PARENT_CATEGORY = 'Power Query M';
  const CATEGORIES_URL_FRAGMENT = 'power-query-m-function-reference';
  const categoriesURL = PQ_BASE + CATEGORIES_URL_FRAGMENT;
  const categoriesDocument = await getDOM(categoriesURL);
  const categoryNodes = categoriesDocument.querySelectorAll(
    'main#main.content ul li a'
  );
  const categories = Array.from(categoryNodes).map((e) => {
    return {
      category: e.innerHTML,
      href: PQ_BASE + e.href,
    };
  });
  const funcList = await Promise.all(categories.map((e) => getDOM(e.href)));
  const functionsByCategory = funcList.reduce((acc, cur, idx) => {
    const currentCategory = categories[idx].category;
    const rows = cur.querySelectorAll('table > tbody > tr');
    const rowArray = Array.from(rows);
    rowArray.forEach((e, i) => {
      // not all tables are links.
      if (e.children[0].querySelector('a')) {
        const linkText = e.children[0].querySelector('a').text;
        const href = e.children[0].querySelector('a').href;
        const desc = e.children[1].textContent;
        const curFunc = new FunctionDefinition(
          PARENT_CATEGORY,
          currentCategory,
          linkText,
          desc,
          PQ_BASE + href
        );
        acc.push(curFunc);
      }
    });
    return acc;
  }, []);

  return functionsByCategory;
}

// eslint-disable-next-line no-unused-vars
async function getGoogleSheetsFunctions() {
  const GS_BASE = 'https://support.google.com/docs';
  const PARENT_CATEGORY = 'Google Sheets Function';
  const URL_FRAGMENT = '/table/25273?hl=en-GB';
  const gsFuncsURL = GS_BASE + URL_FRAGMENT;
  const gsFuncsDocument = await getDOM(gsFuncsURL);
  const dataTable = gsFuncsDocument.querySelector(
    'section.table-section div.dyn-table table'
  );
  const rows = dataTable.querySelectorAll('tbody>tr');
  const rowArray = Array.from(rows);
  const gsFunctions = rowArray.map((e) => {
    const name = e.children[1].textContent;
    const desc = e.children[3].textContent.replace(' Learn more', '');
    const href = e.children[3].querySelector('a').href;
    const cat = e.children[0].textContent;
    return new FunctionDefinition(
      PARENT_CATEGORY,
      cat,
      name,
      desc,
      GS_BASE + href
    );
  });
  return gsFunctions;
}

// eslint-disable-next-line no-unused-vars
function createDecronyms(data) {
  console.log(`Found ${Object.keys(decronyms).length} decronyms`);
  const outputString = JSON.stringify(decronyms, null, 2);
  writeFile(JSON_PATH, outputString);
}

function dataToJSONFormat(data) {
  return data.reduce((acc, cur) => {
    const key = cur.decronymName;
    const value = mdLink(cur.decronymDescription, cur.link);
    if (
      Object.prototype.hasOwnProperty.call(acc, key) &&
      acc[key].indexOf(value) < 0
    ) {
      acc[key].push(value);
    } else {
      acc[key] = [value];
    }
    return acc;
  }, {});
}

async function createDiff(newJSON) {
  const currentData = await fs.promises.readFile(JSON_PATH);
  const currentJSON = JSON.parse(currentData);
  const propsInXNotInY = (x, y) => {
    const result = Object.keys(x).reduce((acc, cur) => {
      if (!Object.prototype.hasOwnProperty.call(y, cur)) {
        acc.push([cur, x[cur]]);
      }
      return acc;
    }, []);
    return result;
  };
  const addedData = propsInXNotInY(newJSON, currentJSON);
  const removedData = propsInXNotInY(currentJSON, newJSON);
  const headers = ['Name', 'Description'];
  const timestamp = (() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, '0');
    const day = `${date.getDate()}`.padStart(2, '0');
    return `${year}-${month}-${day}`;
  })();
  const diffReportElements = [`# Diff report ${timestamp}`];
  diffReportElements.push(`## ${addedData.length} Additions`);
  if (addedData.length) {
    diffReportElements.push(table([headers, ...addedData]));
  }
  diffReportElements.push(`## ${removedData.length} Removals`);
  if (removedData.length) {
    diffReportElements.push(table([headers, ...removedData]));
  }
  const diffReportBody = diffReportElements.join('\n\n');
  const filename = `diff_report_${timestamp}.md`;
  const outputPath = path.join(
    process.cwd(),
    'wiki_pages',
    'diff_reports',
    filename
  );
  writeFile(outputPath, diffReportBody);
  console.log(
    `${removedData.length + addedData.length} changes since last run`
  );
}

(async function main() {
  const customDefs = await getCustomDefinitions();
  const excelFuncs = await getExcelFunctions();
  const pqFuncs = await getPowerQueryFunctions();
  // const gsFuncs = await getGoogleSheetsFunctions();
  // const combined = [...customDefs, ...excelFuncs, ...pqFuncs, ...gsFuncs];
  const combined = [...customDefs, ...excelFuncs, ...pqFuncs];
  // const combined = [...customDefs, ...excelFuncs];
  // createCSV(combined);
  // createWikiPages(combined);
  const decronymsJSON = dataToJSONFormat(combined);
  await createDiff(decronymsJSON);
  // createDecronyms(decronymsJSON);
})();
