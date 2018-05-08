//Dependencies
var connection = require('./connection.js');

var orm = {

    //Selects all burgers from burger_db
    selectAll: function (callback) {
        connection.connect();
        connection.query(
            'SELECT * FROM burgers',
            function (err, results) {
                if (err) throw err;
                connection.end();
                return callback(results);
            }
        )
    },

    //adds new burger to db with a default state of not being devoured
    insertOne: function (newBurger) {
        connection.connect();
        connection.query(
            "INSERT INTO burgers(burger_name, devoured) VALUES('" + newBurger + "', 0)",
            function (err, results) {
                if (err) throw err;
                console.log('1 burger inserted');
                connection.end();
            }
        )
    },

    //uodates the devoured state of a burger
    updateOne: function (updatedBurger, newState) {
        connection.connect();
        connection.query(
            'UPDATE burgers SET ? WHERE ?',
            {
                devoured: newState
            },
            {
                burger_name: updatedBurger
            },
            function (err, result) {
                if (err) throw err;
                console.log('1 rows updated');
                connection.end();
            }
        )
    }
}

module.exports = orm;