// Stan biznesowy
gameState.hasMerch = false;
gameState.ownLabel = false;
gameState.labelRappers = 0; // Ilu ziomków z Topki podpisałeś

function renderBiznes() {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    let html = `<h2>💼 IMPERIUM BIZNESOWE</h2>`;
    html += `<p>Rap to nie tylko muzyka, to też grube interesy. Zainwestuj tu swoją gotówkę.</p>`;
    
    // Status Merchu
    if (gameState.hasMerch) {
        html += `<div style="padding: 10px; background:#111; border:1px solid var(--accent-green); margin-bottom: 10px;">
            <strong style="color:var(--accent-green);">👕 WŁASNA MARKA ODZIEŻOWA: AKTYWNA</strong><br>
            <span style="font-size:12px; color:#aaa;">Generuje stały zysk zależny od Twojego Hype'u co turę.</span>
        </div>`;
    }

    // Status Labelu
    if (gameState.ownLabel) {
        html += `<div style="padding: 10px; background:#111; border:1px solid gold; margin-bottom: 10px;">
            <strong style="color:gold;">🏢 WŁASNA WYTWÓRNIA: AKTYWNA</strong><br>
            <span style="font-size:12px; color:#aaa;">Podpisani artyści: ${gameState.labelRappers} | Pobierasz z nich % co turę.</span>
        </div>`;
    }
    
    // Status NFT
    if (gameState.hasNFT) {
        html += `<div style="padding: 10px; background:#111; border:1px solid cyan; margin-bottom: 10px;">
            <strong style="color:cyan;">🌐 KRYPTOWALUTA (NFT): AKTYWNA</strong><br>
            <span style="font-size:12px; color:#aaa;">Generuje hajs, ale co turę delikatnie rośnie Odklejka.</span>
        </div>`;
    }

    // Status Folarski Film
    if (gameState.hasDocu) {
        html += `<div style="padding: 10px; background:#111; border:1px solid orange; margin-bottom: 10px;">
            <strong style="color:orange;">🎥 FILM O PŁASKIEJ ZIEMI: W SIECI</strong><br>
            <span style="font-size:12px; color:#aaa;">Szury rzucają pieniędzmi, ale twój Respekt sukcesywnie spada.</span>
        </div>`;
    }
    
    // Garaż (Auto)
    html += `<div style="padding: 10px; background:#111; border:1px solid var(--accent-purple); margin-bottom: 10px;">
        <strong style="color:var(--accent-purple);">🚗 GARAŻ: ${gameState.car}</strong><br>
        <span style="font-size:12px; color:#aaa;">Twój aktualny wóz (kupisz nowy w Sklepie).</span>
    </div>`;

    // Kwadrat (Mieszkanie)
    html += `<div style="padding: 10px; background:#111; border:1px solid var(--accent-red); margin-bottom: 10px;">
        <strong style="color:var(--accent-red);">🏠 KWADRAT: ${gameState.house}</strong><br>
        <span style="font-size:12px; color:#aaa;">Twoje aktualne miejsce zamieszkania (kupisz w Sklepie).</span>
    </div>`;

    eventWindow.innerHTML = html;
    actionButtons.innerHTML = '';

    // Przyciski akcji
    if (!gameState.hasMerch) {
        const btnMerch = document.createElement('button');
        btnMerch.className = 'btn-action';
        btnMerch.innerText = "Załóż szwalnię i odpal ciuchy (-15 000 PLN)";
        btnMerch.onclick = () => {
            if (gameState.money >= 15000) {
                gameState.money -= 15000;
                gameState.hasMerch = true;
                alert("Otworzyłeś własną markę odzieżową! Zyski będą spływać co turę.");
                renderBiznes();
            } else {
                alert("Nie stać cię na taki biznes. Potrzebujesz 15 000 PLN.");
            }
        };
        actionButtons.appendChild(btnMerch);
    }

    if (!gameState.hasNFT) {
        const btnNFT = document.createElement('button');
        btnNFT.className = 'btn-action';
        btnNFT.innerText = "Wypuść Token NFT ze swoją twarzą (-20 000 PLN)";
        btnNFT.onclick = () => {
            if (gameState.money >= 20000) {
                gameState.money -= 20000;
                gameState.hasNFT = true;
                alert("Wypuściłeś kryptowalutę! Fani ją kupują, hajs się zgadza, ale ulica patrzy na to z zażenowaniem.");
                renderBiznes();
            } else {
                alert("Nie stać cię na taki biznes. Potrzebujesz 20 000 PLN.");
            }
        };
        actionButtons.appendChild(btnNFT);
    }

    if (!gameState.hasDocu) {
        const btnDocu = document.createElement('button');
        btnDocu.className = 'btn-action';
        let disabled = (gameState.odklejka < 40);
        if (disabled) {
            btnDocu.innerText = "Film o Płaskiej Ziemi (Wymaga minimum 40 Odklejki)";
            btnDocu.style.opacity = '0.5';
        } else {
            btnDocu.innerText = "Wyprodukuj Film o Płaskiej Ziemi (-10 000 PLN)";
            btnDocu.style.borderColor = 'orange';
            btnDocu.style.color = 'orange';
        }
        btnDocu.onclick = () => {
            if (disabled) {
                alert("Jesteś zbyt normalny. Twoja Odklejka musi wynosić minimum 40, żeby w to wejść.");
                return;
            }
            if (gameState.money >= 10000) {
                gameState.money -= 10000;
                gameState.hasDocu = true;
                alert("Film poszedł w świat! Szury rzucają w ciebie hajsem, ale w branży jesteś pośmiewiskiem.");
                renderBiznes();
            } else {
                alert("Nie masz 10 000 PLN na produkcję.");
            }
        };
        actionButtons.appendChild(btnDocu);
    }

    if (!gameState.ownLabel) {
        const btnLabel = document.createElement('button');
        btnLabel.className = 'btn-action';
        btnLabel.innerText = "Załóż własny Label (-50 000 PLN)";
        btnLabel.onclick = () => {
            if (gameState.money >= 50000) {
                if (gameState.fame < 50) {
                    alert("Masz za mało Fejmu (min. 50), żeby prowadzić własny label! Nikt nie weźmie Cię na poważnie.");
                    return;
                }
                gameState.money -= 50000;
                gameState.ownLabel = true;
                gameState.label = "WŁASNY LABEL";
                alert("Założyłeś własną wytwórnię! Zrezygnowałeś z dotychczasowego wydawcy. Teraz możesz podpisywać kontrakty z artystami.");
                renderBiznes();
            } else {
                alert("Nie stać cię na założenie wytwórni. Potrzebujesz 50 000 PLN.");
            }
        };
        actionButtons.appendChild(btnLabel);
    } else {
        const btnSign = document.createElement('button');
        btnSign.className = 'btn-action';
        btnSign.style.borderColor = 'gold';
        btnSign.innerText = "Zwerbuj Ropera z Topki (Wymaga: 70 Fejm)";
        btnSign.onclick = () => {
            if (gameState.fame < 70) {
                alert("Masz za mało Fejmu, żeby ściągnąć poważnego gracza do swojego labelu.");
                return;
            }
            
            const availableRappers = typeof aiRappers !== 'undefined' ? aiRappers : [{name: "Młody Wilk"}];
            const chosenRapper = availableRappers[Math.floor(Math.random() * availableRappers.length)].name;
            
            let html = `
                <h2>Podpisujesz kontrakt z: ${chosenRapper}</h2>
                <p>Ustal warunki dealu. Zbyt niska zaliczka sprawi, że zacznie ćpać i nic nie nagra.</p>
                <div style="text-align:left; margin-bottom: 20px;">
                    <label>Zaliczka (PLN): <span id="advance-val" style="color:var(--accent-green);">100000</span></label><br>
                    <input type="range" id="advance-slider" min="10000" max="500000" step="10000" value="100000" oninput="document.getElementById('advance-val').innerText = this.value" style="width:100%;">
                </div>
                <div style="text-align:left; margin-bottom: 20px;">
                    <label>Ilość Płyt: <span id="albums-val" style="color:var(--accent-purple);">2</span></label><br>
                    <input type="range" id="albums-slider" min="1" max="4" step="1" value="2" oninput="document.getElementById('albums-val').innerText = this.value" style="width:100%;">
                </div>
            `;
            
            eventWindow.innerHTML = html;
            actionButtons.innerHTML = '';
            
            const confirmBtn = document.createElement('button');
            confirmBtn.className = 'btn-action';
            confirmBtn.innerText = "Podpisz Kontrakt";
            confirmBtn.onclick = () => {
                const advance = parseInt(document.getElementById('advance-slider').value);
                const albums = parseInt(document.getElementById('albums-slider').value);
                
                if (gameState.money >= advance) {
                    gameState.money -= advance;
                    gameState.signedRoster.push({
                        name: chosenRapper,
                        albumsLeft: albums,
                        avgInvestment: advance / albums
                    });
                    gameState.labelRappers++;
                    alert(`Podpisałeś ${chosenRapper} na ${albums} płyty! Wypłacono ${advance} PLN zaliczki.`);
                    renderBiznes();
                } else {
                    alert("Nie masz wystarczająco dużo pieniędzy na koncie!");
                }
            };
            actionButtons.appendChild(confirmBtn);
            
            const cancelBtn = document.createElement('button');
            cancelBtn.className = 'btn-action';
            cancelBtn.style.borderColor = 'var(--accent-red)';
            cancelBtn.innerText = "Anuluj";
            cancelBtn.onclick = renderBiznes;
            actionButtons.appendChild(cancelBtn);
        };
        actionButtons.appendChild(btnSign);
    }

    const backBtn = document.createElement('button');
    backBtn.className = 'btn-action';
    backBtn.style.borderColor = 'var(--accent-red)';
    backBtn.innerText = "Wróć do gry";
    backBtn.onclick = renderCurrentEvent;
    actionButtons.appendChild(backBtn);
}

// Globalny hook do wpięcia zysków biznesowych (wywoływany w game_logic.js -> applyEffects)
function processBiznesTurn() {
    let profit = 0;
    
    // Merch
    if (gameState.hasMerch) {
        // Im wyższy Hype, tym szybciej schodzą koszulki
        let merchProfit = Math.floor(gameState.hype * 20); 
        profit += merchProfit;
    }

    // Label
    if (gameState.ownLabel && gameState.labelRappers > 0) {
        // Każdy podopieczny generuje pasywny hajs
        let labelProfit = gameState.labelRappers * 2500;
        profit += labelProfit;
    }

    // NFT
    if (gameState.hasNFT) {
        profit += 8000;
        gameState.odklejka += 2;
    }

    // Film
    if (gameState.hasDocu) {
        profit += 15000;
        gameState.respect -= 2;
        gameState.odklejka += 3;
    }

    return profit;
}
