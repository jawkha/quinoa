const mysql = require("mysql");
const config = require("./../db.config");
const { categoriesTable, tagsTable, categoriesTagsTable } = require("./prepare_data");

// console.log(categoriesTable);
// console.log(tagsTable);

const connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

// ================ QUERY FOR INSERTING DATA INTO CATEGORIES TABLE ============  

let sqlQuery1 = 'INSERT INTO categories(`category_id`, `category_name`, `quantity (kg)`, `water_consumption (litres)`, `co2_production (grams)`) VALUES ?';
let values1 = categoriesTable;  
let query1 = connection.query(sqlQuery1, [values1], function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
  });

  console.log(query1.sql);

// ================ QUERY FOR INSERTING DATA INTO TAGS TABLE ============  

let sqlQuery2 = 'INSERT INTO tags(tag_id, tag_name) VALUES ?';
let values2 = tagsTable;
let query2 = connection.query(sqlQuery2, [values2], function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
  });

  console.log(query2.sql);

// ================ QUERY FOR INSERTING DATA INTO CATEGORIES_TAGS TABLE ============  

let sqlQuery3 = 'INSERT INTO categories_tags(category_id, tag_id) VALUES ?';
let values3 = categoriesTagsTable;
let query3 = connection.query(sqlQuery3, [values3], function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
  });

  console.log(query3.sql);
  
  connection.end();