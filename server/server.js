const mysql = require('mysql');
const config = require('./../db/db.config');

const express = require('express');
const bodyParser = require('body-parser');

// EXTERNAL API FILES
const shopgun = require('./../api/shopgun.js');
const translate = require('./../api/translate.js');
// -------------------------------------------------

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
app.use(express.static('public'));
app.use(bodyParser.json());

// ==========================================================

// =======================GET REQUESTS=======================
app.get('/home', (req, res) => {
  let sqlQuery = 'SELECT * FROM tags';
  let query = connection.query(sqlQuery, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.json(results);
  });
  console.log(query.sql);
  // connection.end();
});

app.get('/:tag', (req, res) => {
  let sqlQuery =
    'SELECT category_name, tag_name, `water_consumption (litres)`, `co2_production (grams)` FROM categories_tags JOIN categories ON categories.category_id = categories_tags.category_id JOIN tags ON tags.tag_id = categories_tags.tag_id WHERE tag_name = ? ORDER BY `water_consumption (litres)` DESC';
  let value = req.params.tag;
  let query = connection.query(sqlQuery, value, function(error, results, fields) {
    if (error) throw error;
    console.log(results);
    res.json(results);
  });
  console.log(query.sql);
  // connection.end();
});

// EXTERNAL API REQUEST
app.get('/:tag/:category', (req, res) => {
  shopgun.getToken().then(function(response) {
    const token = response.data.token;
    // search nearby offers
    shopgun
      .offerSearch(token, {
        query: translate(`${req.params.category}`),
        r_lat: 55.7947,
        r_lon: 12.5162,
        r_radius: 500,
        r_locale: 'da_DK',
        limit: 10
      })
      .then(function(response) {
        response.data.map(item => {
          //     console.log(item);
          // })
          console.log(`item.id: ${item.ern}
            item.heading: ${item.heading}
            item.description: ${item.description}
        `);
        });
        res.send(response.data);
      })
      .catch(function(response) {
        console.log('error:', response);
      });
  });
});

// PORT specifier
app.listen(4000, function() {
  console.log('quinoa app server listening on port 4000 ...');
});

//===============================
