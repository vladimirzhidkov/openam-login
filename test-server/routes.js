'use strict';

var express = require('express');

var router = express.Router();

router.route('/openam/json/authenticate')
    .post(function(req, res){
        res.send(['test', 'test', 'test']);

    })
    .get(function(req, res){
        res.send(['test']);

    });

router.route('/accounts/:id')
    .get(function(req, res){
    })
    .post(function(req, res){
    });



module.exports = router;