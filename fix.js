const fs = require('fs');
let txt = fs.readFileSync('events.js', 'utf-8');
txt = txt.replace(/"\[Kasa"/g, '"Kasa"');
fs.writeFileSync('events.js', txt, 'utf-8');
