const fs = require('fs');
const path = require('path');
const wk = require('wanakana');

const dictionaryDir = path.join(__dirname, 'jmdict');

const hiragana = [
	"あ", "い", "う", "え", "お",
    "か", "き", "く", "け", "こ",
    "が", "ぎ", "ぐ", "げ", "ご",
    "さ", "し", "す", "せ", "そ",
    "ざ", "じ", "ず", "ぜ", "ぞ",
    "た", "ち", "つ", "て", "と",
    "だ", "ぢ", "づ", "で", "ど",
	"な", "に", "ぬ", "ね", "の",
    "は", "ひ", "ふ", "へ", "ほ",
    "ば", "び", "ぶ", "べ", "ぼ",
    "ぱ", "ぴ", "ぷ", "ぺ", "ぽ",
	"ま", "み", "む", "め", "も",
	"や", "ゆ", "よ",
	"ら", "り", "る", "れ", "ろ",
	"わ", "を"
];

// Initialize dict where keys span the hiragana characters,
// and values are a set of all words that start with that character
// Similar to a bucket array
let bucketDict = {};

for (const char of hiragana) {
    bucketDict[char] = new Set();
}

// Populate with dictionary entries
fs.readdirSync(dictionaryDir).forEach(file => {
    const absPath = path.join(dictionaryDir, file);
    const rawData = fs.readFileSync(absPath);
    const JSONData = JSON.parse(rawData);
    
    for (const entry of JSONData) {
        const word = entry[0];
        const reading = entry[1];
        const element = entry[2];

        if (reading && element === 'n') {
            const firstChar = reading.charAt(0);
            const firstHira = wk.toHiragana(firstChar);
            const lastChar = reading.charAt(reading.length);
            const lastHira = wk.toHiragana(lastChar);
            // Ignore words that are not Japanese, end in ん, or have obsolete readings
            if (wk.isJapanese(word) && lastHira !== 'ん' && firstHira in bucketDict) {
                try {
                    bucketDict[firstHira].add(word);
                } catch (err) {
                    console.log(entry);
                    console.error(err);
                }
            }
        }
    }
});

// Convert bucketDict values from Sets to Arrays to stringify
for (const [key, val] of Object.entries(bucketDict)) {
    bucketDict[key] = Array.from(val);
}

// Write bucketDict to JSON 'database' file
const dbPath = path.join(__dirname, 'data', 'database.json');
fd = fs.openSync(dbPath, 'w');
fs.writeSync(fd, JSON.stringify(bucketDict));
