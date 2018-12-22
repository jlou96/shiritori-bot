const fs = require('fs');
const path = require('path');
const wk = require('wanakana');

// Read from DB
const dbPath = path.join(__dirname, 'data', 'database.json');
const rawData = fs.readFileSync(dbPath);
const db = JSON.parse(rawData);

exports.nextWord = (prevWord) => {
    let pwKana = wk.toHiragana(prevWord);
    let char = pwKana[pwKana.length - 1];
    // Get word that starts with char
    const nextWord = db[char][Math.floor(Math.random() * db[char].length)];
    return nextWord;
}
