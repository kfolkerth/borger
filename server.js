
var orm = require("./config/orm.js");

// orm.insertOne('Questionable Burger');
// orm.updateOne('Questionable Burger');

orm.selectAll(function(result) {
    console.log(result);
});
