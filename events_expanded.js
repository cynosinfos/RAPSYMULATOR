// Ten plik zawiera 50 nowych, szczegółowych eventów z historii polskiego rapu
const expandedEvents = [
    {
        "id": 801,
        "era": 1,
        "minTier": 2,
        "title": "Afera w wannie",
        "desc": "Wyciekły do sieci zdjęcia Ciebie w wannie u znanej trans dilerki. Internet płonie, fani żądają wyjaśnień.",
        "options": [
            {
                "text": "Tłumaczysz się problemami i idziesz na odwyk (mija rok)",
                "action": "REHAB_TUB",
                "effects": {
                    "Fejm": -20,
                    "Kasa": -1000,
                    "Respekt": -30
                }
            },
            {
                "text": "Robisz wielką awanturę w sieci i oskarżasz konkurencję o fotomontaż",
                "effects": {
                    "Fejm": 15,
                    "Respekt": -20,
                    "Hype": 30,
                    "Odklejka": 25
                }
            }
        ]
    },
    {
        "id": 802,
        "era": 1,
        "title": "Kontrola drogowa po imprezie",
        "desc": "Jechałeś totalnie zrobiony autem z klubu. Złapała cię drogówka na wyrywkowej kontroli.",
        "options": [
            {
                "text": "Próbujesz ich przekupić gotówką pod stołem",
                "effects": {
                    "Kasa": -20000,
                    "Respekt": 10,
                    "Odklejka": 5
                }
            },
            {
                "text": "Przyznajesz się do winy. (Tracisz prawo jazdy i auto zostaje zarekwirowane)",
                "action": "LOSE_CAR",
                "effects": {
                    "Fejm": -5,
                    "Respekt": 5
                }
            }
        ]
    },
    {
        "id": 803,
        "era": 1,
        "title": "Live na Instagramie",
        "desc": "Nagrałeś najebany live stream z ekipą. Próbowałeś freestyle'ować, ale po minucie zrzygałeś się na kanapę przed tysiącami widzów.",
        "options": [
            {
                "text": "Udajesz, że to był 'artystyczny performance' buntowniczy",
                "effects": {
                    "Fejm": 10,
                    "Hype": 20,
                    "Respekt": -15,
                    "Odklejka": 30
                }
            },
            {
                "text": "Rano kasujesz VOD i wrzucasz czarną planszę z przeprosinami",
                "effects": {
                    "Fejm": -10,
                    "Hype": -10,
                    "Odklejka": -10
                }
            }
        ]
    },
    {
        "id": 300,
        "era": 1,
        "title": "Scyzoryk w plecach (1995)",
        "desc": "Znany skład z Wielkopolski publikuje bardzo agresywny utwór atakujący twórcę ze Świętokrzyskiego, wytykając mu komercję. Co o tym sądzisz?",
        "options": [
            {
                "text": "Odeprzyj atak mocnym dissem z dedykacją",
                "effects": {
                    "Respekt": 20,
                    "Wena": -10
                }
            },
            {
                "text": "Zignoruj sprawę i ciesz się statusem milionera kasetowego",
                "effects": {
                    "Kasa": 5000,
                    "Respekt": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 301,
        "era": 1,
        "title": "Księga Tajemnicza (1996)",
        "desc": "Na scenie pojawia się nurt psychorapu, a stacje telewizyjne są zszokowane mrocznym klimatem i krzyczanymi wokalami.",
        "options": [
            {
                "text": "Dołącz do tego awangardowego stylu ryzykując niezrozumienie",
                "effects": {
                    "Odklejka": 25,
                    "Hype": 15
                }
            },
            {
                "text": "Trzymaj się klasycznego, nowojorskiego brzmienia",
                "effects": {
                    "Respekt": 15,
                    "Fejm": -5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 302,
        "era": 1,
        "minTier": 3,
        "title": "Pęknięta taśma w deku (1998)",
        "desc": "Podczas koncertu w legendarnym Spodku zacina się jedyny magnetofon z twoim podkładem.",
        "options": [
            {
                "text": "Zakończ utwór a cappella udowadniając swój talent",
                "effects": {
                    "Fejm": 20,
                    "Respekt": 25,
                    "Wena": 10
                }
            },
            {
                "text": "Rzuć złością mikrofonem i zejdź ze sceny",
                "effects": {
                    "Odklejka": 15,
                    "Hype": 10,
                    "Respekt": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 303,
        "era": 1,
        "title": "Występ na żywo w śniadaniówce (1998)",
        "desc": "Masz szansę zaprezentować się w porannej telewizji, ale reżyser wymaga ugrzecznionego wizerunku.",
        "options": [
            {
                "text": "Wystąp w kominiarce ignorując zasady",
                "effects": {
                    "Odklejka": 10,
                    "StreetCred": 15,
                    "Fejm": -10
                }
            },
            {
                "text": "Ubierz się elegancko i bądź pokorny",
                "effects": {
                    "Fejm": 20,
                    "Kasa": 2000,
                    "StreetCred": -15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 304,
        "era": 1,
        "title": "Graffiti na wagonach SKM (1999)",
        "desc": "Zaproszono cię na nocną akcję malowania pociągów z jednymi z pierwszych ekip b-boyów w kraju.",
        "options": [
            {
                "text": "Maluj z nimi ryzykując mandat i areszt",
                "effects": {
                    "Respekt": 25,
                    "StreetCred": 20,
                    "Kasa": -500
                }
            },
            {
                "text": "Tylko obserwuj proces z boku",
                "effects": {
                    "Wena": 15,
                    "StreetCred": -5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 305,
        "era": 1,
        "title": "Kradzież sampla z jazzu (1996)",
        "desc": "Znalazłeś niesamowitą pętlę na polskiej płycie jazzowej z lat 70., ale nie masz zgody autora i wytwórni.",
        "options": [
            {
                "text": "Użyj jej na nielegalu dla wybitnego brzmienia",
                "effects": {
                    "Wena": 30,
                    "Hype": 15,
                    "Kasa": -2000
                }
            },
            {
                "text": "Spróbuj odtworzyć to samemu (koszty muzyków)",
                "effects": {
                    "Kasa": -5000,
                    "Respekt": 10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 306,
        "era": 1,
        "title": "Konfrontacja pod MDK (1997)",
        "desc": "Po lokalnym koncercie miejscy chuligani z innej subkultury blokują ci wyjście z klubu.",
        "options": [
            {
                "text": "Użyj siły i charyzmy, by wyjść z twarzą",
                "effects": {
                    "Respekt": 20,
                    "StreetCred": 30,
                    "Wena": -10
                }
            },
            {
                "text": "Rozdaj im swoje kasety na zgodę",
                "effects": {
                    "Kasa": -1000,
                    "Fejm": 5,
                    "StreetCred": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 307,
        "era": 1,
        "title": "Wywiad w fanzinie (1998)",
        "desc": "Lokalny pasjonat chce umieścić z tobą wywiad w odbijanej na ksero gazetce osiedlowej.",
        "options": [
            {
                "text": "Udziel bardzo długiego i szczerego wywiadu",
                "effects": {
                    "Respekt": 25,
                    "Wena": 10
                }
            },
            {
                "text": "Wyśmiej ten format żądając gazety w kolorze",
                "effects": {
                    "Fejm": -10,
                    "Odklejka": 5,
                    "Respekt": -15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 308,
        "era": 1,
        "title": "Nagranie w domowej łazience (1999)",
        "desc": "Brak budżetu na profesjonalne studio zmusza cię do nagrywania w kafelkowej łazience u kolegi z powodu rzekomo 'świetnego pogłosu'.",
        "options": [
            {
                "text": "Nagraj tam całą płytę i nazwij to 'brzmieniem ulicy'",
                "effects": {
                    "StreetCred": 25,
                    "Wena": 20
                }
            },
            {
                "text": "Weź lichwiarską pożyczkę na prawdziwe studio",
                "effects": {
                    "Kasa": -8000,
                    "Fejm": 15,
                    "Hype": 5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 309,
        "era": 1,
        "title": "Afera 'Pocałuj mnie w d...' (2001)",
        "desc": "Masz dość powtarzalnych pytań od muzycznych dziennikarzy podczas konferencji o upadku obyczajów.",
        "options": [
            {
                "text": "Wykrzycz im prosto w twarz słynne wulgarne hasło",
                "effects": {
                    "Odklejka": 20,
                    "Respekt": 30,
                    "Hype": 25
                }
            },
            {
                "text": "Grzecznie odpowiedz na pytania uśmiechając się",
                "effects": {
                    "Fejm": 15,
                    "Respekt": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 310,
        "era": 2,
        "title": "Wymóg garnituru na Gali (2002)",
        "desc": "Dostajesz prestiżową nominację do muzycznych nagród VIVA Comet, ale organizator wymaga stroju wieczorowego.",
        "options": [
            {
                "text": "Przyjdź w dresie XXL i zbojkotuj statuetkę na scenie",
                "effects": {
                    "Respekt": 30,
                    "Odklejka": 10,
                    "Hype": 15
                }
            },
            {
                "text": "Zachowaj się jak gwiazda, załóż garnitur i odbierz nagrodę",
                "effects": {
                    "Fejm": 35,
                    "StreetCred": -20,
                    "Kasa": 5000
                }
            }
        ],
        "minTier": 2
    },
    {
        "id": 311,
        "era": 2,
        "title": "Afera aresztowania (2002)",
        "desc": "Tuż przed premierą płyty, twój bliski ziomek trafia do aresztu z powodów prawnych.",
        "options": [
            {
                "text": "Nawijaj o tym w tekstach robiąc gigantyczną akcję wsparcia (PDW)",
                "effects": {
                    "Hype": 35,
                    "StreetCred": 25,
                    "Fejm": 10
                }
            },
            {
                "text": "Wycisz sprawę z godnością i pomóż mu po cichu",
                "effects": {
                    "Respekt": 20,
                    "Hype": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 312,
        "era": 2,
        "title": "Nagła Śmierć Mezostylu (2003)",
        "desc": "Skomercjalizowany raper wypowiada się o tobie lekceważąco, nazywając twoje teksty zbyt trudnymi dla mas.",
        "options": [
            {
                "text": "Nagraj legendarny, morderczy diss punktujący jego dykcję",
                "effects": {
                    "Wena": 25,
                    "Hype": 30,
                    "Respekt": 20
                }
            },
            {
                "text": "Nagraj z nim ironiczny, popowy utwór dla zasięgów",
                "effects": {
                    "Hype": 20,
                    "Fejm": 30,
                    "Respekt": -30,
                    "Kasa": 15000
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 313,
        "era": 2,
        "title": "Rozbicie szklanki na Ślizgu (2004)",
        "desc": "Opiniotwórcze forum internetowe 'Ślizg.eu' założyło wielostronicowy wątek naśmiewający się z twoich nowych teledysków.",
        "options": [
            {
                "text": "Załóż fałszywe konto i kłóć się z nimi incognito nocami",
                "effects": {
                    "Odklejka": 30,
                    "Wena": -15,
                    "Hype": 10
                }
            },
            {
                "text": "Nagraj chłodną ripostę na nowej płycie",
                "effects": {
                    "Respekt": 20,
                    "Fejm": 10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 314,
        "era": 2,
        "title": "Starcie na WBW (2005)",
        "desc": "Docierasz do wielkiego finału mistrzostw we freestyle'u (WBW). Twój rywal rzuca absurdalnymi atakami.",
        "options": [
            {
                "text": "Rozłóż go chłodną i powolną ironią (Pancze)",
                "effects": {
                    "Wena": 20,
                    "Respekt": 25,
                    "Hype": 15
                }
            },
            {
                "text": "Rzuć się na niego z krzykiem i mikrofonem",
                "effects": {
                    "Odklejka": 25,
                    "StreetCred": 10,
                    "Respekt": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 315,
        "era": 2,
        "title": "True Man Show (2007)",
        "desc": "W podziemiu rodzi się genialny beef – twój rywal wydaje na ciebie perfekcyjnie dopracowany, dziesięciominutowy diss.",
        "options": [
            {
                "text": "Odpisz z chirurgiczną precyzją, odbijając każdy z jego argumentów",
                "effects": {
                    "Wena": 30,
                    "Respekt": 35,
                    "Hype": 25
                }
            },
            {
                "text": "Zbagatelizuj go, mówiąc że nie gadasz z podziemiem",
                "effects": {
                    "Fejm": -15,
                    "Respekt": -20,
                    "Hype": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 316,
        "era": 2,
        "title": "Śliski Parkiet z kolegą (2007)",
        "desc": "Były kompan z twojego kultowego, stołecznego składu rzuca w ciebie podchwytliwymi linijkami na nowej płycie.",
        "options": [
            {
                "text": "Odpowiedz natychmiast mocnym, podziemnym numerem",
                "effects": {
                    "Respekt": 25,
                    "Hype": 20,
                    "Wena": 15
                }
            },
            {
                "text": "Zrób sobie dłuższą przerwę od muzyki (milczenie)",
                "effects": {
                    "Wena": -20,
                    "Hype": -15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 317,
        "era": 2,
        "title": "Szerokie Spodnie (2006)",
        "desc": "Dostajesz szansę rozkręcenia własnej marki odzieżowej. Wymogiem dystrybutora są ekstremalnie luźne fasony skate.",
        "options": [
            {
                "text": "Sprzedawaj masowo spodnie spadochronowe dla fanów",
                "effects": {
                    "Kasa": 25000,
                    "Fejm": 10,
                    "Respekt": -5
                }
            },
            {
                "text": "Postaw na elitarne, drogie i normalniejsze ubrania",
                "effects": {
                    "Respekt": 15,
                    "Kasa": 5000,
                    "Hype": -5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 318,
        "era": 2,
        "title": "Fenomen Naszej Klasy (2006)",
        "desc": "Setki użytkowników wrzucają twoje zdjęcia do profili szkolnych klas, a twoje cytaty krążą w opisach na Gadu-Gadu.",
        "options": [
            {
                "text": "Traktuj to jako świetną darmową reklamę",
                "effects": {
                    "Fejm": 30,
                    "Hype": 25
                }
            },
            {
                "text": "Zażądaj od portalu kasowania materiałów ('to nie hip-hop')",
                "effects": {
                    "Odklejka": 15,
                    "Fejm": -20,
                    "Respekt": 10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 319,
        "era": 2,
        "title": "Wyjazd na Hip-Hop Kemp (2007)",
        "desc": "Jedziesz z całą ekipą pociągiem specjalnym do Czech na gigantyczny, międzynarodowy festiwal rapowy pod namiotami.",
        "options": [
            {
                "text": "Melanżuj bez końca w pociągu, tracąc głos przed wejściem na scenę",
                "effects": {
                    "Odklejka": 25,
                    "StreetCred": 20,
                    "Wena": -25
                }
            },
            {
                "text": "Przygotuj się wokalnie odrzucając używki i zagraj koncert życia",
                "effects": {
                    "Wena": 30,
                    "Fejm": 20,
                    "Respekt": 15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 320,
        "era": 3,
        "title": "Wiecie, co z nim zrobić! (2009)",
        "desc": "Podczas koncertu klubowego w Zielonej Górze prowokator z tłumu nieustannie pokazuje ci środkowy palec. Atmosfera wrze.",
        "options": [
            {
                "text": "Nakłoń tłum do wymierzenia mu sprawiedliwości wywołując skandal",
                "effects": {
                    "Hype": 45,
                    "Respekt": -25,
                    "Odklejka": 30,
                    "StreetCred": 15
                }
            },
            {
                "text": "Poproś grzecznie ochronę o wyprowadzenie gościa z klubu",
                "effects": {
                    "Wena": 10,
                    "Fejm": 10,
                    "StreetCred": -15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 321,
        "era": 3,
        "title": "Beef o Zieloną Górę (2009)",
        "desc": "Znany warszawski raper oficjalnie potępia twoje skandaliczne zachowanie względem widza, rozpoczynając gigantyczną batalię.",
        "options": [
            {
                "text": "Wydaj brutalny wideo-diss trwający kilkanaście minut",
                "effects": {
                    "Hype": 50,
                    "Wena": -15,
                    "Respekt": 20
                }
            },
            {
                "text": "Zignoruj jego ataki i nie odpowiadaj",
                "effects": {
                    "Fejm": -15,
                    "Respekt": -20,
                    "Hype": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 322,
        "era": 3,
        "title": "Odwołane Koncerty w Poznaniu (2010)",
        "desc": "Jako efekt uboczny konfliktów, bojówki blokują możliwość organizowania twoich koncertów w Wielkopolsce.",
        "options": [
            {
                "text": "Zaakceptuj to z honorem i graj dla prawdziwych fanów w innych miastach",
                "effects": {
                    "Respekt": 25,
                    "Kasa": -15000,
                    "StreetCred": 15
                }
            },
            {
                "text": "Żal się głośno w telewizji śniadaniowej na brak bezpieczeństwa",
                "effects": {
                    "Odklejka": 30,
                    "StreetCred": -40,
                    "Fejm": 15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 323,
        "era": 3,
        "title": "Reklama wędlin (2011)",
        "desc": "Producent znanego gatunku parówek kładzie na stół abstrakcyjne pieniądze za użyczenie twojej twarzy na billboardach.",
        "options": [
            {
                "text": "Zostań 'parówkowym królem' zgarniając czek",
                "effects": {
                    "Kasa": 80000,
                    "Respekt": -40,
                    "Odklejka": 20,
                    "Fejm": 25
                }
            },
            {
                "text": "Bezlitośnie go wyśmiej i odrzuć komercję",
                "effects": {
                    "Respekt": 25,
                    "Wena": 15,
                    "Hype": 5
                }
            }
        ],
        "minTier": 3
    },
    {
        "id": 324,
        "era": 3,
        "title": "Beef: Tylko Parias (2011)",
        "desc": "Twój lekceważący komentarz uderza rykoszetem w warszawską starą gwardię, która tworzy specjalną grupę by nagrać na ciebie diss.",
        "options": [
            {
                "text": "Podejmij bezkompromisową walkę z całym składem weteranów",
                "effects": {
                    "Wena": 30,
                    "Hype": 40,
                    "StreetCred": 20
                }
            },
            {
                "text": "Przeproś za rykoszet i wycofaj się z beefu",
                "effects": {
                    "Respekt": -20,
                    "Hype": -15,
                    "Odklejka": 5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 325,
        "era": 3,
        "title": "Kupiona Zwrotka z USA (2012)",
        "desc": "Agencja z Nowego Jorku oferuje dogranie się amerykańskiej legendy rapu do twojego utworu.",
        "options": [
            {
                "text": "Zapłać krocie i otrzymaj nagranie w jakości dyktafonu przysłane mailem",
                "effects": {
                    "Kasa": -30000,
                    "Odklejka": 15,
                    "Fejm": 10
                }
            },
            {
                "text": "Odrzuć tę żałosną współpracę i zrób świetny teledysk solo za te pieniądze",
                "effects": {
                    "Hype": 25,
                    "Wena": 20,
                    "Respekt": 15
                }
            }
        ],
        "minTier": 3
    },
    {
        "id": 326,
        "era": 3,
        "title": "Akcja Młode Wilki (2012)",
        "desc": "Prestiżowy portal branżowy Popkiller powołuje cię do wspólnego hymnu wschodzących gwiazd rapu.",
        "options": [
            {
                "text": "Połóż epicką zwrotkę miażdżąc resztę 'wilków'",
                "effects": {
                    "Wena": 25,
                    "Fejm": 30,
                    "Hype": 20
                }
            },
            {
                "text": "Wszcznij awanturę na planie teledysku o to, kto nawija pierwszy",
                "effects": {
                    "Odklejka": 20,
                    "Respekt": -10,
                    "Hype": 15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 327,
        "era": 3,
        "title": "Płocka Plaża nad Wisłą (2013)",
        "desc": "Otrzymujesz pierwszą poważną ofertę zagrania na najszybciej rosnącym festiwalu Polish Hip-Hop Festival w Płocku.",
        "options": [
            {
                "text": "Wyjdź na scenę w pełnym słońcu i porwij gigantyczny tłum",
                "effects": {
                    "Fejm": 35,
                    "Hype": 20,
                    "Kasa": 15000
                }
            },
            {
                "text": "Zasnąć z przepicia w strefie VIP i spóźnić się na koncert",
                "effects": {
                    "Odklejka": 30,
                    "Respekt": -25,
                    "Wena": -20
                }
            }
        ],
        "minTier": 2
    },
    {
        "id": 328,
        "era": 3,
        "title": "Nie nagram dla ciebie featu (2013)",
        "desc": "Mniej znany raper (Tomb) publicznie wypytuje cię o wspólną zwrotkę, naciskając zbyt mocno w internecie.",
        "options": [
            {
                "text": "Zniszcz go bezlitosnym utworem przypominającym muzyczny list odmowny",
                "effects": {
                    "Wena": 25,
                    "Hype": 30,
                    "Respekt": 15
                }
            },
            {
                "text": "Całkowicie zablokuj go w sieci bez słowa wyjaśnienia",
                "effects": {
                    "Fejm": -5,
                    "Respekt": -5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 329,
        "era": 3,
        "title": "Absurdalne Gadżety Boxowe (2014)",
        "desc": "Rozpoczyna się szał na limitowane Pre-Ordery. Wytwórnia namawia cię na dodanie innowacyjnego gadżetu do kartonowego pudełka z płytą.",
        "options": [
            {
                "text": "Dodaj paczkę nasion rzeżuchy, skrawek własnej koszuli i zapałki",
                "effects": {
                    "Hype": 35,
                    "Odklejka": 15,
                    "Kasa": 25000
                }
            },
            {
                "text": "Wydaj tylko minimalistyczny, audiofilski czarny kartonik",
                "effects": {
                    "Respekt": 20,
                    "Kasa": 10000,
                    "Hype": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 330,
        "era": 3,
        "title": "Demolka w Hotelu (2013)",
        "desc": "Podczas trasy koncertowej znajomy z ekipy zrzuca telewizor przez okno hotelu, a filmik ląduje na raczkującym YouTube.",
        "options": [
            {
                "text": "Zmień tytuł wideo na klikalny i zbieraj setki tysięcy monet z reklam",
                "effects": {
                    "Kasa": 20000,
                    "Hype": 25,
                    "Odklejka": 10,
                    "Respekt": -10
                }
            },
            {
                "text": "Usuń wideo z zażenowaniem pokrywając po cichu szkody z własnej kieszeni",
                "effects": {
                    "Respekt": 15,
                    "Kasa": -15000,
                    "StreetCred": 10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 331,
        "era": 3,
        "title": "Zmiana na Autotune (2014)",
        "desc": "Klasyczny rap przestaje się klikać. W klubach króluje amerykański trap oparty na ciężkich basach i ekstremalnej korekcji wokalu (AutoTune).",
        "options": [
            {
                "text": "Przebranżów się, kup jaskrawe ciuchy i zalej wokal wtyczkami",
                "effects": {
                    "Fejm": 40,
                    "Hype": 35,
                    "Respekt": -30,
                    "Kasa": 30000
                }
            },
            {
                "text": "Trzymaj się ortodoksyjnych zasad lat 90. plując na efekty komputerowe",
                "effects": {
                    "Respekt": 30,
                    "Fejm": -15,
                    "Kasa": -10000
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 332,
        "era": 3,
        "title": "Problem z próbką (2014)",
        "desc": "YouTube automatycznie blokuje monetyzację z twojego największego hitu przez naruszenie praw autorskich do starego sampla.",
        "options": [
            {
                "text": "Wejdź na długą i kosztowną drogę sądową z amerykańskim gigantem",
                "effects": {
                    "Respekt": 20,
                    "Kasa": -25000,
                    "Hype": 10
                }
            },
            {
                "text": "Zastąp bit legalnym 'podobnym' odpowiednikiem, całkowicie niszcząc klimat",
                "effects": {
                    "Hype": -20,
                    "Wena": -15,
                    "Fejm": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 333,
        "era": 4,
        "title": "Gustaw i Awangarda (2015)",
        "desc": "Prezentujesz całkowicie nowe, ekscentryczne podejście do klipów, w których dominują trudne emocje i młodzieżowy, depresyjny bunt.",
        "options": [
            {
                "text": "Kontynuuj budowę nowej subkultury smutnych nastolatków",
                "effects": {
                    "Hype": 45,
                    "Fejm": 30,
                    "Odklejka": 20
                }
            },
            {
                "text": "Powróć do ulicznych standardów w obawie przed krytyką weteranów",
                "effects": {
                    "Respekt": 20,
                    "Hype": -20,
                    "Kasa": -10000
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 334,
        "era": 4,
        "title": "Projekt Art Brut (2016)",
        "desc": "Stworzyłeś genialny muzycznie mixtape bazujący w całości na nieczyszczonych prawach z hitów polskiego popu z lat 80.",
        "options": [
            {
                "text": "Wydaj to pół-legalnie tylko w ograniczonym nakładzie fizycznym",
                "effects": {
                    "Wena": 40,
                    "Hype": 35,
                    "Respekt": 25,
                    "Kasa": 15000
                }
            },
            {
                "text": "Zrezygnuj w strachu przed sądem i prawnikami Maryli Rodowicz",
                "effects": {
                    "Wena": -30,
                    "Hype": -15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 335,
        "era": 4,
        "title": "Lawina w SB Maffija (2017)",
        "desc": "Rzucasz rykoszetem jedną linijkę, a następnego dnia dosłownie pół środowiska rapowego nagrywa z tego tytułu dissy na siebie nawzajem.",
        "options": [
            {
                "text": "Odpowiadaj w czasie rzeczywistym generując gigantyczne zasięgi z afery",
                "effects": {
                    "Hype": 50,
                    "Kasa": 25000,
                    "Wena": 15,
                    "Odklejka": 10
                }
            },
            {
                "text": "Wycofaj się z zamieszania uznając to za medialną dziecinadę",
                "effects": {
                    "Fejm": -15,
                    "Respekt": 15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 336,
        "era": 4,
        "title": "'Spotka mnie...' (2017)",
        "desc": "Nagrywasz genialny technicznie, ale mocno kontrowersyjny wers, w którym pada ksywa znanej popowej wokalistki, co wywołuje skandal obyczajowy.",
        "options": [
            {
                "text": "Przeproś publicznie pod presją telewizji i usuń ten wers",
                "effects": {
                    "Respekt": -25,
                    "Hype": -10,
                    "Fejm": -5
                }
            },
            {
                "text": "Zacznij sprzedawać limitowane koszulki z tym właśnie wersem",
                "effects": {
                    "Kasa": 40000,
                    "Odklejka": 15,
                    "Hype": 30,
                    "Respekt": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 337,
        "era": 4,
        "title": "Narodziny oktagonu (2018)",
        "desc": "Całkowicie nowa w Polsce organizacja sportów walki (FAME) na zasadach parateatralnych proponuje ci pojedynek z internetowym celebrytą.",
        "options": [
            {
                "text": "Podpisz kontrakt na ogromną sumę i zniszcz swój dawny uliczny wizerunek",
                "effects": {
                    "Kasa": 150000,
                    "Respekt": -40,
                    "Odklejka": 25,
                    "Hype": 45
                }
            },
            {
                "text": "Publicznie potęp to 'patologiczne zjawisko' na Instagramie",
                "effects": {
                    "Respekt": 25,
                    "Fejm": -10,
                    "Hype": -5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 338,
        "era": 4,
        "title": "Gwiazda rapu kontra Kulturysta (2018)",
        "desc": "Prestiżowa sportowa federacja KSW chce zestawić twój awangardowy rapowy wizerunek z profesjonalnie zbudowanym Litwinem.",
        "options": [
            {
                "text": "Zaryzykuj błyskawiczny nokaut dla gigantycznej telewizyjnej sławy",
                "effects": {
                    "Fejm": 40,
                    "Kasa": 100000,
                    "Odklejka": 15,
                    "Respekt": 10
                }
            },
            {
                "text": "Zrezygnuj - zostań przy mikrofonie, tam jesteś najsilniejszy",
                "effects": {
                    "Odklejka": -10,
                    "Wena": 15,
                    "Kasa": -10000
                }
            }
        ],
        "minTier": 3
    },
    {
        "id": 339,
        "era": 4,
        "title": "Pudrowanie Nosa (2019)",
        "desc": "Podczas wywiadu na wielkim kanale YouTube za bardzo otwierasz się na temat twardych używek i zakulisowego życia w środowisku.",
        "options": [
            {
                "text": "Uznaj to za błąd, odwołaj trasę i zawieś karierę na rok",
                "effects": {
                    "Respekt": 20,
                    "Kasa": -30000,
                    "Hype": -25
                }
            },
            {
                "text": "Brnij w temat, bezlitośnie obnażając hipokryzję współczesnego show-biznesu",
                "effects": {
                    "Odklejka": 35,
                    "Fejm": 20,
                    "Hype": 30
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 340,
        "era": 4,
        "title": "Transmisja Live z Hotelu (2019)",
        "desc": "Jesteś sam w hotelu za granicą. O 4:00 nad ranem odpalasz w telefonie relację na żywo rzucając absurdalne oskarżenia w stronę prezydenta i branży.",
        "options": [
            {
                "text": "Ujawniaj kolejne 'wyimaginowane spiski' krzycząc do tysięcy widzów",
                "effects": {
                    "Odklejka": 45,
                    "Hype": 50,
                    "Respekt": -30,
                    "Wena": -20
                }
            },
            {
                "text": "W ostatniej chwili zamknij aplikację, wypij wodę i idź spać",
                "effects": {
                    "Wena": 20,
                    "Odklejka": -15,
                    "Hype": -5
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 341,
        "era": 4,
        "title": "Hot16Challenge 2 (2020)",
        "desc": "Podczas pandemii rusza ogólnopolska nominowana zbiórka charytatywna. Wszyscy raperzy nagrywają krótkie zwrotki na YouTube.",
        "options": [
            {
                "text": "Nagraj potężne, polityczne 16 wersów i zbesztaj rządzących",
                "effects": {
                    "Fejm": 35,
                    "Respekt": 20,
                    "Hype": 30
                }
            },
            {
                "text": "Zarapuj średnią zwrotkę, promując przy okazji swój nowy model butów",
                "effects": {
                    "Kasa": 30000,
                    "Respekt": -15,
                    "Hype": 15
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 342,
        "era": 4,
        "title": "Afera o gdyński slang (2020)",
        "desc": "Bardzo prawilny reprezentant podziemia oskarża cię, że na swoim ultra-komercyjnym albumie bezczelnie kradniesz jego autorskie hasła.",
        "options": [
            {
                "text": "Zignoruj go, publikując TikToka, na którym tańczysz",
                "effects": {
                    "Hype": -10,
                    "Odklejka": 15,
                    "Respekt": -20
                }
            },
            {
                "text": "Zaproś go na wspólną epkę oddając mu hołd i przestrzeń muzyczną",
                "effects": {
                    "Wena": 25,
                    "Respekt": 30,
                    "StreetCred": 20
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 343,
        "era": 4,
        "title": "Sygnowany Fast-Food (2021)",
        "desc": "Wielka, globalna sieć restauracji proponuje stworzenie zestawu obiadowego sygnowanego twoim nazwiskiem. Reklamy będą wszędzie.",
        "options": [
            {
                "text": "Zgarnij milionowy kontrakt uśmiechając się obok frytek na billboardach",
                "effects": {
                    "Kasa": 250000,
                    "Respekt": -35,
                    "Fejm": 40,
                    "StreetCred": -40
                }
            },
            {
                "text": "Odrzuć propozycję i załóż autorską, wegańską pizzerię w podziemiu",
                "effects": {
                    "Respekt": 25,
                    "Kasa": -20000,
                    "Wena": 15
                }
            }
        ],
        "minTier": 4
    },
    {
        "id": 344,
        "era": 4,
        "title": "Oskarżenie o powiązania (2022)",
        "desc": "Federacja freak fightowa z którą grubo współpracujesz (High League) z dnia na dzień upada z powodu politycznych powiązań kapitałowych właścicieli.",
        "options": [
            {
                "text": "Płynnie przejdź do konkurencyjnej organizacji za dużo mniejsze pieniądze",
                "effects": {
                    "Kasa": 50000,
                    "Respekt": -15,
                    "Odklejka": 10
                }
            },
            {
                "text": "Zorganizuj własną, niezależną galę PPV w wynajętej hali",
                "effects": {
                    "Odklejka": 25,
                    "Kasa": -100000,
                    "Hype": 40
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 345,
        "era": 4,
        "title": "Walka Szefów (2023)",
        "desc": "Będąc włodarzem freakowej federacji zorientowałeś się, że tylko twoja klatkowa walka z dawnym wspólnikiem może uratować słabą sprzedaż gal PPV.",
        "options": [
            {
                "text": "Zrób z tego cyrk, rzucając mikrofonami i szklankami na konferencjach",
                "effects": {
                    "Odklejka": 35,
                    "Hype": 45,
                    "Kasa": 80000,
                    "Respekt": -25
                }
            },
            {
                "text": "Odrzuć tę hipokryzję, sprzedaj udziały i wróć do muzyki",
                "effects": {
                    "Respekt": 30,
                    "Wena": 40,
                    "Kasa": 150000,
                    "Hype": -10
                }
            }
        ],
        "minTier": 3
    },
    {
        "id": 346,
        "era": 4,
        "title": "Wybory Prezydenckie (2023)",
        "desc": "Z braku pomysłów na singiel zaczynasz w sieci kreować absurdalną kampanię wyborczą na najwyższy urząd w państwie na rok 2040.",
        "options": [
            {
                "text": "Zorganizuj sztab, drukuj ulotki i drwij z systemu politycznego",
                "effects": {
                    "Odklejka": 40,
                    "Fejm": 35,
                    "Hype": 30
                }
            },
            {
                "text": "Ogłoś, że to był tylko kiepski eksperyment marketingowy pod nową EPkę",
                "effects": {
                    "Hype": -20,
                    "Odklejka": 10,
                    "Respekt": -15
                }
            }
        ],
        "minTier": 4
    },
    {
        "id": 347,
        "era": 4,
        "title": "Wiralowy Taniec na TikToku (2025)",
        "desc": "Algorytmy wymagają, aby każda piosenka miała krótki wiralowy układ. Menedżer nakazuje ci nagranie infantylnych wygibasów do kamery.",
        "options": [
            {
                "text": "Przełam obciach i zdominuj azjatycką platformę milionami wyświetleń",
                "effects": {
                    "Fejm": 50,
                    "Kasa": 40000,
                    "Respekt": -40,
                    "Hype": 35
                }
            },
            {
                "text": "Nagraj anty-tiktokowy manifest w starym, mrocznym stylu",
                "effects": {
                    "Wena": 30,
                    "Respekt": 25,
                    "Kasa": -5000,
                    "Fejm": -10
                }
            }
        ],
        "minTier": 1
    },
    {
        "id": 348,
        "era": 4,
        "title": "Produkcja przez AI (2026)",
        "desc": "Zbliża się deadline oddania wokali na najdroższą płytę, a ty leżysz pijany. Inżynier dźwięku oferuje dokończenie zwrotek przez klonującą sztuczną inteligencję.",
        "options": [
            {
                "text": "Zjaw się z płytą pełną fałszywych, wygenerowanych zwrotek AI",
                "effects": {
                    "Odklejka": 50,
                    "Respekt": -60,
                    "Kasa": 50000,
                    "Wena": -40
                }
            },
            {
                "text": "Zapłać kary umowne za opóźnienie i zaszyj się w studiu sam na miesiąc",
                "effects": {
                    "Wena": 50,
                    "Kasa": -40000,
                    "Respekt": 35
                }
            }
        ],
        "minTier": 1
    }
];

// Łączymy nowe eventy z główną pulą przed rozpoczęciem gry
if (typeof gameEvents !== 'undefined') {
    gameEvents.push(...expandedEvents);
}
