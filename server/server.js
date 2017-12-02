const mysql = require('mysql');
const config = require("./../db/db.config");

const express = require("express");
const bodyParser = require("body-parser");


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
app.use(bodyParser.json());

// ==========================================================

// =======================GET REQUESTS=======================
app.get("/home", (req, res) => {
    let sqlQuery = 'SELECT * FROM tags';
    let query = connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.json(results);
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

// PORT specifier
app.listen(4000, function() {
  console.log("quinoa app server listening on port 4000 ...");
});
