const patoEvents = [
    // ERA 1: 1994 - 2001 (Klisze, gangusy, blokowiska)
    {
        "id": 300, "era": 1, "title": "Długi z przeszłości",
        "desc": "Upomina się o ciebie stary pruszkowski gangster, żądając 20% z każdego twojego koncertu 'za ochronę'.",
        "options": [
            { "text": "Płać haracz (Spadek kasy, rośnie respekt)", "effects": { "Kasa": -5000, "Respekt": 20, "StreetCred": 20 } },
            { "text": "Odmów i licz się z konsekwencjami (Ryzyko pobicia)", "effects": { "Respekt": 30, "StreetCred": 30, "Odklejka": 10, "Kasa": -2000 } }
        ]
    },
    {
        "id": 301, "era": 1, "title": "Uliczny Sąd",
        "desc": "Lokalna patologia wyzywa cię na tzw. solówkę w klatce schodowej bez rękawic. Fejm rośnie, ryzyko utraty zębów gwarantowane.",
        "options": [
            { "text": "Wyjdź do nich z pięściami", "effects": { "StreetCred": 40, "Respekt": 30, "Kasa": -1000, "Wena": -10 } },
            { "text": "Zgłoś to na policję", "effects": { "StreetCred": -50, "Respekt": -50, "Fejm": -10 } }
        ]
    },
    {
        "id": 302, "era": 1, "title": "Przypał na osiedlu",
        "desc": "Nagrywasz klip na starym osiedlu. Podbija lokalny patus i drze ryja: 'Wypierdalać stąd z tymi kamerami, to mój teren!'.",
        "options": [
            { "text": "Daj mu rolę w teledysku", "effects": { "StreetCred": 20, "Wena": 10, "Kasa": -500 } },
            { "text": "Zwińcie sprzęt i uciekajcie", "effects": { "Respekt": -15, "Wena": -10 } }
        ]
    },
    {
        "id": 303, "era": 1, "title": "Pies w ekipie",
        "desc": "Dowiadujesz się, że twój producent poszedł na układ z prokuraturą i sprzedaje chłopaków z osiedla.",
        "options": [
            { "text": "Wyrzuć go z ekipy i nagraj o tym kawałek", "effects": { "StreetCred": 30, "Respekt": 30, "Wena": 20, "Hype": 10 } },
            { "text": "Ignoruj, ważne że bity oddaje na czas", "effects": { "StreetCred": -40, "Respekt": -40 } }
        ]
    },
    {
        "id": 304, "era": 1, "title": "Groźby od kiboli",
        "desc": "Poszło info, że w młodzieńczych latach ganiałeś w szaliku wrogiej drużyny. Grożą ci zakazem wjazdu do ich miasta.",
        "options": [
            { "text": "Nagraj hymn na cześć lokalnego klubu", "effects": { "Respekt": -20, "Hype": -10, "StreetCred": -20 } },
            { "text": "Pokaż że masz to gdzieś", "effects": { "Respekt": 20, "StreetCred": 20, "Odklejka": 10 } }
        ]
    },
    {
        "id": 305, "era": 1, "title": "Niechciany patronat",
        "desc": "Prawilny raper-weteran, który wypadł z obiegu, chce wydać płytę w twoim labelu i straszy, że jak odmówisz, 'urwie ci łeb'.",
        "options": [
            { "text": "Wydaj to (Strata kasy, brak zysków)", "effects": { "Kasa": -15000, "StreetCred": 10, "Respekt": 10 } },
            { "text": "Postaw się", "effects": { "StreetCred": 30, "Odklejka": 15, "Wena": -10 } }
        ]
    },
    {
        "id": 306, "era": 1, "title": "Rozjebany koncert",
        "desc": "Wpada ekipa chuliganów winiąca cię za obrazę ich klubu. Zaczynają rozpierdalać sprzęt i rzucać szkłem.",
        "options": [
            { "text": "Wyskocz do nich z łapami (Zyskasz szacunek, stracisz zęby)", "effects": { "StreetCred": 40, "Respekt": 30, "Kasa": -5000 } },
            { "text": "Uciekaj tylnym wyjściem (Memy i strata szacunku)", "effects": { "Respekt": -30, "StreetCred": -30, "Fejm": -10 } }
        ]
    },
    {
        "id": 307, "era": 1, "title": "Kosa w żebro",
        "desc": "Pod klubem wjeżdża w ciebie psychofan ze scyzorykiem drąc się 'sprzedawczyk!'. Lądujesz w szpitalu.",
        "options": [
            { "text": "Opłać operację i wróć silniejszy", "effects": { "Kasa": -10000, "Respekt": 20, "Hype": 20, "Wena": 30 } },
            { "text": "Olej zalecone leczenie i idź chlać", "effects": { "Wena": -30, "Respekt": -10 } }
        ]
    },
    {
        "id": 308, "era": 1, "title": "Rozbita butelka na łbie",
        "desc": "Wchodzisz na scenę, a pijany seba rzuca w ciebie pełną butelką. Dostajesz prosto w czoło.",
        "options": [
            { "text": "Zatrzymaj koncert i wskaż go palcem (Wyrzucają go)", "effects": { "Respekt": 10, "Hype": 5 } },
            { "text": "Rzuć się w tłum żeby go pobić", "effects": { "StreetCred": 30, "Odklejka": 20, "Kasa": -2000 } }
        ]
    },
    {
        "id": 309, "era": 1, "title": "Skurwiały kontrakt",
        "desc": "Odkrywasz, że stary label posiada prawa do twojego pseudonimu. Musisz zmienić ksywę lub zapłacić okup.",
        "options": [
            { "text": "Zmień ksywę (Spadek fejmu)", "effects": { "Fejm": -20, "Hype": -10, "Respekt": -10 } },
            { "text": "Zapłać 50 000 PLN i zamknij sprawę", "effects": { "Kasa": -50000, "Wena": 20 } }
        ]
    },
    
    // ERA 2: 2002 - 2011 (Fora, portale plotkarskie, skandale)
    {
        "id": 310, "era": 2, "title": "Zdrada z menadżerką",
        "desc": "Serwisy plotkarskie wrzucają zdjęcia jak całujesz się z 50-letnią kobietą, szefową labelu. 'Ruchasz ją dla kariery' piszą na forach.",
        "options": [
            { "text": "Zignoruj hejt (Spadek szacunku ulicy)", "effects": { "Respekt": -20, "StreetCred": -20, "Fejm": 10 } },
            { "text": "Nagraj track 'To prawdziwa miłość'", "effects": { "Odklejka": 25, "Hype": 15, "Fejm": 15, "Respekt": -30 } }
        ]
    },
    {
        "id": 311, "era": 2, "title": "Nietrzeźwy feat",
        "desc": "Dogrywasz się do płyty weteranowi, ale jesteś tak napity w kabinie, że bełkoczesz. Weteran jest wściekły.",
        "options": [
            { "text": "Błagaj o litość i popraw zwrotkę", "effects": { "Respekt": -10, "Wena": 15, "Kasa": -1000 } },
            { "text": "Udostępnij pijany bełkot w internecie", "effects": { "Odklejka": 30, "Hype": 20, "Respekt": -20, "StreetCred": -10 } }
        ]
    },
    {
        "id": 312, "era": 2, "title": "Bitwa na pięści pod Żabką",
        "desc": "Typowy uliczny truskul nagrywa diss, że jesteś miękki. Spotykacie się pod sklepem, ludzie wyciągają telefony.",
        "options": [
            { "text": "Zlej go na kamerze", "effects": { "StreetCred": 30, "Respekt": 20, "Hype": 20, "Odklejka": 10 } },
            { "text": "Ucieknij z miejsca zdarzenia", "effects": { "StreetCred": -40, "Respekt": -40, "Fejm": -10 } }
        ]
    },
    {
        "id": 313, "era": 2, "title": "Przemyt w gaciach",
        "desc": "Jedziesz do Czech. Celnicy znajdują w twoich gaciach piguły. Grozi ci dołek.",
        "options": [
            { "text": "Daj 10 000 PLN w łapę celnikowi", "effects": { "Kasa": -10000, "Wena": -10 } },
            { "text": "Przyznaj się (zawiasy i wyrok)", "effects": { "Respekt": 10, "StreetCred": 15, "Odklejka": 15, "Kasa": -5000 } }
        ]
    },
    {
        "id": 314, "era": 2, "title": "Fałszywy sztywniutki",
        "desc": "Wycieka stare wideo z komendy, jak 'rozpruwasz się' o kradzież radia w aucie.",
        "options": [
            { "text": "Milcz i czekaj aż sprawa ucichnie", "effects": { "StreetCred": -50, "Respekt": -50, "Hype": -20 } },
            { "text": "Obróć to w żart na nowej płycie", "effects": { "Odklejka": 30, "StreetCred": -30, "Fejm": 20, "Hype": 15 } }
        ]
    },
    {
        "id": 315, "era": 2, "title": "Wjazd na chatę",
        "desc": "O 6 rano służby wyłamują drzwi z zawiasami, bo dostali cynk o ziołach.",
        "options": [
            { "text": "Bądź spokojny (Nie znaleźli, ale masz rozwalone drzwi)", "effects": { "Kasa": -2000, "Wena": -15, "StreetCred": 10 } },
            { "text": "Wyzywaj policjantów przy kamerach tv", "effects": { "StreetCred": 30, "Respekt": 20, "Odklejka": 20, "Kasa": -5000 } }
        ]
    },
    {
        "id": 316, "era": 2, "title": "Lot z balkonu",
        "desc": "Najebałeś się na domówce i próbowałeś skoczyć z balkonu do basenu. Złamałeś obie nogi.",
        "options": [
            { "text": "Zrób live'a ze szpitala z nogami w gipsie", "effects": { "Odklejka": 20, "Hype": 30, "Fejm": 10 } },
            { "text": "Odwołaj trasę w ukryciu", "effects": { "Kasa": -20000, "Respekt": -10, "Fejm": -10 } }
        ]
    },
    {
        "id": 317, "era": 2, "title": "Zgubiony hajs z trasy",
        "desc": "Budzisz się w hotelu we Wrocławiu. Cały utarg (40k PLN) wyparował, a obok leży loszka.",
        "options": [
            { "text": "Zaakceptuj stratę", "effects": { "Kasa": -40000, "Odklejka": 10, "Wena": -10 } },
            { "text": "Zrób aferę na całą Polskę", "effects": { "Kasa": -20000, "Hype": 15, "Odklejka": 20 } }
        ]
    },
    {
        "id": 318, "era": 2, "title": "Sponsorowany koks",
        "desc": "Bananowy dzieciak daje ci 50 koła za występ na 18-tce, jeśli wciągniesz z nim ścieżkę z tyłka striptizerki.",
        "options": [
            { "text": "Zgódź się, to łatwa kasa", "effects": { "Kasa": 50000, "Odklejka": 20, "Respekt": -20, "StreetCred": -10 } },
            { "text": "Odmów, nie jesteś cyrkowcem", "effects": { "Respekt": 20, "StreetCred": 10 } }
        ]
    },
    {
        "id": 319, "era": 2, "title": "Napad z klamką",
        "desc": "Na stacji benzynowej przystawiają ci broń do głowy i każą oddać łańcuch.",
        "options": [
            { "text": "Oddaj błyskotki", "effects": { "Kasa": -20000, "Respekt": -10, "StreetCred": -10 } },
            { "text": "Biegnij przed siebie (Masz farta, przeżyłeś)", "effects": { "Odklejka": 10, "Wena": 20, "StreetCred": 15 } }
        ]
    },
    
    // ERA 3: 2012 - 2023 (Instagram, Youtuberzy, Freak Fighty)
    {
        "id": 320, "era": 3, "title": "Wyzwanie na Freak Fight",
        "desc": "Znany patostrimer dzwoni na żywo i proponuje ci walkę z upośledzonym twórcą za milion złotych.",
        "options": [
            { "text": "Przyjmij ofertę, hajs to hajs", "effects": { "Kasa": 1000000, "Fejm": 50, "Odklejka": 40, "Respekt": -50, "StreetCred": -50 } },
            { "text": "Wyśmiej go i rzuć słuchawką", "effects": { "Respekt": 30, "StreetCred": 20, "Hype": 10 } }
        ]
    },
    {
        "id": 321, "era": 3, "title": "Rasistowski przypał",
        "desc": "Wycieka nagranie z backstage'u sprzed lat, gdzie ciśniesz kumpli rasistowskimi epitetami. Cancel culture atakuje.",
        "options": [
            { "text": "Opublikuj oficjalne przeprosiny z płaczem", "effects": { "Respekt": -30, "StreetCred": -20, "Fejm": -10 } },
            { "text": "Nagraj kawałek jebać poprawność polityczną", "effects": { "Odklejka": 25, "Hype": 40, "Fejm": 10, "Respekt": 10 } }
        ]
    },
    {
        "id": 322, "era": 3, "title": "Pobicie fana",
        "desc": "Fan prosi cię o zdjęcie pod fast foodem, a ty z frustracji uderzasz go burgerem i łamiesz nos.",
        "options": [
            { "text": "Zapłać mu ugodę 50 000 PLN", "effects": { "Kasa": -50000, "Respekt": -10 } },
            { "text": "Idź do sądu i zrób z siebie ofiarę", "effects": { "Odklejka": 30, "Hype": 15, "Fejm": -10 } }
        ]
    },
    {
        "id": 323, "era": 3, "title": "Odwyk na live",
        "desc": "Wchodzisz nagrzany na streama, zaczynasz płakać i prosisz fanów o zrzutkę na prywatny detoks.",
        "options": [
            { "text": "Zbierz kasę, ale przećpaj ją", "effects": { "Kasa": 20000, "Odklejka": 50, "Respekt": -40, "StreetCred": -30 } },
            { "text": "Pójdź faktycznie na detoks (-1 Rok)", "effects": { "Odklejka": -30, "Respekt": 10, "Wena": 20 } }
        ]
    },
    {
        "id": 324, "era": 3, "title": "Afera na bramkach",
        "desc": "Wrzucasz story z przeszukania drąc ryja 'jebać policje'. Znajdują u ciebie zioło.",
        "options": [
            { "text": "Płać kaucję i przyjmij zawiasy", "effects": { "Kasa": -15000, "StreetCred": 20, "Hype": 20 } },
            { "text": "Nagraj z tego klip promocyjny (Koszt)", "effects": { "Kasa": -25000, "StreetCred": 30, "Fejm": 15, "Hype": 30 } }
        ]
    },
    {
        "id": 325, "era": 3, "title": "Zgon na teledysku",
        "desc": "Główna aktorka na planie mdleje po przedawkowaniu. Reżyser chce wzywać policję.",
        "options": [
            { "text": "Wezwij karetkę i ponies konsekwencje", "effects": { "Respekt": 10, "Odklejka": 10, "Hype": -10, "Kasa": -10000 } },
            { "text": "Zostaw ją kolegom i ucieknij", "effects": { "StreetCred": -40, "Respekt": -50, "Odklejka": 30, "Fejm": -30 } }
        ]
    },
    {
        "id": 326, "era": 3, "title": "Plagiat bitu",
        "desc": "Zagraniczny producent zgłasza cię za plagiat 1:1. Płyta zdjęta z platform streamingowych.",
        "options": [
            { "text": "Podziel się prawami 50/50", "effects": { "Kasa": -50000, "Wena": -10 } },
            { "text": "Wyśmiej go i wydaj remix na YouTube", "effects": { "Odklejka": 20, "Hype": 25, "Respekt": -10, "Kasa": 10000 } }
        ]
    },
    {
        "id": 327, "era": 3, "title": "Pijany live za kółkiem",
        "desc": "Prowadzisz 200 km/h na streamie, wpadasz na latarnię i rozbijasz furę.",
        "options": [
            { "text": "Kup nowe auto, zapłać karę", "effects": { "Kasa": -200000, "Odklejka": 30, "Hype": 40 } },
            { "text": "Zbieraj kasę z patronite na nowe auto", "effects": { "Odklejka": 50, "Respekt": -40, "Kasa": 50000 } }
        ]
    },
    {
        "id": 328, "era": 3, "title": "Ustawiona akcja charytatywna",
        "desc": "Wysłałeś puste pudła do domu dziecka pod kamerę z logo sponsora. Sprawa wypływa na wierzch.",
        "options": [
            { "text": "Zapłać 200 tysięcy na prawdziwy cel, by uratować twarz", "effects": { "Kasa": -200000, "Respekt": 10 } },
            { "text": "Zwal na menedżera", "effects": { "Respekt": -30, "Odklejka": 15, "Fejm": -10 } }
        ]
    },
    {
        "id": 329, "era": 3, "title": "Afera biletowa",
        "desc": "Twój promotor zwiał z hajsem z biletów zostawiając fanów bez kasy i bez koncertu.",
        "options": [
            { "text": "Zwróć im kasę z własnej kieszeni", "effects": { "Kasa": -150000, "Respekt": 40, "Fejm": 10 } },
            { "text": "Umyj ręce, to nie twój problem", "effects": { "Respekt": -50, "Fejm": -20, "Odklejka": 20 } }
        ]
    },
    
    // ERA 4: 2024+ (TikTok, OnlyFans, Krypto, Własne marki)
    {
        "id": 330, "era": 4, "title": "Skandal z OnlyFans",
        "desc": "Twoja nowa dziewczyna, z którą się pokazujesz, kręci ostre filmy z innymi raperami.",
        "options": [
            { "text": "Zostaw ją i nagraj o tym smutny kawałek", "effects": { "Wena": 30, "Hype": 20, "Respekt": 10 } },
            { "text": "Powiedz, że to wasz styl bycia", "effects": { "Odklejka": 35, "StreetCred": -30, "Fejm": 10 } }
        ]
    },
    {
        "id": 331, "era": 4, "title": "Oszustwo Krypto",
        "desc": "Zrobiłeś reklamę SCAM-COINa, fani potracili oszczędności życia, prokuratura bada sprawę.",
        "options": [
            { "text": "Oddaj im chociaż część zysków", "effects": { "Kasa": -300000, "Respekt": 15, "Odklejka": -10 } },
            { "text": "Nagrywaj filmy z Dubaju (Ucieczka)", "effects": { "Odklejka": 50, "Fejm": 20, "Respekt": -50, "StreetCred": -40, "Kasa": 200000 } }
        ]
    },
    {
        "id": 332, "era": 4, "title": "Półplayback na ogromnym festiwalu",
        "desc": "Podczas koncertu dla 50 tys. ludzi DJ puszcza ścieżkę z pełnym wokalem. Widać, że lecisz z playbacku.",
        "options": [
            { "text": "Rozwal sprzęt DJ-a i zejdź ze sceny", "effects": { "Kasa": -50000, "Odklejka": 20, "Hype": 30, "Respekt": -10 } },
            { "text": "Skacz jak pajac udając, że tak miało być", "effects": { "Odklejka": 40, "Respekt": -30, "Fejm": -10 } }
        ]
    },
    {
        "id": 333, "era": 4, "title": "Wycofanie sponsora",
        "desc": "Poważna marka zrywa z tobą kontrakt na milion złotych po twojej wulgarnej wypowiedzi o mniejszościach.",
        "options": [
            { "text": "Zaakceptuj stratę milionera", "effects": { "Kasa": -200000, "Fejm": -10 } },
            { "text": "Nagraj na nich diss we współpracy z inną, gorszą marką", "effects": { "Kasa": 50000, "Odklejka": 20, "Hype": 20, "Respekt": -10 } }
        ]
    },
    {
        "id": 334, "era": 4, "title": "Odklejka religijna",
        "desc": "Zjarałeś się i ogłosiłeś, że jesteś reinkarnacją mesjasza. Fani robią ci ołtarzyki.",
        "options": [
            { "text": "Zarób na religijnym merchu", "effects": { "Kasa": 150000, "Odklejka": 60, "Respekt": -40, "Fejm": 20 } },
            { "text": "Usuń post i zniknij na miesiąc", "effects": { "Fejm": -10, "Hype": -10, "Wena": 10, "Odklejka": -10 } }
        ]
    },
    {
        "id": 335, "era": 4, "title": "Sponsoring z Chin",
        "desc": "Reklamujesz chińskie energetyki, po których dzieci dostają wstrząsu anafilaktycznego.",
        "options": [
            { "text": "Pozwij producenta za zatajenie składu", "effects": { "Kasa": -50000, "Respekt": 10, "Hype": 10 } },
            { "text": "Ignoruj i bierz wypłatę", "effects": { "Kasa": 300000, "Respekt": -40, "Odklejka": 30 } }
        ]
    },
    {
        "id": 336, "era": 4, "title": "Kryształowy Ciąg z producentami",
        "desc": "4 dni na krysztale. Gubisz pendrive z niezmixowaną płytą, która za tydzień ma premierę.",
        "options": [
            { "text": "Zapłać 100k okupu znalazcy", "effects": { "Kasa": -100000, "Wena": -10 } },
            { "text": "Powiedz, że to leak promocyjny", "effects": { "Odklejka": 20, "Hype": 40, "Kasa": -50000 } }
        ]
    },
    {
        "id": 337, "era": 4, "title": "Sfałszowane wyświetlenia",
        "desc": "Platforma streamingowa blokuje ci konto na pół roku za nabijanie sztucznych wyświetleń przez boty.",
        "options": [
            { "text": "Załóż alternatywne konto (Strata bazy)", "effects": { "Fejm": -30, "Kasa": -100000, "Respekt": -20 } },
            { "text": "Skup się na YouTube i koncertach", "effects": { "Hype": 10, "Kasa": -50000, "Wena": 20 } }
        ]
    },
    {
        "id": 338, "era": 4, "title": "Gruba faza u podcastera",
        "desc": "Odpaliłeś się w topowym wywiadzie. Gadasz potężne bzdury, wszyscy robią z tego memy.",
        "options": [
            { "text": "Zrób z tego autorski viral (Koszulki z cytatami)", "effects": { "Kasa": 80000, "Odklejka": 30, "Fejm": 20, "Respekt": -20 } },
            { "text": "Przeproś i zgłoś się na terapię", "effects": { "Respekt": 10, "Odklejka": -15, "Fejm": -10 } }
        ]
    },
    {
        "id": 339, "era": 4, "title": "Afera z pedofilem na płycie",
        "desc": "Gość z twojej piosenki ląduje w więzieniu z najcięższymi zarzutami obyczajowymi. Płyta w tłoczni.",
        "options": [
            { "text": "Zutylizuj cały nakład (Gigantyczna strata)", "effects": { "Kasa": -250000, "Respekt": 30, "Fejm": -10 } },
            { "text": "Wypuść i pofituj na skandalu", "effects": { "Kasa": 150000, "Odklejka": 60, "Respekt": -60, "Fejm": 30 } }
        ]
    }
];

if (typeof gameEvents !== 'undefined') {
    gameEvents.push(...patoEvents);
} else {
    console.warn("gameEvents nie zostało jeszcze zainicjalizowane!");
}
