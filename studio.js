function renderStudio() {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    let html = `<h2>🎙️ STUDIO NAGRANIOWE</h2>`;
    html += `<p>Tutaj wykuwasz swoją legendę. Masz <span style="color:var(--accent-green); font-weight:bold; font-size:18px;">${Math.round(gameState.wena)}</span> Weny.</p>`;
    
    eventWindow.innerHTML = html;
    actionButtons.innerHTML = '';
    
    const studioOptions = [
        {
            text: "Nagraj luźny Singiel (Koszt: 15 Weny)",
            action: () => processRelease("singiel")
        },
        {
            text: "Wydaj Album Solo (Koszt: 50 Weny)",
            action: () => processRelease("solo")
        },
        {
            text: "Wydaj Album w Zespole (Koszt: 40 Weny, -5000 PLN)",
            action: () => processRelease("zespol")
        },
        {
            text: "ALBUM Z PRODUCENTAMI Z USA KTÓRZY SWÓJ PRIME MIELI 20 LAT TEMU (Koszt: 70 Weny, -20000 PLN)",
            action: () => processRelease("usa_boomers")
        },
        {
            text: "ALBUM W DUECIE Z PRODUCENTEM Z TOPKI (Koszt: 60 Weny, -10000 PLN)",
            action: () => processRelease("topka_collab")
        }
    ];

    studioOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-action';
        btn.innerText = opt.text;
        btn.onclick = () => {
            const allBtns = actionButtons.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);
            opt.action();
        };
        actionButtons.appendChild(btn);
    });

    const backBtn = document.createElement('button');
    backBtn.className = 'btn-action';
    backBtn.style.borderColor = 'var(--accent-red)';
    backBtn.innerText = "Wróć do gry";
    backBtn.onclick = renderCurrentEvent;
    actionButtons.appendChild(backBtn);
}

function processRelease(type) {
    const costs = {
        "singiel": { wena: 15, money: 0 },
        "solo": { wena: 50, money: 0 },
        "zespol": { wena: 40, money: 5000 },
        "usa_boomers": { wena: 70, money: 20000 },
        "topka_collab": { wena: 60, money: 10000 }
    };

    if (gameState.wena < costs[type].wena) {
        alert("Masz za mało Weny! Odpocznij albo kup coś używkowego w Sklepie.");
        return;
    }
    if (gameState.money < costs[type].money) {
        alert("Nie stać cię na to! (Potrzebujesz " + costs[type].money + " PLN)");
        return;
    }

    gameState.wena -= costs[type].wena;
    gameState.money -= costs[type].money;
    
    if (typeof updateStatsUI === 'function') updateStatsUI();

    if (type === "singiel") {
        gameState.currentAlbumTheme = "BRAK"; 
        renderStyleSelection(type);
    } else {
        renderThemeAndStyleSelection(type);
    }
}

function renderStyleSelection(type) {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    eventWindow.innerHTML = `
        <h2>🎵 WYBIERZ STYL SINGLA</h2>
        <p>W jakim klimacie nagrywasz ten kawałek?</p>
        <div style="margin-top: 20px; text-align: left;">
            <label for="studio-track-name" style="color:white; font-weight: bold; display:block; margin-bottom:5px;">Tytuł Singla:</label>
            <input type="text" id="studio-track-name" placeholder="Wpisz tytuł..." style="background: #111; color: #fff; padding: 15px; border: 2px solid #555; width:100%; margin-bottom:20px; font-size: 14px; border-radius:4px; outline:none;">

            <label for="studio-style-select" style="color:var(--accent-purple); font-weight: bold;">Styl muzyczny:</label>
            <select id="studio-style-select" style="background: #111; color: #fff; padding: 15px; border: 2px solid var(--accent-purple); width:100%; margin-bottom:10px; font-size: 16px;">
                <option value="Ulica / Hardcore" ${gameState.style === 'Ulica / Hardcore' ? 'selected' : ''}>Ulica / Hardcore</option>
                <option value="Boom Bap / Truskul" ${gameState.style === 'Boom Bap / Truskul' ? 'selected' : ''}>Boom Bap / Truskul</option>
                <option value="Trap / Newschool" ${gameState.style === 'Trap / Newschool' ? 'selected' : ''}>Trap / Newschool</option>
                <option value="Melobanger / R&B" ${gameState.style === 'Melobanger / R&B' ? 'selected' : ''}>Melobanger / R&B</option>
            </select>
        </div>
    `;
    
    actionButtons.innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'btn-action';
    btn.innerText = "Dalej -> Wybierz Promocję";
    btn.onclick = () => {
        btn.disabled = true;
        gameState.tempStyle = document.getElementById('studio-style-select').value;
        gameState.currentAlbumName = document.getElementById('studio-track-name').value || `Singiel Rok ${gameState.year}`;
        renderFeatSelection(type);
    };
    actionButtons.appendChild(btn);
}

function renderThemeAndStyleSelection(type) {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    const themes = [
        { id: "RYMY NA CZASOWNIKACH", name: "RYMY NA CZASOWNIKACH (Tani, bazowy zysk)" },
        { id: "PŁYTA O WSZYSTKIM", name: "PŁYTA O WSZYSTKIM (Średnie staty)" },
        { id: "WIZJA ARTYSTYCZNA", name: "WIZJA ARTYSTYCZNA KTÓREJ NIKT NIE ZROZUMIE (Hit albo Odklejka)" },
        { id: "OSTATNIA PŁYTA", name: "'OSTATNIA PŁYTA' PO KTÓREJ NAGRASZ JESZCZE 5 (+Hype, -Respekt)" },
        { id: "PICIE Z PRODUCENTEM", name: "PŁYTA PO 5 DNIACH PICIA Z PRODUCENTEM POD KEMPINGIEM GDZIEŚ W PARZYMIECHACH (+Odklejka)" },
        { id: "POWRÓT I SKOŃCZENIE Z NAŁOGAMI", name: "PŁYTA O POWROCIE I SKOŃCZENIU Z NAŁOGAMI I ŻE CAŁA BRANŻA KŁAMIE (-Nałóg)" },
        { id: "SKOPIOWANIE AMERYCZKI", name: "SKOPIOWANIE AMERYCZKI (+Hajs, -Street Credit)" }
    ];

    let themeOptionsHtml = themes.map(t => `<option value="${t.id}">${t.name}</option>`).join('');

    eventWindow.innerHTML = `
        <h2>🎨 WIZJA ARTYSTYCZNA PŁYTY</h2>
        <p>Zanim wypuścisz materiał, określ jego brzmienie i główny motyw. To zadecyduje o ostatecznym odbiorze płyty.</p>
        
        <div style="margin-top: 25px; text-align: left; background: rgba(0,0,0,0.3); padding: 20px; border-radius: 8px; border: 1px solid #333;">
            <label for="studio-album-name" style="color:white; font-weight: bold; display:block; margin-bottom:5px;">Tytuł Albumu:</label>
            <input type="text" id="studio-album-name" placeholder="Wpisz nazwę płyty..." style="background: #111; color: #fff; padding: 15px; border: 2px solid #555; width:100%; margin-bottom:20px; font-size: 14px; border-radius:4px; outline:none;">

            <label for="studio-style-select" style="color:var(--accent-purple); font-weight: bold; display:block; margin-bottom:5px;">Styl muzyczny:</label>
            <select id="studio-style-select" style="background: #111; color: #fff; padding: 15px; border: 2px solid var(--accent-purple); width:100%; margin-bottom:20px; font-size: 14px; border-radius:4px; outline:none;">
                <option value="Ulica / Hardcore" ${gameState.style === 'Ulica / Hardcore' ? 'selected' : ''}>Ulica / Hardcore</option>
                <option value="Boom Bap / Truskul" ${gameState.style === 'Boom Bap / Truskul' ? 'selected' : ''}>Boom Bap / Truskul</option>
                <option value="Trap / Newschool" ${gameState.style === 'Trap / Newschool' ? 'selected' : ''}>Trap / Newschool</option>
                <option value="Melobanger / R&B" ${gameState.style === 'Melobanger / R&B' ? 'selected' : ''}>Melobanger / R&B</option>
            </select>

            <label for="studio-theme-select" style="color:var(--accent-green); font-weight: bold; display:block; margin-bottom:5px;">Motyw Przewodni:</label>
            <select id="studio-theme-select" style="background: #111; color: #fff; padding: 15px; border: 2px solid var(--accent-green); width:100%; font-size: 14px; border-radius:4px; outline:none;">
                ${themeOptionsHtml}
            </select>
        </div>
    `;
    
    actionButtons.innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'btn-action';
    btn.innerText = "Dalej -> Wybierz Promocję";
    btn.onclick = () => {
        const allBtns = actionButtons.querySelectorAll('button');
        allBtns.forEach(b => b.disabled = true);
        gameState.tempStyle = document.getElementById('studio-style-select').value;
        gameState.currentAlbumTheme = document.getElementById('studio-theme-select').value;
        gameState.currentAlbumName = document.getElementById('studio-album-name').value || `Album Rok ${gameState.year}`;
        renderFeatSelection(type);
    };
    actionButtons.appendChild(btn);
}

function renderFeatSelection(type) {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    eventWindow.innerHTML = `<h2>🎤 WYBIERZ GOŚCI (FEATY)</h2>
    <p>Z kim nagrywasz ten materiał? Gościnne zwrotki podbiją liczby, ale kosztują pieniądze lub nerwy.</p>`;
    
    actionButtons.innerHTML = '';

    const featOptions = [
        { text: "Brak gości (Solowo) - 0 PLN", cost: 0, hypeBonus: 0, fameBonus: 0, respectBonus: 0, wenaBonus: 0 },
        { text: "Raper z Podziemia - Koszt: 100 PLN (Na szlugi i piwo)", cost: 100, hypeBonus: 0, fameBonus: 0, respectBonus: 15, wenaBonus: 0 },
        { text: "Raper z Topki - Koszt: 200,000 PLN", cost: 200000, hypeBonus: 25, fameBonus: 15, respectBonus: 0, wenaBonus: 0 },
        { text: "Raper z USA - Koszt: 1,000,000 PLN", cost: 1000000, hypeBonus: 60, fameBonus: 30, respectBonus: 0, wenaBonus: -20 }
    ];

    featOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-action';
        btn.innerText = opt.text;
        
        if (gameState.money < opt.cost) {
            btn.disabled = true;
            btn.style.opacity = '0.5';
        }
        
        btn.onclick = () => {
            const allBtns = actionButtons.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);
            
            gameState.money -= opt.cost;
            gameState.currentAlbumFeat = opt;
            renderPromoSelection(type);
        };
        actionButtons.appendChild(btn);
    });
}

function renderPromoSelection(type) {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    eventWindow.innerHTML = `<h2>📣 WYBIERZ STRATEGIĘ PROMOCYJNĄ</h2>
    <p>Jak chcesz wypromować to wydawnictwo, żeby wykręcić liczby na liście OLiS?</p>`;
    
    actionButtons.innerHTML = '';

    const promoOptions = [
        {
            text: "Czysty Hip-Hop. Liczy się tylko muzyka.",
            hypeBonus: 0,
            fameBonus: 0,
            respectBonus: 20
        },
        {
            text: "Zdissuj Lokalną Legende (+ Hype, - Respekt)",
            hypeBonus: 30,
            fameBonus: 10,
            respectBonus: -15
        },
        {
            text: "Wbij się na live telewizji i krzycz zza pleców o płycie i udawaj, że ruchasz prezenterke. (+ Fejm, - Street Cred)",
            hypeBonus: 20,
            fameBonus: 40,
            respectBonus: -30
        },
        {
            text: "Zatrudnij kogoś od marketingu (-10 000 PLN)",
            cost: 10000,
            hypeBonus: 40,
            fameBonus: 0,
            respectBonus: -20
        },
        {
            text: "DOJEBANY PREORDER Z GADŻETAMI Z CHIN, OTWIERACZEM DO PIWA, ZAPACHEM DO AUTA O SMAKU MOCNEJ TATRY, I 3 SZTUKI WLEPEK (-15 000 PLN)",
            cost: 15000,
            hypeBonus: 50,
            fameBonus: 10,
            respectBonus: -30
        }
    ];

    promoOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-action';
        btn.innerText = opt.text;
        btn.onclick = () => {
            if (opt.cost && gameState.money < opt.cost) {
                alert("Nie stać cię na to!");
                return;
            }
            const allBtns = actionButtons.querySelectorAll('button');
            allBtns.forEach(b => b.disabled = true);
            
            if (opt.cost) gameState.money -= opt.cost;
            finalizeRelease(type, opt);
        };
        actionButtons.appendChild(btn);
    });
}

function finalizeRelease(type, promo) {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');

    if (gameState.label !== "Brak (Niezależny)" && type !== "singiel" && Math.random() < 0.15) {
        eventWindow.innerHTML = `
            <h2 style="color:var(--accent-red);">🚨 ODRZUT Z WYTWÓRNI 🚨</h2>
            <p>DZWONIŁ MANAGER WYTWÓRNI, NIE WYDA TEJ PŁYTY BO TO KOMPLETNE GÓWNO, MÓWI, ŻEBYŚ NAGRAŁ COŚ INNEGO ALBO SPIERDALAŁ.</p>
            <p>Kasa wydana na studio i promo przepadła.</p>
        `;
        actionButtons.innerHTML = '';
        
        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-action';
        nextBtn.innerText = "Zrozumiałem (Koniec tury)";
        nextBtn.onclick = () => {
            applyEffects({ Odklejka: 5, Wena: -10 });
            nextTurn();
        };
        actionButtons.appendChild(nextBtn);
        return;
    }

    let moneyGain = 0;
    let hypeGain = 0;
    let fameGain = 0;
    let respectGain = 0;
    let labelMod = LABELS[gameState.label] || {};
    
    if (type !== "singiel" && gameState.contractAlbumsLeft > 0) {
        gameState.contractAlbumsLeft--;
        gameState.turnsSinceAdvance = 0;
        if (gameState.contractAlbumsLeft === 0) {
            alert(`Ukończyłeś kontrakt wydawniczy z ${gameState.label}! Od teraz jesteś z powrotem niezależny.`);
            gameState.label = "Brak (Niezależny)";
        }
    }

    let baseMultiplier = 1;
    if (gameState.era === 2) baseMultiplier = 2;
    if (gameState.era === 3) baseMultiplier = 5;
    if (gameState.era === 4) baseMultiplier = 10;

    if (type === "singiel") {
        moneyGain = (gameState.hype * 50 + gameState.fame * 100) * baseMultiplier;
        hypeGain = 10 + promo.hypeBonus;
        fameGain = 1 + promo.fameBonus;
        respectGain = 5 + promo.respectBonus;
    } else if (type === "solo") {
        moneyGain = (gameState.hype * 150 + gameState.fame * 300) * baseMultiplier;
        hypeGain = 20 + promo.hypeBonus;
        fameGain = 5 + promo.fameBonus;
        respectGain = 15 + promo.respectBonus;
    } else if (type === "zespol") {
        moneyGain = ((gameState.hype * 150 + gameState.fame * 300) * baseMultiplier) * 0.5;
        hypeGain = 40 + promo.hypeBonus;
        fameGain = 10 + promo.fameBonus;
        respectGain = 20 + promo.respectBonus;
    } else if (type === "usa_boomers") {
        moneyGain = (gameState.hype * 180 + gameState.fame * 350) * baseMultiplier;
        hypeGain = 30 + promo.hypeBonus;
        fameGain = 20 + promo.fameBonus;
        respectGain = 40 + promo.respectBonus;
    } else if (type === "topka_collab") {
        moneyGain = (gameState.hype * 200 + gameState.fame * 400) * baseMultiplier;
        hypeGain = 60 + promo.hypeBonus;
        fameGain = 30 + promo.fameBonus;
        respectGain = 10 + promo.respectBonus;
    }

    // Aplikowanie Modifikatorów z Featu
    if (gameState.currentAlbumFeat) {
        hypeGain += gameState.currentAlbumFeat.hypeBonus;
        fameGain += gameState.currentAlbumFeat.fameBonus;
        respectGain += gameState.currentAlbumFeat.respectBonus;
        gameState.wena += gameState.currentAlbumFeat.wenaBonus;
        if (gameState.wena < 0) gameState.wena = 0;
    }

    // Aplikowanie Modifikatorów z MOTYWU PŁYTY
    if (gameState.currentAlbumTheme === "RYMY NA CZASOWNIKACH") {
        respectGain -= 10;
        fameGain += 5;
    } else if (gameState.currentAlbumTheme === "WIZJA ARTYSTYCZNA") {
        if (Math.random() > 0.5) {
            fameGain += 30; hypeGain += 20; respectGain += 20;
        } else {
            gameState.odklejka += 30; respectGain -= 15; moneyGain *= 0.5;
        }
    } else if (gameState.currentAlbumTheme === "OSTATNIA PŁYTA") {
        hypeGain += 40; respectGain -= 15; moneyGain *= 1.5;
    } else if (gameState.currentAlbumTheme === "PICIE Z PRODUCENTEM") {
        gameState.odklejka += 40; hypeGain += Math.floor(Math.random() * 50); respectGain -= 5;
    } else if (gameState.currentAlbumTheme === "POWRÓT I SKOŃCZENIE Z NAŁOGAMI") {
        respectGain += 30; fameGain += 15; gameState.addiction = Math.max(0, gameState.addiction - 30);
    } else if (gameState.currentAlbumTheme === "SKOPIOWANIE AMERYCZKI") {
        moneyGain *= 2.5; hypeGain += 35; respectGain -= 40; gameState.streetCredit -= 20;
    }

    const chosenStyle = gameState.tempStyle || gameState.style;
    // Trend bonus
    let quality = Math.floor(Math.random() * 100);
    if (chosenStyle === gameState.currentTrend) {
        quality += 20; 
        moneyGain *= 1.2;
    }

    applyEffects({ 
        Kasa: moneyGain, 
        Hype: hypeGain, 
        Fejm: fameGain,
        Respekt: respectGain
    });

    let olisText = "";
    let statusText = "";
    let statusRecord = "";
    if (type !== "singiel") {
        let olisScore = gameState.fame + gameState.hype + (promo.hypeBonus / 2);
        let olisPlace = 50; 
        
        if (olisScore > 150) olisPlace = 1;
        else if (olisScore > 100) olisPlace = Math.floor(Math.random() * 3) + 2;
        else if (olisScore > 60) olisPlace = Math.floor(Math.random() * 10) + 5; 
        else if (olisScore > 30) olisPlace = Math.floor(Math.random() * 35) + 15;

        if (olisPlace <= 50) {
            olisText = `<br><span style="color:var(--accent-purple);">Płyta debiutuje na <strong>#${olisPlace} miejscu listy OLiS!</strong></span>`;
            if (olisPlace === 1) applyEffects({ Fejm: 20 });
        } else {
            olisText = `<br><span style="color:#aaa;">Niestety, album przepadł w gąszczu premier i nie trafił na listę OLiS.</span>`;
        }

        if (olisScore > 250) {
            statusText = `<br><br><span style="color: cyan; font-weight:bold;">💿 ZDOBYWASZ DIAMENTOWĄ PŁYTĘ!</span>`;
            statusRecord = "Diament";
            gameState.diamondRecords = (gameState.diamondRecords || 0) + 1;
            applyEffects({ Fejm: 50, Kasa: 250000 });
        }
        else if (olisScore > 160) {
            statusText = `<br><br><span style="color: silver; font-weight:bold;">💿 ZDOBYWASZ PLATYNOWĄ PŁYTĘ!</span>`;
            statusRecord = "Platyna";
            gameState.platinumRecords += 1;
            applyEffects({ Fejm: 30, Kasa: 60000 });
        }
        else if (olisScore > 80) {
            statusText = `<br><br><span style="color: gold; font-weight:bold;">📀 ZDOBYWASZ ZŁOTĄ PŁYTĘ!</span>`;
            statusRecord = "Złoto";
            gameState.goldRecords += 1;
            applyEffects({ Fejm: 15, Kasa: 10000 });
        }
        
        let albumTitle = gameState.currentAlbumName || `Album Rok ${gameState.year}`;
        if (gameState.currentAlbumTheme && gameState.currentAlbumTheme !== "BRAK") {
            albumTitle = `${albumTitle} (${gameState.currentAlbumTheme})`;
        }
        
        // Zapisanie do historii
        gameState.releasedAlbums.push({
            title: albumTitle,
            type: type,
            year: gameState.year,
            olisPlace: olisPlace,
            status: statusRecord,
            theme: gameState.currentAlbumTheme || "BRAK",
            style: chosenStyle
        });
    }

    eventWindow.innerHTML = `<h2>Wydawnictwo wypuszczone!</h2>
    <p>Rozesłałeś promo, klip hula po sieci.</p>
    <p style="color:var(--accent-green);">Zarobiłeś ok. ${Math.round(moneyGain * 0.25)} PLN z pierwszego rzutu!</p>
    ${olisText}
    ${statusText}`;
    
    actionButtons.innerHTML = '';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-action';
    nextBtn.innerText = "Dalej";
    nextBtn.onclick = () => {
        nextBtn.disabled = true;
        delete gameState.tempStyle; // czyszczenie zmiennej tymczasowej
        delete gameState.currentAlbumFeat; // reset featu
        delete gameState.currentAlbumName; // czyszczenie tytulu
        delete gameState.currentAlbumTheme; // czyszczenie tematu
        if (type !== "singiel") {
            if (typeof renderReviews === "function") {
                renderReviews(gameState.releasedAlbums.length - 1);
            } else {
                applyEffects({});
                nextTurn();
            }
        } else {
            // Singiel nie ma recenzji
            applyEffects({});
            nextTurn();
        }
    };
    actionButtons.appendChild(nextBtn);
}

function processDiss() {
    if (gameState.wena < 30) {
        alert("Masz za mało Weny, by wypluć z siebie taki gniew (potrzeba 30).");
        return;
    }
    
    gameState.wena -= 30;
    
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    let result = Math.random();
    let text = "";
    
    if (result > 0.6) {
        gameState.beefsWon += 1;
        text = `<h2 style="color:var(--accent-purple);">Zmasakrowałeś Typa!</h2>
        <p>Twój diss to majstersztyk. Wypunktowałeś wszystkie jego wady. Cała Polska rapuje twoje linijki.</p>
        <p style="color:var(--accent-green);">+15 Fejm, +20 Respekt, +25 Hype</p>`;
        applyEffects({ Fejm: 15, Respekt: 20, Hype: 25 });
    } else if (result > 0.3) {
        text = `<h2 style="color:yellow;">Wyrównana Walka</h2>
        <p>Przeciwnik szybko odpowiedział i zdania są podzielone. Oboje zyskaliście trochę szumu, ale nikt nie wygrał.</p>
        <p style="color:var(--accent-green);">+10 Hype, -5 Respekt</p>`;
        applyEffects({ Hype: 10, Respekt: -5 });
    } else {
        gameState.beefsLost += 1;
        text = `<h2 style="color:var(--accent-red);">Sromotna Porażka</h2>
        <p>Twój diss był słaby. Przeciwnik odbił piłeczkę tak mocno, że stałeś się pośmiewiskiem internetu.</p>
        <p style="color:var(--accent-red);">-15 Respekt, -10 Fejm, +20 Odklejka</p>`;
        applyEffects({ Respekt: -15, Fejm: -10, Odklejka: 20 });
    }
    
    eventWindow.innerHTML = text;
    actionButtons.innerHTML = '';
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-action';
    nextBtn.innerText = "Dalej";
    nextBtn.onclick = () => {
        nextBtn.disabled = true;
        applyEffects({});
        nextTurn();
    };
    actionButtons.appendChild(nextBtn);
}
