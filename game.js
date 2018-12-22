const wk = require('wanakana');

exports.nextWord = (prevWord) => {
    let nextWord;
    let pwKana = wk.toHiragana(prevWord);
    let char = pwKana[pwKana.length - 1];
    // console.log(char);
    // TODO: get word that starts with char

    nextWord = 'Hello World!';
    return nextWord;
}
