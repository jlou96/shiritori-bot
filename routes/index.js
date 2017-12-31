var express = require('express');
var game = require('../public/javascripts/game');
var router = express.Router();

router.get('/', function(req, res, next) {
    console.log('Home Page');
    res.render('index', { title: 'Shiritori Bot' });
});

router.post('/game/:diff', function(req, res) {
    var nextWord = game.nextWord(req.body.userInput);
    res.render('game', { title: 'Shiritori Bot', diff: req.params.diff, nextWord: nextWord });
});

router.get('/game/:diff', function(req, res) {
    console.log('Game Page');
    res.render('game', { title: 'Shiritori Bot', diff: req.params.diff });
});

module.exports = router;
