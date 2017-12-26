var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Shiritori Bot' });
});

router.post('/game/:diff', function(req, res) {
    var userInput = req.body.userInput;
    console.log(userInput);
    res.render('game', { title: 'Shiritori Bot', diff: req.params.diff, tmp: userInput });
});

router.get('/game/:diff', function(req, res) {
    res.render('game', { title: 'Shiritori Bot', diff: req.params.diff });
});

module.exports = router;
