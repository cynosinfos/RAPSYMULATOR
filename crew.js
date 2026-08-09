const crewData = [
    { id: "prawnik", name: "Papuga", role: "Prawnik", cost: 50000, desc: "Zmniejsza kary finansowe i negatywne skutki skandali z policją.", bought: false },
    { id: "dj_pendrive", name: "DJ Pendrive", role: "DJ", cost: 5000, desc: "Tani DJ z laptopem. Daje stały bonus do kasy na trasach (+5%).", bought: false },
    { id: "dj_spacer", name: "DJ Spacer", role: "DJ", cost: 15000, desc: "Solidny rzemieślnik na konsolecie. Bonus do kasy na trasach (+10%).", bought: false },
    { id: "dj_chlam", name: "DJ Chłam", role: "DJ", cost: 0, desc: "Gra za darmo, ale psuje wizerunek (Utrata Fejmu na trasach).", bought: false },
    
    // Hypemani
    { id: "hype_czy", name: "CZY CZYSTOF", role: "Hypeman", cost: 100000, desc: "Najlepszy hype w kraju. Max Hype na start tras, +30% zysków.", bought: false },
    { id: "hype_seba", name: "SEBA Z OŚKI", role: "Hypeman", cost: 5000, desc: "Krzyczy 'Jazda!'. +5% kasy na trasach.", bought: false },
    { id: "hype_szwagier", name: "SZWAGIER MAREK", role: "Hypeman", cost: 15000, desc: "Robi dym na scenie. +10% kasy, ale więcej odklejki.", bought: false },
    { id: "hype_bidon", name: "BID BIDON", role: "Hypeman", cost: 30000, desc: "Dobry do chórków. +15% kasy na trasach.", bought: false },
    { id: "hype_ropuch", name: "ROPUCH", role: "Hypeman", cost: 50000, desc: "Ikona podziemia. +20% kasy, duży bonus do Hype'u.", bought: false },
    { id: "hype_sztal", name: "KR SZTAŁ", role: "Hypeman", cost: 75000, desc: "Generuje gigantyczny szum. +25% kasy.", bought: false }
];

function getCrewMember(role) {
    return crewData.find(m => m.role === role && m.bought) || null;
}

function renderCrew() {
    const window = document.getElementById('event-window');
    const actions = document.getElementById('action-buttons');
    
    let html = `
        <div id="event-description">
            <h2>🤜 TWOJA EKIPA 🤛</h2>
            <p>Skompletuj swoją ekipę na trasy koncertowe i do ratowania tyłka.</p>
        </div>
        <div style="display:grid; grid-template-columns:1fr; gap:10px; margin-top:20px;">
    `;

    // Render Papuga
    const papuga = crewData.find(m => m.id === "prawnik");
    html += renderCrewItem(papuga);

    // Render DJs
    html += `<h3 style="margin-top: 15px;">Wybierz DJ'a (Możesz mieć tylko jednego)</h3>`;
    crewData.filter(m => m.role === "DJ").forEach(m => {
        html += renderCrewItem(m);
    });

    // Render Hypemen
    html += `<h3 style="margin-top: 15px;">Wybierz Hypemana (Możesz mieć tylko jednego)</h3>`;
    crewData.filter(m => m.role === "Hypeman").forEach(m => {
        html += renderCrewItem(m);
    });

    html += `</div>`;
    window.innerHTML = html;
    
    actions.innerHTML = `
        <button class="btn-action" onclick="renderCurrentEvent()">Wróc do gry</button>
    `;
}

function renderCrewItem(member) {
    if (member.bought) {
        return `
            <div style="background:#111; border: 1px solid var(--accent-green); padding:15px; border-radius:8px;">
                <strong style="color:var(--accent-green);">${member.name} (Zatrudniony)</strong>
                <p style="font-size:12px; color:#aaa;">${member.desc}</p>
            </div>
        `;
    } else {
        return `
            <div style="background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <strong>${member.name}</strong>
                    <p style="font-size:12px; color:#aaa;">${member.desc}</p>
                </div>
                <button class="btn-action" style="padding:10px; font-size:12px;" onclick="buyCrew('${member.id}')">Zatrudnij (${member.cost} PLN)</button>
            </div>
        `;
    }
}

function buyCrew(id) {
    const member = crewData.find(m => m.id === id);
    if (!member) return;

    if (gameState.money >= member.cost) {
        // Jeśli kupujemy DJa lub Hypemana, musimy zwolnić poprzedniego z tej samej roli
        if (member.role === "DJ" || member.role === "Hypeman") {
            const current = getCrewMember(member.role);
            if (current) {
                current.bought = false; // Zwalniamy starego
            }
        }

        gameState.money -= member.cost;
        member.bought = true;
        
        clampStats();
        updateStatsUI();
        alert(`Zatrudniono: ${member.name}!`);
        renderCrew();
    } else {
        alert("Brakuje ci siana na opłacenie kontraktu!");
    }
}
