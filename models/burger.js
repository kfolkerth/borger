//dependencies
var orm = require('../config/orm.js');

var burger = {
    all : function(callback) {
        orm.selectAll(function(response) {
            callback(response);
        });
    },

    create : function(name, callback) {
        orm.insertOne(name, function(response) {
            callback(response);
        });
    },

    update : function(burgerID, callback) {
        orm.updateOne(burgerID, function(response) {
            callback(response);
        });
    }
}

//Exports functions for controller
module.exports = burger;