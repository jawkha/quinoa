const mysql = require('mysql');
const config = require("./../db/db.config");

const express = require("express");
const bodyParser = require("body-parser");

//or external API
var request = require('request');
var router = express.Router();
var apiKey = '00jayczv096i4pd36usiba3tyd0mht2w';

const connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

// =============INITIALIZE THE EXPRESS SERVER================
const app = express();

// ===================MIDDLEWARE=============================
app.use(express.static("public"));
app.use(bodyParser.json());///parse application/json

// ==========================================================

// =======================GET REQUESTS=======================
// app.get("/home", (req, res) => {
//     let sqlQuery = 'SELECT tag_name FROM tags';
//     let query = connection.query(sqlQuery, function (error, results, fields) {
//         if (error) throw error;
//         console.log(results);
//         res.json(results);
//       });
//       console.log(query.sql);
//       connection.end();
// });
// =======================GET REQUESTS=======================
app.get("/home", (req, res) => {
  let sqlQuery = 'SELECT * FROM tags';
  let query = connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);//middleware in express
    });
    console.log(query.sql);
    // connection.end();
});

app.get("/:tag", (req, res) => {
let sqlQuery = "SELECT category_name, tag_name, water_consumption FROM categories_tags JOIN categories ON categories.category_id = categories_tags.category_id JOIN tags ON tags.tag_id = categories_tags.tag_id WHERE tag_name = ?";
let value = req.params.tag;
let query = connection.query(sqlQuery, value, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  res.json(results);
});
console.log(query.sql);
// connection.end();
});



// POST
// app.post("/api/cars", (req, res) => {
//   const newCar = req.body;
//   cars.push(newCar);
//   res.json({ records: cars });
// });

// // PUT
// app.put("/api/cars/:id", (req, res) => {
//   const index = cars.findIndex((car) => car.id == req.params.id);
//   console.log(`index value of modified car is ${index}`);
//   cars[index] = req.body;
//   res.json({ records: cars });
// });

// // DELETE
// app.delete("/api/cars/:id", (req, res) => {
//   cars = cars.filter((car) => car.id != req.params.id);
//   res.json({ records: cars });
// });

// PORT specifier
app.listen(4000, function() {
  console.log("quinoa app server listening on port 4000 ...");
});