const fetch = require('node-fetch');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const table = require('markdown-table');
const Papa = require('papaparse');
const path = require('path');
const baseURL = 'https://support.microsoft.com';
const URL =
  baseURL +
  '/en-us/office/excel-functions-alphabetical-b3944572-255d-4efb-bb96-c6d90033e188';

function writeFile(outputFile, outputString) {
  fs.writeFile(outputFile, outputString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`${outputFile} Updated`);
    }
  });
}

function extractData(nodes) {
  return nodes.map((e) => {
    const linkText = e.children[0]
      .querySelector('p>a')
      .text.replace(' function', '');
    const href = e.children[0].querySelector('p>a').href;
    const blurb = e.children[1]
      .querySelector('p')
      .textContent.replace('\n              ', '');
    const [cat, desc] = blurb.split(/:\s+/, 2);
    return {
      name: linkText.split(',', 1)[0], // in case of any commas in var names
      link: baseURL + href,
      category: cat,
      description: desc,
    };
  });
}

function mdLink(text, href) {
  return `[${text}](${href})`;
}

function getNavbar(arr, active, pageName) {
  return arr.reduce((acc, cur) => {
    const val =
      cur === active
        ? `**${cur}**`
        : mdLink(
            cur,
            `/r/ExcelMod/wiki/${encodeURIComponent(
              pageName
            )}#wiki_${encodeURIComponent(cur.toLowerCase())}`
          );
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

function byCategory(data) {
  const uniqueCategories = [...new Set(data.map((e) => e.category))].sort();
  const pageHeader = '## Clippy Functions (By Category) \n\n';
  const createSection = (currentCategory) => {
    const funcsInCategory = data.filter((e) => e.category === currentCategory);
    const header = sectionHeader(currentCategory);
    const navbar = getNavbar(
      uniqueCategories,
      currentCategory,
      'bycategory_test'
    );
    const dataTable = createTable(funcsInCategory);
    return formatSection(header, navbar, dataTable);
  };
  const sections = uniqueCategories.map((e) => createSection(e));
  const outputString = pageHeader + sections.join('');
  const outputFile = path.join(process.cwd(), 'wiki_pages', 'ByCategory.md');
  writeFile(outputFile, outputString);
}

function alphabetical(data) {
  const startingLetters = data.map((e) => {
    return e.name.substring(0, 1).toUpperCase();
  });
  const uniqueLetters = [...new Set(startingLetters)].sort();
  const pageHeader = '## Clippy Functions (Alphabetical List) \n\n';
  const createSection = (currentLetter) => {
    const funcsInCategory = data.filter(
      (e) => e.name.substring(0, 1).toUpperCase() === currentLetter
    );
    const header = sectionHeader(currentLetter);
    const navbar = getNavbar(uniqueLetters, currentLetter, 'alphabetical_test');
    const dataTable = createTable(funcsInCategory);
    return formatSection(header, navbar, dataTable);
  };
  const sections = uniqueLetters.map((e) => createSection(e));
  const outputString = pageHeader + sections.join('');
  const outputFile = path.join(process.cwd(), 'wiki_pages', 'Alphabetical.md');
  writeFile(outputFile, outputString);
}

// eslint-disable-next-line no-unused-vars
function createCSV(data) {
  const csvPath = path.join(process.cwd(), 'clippy_ref_formulas.csv');
  const backupPath = path.join(
    process.cwd(),
    'old_csv',
    'backup_clippy_ref-formulas.csv'
  );
  const formatCSVRow = (cur) => {
    const contents = `**${cur.name}**:

${cur.description}

[Read more on Office Support.](${cur.link})`;
    return [cur.name, cur.link, 0, contents];
  };

  fs.readFile(csvPath, 'utf8', function read(err, csvString) {
    if (err) {
      throw err;
    }
    // create backup
    writeFile(backupPath, csvString);
    const parsed = Papa.parse(csvString, {
      skipEmptyLines: true, // true is 'greedy', meaning skip delimiters, quotes, and whitespace.
    });
    const csvData = parsed.data;
    const existingFN = csvData.map((e) => e[0]);
    const combined = data.reduce((acc, cur) => {
      if (existingFN.indexOf(cur.name) < 0) {
        const newRow = formatCSVRow(cur);
        acc.push(newRow);
      }
      return acc;
    }, csvData);
    const BOM = '\ufeff';
    const outputString = BOM + Papa.unparse(combined);

    writeFile(csvPath, outputString);
  });
}

function createDecronyms(data) {
  const csvPath = 'clippy_ref_formulas.csv';
  const formatCSVRow = (cur) => {
    const contents = `**${cur.name}**:

${cur.description}

[Read more on Office Support.](${cur.link})`;
    return [cur.name, cur.link, 0, contents];
  };

  fs.readFile(csvPath, 'utf8', function read(err, csvString) {
    if (err) {
      throw err;
    }
    const parsed = Papa.parse(csvString, {
      skipEmptyLines: true, // true is 'greedy', meaning skip delimiters, quotes, and whitespace.
    });
    const csvData = parsed.data;
    const existingFN = csvData.map((e) => e[0]);
    const combined = data.reduce((acc, cur) => {
      if (existingFN.indexOf(cur.name) < 0) {
        const newRow = formatCSVRow(cur);
        acc.push(newRow);
      }
      return acc;
    }, csvData);
    const obj = combined.reduce((acc, cur, idx) => {
      // skip column headers
      if (idx > 0) {
        acc[cur[0]] = [cur[3]];
      }
      return acc;
    }, {});
    const outputString = JSON.stringify(obj, null, 2);
    const ouputPath = path.join(process.cwd(), 'excelDecronyms.json');
    writeFile(ouputPath, outputString);
  });
}

fetch(URL)
  .then((res) => res.text())
  .then((text) => {
    const { document } = new JSDOM(text).window;
    const table = document.querySelector('#tblID0EBDAAA');
    const rows = table.querySelectorAll('tbody>tr');
    const rowArray = Array.from(rows);
    const data = extractData(rowArray);
    byCategory(data);
    alphabetical(data);
    createDecronyms(data);
    // createCSV(data);
  });
