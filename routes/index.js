var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Shiritori Bot' });
});

// router.post('/game/:diff', function(req, res) {
//     var userInput = req.body.
// })

router.get('/game/:diff', function(req, res) {
    console.log('Request to game/:diff');
    console.log(req.params.diff);
    res.render('game', { title: 'Shiritori Bot', diff: req.params.diff });
});

module.exports = router;
