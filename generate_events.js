const fs = require('fs');

const events = [];
let idCounter = 100; // start IDs at 100 to avoid conflicts with events.js

const subjects = ["fan", "raper", "producent", "diler", "hater", "dziennikarz", "policjant", "manager", "promotor", "osiedlowy cwaniak"];
const actions = ["atakuje cię", "proponuje współpracę", "kradnie twój sprzęt", "ośmiesza cię w sieci", "zaprasza na wywiad", "grozi ci procesem", "chce cię pobić"];
const contexts = ["pod klubem", "w studiu", "na stacji benzynowej", "na koncercie", "w internecie", "na osiedlu", "podczas wywiadu"];

// Era 1 (Underground) - 25 events
for (let i=0; i<25; i++) {
    events.push({
        id: idCounter++,
        era: 1,
        title: `Incydent z lat 90' - Część ${i+1}`,
        desc: `Podczas przesiadywania na ławce, podchodzi do ciebie ${subjects[Math.floor(Math.random()*subjects.length)]} i ${actions[Math.floor(Math.random()*actions.length)]} ${contexts[Math.floor(Math.random()*contexts.length)]}.`,
        options: [
            { text: "Postaw się i walcz o swoje (Ryzyko)", effects: { StreetCred: 10, Odklejka: 5, Wena: 5 } },
            { text: "Uciekaj, żeby uniknąć kłopotów", effects: { StreetCred: -15, Wena: -5, Kasa: -50 } }
        ]
    });
}

// Era 2 (Lokalnie) - 25 events
for (let i=0; i<25; i++) {
    events.push({
        id: idCounter++,
        era: 2,
        minTier: 2,
        title: `Rozpoznawalność - Incydent ${i+1}`,
        desc: `Jesteś coraz bardziej znany. Twój ${subjects[Math.floor(Math.random()*subjects.length)]} nagle ${actions[Math.floor(Math.random()*actions.length)]}. Sytuacja staje się gorąca ${contexts[Math.floor(Math.random()*contexts.length)]}.`,
        options: [
            { text: "Zrób z tego aferę promocyjną (Hype+)", effects: { Hype: 15, Fejm: 5, Odklejka: 10 } },
            { text: "Załatw sprawę po cichu gotówką", effects: { Kasa: -2000, StreetCred: 10 } }
        ]
    });
}

// Era 3 (Mainstream) - 25 events
for (let i=0; i<25; i++) {
    events.push({
        id: idCounter++,
        era: 3,
        minTier: 3,
        title: `Mainstream - Afera ${i+1}`,
        desc: `Pieniądze to nie wszystko. Media plotkarskie podłapały, że ${subjects[Math.floor(Math.random()*subjects.length)]} publicznie ${actions[Math.floor(Math.random()*actions.length)]} ${contexts[Math.floor(Math.random()*contexts.length)]}.`,
        options: [
            { text: "Wydaj mocne oświadczenie wideo", effects: { Fejm: 10, Kasa: 5000, Hype: 20 } },
            { text: "Zlej temat i leć na Malediwy", effects: { Wena: 20, Kasa: -10000, Hype: -10 } }
        ]
    });
}

// Era 4 (Ikona) - 25 events
for (let i=0; i<25; i++) {
    events.push({
        id: idCounter++,
        era: 4,
        minTier: 4,
        title: `Szczyt kariery - Dramat ${i+1}`,
        desc: `Będąc na szczycie, zauważasz, że ${subjects[Math.floor(Math.random()*subjects.length)]} znowu ${actions[Math.floor(Math.random()*actions.length)]}. Wszystko to ma miejsce ${contexts[Math.floor(Math.random()*contexts.length)]}.`,
        options: [
            { text: "Odpal relację na żywo i wyśmiej sytuację", effects: { Odklejka: 15, Hype: 30, Fejm: 20, Kasa: 15000 } },
            { text: "Zatrudnij prawników do wyciszenia sprawy", effects: { Kasa: -30000, Respekt: 10, Odklejka: -10 } }
        ]
    });
}

// Dorzućmy parę mocnych ręcznych eventów (Freak Fighty itp.)
events.push({
    id: idCounter++, era: 4, minTier: 3,
    title: "Propozycja Walki we Freak Fightach",
    desc: "Włodarz największej federacji galaktycznych freak fightów oferuje milion złotych za walkę w klatce z twoim byłym hypemanem.",
    options: [
        { text: "Biorę to! Odpalam dymy na konferencji!", effects: { Kasa: 500000, Hype: 80, Fejm: 50, StreetCred: -60, Odklejka: 40 } },
        { text: "Odrzucam. Jestem muzykiem, nie małpą w cyrku.", effects: { Kasa: 0, Respekt: 40, StreetCred: 20, Hype: -20 } }
    ]
});
events.push({
    id: idCounter++, era: 3, minTier: 2,
    title: "Skandal na żywo w radiu",
    desc: "Podczas wywiadu w dużej rozgłośni radiowej, dziennikarz zadaje ci niewygodne pytanie o twoje stare, kompromitujące bity.",
    options: [
        { text: "Wstań, rzuć mikrofonem i wyjdź ze studia", effects: { Odklejka: 25, Hype: 35, Respekt: -10, Fejm: 10 } },
        { text: "Obróć to w żart i wypromuj nowe ciuchy", effects: { Kasa: 20000, Fejm: 20, Hype: 10 } }
    ]
});
events.push({
    id: idCounter++, era: 1,
    title: "Wizytówka przy bankomacie",
    desc: "Zauważyłeś, że ktoś z branży zostawił kartę wizytówkową lokalnego producenta przy bankomacie na osiedlu.",
    options: [
        { text: "Zadzwoń i poproś o bity za darmo", effects: { Wena: 20, StreetCred: -10, Hype: 5 } },
        { text: "Użyj jej jako podkładki pod piwo z kolegami", effects: { StreetCred: 15, Odklejka: 5, Wena: -5 } }
    ]
});

let fileContent = `// Ten plik został wygenerowany z 100+ nowymi eventami\n`;
fileContent += `const expandedEvents = ` + JSON.stringify(events, null, 4) + `;\n`;
fileContent += `// Łączymy nowe eventy z główną pulą przed rozpoczęciem gry\n`;
fileContent += `window.addEventListener('DOMContentLoaded', () => {\n`;
fileContent += `    if (typeof gameEvents !== 'undefined') {\n`;
fileContent += `        gameEvents.push(...expandedEvents);\n`;
fileContent += `    }\n`;
fileContent += `});\n`;

fs.writeFileSync('events_expanded.js', fileContent);
console.log('Wygenerowano events_expanded.js z ' + events.length + ' eventami!');
