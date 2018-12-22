var express = require('express');
var game = require('../game');
var router = express.Router();

// Index

router.get('/', function(req, res, next) {
    console.log('Home Page');
    res.render('index', { title: 'Shiritori Bot' });
});

// Game

router.get('/game', function(req, res, next) {
    console.log('Game Page');
    res.render('game', { title: 'Shiritori Bot' });
});

router.post('/game', function(req, res, next) {
    console.log(req.body.userInput);
    var nextWord = game.nextWord(req.body.userInput);
    res.render('game', { title: 'Shiritori Bot', nextWord: nextWord });
});

module.exports = router;
