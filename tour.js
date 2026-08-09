function renderTour() {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    let html = `<h2>🎤 TRASA KONCERTOWA</h2>`;
    html += `<p>Wybierz w jaki wyruszasz melanż... to znaczy trasę. Dostępność zależy od Statusu Kariery.</p>`;
    
    eventWindow.innerHTML = html;
    actionButtons.innerHTML = '';
    
    const currentTier = calculateTier();

    const tourOptions = [
        {
            name: "Lokalne Puby (Tier 1)",
            minTier: 1,
            wenaCost: 30,
            desc: "Grasz pod mostem lub w zadymionym barze. (-30 Weny)",
            baseReward: 3000,
            baseFame: 5,
            baseStreet: 2
        },
        {
            name: "Kluby Studenckie (Tier 2)",
            minTier: 2,
            wenaCost: 40,
            desc: "Poważniejsza sprawa. Organizator zapewnia busa. (-40 Weny)",
            baseReward: 10000,
            baseFame: 10,
            baseStreet: 5
        },
        {
            name: "Letnie Festiwale (Tier 3)",
            minTier: 3,
            wenaCost: 50,
            desc: "Gruba trasa po plenerach. Poważne pieniądze. (-50 Weny)",
            baseReward: 30000,
            baseFame: 20,
            baseStreet: 10
        },
        {
            name: "Wyprzedane Stadiony (Tier 4)",
            minTier: 4,
            wenaCost: 70,
            desc: "Największe obiekty w Polsce. Pirotechnika. (-70 Weny)",
            baseReward: 100000,
            baseFame: 40,
            baseStreet: 25
        }
    ];

    tourOptions.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'btn-action';
        btn.innerText = opt.name;
        
        if (currentTier < opt.minTier) {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.innerText += " [ZABLOKOWANE]";
        }
        
        btn.onclick = () => {
            if (gameState.wena < opt.wenaCost) {
                alert(`Masz za mało Weny! Potrzebujesz ${opt.wenaCost}. Odpocznij chwilę.`);
                return;
            }
            renderTourStateSelection(opt);
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

function renderTourStateSelection(tourOpt) {
    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    let html = `<h2>Jak chcesz zagrać tę trasę?</h2>`;
    html += `<p>Twoje zachowanie wpłynie na to, jak fani i ulica cię zapamiętają.</p>`;
    
    eventWindow.innerHTML = html;
    actionButtons.innerHTML = '';
    
    const states = [
        {
            name: "Na trzeźwo (Profeska)",
            desc: "Wychodzisz, grasz swoje od A do Z, zbijasz piony i wracasz do hotelu.",
            action: () => executeTour(tourOpt, "trzezwy")
        },
        {
            name: "Najebany (Lekki dym)",
            desc: "Drzesz mordę na scenie, wóda leje się na fanów. Hype rośnie, respekt spada.",
            action: () => executeTour(tourOpt, "najebany")
        },
        {
            name: "Naćpany i Najebany (Syf na backstage'u)",
            desc: "Totalna odklejka. Rozwalasz garderobę, skaczesz w tłum. Gigantyczny Hype, ale ulica kręci głową, a policja puka do drzwi.",
            action: () => executeTour(tourOpt, "nacpany")
        }
    ];

    states.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'btn-action';
        btn.innerHTML = `<strong>${s.name}</strong><br><span style="font-size:11px; color:#aaa;">${s.desc}</span>`;
        btn.onclick = s.action;
        actionButtons.appendChild(btn);
    });
}

function executeTour(tourOpt, state) {
    gameState.wena -= tourOpt.wenaCost;
    
    // Obliczanie bonusów ekipy
    let moneyMultiplier = 1.0;
    let hypeBonus = 0;
    let fameBonus = 0;
    let respectBonus = 0;
    let odklejkaBonus = 0;

    const dj = getCrewMember("DJ");
    const hypeman = getCrewMember("Hypeman");
    const papuga = getCrewMember("Prawnik");

    if (dj) {
        if (dj.id === "dj_pendrive") moneyMultiplier += 0.05;
        if (dj.id === "dj_spacer") moneyMultiplier += 0.10;
        if (dj.id === "dj_chlam") fameBonus -= 10;
    }

    if (hypeman) {
        if (hypeman.id === "hype_seba") moneyMultiplier += 0.05;
        if (hypeman.id === "hype_szwagier") { moneyMultiplier += 0.10; odklejkaBonus += 10; }
        if (hypeman.id === "hype_bidon") moneyMultiplier += 0.15;
        if (hypeman.id === "hype_ropuch") { moneyMultiplier += 0.20; hypeBonus += 15; }
        if (hypeman.id === "hype_sztal") moneyMultiplier += 0.25;
        if (hypeman.id === "hype_czy") { moneyMultiplier += 0.30; hypeBonus += 30; }
    }

    let profit = tourOpt.baseReward * moneyMultiplier;
    let earnedFame = tourOpt.baseFame + fameBonus;
    let earnedStreet = tourOpt.baseStreet;
    let earnedHype = hypeBonus;
    let earnedOdklejka = odklejkaBonus;
    let earnedRespect = 0;

    let stateResultText = "";

    if (state === "trzezwy") {
        earnedRespect += 15;
        earnedFame += 5;
        stateResultText = "Wszyscy chwalą cię za profesjonalizm. Fani docenili muzykę.";
    } else if (state === "najebany") {
        earnedHype += 20;
        earnedFame += 10;
        earnedRespect -= 10;
        earnedOdklejka += 15;
        stateResultText = "Zagrałeś 'na miękko', polewałeś ludziom wódę ze sceny. Był dym, fani to kochają, ale puryści rapowi się krzywią.";
    } else if (state === "nacpany") {
        earnedHype += 50;
        earnedFame += 20;
        earnedRespect -= 30;
        earnedOdklejka += 30;
        earnedStreet -= 15; // Zbyt odklejony na ulicę
        profit *= 1.5; // Ze skandali więcej kasy
        
        let policeText = "";
        if (Math.random() < 0.4) {
            if (papuga) {
                policeText = "<br><br><span style='color:var(--accent-green);'>Policja wbiła na backstage szukać narkotyków, ale twoja Papuga szybko ogarnęła temat! Brak mandatu!</span>";
            } else {
                let fine = profit * 0.4;
                profit -= fine;
                policeText = `<br><br><span style='color:red;'>Policja zrobiła wjazd na backstage! Znaleźli towar. Musiałeś zapłacić ${fine} PLN łapówki/kaucji! Gdybyś tylko miał prawnika...</span>`;
            }
        }
        
        stateResultText = `Totalny chaos i zniszczenie! Latałeś nad publicznością, pokazałeś tyłek, menedżer mdlał. Pokochały cię portale plotkarskie.${policeText}`;
    }

    applyEffects({
        Kasa: profit,
        Fejm: earnedFame,
        StreetCred: earnedStreet,
        Hype: earnedHype,
        Odklejka: earnedOdklejka,
        Respekt: earnedRespect
    });

    const eventWindow = document.getElementById('event-window');
    const actionButtons = document.getElementById('action-buttons');
    
    eventWindow.innerHTML = `
        <h2>Koniec Trasy</h2>
        <p>${stateResultText}</p>
        <p style="color:var(--accent-green);">Zarobiłeś: ${Math.round(profit)} PLN (z uwzględnieniem bonusów ekipy).</p>
    `;
    
    actionButtons.innerHTML = '';
    const nextBtn = document.createElement('button');
    nextBtn.className = 'btn-action';
    nextBtn.innerText = "Dalej";
    nextBtn.onclick = () => {
        applyEffects({}); // tick czasu
        nextTurn();
    };
    actionButtons.appendChild(nextBtn);
}
