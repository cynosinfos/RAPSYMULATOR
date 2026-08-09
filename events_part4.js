const patoEventsPart4 = [
    // RÓŻNE ERY - Dogrywka
    {
        "id": 340, "era": 1, "title": "Pralnia brudnych pieniędzy",
        "desc": "Typ ze wschodu proponuje, że wyda ci teledysk za 500k, ale musisz przepuścić podejrzany hajs przez swoją działalność.",
        "options": [
            { "text": "Zgódź się (Ryzyko przypału, duża kasa)", "effects": { "Kasa": 250000, "StreetCred": 20, "Respekt": -10, "Odklejka": 15 } },
            { "text": "Spierdalaj stąd", "effects": { "Respekt": 20, "StreetCred": -10 } }
        ]
    },
    {
        "id": 341, "era": 1, "title": "Ciąg w studio z prostytutkami",
        "desc": "Zamknąłeś się w studio z dwiema prostytutkami i workiem koksu. Przepieprzyłeś mnóstwo kasy w weekend, nie nagrywając wokali.",
        "options": [
            { "text": "Zwal winę na producenta", "effects": { "Kasa": -30000, "Respekt": -20, "Wena": -20, "Odklejka": 20 } },
            { "text": "Idź prosto na terapię", "effects": { "Kasa": -50000, "Wena": 10, "Respekt": 10, "Odklejka": -10 } }
        ]
    },
    {
        "id": 342, "era": 2, "title": "Kradzież sprzętu z własnego labelu",
        "desc": "Twój świeżo podpisany podopieczny wywiózł o 4 w nocy mikrofony i interfejsy warte 150 tysięcy z twojego studia.",
        "options": [
            { "text": "Znajdź go i połam mu nogi (Ryzyko wyroku)", "effects": { "Kasa": -50000, "StreetCred": 40, "Respekt": 20, "Odklejka": 20 } },
            { "text": "Podaj go na policję (Ulica nie wybaczy)", "effects": { "StreetCred": -40, "Respekt": -30, "Kasa": 50000 } }
        ]
    },
    {
        "id": 343, "era": 2, "title": "Koncert za czarny hajs",
        "desc": "Oligarcha oferuje milion w gotówce w walizce, żebyś zagrał prywatny koncert na jego jachcie bez płacenia podatku.",
        "options": [
            { "text": "Bierz walizkę i graj", "effects": { "Kasa": 1000000, "Odklejka": 30, "StreetCred": 10 } },
            { "text": "Odmów", "effects": { "Respekt": 20 } }
        ]
    },
    {
        "id": 344, "era": 2, "title": "Piesek urzędu skarbowego",
        "desc": "Urząd Skarbowy wchodzi ci na konta za nieodliczone trasy z ostatnich 5 lat. Decyzja jest natychmiastowa - zajmują ci potężne środki.",
        "options": [
            { "text": "Krzycz o niesprawiedliwości", "effects": { "Kasa": -10000, "Odklejka": 20, "Hype": 15, "StreetCred": 10 } },
            { "text": "Zapłać bez gadania", "effects": { "Kasa": -10000, "Respekt": 10 } }
        ]
    },
    {
        "id": 345, "era": 2, "title": "Diler w VIP roomie",
        "desc": "Twój zaprzyjaźniony diler odpala się na backstage'u i zaczyna strzelać w sufit, bo ktoś mu nie zapłacił za towar.",
        "options": [
            { "text": "Rzuć się na niego by ratować ludzi", "effects": { "Respekt": 50, "Fejm": 20, "Hype": 20, "Kasa": -5000 } },
            { "text": "Schowaj się pod stół", "effects": { "StreetCred": -30, "Respekt": -20, "Fejm": -10 } }
        ]
    },
    {
        "id": 346, "era": 3, "title": "Tantiemy w błoto",
        "desc": "Podpisałeś dokument bez czytania. Okazało się, że zrzekłeś się 90% praw autorskich do swojego największego hitu na rzecz menadżera.",
        "options": [
            { "text": "Zniszcz mu auto i idź na wojnę prawną", "effects": { "Kasa": -100000, "Odklejka": 20, "StreetCred": 20 } },
            { "text": "Odpuść, zrobisz nowe hity", "effects": { "Wena": 30, "Respekt": 10, "Kasa": -200000 } }
        ]
    },
    {
        "id": 347, "era": 3, "title": "Przekupiona recenzja",
        "desc": "Naczelny znany portal muzyczny pisze ci recenzję 1/10. Dzwoni i mówi, że za 10 koła podmieni tekst na 9/10 i 'płytę roku'.",
        "options": [
            { "text": "Zapłać łapówkę", "effects": { "Kasa": -10000, "Fejm": 15, "Hype": 10, "Respekt": -10 } },
            { "text": "Wrzuć nagranie tej rozmowy do neta", "effects": { "Hype": 40, "Fejm": 20, "Respekt": 20, "Odklejka": 10 } }
        ]
    },
    {
        "id": 348, "era": 3, "title": "Złoty strzał fana",
        "desc": "Po koncercie rzucają ci na scenę worek. Okazuje się, że to fentanyl. Twój hypeman wciągnął krechę i wywożą go w karetce.",
        "options": [
            { "text": "Zapłać za najlepszą opiekę dla niego", "effects": { "Kasa": -50000, "Respekt": 40, "StreetCred": 20 } },
            { "text": "Wyrzuć go z ekipy za głupotę", "effects": { "Respekt": -40, "StreetCred": -20, "Odklejka": 10 } }
        ]
    },
    {
        "id": 349, "era": 3, "title": "Pozew od matki fana",
        "desc": "Matka dzieciaka oskarża cię, że przez twój patologiczny tekst jej syn wylądował u psychiatry. Żąda 100k odszkodowania.",
        "options": [
            { "text": "Idź do telewizji śniadaniowej się tłumaczyć", "effects": { "Fejm": 10, "Odklejka": 20, "Respekt": -20, "StreetCred": -20 } },
            { "text": "Wyśmiej pozew w nowym numerze", "effects": { "Hype": 30, "StreetCred": 20, "Odklejka": 30, "Kasa": -30000 } }
        ]
    },
    {
        "id": 350, "era": 3, "title": "Kwasowa odklejka",
        "desc": "Zarzuciłeś kwasa i nagrałeś 40-minutowy monolog o tym, że Ziemia jest płaska, a reptilianie rządzą rap grą.",
        "options": [
            { "text": "Utrzymuj, że to wszystko prawda", "effects": { "Odklejka": 50, "Hype": 30, "Fejm": 20, "Respekt": -40 } },
            { "text": "Powiedz, że to była akcja promocyjna", "effects": { "Odklejka": -10, "Hype": 10, "Respekt": -10 } }
        ]
    },
    {
        "id": 351, "era": 3, "title": "Spalony merch",
        "desc": "Konkurencja zachęca do palenia twoich koszulek. Nagle staje się to trendem na TikToku i nikt nie chce tego nosić.",
        "options": [
            { "text": "Zrób to samo z ich rzeczami (Drama)", "effects": { "Hype": 30, "Odklejka": 20, "Fejm": 10 } },
            { "text": "Olej to, prawda się obroni", "effects": { "Respekt": 20, "Kasa": -50000, "Fejm": -10 } }
        ]
    },
    {
        "id": 352, "era": 4, "title": "Wyciek nudesów",
        "desc": "Hakerzy wbijają ci na iClouda i publikują w necie folder 'Prywatne'. Szybko stajesz się obiektem drwin z powodu rozmiaru sprzętu.",
        "options": [
            { "text": "Pozwij hakerów (Długi proces)", "effects": { "Kasa": -30000, "Odklejka": 10 } },
            { "text": "Zrób z tego merch 'Mały ale wariat'", "effects": { "Kasa": 80000, "Odklejka": 40, "Hype": 30, "Respekt": -30 } }
        ]
    },
    {
        "id": 353, "era": 4, "title": "Oszust producent z Tajlandii",
        "desc": "Gość, któremu zapłaciłeś za 10 bitów z góry (50k PLN), ucieka do Tajlandii i kasuje fejsa.",
        "options": [
            { "text": "Wynajmij lokalnych kafarów by go znaleźli", "effects": { "Kasa": -30000, "StreetCred": 30, "Respekt": 20 } },
            { "text": "Strata wliczona w koszta", "effects": { "Kasa": -50000, "Wena": -10 } }
        ]
    },
    {
        "id": 354, "era": 4, "title": "Konflikt interesów z wytwórnią",
        "desc": "Boss wytwórni żąda, żebyś dograł się jego bezbekowemu bratankowi na płytę. Jak odmówisz – ucinają ci budżet promo.",
        "options": [
            { "text": "Nagraj zwrotkę na odpierdol", "effects": { "Respekt": -20, "Wena": -10, "Kasa": 10000 } },
            { "text": "Odmów stanowczo", "effects": { "Hype": -20, "Fejm": -10, "Respekt": 20, "StreetCred": 10 } }
        ]
    },
    {
        "id": 355, "era": 4, "title": "Dług w kasynie",
        "desc": "Poszedłeś grubo w ruletkę i masz 500 tysięcy w plecy u szemranych ludzi z miasta.",
        "options": [
            { "text": "Weź pożyczkę i spłać co do grosza", "effects": { "Kasa": -500000, "Respekt": 10 } },
            { "text": "Ukrywaj się za granicą", "effects": { "Odklejka": 30, "StreetCred": -40, "Respekt": -30, "Wena": -20 } }
        ]
    },
    {
        "id": 356, "era": 4, "title": "Sklepikarz-pajac",
        "desc": "Zatrudniłeś ziomka do prowadzenia sklepu z merchem. Typ się upił i wysłał klientom puste kartony z narysowanym kutasem.",
        "options": [
            { "text": "Zwolnij go i przeproś wszystkich", "effects": { "Kasa": -20000, "Respekt": 20 } },
            { "text": "Obróć w viralowy 'art projekt'", "effects": { "Odklejka": 40, "Hype": 20, "Respekt": -30, "Kasa": 10000 } }
        ]
    },
    {
        "id": 357, "era": 4, "title": "Okradziony tourbus",
        "desc": "Zostawiliście tourbus pod stacją. Patusy wjebały się do środka i zajebali wam gotówkę i ciuchy od projektantów.",
        "options": [
            { "text": "Wrzuć w neta info z nagrodą za złapanie 100k", "effects": { "Kasa": -100000, "StreetCred": 20, "Hype": 20 } },
            { "text": "Nic nie mów z obawy przed byciem wyśmianym", "effects": { "Kasa": -80000, "Wena": -15 } }
        ]
    },
    {
        "id": 358, "era": 4, "title": "Głód narkotykowy",
        "desc": "Zaczyna cię telepać w drodze na festiwal. Każesz szoferowi stawać na każdej stacji, żeby ogarnąć coś na uspokojenie.",
        "options": [
            { "text": "Dokończ trasę w bólach (Trzeźwość)", "effects": { "Wena": -30, "Respekt": 20, "Odklejka": -10 } },
            { "text": "Kup losowy syf od typa pod stacją", "effects": { "Odklejka": 30, "Kasa": -2000, "Hype": -10, "Respekt": -20 } }
        ]
    },
    {
        "id": 359, "era": 4, "title": "Kradzież sprzętu z samochodu",
        "desc": "Ktoś ci wyjebał szybę w furze i zajebał laptopa z całą nadchodzącą płytą i bitami od top producentów.",
        "options": [
            { "text": "Nagraj to wszystko od nowa", "effects": { "Wena": -40, "Respekt": 20, "Hype": 10 } },
            { "text": "Odwołaj premierę i zwiń się na pół roku", "effects": { "Fejm": -30, "Hype": -30, "Kasa": -50000 } }
        ]
    }
];

if (typeof gameEvents !== 'undefined') {
    gameEvents.push(...patoEventsPart4);
} else {
    console.warn("gameEvents nie zostało jeszcze zainicjalizowane!");
}
