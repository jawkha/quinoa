const mysql = require("mysql");
const config = require("./../db.config");

// loads the JSON file which contains all the data for the project
const data = require("./../../class02-final-project/data.json");
// console.log(data);
console.log(data.length);

categories_data = [];
data.map(obj => {
    categories_data.push(obj.category);
})

const connection = mysql.createConnection(config);
connection.connect();

let query = connection.query('INSERT INTO categories SET ?', {category_name: categories_data[2]}, function (error, results, fields) {
    if (error) throw error;
    console.log(results.insertId);
  });
// let query = connection.query('DELETE FROM categories', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });
  console.log(query.sql);
  connection.end();