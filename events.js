const gameEvents = [
    {
        "id": 1,
        "era": 1,
        "title": "Ustawka z ziomkami pod blokiem (freestyle)",
        "desc": "Siedzicie na ławce. Ktoś rzuca bit z boomboxa. Ziomki patrzą na ciebie.",
        "options": [
            { "text": "Wjedź z agresywnym punchem w stronę lokalnych lamusów.", "effects": { "StreetCred": 15, "Respekt": 5, "Wena": 5 } },
            { "text": "Zrzuć luźne rymy o tym co widzisz, bez spiny.", "effects": { "Wena": 15, "Fejm": 2 } }
        ]
    },
    {
        "id": 2,
        "era": 1,
        "title": "Pierwszy mikrofon z odzysku",
        "desc": "Dostałeś cynk, że znajomy DJ sprzedaje stary, poobijany mikrofon pojemnościowy z komisu.",
        "options": [
            { "text": "Wydaj całe oszczędności (-500 PLN). Jakość to podstawa.", "effects": { "Kasa": -500, "Wena": 30, "Hype": 5 } },
            { "text": "Nagrywaj dalej na mikrofonie z bazaru (0 PLN).", "effects": { "Kasa": 0, "Odklejka": -5, "StreetCred": 10 } }
        ]
    },
    {
        "id": 3,
        "era": 1,
        "title": "Konflikt z lokalnym patusem",
        "desc": "Największy kafar na osiedlu usłyszał, że 'śpiewasz' i chce ci pokazać, gdzie twoje miejsce.",
        "options": [
            { "text": "Nie pękaj. Pluniesz mu pod nogi i odchodzisz.", "effects": { "StreetCred": 25, "Respekt": 15, "Odklejka": 5, "Fejm": 5 } },
            { "text": "Uspokój sytuację. Obiecaj mu pozdrowienia na następnym nielegalu.", "effects": { "StreetCred": -10, "Respekt": -5, "Kasa": 100 } }
        ]
    },
    {
        "id": 4,
        "era": 1,
        "title": "Propozycja handlu (drobny diler)",
        "desc": "Kumpel, który zawsze ma grubszy portfel, proponuje ci mały 'kurs' z paczką zielska, żeby dorobić do muzy.",
        "options": [
            { "text": "Biorę to. Siano na bity samo się nie zarobi.", "effects": { "Kasa": 1500, "StreetCred": 20, "Odklejka": 15 } },
            { "text": "Odmów. Zajmuję się rapem, a nie kryminałem.", "effects": { "StreetCred": -10, "Wena": 10, "Respekt": 10 } }
        ]
    },
    {
        "id": 5,
        "era": 1,
        "title": "Kłótnia ze starymi o rap",
        "desc": "Rodzice mają dość dudnienia basu w nocy. Kazali ci iść do 'normalnej pracy'.",
        "options": [
            { "text": "Wyprowadź się do ziomka i skup się w 100% na muzyce.", "effects": { "Kasa": -200, "Odklejka": 20, "Wena": 30, "StreetCred": 10 } },
            { "text": "Złóż obietnicę poprawy i nagrywaj w tajemnicy.", "effects": { "Wena": -15, "Odklejka": -10 } }
        ]
    },
    {
        "id": 6,
        "era": 1,
        "title": "Używki przed pierwszym demem",
        "desc": "Siedzisz przed kartką i masz blokadę. Kumpel kładzie na stole tani alkohol i podejrzane piguły.",
        "options": [
            { "text": "Dawaj to. Potrzebuję inspiracji.", "effects": { "Wena": 40, "Odklejka": 25, "Addiction": 20 } },
            { "text": "Rap to czysta zajawka, zero gówna.", "effects": { "Wena": -5, "Respekt": 10 } }
        ]
    },
    {
        "id": 7,
        "era": 1,
        "title": "Nagrywka w szafie",
        "desc": "Znajomy beatmaker wyciszył szafę wytłoczkami po jajkach. W środku jest 40 stopni.",
        "options": [
            { "text": "Wchodzę tam i pluję rymami aż zemdleję.", "effects": { "Wena": 20, "StreetCred": 15, "Odklejka": 5 } },
            { "text": "Zrezygnuj. Brzmi to tragicznie, wolisz poczekać na profesjonalne warunki.", "effects": { "Wena": -10, "Fejm": 5 } }
        ]
    },
    {
        "id": 8,
        "era": 1,
        "title": "Zaproszenie na szkolną imprezę (pierwszy występ)",
        "desc": "Dostałeś propozycję zagrania na dyskotece w lokalnym liceum. Płacą w piwie.",
        "options": [
            { "text": "Zagraj z pełną energią, nawet jeśli cię wyśmieją.", "effects": { "Fejm": 10, "Hype": 5, "StreetCred": -5 } },
            { "text": "Olej to. Prawdziwy hip-hop nie gra na szkolnych baletach.", "effects": { "StreetCred": 15, "Fejm": -5 } }
        ]
    },
    {
        "id": 9,
        "era": 1,
        "title": "Policja zwija ziomka na kwadracie",
        "desc": "Błękitni robią nalot na mieszkanie kumpla, u którego właśnie nagrywasz wokal.",
        "options": [
            { "text": "Zaczynasz nagrywać akcję i krzyczeć CHWDP.", "effects": { "StreetCred": 30, "Hype": 15, "Odklejka": 20, "Kasa": -500 } },
            { "text": "Siedzisz cicho i chowasz kasety.", "effects": { "StreetCred": -10, "Odklejka": -5 } }
        ]
    },
    {
        "id": 10,
        "era": 1,
        "title": "Ziomek prosi o poręczenie u lichwiarza",
        "desc": "Kumpel, z którym robiłeś bity, prosi cię o podżyrowanie długu. Chce kupić sampler.",
        "options": [
            { "text": "Dla brata wszystko. (Poręczasz)", "effects": { "StreetCred": 20, "Respekt": 15, "Kasa": -2000 } },
            { "text": "Odmów. Siano i przyjaźń to złe połączenie.", "effects": { "StreetCred": -15, "Kasa": 500 } }
        ]
    },
    {
        "id": 29,
        "era": 1,
        "title": "Przypadkowy diss na lokalną legendę w podziemiu",
        "desc": "Twoja demówka wyciekła, a na niej linijka, która brzmi jak atak na najstarszego rapera w mieście.",
        "options": [
            { "text": "Bierz to na klatę. To jest wojna!", "effects": { "Hype": 30, "StreetCred": 20, "Respekt": -20 } },
            { "text": "Wytłumacz, że to nieporozumienie. Jesteś pokorny.", "effects": { "Hype": -10, "Respekt": 10, "Fejm": -5 } }
        ]
    },
    {
        "id": 30,
        "era": 1,
        "title": "Ucieczka przed kanarami / policją po malowaniu murów",
        "desc": "Razem z ekipą wrzucacie wrzuty (tagi) na mury. Zauważa was radiowóz.",
        "options": [
            { "text": "Uciekaj przez płoty! (Adrenalina na maxa)", "effects": { "StreetCred": 15, "Wena": 15, "Odklejka": 5 } },
            { "text": "Zostań i próbuj zagadać. (Wlepa)", "effects": { "StreetCred": -5, "Kasa": -200 } }
        ]
    },
    {
        "id": 31,
        "era": 1,
        "title": "Oferta od podejrzanego 'Menedżera' z osiedla",
        "desc": "Łysy gość w skórze proponuje, że wyda ci kasetę, ale on zgarnia 90% hajsu.",
        "options": [
            { "text": "Lepsze to niż nic. Zgoda.", "effects": { "Kasa": 500, "Fejm": 15, "Hype": 10, "StreetCred": -20 } },
            { "text": "Każ mu spadać. Zostajesz niezależny.", "effects": { "StreetCred": 25, "Respekt": 15, "Wena": 10 } }
        ]
    },
    {
        "id": 32,
        "era": 1,
        "title": "Sprzedaż kaset magnetofonowych z bagażnika",
        "desc": "Zrobiłeś 100 sztuk nielegala. Idziesz handlować pod klubem muzycznym.",
        "options": [
            { "text": "Wciskaj każdemu i rób szum.", "effects": { "Kasa": 1200, "Fejm": 10, "Hype": 15 } },
            { "text": "Rozdawaj za darmo, żeby zbudować fanbase.", "effects": { "Kasa": -200, "StreetCred": 20, "Respekt": 15 } }
        ]
    },
    {
        "id": 33,
        "era": 1,
        "title": "Skradziony tekst na kartce",
        "desc": "Twój zeszyt z tekstami zniknął na imprezie. Tydzień później ktoś nawija twoje rymy.",
        "options": [
            { "text": "Wjedź w niego przy wszystkich i zrób dym.", "effects": { "StreetCred": 30, "Respekt": 20, "Hype": 15 } },
            { "text": "Napisz lepsze. I tak masz więcej talentu.", "effects": { "Wena": 30, "Odklejka": -5 } }
        ]
    },
    {
        "id": 34,
        "era": 1,
        "title": "Problemy z alkoholem przed graniem w mrocznym klubie",
        "desc": "Stres przed pierwszym poważnym supportem. Z nerwów wypiłeś o 3 piwa za dużo.",
        "options": [
            { "text": "Wchodzisz na scenę i robisz totalny rozpierdol (i zapominasz tekstu).", "effects": { "Hype": 25, "Fejm": -5, "Respekt": -15, "Odklejka": 20 } },
            { "text": "Rzygasz w kiblu, otrzepujesz się i grasz czysto.", "effects": { "Wena": -10, "StreetCred": 5, "Respekt": 10 } }
        ]
    },
    {
        "id": 35,
        "era": 1,
        "title": "Wjazd kiboli na Twój rewir podczas nagrywania klipu",
        "desc": "Kamerzysta robi z wami VHS-a pod blokiem. Nagle podbijają kibice z obcego rewiru.",
        "options": [
            { "text": "Postaw się razem z ekipą. Wybucha mała wojna.", "effects": { "StreetCred": 40, "Respekt": 20, "Kasa": -1000, "Odklejka": 15 } },
            { "text": "Zawijamy sprzęt. Nie ma sensu tracić kamery.", "effects": { "StreetCred": -20, "Hype": -10, "Fejm": 0 } }
        ]
    },
    {
        "id": 36,
        "era": 1,
        "title": "Pożyczka od osiedlowego watażki na bity",
        "desc": "Producent chce kasy z góry. Lokalny biznesmen oferuje ci pożyczkę bez papierów.",
        "options": [
            { "text": "Bierz hajs. Zwrócisz z pierwszej wypłaty.", "effects": { "Kasa": 3000, "Odklejka": 15, "StreetCred": 10 } },
            { "text": "Nie rób interesów z mafią. Kradnij programy do produkcji z neta.", "effects": { "Wena": 15, "StreetCred": 10, "Respekt": -5 } }
        ]
    },
    {
        "id": 11,
        "era": 2,
        "title": "Prowokacja na forum Ślizg.eu",
        "desc": "Na forum dyskusyjnym powstał 40-stronicowy wątek wyśmiewający twoje brzmienie i luźne spodnie.",
        "options": [
            {
                "text": "Załóż fikcyjne konto i przekonuj wszystkich, że jesteś geniuszem.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": -15,
                    "Fejm": 5,
                    "Hype": 10,
                    "Odklejka": 25,
                    "Wena": -10
                }
            },
            {
                "text": "Nagraj bezlitosny diss i udostępnij plik MP na darmowym serwerze.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 25,
                    "Fejm": 20,
                    "Hype": 30,
                    "Odklejka": 5,
                    "Wena": 20
                }
            }
        ]
    },
    {
        "id": 12,
        "era": 2,
        "title": "Wyboisty koncert w Zielonej Górze",
        "desc": "Publiczność na klubowym koncercie zaczyna gwizdać i domagać się schodzenia ze sceny.",
        "options": [
            {
                "text": "Zrób ostre przemówienie przez mikrofon i zatrzymaj cały występ.",
                "effects": {
                    "Kasa": -1000,
                    "StreetCred": 35,
                    "Fejm": 30,
                    "Hype": 40,
                    "Odklejka": 35,
                    "Wena": 0
                }
            },
            {
                "text": "Zagraj zaplanowany materiał do końca, unikając wzroku zgromadzonych.",
                "effects": {
                    "Kasa": 1500,
                    "StreetCred": -20,
                    "Fejm": -10,
                    "Hype": -15,
                    "Odklejka": -10,
                    "Wena": -5
                }
            }
        ]
    },
    {
        "id": 13,
        "era": 2,
        "minTier": 3,
        "title": "Nominacja na gali VIVA Comet",
        "desc": "Dostajesz nominację do telewizyjnej nagrody muzycznej. Stacja wymaga eleganckiego ubioru.",
        "options": [
            {
                "text": "Przyjdź w dresie oversize, wyśmiej statuetkę ze sceny i opuść salę.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 45,
                    "Fejm": 25,
                    "Hype": 35,
                    "Odklejka": 20,
                    "Wena": 10
                }
            },
            {
                "text": "Załóż garnitur, odebrana statuetka niech wyląduje na półce, a ty podziękuj sponsorom.",
                "effects": {
                    "Kasa": 5000,
                    "StreetCred": -45,
                    "Fejm": 50,
                    "Hype": 15,
                    "Odklejka": -15,
                    "Wena": -20
                }
            }
        ]
    },
    {
        "id": 14,
        "era": 2,
        "title": "Storytelling o pizzerii na osiedlu",
        "desc": "Postanawiasz napisać utwór z rozbudowaną fabułą o tragicznej miłości i pizzerii.",
        "options": [
            {
                "text": "Dopracuj teksty do perfekcji i zatrudnij profesjonalnych aktorów do teledysku.",
                "effects": {
                    "Kasa": -5000,
                    "StreetCred": 30,
                    "Fejm": 40,
                    "Hype": 25,
                    "Odklejka": -5,
                    "Wena": 40
                }
            },
            {
                "text": "Wpleć w historię absurdalne i nierealistyczne zwroty akcji.",
                "effects": {
                    "Kasa": -1000,
                    "StreetCred": 10,
                    "Fejm": 15,
                    "Hype": 15,
                    "Odklejka": 20,
                    "Wena": 10
                }
            }
        ]
    },
    {
        "id": 15,
        "era": 2,
        "title": "Własna linia ubrań ciuchowych",
        "desc": "Fani chcą nosić szerokie spodnie z twoim logotypem. Dystrybutor proponuje współpracę.",
        "options": [
            {
                "text": "Wypuść serię spodni tak szerokich, że mieszczą dwóch ludzi naraz.",
                "effects": {
                    "Kasa": 15000,
                    "StreetCred": 20,
                    "Fejm": 20,
                    "Hype": 15,
                    "Odklejka": 10,
                    "Wena": 0
                }
            },
            {
                "text": "Sprzedawaj wysoce limitowane edycje z jakościowych materiałów.",
                "effects": {
                    "Kasa": 5000,
                    "StreetCred": 35,
                    "Fejm": 5,
                    "Hype": 25,
                    "Odklejka": 0,
                    "Wena": 5
                }
            }
        ]
    },
    {
        "id": 16,
        "era": 2,
        "minTier": 2,
        "title": "Pozew za użycie nielegalnego sampla",
        "desc": "Znany kompozytor muzyki filmowej odkrywa fragment swojego utworu na twojej płycie CD.",
        "options": [
            {
                "text": "Zapłać ugodę finansową po cichu i usuń sampel z reedycji.",
                "effects": {
                    "Kasa": -10000,
                    "StreetCred": -15,
                    "Fejm": 5,
                    "Hype": -10,
                    "Odklejka": -10,
                    "Wena": 0
                }
            },
            {
                "text": "Nagraj utwór potępiający twórcę i wyzwij go na pojedynek freestyle'owy.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 30,
                    "Fejm": 25,
                    "Hype": 35,
                    "Odklejka": 30,
                    "Wena": 15
                }
            }
        ]
    },
    {
        "id": 17,
        "era": 2,
        "title": "Wyjazd na festiwal Hip-Hop Kemp",
        "desc": "Jedziesz pociągiem pełnym słuchaczy na kultowy festiwal w Czechach.",
        "options": [
            {
                "text": "Imprezuj przez trzy dni bez przerwy i wyjdź na scenę całkowicie pozbawiony głosu.",
                "effects": {
                    "Kasa": -1000,
                    "StreetCred": 30,
                    "Fejm": 15,
                    "Hype": 20,
                    "Odklejka": 40,
                    "Wena": -20
                }
            },
            {
                "text": "Przygotuj dopracowany show z DJ-em i żywym zespołem.",
                "effects": {
                    "Kasa": 3000,
                    "StreetCred": 20,
                    "Fejm": 30,
                    "Hype": 15,
                    "Odklejka": -10,
                    "Wena": 25
                }
            }
        ]
    },
    {
        "id": 18,
        "era": 2,
        "title": "Afera o znieważenie piosenkarki pop",
        "desc": "Gwiazda muzyki popularnej czuje się urażona twoim tekstem o jej osobie.",
        "options": [
            {
                "text": "Przeproś w oficjalnym oświadczeniu wystosowanym do mediów.",
                "effects": {
                    "Kasa": -2000,
                    "StreetCred": -40,
                    "Fejm": 10,
                    "Hype": -20,
                    "Odklejka": -15,
                    "Wena": -20
                }
            },
            {
                "text": "Zrób koszulki z obraźliwym wersem i sprzedawaj je na koncertach.",
                "effects": {
                    "Kasa": 10000,
                    "StreetCred": 40,
                    "Fejm": 35,
                    "Hype": 45,
                    "Odklejka": 25,
                    "Wena": 10
                }
            }
        ]
    },
    {
        "id": 20,
        "era": 2,
        "title": "Diss na popularną markę parówek",
        "desc": "Producent wędlin proponuje reklamę, ale ty decydujesz się wykorzystać temat marketingowo.",
        "options": [
            {
                "text": "Wystąp w reklamie parówek na billboardach w całym kraju.",
                "effects": {
                    "Kasa": 50000,
                    "StreetCred": -40,
                    "Fejm": 30,
                    "Hype": 30,
                    "Odklejka": 10,
                    "Wena": -20
                }
            },
            {
                "text": "Nagraj bezlitosny diss na przetwory mięsne i komercję.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 25,
                    "Fejm": 10,
                    "Hype": 15,
                    "Odklejka": 5,
                    "Wena": 15
                }
            }
        ]
    },
    {
        "id": 21,
        "era": 3,
        "title": "Absurdalny gadżet w boxie preorderowym",
        "desc": "Fani oczekują unikalnych dodatków do limitowanej edycji nowej płyty.",
        "options": [
            {
                "text": "Dołącz do płyty skarpetki z logo, fragment podartej koszulki i puszkę powietrza.",
                "effects": {
                    "Kasa": 60000,
                    "StreetCred": -10,
                    "Fejm": 25,
                    "Hype": 50,
                    "Odklejka": 20,
                    "Wena": 0
                }
            },
            {
                "text": "Wydaj album w skromnym, plastikowym pudełku, stawiając wyłącznie na muzykę.",
                "effects": {
                    "Kasa": 10000,
                    "StreetCred": 30,
                    "Fejm": -10,
                    "Hype": -20,
                    "Odklejka": -10,
                    "Wena": 10
                }
            }
        ]
    },
    {
        "id": 22,
        "era": 3,
        "title": "Zaproszenie do akcji Młode Wilki",
        "desc": "Portal branżowy wybiera cię do prestiżowej akcji promującej obiecujące talenty.",
        "options": [
            {
                "text": "Nagraj porywającą zwrotkę i zdominuj utwór zbiorowy.",
                "effects": {
                    "Kasa": 2000,
                    "StreetCred": 20,
                    "Fejm": 35,
                    "Hype": 40,
                    "Odklejka": 0,
                    "Wena": 30
                }
            },
            {
                "text": "Wywołaj sprzeczkę o ułożenie na zdjęciu grupowym i spóźnij się na nagrania.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 10,
                    "Fejm": 15,
                    "Hype": 20,
                    "Odklejka": 30,
                    "Wena": -10
                }
            }
        ]
    },
    {
        "id": 23,
        "era": 3,
        "minTier": 3,
        "title": "Kupno zwrotki od rap-gwiazdy z USA",
        "desc": "Agencja oferuje kontakt do zapomnianej legendy rapu z Nowego Jorku za 10, USD.",
        "options": [
            {
                "text": "Zapłać kwotę i otrzymaj nagranie niskiej jakości przysłane pocztą e-mail.",
                "effects": {
                    "Kasa": -40000,
                    "StreetCred": 15,
                    "Fejm": 30,
                    "Hype": 25,
                    "Odklejka": 10,
                    "Wena": -5
                }
            },
            {
                "text": "Zainwestuj te środki w realizację teledysku za granicą z użyciem dronów.",
                "effects": {
                    "Kasa": -40000,
                    "StreetCred": 0,
                    "Fejm": 40,
                    "Hype": 35,
                    "Odklejka": 0,
                    "Wena": 15
                }
            }
        ]
    },
    {
        "id": 24,
        "era": 3,
        "title": "Wyjazdowy vlog z trasy i zniszczenia w hotelu",
        "desc": "Podczas trasy koncertowej twój hypeman niszczy wyposażenie pokoju, a wszystko trafia na YouTube.",
        "options": [
            {
                "text": "Opublikuj film z krzykliwym tytułem i zbieraj zyski z wyświetleń.",
                "effects": {
                    "Kasa": 2000,
                    "StreetCred": 15,
                    "Fejm": 30,
                    "Hype": 45,
                    "Odklejka": 35,
                    "Wena": 0
                }
            },
            {
                "text": "Usuń nagranie i pokryj szkody z własnej kieszeni.",
                "effects": {
                    "Kasa": -3000,
                    "StreetCred": -20,
                    "Fejm": -10,
                    "Hype": -15,
                    "Odklejka": -10,
                    "Wena": 0
                }
            }
        ]
    },
    {
        "id": 25,
        "era": 3,
        "title": "Finał Bitwy Freestyle’owej WBW",
        "desc": "Stajesz na scenie w finale wielkiej bitwy improwizowanej. Przeciwnik atakuje twój styl.",
        "options": [
            {
                "text": "Odpowiedz celną, ripostą uderzającą w jego przeszłość.",
                "effects": {
                    "Kasa": 2000,
                    "StreetCred": 40,
                    "Fejm": 20,
                    "Hype": 30,
                    "Odklejka": 10,
                    "Wena": 20
                }
            },
            {
                "text": "Zapomnij tekstu, zacznij reklamować swój nowy album i zejdź ze sceny.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": -30,
                    "Fejm": 15,
                    "Hype": 10,
                    "Odklejka": 25,
                    "Wena": -20
                }
            }
        ]
    },
    {
        "id": 26,
        "era": 3,
        "minTier": 2,
        "title": "Lokowanie lokalu gastronomicznego w klipie",
        "desc": "Właściciel lokalnej sieci gastronomicznej oferuje pieniądze za umieszczenie jego logo w teledysku.",
        "options": [
            {
                "text": "Zgodzić się i rapować z jedzeniem w dłoni na pierwszym planie.",
                "effects": {
                    "Kasa": 10000,
                    "StreetCred": -25,
                    "Fejm": 20,
                    "Hype": 15,
                    "Odklejka": 15,
                    "Wena": -10
                }
            },
            {
                "text": "Odrzucić ofertę i wyśmiać lokowanie produktów w utworze.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 20,
                    "Fejm": 5,
                    "Hype": 10,
                    "Odklejka": 0,
                    "Wena": 10
                }
            }
        ]
    },
    {
        "id": 27,
        "era": 3,
        "title": "Zmiana stylu z boom-bapu na trap",
        "desc": "Nowoczesne brzmienia zdominowały rynek. Dotychczasowi fani oskarżają cię o zdradę.",
        "options": [
            {
                "text": "Przestaw się całkowicie na autotune, zmień wizerunek i zacznij pisać o nowoczesnym stylu życia.",
                "effects": {
                    "Kasa": 50000,
                    "StreetCred": -50,
                    "Fejm": 60,
                    "Hype": 50,
                    "Odklejka": 20,
                    "Wena": 10
                }
            },
            {
                "text": "Nagraj płytę hołdującą brzmieniu lat ., ignorując nowe trendy.",
                "effects": {
                    "Kasa": 5000,
                    "StreetCred": 45,
                    "Fejm": -20,
                    "Hype": -30,
                    "Odklejka": -10,
                    "Wena": 20
                }
            }
        ]
    },
    {
        "id": 28,
        "era": 3,
        "title": "Udział w wyzwaniu Hot16Challenge",
        "desc": "Zostajesz nominowany do nagrania  wersów pod presją czasu w ramach akcji charytatywnej.",
        "options": [
            {
                "text": "Nagraj porywającą zwrotkę, wpłać kwotę i nominuj znane postacie sceny politycznej.",
                "effects": {
                    "Kasa": -5000,
                    "StreetCred": 20,
                    "Fejm": 45,
                    "Hype": 40,
                    "Odklejka": 5,
                    "Wena": 25
                }
            },
            {
                "text": "Wykorzystaj okazję, by w  wersach reklamować swój nadchodzący sklep z ubraniami.",
                "effects": {
                    "Kasa": 15000,
                    "StreetCred": -35,
                    "Fejm": 20,
                    "Hype": 10,
                    "Odklejka": 20,
                    "Wena": -15
                }
            }
        ]
    },
    {
        "id": 29,
        "era": 3,
        "title": "Blokada monetyzacji na platformie wideo",
        "desc": "Automatyczny system wykrył nieautoryzowany sampel w twoim głównym hicie.",
        "options": [
            {
                "text": "Złóż odwołanie i zaangażuj prawników do walki z korporacją.",
                "effects": {
                    "Kasa": -2000,
                    "StreetCred": 10,
                    "Fejm": 5,
                    "Hype": 10,
                    "Odklejka": 10,
                    "Wena": 0
                }
            },
            {
                "text": "Nagraj ten sam utwór od nowa z nieznacznie zmienionym podkładem.",
                "effects": {
                    "Kasa": 3000,
                    "StreetCred": -10,
                    "Fejm": 10,
                    "Hype": 5,
                    "Odklejka": 5,
                    "Wena": 5
                }
            }
        ]
    },
    {
        "id": 30,
        "era": 3,
        "title": "Otwarcie stacjonarnego butiku odzieżowego",
        "desc": "Inwestujesz oszczędności w ekskluzywny sklep w modnej dzielnicy stolicy.",
        "options": [
            {
                "text": "Zorganizuj huczne otwarcie z darmowym alkoholem i tłumem fanów.",
                "effects": {
                    "Kasa": -20000,
                    "StreetCred": 15,
                    "Fejm": 30,
                    "Hype": 35,
                    "Odklejka": 15,
                    "Wena": 0
                }
            },
            {
                "text": "Ogranicz sprzedaż wyłącznie do kanału internetowego bez fizycznego lokalu.",
                "effects": {
                    "Kasa": 10000,
                    "StreetCred": 10,
                    "Fejm": 0,
                    "Hype": 5,
                    "Odklejka": -5,
                    "Wena": 0
                }
            }
        ]
    },
    {
        "id": 31,
        "era": 4,
        "title": "Transmisja na żywo o 4: rano z zagranicy",
        "desc": "Pod wpływem silnych emocji i substancji odpalasz transmisję internetową z pokoju hotelowego.",
        "options": [
            {
                "text": "Opowiedz o układach w branży, wyzwij byłych wydawców i pokazuj pliki gotówki.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": -20,
                    "Fejm": 50,
                    "Hype": 60,
                    "Odklejka": 50,
                    "Wena": -20
                }
            },
            {
                "text": "Wyłącz telefon i udaj się na spoczynek.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 10,
                    "Fejm": -5,
                    "Hype": -10,
                    "Odklejka": -20,
                    "Wena": 10
                }
            }
        ]
    },
    {
        "id": 32,
        "era": 4,
        "title": "Odmowa lub przyjęcie oferty walki Freak Fight",
        "desc": "Federacja walk celebrytów oferuje 600, PLN za walkę w klatce z patoinfluencerem.",
        "options": [
            {
                "text": "Podpisz kontrakt, rób awantury na konferencjach i przegraj pojedynek w kilkanaście sekund.",
                "effects": {
                    "Kasa": 600000,
                    "StreetCred": -60,
                    "Fejm": 70,
                    "Hype": 80,
                    "Odklejka": 40,
                    "Wena": -40
                }
            },
            {
                "text": "Odrzuć ofertę i nagraj utwor krytykujący patologiczne zjawiska w sieci.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 50,
                    "Fejm": -10,
                    "Hype": -10,
                    "Odklejka": -20,
                    "Wena": 30
                }
            }
        ]
    },
    {
        "id": 33,
        "era": 4,
        "title": "Dedykowany zestaw w sieci fast food",
        "desc": "Sieć restauracji proponuje sygnowanie zestawu obiadowego twoim nazwiskiem.",
        "options": [
            {
                "text": "Zgodzić się i wystąpić w krzykliwej reklamie telewizyjnej.",
                "effects": {
                    "Kasa": 2000000,
                    "StreetCred": -70,
                    "Fejm": 80,
                    "Hype": 70,
                    "Odklejka": 20,
                    "Wena": -30
                }
            },
            {
                "text": "Wypuść własną linię ekologicznych napojów bezynowych.",
                "effects": {
                    "Kasa": 50000,
                    "StreetCred": 10,
                    "Fejm": 10,
                    "Hype": -10,
                    "Odklejka": 10,
                    "Wena": 5
                }
            }
        ]
    },
    {
        "id": 34,
        "era": 4,
        "title": "Zapowiedź startu w wyborach prezydenckich",
        "desc": "Promując projekt konceptualny, ogłaszasz chęć ubiegania się o najwyższy urząd w państwie za kilkanaście lat.",
        "options": [
            {
                "text": "Brnij w narrację polityczną, twórz postulaty w piosenkach i zorganizuj konwencję.",
                "effects": {
                    "Kasa": -50000,
                    "StreetCred": -20,
                    "Fejm": 60,
                    "Hype": 65,
                    "Odklejka": 45,
                    "Wena": 20
                }
            },
            {
                "text": "Oświadcz po tygodniu, że wydarzenie było jedynie eksperymentem społecznym.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": -10,
                    "Fejm": 20,
                    "Hype": -20,
                    "Odklejka": -10,
                    "Wena": -10
                }
            }
        ]
    },
    {
        "id": 35,
        "era": 4,
        "title": "Układ taneczny pod algorytmy TikToka",
        "desc": "Wytwórnia twierdzi, że bez wiralowego tańca utwór nie ma szans na playlistach streamingowych.",
        "options": [
            {
                "text": "Zagraj prosty układ taneczny w krótkim wideo i udostępnij go w sieci.",
                "effects": {
                    "Kasa": 100000,
                    "StreetCred": -50,
                    "Fejm": 50,
                    "Hype": 60,
                    "Odklejka": 15,
                    "Wena": -20
                }
            },
            {
                "text": "Nagraj teledysk, w którym demonstracyjnie niszczysz smartfony.",
                "effects": {
                    "Kasa": 5000,
                    "StreetCred": 35,
                    "Fejm": 10,
                    "Hype": 20,
                    "Odklejka": 10,
                    "Wena": 15
                }
            }
        ]
    },
    {
        "id": 36,
        "era": 4,
        "title": "Oskarżenie o kradzież slangu i unikalnej odmiany słów",
        "desc": "Podziemny twórca zarzuca ci zapożyczenie jego autorskiej konstrukcji językowej.",
        "options": [
            {
                "text": "Odpowiedz, że język należy do wszystkich i zignoruj zarzuty.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": -15,
                    "Fejm": 10,
                    "Hype": 15,
                    "Odklejka": 20,
                    "Wena": 10
                }
            },
            {
                "text": "Zaproś artystę do wspólnego nagrania, dając mu przestrzeń na płycie.",
                "effects": {
                    "Kasa": -10000,
                    "StreetCred": 25,
                    "Fejm": 15,
                    "Hype": 20,
                    "Odklejka": 0,
                    "Wena": 15
                }
            }
        ]
    },
    {
        "id": 37,
        "era": 4,
        "title": "Zakup kosztownej biżuterii na kredyt",
        "desc": "Luksusowy jubiler oferuje ci masywny łańcuch z diamentami na dogodne raty.",
        "options": [
            {
                "text": "Weź biżuterię w dół, prezentuj ją w teledyskach i opowiadaj o bogactwie.",
                "effects": {
                    "Kasa": -300000,
                    "StreetCred": -10,
                    "Fejm": 40,
                    "Hype": 35,
                    "Odklejka": 30,
                    "Wena": -10
                }
            },
            {
                "text": "Kup imitację z taniego metalu i udawaj, że jest oryginalna.",
                "effects": {
                    "Kasa": -500,
                    "StreetCred": -40,
                    "Fejm": 20,
                    "Hype": 15,
                    "Odklejka": 25,
                    "Wena": 0
                }
            }
        ]
    },
    {
        "id": 38,
        "era": 4,
        "title": "Tworzenie płyty z użyciem Sztucznej Inteligencji",
        "desc": "Inżynierowie oprogramowania oferują wygenerowanie całego albumu z twoim sklonowanym głosem.",
        "options": [
            {
                "text": "Wygeneruj cały materiał w kilkanaście minut i wydaj go bez informowania słuchaczy.",
                "effects": {
                    "Kasa": 200000,
                    "StreetCred": -80,
                    "Fejm": 30,
                    "Hype": 40,
                    "Odklejka": 35,
                    "Wena": -100
                }
            },
            {
                "text": "Wykorzystaj sztuczną inteligencję wyłącznie do wygenerowania nietypowych efektów tła.",
                "effects": {
                    "Kasa": 20000,
                    "StreetCred": 10,
                    "Fejm": 15,
                    "Hype": 25,
                    "Odklejka": 10,
                    "Wena": 20
                }
            }
        ]
    },
    {
        "id": 39,
        "era": 4,
        "title": "Wywiad u kontrowersyjnego dziennikarza internetowego",
        "desc": "Prowadzący popularny talk-show zadaje trudne pytania o kontrowersje z twojej przeszłości.",
        "options": [
            {
                "text": "Przyznaj się do błędu na żywo, wyraź skruchę i ogłoś przerwę od muzyki.",
                "effects": {
                    "Kasa": 50000,
                    "StreetCred": -30,
                    "Fejm": 60,
                    "Hype": 50,
                    "Odklejka": 20,
                    "Wena": -10
                }
            },
            {
                "text": "Zignoruj pytania, wstań z kanapy i opuść studio w trakcie nagrania.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 40,
                    "Fejm": 40,
                    "Hype": 60,
                    "Odklejka": 30,
                    "Wena": 10
                }
            }
        ]
    },
    {
        "id": 40,
        "era": 4,
        "title": "Niespodziewane skasowanie profilu społecznościowego",
        "desc": "Twój główny kanał komunikacji z fanami zostaje nagle usunięty lub zawieszony.",
        "options": [
            {
                "text": "Ogłoś, że to zaplanowany zabieg artystyczny zwiastujący najważniejszy projekt życia.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": 20,
                    "Fejm": -10,
                    "Hype": 45,
                    "Odklejka": 20,
                    "Wena": 30
                }
            },
            {
                "text": "Załóż nowe konto z dopiskiem \"Oficjalny\" i proś fanów o udostępnianie.",
                "effects": {
                    "Kasa": 0,
                    "StreetCred": -30,
                    "Fejm": -20,
                    "Hype": -25,
                    "Odklejka": 10,
                    "Wena": -10
                }
            }
        ]
    }
];