const mysql = require('mysql');
const config = require("./../db/db.config");
const express = require("express");
const bodyParser = require("body-parser");
//external API
const shopgun = require('./shopgun.js');
const translate = require('./translate.js');

const connection = mysql.createConnection(config);
connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
    console.log('connected as id ' + connection.threadId);
  });

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());///parse application/json

// // GET REQUESTS
app.get("/home", (req, res, next) => {
  let sqlQuery = 'SELECT * FROM tags';
  let query = connection.query(sqlQuery, function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      res.json(results);//middleware in express
    });
    console.log(query.sql);
    // connection.end();
});

app.get("/:tag", (req, res, next) => {
let sqlQuery = "SELECT category_name, tag_name, water_consumption FROM categories_tags JOIN categories ON categories.category_id = categories_tags.category_id JOIN tags ON tags.tag_id = categories_tags.tag_id WHERE tag_name = ?";
let value = req.params.tag;
let query = connection.query(sqlQuery, value, function (error, results, fields) {
  if (error) throw error;
  console.log();
  res.json(results);
});
console.log(query.sql);
// connection.end();
});

// //GET request, to get the data from the external api....

// //You can use the category as a query string
// // app.get("/getProducts/:category"  , (req, res) => {
// //..shopgun.getToken ....shopgun.offerSearch(token,
// //{query: req.params.category  .....

app.get('/products/:category', (req, res) => {
  const category = req.params.category;
  
    shopgun.getToken().then(function(response) {
    console.log('111111111');
    const token = response.data.token;
    console.log(token);

        shopgun.offerSearch(token, {
        query: translate(category),
        r_lat: 55.676098,
        r_lon: 12.568337,
        r_locale: 'da_DK',
       })
       .then(function (response) {
          response.data.map(product => {
            res.send(`product.id: ${product.id}
            product.heading: ${product.heading}
            product.images: ${product.images.view}
            product.price: ${product.pricing.price}
            product.branding.name: ${product.branding.name}
            product.description: ${product.description}
            `)});
        console.log("done");
    }).catch(function (response) {
        console.log("error isssssssssssssss:", response.data);
        console.log("error:44444444444");
        });
//     })
// });

   // get the location of the nearest stores for the dealer. (A dealer could e.g be "Rema 1000" or "Netto")
//     shopgun.storeList(token, {
//         r_lat: 55.676098,
//         r_lon: 12.568337,
//         dealer_ids: ['11deC']  // NOTE: you can find the dealer_id in the offerSearch result
//     }).then(function(response) {
//          console.log("data:", response.data);
//         response.data.map(item => {
//           res.write(`item.id: ${item.id}
//               item.name: ${item.branding.name}
//               item.city: ${item.city}
//               item.latitude: ${item.latitude}
//               item.longitude: ${item.longitude}
//           `)});
    
// })
// .catch(function (err) {
//   console.log("token error:", err);
// });
   

  })
});

app.listen(4000, function() {
  console.log("The server is listening on port 4000 ...");
});