// System wojen rapowych
function triggerBeef() {
    // Szansa na beef: obniżona, by nie spamować (było: 4%, 1%, 15%)
    let chance = gameState.fame > 30 ? 0.02 : 0.005;
    if (gameState.fame > 80) chance = 0.05; // Mniejsza szansa nawet dla topowego gracza
    if (Math.random() > chance) return false;

    // Losujemy rapera z Topki (bez samego gracza)
    const availableRappers = typeof aiRappers !== 'undefined' ? aiRappers : [{name: "Lokalny Przeciwnik"}];
    const enemy = availableRappers[Math.floor(Math.random() * availableRappers.length)].name;

    let beefDesc = "";
    if (gameState.era === 1) {
        beefDesc = `<p><strong>${enemy}</strong> rozdaje pod blokami kasetę magnetofonową z podziemnym dissem na Ciebie. Krzyczy, że sprzedałeś się systemowi!</p>`;
    } else if (gameState.era === 2) {
        beefDesc = `<p><strong>${enemy}</strong> założył wielki wątek na forum Ślizg.eu, gdzie ciśnie po Twojej nowej płycie, a jego fani robią z Ciebie memy!</p>`;
    } else if (gameState.era === 3) {
        beefDesc = `<p><strong>${enemy}</strong> wypuścił właśnie na YouTube kilkuminutowy wideo-diss. Pół internetu mówi tylko o tym!</p>`;
    } else {
        beefDesc = `<p><strong>${enemy}</strong> zaczepił Cię na Instagram Live uderzając w Twoją ekipę i wyzywa Cię na walkę w oktagonie!</p>`;
    }

    const evText = `
        <div id="event-description" style="border-color: var(--accent-red); box-shadow: 0 0 20px rgba(255,51,51,0.5);">
            <h2 style="color:var(--accent-red);">🚨 BEEF: ATAK NA CIEBIE! 🚨</h2>
            ${beefDesc}
            <p>Musisz zareagować, inaczej ulica pomyśli, że pękasz.</p>
        </div>
    `;

    const options = [
        {
            text: "Zignoruj to (Spadek Respektu i Fejmu)",
            action: () => {
                applyEffects({ Respekt: -20, Fejm: -10, Hype: -5 });
                alert("Zlałeś temat. Ludzie w necie nazywają cię tchórzem.");
                nextTurn();
            }
        },
        {
            text: "Nagraj morderczy Diss (Koszt: 30 Weny)",
            action: () => {
                if (gameState.wena < 30) {
                    alert("Masz za mało Weny na napisanie dobrego dissu (potrzebujesz 30)!");
                    return; // Zmusza do wybrania innej opcji
                }
                gameState.wena -= 30;
                
                // Szansa na wygraną zależy od Street Credit i Hype'u
                let winChance = (gameState.streetCredit + gameState.hype) / 200;
                let outcomeText = "";
                
                if (Math.random() < winChance) {
                    gameState.beefsWon += 1;
                    applyEffects({ Fejm: 30, Hype: 40, Respekt: 20 });
                    outcomeText = "🔥 TWÓJ DISS ZNISZCZYŁ KARIERĘ PRZECIWNIKA! Wszyscy mówią tylko o tobie. Prawdziwe fatality. Przeciwnik milczy.";
                } else {
                    gameState.beefsLost += 1;
                    applyEffects({ Odklejka: 20, Fejm: -10 });
                    outcomeText = "Cóż... nagrałeś odpowiedź, ale internet uznał, że poległeś. Ośmieszyłeś się i wrzucono cię do memów. Przeciwnik śmieje się z ciebie na Instastory.";
                }
                
                renderEvent(`
                    <div id="event-description" style="border-color: var(--accent-purple);">
                        <h2 style="color:var(--accent-purple);">🔥 ODPOWIEDŹ NA BEEF</h2>
                        <p>${outcomeText}</p>
                    </div>
                `, [
                    {
                        text: "Zakończ ten cyrk i wracaj do pracy (Dalej)",
                        action: () => nextTurn()
                    }
                ]);
            }
        },
        {
            text: "Spotkajmy się na ulicy (Walka Fizyczna)",
            action: () => {
                let fightChance = gameState.streetCredit / 100;
                let outcomeText = "";
                
                if (Math.random() < fightChance) {
                    gameState.beefsWon += 1;
                    applyEffects({ StreetCred: 40, Respekt: 30, Odklejka: 10, Hype: 20 });
                    outcomeText = "Dopadłeś go pod jego blokiem. Filmik ze starcia trafił do sieci. Masz potężny szacunek ulicy, przeciwnik z podkulonym ogonem uciekł.";
                } else {
                    gameState.beefsLost += 1;
                    applyEffects({ Odklejka: 15, Hype: 10, Fejm: -10, Kasa: -2000 });
                    outcomeText = "Dostałeś łomot i straciłeś zęby. Musisz wydać kasę na dentystę, a filmik z twoją porażką lata po sieci. Ulica cię wyśmiała.";
                }
                
                renderEvent(`
                    <div id="event-description" style="border-color: var(--accent-red);">
                        <h2 style="color:var(--accent-red);">🥊 FINAŁ STARCIA</h2>
                        <p>${outcomeText}</p>
                    </div>
                `, [
                    {
                        text: "Przełknij to i graj dalej (Koniec beefu)",
                        action: () => nextTurn()
                    }
                ]);
            }
        }
    ];

    gameState.currentEventRender = { text: evText, options: options };
    renderEvent(evText, options);

    return true; // Prawda oznacza, że event załapał i zawłaszczył UI
}
