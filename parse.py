import re
import json

with open("lore.txt", "r", encoding="utf-8") as f:
    text = f.read()

events = []
blocks = text.split("Event ")
for block in blocks[1:]:
    lines = block.strip().split("\n")
    if not lines: continue
    header = lines[0].strip()
    match = re.match(r"(\d+):\s*(.*)", header)
    if not match: continue
    
    id = int(match.group(1))
    title = match.group(2)
    
    era = 1
    if id > 10: era = 2
    if id > 20: era = 3
    if id > 30: era = 4
    
    desc = ""
    optA = ""
    effA = {}
    optB = ""
    effB = {}
    
    current_section = ""
    
    def parse_effects(eff_str):
        eff_str = eff_str.replace("Efekt: [", "").replace("]", "").strip()
        parts = eff_str.split(", ")
        parsed = {}
        for p in parts:
            if ":" not in p: continue
            k, v = p.split(":", 1)
            k = k.strip()
            v = v.strip()
            v_val = 0
            # Some manual cleanup because of commas in numbers like 2,000
            v = v.replace(",", "")
            if "PLN" in v:
                v_val = int(v.replace("PLN", "").replace("+", "").replace(" ", ""))
            elif "%" in v:
                v_val = int(v.replace("%", "").replace("+", "").replace(" ", ""))
            else:
                try:
                    v_val = int(v.replace("+", "").replace(" ", ""))
                except:
                    v_val = 0
            if k == "Street Cred": k = "StreetCred"
            parsed[k] = v_val
        return parsed

    for line in lines[1:]:
        line = line.strip()
        if line.startswith("* Opis:"):
            desc = line.replace("* Opis:", "").strip()
        elif line.startswith("* Opcja A:"):
            optA = line.replace("* Opcja A:", "").strip()
            current_section = "A"
        elif line.startswith("* Opcja B:"):
            optB = line.replace("* Opcja B:", "").strip()
            current_section = "B"
        elif line.startswith("* Efekt:"):
            eff = parse_effects(line.replace("* Efekt:", "").strip())
            if current_section == "A":
                effA = eff
            else:
                effB = eff
                
    # Remove citation numbers from end of words
    def clean(t):
        return re.sub(r'\d+(?=\s|$|\.)', '', t).strip()

    events.append({
        "id": id,
        "era": era,
        "title": clean(title),
        "desc": clean(desc),
        "options": [
            {"text": clean(optA), "effects": effA},
            {"text": clean(optB), "effects": effB}
        ]
    })

js_output = "const gameEvents = " + json.dumps(events, indent=4, ensure_ascii=False) + ";"
with open("events.js", "w", encoding="utf-8") as f:
    f.write(js_output)
print("Done")
