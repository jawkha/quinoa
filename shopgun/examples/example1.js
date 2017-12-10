/*jshint esversion: 6 */

const shopgun = require('../shopgun.js');

shopgun.getToken().then(function(response) {
    const token = response.data.token;

    // search nearby offers
    shopgun.offerSearch(token, {
        query:"æble",
        r_lat: 55.676098,
        r_lon: 12.568337
       })
       .then(function (response) {
        console.log("data:",response.data);
    }).catch(function (response) {
        console.log("error:", response);
        });

    // get the location of the nearest stores for the dealer. (A dealer could e.g be "Rema 1000" or "Netto")
    shopgun.storeList(token, {
        r_lat: 55.676098,
        r_lon: 12.568337,
        dealer_ids: ['11deC']  // NOTE: you can find the dealer_id in the offerSearch result
    }).then(function(response) {
        console.log("data:", response.data);
    });

}).catch(function (err) {
  console.log("token error:", err.data);
});
