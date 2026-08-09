const LABELS = {
    "Brak (Niezależny)": { Kasa: 0, StreetCred: 0, Fejm: 0, Hype: 0, Odklejka: 0, Wena: 0, Respekt: 0 },
    "Beton Records": { Kasa: -0.3, StreetCred: 0, Fejm: 0, Hype: -0.2, Odklejka: 0, Wena: 0.15, Respekt: 0.2 },
    "OTSORP Label": { Kasa: 0.2, StreetCred: 0, Fejm: 0, Hype: 0, Odklejka: 0, Wena: 0, Respekt: 0.25 },
    "SPM Label": { Kasa: 0.4, StreetCred: 0, Fejm: 0, Hype: 0.5, Odklejka: 0.3, Wena: 0, Respekt: -0.25 },
    "KEQuality": { Kasa: 0, StreetCred: 0, Fejm: 0, Hype: 0.3, Odklejka: 0.25, Wena: 0.4, Respekt: -0.15 },
    "GUGA Label": { Kasa: 0, StreetCred: 0, Fejm: -0.2, Hype: 0.45, Odklejka: 0.3, Wena: 0, Respekt: 0.3 },
    "Skok Records": { Kasa: 0.3, StreetCred: 0, Fejm: 0.35, Hype: 0, Odklejka: 0, Wena: -0.15, Respekt: -0.1 },
    "Wielkie Ała": { Kasa: 0, StreetCred: 0, Fejm: 0.3, Hype: 0.25, Odklejka: 0.2, Wena: -0.2, Respekt: 0 },
    "RR Under": { Kasa: -0.9, StreetCred: 0, Fejm: 0, Hype: 0, Odklejka: 0, Wena: 0.1, Respekt: 0.5 },
    "BÓR Records": { Kasa: 0.25, StreetCred: 0, Fejm: -0.1, Hype: -0.1, Odklejka: 0, Wena: 0, Respekt: 0.35 },
    "Def Dżem Polska": { Kasa: 0.5, StreetCred: 0, Fejm: 0.4, Hype: 0, Odklejka: 0, Wena: -0.3, Respekt: -0.4 }
};

// Nadpisanie systemowego alertu
window.alert = function(msg) {
    document.getElementById('custom-alert-text').innerHTML = msg;
    document.getElementById('custom-alert-modal').style.display = 'flex';
};

let gameState = {
    nickname: '', year: 2000, startYear: 2000, age: 16, money: 2137,
    streetCredit: 20, respect: 10, fame: 0, hype: 0, odklejka: 0, wena: 80,
    addiction: 0, policeHeat: 0,
    currentTrend: 'Brak',
    turnsSinceTrendChange: 0,
    contractAlbumsLeft: 0,
    inventory: [],
    releasedAlbums: [],
    signedRoster: [],
    car: 'Brak', house: 'Brak',
    goldRecords: 0, platinumRecords: 0, diamondRecords: 0,
    beefsWon: 0, beefsLost: 0, rehabs: 0,
    style: '', city: '', voivodeship: '',
    label: 'Brak (Niezależny)', era: 1, eventsPlayed: [], turnCount: 0,
    loan: { active: false, amount: 0, paymentPerTurn: 0, turnsLeft: 0, type: '' },
    currentEventRender: null,
    lastReminderTurn: -1,
    lastLabelOfferTurn: -1
};

const citiesByVoivodeship = {
    "Dolnośląskie": ["Wrocław", "Wałbrzych", "Legnica", "Jelenia Góra", "Lubin", "Głogów", "Świdnica", "Bolesławiec", "Oleśnica"],
    "Kujawsko-Pomorskie": ["Bydgoszcz", "Toruń", "Włocławek", "Grudziądz", "Inowrocław", "Brodnica", "Świecie", "Chełmno"],
    "Lubelskie": ["Lublin", "Zamość", "Chełm", "Biała Podlaska", "Puławy", "Świdnik", "Kraśnik", "Łuków"],
    "Lubuskie": ["Gorzów Wielkopolski", "Zielona Góra", "Nowa Sól", "Żary", "Żagań", "Świebodzin"],
    "Łódzkie": ["Łódź", "Piotrków Trybunalski", "Pabianice", "Tomaszów Mazowiecki", "Bełchatów", "Zgierz", "Skierniewice", "Radomsko", "Kutno"],
    "Małopolskie": ["Kraków", "Tarnów", "Nowy Sącz", "Oświęcim", "Chrzanów", "Olkusz", "Nowy Targ", "Bochnia", "Gorlice", "Zakopane"],
    "Mazowieckie": ["Warszawa", "Radom", "Płock", "Siedlce", "Pruszków", "Legionowo", "Ostrołęka", "Piaseczno", "Otwock", "Ciechanów"],
    "Opolskie": ["Opole", "Kędzierzyn-Koźle", "Nysa", "Brzeg", "Kluczbork", "Prudnik"],
    "Podkarpackie": ["Rzeszów", "Przemyśl", "Stalowa Wola", "Mielec", "Tarnobrzeg", "Krosno", "Dębica", "Sanok", "Jarosław"],
    "Podlaskie": ["Białystok", "Suwałki", "Łomża", "Augustów", "Bielsk Podlaski", "Zambrów"],
    "Pomorskie": ["Gdańsk", "Gdynia", "Sopot", "Słupsk", "Tczew", "Rumia", "Starogard Gdański", "Wejherowo", "Chojnice"],
    "Śląskie": ["Katowice", "Częstochowa", "Sosnowiec", "Gliwice", "Zabrze", "Bielsko-Biała", "Bytom", "Rybnik", "Ruda Śląska", "Tychy", "Dąbrowa Górnicza", "Chorzów"],
    "Świętokrzyskie": ["Kielce", "Ostrowiec Świętokrzyski", "Starachowice", "Skarżysko-Kamienna", "Sandomierz", "Końskie"],
    "Warmińsko-Mazurskie": ["Olsztyn", "Elbląg", "Ełk", "Ostróda", "Iława", "Giżycko", "Kętrzyn"],
    "Wielkopolskie": ["Poznań", "Kalisz", "Konin", "Piła", "Ostrów Wielkopolski", "Gniezno", "Leszno", "Swarzędz", "Śrem"],
    "Zachodniopomorskie": ["Szczecin", "Koszalin", "Stargard", "Kołobrzeg", "Świnoujście", "Szczecinek", "Police", "Wałcz"]
};

function updateCities() {
    const wojSelect = document.getElementById('woj-select');
    const citySelect = document.getElementById('city-select');
    if (!wojSelect || !citySelect) return;
    const cities = citiesByVoivodeship[wojSelect.value] || [];
    citySelect.innerHTML = '';
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city; option.textContent = city;
        citySelect.appendChild(option);
    });
}
window.addEventListener('DOMContentLoaded', () => {
    updateCities();
    document.getElementById('woj-select')?.addEventListener('change', updateCities);
});

function calculateEra(year) {
    if (year <= 1999) return 1;
    if (year <= 2007) return 2;
    if (year <= 2014) return 3;
    return 4;
}

function calculateTier() {
    const totalStatus = gameState.fame + gameState.respect + gameState.hype;
    if (gameState.fame > 75) return 4;
    if (gameState.fame > 40) return 3;
    if (gameState.fame > 15 || gameState.hype > 20 || totalStatus > 80) return 2;
    return 1;
}

function getTierName(tier) {
    if (tier === 1) return "PODZIEMIE";
    if (tier === 2) return "LOKALNY GRACZ";
    if (tier === 3) return "MAINSTREAM";
    return "IKONA RAPU";
}

function updateStatsUI() {
    document.getElementById('stat-year').innerText = gameState.year;
    document.getElementById('stat-tier').innerText = getTierName(calculateTier());
    document.getElementById('stat-age').innerText = gameState.age;
    document.getElementById('stat-money').innerText = gameState.money + ' PLN';
    document.getElementById('stat-street').innerText = Math.round(gameState.streetCredit) + '%';
    document.getElementById('stat-respect').innerText = Math.round(gameState.respect) + '%';
    document.getElementById('stat-fame').innerText = Math.round(gameState.fame) + '%';
    document.getElementById('stat-hype').innerText = Math.round(gameState.hype) + '%';
    document.getElementById('stat-odklejka').innerText = Math.round(gameState.odklejka) + '%';
    document.getElementById('stat-wena').innerText = Math.round(gameState.wena);
    
    // Nałóg widoczny zawsze
    document.getElementById('stat-addiction-container').style.display = 'flex';
    document.getElementById('stat-addiction').innerText = Math.round(gameState.addiction) + '%';
    
    document.getElementById('stat-psiarnia-container').style.display = 'flex';
    document.getElementById('stat-psiarnia').innerText = Math.round(gameState.policeHeat) + '%';
    
    document.getElementById('stat-trend').innerText = gameState.currentTrend;
    document.getElementById('stat-label').innerText = gameState.label;
    
    const carEl = document.getElementById('stat-car');
    if (carEl) {
        carEl.innerText = gameState.car;
    }
    
    const houseEl = document.getElementById('stat-house');
    if (houseEl) {
        houseEl.innerText = gameState.house;
    }
}

function startGame() {
    gameState.nickname = document.getElementById('nickname-input').value || 'Nieznany';
    gameState.age = parseInt(document.getElementById('age-input').value);
    gameState.year = parseInt(document.getElementById('year-input').value);
    gameState.startYear = gameState.year;
    gameState.style = document.getElementById('style-select').value;
    gameState.city = document.getElementById('city-select').value;
    gameState.voivodeship = document.getElementById('woj-select').value;
    gameState.era = calculateEra(gameState.year);

    document.getElementById('creator-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'flex';
    
    // Cicha inicjalizacja trendu
    const trends = ["Ulica / Hardcore", "Boom Bap / Truskul", "Trap / Newschool", "Melobanger / R&B"];
    gameState.currentTrend = trends[Math.floor(Math.random() * trends.length)];
    gameState.turnsSinceTrendChange = 0;
    
    // Inicjalizacja statystyk startowych na podstawie wybranego stylu
    if (gameState.style === "Ulica / Hardcore") {
        gameState.wena = 80;
        gameState.streetCredit = 60;
        gameState.hype = 5;
        gameState.respect = 40;
        gameState.fame = 0;
    } else if (gameState.style === "Boom Bap / Truskul") {
        gameState.wena = 120;
        gameState.streetCredit = 40;
        gameState.hype = 0;
        gameState.respect = 50;
        gameState.fame = 0;
    } else if (gameState.style === "Trap / Newschool") {
        gameState.wena = 60;
        gameState.streetCredit = 10;
        gameState.hype = 50;
        gameState.respect = 0;
        gameState.fame = 20;
    } else if (gameState.style === "Melobanger / R&B") {
        gameState.wena = 70;
        gameState.streetCredit = 0;
        gameState.hype = 30;
        gameState.respect = 10;
        gameState.fame = 40;
    }
    
    updateStatsUI();
    
    // Wymuszony event startowy
    const introText = `<h2 style="color:var(--accent-green);">Początek Kariery</h2><p>Jesteś na początku kariery - wydaj album, weź pożyczke i podbij scene!</p>`;
    const introOptions = [
        {
            text: "OK",
            action: () => {
                gameState.currentEventRender = null;
                if (typeof renderStudio === 'function') {
                    renderStudio();
                } else {
                    nextTurn();
                }
            }
        }
    ];
    
    gameState.currentEventRender = { text: introText, options: introOptions };
    renderCurrentEvent();
}

function renderEvent(text, options) {
    const eventWindow = document.getElementById('event-window');
    
    // ZAWSZE czyścimy całe okno ze śmieci z innych modułów (Sklep, Topka, Biznes)
    eventWindow.innerHTML = '<div id="event-description"></div>';
    
    const eventDesc = document.getElementById('event-description');
    const actionContainer = document.getElementById('action-buttons');
    eventDesc.innerHTML = text;
    eventDesc.style.animation = 'none';
    eventDesc.offsetHeight; 
    eventDesc.style.animation = 'fadeIn 0.5s ease-out forwards';
    actionContainer.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-action';
        btn.innerHTML = opt.text;
        btn.onclick = () => {
            btn.disabled = true;
            opt.action();
        };
        actionContainer.appendChild(btn);
    });
}

function renderCurrentEvent() {
    if (gameState.currentEventRender) {
        renderEvent(gameState.currentEventRender.text, gameState.currentEventRender.options);
    } else {
        nextTurn();
    }
}

function clampStats() {
    const keys = ['streetCredit', 'respect', 'fame', 'hype', 'odklejka', 'addiction', 'policeHeat'];
    keys.forEach(k => {
        if (gameState[k] > 100) gameState[k] = 100;
        if (gameState[k] < 0) gameState[k] = 0;
    });
    
    if (gameState.wena > 200) gameState.wena = 200;
    if (gameState.wena < 0) gameState.wena = 0;
    if (gameState.label === "OTSORP Label" && gameState.odklejka > 40) {
        gameState.odklejka = 40;
    }
}

function applyEffects(effects) {
    if (!effects) return;
    const mods = LABELS[gameState.label];
    
    let inf = 1;
    if (gameState.era === 2) inf = 2;
    if (gameState.era === 3) inf = 5;
    if (gameState.era === 4) inf = 10;

    if (effects.Kasa) {
        let chg = effects.Kasa * inf * 0.25;
        if (chg > 0 && mods.Kasa) chg += chg * mods.Kasa;
        if (chg < 0 && mods.Kasa < 0) chg -= chg * Math.abs(mods.Kasa);
        
        if (chg > 0 && gameState.currentTrend === gameState.style) {
            chg = chg * 1.5;
        }
        
        chg = Math.round(chg);
        if (chg < 0 && gameState.money + chg < 0) {
            chg = -gameState.money; // Nie możesz stracić więcej niż masz
        }
        
        gameState.money += chg;
    }

    if (gameState.loan && gameState.loan.active) {
        gameState.money -= gameState.loan.paymentPerTurn;
        gameState.loan.turnsLeft--;
        if (gameState.loan.turnsLeft <= 0) {
            gameState.loan.active = false;
        }
    }

    const statMap = {
        StreetCred: 'streetCredit',
        Fejm: 'fame',
        Hype: 'hype',
        Odklejka: 'odklejka',
        Wena: 'wena',
        Respekt: 'respect'
    };

    if (effects.Wena) {
        let chg = effects.Wena;
        if (chg > 0 && mods.Wena) chg += chg * mods.Wena;
        gameState.wena += chg;
    }
    
    if (effects.Addiction) {
        gameState.addiction += effects.Addiction;
    }
    if (effects.PoliceHeat) {
        let chg = effects.PoliceHeat;
        if (gameState.inventory && gameState.inventory.includes('kastet')) chg *= 2;
        gameState.policeHeat += chg;
    }

    for (let key in effects) {
        if (key === 'Kasa' || key === 'Wena' || key === 'Addiction' || key === 'PoliceHeat') continue;
        let gameKey = statMap[key];
        if (gameKey) {
            let chg = effects[key] * 0.5;
            if (chg > 0 && mods[key]) chg += chg * mods[key];
            if ((key === 'StreetCred' || key === 'Respekt') && chg > 0) {
                chg = chg * 1.2; // 20% łatwiej zdobyć szacunek
            }
            gameState[gameKey] += chg;
        }
    }
    
    gameState.turnCount++;
    if (gameState.turnCount % 7 === 0) {
        gameState.year++;
        gameState.age++;
    }
    gameState.era = calculateEra(gameState.year);
    clampStats();
    updateStatsUI();
}

function checkEndings() {
    if (gameState.year >= 2026 || gameState.year >= gameState.startYear + 10) {
        if (gameState.odklejka > 90 && gameState.streetCredit < 30) return "Czas podsumowań! ZAKOŃCZENIE: Profesjonalny Zawodnik Freak Fightów. Muzyka zeszła na drugi plan. Głównym źródłem utrzymania stały się walki w klatce i awantury na konferencjach.";
        if (gameState.streetCredit === 0 && gameState.money > 1000000 && gameState.fame < 40) return "Czas podsumowań! ZAKOŃCZENIE: Bananowy Producent. Odrzucony przez ulicę, zarabiasz miliony robiąc bity do reklam proszków do prania. Mieszkasz na strzeżonym osiedlu.";
        if (gameState.money >= 10000000 && gameState.fame === 100 && gameState.hype > 80) return "Czas podsumowań! ZAKOŃCZENIE: Wczesna Emerytura w Dubaju. Sprzedałeś katalog funduszom, zbijasz miliony i odcinasz się od rapu.";
        if (gameState.streetCredit === 100 && gameState.money < 500 && gameState.fame < 10) return "Czas podsumowań! ZAKOŃCZENIE: Zapomniany Truskulowiec. Prawdziwy hip-hop skończył się w 90'. Wydajesz płyty po 50 sztuk, sam je pakujesz, a młodzież w ogóle cię nie kojarzy.";
        if (gameState.wena === 0 && gameState.odklejka > 85 && gameState.fame > 50) return "Czas podsumowań! ZAKOŃCZENIE: Gość Streamów IRL. Nie umiesz już skleić zwrotki, ale żyjesz z dymów na streamach i oceniania jedzenia na kamerce.";
        if (gameState.fame > 80 && gameState.wena > 80 && gameState.odklejka > 80 && gameState.era === 4) return "Czas podsumowań! ZAKOŃCZENIE: Prezydent RP. Zapowiedź startu dla żartu poszła tak dobrze, że wygrałeś wybory. Orędzia wygłaszasz w rymach.";
        if (gameState.money < -200000 && gameState.odklejka > 70) return "Czas podsumowań! ZAKOŃCZENIE: Słup Finansowy i Bankrut. Błędne decyzje, krypto-scamy i długi. Komornik zajął ci sprzęt, zarabiasz na kamerkach.";
        if (gameState.streetCredit === 100 && gameState.odklejka === 100 && gameState.fame === 0) return "Czas podsumowań! ZAKOŃCZENIE: Męczennik Podziemia. Kasujesz wszystko z sieci i znikasz. Powstają o tobie legendy na forach, stajesz się prawdziwym mitem.";
        if (gameState.streetCredit < 10 && gameState.fame > 90 && gameState.money > 3000000) return "Czas podsumowań! ZAKOŃCZENIE: Gwiazdor Pop i Juror. Nikt nie pamięta, że grałeś rap. Siedzisz w jury programów z gwiazdami i zarabiasz miliony na Sylwestrach z TVP.";
        if (gameState.wena === 0 && gameState.odklejka === 0 && gameState.money < 1000) return "Czas podsumowań! ZAKOŃCZENIE: Ucieczka w Bieszczady. Całkowite wypalenie branżą. Sprzedałeś majka i wyjechałeś w góry rzeźbić w drewnie.";
        return "Czas płynie nieubłaganie. Twoja kariera dobiegła końca. Przetrwałeś w branży do dziś, zostając solidnym, szanowanym raperem z pewną pozycją na rynku.";
    }

    return null; // Brak zakończenia
}

function showEnding(text) {
    gameState.currentEventRender = null; // Czyszczenie
    
    // Tworzymy kontener, który będzie screenshotowany
    const contentHtml = `
        <div id="ending-summary" style="padding:20px; background:#111; border: 2px solid var(--accent-red); color: white; margin-bottom:15px; position:relative;">
            <h2 style="color:var(--accent-red); font-family:'Sedgwick Ave', cursive;">KONIEC KARIERY</h2>
            <p style="font-size:16px;">${text}</p>
            <hr style="border:1px solid #333; margin:15px 0;">
            <h3>Podsumowanie "${gameState.nickname}"</h3>
            <ul style="list-style:none; padding:0; font-size:14px; color:#ccc;">
                <li>Zakończyłeś w roku: <strong>${gameState.year}</strong> (Wiek: ${gameState.age})</li>
                <li>Zgromadzona Kasa: <strong style="color:var(--accent-green)">${gameState.money} PLN</strong></li>
                <li>Status: <strong>${getTierName(calculateTier())}</strong></li>
                <li>Fejm: ${Math.round(gameState.fame)}% | Street Credit: ${Math.round(gameState.streetCredit)}%</li>
                <li>Odklejka: ${Math.round(gameState.odklejka)}%</li>
            </ul>
        </div>
    `;

    document.getElementById('event-window').innerHTML = contentHtml;
    
    const actionContainer = document.getElementById('action-buttons');
    actionContainer.innerHTML = '';
    
    const dlBtn = document.createElement('button');
    dlBtn.className = 'btn-action';
    dlBtn.innerText = "📸 Pobierz Statystyki (Karta)";
    dlBtn.onclick = () => {
        dlBtn.innerText = "Generowanie...";
        const targetElement = document.getElementById('ending-summary');
        html2canvas(targetElement, { backgroundColor: '#111' }).then(canvas => {
            const link = document.createElement('a');
            link.download = `kariera_${gameState.nickname.replace(/\\s+/g, '_')}.png`;
            link.href = canvas.toDataURL();
            link.click();
            dlBtn.innerText = "📸 Pobierz ponownie";
        });
    };
    actionContainer.appendChild(dlBtn);

    const btn = document.createElement('button');
    btn.className = 'btn-action';
    btn.style.borderColor = 'var(--accent-red)';
    btn.innerText = "Zagraj ponownie";
    btn.onclick = () => location.reload();
    actionContainer.appendChild(btn);
}

function offerLabelDeal() {
    if (gameState.label !== "Brak (Niezależny)") return;
    
    // Oferujemy losową wytwórnię zgodną z obecną erą
    let availableLabels = [];
    if (gameState.era === 1) availableLabels = ["RR Under"];
    else if (gameState.era === 2) availableLabels = ["Beton Records", "OTSORP Label", "Wielkie Ała"];
    else if (gameState.era === 3) availableLabels = ["Skok Records", "BOOR Records"];
    else availableLabels = ["SPM Label", "KEQuality", "GUGA Label", "Def Dżem Polska"];

    const chosenLabel = availableLabels[Math.floor(Math.random() * availableLabels.length)];
    const albums = Math.floor(Math.random() * 3) + 1;
    const advance = albums * 10000 * calculateTier(); // Np. od 10k do 90k zaliczki
    
    renderEvent(`Menedżer wytwórni <b>${chosenLabel}</b> składa ci propozycję kontraktu wydawniczego!<br>Proponują <b>Zaliczkę w wysokości ${advance} PLN</b> za podpisanie lojalki na <b>${albums} płyty</b>.<br>Wchodzisz w to?`, [
        { text: `Podpisuję kontrakt! (Zaliczka: +${advance} PLN, Płyty: ${albums})`, action: () => {
            gameState.label = chosenLabel;
            gameState.contractAlbumsLeft = albums;
            gameState.money += advance;
            gameState.advancesTaken = (gameState.advancesTaken || 0) + 1;
            gameState.turnsSinceAdvance = 0;
            updateStatsUI();
            nextTurn();
        }},
        { text: "Zostaję na niezależu. Nikt mi nie będzie mówił co mam grać.", action: () => {
            nextTurn();
        }}
    ]);
}

function nextTurn() {
    // Wytwórnia dopomina się o płytę jeśli wziąłeś zaliczkę
    if (gameState.label !== "Brak (Niezależny)" && gameState.contractAlbumsLeft > 0) {
        gameState.turnsSinceAdvance = (gameState.turnsSinceAdvance || 0) + 1;
        if (gameState.turnsSinceAdvance > 10 && Math.random() < 0.6) {
            gameState.turnsSinceAdvance = 0; // zresetuj by nie spamowało co turę
            const evText = `<span style="color:var(--accent-red); font-size:14px; text-transform:uppercase; display:block; margin-bottom:10px;">⚠️ WZIĄŁEŚ ZALICZKĘ I ZNIKNĄŁEŚ</span>Wytwórnia ${gameState.label} traci cierpliwość. Pieniądze z zaliczki wydałeś, a płyty jak nie było tak nie ma. Prawnicy grożą pozwem!`;
            const evOptions = [
                { text: "Idź się sądzić (Trwa to latami, prawnicy kosztują)", action: () => {
                    applyEffects({ Kasa: -50000, Odklejka: 15, Hype: 5 });
                    nextTurn();
                }},
                { text: "Nagraj byle gówno na szybko, żeby się odjebali", action: () => {
                    applyEffects({ Wena: -40, Respekt: -30, Fejm: -15 });
                    gameState.contractAlbumsLeft = Math.max(0, gameState.contractAlbumsLeft - 1);
                    if (gameState.contractAlbumsLeft === 0) {
                        alert(`Ukończyłeś kontrakt z ${gameState.label} nagrywając totalnego gniota. Koniec współpracy.`);
                        gameState.label = "Brak (Niezależny)";
                    }
                    nextTurn();
                }},
                { text: "Zamów karków i wpierdol managerowi! (-20k na karków)", action: () => {
                    applyEffects({ Kasa: -20000, PoliceHeat: 40, StreetCred: 30, Odklejka: 25 });
                    nextTurn();
                }}
            ];
            gameState.currentEventRender = { text: evText, options: evOptions };
            renderEvent(evText, evOptions);
            return;
        }
    }

    // Utrata fejmu i hype'u co 2 tury (decay)
    if (gameState.turnCount % 2 === 0) {
        gameState.fame -= 5;
        gameState.hype -= 8;
        if (gameState.fame < 0) gameState.fame = 0;
        if (gameState.hype < 0) gameState.hype = 0;
    }
    
    // Pasywka - Kebab
    if (gameState.inventory && gameState.inventory.includes('kebab')) {
        gameState.wena += 2;
    }
    
    // Regeneracja Weny co turę
    gameState.wena += 5; 
    
    clampStats(); // Zabezpieczenie przed Nałogiem itp.
    
    // Sprawdzanie OVERDOSE
    if (gameState.addiction >= 100) {
        showEnding("Przedawkowałeś na imprezie w hotelu. Ratownicy nie zdążyli. Twoja kariera i życie dobiegły tragicznego końca, ale Twoje płyty wyprzedają się na pniu.");
        return;
    }
    
    // Sprawdzanie PSIARNI (Heat)
    if (gameState.policeHeat >= 100) {
        if (gameState.crew && (gameState.crew.includes("Papuga") || gameState.crew.includes("Mecenas W. (Papuga)"))) {
            gameState.policeHeat = 50;
            let bail = Math.max(50000, gameState.money * 0.2); // kaucja 50k albo 20% hajsu
            gameState.money -= bail;
            if (gameState.money < 0) gameState.money = 0;
            alert("Nalot na kwadrat o 6 rano! Na szczęście masz Papugę w Ekipie. Wychodzisz za kaucją (" + Math.round(bail) + " PLN), ale Psiarnia wciąż depcze ci po piętach.");
        } else {
            gameState.year += 2;
            gameState.age += 2;
            gameState.turnCount += 14;
            gameState.money = 0;
            gameState.policeHeat = 0;
            gameState.fame = 100;
            gameState.respect = 100;
            gameState.era = calculateEra(gameState.year);
            alert("Nalot na kwadrat o 6 rano! Znaleźli dowody. Dostajesz 2 lata odsiadki! Wychodzisz z pudła bez hajsu, ale całe osiedle śpiewa twoje hity. Fejm i Respekt na 100%!");
        }
        clampStats();
        updateStatsUI();
        return;
    }

    const endingText = checkEndings();
    if (endingText) {
        showEnding(endingText);
        return;
    }
    
    // Zyski z Biznesu (Merch, Label)
    if (typeof processBiznesTurn !== 'undefined') {
        let profit = processBiznesTurn();
        if (profit > 0) {
            gameState.money += profit;
        }
    }

    // Obsługa podopiecznych z Własnego Labelu
    if (gameState.ownLabel && gameState.signedRoster && gameState.signedRoster.length > 0) {
        gameState.signedRoster.forEach((rapper, idx) => {
            if (Math.random() < 0.1) { // 10% szans co turę na zdarzenie z raperem
                if (rapper.avgInvestment < 50000 && Math.random() < 0.5) {
                    // Negatywny event (ćpanie, zła inwestycja)
                    gameState.money -= 10000;
                    alert(`SKANDAL W WYTÓWNI! Twój podopieczny ${rapper.name} przećpał Twoją zaliczkę, wylądował na odwyku i nie nagrał żadnej płyty! Tracisz 10 000 PLN na adwokatów.`);
                } else if (rapper.avgInvestment > 150000 && Math.random() < 0.3) {
                    // Pozytywny event (Platyna)
                    let bonus = 150000;
                    gameState.money += bonus;
                    gameState.hype += 15;
                    gameState.platinumRecords += 1;
                    alert(`SUKCES W WYTÓWNI! Twój podopieczny ${rapper.name} wydał genialny album i zdobył PLATYNĘ! Jako wytwórnia zgarniasz +${bonus} PLN i +15 Hype'u, a platyna ląduje w Twojej gablocie.`);
                    rapper.albumsLeft--;
                } else {
                    // Zwykłe wydanie płyty
                    let bonus = rapper.avgInvestment * 0.8;
                    gameState.money += bonus;
                    alert(`Twój podopieczny ${rapper.name} wydał płytę. Twój udział z dystrybucji to ${Math.round(bonus)} PLN.`);
                    rapper.albumsLeft--;
                }
            }
        });
        // Usunięcie raperów, którzy wypełnili kontrakt
        gameState.signedRoster = gameState.signedRoster.filter(r => r.albumsLeft > 0);
    }

    // Konsekwencje Nałogu
    if (gameState.addiction > 50) {
        let odwykChance = (gameState.addiction - 50) / 100;
        if (Math.random() < odwykChance) {
            gameState.money -= 5000;
            gameState.wena -= 20;
            alert("Budzisz się na przymusowym odwyku. Organizatorzy anulowali koncerty. Tracisz 5000 PLN i mnóstwo Weny.");
        }
    }

    // Trendy muzyczne (rotacja co 10 tur)
    gameState.turnsSinceTrendChange++;
    if (gameState.turnsSinceTrendChange >= 10 || gameState.currentTrend === 'Brak') {
        const trends = ["Ulica / Hardcore", "Boom Bap / Truskul", "Trap / Newschool", "Melobanger / R&B"];
        gameState.currentTrend = trends[Math.floor(Math.random() * trends.length)];
        gameState.turnsSinceTrendChange = 0;
        alert(`🚨 ZMIANA TRENDÓW! Cała ulica krzyczy, że teraz modny jest styl: ${gameState.currentTrend}`);
    }

    // Szansa na Beef
    if (typeof triggerBeef !== 'undefined' && triggerBeef()) {
        updateStatsUI();
        return; // Zatrzymuje pętlę i zmusza do rozwiązania beefu
    }

    // Co 5 tur (jeśli niezależny), szansa na kontrakt
    if (gameState.turnCount > 0 && gameState.turnCount % 5 === 0 && gameState.label === "Brak (Niezależny)" && Math.random() < 0.7 && gameState.lastLabelOfferTurn !== gameState.turnCount) {
        gameState.lastLabelOfferTurn = gameState.turnCount;
        offerLabelDeal();
        return;
    }
    
    // Co 5 tur przypomnienie o płycie
    if (gameState.turnCount > 0 && gameState.turnCount % 5 === 0 && gameState.lastReminderTurn !== gameState.turnCount) {
        gameState.lastReminderTurn = gameState.turnCount;
        const reminderText = gameState.era <= 2 ? "Ziomki na ośce dopytują, kiedy rzucisz w nich nowym materiałem. Czas wejść do studia!" : "Telefon od managera: 'Algorytmy stygną! Jeśli nic nie wydasz, spadną nam zasięgi!' Czas na płytę.";
        const evText = `<span style="color:var(--accent-green); font-size:14px; text-transform:uppercase; display:block; margin-bottom:10px;">PRZYPOMNIENIE</span>${reminderText}`;
        const evOptions = [{
            text: "Okej, mam to na uwadze.",
            action: () => {
                gameState.currentEventRender = null;
                nextTurn();
            }
        }];
        gameState.currentEventRender = { text: evText, options: evOptions };
        renderEvent(evText, evOptions);
        return;
    }

    const currentTier = calculateTier();
    const availableEvents = gameEvents.filter(e => e.era === gameState.era && !gameState.eventsPlayed.includes(e.id) && (!e.minTier || e.minTier <= currentTier));
    
    // Zmiana ery na siłę, jeśli skończyły się eventy (lub wymuszony koniec, jeśli Era 4)
    if (availableEvents.length === 0 && gameState.era >= 4) {
        showEnding("Nagrałeś już wszystko co było do nagrania. Branża rapowa nie ma przed tobą tajemnic, przechodzisz na godną emeryturę.");
        return;
    } else if (availableEvents.length === 0 && gameState.era < 4) {
        gameState.era++;
        gameState.year = (gameState.era === 2 ? 2000 : (gameState.era === 3 ? 2008 : 2015));
        updateStatsUI();
        nextTurn();
        return;
    }

    // Specjalne eventy załamania po przekroczeniu 50% nałogu (Priorytetowe)
    if (gameState.addiction > 50 && Math.random() < 0.3) {
        const addictionEvents = [
            { id: "addict_1", desc: "Zaspałeś na własny teledysk. Ekipa czekała 4 godziny. Reżyser wkurzony.", options: [{ text: "Mam to w dupie", effects: { Fejm: -10, Hype: -5, Respekt: -10 } }, { text: "Zwracam im hajs", effects: { Kasa: -5000, Respekt: 5 } }] },
            { id: "addict_2", desc: "Paranoje wchodzą za mocno. Myślisz, że menedżer cię okrada. Zwalniasz go w środku nocy.", options: [{ text: "Nie ufam nikomu!", effects: { Odklejka: 15, Hype: -10 } }] },
            { id: "addict_3", desc: "Długi u lokalnego dilera. Goście w kominiarkach pukają do drzwi.", options: [{ text: "Płacę z odsetkami", effects: { Kasa: -15000, StreetCred: -5 } }, { text: "Każę im spierdalać", effects: { StreetCred: 10, Odklejka: 10, Hype: 5 } }] },
            { id: "addict_4", desc: "Odwołany koncert na 30 minut przed startem. Nie jesteś w stanie stać na nogach.", options: [{ text: "Zwróć bilety", effects: { Kasa: -20000, Fejm: -15, Respekt: -20 } }] },
            { id: "addict_5", desc: "Wjeżdżasz na live na Instagramie całkowicie porobiony i obrażasz fanów.", options: [{ text: "Trudno", effects: { Hype: 30, Odklejka: 25, Respekt: -30, Fejm: -10 } }] }
        ];
        // Losujemy jeden z nich
        const ev = addictionEvents[Math.floor(Math.random() * addictionEvents.length)];
        const evText = `<span style="color:var(--accent-red); font-size:14px; text-transform:uppercase; display:block; margin-bottom:10px;">🚨 KONSEKWENCJE NAŁOGU</span>${ev.desc}`;
        renderEvent(evText, ev.options);
        return;
    }

    // Szansa na ścieżkę nielegalną przy stylu Ulica
    let drawPool = [...availableEvents];
    if (gameState.style === "Ulica / Hardcore") {
        // Powielamy eventy uliczne w puli, by częściej wypadały
        const streetKeywords = ["policja", "diler", "towar", "kradzież", "ustawka", "nielegal", "kibol"];
        availableEvents.forEach(e => {
            if (streetKeywords.some(kw => e.desc.toLowerCase().includes(kw))) {
                drawPool.push(e);
                drawPool.push(e); // x3 szansa
            }
        });
    }

    // Losujemy wydarzenie proceduralne, suprise lub fabularne
    let ev;
    const r = Math.random();
    if (r < 0.35) {
        // 35% szansy na spokojny miesiąc (żeby nie było ciągłych dymów)
        const quietEvents = [
            "Zaszyłeś się w studio i szukasz nowych brzmień. Czas płynie spokojnie bez większych skandali.",
            "Grasz kilka pomniejszych koncertów klubowych, witasz się z fanami. Branża na chwilę o tobie zapomniała.",
            "Zwykła codzienność. Odpisujesz fanom, ogarniasz sprawy papierkowe i zbierasz siły na nowe projekty.",
            "Spokojny miesiąc. Brak afer, brak dymów. Skupiasz się na pisaniu tekstów i piciu kawy."
        ];
        ev = {
            id: -1,
            desc: quietEvents[Math.floor(Math.random() * quietEvents.length)],
            options: [{ text: "Pracuj dalej (Spokój)", effects: { Wena: 10, Kasa: 500 } }]
        };
    } else if (r < 0.45) {
        // 10% szansy na suprise event
        ev = getSurpriseEvent(gameState.era);
    } else if (r < 0.60) {
        // 15% szansy na wydarzenie proceduralne
        ev = getProceduralEvent(gameState.era, gameState.city);
    } else {
        // 40% Szansy na Główne Wydarzenie Fabularne
        ev = drawPool[Math.floor(Math.random() * drawPool.length)];
        if (!gameState.eventsPlayed.includes(ev.id)) {
            gameState.eventsPlayed.push(ev.id);
        }
    }

    function formatEffects(eff) {
        if (!eff) return "";
        let str = [];
        for (let k in eff) {
            let sign = eff[k] > 0 ? "+" : "";
            str.push(`${k}: ${sign}${eff[k]}`);
        }
        return str.length > 0 ? `<br><small style="color:#aaa; font-weight:normal;">[${str.join(', ')}]</small>` : "";
    }

    const evText = `<span style="color:var(--accent-green); font-size:14px; text-transform:uppercase; display:block; margin-bottom:10px;">${gameState.nickname} | ROK ${gameState.year}</span>` + ev.desc;
    const evOptions = ev.options.map(opt => ({
        text: opt.text + (opt.effects ? formatEffects(opt.effects) : ""),
        action: () => {
            if (opt.action === "PRISON_SILENT") {
                gameState.year += 5;
                gameState.age += 5;
                gameState.money = 0;
                gameState.streetCredit = 100;
                gameState.fame = 80;
                gameState.wena = 100;
                gameState.era = calculateEra(gameState.year);
                updateStatsUI();
                alert("Poszedłeś w zaparte. Właśnie minęło 5 lat w celi. Wychodzisz na wolność z pustym kontem, ale jesteś legendą ulicy (Respekt 100, Fejm 80).");
                gameState.currentEventRender = null;
                offerLabelDeal();
                return;
            } else if (opt.action === "PRISON_SNITCH") {
                showEnding("ZAKOŃCZENIE: Świadek Koronny (60). Rozprułeś się na psach. Zyskałeś wolność, ale musisz żyć pod zmienionym nazwiskiem, a na ulicy jesteś skończony. Twój dawny blok tobą gardzi.");
                return;
            } else if (opt.action === "REHAB_TUB") {
                gameState.year += 1;
                gameState.age += 1;
                gameState.addiction = 0;
                gameState.rehabs += 1;
                applyEffects(opt.effects);
                alert("Skandal obyczajowy! Lądujesz na odwyku po aferze z dilerką. Mija rok, wychodzisz czysty, ale lżejszy o kasę i szacunek.");
                nextTurn();
                return;
            } else if (opt.action === "LOSE_CAR") {
                gameState.car = 'Brak';
                applyEffects(opt.effects);
                alert("Policja zabezpieczyła twój wóz na poczet przyszłych kar. Zostajesz z buta.");
                nextTurn();
                return;
            } else {
                applyEffects(opt.effects);
                nextTurn();
            }
        }
    }));

    gameState.currentEventRender = { text: evText, options: evOptions };
    renderEvent(evText, evOptions);
}

function confirmEndCareer() {
    renderEvent(`Czy na pewno chcesz zakończyć karierę? To ostateczna decyzja i przeniesie cię do podsumowania Twojego rapowego życia.`, [
        { text: "Tak, to już koniec.", action: () => {
            gameState.currentEventRender = null;
            endCareerScreen();
        }},
        { text: "Nie, gramy dalej!", action: () => {
            renderCurrentEvent();
        }}
    ]);
}

function endCareerScreen() {
    const eventWindow = document.getElementById('event-window');
    
    // ZAWSZE czyścimy całe okno ze śmieci z innych modułów
    eventWindow.innerHTML = '<div id="event-description"></div>';
    
    const eventDesc = document.getElementById('event-description');
    const actionContainer = document.getElementById('action-buttons');
    
    let finalTierText = "Podziemie";
    let tier = calculateTier();
    if (tier === 2) finalTierText = "Znany";
    if (tier === 3) finalTierText = "Popularny";
    if (tier === 4) finalTierText = "Gwiazda";

    eventDesc.innerHTML = `
        <div id="stats-summary" style="padding:20px; background:#111; border: 2px solid var(--accent-red); border-radius:10px;">
            <h2 style="color:var(--accent-red); font-size:30px; text-transform:uppercase; font-family:'Sedgwick Ave', cursive;">Zakończenie Kariery</h2>
            <p>Kiedyś trzeba ze sceny zejść. Twoja dyskografia to historia, a Twoje imię zapisało się w polskim rapie na zawsze.</p>
            <div style="background:#1a1a1a; padding:15px; border-radius:10px; margin-top:20px; text-align:left; display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:10px; font-size:14px;">
                <p style="margin-bottom: 5px;"><strong>Ksywa:</strong> <span style="color:var(--accent-purple);">${gameState.nickname}</span></p>
                <p style="margin-bottom: 5px;"><strong>Ostateczny Status:</strong> ${finalTierText}</p>
                
                <p style="margin-bottom: 5px;"><strong>Wiek:</strong> ${gameState.age} lat (Kariera: ${gameState.year - gameState.startYear} lat)</p>
                <p style="margin-bottom: 5px;"><strong>Kasa na koncie:</strong> <span style="color:var(--accent-green)">${gameState.money} PLN</span></p>
                
                <p style="margin-bottom: 5px;"><strong>Fejm:</strong> ${gameState.fame}</p>
                <p style="margin-bottom: 5px;"><strong>Street Credit:</strong> ${gameState.streetCredit}</p>
                
                <p style="margin-bottom: 5px;"><strong>Wóz:</strong> ${gameState.car}</p>
                <p style="margin-bottom: 5px;"><strong>Kwadrat:</strong> ${gameState.house}</p>
                
                <p style="margin-bottom: 5px;"><strong>Złote Płyty:</strong> 📀 ${gameState.goldRecords}</p>
                <p style="margin-bottom: 5px;"><strong>Platynowe Płyty:</strong> 💿 ${gameState.platinumRecords}</p>
                <p style="margin-bottom: 5px;"><strong>Diamentowe Płyty:</strong> 💎 ${gameState.diamondRecords || 0}</p>
                
                <p style="margin-bottom: 5px;"><strong>Poziom Nałogu:</strong> ${gameState.addiction}%</p>
                <p style="margin-bottom: 5px;"><strong>Zaliczone Odwyki:</strong> 🏥 ${gameState.rehabs}</p>
                <p style="margin-bottom: 5px;"><strong>Wygrane Beefy:</strong> 🥊 ${gameState.beefsWon}</p>
                <p style="margin-bottom: 5px;"><strong>Przegrane Beefy:</strong> 🏳️ ${gameState.beefsLost}</p>
                
                <p style="margin-bottom: 5px;"><strong>Wytwórnia:</strong> ${gameState.ownLabel ? 'Własny Label (BÓSS)' : gameState.label}</p>
                <p style="margin-bottom: 5px;"><strong>Biznesy:</strong> ${gameState.hasMerch ? 'Odzież ' : ''}${gameState.hasNFT ? '| NFT ' : ''}${gameState.hasDocu ? '| Folarski Film' : ''}${!gameState.hasMerch && !gameState.hasNFT && !gameState.hasDocu ? 'Brak' : ''}</p>
                <p style="margin-bottom: 5px;"><strong>Wyciągniętych zaliczek:</strong> 💸 ${gameState.advancesTaken || 0}</p>
            </div>
        </div>
    `;
    
    actionContainer.innerHTML = '';
    
    const btnScreen = document.createElement('button');
    btnScreen.className = 'btn-action';
    btnScreen.innerText = "📸 Zrób Zdjęcie Statystyk";
    btnScreen.onclick = () => {
        btnScreen.style.display = 'none'; // ukrywamy przed screenem
        html2canvas(document.getElementById('stats-summary'), { backgroundColor: "#111" }).then(canvas => {
            const link = document.createElement('a');
            link.download = `Polski_Raper_${gameState.nickname}_Statystyki.png`;
            link.href = canvas.toDataURL();
            link.click();
            btnScreen.style.display = 'inline-block';
        });
    };
    actionContainer.appendChild(btnScreen);
    
    const btnReset = document.createElement('button');
    btnReset.className = 'btn-action';
    btnReset.style.borderColor = 'var(--accent-red)';
    btnReset.innerText = "Zagraj od Nowa";
    btnReset.onclick = () => location.reload();
    actionContainer.appendChild(btnReset);
}
