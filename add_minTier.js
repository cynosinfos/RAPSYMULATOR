const fs = require('fs');

let fileContent = fs.readFileSync('events_expanded.js', 'utf8');

// The file looks like:
// const expandedEvents = [ ... ];
// ...

const startIdx = fileContent.indexOf('[');
const endIdx = fileContent.lastIndexOf('];') + 1;
const jsonStr = fileContent.substring(startIdx, endIdx);

let events = JSON.parse(jsonStr);

events.forEach(e => {
    // Default tier based on era, so later eras generally require more fame
    e.minTier = 1;
    
    if (e.title.includes("Kupiona Zwrotka z USA")) e.minTier = 3;
    if (e.title.includes("Reklama wędlin")) e.minTier = 3;
    if (e.title.includes("Sygnowany Fast-Food")) e.minTier = 4;
    if (e.title.includes("Wybory Prezydenckie")) e.minTier = 4;
    if (e.title.includes("Walka Szefów")) e.minTier = 3;
    if (e.title.includes("Gwiazda rapu kontra Kulturysta")) e.minTier = 3;
    if (e.title.includes("Wymóg garnituru na Gali")) e.minTier = 2;
    if (e.title.includes("Płocka Plaża nad Wisłą")) e.minTier = 2;
});

let newJsonStr = JSON.stringify(events, null, 4);
let newFileContent = fileContent.replace(jsonStr, newJsonStr);

fs.writeFileSync('events_expanded.js', newFileContent);
console.log("Dodano minTier do eventów!");
