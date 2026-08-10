const drugData = [
    // Tier F (Desperacja)
    { name: "Klej (Butapren)", cost: 10, wena: 5, hype: -10, odklejka: 25, addiction: 5, tier: "F" },
    { name: "Gaz do zapalniczek", cost: 15, wena: 8, hype: -10, odklejka: 30, addiction: 8, tier: "F" },
    { name: "Krokodyl", cost: 50, wena: 20, hype: -20, odklejka: 40, addiction: 20, tier: "F" },
    { name: "Dopalacze (Mocarz)", cost: 30, wena: 30, hype: -5, odklejka: 50, addiction: 15, tier: "F" },
    
    // Tier C (Lajtowe)
    { name: "Piwo pod sklepem", cost: 15, wena: 5, hype: 0, odklejka: 2, addiction: 2, tier: "C" },
    { name: "Wóda z ekipą", cost: 60, wena: 15, hype: 5, odklejka: 10, addiction: 5, tier: "C" },
    { name: "Zioło (Osiedlowy temat)", cost: 150, wena: 25, hype: 5, odklejka: 15, addiction: 8, tier: "C" },
    { name: "Medyczna Marihuana", cost: 400, wena: 30, hype: 5, odklejka: 5, addiction: 3, tier: "C" },
    
    // Tier B (Apteka & Impreza)
    { name: "Xanax", cost: 300, wena: -10, hype: 10, odklejka: 20, addiction: 12, tier: "B" },
    { name: "Syrop z Kodeiną (Lean)", cost: 600, wena: 35, hype: 15, odklejka: 25, addiction: 15, tier: "B" },
    { name: "Amfetamina (Feta)", cost: 200, wena: 50, hype: 5, odklejka: 25, addiction: 12, tier: "B" },
    { name: "MDMA (Piguły)", cost: 500, wena: 60, hype: 20, odklejka: 30, addiction: 10, tier: "B" },
    { name: "Mefedron (Kryształ)", cost: 400, wena: 70, hype: 10, odklejka: 40, addiction: 18, tier: "B" },
    { name: "Ketamina", cost: 600, wena: 65, hype: 15, odklejka: 45, addiction: 12, tier: "B" },
    
    // Tier A (Twarde)
    { name: "Kokaina", cost: 2000, wena: 100, hype: 30, odklejka: 20, addiction: 25, tier: "A" },
    { name: "Crack", cost: 500, wena: 120, hype: 10, odklejka: 50, addiction: 35, tier: "A" },
    { name: "Heroina", cost: 1200, wena: 50, hype: 5, odklejka: 60, addiction: 40, tier: "A" },
    { name: "Morfina", cost: 1000, wena: 40, hype: 5, odklejka: 40, addiction: 30, tier: "A" },
    { name: "Metamfetamina", cost: 1500, wena: 150, hype: 15, odklejka: 65, addiction: 35, tier: "A" },
    
    // Tier S (Psychodeliki)
    { name: "LSD (Kwasy)", cost: 800, wena: 120, hype: 10, odklejka: 70, addiction: 5, tier: "S" },
    { name: "Grzyby Halucynogenne", cost: 600, wena: 100, hype: 5, odklejka: 50, addiction: 2, tier: "S" },
    { name: "DMT", cost: 2500, wena: 200, hype: 20, odklejka: 90, addiction: 5, tier: "S" },
    { name: "Ayahuasca", cost: 5000, wena: 250, hype: 30, odklejka: 100, addiction: 0, tier: "S" }
];

function getTierColor(tier) {
    switch(tier) {
        case 'S': return '#ff00ff'; // neon pink
        case 'A': return 'var(--accent-red)';
        case 'B': return '#ffa500'; // orange
        case 'C': return 'var(--accent-purple)'; // green
        case 'F': return '#555555'; // grey
        default: return '#fff';
    }
}

function getTierDescription(tier) {
    switch(tier) {
        case 'S': return 'PSYCHODELIKI - Przekraczanie granic. Kosmiczna Wena, absurdalna Odklejka.';
        case 'A': return 'TWARDE - Najszybsza droga na szczyt. I jeszcze szybsza na dno.';
        case 'B': return 'APTEKA & IMPREZA - Nakręca Hype, ale buduje Nałóg i zjada zdrowie.';
        case 'C': return 'LAJTOWE - Mniejsze ryzyko, ale efekty też słabsze.';
        case 'F': return 'DESPERACJA - Kiedy nie masz hajsu, a musisz przyćpać. Ulica tobą gardzi.';
        default: return '';
    }
}

function renderDrugs() {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    let html = `
        <div id="event-description">
            <h2 style="color:var(--accent-purple);">💊 WSPOMAGACZE (TIERLISTA)</h2>
            <p>Im wyższy Nałóg, tym szybciej stracisz wszystko. Powyżej 50% możesz iść na przymusowy odwyk, a przy 100% kończysz w piachu.</p>
        </div>
        <div style="margin-bottom: 20px;">
    `;
    
    const tiers = ['S', 'A', 'B', 'C', 'F'];
    
    tiers.forEach(tier => {
        html += `
            <div style="background:#1a1a1a; padding:10px; border-radius:8px; margin-bottom: 15px; border-left: 4px solid ${getTierColor(tier)};">
                <h3 style="color:${getTierColor(tier)}; margin-top: 0; margin-bottom: 5px;">TIER ${tier}</h3>
                <p style="font-size:11px; color:#888; margin-top:0; margin-bottom: 10px;">${getTierDescription(tier)}</p>
        `;
        
        drugData.filter(d => d.tier === tier).forEach(d => {
            html += `
                <div style="background:#252525; padding:10px; border-radius:5px; display:flex; justify-content:space-between; align-items:center; margin-bottom: 5px;">
                    <div>
                        <strong style="color:#fff;">${d.name}</strong><br>
                        <small style="color:#aaa;">Cena: ${d.cost} PLN | Wena: <span style="color:var(--accent-purple)">${d.wena > 0 ? '+'+d.wena : d.wena}</span> | Nałóg: <span style="color:var(--accent-red)">+${d.addiction}%</span> | Odklejka: +${d.odklejka}</small>
                    </div>
                    <button class="btn-action" style="padding:5px 10px; font-size:11px; border-color:${getTierColor(tier)};" onclick="useDrug('${d.name}', ${d.cost}, ${d.wena}, ${d.hype}, ${d.odklejka}, ${d.addiction})">Bierz</button>
                </div>
            `;
        });
        html += `</div>`;
    });
    
    // Robbing the dealer mechanic
    let turnsSinceRobbery = (gameState.turnCount || 0) - (gameState.lastDealerRobbery || -999);
    let canRob = turnsSinceRobbery >= 30;
    
    html += `
        </div>
        
        <div style="margin-top:20px; background:#111; padding:15px; border:1px solid #ffaa00; border-radius:8px;">
            <h3 style="color:#ffaa00; margin-bottom:10px;">🔫 OKRADNIJ DILERA</h3>
            <p style="font-size:12px; color:#aaa; margin-bottom:10px;">Bierzesz kominiarkę, gaz pieprzowy i kasujesz lokalnego dostawcę. Dostajesz potężny zastrzyk <strong>+100 Weny</strong> i <strong>+20 Fejmu</strong>, ale Twoja reputacja na osiedlu znika całkowicie (<strong>Street Credit do zera</strong>).</p>
            ${canRob 
                ? `<button class="btn-action" style="padding:10px; font-size:12px; border-color:#ffaa00; color:#ffaa00;" onclick="robDealer()">Zrób to!</button>` 
                : `<p style="color:var(--accent-red); font-weight:bold; font-size:12px;">Dilerzy na osiedlu są zbyt czujni. Musisz odczekać jeszcze ${30 - turnsSinceRobbery} tur(y).</p>`
            }
        </div>

        <div style="margin-top:20px; background:#111; padding:15px; border:1px solid var(--accent-red); border-radius:8px;">
            <h3 style="color:var(--accent-red); margin-bottom:10px;">🏥 Ośrodek Odwykowy</h3>
            <p style="font-size:12px; color:#aaa; margin-bottom:10px;">Zamknij się w prywatnym ośrodku na kilka miesięcy. Kasuje cały Twój pasek nałogu, ale uderza po kieszeni i tracisz czas.</p>
            <button class="btn-action" style="padding:10px; font-size:12px; border-color:var(--accent-red); color:var(--accent-red);" onclick="goRehab()">Idź na Odwyk (Koszt: 10000 PLN, -1 Rok)</button>
        </div>
    `;
    
    eventWindow.innerHTML = html;
    actionButtons.innerHTML = '';
    
    const backBtn = document.createElement('button');
    backBtn.className = 'btn-action';
    backBtn.style.borderColor = 'var(--accent-red)';
    backBtn.innerText = "Wróć do gry";
    backBtn.onclick = renderCurrentEvent;
    actionButtons.appendChild(backBtn);
}

function robDealer() {
    gameState.lastDealerRobbery = gameState.turnCount || 0;
    gameState.streetCredit = 0;
    gameState.wena += 100;
    gameState.fame += 20;
    
    clampStats();
    updateStatsUI();
    
    alert("Wjechałeś z buta na kwadrat i zgarnąłeś cały towar! Ulica uważa cię za złodzieja i kapusia, ale czujesz, że jesteś bogiem świata.");
    renderDrugs();
}

function useDrug(name, cost, wena, hype, odklejka, addiction) {
    if (gameState.money >= cost) {
        gameState.money -= cost;
        gameState.wena += wena;
        gameState.hype += hype;
        gameState.odklejka += (odklejka + 2); // Lekki wzrost przy każdym użyciu
        gameState.addiction += addiction;
        
        clampStats();
        updateStatsUI();
        
        if (gameState.addiction >= 100) {
            nextTurn(); // Triggers overdose ending
        } else {
            alert(`Wziąłeś: ${name}. Czujesz niesamowity przypływ weny (${wena > 0 ? '+'+wena : wena}), ale Twój nałóg i odklejka rosną!`);
            renderDrugs();
        }
    } else {
        alert("Brak kasy! Nawet na to cię nie stać.");
    }
}

function goRehab() {
    if (gameState.money >= 10000) {
        if (gameState.addiction <= 0) {
            alert("Nie potrzebujesz odwyku, jesteś czysty!");
            return;
        }
        gameState.money -= 10000;
        gameState.addiction = 0;
        gameState.rehabs += 1;
        gameState.year += 1;
        gameState.age += 1;
        
        clampStats();
        updateStatsUI();
        
        alert("Wychodzisz z prywatnego ośrodka po roku terapii. Jesteś czysty, ale lżejszy o 10 000 PLN. Świat idzie naprzód.");
        renderDrugs();
    } else {
        alert("Prywatny odwyk kosztuje 10 000 PLN. Zbieraj hajs na detoks.");
    }
}
