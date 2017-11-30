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
    let sqlQuery = 'SELECT tag_name FROM tags';
    let query = connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        console.log(results);
        res.json(results);
      });
      console.log(query.sql);
      connection.end();
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
