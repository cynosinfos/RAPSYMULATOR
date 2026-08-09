const aiRappers = [
    { name: "Nieznany Raper 01", fameOffset: 95 },
    { name: "Typ w Kominiarce", fameOffset: 92 },
    { name: "Młody Kot", fameOffset: 89 },
    { name: "Stary Wyga", fameOffset: 85 },
    { name: "Ziomek z Osiedla", fameOffset: 80 },
    { name: "Człowiek Duch", fameOffset: 77 },
    { name: "Skryty MC", fameOffset: 72 },
    { name: "Zamaskowany Typ", fameOffset: 68 },
    { name: "Podwórkowy Gracz", fameOffset: 65 },
    { name: "Anonimowy Gracz", fameOffset: 55 },
    { name: "Cichy Artysta", fameOffset: 50 },
    { name: "Nieuchwytny Flow", fameOffset: 45 },
    { name: "Zwykły Chłopak", fameOffset: 40 },
    { name: "Gracz z Ławki", fameOffset: 35 },
    { name: "Początkujący MC", fameOffset: 15 }
];

function renderTopka() {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    // Generujemy dynamiczną topkę
    let topList = aiRappers.map(r => ({
        name: r.name,
        fame: r.fameOffset + Math.floor(Math.random() * 5) - 2 // Lekki random
    }));
    
    // Dodajemy gracza
    topList.push({
        name: `YOU: ${gameState.nickname}`,
        fame: gameState.fame,
        isPlayer: true
    });
    
    // Sortujemy malejąco po fejmie
    topList.sort((a, b) => b.fame - a.fame);
    
    // Szukamy pozycji gracza PRZED ucięciem listy
    let playerRank = topList.findIndex(r => r.isPlayer) + 1;
    let playerScore = topList.find(r => r.isPlayer).fame;
    
    // Bierzemy tylko TOP 10 do wyświetlenia
    let displayList = topList.slice(0, 10);
    
    let html = `<h2>🏆 TOPKA POLSKIEGO RAPU</h2>`;
    html += `<p style="font-size:12px; color:#aaa;">Ranking generowany na podstawie Fejmu w branży.</p>`;
    
    html += `<div style="background:#111; border: 1px solid #333; padding: 10px; margin-top: 15px;">`;
    
    let playerInTop = false;
    displayList.forEach((r, index) => {
        let color = r.isPlayer ? "var(--accent-green)" : "#fff";
        let bg = r.isPlayer ? "background:#222;" : "";
        if (r.isPlayer) playerInTop = true;
        
        html += `<div style="display:flex; justify-content:space-between; border-bottom: 1px dashed #333; padding: 5px 0; ${bg}">
            <span style="color:${color};"><strong>#${index + 1}</strong> ${r.name}</span>
            <span style="color:var(--accent-purple);">${Math.max(0, r.fame)} Fejmu</span>
        </div>`;
    });
    
    if (!playerInTop) {
        html += `<div style="margin-top:10px; padding: 10px; background:rgba(255,255,255,0.05); text-align:center; border: 1px dashed var(--accent-red);">
            <strong style="color:var(--accent-red);">Twoja pozycja: #${playerRank}</strong><br>
            Masz ${Math.max(0, playerScore)} Fejmu. Brakuje ci jeszcze trochę, by wybić się do czołówki!
        </div>`;
    }
    html += `</div>`;
    
    eventWindow.innerHTML = html;
    
    actionButtons.innerHTML = '';
    const backBtn = document.createElement('button');
    backBtn.className = 'btn-action';
    backBtn.style.borderColor = 'var(--accent-red)';
    backBtn.innerText = "Wróć do gry";
    backBtn.onclick = renderCurrentEvent;
    actionButtons.appendChild(backBtn);
}
