const shopData = {
    cars: [
        { name: "Zardzewiały Golf III", cost: 1500, hype: -5, odklejka: 5, street: 10, fame: 0 },
        { name: "Srebrne BMW E36", cost: 4000, hype: 5, odklejka: 10, street: 15, fame: 5 },
        { name: "Honda Civic V (Tuning)", cost: 8000, hype: 10, odklejka: 5, street: 5, fame: 10 },
        { name: "Audi A4 B5 (TDI)", cost: 12000, hype: 5, odklejka: 0, street: 5, fame: 15 },
        { name: "Czarny Mercedes W210", cost: 25000, hype: 10, odklejka: 10, street: 20, fame: 20 },
        { name: "Subaru Impreza WRX", cost: 60000, hype: 15, odklejka: 5, street: 25, fame: 25 },
        { name: "Nissan Skyline R34", cost: 120000, hype: 20, odklejka: 10, street: 30, fame: 30 },
        { name: "Nowe BMW M3", cost: 150000, hype: 25, odklejka: 15, street: 15, fame: 35 },
        { name: "Chevrolet Camaro", cost: 250000, hype: 30, odklejka: 20, street: 10, fame: 40 },
        { name: "Porsche 911", cost: 450000, hype: 35, odklejka: 20, street: 5, fame: 50 },
        { name: "Bentley Continental", cost: 600000, hype: 40, odklejka: 25, street: -5, fame: 55 },
        { name: "Luksusowy Mercedes G-Klasa", cost: 800000, hype: 45, odklejka: 30, street: 20, fame: 60 },
        { name: "Rolls-Royce Phantom", cost: 1200000, hype: 48, odklejka: 35, street: -15, fame: 70 },
        { name: "Czerwone Ferrari", cost: 1500000, hype: 50, odklejka: 40, street: -10, fame: 80 },
        { name: "Złote Lambo", cost: 2500000, hype: 70, odklejka: 60, street: -20, fame: 100 }
    ],
    realEstate: [
        { name: "Wynajęty pokój u matki", cost: 0, hype: 0, odklejka: 0, street: 20, fame: 0 },
        { name: "Kawalerka na blokowisku", cost: 150000, hype: 5, odklejka: 0, street: 25, fame: 5 },
        { name: "Mieszkanie 3-pokojowe (kredyt)", cost: 450000, hype: 10, odklejka: -5, street: 10, fame: 15 },
        { name: "Loft w centrum", cost: 900000, hype: 25, odklejka: 10, street: 5, fame: 35 },
        { name: "Apartament w Złotej 44", cost: 3500000, hype: 50, odklejka: 30, street: -20, fame: 70 },
        { name: "Willa z basenem pod miastem", cost: 2000000, hype: 35, odklejka: 15, street: -5, fame: 50 },
        { name: "Dom w Marbelli", cost: 5000000, hype: 60, odklejka: 40, street: -30, fame: 80 }
    ],
    items: [
        { name: "Energetyk", cost: 50, effect: { Wena: 15, Addiction: 2 } },
        { name: "Nowy Mikrofon", cost: 1500, effect: { Wena: 20, Fejm: 5 } },
        { name: "Bity od topowego producenta", cost: 5000, effect: { Wena: 50, Hype: 10 } },
        { name: "Złoty Łańcuch", cost: 10000, effect: { Fejm: 20, Hype: 15, StreetCred: -5 } },
        { name: "Kawałek Zioła", cost: 200, effect: { Wena: 25, Odklejka: 5, Addiction: 5 } },
        { name: "Impreza VIP", cost: 2500, effect: { Wena: -10, Hype: 25, Odklejka: 15, Addiction: 10 } }
    ],
    vacations: [
        { name: "Namiot nad jeziorem", cost: 200, wena: 15, odklejka: -5, fame: 0 },
        { name: "Weekend w Ciechocinku", cost: 600, wena: 5, odklejka: 10, fame: 0 },
        { name: "Wyjazd do Mielna (Melanż)", cost: 1500, wena: -10, odklejka: 20, fame: 15 },
        { name: "Domek w Zakopanem", cost: 2500, wena: 20, odklejka: -5, fame: 5 },
        { name: "All-Inclusive w Egipcie", cost: 4000, wena: 15, odklejka: 5, fame: 10 },
        { name: "Imprezowa Ibiza", cost: 8000, wena: -5, odklejka: 25, fame: 20 },
        { name: "Wyprawa do Tajlandii", cost: 12000, wena: 35, odklejka: 15, fame: 15 },
        { name: "Luksusowe Bali", cost: 25000, wena: 40, odklejka: 20, fame: 30 },
        { name: "Malediwy (Resort 5-gwiazdkowy)", cost: 50000, wena: 50, odklejka: 25, fame: 45 },
        { name: "Luksusowy Jacht w Dubaju", cost: 150000, wena: 30, odklejka: 50, fame: 60 }
    ],
    funnyItems: [
        { id: "kajdan", name: "Kajdan z Tombaku", cost: 500, desc: "Stały bonus +5% do Hype'u z koncertów, ale obciach na maksa." },
        { id: "kebab", name: "Karta Stałego Klienta w kebabie", cost: 200, desc: "Odnawia 2 Weny każdej tury." },
        { id: "pies", name: "Groźny Pies (Amstaff 'Killer')", cost: 1500, desc: "Pomaga w konfliktach. Chroni przed niektórymi karami ulicznymi." },
        { id: "grillz", name: "Złoty Grill na Zęby z AliExpress", cost: 800, desc: "Podbija Fejm przy premierach, ale Psiarnia dziwnie na ciebie patrzy." },
        { id: "karnet", name: "Karnet na Osiedlową Siłkę u karka", cost: 300, desc: "Zwiększa szansę na wygraną w Beefach i poprawia Street Cred." },
        { id: "ps1", name: "Konsola PlayStation 1 z Przeróbką", cost: 1000, desc: "-20 Odklejki. Jednorazowo tracisz 1 turę na granie w Tekkena." },
        { id: "sygnet", name: "Sygnet z Orłem (Z Odpustu)", cost: 150, desc: "+10 Respektu na start, póki nikt nie zauważy plastiku (jednorazowo)." },
        { id: "kresz", name: "Ortalionowy Dres 'Kresz' z Targu", cost: 400, desc: "Mnożnik +15% kasy z ulicznych i nielegalnych interesów." },
        { id: "kastet", name: "Kastet", cost: 250, desc: "+20 Street Cred (jednorazowo), ale podwaja szybkość wzrostu Psiarni." },
        { id: "okulary", name: "Okulary Przeciwsłoneczne noszone w Klubie", cost: 600, desc: "+30 Odklejki, +20 Hype'u przy zakupie." }
    ]
};

function renderShop() {
    const window = document.getElementById('event-window');
    const actions = document.getElementById('action-buttons');
    
    window.innerHTML = `
        <div id="event-description" style="text-align:left;">
            <h2 style="color:var(--accent-purple); text-align:center;">🛒 ZAKUPY I INWESTYCJE</h2>
            <p style="text-align:center; color:#aaa; margin-bottom:20px;">Wydawaj hajs na fury, kwadraty i sprzęt. Masz <b>${Math.round(gameState.money).toLocaleString('pl-PL')} PLN</b> na koncie.</p>
        </div>
        <div id="shop-container" style="display:flex; flex-direction:column; gap:20px; text-align:left;">
            <div class="shop-section">
                <h3 style="color:var(--accent-purple); margin-bottom:10px;">🚗 Garaż</h3>
                <div id="cars-list" style="display:grid; grid-template-columns:1fr; gap:10px;"></div>
            </div>
            <div class="shop-section">
                <h3 style="color:var(--accent-purple); margin-bottom:10px;">🏠 Nieruchomości</h3>
                <div id="real-estate-list" style="display:grid; grid-template-columns:1fr; gap:10px;"></div>
            </div>
            <div class="shop-section">
                <h3 style="color:var(--accent-purple); margin-bottom:10px;">🌴 Wakacje</h3>
                <div id="vacations-list" style="display:grid; grid-template-columns:1fr; gap:10px;"></div>
            </div>
            <div class="shop-section">
                <h3 style="color:var(--accent-red); margin-bottom:10px;">🧸 Głupoty i Szpan (Zabawki)</h3>
                <div id="funny-items-list" style="display:grid; grid-template-columns:1fr; gap:10px;"></div>
            </div>
        </div>
    `;
    
    actions.innerHTML = `
        <button class="btn-action" onclick="renderCurrentEvent()">Wróć do gry</button>
    `;

    // Render Cars
    const carsList = document.getElementById('cars-list');
    shopData.cars.forEach(item => {
        const div = document.createElement('div');
        div.style.cssText = "background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;";
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small style="color:#aaa;">Cena: ${item.cost} PLN | Hype: +${item.hype}, Street: ${item.street > 0 ? '+'+item.street : item.street}</small>
            </div>
            <button class="btn-action" style="padding:10px; font-size:12px;" onclick="buyItem('car', '${item.name}', ${item.cost}, ${item.hype}, ${item.odklejka}, ${item.street}, ${item.fame})">Kup</button>
        `;
        carsList.appendChild(div);
    });

    // Render Real Estate
    const reList = document.getElementById('real-estate-list');
    shopData.realEstate.forEach(item => {
        const div = document.createElement('div');
        div.style.cssText = "background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;";
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small style="color:#aaa;">Cena: ${item.cost} PLN | Fejm: +${item.fame}, Odklejka: ${item.odklejka > 0 ? '+'+item.odklejka : item.odklejka}</small>
            </div>
            <button class="btn-action" style="padding:10px; font-size:12px;" onclick="buyItem('house', '${item.name}', ${item.cost}, ${item.hype}, ${item.odklejka}, ${item.street}, ${item.fame})">Kup</button>
        `;
        reList.appendChild(div);
    });

    // Render Vacations
    const vacList = document.getElementById('vacations-list');
    shopData.vacations.forEach(item => {
        const div = document.createElement('div');
        div.style.cssText = "background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;";
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small style="color:#aaa;">Cena: ${item.cost} PLN | Wena: ${item.wena > 0 ? '+'+item.wena : item.wena}, Fejm: +${item.fame}</small>
            </div>
            <button class="btn-action" style="padding:10px; font-size:12px;" onclick="buyVacation('${item.name}', ${item.cost}, ${item.wena}, ${item.odklejka}, ${item.fame})">Lecę</button>
        `;
        vacList.appendChild(div);
    });

    // Render Funny Items
    const funnyList = document.getElementById('funny-items-list');
    if (!gameState.inventory) gameState.inventory = [];
    
    shopData.funnyItems.forEach(item => {
        const hasItem = gameState.inventory.includes(item.id);
        const div = document.createElement('div');
        div.style.cssText = "background:#252525; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;";
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small style="color:#aaa;">Cena: ${item.cost} PLN | ${item.desc}</small>
            </div>
            <button class="btn-action" style="padding:10px; font-size:12px; opacity: ${hasItem ? '0.5' : '1'};" 
                onclick="${hasItem ? 'alert(\\\'Już to masz!\\\')' : `buyFunnyItem('${item.id}', '${item.name}', ${item.cost})`}">
                ${hasItem ? 'Kupione' : 'Kup'}
            </button>
        `;
        funnyList.appendChild(div);
    });
}

function buyItem(type, name, cost, hype, odklejka, street, fame) {
    if (gameState.money >= cost) {
        gameState.money -= cost;
        gameState.hype += hype;
        gameState.odklejka += odklejka;
        gameState.streetCredit += street;
        gameState.fame += fame;
        if (type === 'car') {
            gameState.car = name;
        }
        if (type === 'house') {
            gameState.house = name;
        }
        clampStats();
        updateStatsUI();
        alert(`Kupiłeś: ${name}!`);
    } else {
        alert("Brak wystarczających środków!");
    }
}

function buyVacation(name, cost, wena, odklejka, fame) {
    if (gameState.money >= cost) {
        gameState.money -= cost;
        gameState.wena += wena;
        gameState.odklejka += odklejka;
        gameState.fame += fame;
        
        // Pass some time
        gameState.turnCount += 2;
        clampStats();
        updateStatsUI();
        alert(`Wyjechałeś na wakacje: ${name}! Zregenerowałeś się.`);
        renderShop();
    } else {
        alert("Brak wystarczających środków na ten wyjazd!");
    }
}

function buyFunnyItem(id, name, cost) {
    if (gameState.money >= cost) {
        if (!gameState.inventory) gameState.inventory = [];
        
        gameState.money -= cost;
        gameState.inventory.push(id);
        
        // Jednorazowe efekty przy zakupie
        if (id === "ps1") {
            gameState.odklejka -= 20;
            gameState.turnCount += 1; // tracisz ture
        } else if (id === "sygnet") {
            gameState.respect += 10;
        } else if (id === "kastet") {
            gameState.streetCredit += 20;
        } else if (id === "okulary") {
            gameState.odklejka += 30;
            gameState.hype += 20;
        }
        
        clampStats();
        updateStatsUI();
        alert(`Kupiłeś zabawkę: ${name}!`);
        renderShop();
    } else {
        alert("Brak wystarczających środków na tę zabawkę!");
    }
}
