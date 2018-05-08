
var orm = require("./config/orm.js");

// orm.insertOne('Questionable Burger');
// orm.updateOne('Questionable Burger');
query = orm.selectAll();
console.log(query);