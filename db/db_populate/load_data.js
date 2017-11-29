const mysql = require("mysql");
const config = require("./../db.config");
const { categoriesTable, tagsTable } = require("./prepare_data");

// console.log(categoriesTable);
// console.log(tagsTable);

const connection = mysql.createConnection(config);
connection.connect();

let query = connection.query('INSERT INTO categories SET ?', {category_name: categories_data[2]}, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });
// // let query = connection.query('DELETE FROM categories', function (error, results, fields) {
// //     if (error) throw error;
// //     console.log(results.insertId);
// //   });
//   console.log(query.sql);
//   connection.end();