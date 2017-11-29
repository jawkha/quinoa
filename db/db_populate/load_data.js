// loads the JSON file which contains all the data for the project
const data = require("./../../class02-final-project/data.json");
// console.log(data);
console.log(data.length);

// {
//     "tags": ["fruit", "sweet"],
//     "category": "Apple",
//     "metrics": [{
//         "per": {
//             "amount": 1,
//             "unit": "kg"
//         },
//         "use": {
//             "amount": 822,
//             "unit": "litres water"
//         }
//     }]
// }
// CATEGORIES TABLE
// obj.category = category_name(varchar(45))
// obj.metrics.per.amount = quantity(int)
// obj.metrics.per.unit = measurement_unit(varchar(10))
// obj.metrics.use.amount = water_consumption(int)

let categoriesTableData = [];

data.map(obj => {
    let categoriesTableRow = [];
    categoriesTableRow.push(obj.category);
    obj.metrics.map(innerObj => {
        categoriesTableRow.push(innerObj.per.amount);
        categoriesTableRow.push(innerObj.per.unit);
        categoriesTableRow.push(innerObj.use.amount);
    })
    categoriesTableData.push(categoriesTableRow);
})
for (i = 0; i < categoriesTableData.length; i++) {
    categoriesTableData[i].unshift(i + 1);
}
console.log(categoriesTableData);

// TAGS TABLE
// obj.tags = [tag_name(varchar(45))]

let tagsTableData = [];
let tagsData = [];

data.map(obj => {    
    tagsData = tagsData.concat(obj.tags);
})
// console.log(tagsData);

let uniqueTags = new Set(tagsData);
// console.log(uniqueTags);

tagsTableData = Array.from(uniqueTags);
console.log(tagsTableData);

/*
for (i = 0; i < tagsTableData.length; i++) {
    tagsTableData[i].unshift(i + 1);
}
*/

// categories_data = [];
// data.map(obj => {
//     categories_data.push(obj.category);
// })
// console.log(categories_data);
// const connection = mysql.createConnection(config);
// connection.connect();
// data.map(item => item.tags.map(t => console.log(typeof t)));
// data.map(item => item.metrics.map(x => console.log(typeof(x.use.amount))));
// let query = connection.query('INSERT INTO categories SET ?', {category_name: categories_data[2]}, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });
// let query = connection.query('DELETE FROM categories', function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.insertId);
//   });
//   console.log(query.sql);
//   connection.end();