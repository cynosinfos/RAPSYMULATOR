const fs = require('fs');
const text = fs.readFileSync('lore.txt', 'utf-8');

const events = [];
const blocks = text.split("Event ");
for (let i = 1; i < blocks.length; i++) {
    const lines = blocks[i].trim().split("\n");
    if (lines.length === 0) continue;
    
    const header = lines[0].trim();
    const match = header.match(/^(\d+):\s*(.*)/);
    if (!match) continue;
    
    const id = parseInt(match[1]);
    const title = match[2];
    
    let era = 1;
    if (id > 10) era = 2;
    if (id > 20) era = 3;
    if (id > 30) era = 4;
    
    let desc = "";
    let optA = "";
    let effA = {};
    let optB = "";
    let effB = {};
    
    let current_section = "";
    
    function parse_effects(eff_str) {
        eff_str = eff_str.replace("Efekt: [", "").replace("]", "").trim();
        const parts = eff_str.split(",");
        const parsed = {};
        for (let p of parts) {
            if (!p.includes(":")) continue;
            let [k, v] = p.split(":");
            k = k.trim();
            v = v.trim();
            let v_val = 0;
            v = v.replace(/,/g, "");
            if (v.includes("PLN")) {
                v_val = parseInt(v.replace("PLN", "").replace("+", "").replace(/ /g, ""));
            } else if (v.includes("%")) {
                v_val = parseInt(v.replace("%", "").replace("+", "").replace(/ /g, ""));
            } else {
                v_val = parseInt(v.replace("+", "").replace(/ /g, ""));
            }
            if (isNaN(v_val)) v_val = 0;
            if (k === "Street Cred") k = "StreetCred";
            parsed[k] = v_val;
        }
        return parsed;
    }

    for (let j = 1; j < lines.length; j++) {
        let line = lines[j].trim();
        if (line.startsWith("* Opis:")) {
            desc = line.replace("* Opis:", "").trim();
        } else if (line.startsWith("* Opcja A:")) {
            optA = line.replace("* Opcja A:", "").trim();
            current_section = "A";
        } else if (line.startsWith("* Opcja B:")) {
            optB = line.replace("* Opcja B:", "").trim();
            current_section = "B";
        } else if (line.startsWith("* Efekt:")) {
            const eff = parse_effects(line.replace("* Efekt:", "").trim());
            if (current_section === "A") effA = eff;
            else effB = eff;
        }
    }

    const clean = (t) => t.replace(/\d+(?=\s|$|\.)/g, '').trim();

    events.push({
        id: id,
        era: era,
        title: clean(title),
        desc: clean(desc),
        options: [
            { text: clean(optA), effects: effA },
            { text: clean(optB), effects: effB }
        ]
    });
}

const js_output = "const gameEvents = " + JSON.stringify(events, null, 4) + ";";
fs.writeFileSync("events.js", js_output, "utf-8");
console.log("Done");
