const drugData = [
    { name: "Taniocha (Klej/Gaz)", cost: 10, wena: 2, hype: -5, odklejka: 25, addiction: 4 },
    { name: "Piwo pod blokiem", cost: 20, wena: 5, hype: 0, odklejka: 2, addiction: 2 },
    { name: "Litr Wódy z Ekipą", cost: 100, wena: 20, hype: 5, odklejka: 10, addiction: 5 },
    { name: "Worek Zioła", cost: 300, wena: 35, hype: 10, odklejka: 15, addiction: 8 },
    { name: "Leki z apteki (Syrop)", cost: 500, wena: 40, hype: 15, odklejka: 20, addiction: 15 },
    { name: "Piguły na rejwie", cost: 800, wena: 60, hype: 20, odklejka: 30, addiction: 12 },
    { name: "Medyczna Marihuana z Recepty", cost: 1000, wena: 45, hype: 5, odklejka: 5, addiction: 3 },
    { name: "Twarde (Białe)", cost: 1500, wena: 80, hype: 25, odklejka: 35, addiction: 20 },
    { name: "Psychodeliki (Grzyby/LSD)", cost: 2500, wena: 120, hype: 10, odklejka: 60, addiction: 5 },
    { name: "Kryształ na imprezie VIP", cost: 3000, wena: 150, hype: 50, odklejka: 50, addiction: 30 }
];

function renderDrugs() {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    // Budujemy cały HTML jako jeden potężny string, zero zabawy z DOM elementami
    let html = `
        <div id="event-description">
            <h2 style="color:var(--accent-purple);">💊 WSPOMAGACZE</h2>
            <p>Nie masz weny? Czujesz presję? Możesz sięgnąć po używki, by natychmiast zyskać Wenę i Hype. Pamiętaj jednak: <strong>Im wyższy Nałóg, tym szybciej stracisz wszystko. Powyżej 50% możesz iść na przymusowy odwyk, a przy 100% kończysz w piachu.</strong></p>
        </div>
        <div style="margin-bottom: 20px;">
    `;
    
    drugData.forEach(d => {
        html += `
            <div style="background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; border-left: 3px solid var(--accent-purple); margin-bottom: 10px;">
                <div>
                    <strong style="color:#fff;">${d.name}</strong><br>
                    <small style="color:#aaa;">Cena: ${d.cost} PLN | Wena: <span style="color:var(--accent-green)">+${d.wena}</span> | Nałóg: <span style="color:var(--accent-red)">+${d.addiction}%</span></small>
                </div>
                <button class="btn-action" style="padding:10px; font-size:12px; border-color:var(--accent-purple);" onclick="useDrug('${d.name}', ${d.cost}, ${d.wena}, ${d.hype}, ${d.odklejka}, ${d.addiction})">Bierz</button>
            </div>
        `;
    });
    
    html += `
        </div>
        <div style="margin-top:20px; background:#111; padding:15px; border:1px solid var(--accent-red); border-radius:8px;">
            <h3 style="color:var(--accent-red); margin-bottom:10px;">🏥 Ośrodek Odwykowy</h3>
            <p style="font-size:12px; color:#aaa; margin-bottom:10px;">Zamknij się w prywatnym ośrodku na kilka miesięcy. Kasuje cały Twój pasek nałogu, ale uderza po kieszeni i tracisz czas.</p>
            <button class="btn-action" style="padding:10px; font-size:12px; border-color:var(--accent-red); color:var(--accent-red);" onclick="goRehab()">Idź na Odwyk (Koszt: 10000 PLN, -1 Rok)</button>
        </div>
    `;
    
    // Wstrzykujemy pełen HTML za jednym zamachem
    eventWindow.innerHTML = html;
    
    // Czyścimy stare przyciski akcji (jeśli jakieś były w stopce)
    actionButtons.innerHTML = '';
    
    // Dodajemy przycisk POWROTU do gry w sekcji action-buttons
    const backBtn = document.createElement('button');
    backBtn.className = 'btn-action';
    backBtn.style.borderColor = 'var(--accent-red)';
    backBtn.innerText = "Wróć do gry";
    backBtn.onclick = renderCurrentEvent;
    actionButtons.appendChild(backBtn);
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
            alert(`Wziąłeś: ${name}. Czujesz niesamowity przypływ weny (+${wena}), ale Twój nałóg i odklejka rosną!`);
            renderDrugs(); // Re-render to show updated stats
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
