const fs = require('fs');
const path = require('path');
const wk = require('wanakana');

// Read from DB
const dbPath = path.join(__dirname, 'data', 'database.json');
const rawData = fs.readFileSync(dbPath);
let db = JSON.parse(rawData);

exports.nextWord = (prevWord) => {
    let nextWord;
    const pwHira = wk.toHiragana(prevWord);
    const pwFirstHira = pwHira[0];
    const pwLastHira  = pwHira[pwHira.length - 1];

    if (!(pwHira in db[pwFirstHira]) || pwLastHira === 'ん') {
        nextWord = `Game Over! You played: ${pwHira}`;
    } else {
        // Get random word that starts with pwLastHira and remove it
        let randIndex = Math.floor(Math.random() * db[pwLastHira].length);
        nextWord = db[pwLastHira][randIndex];
        db[pwLastHira].splice(randIndex);
    }

    return nextWord;
}
