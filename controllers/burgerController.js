var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');

router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsBurger = {
            burgers : data
        };
        res.render("index", hbsBurger)
    });
});

router.post('/api/burgers', function(req, res) {
    burger.create(req.body.name, function(data) {
        console.log(req.body);
        res.send(data);
    });
});

router.put('/api/burgers/:id', function(req, res) {
    var id = req.params.id;
    burger.update(id, function(data) {
        res.send(data);
    });
})

module.exports = router;