function renderAlbums() {
    const window = document.getElementById('event-window');
    const actions = document.getElementById('action-buttons');
    
    let html = `
        <div id="event-description" style="text-align:left;">
            <h2 style="color:var(--accent-purple); text-align:center;">💿 TWOJE PŁYTY</h2>
            <p style="text-align:center; color:#aaa; margin-bottom:20px;">Historia Twojej dyskografii. Sprawdź statusy i recenzje.</p>
    `;

    if (!gameState.releasedAlbums || gameState.releasedAlbums.length === 0) {
        html += `<p style="text-align:center;">Brak wydanych albumów. Marsz do studia!</p>`;
    } else {
        html += `<div style="display:flex; flex-direction:column; gap:15px; padding-right:10px;">`;
        // Od najnowszych do najstarszych
        const reversedAlbums = [...gameState.releasedAlbums].reverse();
        reversedAlbums.forEach((album, idx) => {
            const actualIndex = gameState.releasedAlbums.length - 1 - idx;
            let statusBadge = album.status ? `<span style="padding:2px 6px; border-radius:4px; font-weight:bold; font-size:12px; background:#333; color:${album.status === 'Diament' ? 'cyan' : (album.status === 'Platyna' ? 'silver' : 'gold')}">${album.status}</span>` : `<span style="padding:2px 6px; border-radius:4px; font-weight:bold; font-size:12px; background:#333; color:#777">Brak Statusu</span>`;
            let olisText = album.olisPlace <= 50 ? `OLiS: #${album.olisPlace}` : `OLiS: Poza Top 50`;
            
            html += `
                <div style="background:#1a1a1a; border: 1px solid #333; padding:15px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
                    <div>
                        <h3 style="color:var(--accent-green); margin-bottom:5px; text-align:left; font-size:18px;">${album.title}</h3>
                        <p style="font-size:12px; color:#aaa;">Wydano: ${album.year} | Motyw: ${album.theme} | Styl: ${album.style}</p>
                        <p style="font-size:13px; font-weight:bold; margin-top:5px; color:white;">${olisText} ${statusBadge}</p>
                    </div>
                    <button class="btn-action" style="padding:8px 12px; font-size:12px;" onclick="renderReviews(${actualIndex}, true)">Czytaj Recenzje</button>
                </div>
            `;
        });
        html += `</div>`;
    }

    html += `</div>`;
    window.innerHTML = html;
    actions.innerHTML = `<button class="btn-action" onclick="renderCurrentEvent()">Wróć do gry</button>`;
}

function renderReviews(albumIndex, fromMenu = false) {
    const album = gameState.releasedAlbums[albumIndex];
    if (!album) return;

    const window = document.getElementById('event-window');
    const actions = document.getElementById('action-buttons');

    // Generowanie recenzji jeśli jeszcze ich nie ma (lazy generation)
    if (!album.reviews) {
        album.reviews = generateReviews(album);
    }

    let avgScore = 0;
    album.reviews.forEach(r => avgScore += r.score);
    avgScore = (avgScore / album.reviews.length).toFixed(1);

    let html = `
        <div id="event-description" style="text-align:left; font-size:14px; padding-right:15px;">
            <h2 style="color:var(--accent-purple); text-align:center;">Recenzje Albumu</h2>
            <h3 style="color:var(--accent-green); text-align:center; font-family:'Oswald', sans-serif;">${album.title}</h3>
            <div style="text-align:center; margin: 15px 0; font-size:24px; color:gold;">
                ŚREDNIA OCEN: <strong>${avgScore} / 5.0</strong>
            </div>
            <div style="display:flex; flex-direction:column; gap:15px;">
    `;

    album.reviews.forEach(rev => {
        let stars = "★".repeat(Math.round(rev.score)) + "☆".repeat(5 - Math.round(rev.score));
        html += `
            <div style="background:#111; padding:15px; border-radius:8px; border-left: 4px solid var(--accent-purple);">
                <div style="display:flex; justify-content:space-between; margin-bottom:10px;">
                    <strong style="color:#fff;">${rev.author}</strong>
                    <span style="color:gold;">${stars}</span>
                </div>
                <p style="color:#ccc; font-style:italic;">"${rev.text}"</p>
            </div>
        `;
    });

    html += `</div></div>`;
    window.innerHTML = html;

    actions.innerHTML = '';
    const btn = document.createElement('button');
    btn.className = 'btn-action';
    if (fromMenu) {
        btn.innerText = "Wróć do Płyt";
        btn.onclick = renderAlbums;
    } else {
        btn.innerText = "Dalej";
        btn.onclick = () => {
            if (typeof applyEffects === 'function') applyEffects({});
            nextTurn();
        };
    }
    actions.appendChild(btn);
}

function generateReviews(album) {
    // Bazowa ocena obliczana z miejsca na OLiS i motywu
    let baseScore = 3.0;
    if (album.olisPlace === 1) baseScore = 4.8;
    else if (album.olisPlace <= 10) baseScore = 4.0;
    else if (album.olisPlace <= 30) baseScore = 3.2;
    else if (album.olisPlace <= 50) baseScore = 2.5;
    else baseScore = 1.5;
    
    const reviewers = [
        { name: "Farcin Mlint", type: "mlint" },
        { name: "Hirek Ptak", type: "hirek" },
        { name: "Typ z Żółtego Portalu co się nie zna", type: "pudelek" },
        { name: "Krzychu Storak", type: "storak" },
        { name: "ŚLIZGERZY", type: "slizg" }
    ];

    let generated = [];

    reviewers.forEach(reviewer => {
        // Dodanie trochę RNG (od -1.0 do +1.0) dla recenzenta
        let rng = (Math.random() * 2) - 1;
        let finalScore = baseScore + rng;

        // Specyficzne modyfikatory dla recenzentów
        if (reviewer.type === "mlint") {
            finalScore -= 0.5; // Zawsze surowszy
        } else if (reviewer.type === "hirek") {
            finalScore += 0.5; // Zawsze łagodny
        } else if (reviewer.type === "slizg") {
            // Forum trolle - zawsze hejtują (od 1 do 3 gwiazdek)
            finalScore = Math.floor(Math.random() * 3) + 1;
        }

        if (finalScore > 5) finalScore = 5;
        if (finalScore < 1) finalScore = 1;

        generated.push({
            author: reviewer.name,
            score: finalScore,
            text: getReviewText(reviewer.type, finalScore, album)
        });
    });

    return generated;
}

const REVIEW_DB = {
    mlint: {
        good: [
            "Paradoksalnie to najlepsza płyta w jego dorobku, co tylko świadczy o tym, jak tragiczne były poprzednie. Niestety, do miana średniaka nadal brakuje kilku lat świetlnych.",
            "Płyta brzmi jakby artysta zgubił się w drodze do własnego wnętrza. Technicznie poprawnie, ale brakuje tu duszy, którą stary hip-hop niegdyś oddychał."
        ],
        mid: [
            "Trzeci krążek i trzeci raz ten sam błąd. Zamiast ewolucji mamy tu recykling wczorajszych trendów. Monotonny flow usypia skuteczniej niż napar z melisy.",
            "Na dziesięć utworów, tylko jeden przypomina, że mamy do czynienia z raperem, a nie algorytmem do generowania smutnych piosenek dla zagubionych nastolatków.",
            "Kiedyś ten człowiek potrafił złożyć sensowną opowieść. Dzisiaj serwuje nam muzyczny fast-food, po którym zostaje tylko zgaga i gigantyczny niesmak."
        ],
        bad: [
            "Bity płaskie jak żarty na szkolnej dyskotece. Jeśli to ma być ratunek dla polskiego rapu, to ja proszę o natychmiastową eutanazję tego gatunku.",
            "Gospodarz udowadnia, że można zrymować wszystko ze wszystkim, nie mówiąc przy tym kompletnie nic. Słuchanie tego krążka to jak jedzenie styropianu.",
            "Liryczna mielizna. Autor rzuca metaforami tak ciężkimi, że cały album tonie już przy drugim odsłuchu. Brak tu elementarnego szacunku do wrażliwości słuchacza.",
            "Przerost formy nad treścią. Mnóstwo gości, drogie podkłady, ale w środku tego luksusowego opakowania hula wiatr i brak jakiegokolwiek wiarygodnego przekazu.",
            "Zestawienie wokalne przypomina zderzenie pociągów towarowych. Dykcja leży, a próby melodyjnego podśpiewywania sprawiają fizyczny ból. Wielki, historyczny zawód."
        ]
    },
    storak: {
        good: [
            "Solidne uderzenie, choć momentami gubi rytm na werblach. Technika na szkolne cztery plus, ale pod kątem storytellingu to absolutna ekstraklasa.",
            "Płyta krótka, zwięzła i bez zbędnych zapychaczy. Bardzo dobre rymy wielokrotne ratują proste i nieco naiwne teksty o urokach życia na walizkach.",
            "Zaskakująco spójny materiał. Dobrze dobrane wokale, świetnie pocięte sample i przede wszystkim pewność siebie, która wylewa się z każdego wersu."
        ],
        mid: [
            "Gdyby oceniać samą technikę rymowania, byłaby to murowana płyta roku. Niestety, w warstwie merytorycznej wieje taką nudą, że trudno dotrwać do refrenu.",
            "Brak tu jakiegokolwiek sznytu. Ot, kolejne poprawne rzemiosło, o którym zapomnimy tydzień po premierze. Mało w tym warsztatowej pasji, dużo chłodnej kalkulacji."
        ],
        bad: [
            "Zabrakło przyspieszeń i technicznych fajerwerków. Flow jest tak kwadratowe, że można by od niego rysować ekierką. Czekam na natychmiastową poprawę dykcji.",
            "Kolejny raz dostajemy produkt, w którym rymy częstochowskie stanowią fundament. Raper brzmi, jakby czytał tekst z kartki, do tego bez większego zrozumienia.",
            "Podkłady świetne, ale co z tego, skoro MC nie potrafi wstrzelić się w bit? Przesunięcia akcentów są tu wyraźnie niezamierzone i rażą w uszy od pierwszego numeru.",
            "Zamiast nawijać naturalnie, gospodarz próbuje usilnie kopiować amerykańskich kolegów. Wychodzi z tego karykatura. Zdecydowanie polecam powrót do ćwiczeń z metronomem.",
            "Ktoś tu ewidentnie przespał ostatnie pięć lat w rapie. Archaiczne patenty, banalne przyspieszenia i drewniane flow sprawiają, że czuję się jak w wehikule czasu."
        ]
    },
    hirek: {
        good: [
            "Wielki szacunek za pozytywny przekaz. Brak brzydkich słów i promowanie sportowego trybu życia to jest to, czego ta piękna kultura dzisiaj potrzebuje najbardziej!",
            "Z ogromną przyjemnością odpaliłem ten krążek. Słychać tu prawdziwego ducha ulicy z lat 90. Cieszę się, że ktoś w tym kraju jeszcze pamięta o klasycznych wartościach.",
            "Bardzo mądre, dojrzałe teksty młodego człowieka. Zwraca uwagę na rzeczywiste problemy społeczne, zamiast opowiadać tylko o drogich autach. Trzymam kciuki za tę karierę!",
            "Wspaniały powrót do samych korzeni! Płyta brzmi jak złota era. Aż chce się wyciągnąć z szafy stare kasety i magnetofon z podwójną kieszenią.",
            "Piękne, jazzowe wstawki przypominają mi najlepsze wydania polskiej fonografii. Muzyka potrafi łączyć pokolenia i ten wybitny album jest tego doskonałym przykładem."
        ],
        mid: [
            "Młodzież dzisiaj zapomina, że hip-hop to cztery elementy: DJ-ing, rap, graffiti i b-boying! Na tej płycie nie usłyszałem ani jednego skreczy, więc to dla mnie po prostu pop."
        ],
        bad: [
            "Niestety, te całkowicie syntetyczne dźwięki to kompletnie nie moja bajka. Gdzie są prawdziwe instrumenty? Hip-hop bez szumu winyla traci całą swoją magię i autentyczność.",
            "To nie jest muzyka, to jakiś niezrozumiały hałas. Nic nie rozumiem z tego, co ten chłopiec próbuje przekazać przez ten komputerowy efekt nałożony na wokale.",
            "Kiedyś szacunek budowało się latami na trudnych koncertach, dziś wystarczy jeden filmik w telefonie. Ta płyta jest sztuczna, brakuje w niej żywego, oddychającego człowieka.",
            "Pamiętam, jak w 1996 roku prowadziliśmy pierwsze audycje i wtedy rap miał duszę. Tutaj tej duszy absolutnie nie ma, jest tylko produkt do masowej konsumpcji."
        ]
    },
    pudelek: {
        good: [
            "Totalny hit tej jesieni! Raper szokuje kompletnie nowym wizerunkiem, a jego piosenka to idealny materiał na każdą domówkę. Prawdziwe szaleństwo w internecie!",
            "To jest prawdziwy sztos sezonu! Rytmiczne melodie i super bity sprawiają, że noga sama tupie. Tego wykonawcy nie może zabraknąć na waszej imprezowej playliście!",
            "Muzyka z niesamowitym pazurem! Dawno nie słyszeliśmy tak buntowniczego pop-rapu. Artysta po raz kolejny udowadnia, że wie, jak zrobić przebój na miarę pierwszych miejsc list przebojów.",
            "Niesamowita, gwiazdorska metamorfoza! Z chłopaka z blokowiska w prawdziwego króla salonów. Płyta ocieka luksusem i bogactwem, co widać szczególnie w klipie.",
            "Czy ta piosenka pobije rekord odtworzeń w sieci? Gwiazdor internetu nagrał płytę i fani dosłownie szaleją. Zobaczcie jego najbardziej szalone stylizacje!",
            "Hip-hopowy fenomen wraca z wielkim hitem! Bardzo szybkie tempo, wpadający w ucho refren – to wszystko, czego potrzebujecie na nadchodzące wakacje."
        ],
        mid: [
            "Fani są w absolutnym szoku! Gwiazdor hip-hopu wydaje nową płytę, na której śpiewa o złamanym sercu. Czy to koniec jego twardego, ulicznego wizerunku? Sprawdźcie naszą galerię!",
            "Wielkie kontrowersje wokół nowego krążka! Muzyk odważył się ostro skrytykować show-biznes. Zobacz, co znana modelka z Instagrama myśli o jego nowym teledysku!",
            "Smutna płyta na bardzo smutne, jesienne wieczory. Idol nastolatek wreszcie pokazuje swoją wrażliwą stronę. Tylko u nas zdjęcia z jego wakacji na rajskiej wyspie!"
        ],
        bad: [
            "Skandal na polskiej scenie! Znany raper ostro atakuje konkurencję w swojej najnowszej piosence. Kto wygra to wielkie starcie? Głosujcie w naszej specjalnej sondzie!"
        ]
    },
    slizg: {
        good: [
            "Kiedyś to był prawilny underground, a teraz chłop się sprzedał za reklamę parówek. Komercha aż razi w oczy, usuwam z dysku, bo wstyd tego słuchać na głośnikach.",
            "Od kiedy zaczął latać w cyrkowych ciuchach i robić tiktoki, stracił resztki osiedlowego szacunku. Płyta miękka jak masło na słońcu. Minus milion do respektu."
        ],
        mid: [
            "Jedyna dobra rzecz na tym krążku to wklejona gościnka VNM-a z 2007 roku, którą chyba odkopał z jakiegoś starego dysku. Reszta to istny dramat i zjazd do bazy.",
            "Gimby nie znajo, ale on już na bitwach kilka lat temu był łakiem. Nic się nie zmieniło, wciąż nawija te same farmazony o biedzie na blokach, chociaż mieszka na strzeżonym osiedlu."
        ],
        bad: [
            "Co to w ogóle za kasztan? Typ brzmi, jakby nagrywał te wokale w szafie u starych. Zero skilla, totalny łak, lepiej niech wraca do robienia kanapek. Beka z niego totalna.",
            "Największy syf tego roku. Co to kurwa jest za pażdzierz. Ślizg wydał wyrok: to jest najgorszy album tej dekady. Omijać bardzo szerokim łukiem.",
            "Ale paździerz. Kupiłem preorder limitowany ze skarpetkami i żałuję każdej wydanej złotówki. Płyta służy mi teraz za podstawkę pod kubek, bo do niczego innego się nie nadaje.",
            "Jaki on jest odklejony, to głowa mała. Teksty pisał mu chyba internetowy translator, a flow przypomina rzężenie silnika. Forum wydaje werdykt ostateczny: kasacja.",
            "Typ rymuje 'ziom' z 'dom' w dzisiejszych czasach. Serio? Kto mu to w ogóle wydał? Beton Records chyba naprawdę upadło na głowę, żeby takie słabe rzeczy tłoczyć na fizyku.",
            "Przesłuchałem pół minuty z darmowego serwera i dostałem raka uszu. Bit kradziony, zwrotki bez ładu i składu. Ten człowiek to chodzący mem, a nie raper. Pozdro dla kumatych, elo.",
            "CHUJOWE, NIE SŁUCHALIŚMY, TRADYCYJNIE RAPER Z CHUJEM W USZACH DO WYBIERANIA BITÓW."
        ]
    }
};

function getReviewText(type, score, album) {
    let s = Math.round(score);
    let category = 'bad';
    if (s >= 4) category = 'good';
    else if (s === 3) category = 'mid';
    
    let db = REVIEW_DB[type] || REVIEW_DB['storak'];
    let arr = db[category];
    if (!arr || arr.length === 0) arr = db['bad']; // fallback
    
    if (!gameState.usedReviews) gameState.usedReviews = {};
    if (!gameState.usedReviews[type]) gameState.usedReviews[type] = [];
    
    let available = arr.filter(r => !gameState.usedReviews[type].includes(r));
    if (available.length === 0) {
        // Jeśli wszystkie w danej kategorii (np. 'bad') zostały użyte, zresetuj pamięć dla tego recenzenta
        gameState.usedReviews[type] = [];
        available = arr;
    }
    
    let chosen = available[Math.floor(Math.random() * available.length)];
    gameState.usedReviews[type].push(chosen);
    
    return chosen;
}
