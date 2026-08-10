const patoEventsPart4 = [
    // RĂ“Ĺ»NE ERY - Dogrywka
    {
        "id": 340, "era": 1, "title": "Pralnia brudnych pieniÄ™dzy",
        "desc": "Typ ze wschodu proponuje, ĹĽe wyda ci teledysk za 500k, ale musisz przepuĹ›ciÄ‡ podejrzany hajs przez swojÄ… dziaĹ‚alnoĹ›Ä‡.",
        "options": [
            { "text": "ZgĂłdĹş siÄ™ (Ryzyko przypaĹ‚u, duĹĽa kasa)", "effects": { "Kasa": 250000, "StreetCred": 20, "Respekt": -10, "Odklejka": 15 } },
            { "text": "Spierdalaj stÄ…d", "effects": { "Respekt": 20, "StreetCred": -10 } }
        ]
    },
    {
        "id": 341, "era": 1, "title": "CiÄ…g w studio z prostytutkami",
        "desc": "ZamknÄ…Ĺ‚eĹ› siÄ™ w studio z dwiema prostytutkami i workiem koksu. PrzepieprzyĹ‚eĹ› mnĂłstwo kasy w weekend, nie nagrywajÄ…c wokali.",
        "options": [
            { "text": "Zwal winÄ™ na producenta", "effects": { "Kasa": -30000, "Respekt": -20, "Wena": -20, "Odklejka": 20 } },
            { "text": "IdĹş prosto na terapiÄ™", "effects": { "Kasa": -50000, "Wena": 10, "Respekt": 10, "Odklejka": -10 } }
        ]
    },
    {
        "id": 342, "era": 2, "title": "KradzieĹĽ sprzÄ™tu z wĹ‚asnego labelu", "requiresLabel": true,
        "desc": "TwĂłj Ĺ›wieĹĽo podpisany podopieczny wywiĂłzĹ‚ o 4 w nocy mikrofony i interfejsy warte 150 tysiÄ™cy z twojego studia.",
        "options": [
            { "text": "ZnajdĹş go i poĹ‚am mu nogi (Ryzyko wyroku)", "effects": { "Kasa": -50000, "StreetCred": 40, "Respekt": 20, "Odklejka": 20 } },
            { "text": "Podaj go na policjÄ™ (Ulica nie wybaczy)", "effects": { "StreetCred": -40, "Respekt": -30, "Kasa": 50000 } }
        ]
    },
    {
        "id": 343, "era": 2, "title": "Koncert za czarny hajs",
        "desc": "Oligarcha oferuje milion w gotĂłwce w walizce, ĹĽebyĹ› zagraĹ‚ prywatny koncert na jego jachcie bez pĹ‚acenia podatku.",
        "options": [
            { "text": "Bierz walizkÄ™ i graj", "effects": { "Kasa": 1000000, "Odklejka": 30, "StreetCred": 10 } },
            { "text": "OdmĂłw", "effects": { "Respekt": 20 } }
        ]
    },
    {
        "id": 344, "era": 2, "title": "Piesek urzÄ™du skarbowego",
        "desc": "UrzÄ…d Skarbowy wchodzi ci na konta za nieodliczone trasy z ostatnich 5 lat. Decyzja jest natychmiastowa - zajmujÄ… ci potÄ™ĹĽne Ĺ›rodki.",
        "options": [
            { "text": "Krzycz o niesprawiedliwoĹ›ci", "effects": { "Kasa": -10000, "Odklejka": 20, "Hype": 15, "StreetCred": 10 } },
            { "text": "ZapĹ‚aÄ‡ bez gadania", "effects": { "Kasa": -10000, "Respekt": 10 } }
        ]
    },
    {
        "id": 345, "era": 2, "title": "Diler w VIP roomie",
        "desc": "TwĂłj zaprzyjaĹşniony diler odpala siÄ™ na backstage'u i zaczyna strzelaÄ‡ w sufit, bo ktoĹ› mu nie zapĹ‚aciĹ‚ za towar.",
        "options": [
            { "text": "RzuÄ‡ siÄ™ na niego by ratowaÄ‡ ludzi", "effects": { "Respekt": 50, "Fejm": 20, "Hype": 20, "Kasa": -5000 } },
            { "text": "Schowaj siÄ™ pod stĂłĹ‚", "effects": { "StreetCred": -30, "Respekt": -20, "Fejm": -10 } }
        ]
    },
    {
        "id": 346, "era": 3, "title": "Tantiemy w bĹ‚oto",
        "desc": "PodpisaĹ‚eĹ› dokument bez czytania. OkazaĹ‚o siÄ™, ĹĽe zrzekĹ‚eĹ› siÄ™ 90% praw autorskich do swojego najwiÄ™kszego hitu na rzecz menadĹĽera.",
        "options": [
            { "text": "Zniszcz mu auto i idĹş na wojnÄ™ prawnÄ…", "effects": { "Kasa": -100000, "Odklejka": 20, "StreetCred": 20 } },
            { "text": "OdpuĹ›Ä‡, zrobisz nowe hity", "effects": { "Wena": 30, "Respekt": 10, "Kasa": -200000 } }
        ]
    },
    {
        "id": 347, "era": 3, "title": "Przekupiona recenzja",
        "desc": "Naczelny znany portal muzyczny pisze ci recenzjÄ™ 1/10. Dzwoni i mĂłwi, ĹĽe za 10 koĹ‚a podmieni tekst na 9/10 i 'pĹ‚ytÄ™ roku'.",
        "options": [
            { "text": "ZapĹ‚aÄ‡ Ĺ‚apĂłwkÄ™", "effects": { "Kasa": -10000, "Fejm": 15, "Hype": 10, "Respekt": -10 } },
            { "text": "WrzuÄ‡ nagranie tej rozmowy do neta", "effects": { "Hype": 40, "Fejm": 20, "Respekt": 20, "Odklejka": 10 } }
        ]
    },
    {
        "id": 348, "era": 3, "title": "ZĹ‚oty strzaĹ‚ fana",
        "desc": "Po koncercie rzucajÄ… ci na scenÄ™ worek. Okazuje siÄ™, ĹĽe to fentanyl. TwĂłj hypeman wciÄ…gnÄ…Ĺ‚ krechÄ™ i wywoĹĽÄ… go w karetce.",
        "options": [
            { "text": "ZapĹ‚aÄ‡ za najlepszÄ… opiekÄ™ dla niego", "effects": { "Kasa": -50000, "Respekt": 40, "StreetCred": 20 } },
            { "text": "WyrzuÄ‡ go z ekipy za gĹ‚upotÄ™", "effects": { "Respekt": -40, "StreetCred": -20, "Odklejka": 10 } }
        ]
    },
    {
        "id": 349, "era": 3, "title": "Pozew od matki fana",
        "desc": "Matka dzieciaka oskarĹĽa ciÄ™, ĹĽe przez twĂłj patologiczny tekst jej syn wylÄ…dowaĹ‚ u psychiatry. Ĺ»Ä…da 100k odszkodowania.",
        "options": [
            { "text": "IdĹş do telewizji Ĺ›niadaniowej siÄ™ tĹ‚umaczyÄ‡", "effects": { "Fejm": 10, "Odklejka": 20, "Respekt": -20, "StreetCred": -20 } },
            { "text": "WyĹ›miej pozew w nowym numerze", "effects": { "Hype": 30, "StreetCred": 20, "Odklejka": 30, "Kasa": -30000 } }
        ]
    },
    {
        "id": 350, "era": 3, "title": "Kwasowa odklejka",
        "desc": "ZarzuciĹ‚eĹ› kwasa i nagraĹ‚eĹ› 40-minutowy monolog o tym, ĹĽe Ziemia jest pĹ‚aska, a reptilianie rzÄ…dzÄ… rap grÄ….",
        "options": [
            { "text": "Utrzymuj, ĹĽe to wszystko prawda", "effects": { "Odklejka": 50, "Hype": 30, "Fejm": 20, "Respekt": -40 } },
            { "text": "Powiedz, ĹĽe to byĹ‚a akcja promocyjna", "effects": { "Odklejka": -10, "Hype": 10, "Respekt": -10 } }
        ]
    },
    {
        "id": 351, "era": 3, "title": "Spalony merch",
        "desc": "Konkurencja zachÄ™ca do palenia twoich koszulek. Nagle staje siÄ™ to trendem na TikToku i nikt nie chce tego nosiÄ‡.",
        "options": [
            { "text": "ZrĂłb to samo z ich rzeczami (Drama)", "effects": { "Hype": 30, "Odklejka": 20, "Fejm": 10 } },
            { "text": "Olej to, prawda siÄ™ obroni", "effects": { "Respekt": 20, "Kasa": -50000, "Fejm": -10 } }
        ]
    },
    {
        "id": 352, "era": 4, "title": "Wyciek nudesĂłw",
        "desc": "Hakerzy wbijajÄ… ci na iClouda i publikujÄ… w necie folder 'Prywatne'. Szybko stajesz siÄ™ obiektem drwin z powodu rozmiaru sprzÄ™tu.",
        "options": [
            { "text": "Pozwij hakerĂłw (DĹ‚ugi proces)", "effects": { "Kasa": -30000, "Odklejka": 10 } },
            { "text": "ZrĂłb z tego merch 'MaĹ‚y ale wariat'", "effects": { "Kasa": 80000, "Odklejka": 40, "Hype": 30, "Respekt": -30 } }
        ]
    },
    {
        "id": 353, "era": 4, "title": "Oszust producent z Tajlandii",
        "desc": "GoĹ›Ä‡, ktĂłremu zapĹ‚aciĹ‚eĹ› za 10 bitĂłw z gĂłry (50k PLN), ucieka do Tajlandii i kasuje fejsa.",
        "options": [
            { "text": "Wynajmij lokalnych kafarĂłw by go znaleĹşli", "effects": { "Kasa": -30000, "StreetCred": 30, "Respekt": 20 } },
            { "text": "Strata wliczona w koszta", "effects": { "Kasa": -50000, "Wena": -10 } }
        ]
    },
    {
        "id": 354, "era": 4, "title": "Konflikt interesĂłw z wytwĂłrniÄ…",
        "desc": "Boss wytwĂłrni ĹĽÄ…da, ĹĽebyĹ› dograĹ‚ siÄ™ jego bezbekowemu bratankowi na pĹ‚ytÄ™. Jak odmĂłwisz â€“ ucinajÄ… ci budĹĽet promo.",
        "options": [
            { "text": "Nagraj zwrotkÄ™ na odpierdol", "effects": { "Respekt": -20, "Wena": -10, "Kasa": 10000 } },
            { "text": "OdmĂłw stanowczo", "effects": { "Hype": -20, "Fejm": -10, "Respekt": 20, "StreetCred": 10 } }
        ]
    },
    {
        "id": 355, "era": 4, "title": "DĹ‚ug w kasynie",
        "desc": "PoszedĹ‚eĹ› grubo w ruletkÄ™ i masz 500 tysiÄ™cy w plecy u szemranych ludzi z miasta.",
        "options": [
            { "text": "WeĹş poĹĽyczkÄ™ i spĹ‚aÄ‡ co do grosza", "effects": { "Kasa": -500000, "Respekt": 10 } },
            { "text": "Ukrywaj siÄ™ za granicÄ…", "effects": { "Odklejka": 30, "StreetCred": -40, "Respekt": -30, "Wena": -20 } }
        ]
    },
    {
        "id": 356, "era": 4, "title": "Sklepikarz-pajac",
        "desc": "ZatrudniĹ‚eĹ› ziomka do prowadzenia sklepu z merchem. Typ siÄ™ upiĹ‚ i wysĹ‚aĹ‚ klientom puste kartony z narysowanym kutasem.",
        "options": [
            { "text": "Zwolnij go i przeproĹ› wszystkich", "effects": { "Kasa": -20000, "Respekt": 20 } },
            { "text": "ObrĂłÄ‡ w viralowy 'art projekt'", "effects": { "Odklejka": 40, "Hype": 20, "Respekt": -30, "Kasa": 10000 } }
        ]
    },
    {
        "id": 357, "era": 4, "title": "Okradziony tourbus",
        "desc": "ZostawiliĹ›cie tourbus pod stacjÄ…. Patusy wjebaĹ‚y siÄ™ do Ĺ›rodka i zajebali wam gotĂłwkÄ™ i ciuchy od projektantĂłw.",
        "options": [
            { "text": "WrzuÄ‡ w neta info z nagrodÄ… za zĹ‚apanie 100k", "effects": { "Kasa": -100000, "StreetCred": 20, "Hype": 20 } },
            { "text": "Nic nie mĂłw z obawy przed byciem wyĹ›mianym", "effects": { "Kasa": -80000, "Wena": -15 } }
        ]
    },
    {
        "id": 358, "era": 4, "title": "GĹ‚Ăłd narkotykowy",
        "desc": "Zaczyna ciÄ™ telepaÄ‡ w drodze na festiwal. KaĹĽesz szoferowi stawaÄ‡ na kaĹĽdej stacji, ĹĽeby ogarnÄ…Ä‡ coĹ› na uspokojenie.",
        "options": [
            { "text": "DokoĹ„cz trasÄ™ w bĂłlach (TrzeĹşwoĹ›Ä‡)", "effects": { "Wena": -30, "Respekt": 20, "Odklejka": -10 } },
            { "text": "Kup losowy syf od typa pod stacjÄ…", "effects": { "Odklejka": 30, "Kasa": -2000, "Hype": -10, "Respekt": -20 } }
        ]
    },
    {
        "id": 359, "era": 4, "title": "KradzieĹĽ sprzÄ™tu z samochodu",
        "desc": "KtoĹ› ci wyjebaĹ‚ szybÄ™ w furze i zajebaĹ‚ laptopa z caĹ‚Ä… nadchodzÄ…cÄ… pĹ‚ytÄ… i bitami od top producentĂłw.",
        "options": [
            { "text": "Nagraj to wszystko od nowa", "effects": { "Wena": -40, "Respekt": 20, "Hype": 10 } },
            { "text": "OdwoĹ‚aj premierÄ™ i zwiĹ„ siÄ™ na pĂłĹ‚ roku", "effects": { "Fejm": -30, "Hype": -30, "Kasa": -50000 } }
        ]
    }
];

if (typeof gameEvents !== 'undefined') {
    gameEvents.push(...patoEventsPart4);
} else {
    console.warn("gameEvents nie zostaĹ‚o jeszcze zainicjalizowane!");
}
