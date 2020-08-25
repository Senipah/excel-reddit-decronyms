## Power Query M (By Category) 

### Accessing data functions
---

**Accessing data functions**
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                                              | Type and description                                                                                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [AccessControlEntry.ConditionToIdentities](https://docs.microsoft.com/en-us/powerquery-m/accesscontrolentry-conditiontoidentities)         | Returns a list of identities that the condition will accept.                                                                                                                                                    |
| [AccessControlKind.Allow](https://docs.microsoft.com/en-us/powerquery-m/accesscontrolkind-allow)                                           | Access is allowed.                                                                                                                                                                                              |
| [AccessControlKind.Deny](https://docs.microsoft.com/en-us/powerquery-m/accesscontrolkind-deny)                                             | Access is denied.                                                                                                                                                                                               |
| [Access.Database](https://docs.microsoft.com/en-us/powerquery-m/access-database)                                                           | Returns a structural representation of an Microsoft Access database.                                                                                                                                            |
| [ActiveDirectory.Domains](https://docs.microsoft.com/en-us/powerquery-m/activedirectory-domains)                                           | Returns a list of Active Directory domains in the same forest as the specified domain or of the current machine's domain if none is specified.                                                                  |
| [AdobeAnalytics.Cubes](https://docs.microsoft.com/en-us/powerquery-m/adobeanalytics-cubes)                                                 | Returns the report suites in Adobe Analytics.                                                                                                                                                                   |
| [AdoDotNet.DataSource](https://docs.microsoft.com/en-us/powerquery-m/adodotnet-datasource)                                                 | Returns the schema collection for an ADO.NET data source.                                                                                                                                                       |
| [AdoDotNet.Query](https://docs.microsoft.com/en-us/powerquery-m/adodotnet-query)                                                           | Returns the schema collection for an ADO.NET data source.                                                                                                                                                       |
| [AnalysisServices.Database](https://docs.microsoft.com/en-us/powerquery-m/analysisservices-database)                                       | Returns a table of multidimensional cubes or tabular models from the Analysis Services database.                                                                                                                |
| [AnalysisServices.Databases](https://docs.microsoft.com/en-us/powerquery-m/analysisservices-databases)                                     | Returns the Analysis Services databases on a particular host.                                                                                                                                                   |
| [AzureStorage.BlobContents](https://docs.microsoft.com/en-us/powerquery-m/azurestorage-blobcontents)                                       | Returns the content of the specified blob from an Azure storage vault.                                                                                                                                          |
| [AzureStorage.Blobs](https://docs.microsoft.com/en-us/powerquery-m/azurestorage-blobs)                                                     | Returns a navigational table containing all containers found in the Azure Storage account. Each row has the container name and a link to the container blobs.                                                   |
| [AzureStorage.DataLake](https://docs.microsoft.com/en-us/powerquery-m/azurestorage-datalake)                                               | Returns a navigational table containing the documents found in the specified container and its subfolders from Azure Data Lake Storage.                                                                         |
| [AzureStorage.DataLakeContents](https://docs.microsoft.com/en-us/powerquery-m/azurestorage-datalakecontents)                               | Returns the content of the specified file from an Azure Data Lake Storage filesystem.                                                                                                                           |
| [AzureStorage.Tables](https://docs.microsoft.com/en-us/powerquery-m/azurestorage-tables)                                                   | Returns a navigational table containing a row for each table found at the account URL from an Azure storage vault. Each row contains a link to the azure table.                                                 |
| [Cdm.Contents](https://docs.microsoft.com/en-us/powerquery-m/cdm-contents)                                                                 | This function is unavailable because it requires .NET 4.5.                                                                                                                                                      |
| [Cdpa.Database](https://docs.microsoft.com/en-us/powerquery-m/cdpa-database)                                                               | Provides access to a CDPA database.                                                                                                                                                                             |
| [Csv.Document](https://docs.microsoft.com/en-us/powerquery-m/csv-document)                                                                 | Returns the contents of a CSV document as a table using the specified encoding.                                                                                                                                 |
| [CsvStyle.QuoteAfterDelimiter](https://docs.microsoft.com/en-us/powerquery-m/csvstyle-quoteafterdelimiter)                                 | Quotes in a field are only significant immediately following the delimiter.                                                                                                                                     |
| [CsvStyle.QuoteAlways](https://docs.microsoft.com/en-us/powerquery-m/csvstyle-quotealways)                                                 | Quotes in a field are always significant regardless of where they appear.                                                                                                                                       |
| [Cube.AddAndExpandDimensionColumn](https://docs.microsoft.com/en-us/powerquery-m/cube-addandexpanddimensioncolumn)                         | Merges the specified dimension table, dimensionSelector, into the cube’s, cube, filter context and changes the dimensional granularity by expanding the specified set, attributeNames, of dimension attributes. |
| [Cube.AddMeasureColumn](https://docs.microsoft.com/en-us/powerquery-m/cube-addmeasurecolumn)                                               | Adds a column with the name column to the cube that contains the results of the measure measureSelector applied in the row context of each row.                                                                 |
| [Cube.ApplyParameter](https://docs.microsoft.com/en-us/powerquery-m/cube-applyparameter)                                                   | Returns a cube after applying parameter with arguments to cube.                                                                                                                                                 |
| [Cube.AttributeMemberId](https://docs.microsoft.com/en-us/powerquery-m/cube-attributememberid)                                             | Returns the unique member identifier from a member property value.                                                                                                                                              |
| [Cube.AttributeMemberProperty](https://docs.microsoft.com/en-us/powerquery-m/cube-attributememberproperty)                                 | Returns the property propertyName of dimension attribute attribute.                                                                                                                                             |
| [Cube.CollapseAndRemoveColumns](https://docs.microsoft.com/en-us/powerquery-m/cube-collapseandremovecolumns)                               | Changes the dimensional granularity of the filter context for the cube by collapsing the attributes mapped to the specified columns columnNames.                                                                |
| [Cube.Dimensions](https://docs.microsoft.com/en-us/powerquery-m/cube-dimensions)                                                           | Returns a table containing the set of available dimensions within the cube.                                                                                                                                     |
| [Cube.DisplayFolders](https://docs.microsoft.com/en-us/powerquery-m/cube-displayfolders)                                                   | Returns a nested tree of tables representing the display folder hierarchy of the objects (e.g. dimensions and measures) available for use in the cube.                                                          |
| [Cube.MeasureProperties](https://docs.microsoft.com/en-us/powerquery-m/cube-measureproperties)                                             | Returns a table containing the set of available properties for measures that are expanded in the cube.                                                                                                          |
| [Cube.MeasureProperty](https://docs.microsoft.com/en-us/powerquery-m/cube-measureproperty)                                                 | Returns the property of a measure.                                                                                                                                                                              |
| [Cube.Measures](https://docs.microsoft.com/en-us/powerquery-m/cube-measures)                                                               | Returns a table containing the set of available measures within the cube.                                                                                                                                       |
| [Cube.Parameters](https://docs.microsoft.com/en-us/powerquery-m/cube-parameters)                                                           | Returns a table containing the set of parameters that can be applied to cube.                                                                                                                                   |
| [Cube.Properties](https://docs.microsoft.com/en-us/powerquery-m/cube-properties)                                                           | Returns a table containing the set of available properties for dimensions that are expanded in the cube.                                                                                                        |
| [Cube.PropertyKey](https://docs.microsoft.com/en-us/powerquery-m/cube-propertykey)                                                         | Returns the key of property property.                                                                                                                                                                           |
| [Cube.ReplaceDimensions](https://docs.microsoft.com/en-us/powerquery-m/cube-replacedimensions)                                             | No Description Provided. Click here to go to the documentation page.                                                                                                                                            |
| [Cube.Transform](https://docs.microsoft.com/en-us/powerquery-m/cube-transform)                                                             | Applies the list cube functions, transforms, on the cube.                                                                                                                                                       |
| [DB2.Database](https://docs.microsoft.com/en-us/powerquery-m/db2-database)                                                                 | Returns a table of SQL tables and views available in a Db2 database.                                                                                                                                            |
| [Essbase.Cubes](https://docs.microsoft.com/en-us/powerquery-m/essbase-cubes)                                                               | Returns the cubes in an Essbase instance grouped by Essbase server.                                                                                                                                             |
| [Excel.CurrentWorkbook](https://docs.microsoft.com/en-us/powerquery-m/excel-currentworkbook)                                               | Returns the tables in the current Excel Workbook.                                                                                                                                                               |
| [Excel.Workbook](https://docs.microsoft.com/en-us/powerquery-m/excel-workbook)                                                             | Returns a table representing sheets in the given excel workbook.                                                                                                                                                |
| [Exchange.Contents](https://docs.microsoft.com/en-us/powerquery-m/exchange-contents)                                                       | Returns a table of contents from a Microsoft Exchange account.                                                                                                                                                  |
| [File.Contents](https://docs.microsoft.com/en-us/powerquery-m/file-contents)                                                               | Returns the binary contents of the file located at a path.                                                                                                                                                      |
| [Folder.Contents](https://docs.microsoft.com/en-us/powerquery-m/folder-contents)                                                           | Returns a table containing the properties and contents of the files and folders found at path.                                                                                                                  |
| [Folder.Files](https://docs.microsoft.com/en-us/powerquery-m/folder-files)                                                                 | Returns a table containing a row for each file found at a folder path, and subfolders. Each row contains properties of the folder or file and a link to its content.                                            |
| [GoogleAnalytics.Accounts](https://docs.microsoft.com/en-us/powerquery-m/googleanalytics-accounts)                                         | Returns the Google Analytics accounts for the current credential.                                                                                                                                               |
| [Hdfs.Contents](https://docs.microsoft.com/en-us/powerquery-m/hdfs-contents)                                                               | Returns a table containing a row for each folder and file found at the folder url, {0}, from a Hadoop file system. Each row contains properties of the folder or file and a link to its content.                |
| [Hdfs.Files](https://docs.microsoft.com/en-us/powerquery-m/hdfs-files)                                                                     | Returns a table containing a row for each file found at the folder url, {0}, and subfolders from a Hadoop file system. Each row contains properties of the file and a link to its content.                      |
| [HdInsight.Containers](https://docs.microsoft.com/en-us/powerquery-m/hdinsight-containers)                                                 | Returns a navigational table containing all containers found in the HDInsight account. Each row has the container name and table containing its files.                                                          |
| [HdInsight.Contents](https://docs.microsoft.com/en-us/powerquery-m/hdinsight-contents)                                                     | Returns a navigational table containing all containers found in the HDInsight account. Each row has the container name and table containing its files.                                                          |
| [HdInsight.Files](https://docs.microsoft.com/en-us/powerquery-m/hdinsight-files)                                                           | Returns a table containing a row for each folder and file found at the container URL, and subfolders from an HDInsight account. Each row contains properties of the file/folder and a link to its content.      |
| [Html.Table](https://docs.microsoft.com/en-us/powerquery-m/html-table)                                                                     | Returns a table containing the results of running the specified CSS selectors against the provided html.                                                                                                        |
| [Identity.From](https://docs.microsoft.com/en-us/powerquery-m/identity.from)                                                               | Creates an identity.                                                                                                                                                                                            |
| [Identity.IsMemberOf](https://docs.microsoft.com/en-us/powerquery-m/identity-ismemberof)                                                   | Determines whether an identity is a member of an identity collection.                                                                                                                                           |
| [IdentityProvider.Default](https://docs.microsoft.com/en-us/powerquery-m/identityprovider-default)                                         | The default identity provider for the current host.                                                                                                                                                             |
| [Informix.Database](https://docs.microsoft.com/en-us/powerquery-m/informix-database)                                                       | Returns a table of SQL tables and views available in an Informix database on server server in the database instance named database.                                                                             |
| [Json.Document](https://docs.microsoft.com/en-us/powerquery-m/json-document)                                                               | Returns the contents of a JSON document. The contents may be directly passed to the function as text, or it may be the binary value returned by a function like File.Contents.                                  |
| [Json.FromValue](https://docs.microsoft.com/en-us/powerquery-m/json-fromvalue)                                                             | Produces a JSON representation of a given value value with a text encoding specified by encoding.                                                                                                               |
| [MySQL.Database](https://docs.microsoft.com/en-us/powerquery-m/mysql-database)                                                             | Returns a table with data relating to the tables in the specified MySQL Database.                                                                                                                               |
| [OData.Feed](https://docs.microsoft.com/en-us/powerquery-m/odata-feed)                                                                     | Returns a table of OData feeds offered by an OData serviceUri.                                                                                                                                                  |
| [ODataOmitValues.Nulls](https://docs.microsoft.com/en-us/powerquery-m/odataomitvalues-nulls)                                               | Allows the OData service to omit null values.                                                                                                                                                                   |
| [Odbc.DataSource](https://docs.microsoft.com/en-us/powerquery-m/odbc-datasource)                                                           | Returns a table of SQL tables and views from the ODBC data source specified by the connection string connectionString.                                                                                          |
| [Odbc.InferOptions](https://docs.microsoft.com/en-us/powerquery-m/odbc-inferoptions)                                                       | Returns the result of trying to infer SQL capabilities for an ODBC driver.                                                                                                                                      |
| [Odbc.Query](https://docs.microsoft.com/en-us/powerquery-m/odbc-query)                                                                     | Connects to a generic provider with the given connection string and returns the result of evaluating the query.                                                                                                 |
| [OleDb.DataSource](https://docs.microsoft.com/en-us/powerquery-m/oledb-datasource)                                                         | Returns a table of SQL tables and views from the OLE DB data source specified by the connection string.                                                                                                         |
| [OleDb.Query](https://docs.microsoft.com/en-us/powerquery-m/oledb-query)                                                                   | Returns the result of running a native query on an OLE DB data source.                                                                                                                                          |
| [Oracle.Database](https://docs.microsoft.com/en-us/powerquery-m/oracle-database)                                                           | Returns a table with data relating to the tables in the specified Oracle Database.                                                                                                                              |
| [Parquet.Document](https://docs.microsoft.com/en-us/powerquery-m/parquet-document)                                                         | Returns the contents of the Parquet document as a table.                                                                                                                                                        |
| [Pdf.Tables](https://docs.microsoft.com/en-us/powerquery-m/pdf-tables)                                                                     | Returns any tables found in pdf.                                                                                                                                                                                |
| [PostgreSQL.Database](https://docs.microsoft.com/en-us/powerquery-m/postgresql-database)                                                   | Returns a table with data relating to the tables in the specified PostgreSQL Database.                                                                                                                          |
| [RData.FromBinary](https://docs.microsoft.com/en-us/powerquery-m/rdata-frombinary)                                                         | Returns a record of data frames from the RData file.                                                                                                                                                            |
| [Salesforce.Data](https://docs.microsoft.com/en-us/powerquery-m/salesforce-data)                                                           | Connects to the Salesforce Objects API and returns the set of available objects (i.e. Accounts).                                                                                                                |
| [Salesforce.Reports](https://docs.microsoft.com/en-us/powerquery-m/salesforce-reports)                                                     | Connects to the Salesforce Reports API and returns the set of available reports.                                                                                                                                |
| [SapBusinessWarehouse.Cubes](https://docs.microsoft.com/en-us/powerquery-m/sapbusinesswarehouse-cubes)                                     | Returns the InfoCubes and queries in an SAP Business Warehouse system grouped by InfoArea.                                                                                                                      |
| [SapBusinessWarehouseExecutionMode.DataStream](https://docs.microsoft.com/en-us/powerquery-m/sapbusinesswarehouseexecutionmode.datastream) | 'DataStream flattening mode' option for MDX execution in SAP Business Warehouse.                                                                                                                                |
| [SapBusinessWarehouseExecutionMode.BasXml](https://docs.microsoft.com/en-us/powerquery-m/sapbusinesswarehouseexecutionmode.basxml)         | 'bXML flattening mode' option for MDX execution in SAP Business Warehouse.                                                                                                                                      |
| [SapBusinessWarehouseExecutionMode.BasXmlGzip](https://docs.microsoft.com/en-us/powerquery-m/sapbusinesswarehouseexecutionmode.basxmlgzip) | 'Gzip compressed bXML flattening mode' option for MDX execution in SAP Business Warehouse. Recommended for low latency or high volume queries.                                                                  |
| [SapHana.Database](https://docs.microsoft.com/en-us/powerquery-m/saphana-database)                                                         | Returns the packages in an SAP HANA database.                                                                                                                                                                   |
| [SapHanaDistribution.All](https://docs.microsoft.com/en-us/powerquery-m/saphanadistribution-all)                                           | Returns the packages in an SAP HANA database.                                                                                                                                                                   |
| [SapHanaDistribution.Connection](https://docs.microsoft.com/en-us/powerquery-m/saphanadistribution-connection)                             | 'Connection' distribution option for SAP HANA.                                                                                                                                                                  |
| [SapHanaDistribution.Off](https://docs.microsoft.com/en-us/powerquery-m/saphanadistribution-off)                                           | 'Off' distribution option for SAP HANA.                                                                                                                                                                         |
| [SapHanaDistribution.Statement](https://docs.microsoft.com/en-us/powerquery-m/saphanadistribution-statement)                               | 'Statement' distribution option for SAP HANA.                                                                                                                                                                   |
| [SapHanaRangeOperator.Equals](https://docs.microsoft.com/en-us/powerquery-m/saphanarangeoperator-equals)                                   | 'Equals' range operator for SAP HANA input parameters.                                                                                                                                                          |
| [SapHanaRangeOperator.GreaterThan](https://docs.microsoft.com/en-us/powerquery-m/saphanarangeoperator-greaterthan)                         | 'Greater than' range operator for SAP HANA input parameters.                                                                                                                                                    |
| [SapHanaRangeOperator.GreaterThanOrEquals](https://docs.microsoft.com/en-us/powerquery-m/saphanarangeoperator-greaterthanorequals)         | 'Greater than or equals' range operator for SAP HANA input parameters.                                                                                                                                          |
| [SapHanaRangeOperator.LessThan](https://docs.microsoft.com/en-us/powerquery-m/saphanarangeoperator-lessthan)                               | 'Less than' range operator for SAP HANA input parameters.                                                                                                                                                       |
| [SapHanaRangeOperator.LessThanOrEquals](https://docs.microsoft.com/en-us/powerquery-m/saphanarangeoperator-lessthanorequals)               | 'Less than or equals' range operator for SAP HANA input parameters.                                                                                                                                             |
| [SapHanaRangeOperator.NotEquals](https://docs.microsoft.com/en-us/powerquery-m/saphanarangeoperator-equals)                                | 'Not equals' range operator for SAP HANA input parameters.                                                                                                                                                      |
| [SharePoint.Contents](https://docs.microsoft.com/en-us/powerquery-m/sharepoint-contents)                                                   | Returns a table containing a row for each folder and document found at the SharePoint site url. Each row contains properties of the folder or file and a link to its content.                                   |
| [SharePoint.Files](https://docs.microsoft.com/en-us/powerquery-m/sharepoint-files)                                                         | Returns a table containing a row for each document found at the SharePoint site url, and subfolders. Each row contains properties of the folder or file and a link to its content.                              |
| [SharePoint.Tables](https://docs.microsoft.com/en-us/powerquery-m/sharepoint-tables)                                                       | Returns a table containing the result of a SharePoint List as an OData feed.                                                                                                                                    |
| [Soda.Feed](https://docs.microsoft.com/en-us/powerquery-m/soda-feed)                                                                       | Returns the resulting table of a CSV file that can be accessed using the SODA 2.0 API. The URL must point to a valid SODA-compliant source that ends in a .csv extension.                                       |
| [Sql.Database](https://docs.microsoft.com/en-us/powerquery-m/sql-database)                                                                 | Returns a table containing SQL tables located on a SQL Server instance database.                                                                                                                                |
| [Sql.Databases](https://docs.microsoft.com/en-us/powerquery-m/sql-databases)                                                               | Returns a table with references to databases located on a SQL Server instance. Returns a navigation table.                                                                                                      |
| [Sybase.Database](https://docs.microsoft.com/en-us/powerquery-m/sybase-database)                                                           | Returns a table with data relating to the tables in the specified Sybase Database.                                                                                                                              |
| [Teradata.Database](https://docs.microsoft.com/en-us/powerquery-m/teradata-database)                                                       | Returns a table with data relating to the tables in the specified Teradata Database.                                                                                                                            |
| [WebAction.Request](https://docs.microsoft.com/en-us/powerquery-m/webaction-request)                                                       | Creates an action that, when executed, will return the results of performing a method request against url using HTTP as a binary value.                                                                         |
| [Web.BrowserContents](https://docs.microsoft.com/en-us/powerquery-m/web-browsercontents)                                                   | Returns the HTML for the specified url, as viewed by a web browser.                                                                                                                                             |
| [Web.Contents](https://docs.microsoft.com/en-us/powerquery-m/web-contents)                                                                 | Returns the contents downloaded from a web url as a binary value.                                                                                                                                               |
| [Web.Page](https://docs.microsoft.com/en-us/powerquery-m/web-page)                                                                         | Returns the contents of an HTML webpage as a table.                                                                                                                                                             |
| [WebMethod.Delete](https://docs.microsoft.com/en-us/powerquery-m/webmethod-delete)                                                         | Specifies the DELETE method for HTTP.                                                                                                                                                                           |
| [WebMethod.Get](https://docs.microsoft.com/en-us/powerquery-m/webmethod-get)                                                               | Specifies the GET method for HTTP.                                                                                                                                                                              |
| [WebMethod.Head](https://docs.microsoft.com/en-us/powerquery-m/webmethod-head)                                                             | Specifies the HEAD method for HTTP.                                                                                                                                                                             |
| [WebMethod.Patch](https://docs.microsoft.com/en-us/powerquery-m/webmethod-patch)                                                           | Specifies the PATCH method for HTTP.                                                                                                                                                                            |
| [WebMethod.Post](https://docs.microsoft.com/en-us/powerquery-m/webmethod-post)                                                             | Specifies the POST method for HTTP.                                                                                                                                                                             |
| [WebMethod.Put](https://docs.microsoft.com/en-us/powerquery-m/webmethod-put)                                                               | Specifies the PUT method for HTTP.                                                                                                                                                                              |
| [Xml.Document](https://docs.microsoft.com/en-us/powerquery-m/xml-document)                                                                 | Returns the contents of an XML document as a hierarchical table (list of records).                                                                                                                              |
| [Xml.Tables](https://docs.microsoft.com/en-us/powerquery-m/xml-tables)                                                                     | Returns the contents of an XML document as a nested collection of flattened tables.                                                                                                                             |

### Binary functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
**Binary functions**
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                                    | Type and description                                                                                                                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [BinaryFormat.7BitEncodedSignedInteger](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-7bitencodedsignedinteger)     | A binary format that reads a 64-bit signed integer that was encoded using a 7-bit variable-length encoding.                                                                                                                                    |
| [BinaryFormat.7BitEncodedUnsignedInteger](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-7bitencodedunsignedinteger) | A binary format that reads a 64-bit unsigned integer that was encoded using a 7-bit variable-length encoding.                                                                                                                                  |
| [BinaryFormat.Binary](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-binary)                                         | Returns a binary format that reads a binary value.                                                                                                                                                                                             |
| [BinaryFormat.Byte](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-byte)                                             | A binary format that reads an 8-bit unsigned integer.                                                                                                                                                                                          |
| [BinaryFormat.Choice](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-choice)                                         | Returns a binary format that chooses the next binary format based on a value that has already been read.                                                                                                                                       |
| [BinaryFormat.Decimal](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-decimal)                                       | A binary format that reads a .NET 16-byte decimal value.                                                                                                                                                                                       |
| [BinaryFormat.Double](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-double)                                         | A binary format that reads an 8-byte IEEE double-precision floating point value.                                                                                                                                                               |
| [BinaryFormat.Group](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-group)                                           | Returns a binary format that reads a group of items. Each item value is preceded by a unique key value. The result is a list of item values.                                                                                                   |
| [BinaryFormat.Length](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-length)                                         | Returns a binary format that limits the amount of data that can be read. Both BinaryFormat.List and BinaryFormat.Binary can be used to read until end of the data. BinaryFormat.Length can be used to limit the number of bytes that are read. |
| [BinaryFormat.List](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-list)                                             | Returns a binary format that reads a sequence of items and returns a list.                                                                                                                                                                     |
| [BinaryFormat.Null](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-null)                                             | A binary format that reads zero bytes and returns null.                                                                                                                                                                                        |
| [BinaryFormat.Record](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-record)                                         | Returns a binary format that reads a record. Each field in the record can have a different binary format.                                                                                                                                      |
| [BinaryFormat.SignedInteger16](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-signedinteger16)                       | A binary format that reads a 16-bit signed integer.                                                                                                                                                                                            |
| [BinaryFormat.SignedInteger32](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-signedinteger32)                       | A binary format that reads a 32-bit signed integer.                                                                                                                                                                                            |
| [BinaryFormat.SignedInteger64](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-signedinteger64)                       | A binary format that reads a 64-bit signed integer.                                                                                                                                                                                            |
| [BinaryFormat.Single](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-single)                                         | A binary format that reads a 4-byte IEEE single-precision floating point value.                                                                                                                                                                |
| [BinaryFormat.Text](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-text)                                             | Returns a binary format that reads a text value. The optional encoding value specifies the encoding of the text.                                                                                                                               |
| [BinaryFormat.Transform](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-transform)                                   | Returns a binary format that will transform the values read by another binary format.                                                                                                                                                          |
| [BinaryFormat.UnsignedInteger16](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-unsignedinteger16)                   | A binary format that reads a 16-bit unsigned integer.                                                                                                                                                                                          |
| [BinaryFormat.UnsignedInteger32](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-unsignedinteger32)                   | A binary format that reads a 32-bit unsigned integer.                                                                                                                                                                                          |
| [BinaryFormat.UnsignedInteger64](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-unsignedinteger64)                   | A binary format that reads a 64-bit unsigned integer.                                                                                                                                                                                          |
| [BinaryFormat.ByteOrder](https://docs.microsoft.com/en-us/powerquery-m/binaryformat-byteorder)                                   | Returns a binary format with the byte order specified by a function.                                                                                                                                                                           |
| [Table.PartitionValues](https://docs.microsoft.com/en-us/powerquery-m/table-partitionvalues)                                     | Returns information about how a table is partitioned.                                                                                                                                                                                          |
| [Binary.Buffer](https://docs.microsoft.com/en-us/powerquery-m/binary-buffer)                                                     | Buffers the binary value in memory. The result of this call is a stable binary value, which means it will have a deterministic length and order of bytes.                                                                                      |
| [Binary.Combine](https://docs.microsoft.com/en-us/powerquery-m/binary-combine)                                                   | Combines a list of binaries into a single binary.                                                                                                                                                                                              |
| [Binary.Compress](https://docs.microsoft.com/en-us/powerquery-m/binary-compress)                                                 | Compresses a binary value using the given compression type.                                                                                                                                                                                    |
| [Binary.Decompress](https://docs.microsoft.com/en-us/powerquery-m/binary-decompress)                                             | Decompresses a binary value using the given compression type.                                                                                                                                                                                  |
| [Binary.From](https://docs.microsoft.com/en-us/powerquery-m/binary-from)                                                         | Returns a binary value from the given value.                                                                                                                                                                                                   |
| [Binary.FromList](https://docs.microsoft.com/en-us/powerquery-m/binary-fromlist)                                                 | Converts a list of numbers into a binary value                                                                                                                                                                                                 |
| [Binary.FromText](https://docs.microsoft.com/en-us/powerquery-m/binary-fromtext)                                                 | Decodes data from a text form into binary.                                                                                                                                                                                                     |
| [Binary.InferContentType](https://docs.microsoft.com/en-us/powerquery-m/binary-infercontenttype)                                 | Returns a record with field Content.Type that contains the inferred MIME-type.                                                                                                                                                                 |
| [Binary.Length](https://docs.microsoft.com/en-us/powerquery-m/binary-length)                                                     | Returns the length of binary values.                                                                                                                                                                                                           |
| [Binary.ToList](https://docs.microsoft.com/en-us/powerquery-m/binary-tolist)                                                     | Converts a binary value into a list of numbers                                                                                                                                                                                                 |
| [Binary.ToText](https://docs.microsoft.com/en-us/powerquery-m/binary-totext)                                                     | Encodes binary data into a text form.                                                                                                                                                                                                          |
| [BinaryEncoding.Base64](https://docs.microsoft.com/en-us/powerquery-m/binaryencoding-base64)                                     | Constant to use as the encoding type when base-64 encoding is required.                                                                                                                                                                        |
| [BinaryEncoding.Hex](https://docs.microsoft.com/en-us/powerquery-m/binaryencoding-hex)                                           | Constant to use as the encoding type when hexadecimal encoding is required.                                                                                                                                                                    |
| [BinaryOccurrence.Optional](https://docs.microsoft.com/en-us/powerquery-m/binaryoccurrence-optional)                             | The item is expected to appear zero or one time in the input.                                                                                                                                                                                  |
| [BinaryOccurrence.Repeating](https://docs.microsoft.com/en-us/powerquery-m/binaryoccurrence-repeating)                           | The item is expected to appear zero or more times in the input.                                                                                                                                                                                |
| [BinaryOccurrence.Required](https://docs.microsoft.com/en-us/powerquery-m/binaryoccurrence-required)                             | The item is expected to appear once in the input.                                                                                                                                                                                              |
| [ByteOrder.BigEndian](https://docs.microsoft.com/en-us/powerquery-m/byteorder-bigendian)                                         | A possible value for the byteOrder parameter in BinaryFormat.ByteOrder. The most signficant byte appears first in Big Endian byte order.                                                                                                       |
| [ByteOrder.LittleEndian](https://docs.microsoft.com/en-us/powerquery-m/byteorder-littleendian)                                   | A possible value for the byteOrder parameter in BinaryFormat.ByteOrder. The least signficant byte appears first in Little Endian byte order.                                                                                                   |
| [Compression.Brotli](https://docs.microsoft.com/en-us/powerquery-m/compression-brotli)                                           | The compressed data is in the 'Brotli' format.                                                                                                                                                                                                 |
| [Compression.Deflate](https://docs.microsoft.com/en-us/powerquery-m/compression-deflate)                                         | The compressed data is in the 'Deflate' format.                                                                                                                                                                                                |
| [Compression.GZip](https://docs.microsoft.com/en-us/powerquery-m/compression-gzip)                                               | The compressed data is in the 'GZip' format.                                                                                                                                                                                                   |
| [Compression.LZ4](https://docs.microsoft.com/en-us/powerquery-m/compression-lz4)                                                 | The compressed data is in the 'LZ4' format.                                                                                                                                                                                                    |
| [Compression.None](https://docs.microsoft.com/en-us/powerquery-m/compression-none)                                               | The data is uncompressed.                                                                                                                                                                                                                      |
| [Compression.Snappy](https://docs.microsoft.com/en-us/powerquery-m/compression-snappy)                                           | The compressed data is in the 'Snappy' format.                                                                                                                                                                                                 |
| [Compression.Zstandard](https://docs.microsoft.com/en-us/powerquery-m/compression-zstandard)                                     | The compressed data is in the 'Zstandard' format.                                                                                                                                                                                              |
| [Occurrence.Optional](https://docs.microsoft.com/en-us/powerquery-m/occurrence-optional)                                         | The item is expected to appear zero or one time in the input.                                                                                                                                                                                  |
| [Occurrence.Repeating](https://docs.microsoft.com/en-us/powerquery-m/occurrence-repeating)                                       | The item is expected to appear zero or more times in the input.                                                                                                                                                                                |
| [Occurrence.Required](https://docs.microsoft.com/en-us/powerquery-m/occurrence-required)                                         | The item is expected to appear once in the input.                                                                                                                                                                                              |
| [#binary](https://docs.microsoft.com/en-us/powerquery-m/sharpbinary)                                                             | Creates a binary value from numbers or text.                                                                                                                                                                                                   |

### Combiner functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
**Combiner functions**
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                            | Type and description                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- |
| [Combiner.CombineTextByDelimiter](https://docs.microsoft.com/en-us/powerquery-m/combiner-combinetextbydelimiter)         | Returns a function that combines a list of text into a single text using the specified delimiter.              |
| [Combiner.CombineTextByEachDelimiter](https://docs.microsoft.com/en-us/powerquery-m/combiner-combinetextbyeachdelimiter) | Returns a function that combines a list of text into a single text using each specified delimiter in sequence. |
| [Combiner.CombineTextByLengths](https://docs.microsoft.com/en-us/powerquery-m/combiner-combinetextbylengths)             | Returns a function that combines a list of text into a single text using the specified lengths.                |
| [Combiner.CombineTextByPositions](https://docs.microsoft.com/en-us/powerquery-m/combiner-combinetextbypositions)         | Returns a function that combines a list of text into a single text using the specified positions.              |
| [Combiner.CombineTextByRanges](https://docs.microsoft.com/en-us/powerquery-m/combiner-combinetextbyranges)               | Returns a function that combines a list of text into a single text using the specified positions and lengths.  |

### Comparer functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
**Comparer functions**
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                          | Type and description                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Comparer.Equals](https://docs.microsoft.com/en-us/powerquery-m/comparer-equals)                       | Returns a logical value based on the equality check over the two given values.                                                                                                                                                                         |
| [Comparer.FromCulture](https://docs.microsoft.com/en-us/powerquery-m/comparer-fromculture)             | Returns a comparer function given the culture and a logical value for case sensitivity for the comparison. The default value for ignoreCase is false. The value for culture are well known text representations of locales used in the .NET framework. |
| [Comparer.Ordinal](https://docs.microsoft.com/en-us/powerquery-m/comparer-ordinal)                     | Returns a comparer function which uses Ordinal rules to compare values.                                                                                                                                                                                |
| [Comparer.OrdinalIgnoreCase](https://docs.microsoft.com/en-us/powerquery-m/comparer-ordinalignorecase) | Returns a case-insensitive comparer function which uses Ordinal rules to compare the provided values x and y.                                                                                                                                          |
| [Culture.Current](https://docs.microsoft.com/en-us/powerquery-m/culture-current)                       | Returns the current culture of the system.                                                                                                                                                                                                             |

### Date functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
**Date functions**
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                          | Type and description                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Date.AddDays](https://docs.microsoft.com/en-us/powerquery-m/date-adddays)                             | Returns a Date/DateTime/DateTimeZone value with the day portion incremented by the number of days provided. It also handles incrementing the month and year potions of the value as appropriate.                                         |
| [Date.AddMonths](https://docs.microsoft.com/en-us/powerquery-m/date-addmonths)                         | Returns a DateTime value with the month portion incremented by n months.                                                                                                                                                                 |
| [Date.AddQuarters](https://docs.microsoft.com/en-us/powerquery-m/date-addquarters)                     | Returns a Date/DateTime/DateTimeZone value incremented by the number of quarters provided. Each quarter is defined as a duration of three months. It also handles incrementing the year potion of the value as appropriate.              |
| [Date.AddWeeks](https://docs.microsoft.com/en-us/powerquery-m/date-addweeks)                           | Returns a Date/DateTime/DateTimeZone value incremented by the number of weeks provided. Each week is defined as a duration of seven days. It also handles incrementing the month and year potions of the value as appropriate.           |
| [Date.AddYears](https://docs.microsoft.com/en-us/powerquery-m/date-addyears)                           | Returns a DateTime value with the year portion incremented by n years.                                                                                                                                                                   |
| [Date.Day](https://docs.microsoft.com/en-us/powerquery-m/date-day)                                     | Returns the day for a DateTime value.                                                                                                                                                                                                    |
| [Date.DayOfWeek](https://docs.microsoft.com/en-us/powerquery-m/date-dayofweek)                         | Returns a number (from 0 to 6) indicating the day of the week of the provided value.                                                                                                                                                     |
| [Date.DayOfWeekName](https://docs.microsoft.com/en-us/powerquery-m/date-dayofweekname)                 | Returns the day of the week name.                                                                                                                                                                                                        |
| [Date.DayOfYear](https://docs.microsoft.com/en-us/powerquery-m/date-dayofyear)                         | Returns a number that represents the day of the year from a DateTime value.                                                                                                                                                              |
| [Date.DaysInMonth](https://docs.microsoft.com/en-us/powerquery-m/date-daysinmonth)                     | Returns the number of days in the month from a DateTime value.                                                                                                                                                                           |
| [Date.EndOfDay](https://docs.microsoft.com/en-us/powerquery-m/date-endofday)                           | Returns a DateTime value for the end of the day.                                                                                                                                                                                         |
| [Date.EndOfMonth](https://docs.microsoft.com/en-us/powerquery-m/date-endofmonth)                       | Returns a DateTime value for the end of the month.                                                                                                                                                                                       |
| [Date.EndOfQuarter](https://docs.microsoft.com/en-us/powerquery-m/date-endofquarter)                   | Returns a Date/DateTime/DateTimeZone value representing the end of the quarter. The date and time portions are reset to their terminating values for the quarter. The timezone information is persisted.                                 |
| [Date.EndOfWeek](https://docs.microsoft.com/en-us/powerquery-m/date-endofweek)                         | Returns a DateTime value for the end of the week.                                                                                                                                                                                        |
| [Date.EndOfYear](https://docs.microsoft.com/en-us/powerquery-m/date-endofyear)                         | Returns a DateTime value for the end of the year.                                                                                                                                                                                        |
| [Date.From](https://docs.microsoft.com/en-us/powerquery-m/date-from)                                   | Returns a date value from a value.                                                                                                                                                                                                       |
| [Date.FromText](https://docs.microsoft.com/en-us/powerquery-m/date-fromtext)                           | Returns a Date value from a set of date formats and culture value.                                                                                                                                                                       |
| [Date.IsInCurrentDay](https://docs.microsoft.com/en-us/powerquery-m/date-isincurrentday)               | Indicates whether the given datetime value dateTime occurs during the current day, as determined by the current date and time on the system.                                                                                             |
| [Date.IsInCurrentMonth](https://docs.microsoft.com/en-us/powerquery-m/date-isincurrentmonth)           | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the current month, as determined by the current date and time on the system.                                                             |
| [Date.IsInCurrentQuarter](https://docs.microsoft.com/en-us/powerquery-m/date-isincurrentquarter)       | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the current quarter, as determined by the current date and time on the system.                                                           |
| [Date.IsInCurrentWeek](https://docs.microsoft.com/en-us/powerquery-m/date-isincurrentweek)             | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the current week, as determined by the current date and time on the system.                                                              |
| [Date.IsInCurrentYear](https://docs.microsoft.com/en-us/powerquery-m/date-isincurrentyear)             | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the current year, as determined by the current date and time on the system.                                                              |
| [Date.IsInNextDay](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextday)                     | Indicates whether the given datetime value dateTime occurs during the next day, as determined by the current date and time on the system.                                                                                                |
| [Date.IsInNextMonth](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextmonth)                 | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the next month, as determined by the current date and time on the system.                                                                |
| [Date.IsInNextNDays](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextndays)                 | Indicates whether the given datetime value dateTime occurs during the next number of days, as determined by the current date and time on the system.                                                                                     |
| [Date.IsInNextNMonths](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextnmonths)             | Indicates whether the given datetime value dateTime occurs during the next number of months, as determined by the current date and time on the system.                                                                                   |
| [Date.IsInNextNQuarters](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextnquarters)         | Indicates whether the given datetime value dateTime occurs during the next number of quarters, as determined by the current date and time on the system.                                                                                 |
| [Date.IsInNextNWeeks](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextnweeks)               | Indicates whether the given datetime value dateTime occurs during the next number of weeks, as determined by the current date and time on the system.                                                                                    |
| [Date.IsInNextNYears](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextnyears)               | Indicates whether the given datetime value dateTime occurs during the next number of years, as determined by the current date and time on the system.                                                                                    |
| [Date.IsInNextQuarter](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextquarter)             | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the next quarter, as determined by the current date and time on the system.                                                              |
| [Date.IsInNextWeek](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextweek)                   | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the next week, as determined by the current date and time on the system.                                                                 |
| [Date.IsInNextYear](https://docs.microsoft.com/en-us/powerquery-m/date-isinnextyear)                   | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the next year, as determined by the current date and time on the system.                                                                 |
| [Date.IsInPreviousDay](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousday)             | Indicates whether the given datetime value dateTime occurs during the previous day, as determined by the current date and time on the system.                                                                                            |
| [Date.IsInPreviousMonth](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousmonth)         | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the previous month, as determined by the current date and time on the system.                                                            |
| [Date.IsInPreviousNDays](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousndays)         | Indicates whether the given datetime value dateTime occurs during the previous number of days, as determined by the current date and time on the system.                                                                                 |
| [Date.IsInPreviousNMonths](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousnmonths)     | Indicates whether the given datetime value dateTime occurs during the previous number of months, as determined by the current date and time on the system.                                                                               |
| [Date.IsInPreviousNQuarters](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousnquarters) | Indicates whether the given datetime value dateTime occurs during the previous number of quarters, as determined by the current date and time on the system.                                                                             |
| [Date.IsInPreviousNWeeks](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousnweeks)       | Indicates whether the given datetime value dateTime occurs during the previous number of weeks, as determined by the current date and time on the system.                                                                                |
| [Date.IsInPreviousNYears](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousnyears)       | Indicates whether the given datetime value dateTime occurs during the previous number of years, as determined by the current date and time on the system.                                                                                |
| [Date.IsInPreviousQuarter](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousquarter)     | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the previous quarter, as determined by the current date and time on the system.                                                          |
| [Date.IsInPreviousWeek](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousweek)           | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the previous week, as determined by the current date and time on the system.                                                             |
| [Date.IsInPreviousYear](https://docs.microsoft.com/en-us/powerquery-m/date-isinpreviousyear)           | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred during the previous year, as determined by the current date and time on the system.                                                             |
| [Date.IsInYearToDate](https://docs.microsoft.com/en-us/powerquery-m/date-isinyeartodate)               | Returns a logical value indicating whether the given Date/DateTime/DateTimeZone occurred in the period starting January 1st of the current year and ending on the current day, as determined by the current date and time on the system. |
| [Date.IsLeapYear](https://docs.microsoft.com/en-us/powerquery-m/date-isleapyear)                       | Returns a logical value indicating whether the year portion of a DateTime value is a leap year.                                                                                                                                          |
| [Date.Month](https://docs.microsoft.com/en-us/powerquery-m/date-month)                                 | Returns the month from a DateTime value.                                                                                                                                                                                                 |
| [Date.MonthName](https://docs.microsoft.com/en-us/powerquery-m/date-monthname)                         | Returns the name of the month component.                                                                                                                                                                                                 |
| [Date.QuarterOfYear](https://docs.microsoft.com/en-us/powerquery-m/date-quarterofyear)                 | Returns a number between 1 and 4 for the quarter of the year from a DateTime value.                                                                                                                                                      |
| [Date.StartOfDay](https://docs.microsoft.com/en-us/powerquery-m/date-startofday)                       | Returns a DateTime value for the start of the day.                                                                                                                                                                                       |
| [Date.StartOfMonth](https://docs.microsoft.com/en-us/powerquery-m/date-startofmonth)                   | Returns a DateTime value representing the start of the month.                                                                                                                                                                            |
| [Date.StartOfQuarter](https://docs.microsoft.com/en-us/powerquery-m/date-startofquarter)               | Returns a DateTime value representing the start of the quarter.                                                                                                                                                                          |
| [Date.StartOfWeek](https://docs.microsoft.com/en-us/powerquery-m/date-startofweek)                     | Returns a DateTime value representing the start of the week.                                                                                                                                                                             |
| [Date.StartOfYear](https://docs.microsoft.com/en-us/powerquery-m/date-startofyear)                     | Returns a DateTime value representing the start of the year.                                                                                                                                                                             |
| [Date.ToRecord](https://docs.microsoft.com/en-us/powerquery-m/date-torecord)                           | Returns a record containing parts of a Date value.                                                                                                                                                                                       |
| [Date.ToText](https://docs.microsoft.com/en-us/powerquery-m/date-totext)                               | Returns a text value from a Date value.                                                                                                                                                                                                  |
| [Date.WeekOfMonth](https://docs.microsoft.com/en-us/powerquery-m/date-weekofmonth)                     | Returns a number for the count of week in the current month.                                                                                                                                                                             |
| [Date.WeekOfYear](https://docs.microsoft.com/en-us/powerquery-m/date-weekofyear)                       | Returns a number for the count of week in the current year.                                                                                                                                                                              |
| [Date.Year](https://docs.microsoft.com/en-us/powerquery-m/date-year)                                   | Returns the year from a DateTime value.                                                                                                                                                                                                  |
| [#date](https://docs.microsoft.com/en-us/powerquery-m/sharpdate)                                       | Creates a date value from year, month, and day.                                                                                                                                                                                          |
| [Day.Sunday](https://docs.microsoft.com/en-us/powerquery-m/day-sunday)                                 | Represents Sunday.                                                                                                                                                                                                                       |
| [Day.Monday](https://docs.microsoft.com/en-us/powerquery-m/day-monday)                                 | Represents Monday.                                                                                                                                                                                                                       |
| [Day.Tuesday](https://docs.microsoft.com/en-us/powerquery-m/day-tuesday)                               | Represents Tuesday.                                                                                                                                                                                                                      |
| [Day.Wednesday](https://docs.microsoft.com/en-us/powerquery-m/day-wednesday)                           | Represents Wednesday.                                                                                                                                                                                                                    |
| [Day.Thursday](https://docs.microsoft.com/en-us/powerquery-m/day-thursday)                             | Represents Thursday.                                                                                                                                                                                                                     |
| [Day.Friday](https://docs.microsoft.com/en-us/powerquery-m/day-friday)                                 | Represents Friday.                                                                                                                                                                                                                       |
| [Day.Saturday](https://docs.microsoft.com/en-us/powerquery-m/day-saturday)                             | Represents Saturday.                                                                                                                                                                                                                     |

### DateTime functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
**DateTime functions**
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                | Type and description                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| [DateTime.AddZone](https://docs.microsoft.com/en-us/powerquery-m/datetime-addzone)                           | Adds the timezonehours as an offset to the input datetime value and returns a new datetimezone value.                                              |
| [DateTime.Date](https://docs.microsoft.com/en-us/powerquery-m/datetime-date)                                 | Returns a date part from a DateTime value                                                                                                          |
| [DateTime.FixedLocalNow](https://docs.microsoft.com/en-us/powerquery-m/datetime-fixedlocalnow)               | Returns a DateTime value set to the current date and time on the system.                                                                           |
| [DateTime.From](https://docs.microsoft.com/en-us/powerquery-m/datetime-from)                                 | Returns a datetime value from a value.                                                                                                             |
| [DateTime.FromFileTime](https://docs.microsoft.com/en-us/powerquery-m/datetime-fromfiletime)                 | Returns a DateTime value from the supplied number.                                                                                                 |
| [DateTime.FromText](https://docs.microsoft.com/en-us/powerquery-m/datetime-fromtext)                         | Returns a DateTime value from a set of date formats and culture value.                                                                             |
| [DateTime.IsInCurrentHour](https://docs.microsoft.com/en-us/powerquery-m/datetime-isincurrenthour)           | Indicates whether the given datetime value occurs during the current hour, as determined by the current date and time on the system.               |
| [DateTime.IsInCurrentMinute](https://docs.microsoft.com/en-us/powerquery-m/datetime-isincurrentminute)       | Indicates whether the given datetime value occurs during the current minute, as determined by the current date and time on the system.             |
| [DateTime.IsInCurrentSecond](https://docs.microsoft.com/en-us/powerquery-m/datetime-isincurrentsecond)       | Indicates whether the given datetime value occurs during the current second, as determined by the current date and time on the system.             |
| [DateTime.IsInNextHour](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinnexthour)                 | Indicates whether the given datetime value occurs during the next hour, as determined by the current date and time on the system.                  |
| [DateTime.IsInNextMinute](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinnextminute)             | Indicates whether the given datetime value occurs during the next minute, as determined by the current date and time on the system.                |
| [DateTime.IsInNextNHours](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinnextnhours)             | Indicates whether the given datetime value occurs during the next number of hours, as determined by the current date and time on the system.       |
| [DateTime.IsInNextNMinutes](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinnextnminutes)         | Indicates whether the given datetime value occurs during the next number of minutes, as determined by the current date and time on the system.     |
| [DateTime.IsInNextNSeconds](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinnextnseconds)         | Indicates whether the given datetime value occurs during the next number of seconds, as determined by the current date and time on the system.     |
| [DateTime.IsInNextSecond](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinnextsecond)             | Indicates whether the given datetime value occurs during the next second, as determined by the current date and time on the system.                |
| [DateTime.IsInPreviousHour](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinprevioushour)         | Indicates whether the given datetime value occurs during the previous hour, as determined by the current date and time on the system.              |
| [DateTime.IsInPreviousMinute](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinpreviousminute)     | Indicates whether the given datetime value occurs during the previous minute, as determined by the current date and time on the system.            |
| [DateTime.IsInPreviousNHours](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinpreviousnhours)     | Indicates whether the given datetime value occurs during the previous number of hours, as determined by the current date and time on the system.   |
| [DateTime.IsInPreviousNMinutes](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinpreviousnminutes) | Indicates whether the given datetime value occurs during the previous number of minutes, as determined by the current date and time on the system. |
| [DateTime.IsInPreviousNSeconds](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinpreviousnseconds) | Indicates whether the given datetime value occurs during the previous number of seconds, as determined by the current date and time on the system. |
| [DateTime.IsInPreviousSecond](https://docs.microsoft.com/en-us/powerquery-m/datetime-isinprevioussecond)     | Indicates whether the given datetime value occurs during the previous second, as determined by the current date and time on the system.            |
| [DateTime.LocalNow](https://docs.microsoft.com/en-us/powerquery-m/datetime-localnow)                         | Returns a datetime value set to the current date and time on the system.                                                                           |
| [DateTime.Time](https://docs.microsoft.com/en-us/powerquery-m/datetime-time)                                 | Returns a time part from a DateTime value.                                                                                                         |
| [DateTime.ToRecord](https://docs.microsoft.com/en-us/powerquery-m/datetime-torecord)                         | Returns a record containing parts of a DateTime value.                                                                                             |
| [DateTime.ToText](https://docs.microsoft.com/en-us/powerquery-m/datetime-totext)                             | Returns a text value from a DateTime value.                                                                                                        |
| [#datetime](https://docs.microsoft.com/en-us/powerquery-m/sharpdatetime)                                     | Creates a datetime value from year, month, day, hour, minute, and second.                                                                          |

### DateTimeZone functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
**DateTimeZone functions**
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                          | Type and description                                                                                        |
| ------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| [DateTimeZone.FixedLocalNow](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-fixedlocalnow) | Returns a DateTimeZone value set to the current date, time, and timezone offset on the system.              |
| [DateTimeZone.FixedUtcNow](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-fixedutcnow)     | Returns the current date and time in UTC (the GMT timezone).                                                |
| [DateTimeZone.From](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-from)                   | Returns a datetimezone value from a value.                                                                  |
| [DateTimeZone.FromFileTime](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-fromfiletime)   | Returns a DateTimeZone from a number value.                                                                 |
| [DateTimeZone.FromText](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-fromtext)           | Returns a DateTimeZone value from a set of date formats and culture value.                                  |
| [DateTimeZone.LocalNow](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-localnow)           | Returns a DateTime value set to the current system date and time.                                           |
| [DateTimeZone.RemoveZone](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-removezone)       | Returns a datetime value with the zone information removed from the input datetimezone value.               |
| [DateTimeZone.SwitchZone](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-switchzone)       | Changes the timezone information for the input DateTimeZone.                                                |
| [DateTimeZone.ToLocal](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-tolocal)             | Returns a DateTime value from the local time zone.                                                          |
| [DateTimeZone.ToRecord](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-torecord)           | Returns a record containing parts of a DateTime value.                                                      |
| [DateTimeZone.ToText](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-totext)               | Returns a text value from a DateTime value.                                                                 |
| [DateTimeZone.ToUtc](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-toutc)                 | Returns a DateTime value to the Utc time zone.                                                              |
| [DateTimeZone.UtcNow](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-utcnow)               | Returns a DateTime value set to the current system date and time in the Utc timezone.                       |
| [DateTimeZone.ZoneHours](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-zonehours)         | Returns a time zone hour value from a DateTime value.                                                       |
| [DateTimeZone.ZoneMinutes](https://docs.microsoft.com/en-us/powerquery-m/datetimezone-zoneminutes)     | Returns a time zone minute value from a DateTime value.                                                     |
| [#datetimezone](https://docs.microsoft.com/en-us/powerquery-m/sharpdatetimezone)                       | Creates a datetimezone value from year, month, day, hour, minute, second, offset-hours, and offset-minutes. |

### Duration functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
**Duration functions**
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                | Type and description                                          |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Duration.Days](https://docs.microsoft.com/en-us/powerquery-m/duration-days)                 | Returns the day component of a Duration value.                |
| [Duration.From](https://docs.microsoft.com/en-us/powerquery-m/duration-from)                 | Returns a duration value from a value.                        |
| [Duration.FromText](https://docs.microsoft.com/en-us/powerquery-m/duration-fromtext)         | Returns a Duration value from a text value.                   |
| [Duration.Hours](https://docs.microsoft.com/en-us/powerquery-m/duration-hours)               | Returns an hour component of a Duration value.                |
| [Duration.Minutes](https://docs.microsoft.com/en-us/powerquery-m/duration-minutes)           | Returns a minute component of a Duration value.               |
| [Duration.Seconds](https://docs.microsoft.com/en-us/powerquery-m/duration-seconds)           | Returns a second component of a Duration value.               |
| [Duration.ToRecord](https://docs.microsoft.com/en-us/powerquery-m/duration-torecord)         | Returns a record with parts of a Duration value.              |
| [Duration.TotalDays](https://docs.microsoft.com/en-us/powerquery-m/duration-totaldays)       | Returns the total magnitude of days from a Duration value.    |
| [Duration.TotalHours](https://docs.microsoft.com/en-us/powerquery-m/duration-totalhours)     | Returns the total magnitude of hours from a Duration value.   |
| [Duration.TotalMinutes](https://docs.microsoft.com/en-us/powerquery-m/duration-totalminutes) | Returns the total magnitude of minutes from a Duration value. |
| [Duration.TotalSeconds](https://docs.microsoft.com/en-us/powerquery-m/duration-totalseconds) | Returns the total magnitude of seconds from a duration value. |
| [Duration.ToText](https://docs.microsoft.com/en-us/powerquery-m/duration-totext)             | Returns a text value from a Duration value.                   |
| [#duration](https://docs.microsoft.com/en-us/powerquery-m/sharpduration)                     | Creates a duration value from days, hour, minute, and second. |

### Error handling
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
**Error handling**
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                  | Type and description                                                                                                                                |
| ---------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Diagnostics.ActivityId](https://docs.microsoft.com/en-us/powerquery-m/diagnostics-activityid) | Returns an opaque identifier for the currently-running evaluation.                                                                                  |
| [Diagnostics.Trace](https://docs.microsoft.com/en-us/powerquery-m/diagnostics-trace)           | Writes a trace message, if tracing is enabled, and returns value.                                                                                   |
| [Error.Record](https://docs.microsoft.com/en-us/powerquery-m/error-record)                     | Returns a record containing fields “Reason”, “Message”, and “Detail” set to the provided values. The record can be used to raise or throw an error. |
| [TraceLevel.Critical](https://docs.microsoft.com/en-us/powerquery-m/tracelevel-critical)       | Returns 1, the value for Critical trace level.                                                                                                      |
| [TraceLevel.Error](https://docs.microsoft.com/en-us/powerquery-m/tracelevel-error)             | Returns 2, the value for Error trace level.                                                                                                         |
| [TraceLevel.Information](https://docs.microsoft.com/en-us/powerquery-m/tracelevel-information) | Returns 4, the value for Information trace level.                                                                                                   |
| [TraceLevel.Verbose](https://docs.microsoft.com/en-us/powerquery-m/tracelevel-verbose)         | Returns 5, the value for Verbose trace level.                                                                                                       |
| [TraceLevel.Warning](https://docs.microsoft.com/en-us/powerquery-m/tracelevel-warning)         | Returns 3, the value for Warning trace level.                                                                                                       |

### Expression functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
**Expression functions**
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                | Type and description                                          |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| [Expression.Constant](https://docs.microsoft.com/en-us/powerquery-m/expression-constant)     | Returns the M source code representation of a constant value. |
| [Expression.Evaluate](https://docs.microsoft.com/en-us/powerquery-m/expression-evaluate)     | Returns the result of evaluating an M expression.             |
| [Expression.Identifier](https://docs.microsoft.com/en-us/powerquery-m/expression-identifier) | Returns the M source code representation of an identifier.    |

### Function values
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
**Function values**
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                | Type and description                                                                                                                                         |
| -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Function.From](https://docs.microsoft.com/en-us/powerquery-m/function-from)                 | Takes a unary function function and creates a new function with the type functionType that constructs a list out of its arguments and passes it to function. |
| [Function.Invoke](https://docs.microsoft.com/en-us/powerquery-m/function-invoke)             | Invokes the given function using the specified and returns the result.                                                                                       |
| [Function.InvokeAfter](https://docs.microsoft.com/en-us/powerquery-m/function-invokeafter)   | Returns the result of invoking function after duration delay has passed.                                                                                     |
| [Function.IsDataSource](https://docs.microsoft.com/en-us/powerquery-m/function-isdatasource) | Returns whether or not function is considered a data source.                                                                                                 |
| [Function.ScalarVector](https://docs.microsoft.com/en-us/powerquery-m/function-scalarvector) | Returns a scalar function of type scalarFunctionType that invokes vectorFunction with a single row of arguments and returns its single output.               |

### Lines functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
**Lines functions**
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                      | Type and description                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Lines.FromBinary](https://docs.microsoft.com/en-us/powerquery-m/lines-frombinary) | Converts a binary value to a list of text values split at lines breaks.                                                                                                                                                       |
| [Lines.FromText](https://docs.microsoft.com/en-us/powerquery-m/lines-fromtext)     | Converts a text value to a list of text values split at lines breaks.                                                                                                                                                         |
| [Lines.ToBinary](https://docs.microsoft.com/en-us/powerquery-m/lines-tobinary)     | Converts a list of text into a binary value using the specified encoding and lineSeparator.The specified lineSeparator is appended to each line. If not specified then the carriage return and line feed characters are used. |
| [Lines.ToText](https://docs.microsoft.com/en-us/powerquery-m/lines-totext)         | Converts a list of text into a single text. The specified lineSeparator is appended to each line. If not specified then the carriage return and line feed characters are used.                                                |

### List functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
**List functions**
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                        | Type and description                                                                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [List.Count](https://docs.microsoft.com/en-us/powerquery-m/list-count)                               | Returns the number of items in a list.                                                                                                                                                                                                                                                                                                            |
| [List.NonNullCount](https://docs.microsoft.com/en-us/powerquery-m/list-nonnullcount)                 | Returns the number of items in a list excluding null values                                                                                                                                                                                                                                                                                       |
| [List.IsEmpty](https://docs.microsoft.com/en-us/powerquery-m/list-isempty)                           | Returns whether a list is empty.                                                                                                                                                                                                                                                                                                                  |
| [List.Alternate](https://docs.microsoft.com/en-us/powerquery-m/list-alternate)                       | Returns a list with the items alternated from the original list based on a count, optional repeatInterval, and an optional offset.                                                                                                                                                                                                                |
| [List.Buffer](https://docs.microsoft.com/en-us/powerquery-m/list-buffer)                             | Buffers the list in memory. The result of this call is a stable list, which means it will have a determinimic count, and order of items.                                                                                                                                                                                                          |
| [List.Distinct](https://docs.microsoft.com/en-us/powerquery-m/list-distinct)                         | Filters a list down by removing duplicates. An optional equation criteria value can be specified to control equality comparison. The first value from each equality group is chosen.                                                                                                                                                              |
| [List.FindText](https://docs.microsoft.com/en-us/powerquery-m/list-findtext)                         | Searches a list of values, including record fields, for a text value.                                                                                                                                                                                                                                                                             |
| [List.First](https://docs.microsoft.com/en-us/powerquery-m/list-first)                               | Returns the first value of the list or the specified default if empty. Returns the first item in the list, or the optional default value, if the list is empty. If the list is empty and a default value is not specified, the function returns.                                                                                                  |
| [List.FirstN](https://docs.microsoft.com/en-us/powerquery-m/list-firstn)                             | Returns the first set of items in the list by specifying how many items to return or a qualifying condition provided by countOrCondition.                                                                                                                                                                                                         |
| [List.InsertRange](https://docs.microsoft.com/en-us/powerquery-m/list-insertrange)                   | Inserts items from values at the given index in the input list.                                                                                                                                                                                                                                                                                   |
| [List.IsDistinct](https://docs.microsoft.com/en-us/powerquery-m/list-isdistinct)                     | Returns whether a list is distinct.                                                                                                                                                                                                                                                                                                               |
| [List.Last](https://docs.microsoft.com/en-us/powerquery-m/list-last)                                 | Returns the last set of items in the list by specifying how many items to return or a qualifying condition provided by countOrCondition.                                                                                                                                                                                                          |
| [List.LastN](https://docs.microsoft.com/en-us/powerquery-m/list-lastn)                               | Returns the last set of items in a list by specifying how many items to return or a qualifying condition.                                                                                                                                                                                                                                         |
| [List.MatchesAll](https://docs.microsoft.com/en-us/powerquery-m/list-matchesall)                     | Returns true if all items in a list meet a condition.                                                                                                                                                                                                                                                                                             |
| [List.MatchesAny](https://docs.microsoft.com/en-us/powerquery-m/list-matchesany)                     | Returns true if any item in a list meets a condition.                                                                                                                                                                                                                                                                                             |
| [List.Positions](https://docs.microsoft.com/en-us/powerquery-m/list-positions)                       | Returns a list of positions for an input list.                                                                                                                                                                                                                                                                                                    |
| [List.Range](https://docs.microsoft.com/en-us/powerquery-m/list-range)                               | Returns a count items starting at an offset.                                                                                                                                                                                                                                                                                                      |
| [List.Select](https://docs.microsoft.com/en-us/powerquery-m/list-select)                             | Selects the items that match a condition.                                                                                                                                                                                                                                                                                                         |
| [List.Single](https://docs.microsoft.com/en-us/powerquery-m/list-single)                             | Returns the single item of the list or throws an Expression.Error if the list has more than one item.                                                                                                                                                                                                                                             |
| [List.SingleOrDefault](https://docs.microsoft.com/en-us/powerquery-m/list-singleordefault)           | Returns a single item from a list.                                                                                                                                                                                                                                                                                                                |
| [List.Skip](https://docs.microsoft.com/en-us/powerquery-m/list-skip)                                 | Skips the first item of the list. Given an empty list, it returns an empty list. This function takes an optional parameter countOrCondition to support skipping multiple values.                                                                                                                                                                  |
| [List.Accumulate](https://docs.microsoft.com/en-us/powerquery-m/list-accumulate)                     | Accumulates a result from the list. Starting from the initial value seed this function applies the accumulator function and returns the final result.                                                                                                                                                                                             |
| [List.Combine](https://docs.microsoft.com/en-us/powerquery-m/list-combine)                           | Merges a list of lists into single list.                                                                                                                                                                                                                                                                                                          |
| [List.RemoveRange](https://docs.microsoft.com/en-us/powerquery-m/list-removerange)                   | Returns a list that removes count items starting at offset. The default count is 1.                                                                                                                                                                                                                                                               |
| [List.RemoveFirstN](https://docs.microsoft.com/en-us/powerquery-m/list-removefirstn)                 | Returns a list with the specified number of elements removed from the list starting at the first element. The number of elements removed depends on the optional countOrCondition parameter.                                                                                                                                                      |
| [List.RemoveItems](https://docs.microsoft.com/en-us/powerquery-m/list-removeitems)                   | Removes items from list1 that are present in list2, and returns a new list.                                                                                                                                                                                                                                                                       |
| [List.RemoveLastN](https://docs.microsoft.com/en-us/powerquery-m/list-removelastn)                   | Returns a list with the specified number of elements removed from the list starting at the last element. The number of elements removed depends on the optional countOrCondition parameter.                                                                                                                                                       |
| [List.Repeat](https://docs.microsoft.com/en-us/powerquery-m/list-repeat)                             | Returns a list that repeats the contents of an input list count times.                                                                                                                                                                                                                                                                            |
| [List.ReplaceRange](https://docs.microsoft.com/en-us/powerquery-m/list-replacerange)                 | Returns a list that replaces count values in a list with a replaceWith list starting at an index.                                                                                                                                                                                                                                                 |
| [List.RemoveMatchingItems](https://docs.microsoft.com/en-us/powerquery-m/list-removematchingitems)   | Removes all occurrences of the given values in the list.                                                                                                                                                                                                                                                                                          |
| [List.RemoveNulls](https://docs.microsoft.com/en-us/powerquery-m/list-removenulls)                   | Removes null values from a list.                                                                                                                                                                                                                                                                                                                  |
| [List.ReplaceMatchingItems](https://docs.microsoft.com/en-us/powerquery-m/list-replacematchingitems) | Replaces occurrences of existing values in the list with new values using the provided equationCriteria. Old and new values are provided by the replacements parameters. An optional equation criteria value can be specified to control equality comparisons. For details of replacement operations and equation criteria, see Parameter Values. |
| [List.ReplaceValue](https://docs.microsoft.com/en-us/powerquery-m/list-replacevalue)                 | Searches a list of values for the value and replaces each occurrence with the replacement value.                                                                                                                                                                                                                                                  |
| [List.Reverse](https://docs.microsoft.com/en-us/powerquery-m/list-reverse)                           | Returns a list that reverses the items in a list.                                                                                                                                                                                                                                                                                                 |
| [List.Split](https://docs.microsoft.com/en-us/powerquery-m/list-split)                               | Splits the specified list into a list of lists using the specified page size.                                                                                                                                                                                                                                                                     |
| [List.Transform](https://docs.microsoft.com/en-us/powerquery-m/list-transform)                       | Performs the function on each item in the list and returns the new list.                                                                                                                                                                                                                                                                          |
| [List.TransformMany](https://docs.microsoft.com/en-us/powerquery-m/list-transformmany)               | Returns a list whose elements are projected from the input list.                                                                                                                                                                                                                                                                                  |
| [List.AllTrue](https://docs.microsoft.com/en-us/powerquery-m/list-alltrue)                           | Returns true if all expressions in a list are true                                                                                                                                                                                                                                                                                                |
| [List.AnyTrue](https://docs.microsoft.com/en-us/powerquery-m/list-anytrue)                           | Returns true if any expression in a list in true                                                                                                                                                                                                                                                                                                  |
| [List.Contains](https://docs.microsoft.com/en-us/powerquery-m/list-contains)                         | Returns true if a value is found in a list.                                                                                                                                                                                                                                                                                                       |
| [List.ContainsAll](https://docs.microsoft.com/en-us/powerquery-m/list-containsall)                   | Returns true if all items in values are found in a list.                                                                                                                                                                                                                                                                                          |
| [List.ContainsAny](https://docs.microsoft.com/en-us/powerquery-m/list-containsany)                   | Returns true if any item in values is found in a list.                                                                                                                                                                                                                                                                                            |
| [List.PositionOf](https://docs.microsoft.com/en-us/powerquery-m/list-positionof)                     | Finds the first occurrence of a value in a list and returns its position.                                                                                                                                                                                                                                                                         |
| [List.PositionOfAny](https://docs.microsoft.com/en-us/powerquery-m/list-positionofany)               | Finds the first occurrence of any value in values and returns its position.                                                                                                                                                                                                                                                                       |
| [List.Difference](https://docs.microsoft.com/en-us/powerquery-m/list-difference)                     | Returns the items in list 1 that do not appear in list 2. Duplicate values are supported.                                                                                                                                                                                                                                                         |
| [List.Intersect](https://docs.microsoft.com/en-us/powerquery-m/list-intersect)                       | Returns a list from a list of lists and intersects common items in individual lists. Duplicate values are supported.                                                                                                                                                                                                                              |
| [List.Union](https://docs.microsoft.com/en-us/powerquery-m/list-union)                               | Returns a list from a list of lists and unions the items in the individual lists. The returned list contains all items in any input lists. Duplicate values are matched as part of the Union.                                                                                                                                                     |
| [List.Zip](https://docs.microsoft.com/en-us/powerquery-m/list-zip)                                   | Returns a list of lists combining items at the same position.                                                                                                                                                                                                                                                                                     |
| [List.Max](https://docs.microsoft.com/en-us/powerquery-m/list-max)                                   | Returns the maximum item in a list, or the optional default value if the list is empty.                                                                                                                                                                                                                                                           |
| [List.MaxN](https://docs.microsoft.com/en-us/powerquery-m/list-maxn)                                 | Returns the maximum values in the list. After the rows are sorted, optional parameters may be specified to further filter the result                                                                                                                                                                                                              |
| [List.Median](https://docs.microsoft.com/en-us/powerquery-m/list-median)                             | Returns the median item from a list.                                                                                                                                                                                                                                                                                                              |
| [List.Min](https://docs.microsoft.com/en-us/powerquery-m/list-min)                                   | Returns the minimum item in a list, or the optional default value if the list is empty.                                                                                                                                                                                                                                                           |
| [List.MinN](https://docs.microsoft.com/en-us/powerquery-m/list-minn)                                 | Returns the minimum values in a list.                                                                                                                                                                                                                                                                                                             |
| [List.Sort](https://docs.microsoft.com/en-us/powerquery-m/list-sort)                                 | Returns a sorted list using comparison criterion.                                                                                                                                                                                                                                                                                                 |
| [List.Average](https://docs.microsoft.com/en-us/powerquery-m/list-average)                           | Returns an average value from a list in the datatype of the values in the list.                                                                                                                                                                                                                                                                   |
| [List.Mode](https://docs.microsoft.com/en-us/powerquery-m/list-mode)                                 | Returns an item that appears most commonly in a list.                                                                                                                                                                                                                                                                                             |
| [List.Modes](https://docs.microsoft.com/en-us/powerquery-m/list-modes)                               | Returns all items that appear with the same maximum frequency.                                                                                                                                                                                                                                                                                    |
| [List.StandardDeviation](https://docs.microsoft.com/en-us/powerquery-m/list-standarddeviation)       | Returns the standard deviation from a list of values. List.StandardDeviation performs a sample based estimate. The result is a number for numbers, and a duration for DateTimes and Durations.                                                                                                                                                    |
| [List.Sum](https://docs.microsoft.com/en-us/powerquery-m/list-sum)                                   | Returns the sum from a list.                                                                                                                                                                                                                                                                                                                      |
| [List.Covariance](https://docs.microsoft.com/en-us/powerquery-m/list-covariance)                     | Returns the covariance from two lists as a number.                                                                                                                                                                                                                                                                                                |
| [List.Product](https://docs.microsoft.com/en-us/powerquery-m/list-product)                           | Returns the product from a list of numbers.                                                                                                                                                                                                                                                                                                       |
| [List.Dates](https://docs.microsoft.com/en-us/powerquery-m/list-dates)                               | Returns a list of date values from size count, starting at start and adds an increment to every value.                                                                                                                                                                                                                                            |
| [List.DateTimes](https://docs.microsoft.com/en-us/powerquery-m/list-datetimes)                       | Returns a list of datetime values from size count, starting at start and adds an increment to every value.                                                                                                                                                                                                                                        |
| [List.DateTimeZones](https://docs.microsoft.com/en-us/powerquery-m/list-datetimezones)               | Returns a list of of datetimezone values from size count, starting at start and adds an increment to every value.                                                                                                                                                                                                                                 |
| [List.Durations](https://docs.microsoft.com/en-us/powerquery-m/list-durations)                       | Returns a list of durations values from size count, starting at start and adds an increment to every value.                                                                                                                                                                                                                                       |
| [List.Generate](https://docs.microsoft.com/en-us/powerquery-m/list-generate)                         | Generates a list from a value function, a condition function, a next function, and an optional transformation function on the values.                                                                                                                                                                                                             |
| [List.Numbers](https://docs.microsoft.com/en-us/powerquery-m/list-numbers)                           | Returns a list of numbers from size count starting at initial, and adds an increment. The increment defaults to 1.                                                                                                                                                                                                                                |
| [List.Random](https://docs.microsoft.com/en-us/powerquery-m/list-random)                             | Returns a list of count random numbers, with an optional seed parameter.                                                                                                                                                                                                                                                                          |
| [List.Times](https://docs.microsoft.com/en-us/powerquery-m/list-times)                               | Returns a list of time values of size count, starting at start.                                                                                                                                                                                                                                                                                   |

### Logical functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
**Logical functions**
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                      | Type and description                                        |
| ---------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| [Logical.From](https://docs.microsoft.com/en-us/powerquery-m/logical-from)         | Returns a logical value from a value.                       |
| [Logical.FromText](https://docs.microsoft.com/en-us/powerquery-m/logical-fromtext) | Returns a logical value of true or false from a text value. |
| [Logical.ToText](https://docs.microsoft.com/en-us/powerquery-m/logical-totext)     | Returns a text value from a logical value.                  |

### Number functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
**Number functions**
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                        | Type and description                                                                                  |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| [Number.E](https://docs.microsoft.com/en-us/powerquery-m/number-e)                                   | Returns 2.7182818284590451, the value of e up to 16 decimal digits.                                   |
| [Number.Epsilon](https://docs.microsoft.com/en-us/powerquery-m/number-epsilon)                       | Returns the smallest possible number.                                                                 |
| [Number.NaN](https://docs.microsoft.com/en-us/powerquery-m/number-nan)                               | Represents 0/0.                                                                                       |
| [Number.NegativeInfinity](https://docs.microsoft.com/en-us/powerquery-m/number-negativeinfinity)     | Represents -1/0.                                                                                      |
| [Number.PI](https://docs.microsoft.com/en-us/powerquery-m/number-pi)                                 | Returns 3.1415926535897931, the value for Pi up to 16 decimal digits.                                 |
| [Number.PositiveInfinity](https://docs.microsoft.com/en-us/powerquery-m/number-positiveinfinity)     | Represents 1/0.                                                                                       |
| [Number.IsEven](https://docs.microsoft.com/en-us/powerquery-m/number-iseven)                         | Returns true if a value is an even number.                                                            |
| [Number.IsNaN](https://docs.microsoft.com/en-us/powerquery-m/number-isnan)                           | Returns true if a value is Number.NaN.                                                                |
| [Number.IsOdd](https://docs.microsoft.com/en-us/powerquery-m/number-isodd)                           | Returns true if a value is an odd number.                                                             |
| [Byte.From](https://docs.microsoft.com/en-us/powerquery-m/byte-from)                                 | Returns a 8-bit integer number value from the given value.                                            |
| [Currency.From](https://docs.microsoft.com/en-us/powerquery-m/currency-from)                         | Returns a currency value from the given value.                                                        |
| [Decimal.From](https://docs.microsoft.com/en-us/powerquery-m/decimal-from)                           | Returns a decimal number value from the given value.                                                  |
| [Double.From](https://docs.microsoft.com/en-us/powerquery-m/double-from)                             | Returns a Double number value from the given value.                                                   |
| [Int8.From](https://docs.microsoft.com/en-us/powerquery-m/int8-from)                                 | Returns a signed 8-bit integer number value from the given value.                                     |
| [Int16.From](https://docs.microsoft.com/en-us/powerquery-m/int16-from)                               | Returns a 16-bit integer number value from the given value.                                           |
| [Int32.From](https://docs.microsoft.com/en-us/powerquery-m/int32-from)                               | Returns a 32-bit integer number value from the given value.                                           |
| [Int64.From](https://docs.microsoft.com/en-us/powerquery-m/int64-from)                               | Returns a 64-bit integer number value from the given value.                                           |
| [Number.From](https://docs.microsoft.com/en-us/powerquery-m/number-from)                             | Returns a number value from a value.                                                                  |
| [Number.FromText](https://docs.microsoft.com/en-us/powerquery-m/number-fromtext)                     | Returns a number value from a text value.                                                             |
| [Number.ToText](https://docs.microsoft.com/en-us/powerquery-m/number-totext)                         | Returns a text value from a number value.                                                             |
| [Percentage.From](https://docs.microsoft.com/en-us/powerquery-m/percentage-from)                     | Returns a percentage value from the given value.                                                      |
| [Single.From](https://docs.microsoft.com/en-us/powerquery-m/single-from)                             | Returns a Single number value from the given value.                                                   |
| [Number.Round](https://docs.microsoft.com/en-us/powerquery-m/number-round)                           | Returns a nullable number (n) if value is an integer.                                                 |
| [Number.RoundAwayFromZero](https://docs.microsoft.com/en-us/powerquery-m/number-roundawayfromzero)   | Returns Number.RoundUp(value) when value >= 0 and Number.RoundDown(value) when value < 0.             |
| [Number.RoundDown](https://docs.microsoft.com/en-us/powerquery-m/number-rounddown)                   | Returns the largest integer less than or equal to a number value.                                     |
| [Number.RoundTowardZero](https://docs.microsoft.com/en-us/powerquery-m/number-roundtowardzero)       | Returns Number.RoundDown(x) when x >= 0 and Number.RoundUp(x) when x < 0.                             |
| [Number.RoundUp](https://docs.microsoft.com/en-us/powerquery-m/number-roundup)                       | Returns the larger integer greater than or equal to a number value.                                   |
| [Number.Abs](https://docs.microsoft.com/en-us/powerquery-m/number-abs)                               | Returns the absolute value of a number.                                                               |
| [Number.Combinations](https://docs.microsoft.com/en-us/powerquery-m/number-combinations)             | Returns the number of combinations of a given number of items for the optional combination size.      |
| [Number.Exp](https://docs.microsoft.com/en-us/powerquery-m/number-exp)                               | Returns a number representing e raised to a power.                                                    |
| [Number.Factorial](https://docs.microsoft.com/en-us/powerquery-m/number-factorial)                   | Returns the factorial of a number.                                                                    |
| [Number.IntegerDivide](https://docs.microsoft.com/en-us/powerquery-m/number-integerdivide)           | Divides two numbers and returns the whole part of the resulting number.                               |
| [Number.Ln](https://docs.microsoft.com/en-us/powerquery-m/number-ln)                                 | Returns the natural logarithm of a number.                                                            |
| [Number.Log](https://docs.microsoft.com/en-us/powerquery-m/number-log)                               | Returns the logarithm of a number to the base.                                                        |
| [Number.Log10](https://docs.microsoft.com/en-us/powerquery-m/number-log10)                           | Returns the base-10 logarithm of a number.                                                            |
| [Number.Mod](https://docs.microsoft.com/en-us/powerquery-m/number-mod)                               | Divides two numbers and returns the remainder of the resulting number.                                |
| [Number.Permutations](https://docs.microsoft.com/en-us/powerquery-m/number-permutations)             | Returns the number of total permutatons of a given number of items for the optional permutation size. |
| [Number.Power](https://docs.microsoft.com/en-us/powerquery-m/number-power)                           | Returns a number raised by a power.                                                                   |
| [Number.Sign](https://docs.microsoft.com/en-us/powerquery-m/number-sign)                             | Returns 1 for positive numbers, -1 for negative numbers or 0 for zero.                                |
| [Number.Sqrt](https://docs.microsoft.com/en-us/powerquery-m/number-sqrt)                             | Returns the square root of a number.                                                                  |
| [Number.Random](https://docs.microsoft.com/en-us/powerquery-m/number-random)                         | Returns a random fractional number between 0 and 1.                                                   |
| [Number.RandomBetween](https://docs.microsoft.com/en-us/powerquery-m/number-randombetween)           | Returns a random number between the two given number values.                                          |
| [Number.Acos](https://docs.microsoft.com/en-us/powerquery-m/number-acos)                             | Returns the arccosine of a number.                                                                    |
| [Number.Asin](https://docs.microsoft.com/en-us/powerquery-m/number-asin)                             | Returns the arcsine of a number.                                                                      |
| [Number.Atan](https://docs.microsoft.com/en-us/powerquery-m/number-atan)                             | Returns the arctangent of a number.                                                                   |
| [Number.Atan2](https://docs.microsoft.com/en-us/powerquery-m/number-atan2)                           | Returns the arctangent of the division of two numbers.                                                |
| [Number.Cos](https://docs.microsoft.com/en-us/powerquery-m/number-cos)                               | Returns the cosine of a number.                                                                       |
| [Number.Cosh](https://docs.microsoft.com/en-us/powerquery-m/number-cosh)                             | Returns the hyperbolic cosine of a number.                                                            |
| [Number.Sin](https://docs.microsoft.com/en-us/powerquery-m/number-sin)                               | Returns the sine of a number.                                                                         |
| [Number.Sinh](https://docs.microsoft.com/en-us/powerquery-m/number-sinh)                             | Returns the hyperbolic sine of a number.                                                              |
| [Number.Tan](https://docs.microsoft.com/en-us/powerquery-m/number-tan)                               | Returns the tangent of a number.                                                                      |
| [Number.Tanh](https://docs.microsoft.com/en-us/powerquery-m/number-tanh)                             | Returns the hyperbolic tangent of a number.                                                           |
| [Number.BitwiseAnd](https://docs.microsoft.com/en-us/powerquery-m/number-bitwiseand)                 | Returns the result of a bitwise AND operation on the provided operands.                               |
| [Number.BitwiseNot](https://docs.microsoft.com/en-us/powerquery-m/number-bitwisenot)                 | Returns the result of a bitwise NOT operation on the provided operands.                               |
| [Number.BitwiseOr](https://docs.microsoft.com/en-us/powerquery-m/number-bitwiseor)                   | Returns the result of a bitwise OR operation on the provided operands.                                |
| [Number.BitwiseShiftLeft](https://docs.microsoft.com/en-us/powerquery-m/number-bitwiseshiftleft)     | Returns the result of a bitwise shift left operation on the operands.                                 |
| [Number.BitwiseShiftRight](https://docs.microsoft.com/en-us/powerquery-m/number-bitwiseshiftright)   | Returns the result of a bitwise shift right operation on the operands.                                |
| [Number.BitwiseXor](https://docs.microsoft.com/en-us/powerquery-m/number-bitwisexor)                 | Returns the result of a bitwise XOR operation on the provided operands.                               |
| [RoundingMode.AwayFromZero](https://docs.microsoft.com/en-us/powerquery-m/roundingmode-awayfromzero) | RoundingMode.AwayFromZero                                                                             |
| [RoundingMode.Down](https://docs.microsoft.com/en-us/powerquery-m/roundingmode-down)                 | RoundingMode.Down                                                                                     |
| [RoundingMode.ToEven](https://docs.microsoft.com/en-us/powerquery-m/roundingmode-toeven)             | RoundingMode.ToEven                                                                                   |
| [RoundingMode.TowardZero](https://docs.microsoft.com/en-us/powerquery-m/roundingmode-towardzero)     | RoundingMode.TowardZero                                                                               |
| [RoundingMode.Up](https://docs.microsoft.com/en-us/powerquery-m/roundingmode-up)                     | RoundingMode.Up                                                                                       |

### Record functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
**Record functions**
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                            | Type and description                                                                                                                                                                                                                                                               |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Record.FieldCount](https://docs.microsoft.com/en-us/powerquery-m/record-fieldcount)                     | Returns the number of fields in a record.                                                                                                                                                                                                                                          |
| [Record.HasFields](https://docs.microsoft.com/en-us/powerquery-m/record-hasfields)                       | Returns true if the field name or field names are present in a record.                                                                                                                                                                                                             |
| [Geography.FromWellKnownText](https://docs.microsoft.com/en-us/powerquery-m/geography-fromwellknowntext) | Translates text representing a geographic value in Well-Known Text (WKT) format into a structured record.                                                                                                                                                                          |
| [Geography.ToWellKnownText](https://docs.microsoft.com/en-us/powerquery-m/geography-towellknowntext)     | Translates a structured geographic point value into its Well-Known Text (WKT) representation.                                                                                                                                                                                      |
| [GeographyPoint.From](https://docs.microsoft.com/en-us/powerquery-m/geographypoint-from)                 | Creates a record representing a geographic point from parts.                                                                                                                                                                                                                       |
| [Geometry.FromWellKnownText](https://docs.microsoft.com/en-us/powerquery-m/geometry-fromwellknowntext)   | Translates text representing a geometric value in Well-Known Text (WKT) format into a structured record.                                                                                                                                                                           |
| [Geometry.ToWellKnownText](https://docs.microsoft.com/en-us/powerquery-m/geometry-towellknowntext)       | Translates a structured geometric point value into its Well-Known Text (WKT) representation.                                                                                                                                                                                       |
| [GeometryPoint.From](https://docs.microsoft.com/en-us/powerquery-m/geometrypoint-from)                   | Creates a record representing a geometric point from parts.                                                                                                                                                                                                                        |
| [Record.AddField](https://docs.microsoft.com/en-us/powerquery-m/record-addfield)                         | Adds a field from a field name and value.                                                                                                                                                                                                                                          |
| [Record.Combine](https://docs.microsoft.com/en-us/powerquery-m/record-combine)                           | Combines the records in a list.                                                                                                                                                                                                                                                    |
| [Record.RemoveFields](https://docs.microsoft.com/en-us/powerquery-m/record-removefields)                 | Returns a new record that reorders the given fields with respect to each other. Any fields not specified remain in their original locations.                                                                                                                                       |
| [Record.RenameFields](https://docs.microsoft.com/en-us/powerquery-m/record-renamefields)                 | Returns a new record that renames the fields specified. The resultant fields will retain their original order. This function supports swapping and chaining field names. However, all target names plus remaining field names must constitute a unique set or an error will occur. |
| [Record.ReorderFields](https://docs.microsoft.com/en-us/powerquery-m/record-reorderfields)               | Returns a new record that reorders fields relative to each other. Any fields not specified remain in their original locations. Requires two or more fields.                                                                                                                        |
| [Record.TransformFields](https://docs.microsoft.com/en-us/powerquery-m/record-transformfields)           | Transforms fields by applying transformOperations. For more more information about values supported by transformOperations, see Parameter Values.                                                                                                                                  |
| [Record.Field](https://docs.microsoft.com/en-us/powerquery-m/record-field)                               | Returns the value of the given field. This function can be used to dynamically create field lookup syntax for a given record. In that way it is a dynamic verison of the record[field] syntax.                                                                                     |
| [Record.FieldNames](https://docs.microsoft.com/en-us/powerquery-m/record-fieldnames)                     | Returns a list of field names in order of the record's fields.                                                                                                                                                                                                                     |
| [Record.FieldOrDefault](https://docs.microsoft.com/en-us/powerquery-m/record-fieldordefault)             | Returns the value of a field from a record, or the default value if the field does not exist.                                                                                                                                                                                      |
| [Record.FieldValues](https://docs.microsoft.com/en-us/powerquery-m/record-fieldvalues)                   | Returns a list of field values in order of the record's fields.                                                                                                                                                                                                                    |
| [Record.SelectFields](https://docs.microsoft.com/en-us/powerquery-m/record-selectfields)                 | Returns a new record that contains the fields selected from the input record. The original order of the fields is maintained.                                                                                                                                                      |
| [Record.FromList](https://docs.microsoft.com/en-us/powerquery-m/record-fromlist)                         | Returns a record given a list of field values and a set of fields.                                                                                                                                                                                                                 |
| [Record.FromTable](https://docs.microsoft.com/en-us/powerquery-m/record-fromtable)                       | Returns a record from a table of records containing field names and values.                                                                                                                                                                                                        |
| [Record.ToList](https://docs.microsoft.com/en-us/powerquery-m/record-tolist)                             | Returns a list of values containing the field values of the input record.                                                                                                                                                                                                          |
| [Record.ToTable](https://docs.microsoft.com/en-us/powerquery-m/record-totable)                           | Returns a table of records containing field names and values from an input record.                                                                                                                                                                                                 |

### Replacer functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
**Replacer functions**
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                | Type and description                                                                                                                     |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| [Replacer.ReplaceText](https://docs.microsoft.com/en-us/powerquery-m/replacer-replacetext)   | This function be provided to List.ReplaceValue or Table.ReplaceValue to do replace of text values in list and table values respectively. |
| [Replacer.ReplaceValue](https://docs.microsoft.com/en-us/powerquery-m/replacer-replacevalue) | This function be provided to List.ReplaceValue or Table.ReplaceValue to do replace values in list and table values respectively.         |

### Splitter functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
**Splitter functions**
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                                    | Type and description                                                                                                     |
| -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| [Splitter.SplitByNothing](https://docs.microsoft.com/en-us/powerquery-m/splitter-splitbynothing)                                 | Returns a function that does no splitting, returning its argument as a single element list.                              |
| [Splitter.SplitTextByCharacterTransition](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbycharactertransition) | Returns a function that splits text into a list of text according to a transition from one kind of character to another. |
| [Splitter.SplitTextByAnyDelimiter](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbyanydelimiter)               | Returns a function that splits text by any supported delimiter.                                                          |
| [Splitter.SplitTextByDelimiter](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbydelimiter)                     | Returns a function that will split text according to a delimiter.                                                        |
| [Splitter.SplitTextByEachDelimiter](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbyeachdelimiter)             | Returns a function that splits text by each delimiter in turn.                                                           |
| [Splitter.SplitTextByLengths](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbylengths)                         | Returns a function that splits text according to the specified lengths.                                                  |
| [Splitter.SplitTextByPositions](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbypositions)                     | Returns a function that splits text according to the specified positions.                                                |
| [Splitter.SplitTextByRanges](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbyranges)                           | Returns a function that splits text according to the specified ranges.                                                   |
| [Splitter.SplitTextByRepeatedLengths](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbyrepeatedlengths)         | Returns a function that splits text into a list of text after the specified length repeatedly.                           |
| [Splitter.SplitTextByWhitespace](https://docs.microsoft.com/en-us/powerquery-m/splitter-splittextbywhitespace)                   | Returns a function that splits text according to whitespace.                                                             |
| [QuoteStyle.Csv](https://docs.microsoft.com/en-us/powerquery-m/quotestyle-csv)                                                   | Quote characters indicate the start of a quoted string. Nested quotes are indicated by two quote characters.             |
| [QuoteStyle.None](https://docs.microsoft.com/en-us/powerquery-m/quotestyle-none)                                                 | Quote characters have no significance.                                                                                   |

### Table functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
**Table functions**
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                        | Type and description                                                                                                                                                                                                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [ItemExpression.From](https://docs.microsoft.com/en-us/powerquery-m/itemexpression-from)                             | Returns the AST for the body of a function.                                                                                                                                                                                                                                                                                         |
| [ItemExpression.Item](https://docs.microsoft.com/en-us/powerquery-m/itemexpression-item)                             | An AST node representing the item in an item expression.                                                                                                                                                                                                                                                                            |
| [RowExpression.Column](https://docs.microsoft.com/en-us/powerquery-m/rowexpression-column)                           | Returns an AST that represents access to a column within a row expression.                                                                                                                                                                                                                                                          |
| [RowExpression.From](https://docs.microsoft.com/en-us/powerquery-m/rowexpression-from)                               | Returns the AST for the body of a function.                                                                                                                                                                                                                                                                                         |
| [RowExpression.Row](https://docs.microsoft.com/en-us/powerquery-m/rowexpression-row)                                 | An AST node representing the row in a row expression.                                                                                                                                                                                                                                                                               |
| [Table.FromColumns](https://docs.microsoft.com/en-us/powerquery-m/table-fromcolumns)                                 | Returns a table from a list containing nested lists with the column names and values.                                                                                                                                                                                                                                               |
| [Table.FromList](https://docs.microsoft.com/en-us/powerquery-m/table-fromlist)                                       | Converts a list into a table by applying the specified splitting function to each item in the list.                                                                                                                                                                                                                                 |
| [Table.FromRecords](https://docs.microsoft.com/en-us/powerquery-m/table-fromrecords)                                 | Returns a table from a list of records.                                                                                                                                                                                                                                                                                             |
| [Table.FromRows](https://docs.microsoft.com/en-us/powerquery-m/table-fromrows)                                       | Creates a table from the list where each element of the list is a list that contains the column values for a single row.                                                                                                                                                                                                            |
| [Table.FromValue](https://docs.microsoft.com/en-us/powerquery-m/table-fromvalue)                                     | Returns a table with a column containing the provided value or list of values.                                                                                                                                                                                                                                                      |
| [Table.FuzzyGroup](https://docs.microsoft.com/en-us/powerquery-m/table-fuzzygroup)                                   | Groups the rows of a table by fuzzily matching values in the specified column for each row.                                                                                                                                                                                                                                         |
| [Table.FuzzyJoin](https://docs.microsoft.com/en-us/powerquery-m/table-fuzzyjoin)                                     | Joins the rows from the two tables that fuzzy match based on the given keys.                                                                                                                                                                                                                                                        |
| [Table.FuzzyNestedJoin](https://docs.microsoft.com/en-us/powerquery-m/table-fuzzynestedjoin)                         | Performs a fuzzy join between tables on supplied columns and produces the join result in a new column.                                                                                                                                                                                                                              |
| [Table.Split](https://docs.microsoft.com/en-us/powerquery-m/table-split)                                             | Splits the specified table into a list of tables using the specified page size.                                                                                                                                                                                                                                                     |
| [Table.View](https://docs.microsoft.com/en-us/powerquery-m/table-view)                                               | Creates or extends a table with user-defined handlers for query and action operations.                                                                                                                                                                                                                                              |
| [Table.ViewFunction](https://docs.microsoft.com/en-us/powerquery-m/table-viewfunction)                               | Creates a function that can be intercepted by a handler defined on a view (via Table.View).                                                                                                                                                                                                                                         |
| [Table.ToColumns](https://docs.microsoft.com/en-us/powerquery-m/table-tocolumns)                                     | Returns a list of nested lists each representing a column of values in the input table.                                                                                                                                                                                                                                             |
| [Table.ToList](https://docs.microsoft.com/en-us/powerquery-m/table-tolist)                                           | Returns a table into a list by applying the specified combining function to each row of values in a table.                                                                                                                                                                                                                          |
| [Table.ToRecords](https://docs.microsoft.com/en-us/powerquery-m/table-torecords)                                     | Returns a list of records from an input table.                                                                                                                                                                                                                                                                                      |
| [Table.ToRows](https://docs.microsoft.com/en-us/powerquery-m/table-torows)                                           | Returns a nested list of row values from an input table.                                                                                                                                                                                                                                                                            |
| [Table.ColumnCount](https://docs.microsoft.com/en-us/powerquery-m/table-columncount)                                 | Returns the number of columns in a table.                                                                                                                                                                                                                                                                                           |
| [Table.IsEmpty](https://docs.microsoft.com/en-us/powerquery-m/table-isempty)                                         | Returns true if the table does not contain any rows.                                                                                                                                                                                                                                                                                |
| [Table.Profile](https://docs.microsoft.com/en-us/powerquery-m/table-profile)                                         | Returns a profile of the columns of a table.                                                                                                                                                                                                                                                                                        |
| [Table.RowCount](https://docs.microsoft.com/en-us/powerquery-m/table-rowcount)                                       | Returns the number of rows in a table.                                                                                                                                                                                                                                                                                              |
| [Table.Schema](https://docs.microsoft.com/en-us/powerquery-m/table-schema)                                           | Returns a table containing a description of the columns (i.e. the schema) of the specified table.                                                                                                                                                                                                                                   |
| [Tables.GetRelationships](https://docs.microsoft.com/en-us/powerquery-m/tables-getrelationships)                     | Returns the relationships among a set of tables.                                                                                                                                                                                                                                                                                    |
| [Table.AlternateRows](https://docs.microsoft.com/en-us/powerquery-m/table-alternaterows)                             | Returns a table containing an alternating pattern of the rows from a table.                                                                                                                                                                                                                                                         |
| [Table.Combine](https://docs.microsoft.com/en-us/powerquery-m/table-combine)                                         | Returns a table that is the result of merging a list of tables. The tables must all have the same row type structure.                                                                                                                                                                                                               |
| [Table.FindText](https://docs.microsoft.com/en-us/powerquery-m/table-findtext)                                       | Returns a table containing only the rows that have the specified text within one of their cells or any part thereof.                                                                                                                                                                                                                |
| [Table.First](https://docs.microsoft.com/en-us/powerquery-m/table-first)                                             | Returns the first row from a table.                                                                                                                                                                                                                                                                                                 |
| [Table.FirstN](https://docs.microsoft.com/en-us/powerquery-m/table-firstn)                                           | Returns the first row(s) of a table, depending on the countOrCondition parameter.                                                                                                                                                                                                                                                   |
| [Table.FirstValue](https://docs.microsoft.com/en-us/powerquery-m/table-firstvalue)                                   | Returns the first column of the first row of the table or a specified default value.                                                                                                                                                                                                                                                |
| [Table.FromPartitions](https://docs.microsoft.com/en-us/powerquery-m/table-frompartitions)                           | Returns a table that is the result of combining a set of partitioned tables into new columns. The type of the column can optionally be specified, the default is any.                                                                                                                                                               |
| [Table.InsertRows](https://docs.microsoft.com/en-us/powerquery-m/table-insertrows)                                   | Returns a table with the list of rows inserted into the table at an index. Each row to insert must match the row type of the table..                                                                                                                                                                                                |
| [Table.Last](https://docs.microsoft.com/en-us/powerquery-m/table-last)                                               | Returns the last row of a table.                                                                                                                                                                                                                                                                                                    |
| [Table.LastN](https://docs.microsoft.com/en-us/powerquery-m/table-lastn)                                             | Returns the last row(s) from a table, depending on the countOrCondition parameter.                                                                                                                                                                                                                                                  |
| [Table.MatchesAllRows](https://docs.microsoft.com/en-us/powerquery-m/table-matchesallrows)                           | Returns true if all of the rows in a table meet a condition.                                                                                                                                                                                                                                                                        |
| [Table.MatchesAnyRows](https://docs.microsoft.com/en-us/powerquery-m/table-matchesanyrows)                           | Returns true if any of the rows in a table meet a condition.                                                                                                                                                                                                                                                                        |
| [Table.Partition](https://docs.microsoft.com/en-us/powerquery-m/table-partition)                                     | Partitions the table into a list of groups number of tables, based on the value of the column of each row and a hash function. The hash function is applied to the value of the column of a row to obtain a hash value for the row. The hash value modulo groups determines in which of the returned tables the row will be placed. |
| [Table.Range](https://docs.microsoft.com/en-us/powerquery-m/table-range)                                             | Returns the specified number of rows from a table starting at an offset.                                                                                                                                                                                                                                                            |
| [Table.RemoveFirstN](https://docs.microsoft.com/en-us/powerquery-m/table-removefirstn)                               | Returns a table with the specified number of rows removed from the table starting at the first row. The number of rows removed depends on the optional countOrCondition parameter.                                                                                                                                                  |
| [Table.RemoveLastN](https://docs.microsoft.com/en-us/powerquery-m/table-removelastn)                                 | Returns a table with the specified number of rows removed from the table starting at the last row. The number of rows removed depends on the optional countOrCondition parameter.                                                                                                                                                   |
| [Table.RemoveRows](https://docs.microsoft.com/en-us/powerquery-m/table-removerows)                                   | Returns a table with the specified number of rows removed from the table starting at an offset.                                                                                                                                                                                                                                     |
| [Table.RemoveRowsWithErrors](https://docs.microsoft.com/en-us/powerquery-m/table-removerowswitherrors)               | Returns a table with all rows removed from the table that contain an error in at least one of the cells in a row.                                                                                                                                                                                                                   |
| [Table.Repeat](https://docs.microsoft.com/en-us/powerquery-m/table-repeat)                                           | Returns a table containing the rows of the table repeated the count number of times.                                                                                                                                                                                                                                                |
| [Table.ReplaceRows](https://docs.microsoft.com/en-us/powerquery-m/table-replacerows)                                 | Returns a table where the rows beginning at an offset and continuing for count are replaced with the provided rows.                                                                                                                                                                                                                 |
| [Table.ReverseRows](https://docs.microsoft.com/en-us/powerquery-m/table-reverserows)                                 | Returns a table with the rows in reverse order.                                                                                                                                                                                                                                                                                     |
| [Table.SelectRows](https://docs.microsoft.com/en-us/powerquery-m/table-selectrows)                                   | Returns a table containing only the rows that match a condition.                                                                                                                                                                                                                                                                    |
| [Table.SelectRowsWithErrors](https://docs.microsoft.com/en-us/powerquery-m/table-selectrowswitherrors)               | Returns a table with only the rows from table that contain an error in at least one of the cells in a row.                                                                                                                                                                                                                          |
| [Table.SingleRow](https://docs.microsoft.com/en-us/powerquery-m/table-singlerow)                                     | Returns a single row from a table.                                                                                                                                                                                                                                                                                                  |
| [Table.Skip](https://docs.microsoft.com/en-us/powerquery-m/table-skip)                                               | Returns a table that does not contain the first row or rows of the table.                                                                                                                                                                                                                                                           |
| [Table.Column](https://docs.microsoft.com/en-us/powerquery-m/table-column)                                           | Returns the values from a column in a table.                                                                                                                                                                                                                                                                                        |
| [Table.ColumnNames](https://docs.microsoft.com/en-us/powerquery-m/table-columnnames)                                 | Returns the names of columns from a table.                                                                                                                                                                                                                                                                                          |
| [Table.ColumnsOfType](https://docs.microsoft.com/en-us/powerquery-m/table-columnsoftype)                             | Returns a list with the names of the columns that match the specified types.                                                                                                                                                                                                                                                        |
| [Table.DemoteHeaders](https://docs.microsoft.com/en-us/powerquery-m/table-demoteheaders)                             | Demotes the header row down into the first row of a table.                                                                                                                                                                                                                                                                          |
| [Table.DuplicateColumn](https://docs.microsoft.com/en-us/powerquery-m/table-duplicatecolumn)                         | Duplicates a column with the specified name. Values and type are copied from the source column.                                                                                                                                                                                                                                     |
| [Table.HasColumns](https://docs.microsoft.com/en-us/powerquery-m/table-hascolumns)                                   | Returns true if a table has the specified column or columns.                                                                                                                                                                                                                                                                        |
| [Table.Pivot](https://docs.microsoft.com/en-us/powerquery-m/table-pivot)                                             | Given a table and attribute column containing pivotValues, creates new columns for each of the pivot values and assigns them values from the valueColumn. An optional aggregationFunction can be provided to handle multiple occurrence of the same key value in the attribute column.                                              |
| [Table.PrefixColumns](https://docs.microsoft.com/en-us/powerquery-m/table-prefixcolumns)                             | Returns a table where the columns have all been prefixed with a text value.                                                                                                                                                                                                                                                         |
| [Table.PromoteHeaders](https://docs.microsoft.com/en-us/powerquery-m/table-promoteheaders)                           | Promotes the first row of the table into its header or column names.                                                                                                                                                                                                                                                                |
| [Table.RemoveColumns](https://docs.microsoft.com/en-us/powerquery-m/table-removecolumns)                             | Returns a table without a specific column or columns.                                                                                                                                                                                                                                                                               |
| [Table.ReorderColumns](https://docs.microsoft.com/en-us/powerquery-m/table-reordercolumns)                           | Returns a table with specific columns in an order relative to one another.                                                                                                                                                                                                                                                          |
| [Table.RenameColumns](https://docs.microsoft.com/en-us/powerquery-m/table-renamecolumns)                             | Returns a table with the columns renamed as specified.                                                                                                                                                                                                                                                                              |
| [Table.SelectColumns](https://docs.microsoft.com/en-us/powerquery-m/table-selectcolumns)                             | Returns a table that contains only specific columns.                                                                                                                                                                                                                                                                                |
| [Table.TransformColumnNames](https://docs.microsoft.com/en-us/powerquery-m/table-transformcolumnnames)               | Transforms column names by using the given function.                                                                                                                                                                                                                                                                                |
| [Table.Unpivot](https://docs.microsoft.com/en-us/powerquery-m/table-unpivot)                                         | Given a list of table columns, transforms those columns into attribute-value pairs.                                                                                                                                                                                                                                                 |
| [Table.UnpivotOtherColumns](https://docs.microsoft.com/en-us/powerquery-m/table-unpivotothercolumns)                 | Translates all columns other than a specified set into attribute-value pairs, combined with the rest of the values in each row.                                                                                                                                                                                                     |
| [JoinKind.Inner](https://docs.microsoft.com/en-us/powerquery-m/joinkind-inner)                                       | A possible value for the optional JoinKind parameter in Table.Join. The table resulting from an inner join contains a row for each pair of rows from the specified tables that were determined to match based on the specified key columns.                                                                                         |
| [JoinKind.LeftOuter](https://docs.microsoft.com/en-us/powerquery-m/joinkind-leftouter)                               | A possible value for the optional JoinKind parameter in Table.Join. A left outer join ensures that all rows of the first table appear in the result.                                                                                                                                                                                |
| [JoinKind.RightOuter](https://docs.microsoft.com/en-us/powerquery-m/joinkind-rightouter)                             | A possible value for the optional JoinKind parameter in Table.Join. A right outer join ensures that all rows of the second table appear in the result.                                                                                                                                                                              |
| [JoinKind.FullOuter](https://docs.microsoft.com/en-us/powerquery-m/joinkind-fullouter)                               | A possible value for the optional JoinKind parameter in Table.Join. A full outer join ensures that all rows of both tables appear in the result. Rows that did not have a match in the other table are joined with a default row containing null values for all of its columns.                                                     |
| [JoinKind.LeftAnti](https://docs.microsoft.com/en-us/powerquery-m/joinkind-leftanti)                                 | A possible value for the optional JoinKind parameter in Table.Join. A left anti join returns that all rows from the first table which do not have a match in the second table.                                                                                                                                                      |
| [JoinKind.RightAnti](https://docs.microsoft.com/en-us/powerquery-m/joinkind-rightanti)                               | A possible value for the optional JoinKind parameter in Table.Join. A right anti join returns that all rows from the second table which do not have a match in the first table.                                                                                                                                                     |
| [MissingField.Error](https://docs.microsoft.com/en-us/powerquery-m/missingfield-error)                               | An optional parameter in record and table functions indicating that missing fields should result in an error. (This is the default parameter value.)                                                                                                                                                                                |
| [MissingField.Ignore](https://docs.microsoft.com/en-us/powerquery-m/missingfield-ignore)                             | An optional parameter in record and table functions indicating that missing fields should be ignored.                                                                                                                                                                                                                               |
| [MissingField.UseNull](https://docs.microsoft.com/en-us/powerquery-m/missingfield-usenull)                           | An optional parameter in record and table functions indicating that missing fields should be included as null values.                                                                                                                                                                                                               |
| [GroupKind.Global](https://docs.microsoft.com/en-us/powerquery-m/groupkind-global)                                   | GroupKind.Global                                                                                                                                                                                                                                                                                                                    |
| [GroupKind.Local](https://docs.microsoft.com/en-us/powerquery-m/groupkind-local)                                     | GroupKind.Local                                                                                                                                                                                                                                                                                                                     |
| [ExtraValues.List](https://docs.microsoft.com/en-us/powerquery-m/extravalues-list)                                   | If the splitter function returns more columns than the table expects, they should be collected into a list.                                                                                                                                                                                                                         |
| [ExtraValues.Ignore](https://docs.microsoft.com/en-us/powerquery-m/extravalues-ignore)                               | If the splitter function returns more columns than the table expects, they should be ignored.                                                                                                                                                                                                                                       |
| [ExtraValues.Error](https://docs.microsoft.com/en-us/powerquery-m/extravalues-error)                                 | If the splitter function returns more columns than the table expects, an error should be raised.                                                                                                                                                                                                                                    |
| [JoinAlgorithm.Dynamic](https://docs.microsoft.com/en-us/powerquery-m/joinalgorithm-dynamic)                         | JoinAlgorithm.Dynamic                                                                                                                                                                                                                                                                                                               |
| [JoinAlgorithm.PairwiseHash](https://docs.microsoft.com/en-us/powerquery-m/joinalgorithm-pairwisehash)               | JoinAlgorithm.PairwiseHash                                                                                                                                                                                                                                                                                                          |
| [JoinAlgorithm.SortMerge](https://docs.microsoft.com/en-us/powerquery-m/joinalgorithm-sortmerge)                     | JoinAlgorithm.SortMerge                                                                                                                                                                                                                                                                                                             |
| [JoinAlgorithm.LeftHash](https://docs.microsoft.com/en-us/powerquery-m/joinalgorithm-lefthash)                       | JoinAlgorithm.LeftHash                                                                                                                                                                                                                                                                                                              |
| [JoinAlgorithm.RightHash](https://docs.microsoft.com/en-us/powerquery-m/joinalgorithm-righthash)                     | JoinAlgorithm.RightHash                                                                                                                                                                                                                                                                                                             |
| [JoinAlgorithm.LeftIndex](https://docs.microsoft.com/en-us/powerquery-m/joinalgorithm-leftindex)                     | JoinAlgorithm.LeftIndex                                                                                                                                                                                                                                                                                                             |
| [JoinAlgorithm.RightIndex](https://docs.microsoft.com/en-us/powerquery-m/joinalgorithm-rightindex)                   | JoinAlgorithm.RightIndex                                                                                                                                                                                                                                                                                                            |
| [JoinSide.Left](https://docs.microsoft.com/en-us/powerquery-m/joinside-left)                                         | Specifies the left table of a join.                                                                                                                                                                                                                                                                                                 |
| [JoinSide.Right](https://docs.microsoft.com/en-us/powerquery-m/joinside-right)                                       | Specifies the right table of a join.                                                                                                                                                                                                                                                                                                |
| [JoinSide.Left](https://docs.microsoft.com/en-us/powerquery-m/joinside-left)                                         | Specifies the left table of a join.                                                                                                                                                                                                                                                                                                 |
| [JoinSide.Right](https://docs.microsoft.com/en-us/powerquery-m/joinside-right)                                       | Specifies the right table of a join.                                                                                                                                                                                                                                                                                                |
| [Table.AddColumn](https://docs.microsoft.com/en-us/powerquery-m/table-addcolumn)                                     | Adds a column named newColumnName to a table.                                                                                                                                                                                                                                                                                       |
| [Table.AddFuzzyClusterColumn](https://docs.microsoft.com/en-us/powerquery-m/table-addfuzzyclustercolumn)             | Adds a new column with representative values obtained by fuzzy grouping values of the specified column in the table.                                                                                                                                                                                                                |
| [Table.AddIndexColumn](https://docs.microsoft.com/en-us/powerquery-m/table-addindexcolumn)                           | Returns a table with a new column with a specific name that, for each row, contains an index of the row in the table.                                                                                                                                                                                                               |
| [Table.AddJoinColumn](https://docs.microsoft.com/en-us/powerquery-m/table-addjoincolumn)                             | Performs a nested join between table1 and table2 from specific columns and produces the join result as a newColumnName column for each row of table1.                                                                                                                                                                               |
| [Table.AddKey](https://docs.microsoft.com/en-us/powerquery-m/table-addkey)                                           | Add a key to table.                                                                                                                                                                                                                                                                                                                 |
| [Table.AggregateTableColumn](https://docs.microsoft.com/en-us/powerquery-m/table-aggregatetablecolumn)               | Aggregates tables nested in a specific column into multiple columns containing aggregate values for those tables.                                                                                                                                                                                                                   |
| [Table.CombineColumns](https://docs.microsoft.com/en-us/powerquery-m/table-combinecolumns)                           | Table.CombineColumns merges columns using a combiner function to produce a new column. Table.CombineColumns is the inverse of Table.SplitColumns.                                                                                                                                                                                   |
| [Table.CombineColumnsToRecord](https://docs.microsoft.com/en-us/powerquery-m/table-combinecolumnstorecord)           | Combines the specified columns into a new record-valued column where each record has field names and values corresponding to the column names and values of the columns that were combined.                                                                                                                                         |
| [Table.ExpandListColumn](https://docs.microsoft.com/en-us/powerquery-m/table-expandlistcolumn)                       | Given a column of lists in a table, create a copy of a row for each value in its list.                                                                                                                                                                                                                                              |
| [Table.ExpandRecordColumn](https://docs.microsoft.com/en-us/powerquery-m/table-expandrecordcolumn)                   | Expands a column of records into columns with each of the values.                                                                                                                                                                                                                                                                   |
| [Table.ExpandTableColumn](https://docs.microsoft.com/en-us/powerquery-m/table-expandtablecolumn)                     | Expands a column of records or a column of tables into multiple columns in the containing table.                                                                                                                                                                                                                                    |
| [Table.FillDown](https://docs.microsoft.com/en-us/powerquery-m/table-filldown)                                       | Replaces null values in the specified column or columns of the table with the most recent non-null value in the column.                                                                                                                                                                                                             |
| [Table.FillUp](https://docs.microsoft.com/en-us/powerquery-m/table-fillup)                                           | Returns a table from the table specified where the value of the next cell is propagated to the null values cells above in the column specified.                                                                                                                                                                                     |
| [Table.FilterWithDataTable](https://docs.microsoft.com/en-us/powerquery-m/table-filterwithdatatable)                 | No Description Provided. Click here to go to the documentation page.                                                                                                                                                                                                                                                                |
| [Table.Group](https://docs.microsoft.com/en-us/powerquery-m/table-group)                                             | Groups table rows by the values of key columns for each row.                                                                                                                                                                                                                                                                        |
| [Table.Join](https://docs.microsoft.com/en-us/powerquery-m/table-join)                                               | Joins the rows of table1 with the rows of table2 based on the equality of the values of the key columns selected by table1, key1 and table2, key2.                                                                                                                                                                                  |
| [Table.Keys](https://docs.microsoft.com/en-us/powerquery-m/table-keys)                                               | Returns a list of key column names from a table.                                                                                                                                                                                                                                                                                    |
| [Table.NestedJoin](https://docs.microsoft.com/en-us/powerquery-m/table-nestedjoin)                                   | Joins the rows of the tables based on the equality of the keys. The results are entered into a new column.                                                                                                                                                                                                                          |
| [Table.ReplaceErrorValues](https://docs.microsoft.com/en-us/powerquery-m/table-replaceerrorvalues)                   | Replaces the error values in the specified columns with the corresponding specified value.                                                                                                                                                                                                                                          |
| [Table.ReplaceKeys](https://docs.microsoft.com/en-us/powerquery-m/table-replacekeys)                                 | Returns a new table with new key information set in the keys argument.                                                                                                                                                                                                                                                              |
| [Table.ReplaceRelationshipIdentity](https://docs.microsoft.com/en-us/powerquery-m/table-replacerelationshipidentity) | No Description Provided. Click here to go to the documentation page.                                                                                                                                                                                                                                                                |
| [Table.ReplaceValue](https://docs.microsoft.com/en-us/powerquery-m/table-replacevalue)                               | Replaces oldValue with newValue in specific columns of a table, using the provided replacer function, such as text.Replace or Value.Replace.                                                                                                                                                                                        |
| [Table.SplitColumn](https://docs.microsoft.com/en-us/powerquery-m/table-splitcolumn)                                 | Returns a new set of columns from a single column applying a splitter function to each value.                                                                                                                                                                                                                                       |
| [Table.TransformColumns](https://docs.microsoft.com/en-us/powerquery-m/table-transformcolumns)                       | Transforms columns from a table using a function.                                                                                                                                                                                                                                                                                   |
| [Table.TransformColumnTypes](https://docs.microsoft.com/en-us/powerquery-m/table-transformcolumntypes)               | Transforms the column types from a table using a type.                                                                                                                                                                                                                                                                              |
| [Table.TransformRows](https://docs.microsoft.com/en-us/powerquery-m/table-transformrows)                             | Transforms the rows from a table using a transform function.                                                                                                                                                                                                                                                                        |
| [Table.Transpose](https://docs.microsoft.com/en-us/powerquery-m/table-transpose)                                     | Returns a table with columns converted to rows and rows converted to columns from the input table.                                                                                                                                                                                                                                  |
| [Table.Contains](https://docs.microsoft.com/en-us/powerquery-m/table-contains)                                       | Determines whether the a record appears as a row in the table.                                                                                                                                                                                                                                                                      |
| [Table.ContainsAll](https://docs.microsoft.com/en-us/powerquery-m/table-containsall)                                 | Determines whether all of the specified records appear as rows in the table.                                                                                                                                                                                                                                                        |
| [Table.ContainsAny](https://docs.microsoft.com/en-us/powerquery-m/table-containsany)                                 | Determines whether any of the specified records appear as rows in the table.                                                                                                                                                                                                                                                        |
| [Table.Distinct](https://docs.microsoft.com/en-us/powerquery-m/table-distinct)                                       | Removes duplicate rows from a table, ensuring that all remaining rows are distinct.                                                                                                                                                                                                                                                 |
| [Table.IsDistinct](https://docs.microsoft.com/en-us/powerquery-m/table-isdistinct)                                   | Determines whether a table contains only distinct rows.                                                                                                                                                                                                                                                                             |
| [Table.PositionOf](https://docs.microsoft.com/en-us/powerquery-m/table-positionof)                                   | Determines the position or positions of a row within a table.                                                                                                                                                                                                                                                                       |
| [Table.PositionOfAny](https://docs.microsoft.com/en-us/powerquery-m/table-positionofany)                             | Determines the position or positions of any of the specified rows within the table.                                                                                                                                                                                                                                                 |
| [Table.RemoveMatchingRows](https://docs.microsoft.com/en-us/powerquery-m/table-removematchingrows)                   | Removes all occurrences of rows from a table.                                                                                                                                                                                                                                                                                       |
| [Table.ReplaceMatchingRows](https://docs.microsoft.com/en-us/powerquery-m/table-replacematchingrows)                 | Replaces specific rows from a table with the new rows.                                                                                                                                                                                                                                                                              |
| [Table.Max](https://docs.microsoft.com/en-us/powerquery-m/table-max)                                                 | Returns the largest row or rows from a table using a comparisonCriteria.                                                                                                                                                                                                                                                            |
| [Table.MaxN](https://docs.microsoft.com/en-us/powerquery-m/table-maxn)                                               | Returns the largest N rows from a table. After the rows are sorted, the countOrCondition parameter must be specified to further filter the result.                                                                                                                                                                                  |
| [Table.Min](https://docs.microsoft.com/en-us/powerquery-m/table-min)                                                 | Returns the smallest row or rows from a table using a comparisonCriteria.                                                                                                                                                                                                                                                           |
| [Table.MinN](https://docs.microsoft.com/en-us/powerquery-m/table-minn)                                               | Returns the smallest N rows in the given table. After the rows are sorted, the countOrCondition parameter must be specified to further filter the result.                                                                                                                                                                           |
| [Table.Sort](https://docs.microsoft.com/en-us/powerquery-m/table-sort)                                               | Sorts the rows in a table using a comparisonCriteria or a default ordering if one is not specified.                                                                                                                                                                                                                                 |
| [Table.Buffer](https://docs.microsoft.com/en-us/powerquery-m/table-buffer)                                           | Buffers a table into memory, isolating it from external changes during evaluation.                                                                                                                                                                                                                                                  |

### Text functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
**Text functions**
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                | Type and description                                                                                                                                                                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Text.InferNumberType](https://docs.microsoft.com/en-us/powerquery-m/text-infernumbertype)                   | Infers granular number type (Int64.Type, Double.Type, etc.) of text using culture.                                                                                                                                                                                                                            |
| [Text.Length](https://docs.microsoft.com/en-us/powerquery-m/text-length)                                     | Returns the number of characters in a text value.                                                                                                                                                                                                                                                             |
| [Character.FromNumber](https://docs.microsoft.com/en-us/powerquery-m/character-fromnumber)                   | Returns a number to its character value.                                                                                                                                                                                                                                                                      |
| [Character.ToNumber](https://docs.microsoft.com/en-us/powerquery-m/character-tonumber)                       | Returns a character to its number value.                                                                                                                                                                                                                                                                      |
| [Guid.From](https://docs.microsoft.com/en-us/powerquery-m/guid-from)                                         | Returns a Guid.Type value from the given value.                                                                                                                                                                                                                                                               |
| [Json.FromValue](https://docs.microsoft.com/en-us/powerquery-m/json-fromvalue)                               | Produces a JSON representation of a given value.                                                                                                                                                                                                                                                              |
| [Text.From](https://docs.microsoft.com/en-us/powerquery-m/text-from)                                         | Returns the text representation of a number, date, time, datetime, datetimezone, logical, duration or binary value. If a value is null, Text.From returns null. The optional culture parameter is used to format the text value according to the given culture.                                               |
| [Text.FromBinary](https://docs.microsoft.com/en-us/powerquery-m/text-frombinary)                             | Decodes data from a binary value in to a text value using an encoding.                                                                                                                                                                                                                                        |
| [Text.NewGuid](https://docs.microsoft.com/en-us/powerquery-m/text-newguid)                                   | Returns a Guid value as a text value.                                                                                                                                                                                                                                                                         |
| [Text.ToBinary](https://docs.microsoft.com/en-us/powerquery-m/text-tobinary)                                 | Encodes a text value into binary value using an encoding.                                                                                                                                                                                                                                                     |
| [Text.ToList](https://docs.microsoft.com/en-us/powerquery-m/text-tolist)                                     | Returns a list of characters from a text value.                                                                                                                                                                                                                                                               |
| [Value.FromText](https://docs.microsoft.com/en-us/powerquery-m/value-fromtext)                               | Decodes a value from a textual representation, value, and interprets it as a value with an appropriate type. Value.FromText takes a text value and returns a number, a logical value, a null value, a DateTime value, a Duration value, or a text value. The empty text value is interpreted as a null value. |
| [Text.At](https://docs.microsoft.com/en-us/powerquery-m/text-at)                                             | Returns a character starting at a zero-based offset.                                                                                                                                                                                                                                                          |
| [Text.Middle](https://docs.microsoft.com/en-us/powerquery-m/text-middle)                                     | Returns the substring up to a specific length.                                                                                                                                                                                                                                                                |
| [Text.Range](https://docs.microsoft.com/en-us/powerquery-m/text-range)                                       | Returns a number of characters from a text value starting at a zero-based offset and for count number of characters.                                                                                                                                                                                          |
| [Text.Start](https://docs.microsoft.com/en-us/powerquery-m/text-start)                                       | Returns the count of characters from the start of a text value.                                                                                                                                                                                                                                               |
| [Text.End](https://docs.microsoft.com/en-us/powerquery-m/text-end)                                           | Returns the number of characters from the end of a text value.                                                                                                                                                                                                                                                |
| [Text.Insert](https://docs.microsoft.com/en-us/powerquery-m/text-insert)                                     | Returns a text value with newValue inserted into a text value starting at a zero-based offset.                                                                                                                                                                                                                |
| [Text.Remove](https://docs.microsoft.com/en-us/powerquery-m/text-remove)                                     | Removes all occurrences of a character or list of characters from a text value. The removeChars parameter can be a character value or a list of character values.                                                                                                                                             |
| [Text.RemoveRange](https://docs.microsoft.com/en-us/powerquery-m/text-removerange)                           | Removes count characters at a zero-based offset from a text value.                                                                                                                                                                                                                                            |
| [Text.Replace](https://docs.microsoft.com/en-us/powerquery-m/text-replace)                                   | Replaces all occurrences of a substring with a new text value.                                                                                                                                                                                                                                                |
| [Text.ReplaceRange](https://docs.microsoft.com/en-us/powerquery-m/text-replacerange)                         | Replaces length characters in a text value starting at a zero-based offset with the new text value.                                                                                                                                                                                                           |
| [Text.Select](https://docs.microsoft.com/en-us/powerquery-m/text-select)                                     | Selects all occurrences of the given character or list of characters from the input text value.                                                                                                                                                                                                               |
| [Text.Contains](https://docs.microsoft.com/en-us/powerquery-m/text-contains)                                 | Returns true if a text value substring was found within a text value string; otherwise, false.                                                                                                                                                                                                                |
| [Text.EndsWith](https://docs.microsoft.com/en-us/powerquery-m/text-endswith)                                 | Returns a logical value indicating whether a text value substring was found at the end of a string.                                                                                                                                                                                                           |
| [Text.PositionOf](https://docs.microsoft.com/en-us/powerquery-m/text-positionof)                             | Returns the first occurrence of substring in a string and returns its position starting at startOffset.                                                                                                                                                                                                       |
| [Text.PositionOfAny](https://docs.microsoft.com/en-us/powerquery-m/text-positionofany)                       | Returns the first occurrence of a text value in list and returns its position starting at startOffset.                                                                                                                                                                                                        |
| [Text.StartsWith](https://docs.microsoft.com/en-us/powerquery-m/text-startswith)                             | Returns a logical value indicating whether a text value substring was found at the beginning of a string.                                                                                                                                                                                                     |
| [Text.AfterDelimiter](https://docs.microsoft.com/en-us/powerquery-m/text-afterdelimiter)                     | Returns the portion of text after the specified delimiter.                                                                                                                                                                                                                                                    |
| [Text.BeforeDelimiter](https://docs.microsoft.com/en-us/powerquery-m/text-beforedelimiter)                   | Returns the portion of text before the specified delimiter.                                                                                                                                                                                                                                                   |
| [Text.BetweenDelimiters](https://docs.microsoft.com/en-us/powerquery-m/text-betweendelimiters)               | Returns the portion of text between the specified startDelimiter and endDelimiter.                                                                                                                                                                                                                            |
| [Text.Clean](https://docs.microsoft.com/en-us/powerquery-m/text-clean)                                       | Returns the original text value with non-printable characters removed.                                                                                                                                                                                                                                        |
| [Text.Combine](https://docs.microsoft.com/en-us/powerquery-m/text-combine)                                   | Returns a text value that is the result of joining all text values with each value separated by a separator.                                                                                                                                                                                                  |
| [Text.Lower](https://docs.microsoft.com/en-us/powerquery-m/text-lower)                                       | Returns the lowercase of a text value.                                                                                                                                                                                                                                                                        |
| [Text.PadEnd](https://docs.microsoft.com/en-us/powerquery-m/text-padend)                                     | Returns a text value padded at the end with pad to make it at least length characters.                                                                                                                                                                                                                        |
| [Text.PadStart](https://docs.microsoft.com/en-us/powerquery-m/text-padstart)                                 | Returns a text value padded at the beginning with pad to make it at least length characters. If pad is not specified, whitespace is used as pad.                                                                                                                                                              |
| [Text.Proper](https://docs.microsoft.com/en-us/powerquery-m/text-proper)                                     | Returns a text value with first letters of all words converted to uppercase.                                                                                                                                                                                                                                  |
| [Text.Repeat](https://docs.microsoft.com/en-us/powerquery-m/text-repeat)                                     | Returns a text value composed of the input text value repeated a number of times.                                                                                                                                                                                                                             |
| [Text.Reverse](https://docs.microsoft.com/en-us/powerquery-m/text-reverse)                                   | Reverses the provided text.                                                                                                                                                                                                                                                                                   |
| [Text.Split](https://docs.microsoft.com/en-us/powerquery-m/text-split)                                       | Returns a list containing parts of a text value that are delimited by a separator text value.                                                                                                                                                                                                                 |
| [Text.SplitAny](https://docs.microsoft.com/en-us/powerquery-m/text-splitany)                                 | Returns a list containing parts of a text value that are delimited by any separator text values.                                                                                                                                                                                                              |
| [Text.Trim](https://docs.microsoft.com/en-us/powerquery-m/text-trim)                                         | Removes any occurrences of characters in trimChars from text.                                                                                                                                                                                                                                                 |
| [Text.TrimEnd](https://docs.microsoft.com/en-us/powerquery-m/text-trimend)                                   | Removes any occurrences of the characters specified in trimChars from the end of the original text value.                                                                                                                                                                                                     |
| [Text.TrimStart](https://docs.microsoft.com/en-us/powerquery-m/text-trimstart)                               | Removes any occurrences of the characters in trimChars from the start of the original text value.                                                                                                                                                                                                             |
| [Text.Upper](https://docs.microsoft.com/en-us/powerquery-m/text-upper)                                       | Returns the uppercase of a text value.                                                                                                                                                                                                                                                                        |
| [Occurrence.All](https://docs.microsoft.com/en-us/powerquery-m/occurrence-all)                               | A list of positions of all occurrences of the found values is returned.                                                                                                                                                                                                                                       |
| [Occurrence.First](https://docs.microsoft.com/en-us/powerquery-m/occurrence-first)                           | The position of the first occurrence of the found value is returned.                                                                                                                                                                                                                                          |
| [Occurrence.Last](https://docs.microsoft.com/en-us/powerquery-m/occurrence-last)                             | The position of the last occurrence of the found value is returned.                                                                                                                                                                                                                                           |
| [RelativePosition.FromEnd](https://docs.microsoft.com/en-us/powerquery-m/relativeposition-fromend)           | Indicates indexing should be done from the end of the input.                                                                                                                                                                                                                                                  |
| [RelativePosition.FromStart](https://docs.microsoft.com/en-us/powerquery-m/relativeposition-fromstart)       | Indicates indexing should be done from the start of the input.                                                                                                                                                                                                                                                |
| [TextEncoding.Ascii](https://docs.microsoft.com/en-us/powerquery-m/textencoding-ascii)                       | Use to choose the ASCII binary form.                                                                                                                                                                                                                                                                          |
| [TextEncoding.BigEndianUnicode](https://docs.microsoft.com/en-us/powerquery-m/textencoding-bigendianunicode) | Use to choose the UTF16 big endian binary form.                                                                                                                                                                                                                                                               |
| [TextEncoding.Unicode](https://docs.microsoft.com/en-us/powerquery-m/textencoding-unicode)                   | Use to choose the UTF16 little endian binary form.                                                                                                                                                                                                                                                            |
| [TextEncoding.Utf8](https://docs.microsoft.com/en-us/powerquery-m/textencoding-utf8)                         | Use to choose the UTF8 binary form.                                                                                                                                                                                                                                                                           |
| [TextEncoding.Utf16](https://docs.microsoft.com/en-us/powerquery-m/textencoding-utf16)                       | Use to choose the UTF16 little endian binary form.                                                                                                                                                                                                                                                            |
| [TextEncoding.Windows](https://docs.microsoft.com/en-us/powerquery-m/textencoding-windows)                   | Use to choose the Windows binary form.                                                                                                                                                                                                                                                                        |

### Time functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
**Time functions**
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                      | Type and description                                   |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [Time.EndOfHour](https://docs.microsoft.com/en-us/powerquery-m/time-endofhour)     | Returns a DateTime value from the end of the hour.     |
| [Time.From](https://docs.microsoft.com/en-us/powerquery-m/time-from)               | Returns a time value from a value.                     |
| [Time.FromText](https://docs.microsoft.com/en-us/powerquery-m/time-fromtext)       | Returns a Time value from a set of date formats.       |
| [Time.Hour](https://docs.microsoft.com/en-us/powerquery-m/time-hour)               | Returns an hour value from a DateTime value.           |
| [Time.Minute](https://docs.microsoft.com/en-us/powerquery-m/time-minute)           | Returns a minute value from a DateTime value.          |
| [Time.Second](https://docs.microsoft.com/en-us/powerquery-m/time-second)           | Returns a second value from a DateTime value           |
| [Time.StartOfHour](https://docs.microsoft.com/en-us/powerquery-m/time-startofhour) | Returns the first value of the hour from a time value. |
| [Time.ToRecord](https://docs.microsoft.com/en-us/powerquery-m/time-torecord)       | Returns a record containing parts of a Date value.     |
| [Time.ToText](https://docs.microsoft.com/en-us/powerquery-m/time-totext)           | Returns a text value from a Time value.                |
| [#time](https://docs.microsoft.com/en-us/powerquery-m/sharptime)                   | Creates a time value from hour, minute, and second.    |

### Type functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
**Type functions**
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                                                    | Type and description                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Type.AddTableKey](https://docs.microsoft.com/en-us/powerquery-m/type-addtablekey)                               | Add a key to a table type.                                                                                                                                                                                   |
| [Type.ClosedRecord](https://docs.microsoft.com/en-us/powerquery-m/type-closedrecord)                             | The given type must be a record type returns a closed version of the given record type (or the same type, if it is already closed)                                                                           |
| [Type.Facets](https://docs.microsoft.com/en-us/powerquery-m/type-facets)                                         | Returns the facets of a type.                                                                                                                                                                                |
| [Type.ForFunction](https://docs.microsoft.com/en-us/powerquery-m/type-forfunction)                               | Creates a function type from the given .                                                                                                                                                                     |
| [Type.ForRecord](https://docs.microsoft.com/en-us/powerquery-m/type-forrecord)                                   | Returns a Record type from a fields record.                                                                                                                                                                  |
| [Type.FunctionParameters](https://docs.microsoft.com/en-us/powerquery-m/type-functionparameters)                 | Returns a record with field values set to the name of the parameters of a function type, and their values set to their corresponding types.                                                                  |
| [Type.FunctionRequiredParameters](https://docs.microsoft.com/en-us/powerquery-m/type-functionrequiredparameters) | Returns a number indicating the minimum number of parameters required to invoke the a type of function.                                                                                                      |
| [Type.FunctionReturn](https://docs.microsoft.com/en-us/powerquery-m/type-functionreturn)                         | Returns a type returned by a function type.                                                                                                                                                                  |
| [Type.Is](https://docs.microsoft.com/en-us/powerquery-m/type-is)                                                 | Type.Is                                                                                                                                                                                                      |
| [Type.IsNullable](https://docs.microsoft.com/en-us/powerquery-m/type-isnullable)                                 | Returns true if a type is a nullable type; otherwise, false.                                                                                                                                                 |
| [Type.IsOpenRecord](https://docs.microsoft.com/en-us/powerquery-m/type-isopenrecord)                             | Returns whether a record type is open.                                                                                                                                                                       |
| [Type.ListItem](https://docs.microsoft.com/en-us/powerquery-m/type-listitem)                                     | Returns an item type from a list type.                                                                                                                                                                       |
| [Type.NonNullable](https://docs.microsoft.com/en-us/powerquery-m/type-nonnullable)                               | Returns the non nullable type from a type.                                                                                                                                                                   |
| [Type.OpenRecord](https://docs.microsoft.com/en-us/powerquery-m/type-openrecord)                                 | Returns an opened version of a record type, or the same type, if it is already open.                                                                                                                         |
| [Type.RecordFields](https://docs.microsoft.com/en-us/powerquery-m/type-recordfields)                             | Returns a record describing the fields of a record type with each field of the returned record type having a corresponding name and a value that is a record of the form [ Type = type, Opional = logical ]. |
| [Type.ReplaceFacets](https://docs.microsoft.com/en-us/powerquery-m/type-replacefacets)                           | Replaces the facets of a type.                                                                                                                                                                               |
| [Type.ReplaceTableKeys](https://docs.microsoft.com/en-us/powerquery-m/type-replacetablekeys)                     | Replaces the keys in a table type.                                                                                                                                                                           |
| [Type.TableColumn](https://docs.microsoft.com/en-us/powerquery-m/type-tablecolumn)                               | Returns the type of a column in a table.                                                                                                                                                                     |
| [Type.TableKeys](https://docs.microsoft.com/en-us/powerquery-m/type-tablekeys)                                   | Returns keys from a table type.                                                                                                                                                                              |
| [Type.TableRow](https://docs.microsoft.com/en-us/powerquery-m/type-tablerow)                                     | Returns a row type from a table type.                                                                                                                                                                        |
| [Type.TableSchema](https://docs.microsoft.com/en-us/powerquery-m/type-tableschema)                               | Returns a table containing a description of the columns (i.e. the schema) of the specified table type.                                                                                                       |
| [Type.Union](https://docs.microsoft.com/en-us/powerquery-m/type-union)                                           | Returns the union of a list of types.                                                                                                                                                                        |

### Uri functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
**Uri functions**
|
[Value functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_value_functions)
|


---
| Function name                                                                              | Type and description                                                         |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| [Uri.BuildQueryString](https://docs.microsoft.com/en-us/powerquery-m/uri-buildquerystring) | Assemble a record into a URI query string.                                   |
| [Uri.Combine](https://docs.microsoft.com/en-us/powerquery-m/uri-combine)                   | Returns a Uri based on the combination of the base and relative parts.       |
| [Uri.EscapeDataString](https://docs.microsoft.com/en-us/powerquery-m/uri-escapedatastring) | Encodes special characters in accordance with RFC 3986.                      |
| [Uri.Parts](https://docs.microsoft.com/en-us/powerquery-m/uri-parts)                       | Returns a record value with the fields set to the parts of a Uri text value. |

### Value functions
---

[Accessing data functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_accessing_data_functions)
|
[Binary functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_binary_functions)
|
[Combiner functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_combiner_functions)
|
[Comparer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_comparer_functions)
|
[Date functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_date_functions)
|
[DateTime functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetime_functions)
|
[DateTimeZone functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_datetimezone_functions)
|
[Duration functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_duration_functions)
|
[Error handling](/r/excel/wiki/decronym/power_query_m_categorical#wiki_error_handling)
|
[Expression functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_expression_functions)
|
[Function values](/r/excel/wiki/decronym/power_query_m_categorical#wiki_function_values)
|
[Lines functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_lines_functions)
|
[List functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_list_functions)
|
[Logical functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_logical_functions)
|
[Number functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_number_functions)
|
[Record functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_record_functions)
|
[Replacer functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_replacer_functions)
|
[Splitter functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_splitter_functions)
|
[Table functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_table_functions)
|
[Text functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_text_functions)
|
[Time functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_time_functions)
|
[Type functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_type_functions)
|
[Uri functions](/r/excel/wiki/decronym/power_query_m_categorical#wiki_uri_functions)
|
**Value functions**
|


---
| Function name                                                                                              | Type and description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Value.Compare](https://docs.microsoft.com/en-us/powerquery-m/value-compare)                               | Returns 1, 0, or -1 based on value1 being greater than, equal to, or less than the value2. An optional comparer function can be provided.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Value.Equals](https://docs.microsoft.com/en-us/powerquery-m/value-equals)                                 | Returns whether two values are equal.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Value.Expression](https://docs.microsoft.com/en-us/powerquery-m/value-expression)                         | Returns an AST that represents the value's expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Value.NativeQuery](https://docs.microsoft.com/en-us/powerquery-m/value-nativequery)                       | Evaluates a query against a target.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [Value.NullableEquals](https://docs.microsoft.com/en-us/powerquery-m/value-nullableequals)                 | Returns a logical value or null based on two values .                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| [Value.Optimize](https://docs.microsoft.com/en-us/powerquery-m/value-optimize)                             | If value represents a query that can be optimized, returns the optimized query. Otherwise returns value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Value.Type](https://docs.microsoft.com/en-us/powerquery-m/value-type)                                     | Returns the type of the given value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Value.Add](https://docs.microsoft.com/en-us/powerquery-m/value-add)                                       | Returns the sum of the two values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| [Value.Divide](https://docs.microsoft.com/en-us/powerquery-m/value-divide)                                 | Returns the result of dividing the first value by the second.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| [Value.Multiply](https://docs.microsoft.com/en-us/powerquery-m/value-multiply)                             | Returns the product of the two values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| [Value.Subtract](https://docs.microsoft.com/en-us/powerquery-m/value-subtract)                             | Returns the difference of the two values.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Precision.Double](https://docs.microsoft.com/en-us/powerquery-m/precision-double)                         | An optional parameter for the built-in arthimetic operators to specify double precision.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [Precision.Decimal](https://docs.microsoft.com/en-us/powerquery-m/precision-decimal)                       | An optional parameter for the built-in arthimetic operators to specify decimal precision.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| [Value.As](https://docs.microsoft.com/en-us/powerquery-m/value-as)                                         | Value.As is the function corresponding to the as operator in the formula language. The expression value as type asserts that the value of a value argument is compatible with type as per the is operator. If it is not compatible, an error is raised.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| [Value.Is](https://docs.microsoft.com/en-us/powerquery-m/value-is)                                         | Value.Is is the function corresponding to the is operator in the formula language. The expression value is type returns true if the ascribed type of vlaue is compatible with type, and returns false if the ascribed type of value is incompatible with type.                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Value.ReplaceType](https://docs.microsoft.com/en-us/powerquery-m/value-replacetype)                       | A value may be ascribed a type using Value.ReplaceType. Value.ReplaceType either returns a new value with the type ascribed or raises an error if the new type is incompatible with the value’s native primitive type. In particular, the function raises an error when an attempt is made to ascribe an abstract type, such as any. When replacing a the type of a record, the new type must have the same number of fields, and the new fields replace the old fields by ordinal position, not by name. Similarly, when replacing the type of a table, the new type must have the same number of columns, and the new columns replace the old columns by ordinal position. |
| [DirectQueryCapabilities.From](https://docs.microsoft.com/en-us/powerquery-m/directquerycapabilities-from) | DirectQueryCapabilities.From                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Embedded.Value](https://docs.microsoft.com/en-us/powerquery-m/embedded-value)                             | Accesses a value by name in an embedded mashup.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| [Value.Firewall](https://docs.microsoft.com/en-us/powerquery-m/value-firewall)                             | Value.Firewall                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [Variable.Value](https://docs.microsoft.com/en-us/powerquery-m/variable-value)                             | Variable.Value                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [SqlExpression.SchemaFrom](https://docs.microsoft.com/en-us/powerquery-m/sqlexpression-schemafrom)         | SqlExpression.SchemaFrom                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| [SqlExpression.ToExpression](https://docs.microsoft.com/en-us/powerquery-m/sqlexpression-toexpression)     | SqlExpression.ToExpression                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [Value.Metadata](https://docs.microsoft.com/en-us/powerquery-m/value-metadata)                             | Returns a record containing the input’s metadata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Value.RemoveMetadata](https://docs.microsoft.com/en-us/powerquery-m/value-removemetadata)                 | Removes the metadata on the value and returns the original value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| [Value.ReplaceMetadata](https://docs.microsoft.com/en-us/powerquery-m/value-replacemetadata)               | Replaces the metadata on a value with the new metadata record provided and returns the original value with the new metadata attached.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

