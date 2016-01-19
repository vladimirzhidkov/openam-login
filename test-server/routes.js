'use strict';

var express = require('express');
var data = require('./data');

var router = express.Router();

router.route('/openam/json/authenticate')
    .post(function(req, res){
        res.send(data);

    })
    .get(function(req, res){
        res.send(data);

    });

router.route('/accounts/:id')
    .get(function(req, res){
    })
    .post(function(req, res){
    });



module.exports = router;