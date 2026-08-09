function renderBank() {
    const window = document.getElementById('event-window');
    const actions = document.getElementById('action-buttons');
    
    let html = `
        <div id="event-description">
            <h2 style="color:var(--accent-purple);">💰 ZAŁATW HAJS</h2>
            <p>Skończyła się gotówka? Musisz zainwestować w teledysk albo zapłacić papudze? Wybierz źródło pożyczki. Uważaj, bo raty będą ściągane automatycznie po każdej decyzji!</p>
    `;

    if (gameState.loan && gameState.loan.active) {
        html += `
            <div style="background:#222; border: 2px solid red; padding:15px; border-radius:8px; margin-top:20px;">
                <h3 style="color:red; text-align:center;">AKTYWNY DŁUG!</h3>
                <p style="text-align:center;">Do spłaty pozostało: <b>${gameState.loan.turnsLeft}</b> rat po <b>${gameState.loan.paymentPerTurn} PLN</b>.</p>
                <p style="text-align:center; font-size:12px; color:#aaa;">Pieniądze ściągają się automatycznie z twojego konta.</p>
            </div>
        `;
        actions.innerHTML = `<button class="btn-action" onclick="renderCurrentEvent()">Wróc do gry</button>`;
    } else {
        let scamButton = "";
        if (!gameState.usedEpScam) {
            scamButton = `
                <div style="background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center; border: 1px solid var(--accent-red);">
                    <div>
                        <strong style="color:var(--accent-red);">NAGRAJ EP I NIE WYŚLIJ PŁYT (Oszustwo)</strong>
                        <p style="font-size:12px; color:#aaa;">Bierzesz 8,000 PLN z preorderów i znikasz. Twój Respekt i Street Credit spadają do ZERA. <br><b>Można użyć tylko raz!</b></p>
                    </div>
                    <button class="btn-action" style="padding:10px; font-size:12px; border-color:var(--accent-red); color:var(--accent-red);" onclick="useEpScam()">Zrób Scam</button>
                </div>
            `;
        }

        html += `
            <div style="display:grid; grid-template-columns:1fr; gap:10px; margin-top:20px;">
                ${scamButton}
                <div style="background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Od Mamy</strong>
                        <p style="font-size:12px; color:#aaa;">Bierzesz 1,000 PLN. Spłacasz po 100 PLN przez 10 tur (Razem 1,000 PLN - Bez odsetek, ale Respekt spada).</p>
                    </div>
                    <button class="btn-action" style="padding:10px; font-size:12px;" onclick="takeLoan(1000, 100, 10, 'mama')">Pożycz</button>
                </div>
                
                <div style="background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Chwilówka</strong>
                        <p style="font-size:12px; color:#aaa;">Bierzesz 5,000 PLN. Spłacasz po 700 PLN przez 10 tur (Razem 7,000 PLN - Złodziejski procent).</p>
                    </div>
                    <button class="btn-action" style="padding:10px; font-size:12px;" onclick="takeLoan(5000, 700, 10, 'chwilowka')">Pożycz</button>
                </div>

                <div style="background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Kredyt w banku (Tylko dla sławnych)</strong>
                        <p style="font-size:12px; color:#aaa;">Bierzesz 50,000 PLN. Spłacasz po 3000 PLN przez 20 tur. Wymaga >40 Fejmu.</p>
                    </div>
                    <button class="btn-action" style="padding:10px; font-size:12px;" ${gameState.fame < 40 ? 'disabled style="opacity:0.5"' : ''} onclick="takeLoan(50000, 3000, 20, 'bank')">Pożycz</button>
                </div>
                
                <div style="background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <strong>Pieniądze z Miasta (Ryzykowne)</strong>
                        <p style="font-size:12px; color:#aaa;">Bierzesz 200,000 PLN od "Inwestorów". Spłacasz po 15,000 PLN przez 20 tur. Wymaga >70 Street Credit. Utrata reputacji w razie braku spłaty.</p>
                    </div>
                    <button class="btn-action" style="padding:10px; font-size:12px;" ${gameState.streetCredit < 70 ? 'disabled style="opacity:0.5"' : ''} onclick="takeLoan(200000, 15000, 20, 'miasto')">Pożycz</button>
                </div>
            </div>
        `;
        actions.innerHTML = `<button class="btn-action" onclick="renderCurrentEvent()">Wróc do gry</button>`;
    }
    
    html += `</div>`;
    window.innerHTML = html;
}

function takeLoan(amount, payment, turns, type) {
    if (gameState.loan && gameState.loan.active) {
        alert("Masz już aktywny dług!");
        return;
    }
    
    gameState.money += amount;
    gameState.loan = {
        active: true,
        amount: amount,
        paymentPerTurn: payment,
        turnsLeft: turns,
        type: type
    };
    
    if (type === 'mama') {
        gameState.respect -= 10;
        gameState.streetCredit -= 10;
        alert("Pożyczyłeś hajs od mamy. Ulica tego nie szanuje.");
    } else {
        alert(`Wziąłeś pożyczkę w wysokości ${amount} PLN. Będziesz spłacać ${payment} PLN co każdą decyzję!`);
    }
    
    clampStats();
    updateStatsUI();
    renderBank();
}

function useEpScam() {
    if (gameState.usedEpScam) return; // Zabezpieczenie
    
    gameState.usedEpScam = true;
    gameState.money += 8000;
    gameState.respect = 0;
    gameState.streetCredit = 0;
    gameState.policeHeat += 20;
    
    alert("Zabrałeś hajs z preorderów i zapadłeś się pod ziemię. Zyskałeś 8,000 PLN, ale cała branża i ulica uznały Cię za oszusta. Respekt i Street Credit spadają do zera. (+20% Psiarnia)");
    
    clampStats();
    updateStatsUI();
    renderBank();
}
