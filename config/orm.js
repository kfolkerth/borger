//Dependencies
var connection = require('./connection.js');

var orm = {

    //Selects all burgers from burger_db
    selectAll: function (callback) {
        connection.query(
            'SELECT * FROM burgers',
            function (err, results) {
                if (err) throw err;
                return callback(results);
            }
        )
    },

    //adds new burger to db with a default state of not being devoured
    insertOne: function (newBurger, callback) {
        connection.query(
            "INSERT INTO burgers(burger_name, devoured) VALUES('" + newBurger + "', 0)",
            function (err, results) {
                if (err) throw err;
                console.log('1 burger inserted');
                return callback(true);
            }
        )
    },

    //uodates the devoured state of a burger
    updateOne: function (burgerID, callback) {
        console.log(burgerID);
        connection.query(
            'SELECT * FROM burgers WHERE ?',
            {
                id: burgerID
            },
            function (err, results) {
                console.log(results);
                if (results[0].devoured == 0) {
                    connection.query(
                        'UPDATE burgers SET ? WHERE ?',
                        [
                            {
                                devoured: 1
                            },
                            {
                                id: burgerID
                            }
                        ],
                        function (err, result) {
                            if (err) throw err;
                            console.log('1 rows updated');
                            return callback(true);
                        }
                    );
                } else {
                    connection.query(
                        'UPDATE burgers SET ? WHERE ?',
                        [
                            {
                                devoured: 0
                            },
                            {
                                id: burgerID
                            }
                        ],
                        function (err, result) {
                            if (err) throw err;
                            console.log('1 rows updated');
                            return callback(true);
                        }
                    );
                }
            }
        )

    }
}

module.exports = orm;