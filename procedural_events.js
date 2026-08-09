// Bazy zmiennych środowiskowych do generowania wydarzeń
const proceduralVars = {
    sprzet_e1: ["mikrofon dynamiczny", "kabel XLR", "kasetę matkę", "wzmacniacz Unitry", "odtwarzacz kasetowy", "słuchawki nauszne", "walkman", "zeszyt z rymami"],
    sprzet_e2: ["pecet do nagrywania", "interfejs audio", "płytę CD z bitami", "program do bitów", "mikrofon pojemnościowy", "sampler MPC", "głośniki monitory"],
    sprzet_e3: ["laptop", "kontroler MIDI", "pendrive z projektem", "kamerę cyfrową", "statyw", "karta pamięci z klipem"],
    sprzet_e4: ["telefon z TikTokiem", "konto na chmurze", "smartfona", "drona do klipu", "okulary VR", "tablet z autotune"],
    
    miejsca_e1: ["w lokalnym klubie", "w piwnicy blokowiska", "na zajezdni", "w domu kultury", "na ławce pod blokiem", "w skateparku", "w zasyfiałym przejściu podziemnym", "w studiu z dywanami na ścianach", "na boisku do kosza"],
    miejsca_e2: ["na forum Ślizg.eu", "na komunikatorze GG", "w małym klubie", "na portalu Nasza Klasa", "na zlocie grafficiarzy", "w klubie studenckim", "w kawiarence internetowej", "na giełdzie płytowej"],
    miejsca_e3: ["na Facebooku", "na wielkim festiwalu", "w drogim studiu", "na planie teledysku", "na YouTube", "w wynajętym aucie sportowym", "w VIP roomie modnego klubu", "na ściance sponsorskiej"],
    miejsca_e4: ["na Instagramie", "na TikToku", "na gali MMA", "na streamie IRL", "w podcaście", "w luksusowym apartamencie", "w jacuzzi z influencerkami", "w dubaju na jachcie", "w pato-strumieniu"],
    
    oponenci_e1: ["lokalny osiłek", "ochroniarz w klubie", "policjant na patrolu", "starszy muzyk z filharmonii", "dresiarz z osiedla obok", "zazdrosny rymokleta", "krytyk muzyczny"],
    oponenci_e2: ["anonimowy hejter z forum", "były przyjaciel", "nieuczciwy promotor", "wkurzony właściciel klubu", "redaktor lokalnej gazety", "troll z wykopu", "raper z internetu"],
    oponenci_e3: ["celebryta popowy", "znany youtuber", "reżyser teledysku", "oskarżyciel o plagiat bitu", "raper z konkurencyjnej wytwórni", "właściciel marki odzieżowej", "polityk krytykujący twoje teksty"],
    oponenci_e4: ["znany freak-fighter", "prowadzący pato-podcast", "algorytm tiktoka", "oszust kryptowalutowy", "influencerka", "tiktokowy tancerz", "dziennikarz plotkarski", "dawny przyjaciel z biednych lat"]
};

// Szablony wydarzeń generowanych losowo
const eventTemplates = [
    {
        // Szablon: Awaria sprzętu
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            const sprzet = proceduralVars[`sprzet_e${era}`][Math.floor(Math.random() * proceduralVars[`sprzet_e${era}`].length)];
            const miejsce = proceduralVars[`miejsca_e${era}`][Math.floor(Math.random() * proceduralVars[`miejsca_e${era}`].length)];
            return {
                desc: `Jesteś ${miejsce} w mieście ${city}. Nagle zauważasz, że twój ${sprzet} odmawia posłuszeństwa w kluczowym momencie.`,
                options: [
                    {
                        text: "Improwizuj i ratuj sytuację z uśmiechem na ustach.",
                        effects: { Wena: 15, Hype: 5, Odklejka: -5 }
                    },
                    {
                        text: "Wpadnij w furię, zniszcz sprzęt do końca i wyjdź.",
                        effects: { Odklejka: 25, Hype: 15, StreetCred: -10, Fejm: 10 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Konflikt z oponentem
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            const wrog = proceduralVars[`oponenci_e${era}`][Math.floor(Math.random() * proceduralVars[`oponenci_e${era}`].length)];
            const miejsce = proceduralVars[`miejsca_e${era}`][Math.floor(Math.random() * proceduralVars[`miejsca_e${era}`].length)];
            return {
                desc: `Przebywasz ${miejsce}, gdy nagle atakuje cię słownie ${wrog}. Kwestionuje twoją prawdziwość i umiejętności.`,
                options: [
                    {
                        text: "Odpowiedz inteligentnie i spokojnie go wypunktuj.",
                        effects: { Wena: 20, StreetCred: 15, Fejm: 5 }
                    },
                    {
                        text: "Użyj agresji i obelg, robiąc z tego publiczną zadymę.",
                        effects: { Odklejka: 20, Hype: 25, Kasa: -200, StreetCred: 5 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Szansa na szybki zarobek
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            const miejsce = proceduralVars[`miejsca_e${era}`][Math.floor(Math.random() * proceduralVars[`miejsca_e${era}`].length)];
            return {
                desc: `Dostajesz tajemniczą propozycję. Pewien przedsiębiorca spotyka się z tobą ${miejsce} (${city}) i oferuje ci szybką gotówkę za drobną, kontrowersyjną przysługę promocyjną.`,
                options: [
                    {
                        text: "Biorę hajs w ciemno, biznes to biznes.",
                        effects: { Kasa: 800 * era, StreetCred: -20, Odklejka: 15 }
                    },
                    {
                        text: "Odrzucam, zachowuję twarz i zasady.",
                        effects: { StreetCred: 25, Wena: 15 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Kryzys twórczy
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            return {
                desc: `Siedzisz w swoim pokoju w mieście ${city}. Od kilku dni nic nie napisałeś. Ekipa pyta kiedy nowe kawałki. Czujesz ogromną presję.`,
                options: [
                    {
                        text: "Wydaj słaby tekst (Ghostwriter / kradzione rymy), byle tylko coś wypuścić.",
                        effects: { Wena: -20, StreetCred: -25, Fejm: 10 }
                    },
                    {
                        text: "Weź głęboki oddech, wyłącz telefon i zresetuj głowę.",
                        effects: { Wena: 30, Hype: -10 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Przypadkowe zdarzenie na osiedlu/mieście
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            return {
                desc: `Idziesz ulicą w ${city}. Spotykasz grupkę fanów, którzy proszą o zdjęcie, ale nagle jeden z nich krzyczy, że woli twojego rywala.`,
                options: [
                    {
                        text: "Zignoruj prowokację i po prostu zrób zdjęcie z resztą.",
                        effects: { Fejm: 10, Odklejka: -5 }
                    },
                    {
                        text: "Wszczynasz kłótnię na środku ulicy.",
                        effects: { Hype: 20, StreetCred: 10, Fejm: -10, Odklejka: 15 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Plagiat
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            const wrog = proceduralVars[`oponenci_e${era}`][Math.floor(Math.random() * proceduralVars[`oponenci_e${era}`].length)];
            return {
                desc: `Dowiadujesz się z plotek, że ${wrog} skopiował twój unikalny styl nawijki. Co więcej, wszyscy uważają, że to on go wymyślił.`,
                options: [
                    {
                        text: "Nagraj merytoryczny utwór wyjaśniający kradzież z datami i faktami.",
                        effects: { Wena: 15, StreetCred: 20, Fejm: 5 }
                    },
                    {
                        text: "Wyzywaj go na każdym kroku tworząc żałosną dramę.",
                        effects: { Odklejka: 25, Hype: 30, Wena: -10 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Wypadek na trasie
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            const miejsce = proceduralVars[`miejsca_e${era}`][Math.floor(Math.random() * proceduralVars[`miejsca_e${era}`].length)];
            return {
                desc: `Jesteś w drodze do miasta ${city}. W połowie trasy psuje wam się auto. Koncert wisi na włosku, a fani czekają ${miejsce}.`,
                options: [
                    {
                        text: "Kombinuj transport na własną rękę, byle nie zawieść prawdziwych fanów.",
                        effects: { Kasa: -500 * era, StreetCred: 30, Fejm: 10 }
                    },
                    {
                        text: "Odwołaj koncert i wrzuć winę na organizatora.",
                        effects: { StreetCred: -25, Hype: 10, Odklejka: 15 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Nietypowa propozycja
        eras: [2, 3, 4],
        generate: (era, city) => {
            return {
                desc: `Lokalny biznesmen z ${city} proponuje ci darmowe ubrania i sprzęt, jeśli na każdym kroku będziesz promował jego wątpliwej jakości markę odzieżową.`,
                options: [
                    {
                        text: "Załóż te tanie łachy i chwal się nimi. Hajs to hajs.",
                        effects: { Kasa: 1500 * era, Odklejka: 20, StreetCred: -15, Hype: 10 }
                    },
                    {
                        text: "Wyśmiej go i promuj tylko własną ekipę.",
                        effects: { StreetCred: 20, Wena: 10 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Używki
        eras: [1, 2, 3, 4],
        generate: (era, city) => {
            const miejsce = proceduralVars[`miejsca_e${era}`][Math.floor(Math.random() * proceduralVars[`miejsca_e${era}`].length)];
            return {
                desc: `Trwa impreza ${miejsce}. Ktoś z ekipy przynosi twarde używki by 'uczcić' sukces.`,
                options: [
                    {
                        text: "Zaszalej na całego. Tracisz kontakt z bazą na 3 dni.",
                        effects: { Odklejka: 40, Wena: -25, Hype: 15, Kasa: -200 * era }
                    },
                    {
                        text: "Odmów, zachowaj trzeźwy umysł i wracaj pisać teksty.",
                        effects: { Wena: 30, Odklejka: -10, StreetCred: 5 }
                    }
                ]
            };
        }
    },
    {
        // Szablon: Konflikt z fanką
        eras: [3, 4],
        generate: (era, city) => {
            return {
                desc: `Rozpoznaje cię fan(ka) w ${city}. Zaczyna nagrywać cię z ukrycia telefonem, rzucając dziwne komentarze.`,
                options: [
                    {
                        text: "Wyrwij jej telefon i wyrzuć w krzaki.",
                        effects: { Odklejka: 30, Hype: 40, Kasa: -2000, StreetCred: -10 }
                    },
                    {
                        text: "Zrób to samo – zacznij ją nagrywać z uśmiechem i wrzuć do sieci jako żart.",
                        effects: { Fejm: 20, Wena: 10, Hype: 10 }
                    }
                ]
            };
        }
    }
];

const surpriseEvents = [
    {
        eras: [3, 4],
        generate: () => ({
            desc: `💰 DOTACJA Z MINISTERSTWA 💰\nPaństwo postanowiło wesprzeć artystów w ramach "Funduszu Wsparcia Kultury". Twój wniosek zostaje zaakceptowany i dostajesz potężny przelew.`,
            options: [
                { text: "Bierz kasę w ciemno i udawaj, że to ze streamingu.", effects: { Kasa: 40000, Respekt: -15, Hype: 10 } },
                { text: "Przeznacz wszystko na sprzęt i szlachetne cele (i przyznaj się).", effects: { Kasa: 40000, Fejm: 15, Respekt: 20, StreetCred: -10 } }
            ]
        })
    },
    {
        eras: [1, 2, 3, 4],
        generate: () => ({
            desc: `🚨 PRZYPAŁ 🚨\nJesteś napierdolony jak szmata na koncercie. Wymachując rękami obrzygałeś konsoletę DJ'a! Koncert przerwany, sprzęt zniszczony.`,
            options: [
                { text: "Wyślij sprzęt do naprawy (koszt: 2000 PLN).", effects: { Kasa: -2000, Fejm: -5, Hype: 5 } },
                { text: "Kup nową, najlepszą konsoletę (koszt: 8000 PLN).", effects: { Kasa: -8000, StreetCred: 10, Respekt: 10 } },
                { text: "Ucieknij z klubu nie płacąc. Niech DJ sam sobie radzi.", effects: { StreetCred: -30, Hype: 20, Odklejka: 30, Respekt: -20, PoliceHeat: 15 } }
            ]
        })
    },
    {
        eras: [1, 2, 3, 4],
        generate: () => ({
            desc: `🚨 PRZYPAŁ 🚨\nNarkotyki. Szemrani znajomi z osiedla proponują ci szybki przerzut 'towaru' do innego miasta w bagażniku. Łatwy, ale brudny hajs.`,
            options: [
                { text: "Wchodzę w to. Szybka gotówka.", effects: { Kasa: 15000, StreetCred: 20, Odklejka: 10, PoliceHeat: 30 } },
                { text: "Odrzucam. Jestem muzykiem, nie dilerem.", effects: { StreetCred: -5, Wena: 15, Respekt: 5 } }
            ]
        })
    },
    {
        eras: [1, 2, 3, 4],
        generate: () => ({
            desc: `🚨 PRZYPAŁ 🚨\nWłamanie. Ekipa planuje 'zrobić' bogaty dom pod miastem. Brakuje im kierowcy. Proponują ci udział w zyskach.`,
            options: [
                { text: "Jadę z wami. Ryzykujemy wszystko.", effects: { Kasa: 25000, StreetCred: 30, Odklejka: 20, PoliceHeat: 40 } },
                { text: "Odmawiam. Za duże ryzyko wpadki.", effects: { Respekt: -5 } }
            ]
        })
    },
    {
        eras: [1, 2, 3, 4],
        generate: () => ({
            desc: `🚨 PRZYPAŁ 🚨\nPolicja puka do drzwi o 6:00 rano. Ktoś z ekipy 'rozpruł się' (został 60) i wskazał ciebie jako wspólnika w starych przewałkach.`,
            options: [
                { text: "Idziesz w zaparte i milczysz. (Więzienie: 5 lat)", action: "PRISON_SILENT" },
                { text: "Sprzedaj ziomków i zostań świadkiem koronnym (60).", action: "PRISON_SNITCH" }
            ]
        })
    },
    {
        eras: [2, 3, 4],
        generate: () => ({
            desc: `🚨 PRZYPAŁ 🚨\nWypadek pod wpływem. Wracasz z imprezy drogim autem, tracisz panowanie i uderzasz w latarnię. Samochód do kasacji.`,
            options: [
                { text: "Zadzwoń po papugę i zapłać kaucję.", effects: { Kasa: -30000, Hype: 20, Odklejka: 15, PoliceHeat: 20 } },
                { text: "Ucieknij z miejsca zdarzenia.", effects: { StreetCred: -40, Odklejka: 40, Respekt: -30, Hype: 30, PoliceHeat: 60 } }
            ]
        })
    },
    {
        eras: [3, 4],
        generate: () => ({
            desc: `🚨 PRZYPAŁ 🚨\nWyciek nudesów. Ktoś włamał się na twój telefon i wrzucił do sieci prywatne, bardzo kompromitujące materiały.`,
            options: [
                { text: "Zatrudnij specjalistów PR by to usunąć.", effects: { Kasa: -10000, Fejm: -10, Hype: 10 } },
                { text: "Przyznaj się do wszystkiego na streamie.", effects: { Odklejka: 30, Hype: 40, StreetCred: -10 } }
            ]
        })
    }
];

function getProceduralEvent(era, city) {
    const validTemplates = eventTemplates.filter(t => t.eras.includes(era));
    const template = validTemplates[Math.floor(Math.random() * validTemplates.length)];
    return template.generate(era, city);
}

function getSurpriseEvent(era) {
    const validTemplates = surpriseEvents.filter(t => t.eras.includes(era));
    
    // Szukamy eventu z psiarnią (Więzienie)
    const prisonIndex = validTemplates.findIndex(t => t.generate().desc.includes("Policja puka do drzwi"));
    
    let template;
    if (prisonIndex !== -1 && Math.random() < 0.05) {
        // Tylko 5% szansy na trafienie tego konkretnego, rzadkiego eventu
        template = validTemplates[prisonIndex];
    } else {
        // Losujemy spośród pozostałych (bez więzienia)
        const safeTemplates = validTemplates.filter((t, i) => i !== prisonIndex);
        template = safeTemplates[Math.floor(Math.random() * safeTemplates.length)];
    }
    
    return template.generate();
}
