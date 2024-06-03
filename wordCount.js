const fs = require('fs');

function wordCount(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        const pattern = /\w+/g;
        const words = data.toLowerCase().match(pattern);
        const wordCountMap = new Map();

        if (words) {
            words.forEach(word => {
                wordCountMap.set(word, (wordCountMap.get(word) || 0) + 1);
            });
        }

        const sortedWordCount = Array.from(wordCountMap.entries()).sort();

        sortedWordCount.forEach(([word, count]) => {
            console.log(`${word}: ${count}`);
        });
    });
}

const args = process.argv.slice(2);
if (args.length !== 1) {
    console.log('node wordCount.js <file path>');
} else {
    const filePath = args[0];
    wordCount(filePath);
}
