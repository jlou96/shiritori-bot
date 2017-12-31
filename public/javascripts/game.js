var wk = require('wanakana');

exports.nextWord = function(prevWord) {
    var nw;
    var pwKana = wk.toHiragana(prevWord);
    var char = pwKana[pwKana.length - 1];
    // TODO: get word that starts with char
    nw = 'Hello World!';
    return nw;
}
