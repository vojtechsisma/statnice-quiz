const SOFT_TOPICS = [
  {
    id: 1,
    title: "Funkcionální programování",
    description: "Programovací paradigmata, základy FP, referenční transparentnost, redukční strategie, polymorfismus, částečná aplikace.",
    questions: [
      {
        q: "Co znamená referenční transparentnost?",
        options: [
          "Výraz lze nahradit jeho hodnotou bez změny chování programu",
          "Každá funkce vrací referenci na objekt",
          "Proměnné jsou předávány odkazem, ne hodnotou",
          "Funkce může měnit globální stav"
        ],
        correct: 0,
        explanation: "Referenční transparentnost znamená, že volání funkce se stejnými argumenty vždy vrací stejný výsledek a lze ho nahradit hodnotou."
      },
      {
        q: "Co je částečná aplikace funkce?",
        options: [
          "Volání funkce s méně argumenty, výsledkem je funkce čekající na zbytek",
          "Aplikace funkce pouze na část seznamu",
          "Funkce, která může selhat (vrátit None)",
          "Kompilace pouze části programu"
        ],
        correct: 0,
        explanation: "Částečná aplikace dodá funkci jen část argumentů a vrátí novou funkci, která přijme zbývající argumenty."
      },
      {
        q: "Jaký je rozdíl mezi monomorfním a polymorfním typem?",
        options: [
          "Monomorfní má jeden konkrétní typ, polymorfní pracuje s více typy přes typové proměnné",
          "Monomorfní je jen pro čísla, polymorfní pro objekty",
          "Polymorfní typ je mutabilní, monomorfní nikoliv",
          "Není mezi nimi rozdíl"
        ],
        correct: 0,
        explanation: "Polymorfní typ (např. `a -> a`) je obecný přes typové proměnné, monomorfní má fixní konkrétní typ."
      },
      {
        q: "Co je intenzionální zápis seznamu (list comprehension)?",
        options: [
          "Zápis seznamu pomocí pravidla generování a filtrace prvků",
          "Vypsání všech prvků seznamu",
          "Reverzní pořadí prvků",
          "Komprese seznamu do menšího formátu"
        ],
        correct: 0,
        explanation: "Intenzionální zápis (např. `[x*2 | x <- xs, x > 0]`) definuje seznam generátorem a filtrem."
      },
      {
        q: "Které paradigma NEPATŘÍ mezi hlavní programovací paradigmata?",
        options: [
          "Transakční",
          "Imperativní",
          "Funkcionální",
          "Logické"
        ],
        correct: 0,
        explanation: "Hlavní paradigmata: imperativní (procedurální, OOP), deklarativní (funkcionální, logické)."
      },
      {
        q: "Co je funkce vyššího řádu?",
        options: [
          "Funkce, která přijímá funkci jako argument nebo vrací funkci",
          "Funkce s mnoha argumenty",
          "Funkce volající sebe sama",
          "Funkce s vedlejším efektem"
        ],
        correct: 0,
        explanation: "Funkce vyššího řádu (např. map, filter, fold) pracují s funkcemi jako s daty."
      },
      {
        q: "Co je currying?",
        options: [
          "Transformace funkce více argumentů na řetězec funkcí jednoho argumentu",
          "Optimalizace rekurze",
          "Spojení dvou funkcí do jedné",
          "Změna pořadí argumentů"
        ],
        correct: 0,
        explanation: "Curryovaná funkce f(a,b,c) se zapíše jako f(a)(b)(c)."
      },
      {
        q: "Co je líné (lazy) vyhodnocení?",
        options: [
          "Výraz se vyhodnotí až ve chvíli, kdy je jeho hodnota skutečně potřeba",
          "Vyhodnocení odložené na konec programu",
          "Pomalé sekvenční zpracování",
          "Vyhodnocení v samostatném vlákně"
        ],
        correct: 0,
        explanation: "Lazy evaluation (Haskell) umožňuje pracovat s nekonečnými strukturami a vyhýbat se zbytečným výpočtům."
      },
      {
        q: "Co je čistá funkce (pure function)?",
        options: [
          "Funkce bez vedlejších efektů, výsledek závisí jen na argumentech",
          "Funkce psaná v assembleru",
          "Funkce, která vrací jen booleovskou hodnotu",
          "Funkce, která modifikuje globální stav"
        ],
        correct: 0,
        explanation: "Čistá funkce je referenčně transparentní a nemá side effects (IO, mutace)."
      },
      {
        q: "Která redukční strategie vyhodnocuje nejprve argumenty?",
        options: [
          "Applicative order (call by value)",
          "Normal order (call by name)",
          "Lazy evaluation",
          "Call by need"
        ],
        correct: 0,
        explanation: "Aplikativní redukce nejprve vyhodnotí argumenty; normální postupuje od vnějšího redex."
      },
      {
        q: "K čemu slouží funkce `fold` (reduce)?",
        options: [
          "Postupně kombinuje prvky seznamu pomocí binární operace na jednu hodnotu",
          "Filtruje prvky seznamu",
          "Zobrazuje seznam",
          "Setřídí seznam"
        ],
        correct: 0,
        explanation: "fold/reduce např. sečte všechny prvky: foldr (+) 0 [1,2,3] = 6."
      },
      {
        q: "Co je algebraický datový typ?",
        options: [
          "Typ definovaný kombinací součtů (variantů) a součinů (n-tic) jiných typů",
          "Typ pro algebraické výpočty",
          "Pole celých čísel",
          "Typ definovaný matematickou rovnicí"
        ],
        correct: 0,
        explanation: "ADT (např. data Maybe a = Nothing | Just a) – sum + product types."
      }
    ]
  },
  {
    id: 2,
    title: "Logické programování",
    description: "Prolog, backtracking, reverzibilita, řízení průchodu programem, databáze v Prologu.",
    questions: [
      {
        q: "Co je backtracking v Prologu?",
        options: [
          "Návrat k poslednímu rozhodovacímu bodu při neúspěchu a zkoušení další možnosti",
          "Zápis programu pozpátku",
          "Optimalizace rekurze",
          "Krokování programu zpět debuggerem"
        ],
        correct: 0,
        explanation: "Backtracking je mechanismus, kdy interpret při neúspěšné unifikaci zruší výběr a zkusí jinou alternativu."
      },
      {
        q: "Co znamená reverzibilita logických programů?",
        options: [
          "Stejný predikát lze použít pro různé režimy vstupu/výstupu argumentů",
          "Program lze spustit pozpátku",
          "Lze zrušit poslední krok",
          "Predikát vrací svou inverzi"
        ],
        correct: 0,
        explanation: "Reverzibilita: např. `append(X, Y, [1,2,3])` umí najít všechny dvojice X, Y; stejný kód funguje v různých 'směrech'."
      },
      {
        q: "K čemu slouží operátor řezu (cut, `!`) v Prologu?",
        options: [
          "Potlačí backtracking za bodem, kde je umístěn",
          "Ukončí celý program",
          "Smaže fakt z databáze",
          "Negace cíle"
        ],
        correct: 0,
        explanation: "Řez '!' zamkne všechna rozhodnutí učiněná do jeho dosažení a zabrání návratu k alternativám."
      },
      {
        q: "Co je fakt v Prologu?",
        options: [
          "Klauzule bez těla, vždy pravdivý vztah",
          "Pravidlo s podmínkou",
          "Cíl, který se má dokázat",
          "Proměnná inicializovaná hodnotou"
        ],
        correct: 0,
        explanation: "Fakt je klauzule typu `rodic(jan, petr).` – nepodmíněné tvrzení v databázi."
      },
      {
        q: "Jak se liší logické programování od imperativního?",
        options: [
          "Programátor popisuje CO platí, nikoli JAK to spočítat",
          "Nepodporuje rekurzi",
          "Nemá proměnné",
          "Je rychlejší než imperativní jazyky"
        ],
        correct: 0,
        explanation: "Logické programování je deklarativní: definujeme vztahy/predikáty, interpret hledá řešení."
      },
      {
        q: "Co je unifikace v Prologu?",
        options: [
          "Proces hledání substituce proměnných tak, aby se dva termy staly shodnými",
          "Spojování dvou predikátů do jednoho",
          "Sloučení dvou databází",
          "Převedení termu na řetězec"
        ],
        correct: 0,
        explanation: "Unifikace najde nejobecnější unifikátor; např. f(X, b) a f(a, Y) se unifikují s X=a, Y=b."
      },
      {
        q: "Co je pravidlo v Prologu?",
        options: [
          "Klauzule tvaru `head :- body.` – hlava platí, pokud platí tělo",
          "Vstupní příkaz interpretu",
          "Direktiva pro kompilátor",
          "Definice datového typu"
        ],
        correct: 0,
        explanation: "Pravidlo: rodic(X,Y) :- otec(X,Y). – hlava platí, pokud lze dokázat tělo."
      },
      {
        q: "Jak se v Prologu zapisuje seznam s hlavou H a zbytkem T?",
        options: [
          "[H|T]",
          "(H, T)",
          "list(H, T)",
          "H::T"
        ],
        correct: 0,
        explanation: "Seznamová notace [H|T] – pattern matching na hlavu a zbytek."
      },
      {
        q: "Co dělá predikát `fail` v Prologu?",
        options: [
          "Vždy selže a vyvolá backtracking",
          "Ukončí program s chybou",
          "Vypíše chybové hlášení",
          "Smaže databázi"
        ],
        correct: 0,
        explanation: "fail je vždy neúspěšný cíl; používá se pro vynucení backtrackingu."
      },
      {
        q: "Co je negace neúspěchem (negation as failure)?",
        options: [
          "Cíl `\\+ G` uspěje, pokud G nelze dokázat",
          "Logická negace pomocí not()",
          "Pravidlo, které vždy selže",
          "Chyba v unifikaci"
        ],
        correct: 0,
        explanation: "\\+ G není klasická logická negace, ale uzavřený svět – cíl neplatí, pokud ho neumíme dokázat."
      },
      {
        q: "Která datová struktura tvoří databázi Prologu?",
        options: [
          "Množina faktů a pravidel (klauzulí)",
          "Tabulka jako v SQL",
          "Strom",
          "Hash mapa"
        ],
        correct: 0,
        explanation: "Prolog databáze je seznam klauzulí; lze ji dynamicky měnit (assert, retract)."
      },
      {
        q: "Co znamená SLD-rezoluce?",
        options: [
          "Linear resolution with Selection function pro Definite klauzule – inferenční pravidlo Prologu",
          "Sériová logická dedukce",
          "Algoritmus pro detekci cyklů",
          "Komprese klauzulí"
        ],
        correct: 0,
        explanation: "SLD-rezoluce je základ provádění Prologu: výběr cíle, unifikace, expanze."
      }
    ]
  },
  {
    id: 3,
    title: "Modelování firemních procesů (BPMN)",
    description: "BPMN, workflow patterns, požadavky, typové úlohy.",
    questions: [
      {
        q: "Co reprezentuje diamantový tvar v BPMN diagramu?",
        options: [
          "Bránu (gateway) – rozhodovací bod nebo synchronizaci toku",
          "Aktivitu (úlohu)",
          "Událost (event)",
          "Datový objekt"
        ],
        correct: 0,
        explanation: "Diamant = gateway, řídí rozvětvení/sloučení toku (XOR, AND, OR aj.)."
      },
      {
        q: "Co je 'pool' v BPMN?",
        options: [
          "Kontejner reprezentující účastníka procesu (organizaci, systém)",
          "Skupina datových objektů",
          "Sklad úloh ke zpracování",
          "Cyklus opakování úloh"
        ],
        correct: 0,
        explanation: "Pool zobrazuje účastníka procesu; uvnitř bývají lanes pro role."
      },
      {
        q: "Co je typová úloha (use case)?",
        options: [
          "Popis interakce mezi aktérem a systémem vedoucí k dosažení cíle",
          "Šablona pro psaní kódu",
          "Datový typ s předdefinovanou strukturou",
          "Testovací scénář"
        ],
        correct: 0,
        explanation: "Typová úloha (use case) popisuje cíl aktéra a sekvence kroků interakce se systémem."
      },
      {
        q: "Jaký je rozdíl mezi sekvenčním tokem (sequence flow) a tokem zpráv (message flow) v BPMN?",
        options: [
          "Sekvenční tok je uvnitř poolu, tok zpráv mezi pooly",
          "Sekvenční tok je obousměrný, tok zpráv jednosměrný",
          "Sekvenční tok přenáší data, tok zpráv řízení",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "Sequence flow propojuje aktivity v rámci jednoho účastníka; message flow přenáší komunikaci mezi účastníky."
      },
      {
        q: "Jaký workflow pattern představuje paralelní rozdělení a následné sloučení?",
        options: [
          "AND-split a AND-join (parallel split / synchronization)",
          "XOR-split a XOR-merge",
          "OR-split a discriminator",
          "Sequence pattern"
        ],
        correct: 0,
        explanation: "AND-split spustí všechny větve paralelně, AND-join čeká na dokončení všech."
      },
      {
        q: "Co reprezentuje kruh (kroužek) v BPMN?",
        options: [
          "Událost (event) – start, mezilehlou nebo koncovou",
          "Aktivitu",
          "Bránu",
          "Datový sklad"
        ],
        correct: 0,
        explanation: "Eventy v BPMN: kruh; tenký=start, dvojitý=intermediate, tučný=end."
      },
      {
        q: "Co reprezentuje zaoblený obdélník v BPMN?",
        options: [
          "Aktivitu (task nebo subprocess)",
          "Bránu",
          "Účastníka",
          "Datový tok"
        ],
        correct: 0,
        explanation: "Aktivita = úloha; zaoblený obdélník symbolizuje práci, kterou je třeba vykonat."
      },
      {
        q: "Co je lane v BPMN?",
        options: [
          "Podrozdělení poolu reprezentující roli nebo oddělení",
          "Spojovací čára",
          "Typ události",
          "Datový objekt"
        ],
        correct: 0,
        explanation: "Lane je horizontální nebo vertikální pruh uvnitř poolu pro organizaci aktivit dle rolí."
      },
      {
        q: "Co znamená XOR brána?",
        options: [
          "Exkluzivní volba – proces pokračuje právě jednou z větví",
          "Všechny větve paralelně",
          "Žádná z větví",
          "Libovolná podmnožina větví"
        ],
        correct: 0,
        explanation: "XOR (exclusive gateway) – právě jedna podmínka splněna, jen jedna větev."
      },
      {
        q: "Co je workflow pattern Deferred Choice?",
        options: [
          "Volba větve se rozhodne až podle vnější události (např. zprávy)",
          "Volba se odkládá na konec procesu",
          "Volba bez následků",
          "Paralelní zpracování všech voleb"
        ],
        correct: 0,
        explanation: "Deferred choice: alternativy čekají na vnější vstup; první událost rozhodne."
      },
      {
        q: "Co popisuje use case scénář?",
        options: [
          "Konkrétní posloupnost kroků interakce aktéra a systému pro daný cíl",
          "Diagramy tříd",
          "Kódovou implementaci",
          "Databázové schéma"
        ],
        correct: 0,
        explanation: "Scénář obsahuje hlavní tok, alternativní toky, předpoklady, výsledek."
      },
      {
        q: "Co NENÍ artefakt BPMN?",
        options: [
          "UML třída",
          "Anotace (text annotation)",
          "Skupina (group)",
          "Datový objekt"
        ],
        correct: 0,
        explanation: "Artefakty BPMN: datový objekt, skupina, anotace. UML třída do BPMN nepatří."
      }
    ]
  },
  {
    id: 4,
    title: "Princip objektového návrhu",
    description: "Procedurální vs. objektový přístup, abstrakce, zapouzdření, dědičnost, polymorfismus.",
    questions: [
      {
        q: "Co je zapouzdření (encapsulation)?",
        options: [
          "Skrytí vnitřního stavu objektu a přístup pouze přes definované rozhraní",
          "Spojení dvou tříd do jedné",
          "Vytvoření kopie objektu",
          "Použití generik"
        ],
        correct: 0,
        explanation: "Zapouzdření chrání invarianty objektu omezením přímého přístupu k vnitřním datům."
      },
      {
        q: "Jaký je rozdíl mezi třídou a objektem?",
        options: [
          "Třída je šablona/popis, objekt je její konkrétní instance",
          "Třída je instance objektu",
          "Objekt obsahuje třídy",
          "Není rozdíl, jen synonyma"
        ],
        correct: 0,
        explanation: "Třída popisuje strukturu a chování; objekt je konkrétní instance s vlastním stavem."
      },
      {
        q: "Co je polymorfismus?",
        options: [
          "Schopnost objektů různých typů reagovat na stejnou zprávu vlastním způsobem",
          "Více tříd se stejným názvem",
          "Dědění z více tříd",
          "Změna typu proměnné za běhu"
        ],
        correct: 0,
        explanation: "Polymorfismus umožňuje pracovat s objekty různých tříd přes společné rozhraní (např. virtuální metody)."
      },
      {
        q: "Co znamená soudržnost (cohesion) třídy?",
        options: [
          "Míra, do jaké jsou členy třídy logicky spjaty a slouží jednomu účelu",
          "Počet jejích podtříd",
          "Závislost na ostatních třídách",
          "Velikost paměti, kterou zabírá"
        ],
        correct: 0,
        explanation: "Vysoká soudržnost = třída dělá jednu věc dobře; nízká = třída má rozházené nesouvisející povinnosti."
      },
      {
        q: "Co je identita objektu?",
        options: [
          "Unikátní vlastnost odlišující objekt od jiných i se stejným stavem",
          "Jméno proměnné, ve které je uložen",
          "Hodnota jeho atributů",
          "Reference na třídu"
        ],
        correct: 0,
        explanation: "Dva objekty mohou mít identický stav, ale mají vlastní identitu (např. dvě různé instance)."
      },
      {
        q: "Co je abstrakce v OOP?",
        options: [
          "Zaměření na podstatné vlastnosti a chování při ignorování nepodstatných detailů",
          "Skrytí implementačních detailů",
          "Vytvoření abstraktní třídy",
          "Vytvoření rozhraní"
        ],
        correct: 0,
        explanation: "Abstrakce vybírá relevantní rysy reálného světa do modelu třídy."
      },
      {
        q: "Co je dědičnost?",
        options: [
          "Mechanismus, kdy podtřída přebírá atributy a metody nadtřídy a může je rozšířit",
          "Kopírování objektů",
          "Sdílení paměti mezi třídami",
          "Vícenásobná instance třídy"
        ],
        correct: 0,
        explanation: "Dědičnost (is-a) umožňuje znovupoužití kódu a hierarchii tříd."
      },
      {
        q: "Co znamená vazba (coupling)?",
        options: [
          "Míra vzájemné závislosti mezi moduly/třídami",
          "Spojení dvou objektů do páru",
          "Propojení s databází",
          "Hierarchie dědičnosti"
        ],
        correct: 0,
        explanation: "Cíl: nízká vazba (loose coupling) – moduly závisí minimálně, snadná změna a testování."
      },
      {
        q: "Jaký je rozdíl mezi procedurálním a OOP přístupem?",
        options: [
          "Procedurální odděluje data a funkce, OOP je spojuje do objektů",
          "OOP nemůže používat funkce",
          "Procedurální je vždy rychlejší",
          "OOP nepodporuje rekurzi"
        ],
        correct: 0,
        explanation: "OOP zapouzdřuje data a chování do objektů; procedurální přístup data zpracovává odděleně funkcemi."
      },
      {
        q: "Co je abstraktní třída?",
        options: [
          "Třída, kterou nelze instanciovat a obvykle obsahuje abstraktní metody",
          "Třída bez atributů",
          "Třída v jiné třídě",
          "Třída se statickými metodami"
        ],
        correct: 0,
        explanation: "Abstraktní třída slouží jako šablona pro odvozené třídy; vynucuje implementaci určitých metod."
      },
      {
        q: "Co je rozhraní (interface)?",
        options: [
          "Kontrakt definující sadu metod, které musí třída implementovat",
          "Třída pro GUI",
          "Vnitřní třída",
          "Privátní část třídy"
        ],
        correct: 0,
        explanation: "Interface odděluje 'co' (kontrakt) od 'jak' (implementace) a umožňuje polymorfismus bez dědičnosti."
      },
      {
        q: "Co je vícenásobná dědičnost?",
        options: [
          "Třída může dědit z více nadtříd současně",
          "Třída může být dědicí vícekrát",
          "Více objektů sdílí stejnou třídu",
          "Dědičnost přes více úrovní"
        ],
        correct: 0,
        explanation: "Vícenásobná dědičnost (C++, Python) může vést k diamantovému problému; Java ji řeší přes interface."
      }
    ]
  },
  {
    id: 5,
    title: "Klasické a agilní metodiky vývoje SW",
    description: "Vodopád, RUP, iterativní vývoj, agilní principy, XP, Scrum, Kanban, TDD.",
    questions: [
      {
        q: "Která metodika je striktně sekvenční bez návratů?",
        options: [
          "Vodopádový model",
          "Scrum",
          "Kanban",
          "Extreme Programming"
        ],
        correct: 0,
        explanation: "Klasický vodopád postupuje lineárně: analýza → návrh → implementace → testování → údržba."
      },
      {
        q: "Jaká je typická délka Sprintu ve Scrumu?",
        options: [
          "1 až 4 týdny",
          "1 den",
          "3 měsíce",
          "1 rok"
        ],
        correct: 0,
        explanation: "Sprint trvá obvykle 2 týdny (max 1 měsíc) – krátká iterace s dodávkou přírůstku."
      },
      {
        q: "Co je TDD (Test-Driven Development)?",
        options: [
          "Napíše se test, který selže, pak kód, který ho splní, pak refaktor",
          "Testování až po dokončení vývoje",
          "Tester píše kód místo vývojáře",
          "Automatické generování testů z kódu"
        ],
        correct: 0,
        explanation: "TDD cyklus: red (test selže) → green (kód projde) → refactor."
      },
      {
        q: "Co charakterizuje Kanban?",
        options: [
          "Vizualizace toku práce a omezení rozpracované práce (WIP limit)",
          "Pevné iterace o délce 2 týdnů",
          "Žádné role v týmu",
          "Vyžaduje denní stand-up meetingy"
        ],
        correct: 0,
        explanation: "Kanban: tabule (To Do / In Progress / Done), pull systém, WIP limity místo pevných sprintů."
      },
      {
        q: "Která z hodnot patří do Agilního manifestu?",
        options: [
          "Reagování na změnu před plněním plánu",
          "Smluvní vyjednávání před spoluprací se zákazníkem",
          "Procesy a nástroje před lidmi",
          "Detailní dokumentace před fungujícím software"
        ],
        correct: 0,
        explanation: "Agilní manifest preferuje: jednotlivce, fungující SW, spolupráci se zákazníkem, reakci na změnu."
      },
      {
        q: "Které role definuje Scrum?",
        options: [
          "Product Owner, Scrum Master, vývojový tým",
          "Manager, vývojář, tester",
          "Pouze tým bez rolí",
          "Architekt, programátor, analytik"
        ],
        correct: 0,
        explanation: "Tři role Scrumu: Product Owner (priority), Scrum Master (proces), Developers (realizace)."
      },
      {
        q: "Co je RUP (Rational Unified Process)?",
        options: [
          "Iterativní metodika založená na UML s fázemi: inception, elaboration, construction, transition",
          "Agilní framework",
          "Vodopád s testováním",
          "Databázová metodika"
        ],
        correct: 0,
        explanation: "RUP je use-case driven, iterativní, využívá UML, byl předchůdcem agilních přístupů."
      },
      {
        q: "Co je hlavní cíl párového programování (XP)?",
        options: [
          "Dva vývojáři u jednoho počítače zlepšují kvalitu kódu a sdílí znalosti",
          "Dva nezávislí programátoři řeší stejný úkol",
          "Programování ve dvojici klient-server",
          "Test ve dvojici"
        ],
        correct: 0,
        explanation: "Pair programming v XP: driver píše, navigator kontroluje – průběžný code review."
      },
      {
        q: "Co je daily scrum (standup)?",
        options: [
          "Krátké denní setkání (max 15 min) o stavu, plánech a překážkách",
          "Týdenní reporting",
          "Schůzka s klientem",
          "Plánování sprintu"
        ],
        correct: 0,
        explanation: "Daily scrum synchronizuje tým, odhaluje překážky."
      },
      {
        q: "Co je product backlog?",
        options: [
          "Seřazený seznam požadavků na produkt vlastněný Product Ownerem",
          "Seznam chyb",
          "Plán sprintu",
          "Dokumentace produktu"
        ],
        correct: 0,
        explanation: "Backlog je živý dokument; PO priorizuje, tým odhaduje a vybírá do sprintu."
      },
      {
        q: "Co je retrospektiva ve Scrumu?",
        options: [
          "Setkání týmu po sprintu pro zlepšení procesu",
          "Demo produktu zákazníkovi",
          "Plánování dalšího sprintu",
          "Code review"
        ],
        correct: 0,
        explanation: "Retrospektiva hodnotí co fungovalo, co ne, a stanoví zlepšení pro další sprint."
      },
      {
        q: "Která metodika NENÍ agilní?",
        options: [
          "Vodopádový model",
          "Scrum",
          "XP",
          "Kanban"
        ],
        correct: 0,
        explanation: "Vodopád je klasický sekvenční model, ostatní jsou agilní."
      }
    ]
  },
  {
    id: 6,
    title: "Formální reprezentace znalostí",
    description: "Data/informace/znalosti, ontologie, linked data.",
    questions: [
      {
        q: "Co je ontologie v informatice?",
        options: [
          "Formální specifikace pojmů a vztahů v dané doméně",
          "Filozofická nauka o bytí",
          "Databázový jazyk",
          "Druh neuronové sítě"
        ],
        correct: 0,
        explanation: "Ontologie definuje koncepty, jejich vlastnosti a vztahy – sdílený model domény."
      },
      {
        q: "Jaký je vztah mezi daty, informacemi a znalostmi?",
        options: [
          "Data jsou syrová fakta, informace jsou data s kontextem, znalosti propojují informace pro úsudek",
          "Jsou to synonyma",
          "Znalosti jsou nižší úroveň než data",
          "Informace jsou pouze numerická data"
        ],
        correct: 0,
        explanation: "Hierarchie DIKW: Data → Informace (interpretovaná data) → Znalosti (zobecněné vzory) → Moudrost."
      },
      {
        q: "Co jsou Linked Data?",
        options: [
          "Strukturovaná data propojená URI a publikovaná na webu pro strojové zpracování",
          "Záložky v prohlížeči",
          "Hyperlinky v HTML",
          "Komprimované zip soubory"
        ],
        correct: 0,
        explanation: "Linked Data využívají URI, HTTP a RDF k propojování datasetů napříč webem."
      },
      {
        q: "Který jazyk slouží pro popis ontologií na sémantickém webu?",
        options: [
          "OWL (Web Ontology Language)",
          "HTML",
          "SQL",
          "JSON"
        ],
        correct: 0,
        explanation: "OWL nadstavuje RDF/RDFS a umožňuje vyjádřit složitější logické vztahy mezi koncepty."
      },
      {
        q: "Co je RDF?",
        options: [
          "Resource Description Framework – datový model trojic (subjekt, predikát, objekt)",
          "Relational Data Format",
          "Rapid Development Framework",
          "Remote Data Fetch"
        ],
        correct: 0,
        explanation: "RDF zapisuje fakta jako trojice; tvoří základ sémantického webu."
      },
      {
        q: "Co je taxonomie?",
        options: [
          "Hierarchické zařazení pojmů do kategorií (is-a)",
          "Plochý seznam pojmů",
          "Databázový dotaz",
          "Datový typ"
        ],
        correct: 0,
        explanation: "Taxonomie strukturuje pojmy do stromu (např. zvířata → savci → psi)."
      },
      {
        q: "Co je RDFS?",
        options: [
          "RDF Schema – jazyk pro definici tříd a vlastností nad RDF",
          "Resource Database File System",
          "RDF Storage",
          "Šifrovaný RDF formát"
        ],
        correct: 0,
        explanation: "RDFS poskytuje základní typový systém: rdfs:Class, rdfs:subClassOf, rdfs:Property."
      },
      {
        q: "Co tvoří RDF trojice?",
        options: [
          "Subjekt, predikát, objekt",
          "Klíč, hodnota, typ",
          "Třída, instance, atribut",
          "Vstup, operace, výstup"
        ],
        correct: 0,
        explanation: "Subjekt-predikát-objekt: např. <Jan> <máRád> <Marie>."
      },
      {
        q: "Co je 4 principy Linked Data dle Tima Berners-Lee?",
        options: [
          "Použít URI, použít HTTP URI, vrátit užitečné info, propojit na další URI",
          "HTML, CSS, JS, JSON",
          "Šifrování, autentizace, autorizace, audit",
          "REST, SOAP, RPC, GraphQL"
        ],
        correct: 0,
        explanation: "Čtyři pravidla Linked Data: jednoznačné URI, HTTP přístup, RDF data, odkazy na další zdroje."
      },
      {
        q: "Co je informace vs. data?",
        options: [
          "Informace jsou data interpretovaná v kontextu",
          "Informace jsou nestrukturovaná data",
          "Data jsou interpretovaná, informace surová",
          "Synonyma"
        ],
        correct: 0,
        explanation: "Data jsou syrová fakta; přidání kontextu a smyslu tvoří informaci."
      },
      {
        q: "Která pyramida popisuje hierarchii DIKW?",
        options: [
          "Data → Information → Knowledge → Wisdom",
          "Data → Database → Knowledge → Web",
          "Decision → Information → Knowledge → World",
          "Documents → Indexes → Keys → Wisdom"
        ],
        correct: 0,
        explanation: "DIKW pyramida: každá vyšší úroveň přidává kontext, vzory, smysl."
      },
      {
        q: "Která ontologie popisuje sociální vazby na webu (FOAF)?",
        options: [
          "Friend Of A Friend",
          "First Of All Friends",
          "Format Of Authenticated Friends",
          "Foundation Of All Folks"
        ],
        correct: 0,
        explanation: "FOAF popisuje osoby a vztahy mezi nimi v RDF."
      }
    ]
  },
  {
    id: 7,
    title: "Sémantický web",
    description: "Architektura, odvozování, dotazování, SPARQL, návrhové vzory.",
    questions: [
      {
        q: "Co je SPARQL?",
        options: [
          "Dotazovací jazyk pro RDF data",
          "Skriptovací jazyk pro webové stránky",
          "Verze SQL pro NoSQL databáze",
          "Komprimační algoritmus"
        ],
        correct: 0,
        explanation: "SPARQL umožňuje dotazovat trojicová RDF data podobně jako SQL relační."
      },
      {
        q: "Co je inferencing (odvozování) v sémantickém webu?",
        options: [
          "Odvozování nových faktů z explicitně daných pomocí pravidel a ontologií",
          "Vyhledávání v databázi",
          "Komprimace dat",
          "Šifrování dotazů"
        ],
        correct: 0,
        explanation: "Reasoner využívá axiomy ontologie a explicitní data k odvození implicitních faktů."
      },
      {
        q: "Která vrstva NEPATŘÍ k architektuře sémantického webu?",
        options: [
          "SMTP",
          "URI/IRI",
          "RDF",
          "OWL"
        ],
        correct: 0,
        explanation: "SMTP je e-mailový protokol. Vrstvy sémantického webu: URI, XML/RDF, RDFS/OWL, SPARQL, logika, trust."
      },
      {
        q: "K čemu slouží URI v sémantickém webu?",
        options: [
          "Jednoznačná globální identifikace zdrojů a konceptů",
          "Lokální adresa souboru",
          "Šifrovací klíč",
          "Identifikátor uživatelské session"
        ],
        correct: 0,
        explanation: "URI poskytují unikátní jména pro entity, na něž lze odkazovat globálně."
      },
      {
        q: "Co je triple store?",
        options: [
          "Databáze optimalizovaná pro ukládání a dotazování RDF trojic",
          "Cache pro tři úrovně paměti",
          "Verzování souborů ve třech verzích",
          "Trojfázový backup"
        ],
        correct: 0,
        explanation: "Triple store ukládá RDF data; známé implementace: Apache Jena, Virtuoso, GraphDB."
      },
      {
        q: "Která klauzule SPARQL slouží k filtrování trojic?",
        options: [
          "WHERE s pattern matching trojic",
          "FILTER bez WHERE",
          "SELECT",
          "ORDER BY"
        ],
        correct: 0,
        explanation: "SPARQL WHERE definuje vzor trojic, FILTER omezuje dále."
      },
      {
        q: "Která forma SPARQL dotazu vrací RDF graf místo tabulky?",
        options: [
          "CONSTRUCT",
          "SELECT",
          "ASK",
          "DESCRIBE"
        ],
        correct: 0,
        explanation: "CONSTRUCT vytvoří nový RDF graf podle šablony; SELECT vrací proměnné, ASK boolean."
      },
      {
        q: "Co dělá dotaz typu ASK v SPARQL?",
        options: [
          "Vrací true/false, zda v datech existuje řešení vzoru",
          "Vrací počet řešení",
          "Vrací první řešení",
          "Vytváří nové trojice"
        ],
        correct: 0,
        explanation: "ASK je boolean dotaz – pouze ověřuje existenci."
      },
      {
        q: "Co je SPARQL endpoint?",
        options: [
          "Webová služba přijímající SPARQL dotazy nad triple store",
          "URL konkrétní entity",
          "RDF soubor",
          "Reasoning engine"
        ],
        correct: 0,
        explanation: "Endpoint (např. DBpedia) poskytuje HTTP API pro SPARQL dotazy."
      },
      {
        q: "Co je OWA (Open World Assumption)?",
        options: [
          "Co není explicitně řečeno, není automaticky nepravdivé – chybí přesvědčení o úplnosti dat",
          "Otevřený software",
          "Předpoklad otevřené databáze",
          "Dotaz nad celým webem"
        ],
        correct: 0,
        explanation: "OWA: oproti CWA v databázích, nemůžeme tvrdit, že fakt neplatí, jen že není znám."
      },
      {
        q: "Co je SKOS?",
        options: [
          "Simple Knowledge Organization System – pro slovníky, tezaury, klasifikace",
          "SPARQL Knowledge Operation Standard",
          "Speciální OWL syntaxe",
          "Šablona ontologií"
        ],
        correct: 0,
        explanation: "SKOS umožňuje publikovat řízené slovníky a tezaury jako RDF."
      },
      {
        q: "Která vrstva architektury sémantického webu zajišťuje důvěryhodnost?",
        options: [
          "Trust (s podpisem a důkazem)",
          "RDF",
          "URI",
          "SPARQL"
        ],
        correct: 0,
        explanation: "Vyšší vrstvy: Logic, Proof, Trust – ověřování pravdivosti a původu."
      }
    ]
  },
  {
    id: 8,
    title: "Databáze, databázový systém",
    description: "Funkce DBS, modely dat, relační algebra, SQL.",
    questions: [
      {
        q: "Která operace relační algebry vybírá řádky splňující podmínku?",
        options: [
          "Selekce (σ)",
          "Projekce (π)",
          "Spojení (⋈)",
          "Kartézský součin (×)"
        ],
        correct: 0,
        explanation: "Selekce filtruje řádky; projekce vybírá sloupce; join kombinuje tabulky."
      },
      {
        q: "Co je projekce v relační algebře?",
        options: [
          "Výběr určitých sloupců (atributů) z relace",
          "Výběr řádků dle podmínky",
          "Sjednocení dvou tabulek",
          "Seřazení podle sloupce"
        ],
        correct: 0,
        explanation: "Projekce π_{A,B}(R) vrátí relaci jen s vybranými atributy."
      },
      {
        q: "Co dělá příkaz SQL `JOIN`?",
        options: [
          "Spojuje řádky z různých tabulek na základě podmínky",
          "Kopíruje tabulku",
          "Sjednocuje výsledky dvou dotazů",
          "Maže duplicitní řádky"
        ],
        correct: 0,
        explanation: "JOIN kombinuje řádky tabulek (INNER, LEFT, RIGHT, FULL) podle joinovacích atributů."
      },
      {
        q: "Co je transakce v DBS?",
        options: [
          "Posloupnost operací prováděná atomicky (vše nebo nic) s vlastnostmi ACID",
          "Zápis jednoho řádku do tabulky",
          "Záloha databáze",
          "Připojení uživatele"
        ],
        correct: 0,
        explanation: "Transakce splňuje ACID: Atomicity, Consistency, Isolation, Durability."
      },
      {
        q: "Který model dat předcházel relačnímu modelu?",
        options: [
          "Hierarchický a síťový",
          "NoSQL",
          "Objektově-relační",
          "Sloupcový"
        ],
        correct: 0,
        explanation: "Před relačním modelem (Codd, 1970) dominovaly hierarchický (IMS) a síťový (CODASYL) model."
      },
      {
        q: "Co znamená vlastnost Isolation v ACID?",
        options: [
          "Souběžné transakce se neovlivňují tak, aby vznikla nekonzistence",
          "Data jsou šifrována",
          "Každá tabulka má vlastní soubor",
          "Transakce běží sekvenčně bez možnosti paralelismu"
        ],
        correct: 0,
        explanation: "Isolation: výsledek souběžných transakcí je jako při nějakém sériovém uspořádání."
      },
      {
        q: "Co je cizí klíč (foreign key)?",
        options: [
          "Atribut odkazující na primární klíč jiné (nebo téže) tabulky",
          "Klíč uložený mimo databázi",
          "Klíč jiného uživatele",
          "Šifrovaný klíč"
        ],
        correct: 0,
        explanation: "Foreign key zajišťuje referenční integritu mezi tabulkami."
      },
      {
        q: "Co dělá příkaz SQL `GROUP BY`?",
        options: [
          "Seskupí řádky se stejnými hodnotami zadaných sloupců pro agregaci",
          "Setřídí řádky",
          "Filtruje řádky",
          "Spojí tabulky"
        ],
        correct: 0,
        explanation: "GROUP BY se používá s agregačními funkcemi (COUNT, SUM, AVG)."
      },
      {
        q: "Jaký je rozdíl mezi WHERE a HAVING?",
        options: [
          "WHERE filtruje řádky před agregací, HAVING po agregaci (na skupinách)",
          "Není rozdíl",
          "WHERE jen pro JOIN, HAVING pro SELECT",
          "HAVING je pro indexy"
        ],
        correct: 0,
        explanation: "WHERE pracuje s jednotlivými řádky; HAVING filtruje výsledky GROUP BY."
      },
      {
        q: "Co je index v databázi?",
        options: [
          "Pomocná datová struktura urychlující vyhledávání podle určitého sloupce",
          "Pořadí řádků v tabulce",
          "Identifikátor řádku",
          "Šifrovací mechanismus"
        ],
        correct: 0,
        explanation: "Index (B-strom, hash) zrychluje SELECT, ale zpomaluje INSERT/UPDATE."
      },
      {
        q: "Co je NoSQL databáze?",
        options: [
          "Nerelační databázový systém (key-value, dokumentový, sloupcový, grafový)",
          "Databáze bez SQL syntaxe",
          "Databáze pouze pro čtení",
          "Šifrovaná databáze"
        ],
        correct: 0,
        explanation: "NoSQL: MongoDB (doc), Redis (kv), Cassandra (col), Neo4j (graph) – flexibilní schéma."
      },
      {
        q: "Co dělá DBMS (Database Management System)?",
        options: [
          "Spravuje data – ukládání, dotazování, transakce, zabezpečení, integritu",
          "Pouze ukládá soubory",
          "Generuje SQL kód",
          "Komprimuje data"
        ],
        correct: 0,
        explanation: "DBMS poskytuje vrstvu nad daty: konkurence, transakce, řízení přístupu, zotavení."
      }
    ]
  },
  {
    id: 9,
    title: "Konceptuální modelování",
    description: "E-R model, relační model, typy vztahů, normální formy.",
    questions: [
      {
        q: "Co znamená kardinalita 1:N v E-R modelu?",
        options: [
          "Jedna entita prvního typu odpovídá N entitám druhého typu, ale ne naopak",
          "Vždy přesně jeden vztah",
          "N entit prvního typu se vztahuje k N entitám druhého",
          "Vztah je volitelný"
        ],
        correct: 0,
        explanation: "1:N (např. zákazník–objednávky): jeden zákazník má více objednávek, každá objednávka jednoho zákazníka."
      },
      {
        q: "Co vyžaduje druhá normální forma (2NF)?",
        options: [
          "1NF a žádný neklíčový atribut nezávisí na části složeného klíče",
          "Eliminaci tranzitivních závislostí",
          "Aby byly všechny atributy číselné",
          "Aby tabulka měla primární klíč"
        ],
        correct: 0,
        explanation: "2NF eliminuje částečné funkční závislosti na složeném klíči."
      },
      {
        q: "Co je třetí normální forma (3NF)?",
        options: [
          "2NF a žádný neklíčový atribut není tranzitivně závislý na klíči",
          "1NF s primárním klíčem",
          "Vše ve formě binárních relací",
          "Vše v jedné tabulce"
        ],
        correct: 0,
        explanation: "3NF: neklíčové atributy závisí pouze na klíči, ne na jiných neklíčových atributech."
      },
      {
        q: "Jak se v relačním modelu typicky reprezentuje M:N vztah?",
        options: [
          "Vazební tabulkou s cizími klíči obou entit",
          "Jedním sloupcem se seznamem hodnot",
          "Dvěma cizími klíči ve stejné tabulce",
          "Nelze ho reprezentovat"
        ],
        correct: 0,
        explanation: "M:N se rozkládá na dvě 1:N přes asociativní (vazební) tabulku."
      },
      {
        q: "Co je primární klíč?",
        options: [
          "Atribut nebo množina atributů, která jednoznačně identifikuje řádek tabulky",
          "První sloupec v tabulce",
          "Heslo k databázi",
          "Odkaz na jinou tabulku"
        ],
        correct: 0,
        explanation: "Primární klíč je unikátní, NOT NULL a jednoznačně určuje řádek."
      },
      {
        q: "Co je entita v E-R modelu?",
        options: [
          "Objekt reálného světa, který chceme modelovat (např. Zákazník, Produkt)",
          "Sloupec tabulky",
          "Cizí klíč",
          "Vztah mezi tabulkami"
        ],
        correct: 0,
        explanation: "Entita má atributy a tvoří základ E-R modelu; je reprezentována tabulkou."
      },
      {
        q: "Co je slabá entita?",
        options: [
          "Entita, jejíž identita závisí na jiné (silné) entitě",
          "Entita s málo atributy",
          "Entita, která se zřídka mění",
          "Entita bez vazeb"
        ],
        correct: 0,
        explanation: "Slabá entita nemá vlastní klíč a identifikuje se přes vazbu na silnou entitu."
      },
      {
        q: "Co je první normální forma (1NF)?",
        options: [
          "Všechny atributy jsou atomické (nedělitelné), bez opakujících se skupin",
          "Tabulka má primární klíč",
          "Žádné duplicity",
          "Maximálně 3 sloupce"
        ],
        correct: 0,
        explanation: "1NF zakazuje vícenásobné/strukturované hodnoty v jedné buňce."
      },
      {
        q: "Co je BCNF (Boyce-Codd NF)?",
        options: [
          "Každá netriviální funkční závislost má levou stranu superklíč",
          "Stejné jako 3NF",
          "Tabulka s indexem",
          "Forma bez NULL hodnot"
        ],
        correct: 0,
        explanation: "BCNF je silnější verze 3NF; eliminuje všechny anomálie z funkčních závislostí."
      },
      {
        q: "Co je funkční závislost A → B?",
        options: [
          "Hodnota atributu A jednoznačně určuje hodnotu atributu B",
          "A je funkce volaná z B",
          "B je závislé na velikosti A",
          "A je primární klíč"
        ],
        correct: 0,
        explanation: "FD A→B: dva řádky se stejnou hodnotou A mají vždy stejnou B."
      },
      {
        q: "Co je vztah ISA (generalizace) v E-R?",
        options: [
          "Specializace/generalizace mezi entitami (např. Student ISA Osoba)",
          "Vztah identifikace",
          "Vztah agregace",
          "Atribut typu boolean"
        ],
        correct: 0,
        explanation: "ISA vyjadřuje hierarchii – podtyp dědí atributy nadtypu."
      },
      {
        q: "Co znamená kardinalita M:N?",
        options: [
          "Více entit prvního typu se vztahuje k více entitám druhého typu",
          "Vždy přesně 1:1",
          "Nepovolený vztah",
          "Volitelný vztah"
        ],
        correct: 0,
        explanation: "M:N (např. student-předmět): student má více předmětů, předmět má více studentů."
      }
    ]
  },
  {
    id: 10,
    title: "Matematické principy počítačové grafiky",
    description: "Transformace, homogenní souřadnice, matice, projekce, kamera.",
    questions: [
      {
        q: "Proč se v 3D grafice používají homogenní souřadnice?",
        options: [
          "Umožňují vyjádřit translaci, rotaci i projekci jednou maticí (násobením)",
          "Jsou rychlejší než kartézské",
          "Šetří paměť",
          "Vyžaduje to GPU"
        ],
        correct: 0,
        explanation: "V 4D homogenních souřadnicích lze afinní transformace a perspektivu reprezentovat jediným násobením matic."
      },
      {
        q: "Která transformace mění tvar (např. natažení) objektu?",
        options: [
          "Scaling (změna měřítka)",
          "Translace",
          "Rotace",
          "Identita"
        ],
        correct: 0,
        explanation: "Scaling násobí souřadnice koeficienty – mění velikost a může deformovat (anizotropní)."
      },
      {
        q: "Co je viewing frustum (zobrazovací objem)?",
        options: [
          "Komolý jehlan reprezentující viditelný prostor kamery v perspektivní projekci",
          "Bounding box objektu",
          "Region textur",
          "Stínový volume"
        ],
        correct: 0,
        explanation: "Frustum vymezuje, co kamera vidí; vše mimo je oříznuto (clipping)."
      },
      {
        q: "Co dělá ořezávání (clipping)?",
        options: [
          "Eliminuje části primitiv mimo zobrazovací objem",
          "Maže celé objekty",
          "Komprimuje texturu",
          "Vyhlazuje hrany"
        ],
        correct: 0,
        explanation: "Clipping ořezává geometrii proti hranicím viewing volume před rasterizací."
      },
      {
        q: "V jakém pořadí se obvykle skládají transformace pro vrchol (vertex)?",
        options: [
          "Model → View → Projection",
          "Projection → View → Model",
          "View → Model → Projection",
          "Pořadí nehraje roli"
        ],
        correct: 0,
        explanation: "MVP pipeline: model do světa, do prostoru kamery, do clip space."
      },
      {
        q: "Co reprezentuje rotace v 3D pomocí kvaternionů?",
        options: [
          "Kompaktní reprezentace rotace bez problému gimbal lock",
          "Translaci o vektor",
          "Změnu měřítka",
          "Projekci do 2D"
        ],
        correct: 0,
        explanation: "Kvaterniony (4 čísla) nahrazují Eulerovy úhly – stabilní interpolace a žádný gimbal lock."
      },
      {
        q: "Jaký je rozdíl mezi perspektivní a ortografickou projekcí?",
        options: [
          "Perspektivní zmenšuje vzdálené objekty, ortografická zachovává paralelní linie",
          "Perspektivní je v 2D, ortografická v 3D",
          "Není rozdíl",
          "Perspektivní je rychlejší"
        ],
        correct: 0,
        explanation: "Perspektiva napodobuje lidský pohled; ortografická zachovává paralelnost (CAD, plány)."
      },
      {
        q: "Co je transformační matice v homogenních souřadnicích pro 3D?",
        options: [
          "Matice 4×4",
          "Matice 3×3",
          "Matice 2×2",
          "Vektor o 4 prvcích"
        ],
        correct: 0,
        explanation: "Matice 4×4 kombinuje rotaci, škálování (3×3 podblok) a translaci."
      },
      {
        q: "Co je translace bodu (x,y,z) o vektor (a,b,c)?",
        options: [
          "Nový bod (x+a, y+b, z+c)",
          "Násobení skalárem",
          "Otáčení kolem počátku",
          "Změna jednotek"
        ],
        correct: 0,
        explanation: "Translace přičítá vektor; v homogenních souřadnicích se vyjádří maticí 4×4."
      },
      {
        q: "Co je near a far plane kamery?",
        options: [
          "Bližší a vzdálenější ořezová rovina viewing frustum",
          "Vzdálenost dvou objektů",
          "Hloubka stínu",
          "Velikost textury"
        ],
        correct: 0,
        explanation: "Near/far definují rozsah hloubky kamery; objekty mimo nejsou vykresleny."
      },
      {
        q: "Co je determinant matice rotace?",
        options: [
          "Vždy +1 (zachovává orientaci a délky)",
          "Vždy 0",
          "Závisí na úhlu",
          "Vždy -1"
        ],
        correct: 0,
        explanation: "Rotace je ortonormální transformace; determinant = 1, transponovaná = inverzní."
      },
      {
        q: "Co znamená NDC (Normalized Device Coordinates)?",
        options: [
          "Souřadnicový systém po projekci v rozsahu [-1,1] v každé ose",
          "Pixelové souřadnice obrazovky",
          "Souřadnice v modelu",
          "Souřadnice světa"
        ],
        correct: 0,
        explanation: "Po projekci a perspektivním dělení leží vrcholy v NDC; pak se mapují na obrazovku."
      }
    ]
  },
  {
    id: 11,
    title: "Inversion of Control (IoC)",
    description: "Principy IoC, Dependency Injection, nástroje.",
    questions: [
      {
        q: "Co je princip Inversion of Control?",
        options: [
          "Obrácení toku řízení: framework volá kód aplikace, ne naopak",
          "Inverze podmínek v if-else",
          "Reverze pořadí operací",
          "Negace logických hodnot"
        ],
        correct: 0,
        explanation: "U IoC řídí vyšší vrstva (framework, kontejner) volání aplikačního kódu, který implementuje jen rozhraní."
      },
      {
        q: "Jaký je vztah mezi IoC a Dependency Injection?",
        options: [
          "DI je konkrétní technika implementace IoC – injektování závislostí zvenčí",
          "Jsou to synonyma",
          "Nemají spolu nic společného",
          "DI je opakem IoC"
        ],
        correct: 0,
        explanation: "IoC je obecný princip; DI je jeho aplikace pro správu závislostí."
      },
      {
        q: "Co je IoC kontejner?",
        options: [
          "Komponenta, která vytváří objekty a vstřikuje jejich závislosti dle konfigurace",
          "Docker container",
          "Datová struktura typu fronta",
          "Sandbox pro běh kódu"
        ],
        correct: 0,
        explanation: "IoC kontejner (Spring, Guice, NestJS) spravuje životní cyklus a wiring objektů."
      },
      {
        q: "Které typy DI existují?",
        options: [
          "Constructor, setter (property) a method (interface) injection",
          "Pouze konstruktorová",
          "Pouze přes globální proměnné",
          "Pouze reflection"
        ],
        correct: 0,
        explanation: "Tři běžné formy: konstruktorem, setterem (vlastností), nebo metodou rozhraní."
      },
      {
        q: "Jaká je hlavní výhoda DI?",
        options: [
          "Volnější vazby mezi komponentami a lepší testovatelnost (mockování)",
          "Rychlejší běh programu",
          "Menší velikost binárky",
          "Automatická paralelizace"
        ],
        correct: 0,
        explanation: "DI usnadňuje výměnu implementací a izolaci komponent v testech."
      },
      {
        q: "Co je Service Locator?",
        options: [
          "Alternativa k DI – centrální registr, ze kterého si komponenty vyžadují závislosti",
          "Síťový lokátor",
          "Routovací mechanismus",
          "GPS služba"
        ],
        correct: 0,
        explanation: "Service Locator skrývá vyhledávání závislostí; je považován za horší než DI (skryté vazby)."
      },
      {
        q: "Který návrhový vzor je úzce spjat s IoC?",
        options: [
          "Hollywood Principle ('Don't call us, we'll call you')",
          "Singleton",
          "Visitor",
          "Iterator"
        ],
        correct: 0,
        explanation: "Hollywood Principle vyjadřuje IoC: framework volá kód, ne naopak."
      },
      {
        q: "Které IoC nástroje patří mezi známé v Javě?",
        options: [
          "Spring, Google Guice, CDI",
          "Maven, Gradle",
          "JUnit, Mockito",
          "Hibernate, JPA"
        ],
        correct: 0,
        explanation: "Spring Framework je nejpoužívanější IoC/DI kontejner v Java ekosystému."
      },
      {
        q: "Co je životní cyklus 'singleton' v IoC kontejneru?",
        options: [
          "Kontejner vytvoří instanci jednou a sdílí ji všem požadavkům",
          "Vytvoří novou instanci při každém požadavku",
          "Instance žije jen v rámci HTTP požadavku",
          "Instance se nikdy nevytvoří"
        ],
        correct: 0,
        explanation: "Singleton scope: jedna sdílená instance v rámci kontejneru."
      },
      {
        q: "Jaká je nevýhoda DI?",
        options: [
          "Vyšší složitost konfigurace a obtížnější ladění závislostí",
          "Vyžaduje speciální hardware",
          "Nelze testovat",
          "Vyžaduje databázi"
        ],
        correct: 0,
        explanation: "DI přidává vrstvu abstrakce; chyby v konfiguraci se hůře hledají."
      },
      {
        q: "Co znamená 'wiring' v IoC?",
        options: [
          "Propojování objektů a jejich závislostí v kontejneru",
          "Síťové připojení",
          "Hardware zapojení",
          "Routování požadavků"
        ],
        correct: 0,
        explanation: "Wiring = nastavení vazeb mezi komponentami (XML, anotace, kód)."
      },
      {
        q: "Co znamená princip 'Dependency Inversion'?",
        options: [
          "Vyšší vrstvy nezávisí na nižších, obě závisí na abstrakcích",
          "Změna pořadí závislostí",
          "Inverze grafu závislostí",
          "Eliminace všech závislostí"
        ],
        correct: 0,
        explanation: "Dependency Inversion je SOLID princip; DI je technika jeho realizace."
      }
    ]
  },
  {
    id: 12,
    title: "RESTful webové služby a mikroslužby",
    description: "REST, mikroslužby, bezpečnost, SOAP.",
    questions: [
      {
        q: "Které tvrzení o REST platí?",
        options: [
          "Je bezstavový a využívá HTTP metody (GET/POST/PUT/DELETE) nad zdroji",
          "Vyžaduje XML payload",
          "Je založen na sezeních na serveru",
          "Funguje pouze přes TCP, ne HTTP"
        ],
        correct: 0,
        explanation: "REST: stateless, uniform interface, resource-based, využívá HTTP slovesa a stavové kódy."
      },
      {
        q: "Jaký je hlavní rozdíl mezi REST a SOAP?",
        options: [
          "REST využívá HTTP/JSON a je odlehčený, SOAP je protokol s XML obálkou a striktními standardy",
          "REST je rychlejší jen na Windows",
          "SOAP nepodporuje šifrování",
          "REST používá výhradně POST"
        ],
        correct: 0,
        explanation: "SOAP definuje XML envelope, WS-* standardy; REST je architektonický styl nad HTTP."
      },
      {
        q: "Co charakterizuje mikroslužbovou architekturu?",
        options: [
          "Aplikace složená z malých nezávislých služeb komunikujících přes síť",
          "Jeden velký monolit běžící v jednom procesu",
          "Architektura bez databáze",
          "Sdílená databáze pro všechny moduly"
        ],
        correct: 0,
        explanation: "Mikroslužby: samostatně nasaditelné, vlastněné jedním týmem, vlastní data store."
      },
      {
        q: "Co je idempotentní HTTP metoda?",
        options: [
          "Opakované volání má stejný efekt jako jedno volání (GET, PUT, DELETE)",
          "Vždy vrací 200 OK",
          "Nemůže být cachována",
          "Vyžaduje autentizaci"
        ],
        correct: 0,
        explanation: "GET, PUT, DELETE, HEAD jsou idempotentní; POST obecně není."
      },
      {
        q: "Který mechanismus zabezpečení API se nejčastěji používá u REST?",
        options: [
          "OAuth 2.0 / JWT tokeny v Authorization hlavičce",
          "Cookies s plain heslem",
          "FTP autentizace",
          "WS-Security"
        ],
        correct: 0,
        explanation: "REST API typicky používá Bearer tokeny (JWT), OAuth 2.0 flow pro autorizaci."
      },
      {
        q: "Která HTTP metoda se používá pro vytvoření nového zdroje?",
        options: [
          "POST",
          "GET",
          "DELETE",
          "OPTIONS"
        ],
        correct: 0,
        explanation: "POST se typicky používá pro vytvoření; PUT pro úplnou náhradu existujícího zdroje."
      },
      {
        q: "Co znamená stavový kód HTTP 404?",
        options: [
          "Not Found – zdroj nebyl nalezen",
          "OK",
          "Internal Server Error",
          "Unauthorized"
        ],
        correct: 0,
        explanation: "4xx jsou chyby klienta; 404 znamená neexistující URL/zdroj."
      },
      {
        q: "Co je HATEOAS v REST?",
        options: [
          "Hypermedia jako motor stavu aplikace – odpovědi obsahují odkazy na další akce",
          "Hashovací algoritmus",
          "Type safety pro REST",
          "Cachovací mechanismus"
        ],
        correct: 0,
        explanation: "HATEOAS umožňuje klientovi navigovat API přes odkazy v odpovědi (úroveň 3 Richardson Maturity)."
      },
      {
        q: "Co je gateway v mikroslužbové architektuře?",
        options: [
          "Vstupní bod, který směruje požadavky na příslušné mikroslužby",
          "Databázová brána",
          "Firewall",
          "Webový prohlížeč"
        ],
        correct: 0,
        explanation: "API Gateway agreguje volání, řeší autentizaci, rate limiting, routing."
      },
      {
        q: "Co je service discovery v mikroslužbách?",
        options: [
          "Mechanismus, kterým služby najdou síťové adresy ostatních služeb (např. Eureka, Consul)",
          "Vyhledávání služeb v databázi",
          "DNS rezolver",
          "Detekce chyb služeb"
        ],
        correct: 0,
        explanation: "Service discovery udržuje registr běžících instancí; klient získá aktuální adresu."
      },
      {
        q: "Co je circuit breaker pattern?",
        options: [
          "Vzor, který zabraňuje opakovaným voláním selhávající služby",
          "Bezpečnostní zařízení v datacentru",
          "Detekce DDoS útoků",
          "Komprese odpovědí"
        ],
        correct: 0,
        explanation: "Circuit breaker (Hystrix): po opakovaných selháních se 'otevře' a falešně rychle selhává."
      },
      {
        q: "Co je SOAP?",
        options: [
          "Simple Object Access Protocol – XML protokol pro výměnu strukturovaných dat",
          "Skriptovací jazyk",
          "Bezpečnostní protokol",
          "Šifrovací algoritmus"
        ],
        correct: 0,
        explanation: "SOAP používá XML envelope; nadstavuje WS-Security, WS-Addressing aj."
      }
    ]
  },
  {
    id: 13,
    title: "Rasterizace",
    description: "Rastr, pixel, barevné modely, algoritmy rasterizace, vyplňování.",
    questions: [
      {
        q: "Co je pixel?",
        options: [
          "Nejmenší adresovatelný prvek rastrového obrazu",
          "Vektorová křivka",
          "Stránka paměti",
          "Vrchol polygonu"
        ],
        correct: 0,
        explanation: "Picture element – elementární bod obrazu s barvou/intenzitou."
      },
      {
        q: "Který algoritmus rasterizuje úsečku pomocí inkrementálních celočíselných výpočtů?",
        options: [
          "Bresenhamův algoritmus",
          "Cohen-Sutherland",
          "Phong",
          "Quicksort"
        ],
        correct: 0,
        explanation: "Bresenham (1965) kreslí úsečku bez násobení a dělení, jen sčítáním."
      },
      {
        q: "Který barevný model je aditivní a používá se v monitorech?",
        options: [
          "RGB",
          "CMYK",
          "HSV",
          "Lab"
        ],
        correct: 0,
        explanation: "RGB skládá barvu z červené, zelené a modré složky (aditivní míchání světla)."
      },
      {
        q: "Co je seed fill algoritmus?",
        options: [
          "Objektově orientované vyplňování oblasti šířením z počátečního pixelu",
          "Rasterizace kružnice",
          "Generování náhodných čísel",
          "Anti-aliasing"
        ],
        correct: 0,
        explanation: "Seed fill (flood fill) začne v zadaném bodě a rekurzivně vyplňuje sousední pixely stejné barvy."
      },
      {
        q: "Jaký je rozdíl mezi obrazově orientovanou a objektově orientovanou rasterizací výplně?",
        options: [
          "Obrazově orientovaná pracuje po pixelech rastru, objektově dle hranice tvaru",
          "Obrazově je rychlejší vždy",
          "Objektově orientovaná nepoužívá GPU",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "Scan-line (obrazová) prochází řádky rastru; objektová (seed/flood fill) vychází z geometrie objektu."
      },
      {
        q: "Který algoritmus rasterizuje kružnici?",
        options: [
          "Bresenhamův algoritmus pro kružnici (midpoint circle)",
          "Cohen-Sutherland",
          "Phong",
          "DDA"
        ],
        correct: 0,
        explanation: "Midpoint circle algorithm využívá symetrie kružnice a celočíselné inkrementy."
      },
      {
        q: "Co je anti-aliasing?",
        options: [
          "Techniky pro vyhlazení zubatých hran (např. SSAA, MSAA, FXAA)",
          "Zvýšení rozlišení",
          "Komprese obrazu",
          "Detekce hran"
        ],
        correct: 0,
        explanation: "Anti-aliasing snižuje aliasing přivzorkováním nebo filtrací hran."
      },
      {
        q: "Který barevný model je subtraktivní a používá se v tisku?",
        options: [
          "CMYK",
          "RGB",
          "HSV",
          "YUV"
        ],
        correct: 0,
        explanation: "CMYK: Cyan, Magenta, Yellow, blacK – odečítají barvy z bílého papíru."
      },
      {
        q: "Co reprezentuje model HSV?",
        options: [
          "Hue (odstín), Saturation (sytost), Value (jas) – intuitivní pro člověka",
          "Hardware Standard Video",
          "High Speed Vector",
          "Histogram, Saturation, Volume"
        ],
        correct: 0,
        explanation: "HSV/HSB je vhodný pro výběr barev v UI; odděluje odstín od jasu."
      },
      {
        q: "Co je DDA algoritmus?",
        options: [
          "Digital Differential Analyzer – rasterizace úsečky inkrementálním krokem",
          "Diskrétní digitální analýza",
          "Dynamický datový algoritmus",
          "Algoritmus 3D triangulace"
        ],
        correct: 0,
        explanation: "DDA inkrementuje x a y dle směrnice; je jednodušší ale pomalejší než Bresenham (užívá floats)."
      },
      {
        q: "Co je scan-line algoritmus pro vyplňování polygonu?",
        options: [
          "Prochází obraz po řádcích a vyplňuje úseky mezi průsečíky hran",
          "Vyplňuje od náhodného bodu",
          "Rasterizuje pouze obrys",
          "Algoritmus pro stínování"
        ],
        correct: 0,
        explanation: "Scan-line fill: pro každý řádek se najdou průsečíky s hranami a páry se vyplní."
      },
      {
        q: "Co je rozlišení (resolution) rastrového obrazu?",
        options: [
          "Počet pixelů v šířce a výšce obrazu",
          "Počet barev na pixel",
          "Velikost souboru",
          "Rychlost zobrazení"
        ],
        correct: 0,
        explanation: "Rozlišení např. 1920×1080 určuje detail; bit depth určuje počet barev."
      }
    ]
  },
  {
    id: 14,
    title: "Zobrazení prostorové scény",
    description: "Viditelnost, osvětlení, stíny, vertex/index buffer, zobrazovací řetězec, shadery.",
    questions: [
      {
        q: "Který algoritmus řeší viditelnost na úrovni pixelu pomocí hloubkové paměti?",
        options: [
          "Z-buffer",
          "BSP strom",
          "Painter's algorithm",
          "Quicksort"
        ],
        correct: 0,
        explanation: "Z-buffer ukládá hloubku každého pixelu; při zápisu kontroluje, zda nový fragment je blíž."
      },
      {
        q: "K čemu slouží vertex shader?",
        options: [
          "Transformuje vrcholy (pozice, normály) v programovatelném řetězci",
          "Vyplňuje plochy barvou",
          "Maže neviditelné objekty",
          "Skládá obraz z více vrstev"
        ],
        correct: 0,
        explanation: "Vertex shader běží na každém vrcholu – aplikuje MVP transformace, light setup."
      },
      {
        q: "K čemu slouží fragment (pixel) shader?",
        options: [
          "Počítá výslednou barvu každého fragmentu/pixelu",
          "Generuje geometrii",
          "Provádí culling",
          "Ukládá texturu"
        ],
        correct: 0,
        explanation: "Fragment shader určuje barvu pixelu (osvětlení, texturování, postprocessing)."
      },
      {
        q: "Co je index buffer?",
        options: [
          "Buffer indexů odkazujících na vrcholy ve vertex bufferu – umožňuje sdílení vrcholů",
          "Index databázových řádků",
          "Buffer pro pixely",
          "Cache textur"
        ],
        correct: 0,
        explanation: "Index buffer šetří paměť tím, že vrchol sdílený mezi trojúhelníky se ukládá jednou."
      },
      {
        q: "Která metoda počítá osvětlení po vrcholech a interpoluje barvu?",
        options: [
          "Gouraudovo stínování",
          "Phongovo stínování",
          "Flat shading",
          "Ray tracing"
        ],
        correct: 0,
        explanation: "Gouraud: osvětlení na vrcholech + lineární interpolace barvy přes plochu."
      },
      {
        q: "Co je Phongovo stínování?",
        options: [
          "Interpolace normál mezi vrcholy a výpočet osvětlení na každém pixelu",
          "Osvětlení pouze na vrcholech",
          "Flat shading",
          "Ray tracing"
        ],
        correct: 0,
        explanation: "Phong shading dává kvalitnější výsledky než Gouraud (zejména spekulární odlesky)."
      },
      {
        q: "Co je vertex buffer object (VBO)?",
        options: [
          "Paměťový buffer na GPU obsahující data vrcholů (pozice, normály, UV)",
          "Buffer textur",
          "Frame buffer",
          "Buffer zvukových vzorků"
        ],
        correct: 0,
        explanation: "VBO uloží vertex data do GPU paměti pro rychlý přístup při renderingu."
      },
      {
        q: "Co je back-face culling?",
        options: [
          "Vyřazení polygonů odvrácených od kamery z rasterizace",
          "Odstranění objektů za kamerou",
          "Komprese textur",
          "Vyřazení šumu"
        ],
        correct: 0,
        explanation: "Back-face culling šetří výkon: polygony obrácené od kamery se nevykreslují (pokud nejsou průhledné)."
      },
      {
        q: "Co je shadow mapping?",
        options: [
          "Generování stínů pomocí mapy hloubek z pohledu světla",
          "Mapování textur",
          "Mapování stínů na povrch",
          "Optimalizace osvětlení"
        ],
        correct: 0,
        explanation: "Shadow map: renderuje hloubku scény z pohledu světla; pixel je ve stínu, je-li dál než hodnota v mapě."
      },
      {
        q: "Co je ray tracing?",
        options: [
          "Sledování paprsků od kamery skrz pixely, jejich průniky s objekty a výpočet osvětlení",
          "Rastrový algoritmus pro úsečky",
          "2D vykreslování čar",
          "Komprese 3D modelů"
        ],
        correct: 0,
        explanation: "Ray tracing produkuje fyzikálně realistické obrazy (odrazy, lomy, stíny), je výpočetně náročné."
      },
      {
        q: "Co je painter's algorithm pro viditelnost?",
        options: [
          "Vykreslování polygonů od nejvzdálenějšího po nejbližší přemalováním",
          "Stínování ploch",
          "Pixelová filtrace",
          "Generování textur"
        ],
        correct: 0,
        explanation: "Painter: seřadí polygony dle hloubky a vykreslí v pořadí. Selhává u prokládajících se polygonů."
      },
      {
        q: "Co je grafický zobrazovací řetězec (graphics pipeline)?",
        options: [
          "Posloupnost fází: vertex processing, primitive assembly, rasterizace, fragment processing",
          "Pořadí GPU karet",
          "Pořadí monitorů",
          "Síťový tok"
        ],
        correct: 0,
        explanation: "Pipeline: vertices → transformace → rasterizace → pixely → framebuffer."
      }
    ]
  },
  {
    id: 15,
    title: "Obrazová data",
    description: "Vzorkování, kvantování, aliasing, filtrace, histogram, segmentace, komprese.",
    questions: [
      {
        q: "Co je aliasing v digitálním obrazu?",
        options: [
          "Artefakt vznikající nedostatečným vzorkováním (porušení Nyquistova teorému)",
          "Šum z kamery",
          "Komprese obrazu",
          "Zvýraznění hran"
        ],
        correct: 0,
        explanation: "Aliasing: vyšší frekvence se 'přeloží' do nižších – zubaté hrany, moaré."
      },
      {
        q: "K čemu slouží histogram obrazu?",
        options: [
          "Zobrazuje rozložení četností intenzit/barev v obraze",
          "Komprimuje obraz",
          "Detekuje obličeje",
          "Generuje textury"
        ],
        correct: 0,
        explanation: "Histogram pomáhá analyzovat expozici, kontrast; využití: ekvalizace, prahování."
      },
      {
        q: "Který formát je bezztrátový?",
        options: [
          "PNG",
          "JPEG",
          "WebP (lossy mód)",
          "MP3"
        ],
        correct: 0,
        explanation: "PNG používá DEFLATE bezztrátovou kompresi; JPEG je ztrátový."
      },
      {
        q: "Co dělá Gaussův filtr?",
        options: [
          "Rozmazává obraz konvolucí s Gaussovým jádrem (low-pass)",
          "Detekuje hrany",
          "Zvyšuje rozlišení",
          "Mění barvu na šedou"
        ],
        correct: 0,
        explanation: "Gaussův filtr potlačuje vysoké frekvence (šum, detail) váženým průměrem okolí."
      },
      {
        q: "Co je segmentace obrazu?",
        options: [
          "Rozdělení obrazu na regiony s podobnými vlastnostmi (objekty, pozadí)",
          "Komprese obrazu",
          "Otáčení obrazu",
          "Změna barevné palety"
        ],
        correct: 0,
        explanation: "Segmentace seskupuje pixely (prahování, region growing, watershed, neuronové sítě)."
      },
      {
        q: "Co je kvantování v digitalizaci obrazu?",
        options: [
          "Převod spojité jasové hodnoty na omezený počet diskrétních úrovní",
          "Vzorkování v prostoru",
          "Komprese obrazu",
          "Detekce hran"
        ],
        correct: 0,
        explanation: "Kvantování diskretizuje hodnoty; 8-bit dává 256 úrovní jasu na kanál."
      },
      {
        q: "Co říká Nyquistův teorém?",
        options: [
          "Vzorkovací frekvence musí být alespoň dvojnásobkem nejvyšší frekvence signálu",
          "Obraz musí mít sudý počet pixelů",
          "Komprese ztrácí 50% informace",
          "Signál nemůže být obnoven"
        ],
        correct: 0,
        explanation: "Nyquist: f_s ≥ 2·f_max, jinak vzniká aliasing."
      },
      {
        q: "Který filtr detekuje hrany?",
        options: [
          "Sobelův operátor",
          "Gaussův filtr",
          "Mediánový filtr",
          "Box filter"
        ],
        correct: 0,
        explanation: "Sobel počítá gradient intenzity; alternativy Prewitt, Canny edge detector."
      },
      {
        q: "Co dělá mediánový filtr?",
        options: [
          "Nahrazuje hodnotu pixelu mediánem hodnot z okolí – odstraní impulzní šum",
          "Průměrování okolí",
          "Detekce hran",
          "Zvyšuje kontrast"
        ],
        correct: 0,
        explanation: "Mediánový filtr je robustní vůči 'salt and pepper' šumu; neostří hrany jako průměrování."
      },
      {
        q: "Která komprese je ztrátová?",
        options: [
          "JPEG",
          "PNG",
          "BMP",
          "GIF"
        ],
        correct: 0,
        explanation: "JPEG odstraňuje vysoké frekvence (DCT, kvantování) – nelze přesně rekonstruovat původní obraz."
      },
      {
        q: "Co je ekvalizace histogramu?",
        options: [
          "Úprava histogramu pro rovnoměrnější rozložení intenzit a vyšší kontrast",
          "Komprese histogramu",
          "Detekce módu histogramu",
          "Inverze barev"
        ],
        correct: 0,
        explanation: "Equalization roztáhne histogram, často zvýší kontrast tmavých nebo světlých scén."
      },
      {
        q: "Co je konvoluce v zpracování obrazu?",
        options: [
          "Operace, která aplikuje jádro (kernel) na okolí každého pixelu",
          "Šifrování obrazu",
          "Translace obrazu",
          "Komprese souboru"
        ],
        correct: 0,
        explanation: "Konvoluce s jádrem implementuje filtry (rozostření, zaostření, edge detection)."
      }
    ]
  },
  {
    id: 16,
    title: "Webové aplikace",
    description: "Architektura, klient-server, routování, stav, autentizace, bezpečnost.",
    questions: [
      {
        q: "Co je stateless HTTP?",
        options: [
          "Každý požadavek je nezávislý, server si nepamatuje stav mezi nimi",
          "Server uchovává session pro každého klienta",
          "Klient si nepamatuje cookies",
          "Spojení je vždy otevřené"
        ],
        correct: 0,
        explanation: "HTTP je bezstavový; stav se simuluje cookies, sessions, tokeny."
      },
      {
        q: "Jaký je rozdíl mezi autentizací a autorizací?",
        options: [
          "Autentizace ověřuje identitu, autorizace ověřuje oprávnění k akci",
          "Jsou to synonyma",
          "Autorizace je první krok, autentizace druhý",
          "Autentizace funguje jen u OAuth"
        ],
        correct: 0,
        explanation: "Authn = kdo jsi; authz = co smíš dělat."
      },
      {
        q: "Co je CSRF?",
        options: [
          "Cross-Site Request Forgery – útok, kdy útočník přiměje prohlížeč poslat ověřený požadavek jménem uživatele",
          "Cross-Site Resource Format",
          "Bezpečnostní hlavička",
          "Šifrovací algoritmus"
        ],
        correct: 0,
        explanation: "CSRF zneužívá důvěru serveru v prohlížeč; obrana: anti-CSRF token, SameSite cookies."
      },
      {
        q: "Co je SPA (Single Page Application)?",
        options: [
          "Webová aplikace, která načte jeden HTML dokument a obsah aktualizuje JavaScriptem",
          "Stránka bez JavaScriptu",
          "Stránka přístupná z jediné domény",
          "Aplikace s jedním koncovým bodem API"
        ],
        correct: 0,
        explanation: "SPA mění obsah dynamicky bez navigace; routování řeší klient (React, Vue, Angular)."
      },
      {
        q: "Co znamená asynchronní zpracování (AJAX/fetch)?",
        options: [
          "Volání serveru bez blokování UI – výsledek zpracován callbackem/Promisem",
          "Synchronizovaný request",
          "Serverová strana zpracovává paralelně",
          "Cachování odpovědí"
        ],
        correct: 0,
        explanation: "AJAX/fetch umožňuje neblokující HTTP komunikaci v JS, navracení Promise."
      },
      {
        q: "Co je XSS (Cross-Site Scripting)?",
        options: [
          "Útok vkládající škodlivý JavaScript do stránky, který se spustí u jiných uživatelů",
          "Útok přes SQL injection",
          "Útok na cookies",
          "DOS útok"
        ],
        correct: 0,
        explanation: "XSS: nedostatečné escapování vstupů; obrana CSP, escape HTML, sanitizace."
      },
      {
        q: "Co je SQL injection?",
        options: [
          "Útok, kdy útočník vloží zhoubný SQL kód do vstupu aplikace",
          "Optimalizace SQL dotazů",
          "Nahrávání dat do DB",
          "Útok na server přes port 1433"
        ],
        correct: 0,
        explanation: "Obrana: prepared statements (parametrizované dotazy), ORM, validace vstupu."
      },
      {
        q: "Co je cookie?",
        options: [
          "Malý kus dat uložený prohlížečem a odesílaný v hlavičce HTTP požadavku",
          "JavaScript objekt",
          "Šifrovaný token",
          "Soubor s konfigurací"
        ],
        correct: 0,
        explanation: "Cookies slouží k udržení session, preferencí; atributy HttpOnly, Secure, SameSite zlepšují bezpečnost."
      },
      {
        q: "Co je CORS?",
        options: [
          "Cross-Origin Resource Sharing – mechanismus povolující požadavky napříč doménami",
          "Protokol pro chat",
          "Šifrovací standard",
          "Komprese odpovědí"
        ],
        correct: 0,
        explanation: "CORS hlavičky (Access-Control-Allow-Origin) říkají prohlížeči, zda smí přijmout odpověď."
      },
      {
        q: "Co je SSR (Server-Side Rendering)?",
        options: [
          "Server vygeneruje HTML stránky a pošle ji klientovi",
          "Klient renderuje vše JavaScriptem",
          "Rendering grafiky na serveru",
          "Server běží jako služba"
        ],
        correct: 0,
        explanation: "SSR zlepšuje SEO a první načtení; CSR (client-side rendering) je výchozí u SPA."
      },
      {
        q: "Co je WebSocket?",
        options: [
          "Plně duplexní obousměrný protokol nad TCP pro real-time komunikaci",
          "Sockety pro web servery",
          "HTTP polling",
          "REST endpoint"
        ],
        correct: 0,
        explanation: "WebSocket udržuje otevřené spojení (chat, notifikace, hry); upgrade z HTTP."
      },
      {
        q: "Co je session v webové aplikaci?",
        options: [
          "Server-side mechanismus uchování stavu uživatele mezi požadavky",
          "Připojení k databázi",
          "Připojení k serveru",
          "Identifikátor formuláře"
        ],
        correct: 0,
        explanation: "Session je obvykle identifikována cookie s session ID; data uložena na serveru."
      }
    ]
  },
  {
    id: 17,
    title: "Architektonické a návrhové vzory",
    description: "SOA, MVC, MVP, MVT, MVVM, Observer.",
    questions: [
      {
        q: "Jaká je hlavní myšlenka vzoru MVC?",
        options: [
          "Oddělení dat (Model), prezentace (View) a logiky řízení (Controller)",
          "Jeden objekt zajišťuje vše",
          "Vždy paralelní zpracování",
          "Klient-server bez vrstev"
        ],
        correct: 0,
        explanation: "MVC izoluje doménová data, vykreslování a aplikační logiku; usnadňuje testování a údržbu."
      },
      {
        q: "Co odlišuje MVVM od MVC?",
        options: [
          "Ve VM probíhá obousměrný data-binding mezi View a ViewModelem",
          "MVVM nemá Model",
          "MVVM se používá jen na serveru",
          "MVVM neumožňuje testování"
        ],
        correct: 0,
        explanation: "MVVM (WPF, Angular, Vue) využívá binding; ViewModel adaptuje Model pro View."
      },
      {
        q: "K čemu slouží návrhový vzor Observer?",
        options: [
          "Umožní objektům přihlásit se k odběru událostí (změn) jiného objektu",
          "Sleduje výkon aplikace",
          "Loguje výjimky",
          "Šifruje komunikaci"
        ],
        correct: 0,
        explanation: "Observer/Subject: subjekt notifikuje pozorovatele při změně stavu (publish-subscribe)."
      },
      {
        q: "Co je SOA (Service Oriented Architecture)?",
        options: [
          "Architektura postavená na nezávislých službách komunikujících přes standardizovaná rozhraní",
          "Monolitická aplikace",
          "Databázový vzor",
          "Šablona pro UML"
        ],
        correct: 0,
        explanation: "SOA: aplikace složená z volně vázaných služeb (často SOAP/REST), znovupoužitelnost, interoperabilita."
      },
      {
        q: "Jaký je vztah mezi mikroslužbami a SOA?",
        options: [
          "Mikroslužby jsou modernější jemnozrnný styl SOA s decentralizací",
          "Jsou to úplně nesouvisející koncepty",
          "Mikroslužby používají WSDL",
          "SOA je podmnožinou mikroslužeb"
        ],
        correct: 0,
        explanation: "Mikroslužby navazují na SOA, ale jsou menší, samostatné, používají REST/messaging místo ESB."
      },
      {
        q: "K čemu slouží návrhový vzor Singleton?",
        options: [
          "Zajištění, že třída má právě jednu instanci a poskytuje k ní globální přístup",
          "Vytváření kopií objektu",
          "Iterace nad kolekcí",
          "Pozorování změn"
        ],
        correct: 0,
        explanation: "Singleton omezuje konstruktor a poskytuje statickou metodu getInstance()."
      },
      {
        q: "K čemu slouží návrhový vzor Factory?",
        options: [
          "Zapouzdřuje vytváření objektů (klient nepoužívá přímo konstruktor)",
          "Sledování událostí",
          "Hierarchie tříd",
          "Sběr odpadu"
        ],
        correct: 0,
        explanation: "Factory umožňuje vrátit různé podtypy podle vstupu; oddělí klienta od konkrétní třídy."
      },
      {
        q: "K čemu slouží návrhový vzor Strategy?",
        options: [
          "Umožní definovat rodinu algoritmů a vybírat je za běhu",
          "Strategické plánování projektu",
          "Náhrada Singletonu",
          "Synchronizaci vláken"
        ],
        correct: 0,
        explanation: "Strategy zapouzdřuje algoritmus do třídy; klient pracuje přes rozhraní a může strategii vyměnit."
      },
      {
        q: "K čemu slouží návrhový vzor Decorator?",
        options: [
          "Dynamicky přidává objektu zodpovědnost (chování) bez modifikace třídy",
          "Mění vzhled GUI",
          "Loguje volání",
          "Šifruje data"
        ],
        correct: 0,
        explanation: "Decorator obaluje objekt a přidává funkčnost; alternativa k dědičnosti."
      },
      {
        q: "K čemu slouží návrhový vzor Adapter?",
        options: [
          "Převádí rozhraní třídy na jiné, které klient očekává",
          "Sledování změn",
          "Vytváření instancí",
          "Iterace"
        ],
        correct: 0,
        explanation: "Adapter umožňuje spolupráci tříd s nekompatibilními rozhraními."
      },
      {
        q: "Co je MVP (Model-View-Presenter)?",
        options: [
          "Vzor podobný MVC, kde Presenter zprostředkovává komunikaci mezi View a Modelem",
          "Pohled bez modelu",
          "Pasivní controller",
          "Pohled bez stavu"
        ],
        correct: 0,
        explanation: "V MVP je View 'hloupé' a vše řídí Presenter; usnadňuje unit testy."
      },
      {
        q: "Co je publish-subscribe pattern?",
        options: [
          "Producenti publikují události, konzumenti se přihlašují k odběru, decoupling přes broker",
          "Synchronní volání metody",
          "Streamování dat",
          "Komprese zpráv"
        ],
        correct: 0,
        explanation: "Pub-Sub odděluje producenty a konzumenty; známé implementace Kafka, RabbitMQ."
      }
    ]
  },
  {
    id: 18,
    title: "Algoritmy řazení",
    description: "Bubble, Insertion, Selection, Merge, Quick sort, vlastnosti.",
    questions: [
      {
        q: "Jaká je průměrná časová složitost Quick sortu?",
        options: [
          "O(n log n)",
          "O(n)",
          "O(n²)",
          "O(log n)"
        ],
        correct: 0,
        explanation: "Quick sort: průměr O(n log n), nejhorší O(n²) (špatný pivot)."
      },
      {
        q: "Který algoritmus má vždy O(n log n) i v nejhorším případě?",
        options: [
          "Merge sort",
          "Quick sort",
          "Bubble sort",
          "Insertion sort"
        ],
        correct: 0,
        explanation: "Merge sort dělí pole pevně na poloviny, slévá ve O(n) – garantovaně O(n log n)."
      },
      {
        q: "Co znamená stabilní řadicí algoritmus?",
        options: [
          "Zachovává vzájemné pořadí prvků se stejným klíčem",
          "Vždy běží stejnou dobu",
          "Funguje pro libovolný typ dat",
          "Nepoužívá rekurzi"
        ],
        correct: 0,
        explanation: "Stabilita: prvky se stejným klíčem zůstanou v původním pořadí (Merge, Insertion, Bubble jsou stabilní)."
      },
      {
        q: "Jaká je nejhorší složitost Bubble sortu?",
        options: [
          "O(n²)",
          "O(n)",
          "O(n log n)",
          "O(1)"
        ],
        correct: 0,
        explanation: "Bubble sort dělá vnořené smyčky, v nejhorším případě O(n²) porovnání."
      },
      {
        q: "Insertion sort je efektivní pro:",
        options: [
          "Malá nebo téměř seřazená pole",
          "Velmi velká náhodná pole",
          "Pole obsahující pouze nuly",
          "Distribuované systémy"
        ],
        correct: 0,
        explanation: "Insertion sort má O(n) pro téměř setříděná pole a malou konstantu pro malá n."
      },
      {
        q: "Jaká je složitost Selection sortu?",
        options: [
          "O(n²) ve všech případech",
          "O(n log n)",
          "O(n)",
          "O(log n)"
        ],
        correct: 0,
        explanation: "Selection sort dělá n průchodů a hledá minimum v O(n) → O(n²); nestabilní."
      },
      {
        q: "Je Quick sort stabilní?",
        options: [
          "Ne, klasická implementace není stabilní",
          "Ano, vždy",
          "Pouze u celých čísel",
          "Pouze pro malá pole"
        ],
        correct: 0,
        explanation: "Quick sort se klasicky implementuje in-place a není stabilní."
      },
      {
        q: "Jaká je paměťová složitost Merge sortu?",
        options: [
          "O(n) – vyžaduje pomocné pole",
          "O(1) – in-place",
          "O(log n)",
          "O(n²)"
        ],
        correct: 0,
        explanation: "Merge sort potřebuje pomocné pole při slévání; in-place varianty jsou složité."
      },
      {
        q: "Co je Heap sort?",
        options: [
          "Řazení pomocí binární haldy, O(n log n) garantovaně",
          "Řazení v paměti haldy",
          "Stabilní řazení",
          "Random sort"
        ],
        correct: 0,
        explanation: "Heap sort vybuduje max-heap a postupně extrahuje maximum; in-place, ale nestabilní."
      },
      {
        q: "Co je Counting sort?",
        options: [
          "Neporovnávací řazení v O(n+k) pro malý rozsah celých čísel",
          "Řazení počítáním inverzí",
          "Distribuované řazení",
          "Hashovací řazení"
        ],
        correct: 0,
        explanation: "Counting sort předpokládá omezený rozsah hodnot k; lineární čas."
      },
      {
        q: "Jaká je nejlepší dolní mez složitosti porovnávacího řazení?",
        options: [
          "Ω(n log n)",
          "Ω(n)",
          "Ω(log n)",
          "Ω(n²)"
        ],
        correct: 0,
        explanation: "Rozhodovací strom má n! listů; výška ≥ log₂(n!) = Ω(n log n)."
      },
      {
        q: "Co dělá Quick sort při výběru pivota?",
        options: [
          "Rozdělí pole na prvky menší a větší než pivot a rekurzivně řadí části",
          "Vybírá nejmenší prvek",
          "Najde medián v O(1)",
          "Slévá dvě poloviny"
        ],
        correct: 0,
        explanation: "Partition kolem pivota; výběr pivota (medián, random) ovlivňuje výkon."
      }
    ]
  },
  {
    id: 19,
    title: "Algoritmy pro vyhledávání a prohledávání textu",
    description: "Naivní/binární vyhledávání, hashování, KMP, Boyer-Moore, Karp-Rabin.",
    questions: [
      {
        q: "Jaká je složitost binárního vyhledávání v setříděném poli?",
        options: [
          "O(log n)",
          "O(n)",
          "O(n log n)",
          "O(1)"
        ],
        correct: 0,
        explanation: "Binární vyhledávání půlí prostor → O(log n); vyžaduje seřazené pole."
      },
      {
        q: "Jaký princip využívá Knuth-Morris-Pratt (KMP) algoritmus?",
        options: [
          "Tabulku částečných shod (prefixová funkce) – po neúspěchu neposouvá zbytečně",
          "Hashování oken textu",
          "Náhodné porovnávání",
          "Greedy strategii"
        ],
        correct: 0,
        explanation: "KMP předpočítá failure function, takže při neshodě pokračuje bez zbytečných porovnání. Celkem O(n+m)."
      },
      {
        q: "Co charakterizuje Boyer-Moore algoritmus?",
        options: [
          "Porovnává vzor zprava doleva a využívá heuristiky bad character a good suffix",
          "Hashuje text a porovnává hashe",
          "Prochází vzor pozpátku jen jednou",
          "Funguje pouze pro krátké vzory"
        ],
        correct: 0,
        explanation: "Boyer-Moore je v praxi nejrychlejší pro běžné texty díky velkým skokům."
      },
      {
        q: "Na čem stojí Karp-Rabin algoritmus?",
        options: [
          "Na rolling hashi – průběžně přepočítává hash okna textu",
          "Na backtrackingu",
          "Na dynamickém programování",
          "Na BFS prohledávání"
        ],
        correct: 0,
        explanation: "Karp-Rabin používá hash funkci; hash okna lze inkrementálně přepočítat v O(1)."
      },
      {
        q: "Jaký je hlavní účel hashovací tabulky?",
        options: [
          "Konstantní průměrný čas vyhledání/vložení dle klíče",
          "Setřídění dat",
          "Komprese paměti",
          "Šifrování klíčů"
        ],
        correct: 0,
        explanation: "Hashovací tabulka transformuje klíč na index → průměrně O(1) operace."
      },
      {
        q: "Jaká je nejhorší složitost naivního vyhledávání vzoru v textu?",
        options: [
          "O(n·m), kde n je délka textu a m délka vzoru",
          "O(n log m)",
          "O(n+m)",
          "O(m²)"
        ],
        correct: 0,
        explanation: "Naivní porovnávání pro každou pozici v textu znovu porovnává vzor."
      },
      {
        q: "Jaká je nejhorší složitost KMP algoritmu?",
        options: [
          "O(n+m)",
          "O(n·m)",
          "O(n log n)",
          "O(m²)"
        ],
        correct: 0,
        explanation: "KMP díky prefixové funkci pracuje v lineárním čase."
      },
      {
        q: "Co je kolize v hashovací tabulce?",
        options: [
          "Situace, kdy dvě různé klíče mají stejný hash",
          "Přetečení paměti",
          "Špatný klíč",
          "Chyba hardware"
        ],
        correct: 0,
        explanation: "Kolize se řeší řetězením (chaining) nebo otevřeným adresováním."
      },
      {
        q: "Co je trie (písmenkový strom)?",
        options: [
          "Stromová struktura pro ukládání řetězců, kde každá hrana reprezentuje znak",
          "Binární strom",
          "Hash tabulka",
          "B-strom"
        ],
        correct: 0,
        explanation: "Trie umožňuje rychlé vyhledávání prefixů a slovníkové operace."
      },
      {
        q: "Co je Aho-Corasick algoritmus?",
        options: [
          "Algoritmus pro současné vyhledávání více vzorů v textu",
          "Algoritmus pro řazení",
          "Algoritmus pro grafy",
          "Komprese textu"
        ],
        correct: 0,
        explanation: "Aho-Corasick rozšiřuje KMP na množinu vzorů pomocí trie a failure linků."
      },
      {
        q: "Jaká je předpokládaná složitost vyhledávání v hashovací tabulce?",
        options: [
          "O(1) průměrně, O(n) v nejhorším případě",
          "O(log n)",
          "O(n)",
          "O(n²)"
        ],
        correct: 0,
        explanation: "S dobrou hash funkcí a nízkým load factorem dosáhneme konstantního přístupu."
      },
      {
        q: "Co je load factor hashovací tabulky?",
        options: [
          "Poměr počtu uložených prvků k velikosti tabulky",
          "Doba vyhledávání",
          "Velikost hash funkce",
          "Počet kolizí"
        ],
        correct: 0,
        explanation: "Při vysokém load factoru roste počet kolizí; tabulka se obvykle rozšíří (rehashing)."
      }
    ]
  },
  {
    id: 20,
    title: "Typy grafů, reprezentace, stromy, kostry",
    description: "Pojmový aparát teorie grafů, BVS, halda, kostra, MST algoritmy.",
    questions: [
      {
        q: "Jaká je časová složitost Kruskalova algoritmu pro nalezení minimální kostry?",
        options: [
          "O(E log E)",
          "O(V²)",
          "O(V + E)",
          "O(E·V)"
        ],
        correct: 0,
        explanation: "Kruskal seřadí hrany (O(E log E)) a používá Union-Find."
      },
      {
        q: "Který algoritmus staví minimální kostru postupným přidáváním nejlevnější hrany k aktuálnímu stromu?",
        options: [
          "Jarníkův-Primův",
          "Kruskalův",
          "Dijkstrův",
          "Bellman-Ford"
        ],
        correct: 0,
        explanation: "Prim/Jarník: roste z jednoho vrcholu, vždy přidá nejlevnější hranu ven."
      },
      {
        q: "Jaké jsou dvě nejběžnější reprezentace grafu?",
        options: [
          "Matice sousednosti a seznam sousedů",
          "Hash mapa a fronta",
          "Strom a halda",
          "Vector a deque"
        ],
        correct: 0,
        explanation: "Matice sousednosti O(V²), seznam sousedů O(V+E) – volba dle hustoty grafu."
      },
      {
        q: "Co je binární vyhledávací strom?",
        options: [
          "Strom, kde levý podstrom obsahuje menší klíče, pravý větší než kořen",
          "Strom s nejvýše dvěma listy",
          "Strom vyhledávající dva prvky najednou",
          "Halda s binární strukturou"
        ],
        correct: 0,
        explanation: "BVS umožňuje vyhledání v O(h); vyvážený má h = O(log n)."
      },
      {
        q: "Co je halda (heap)?",
        options: [
          "Téměř úplný binární strom s vlastností pořadí předek-potomek",
          "Spojový seznam",
          "Hash tabulka",
          "Strom s libovolnou strukturou"
        ],
        correct: 0,
        explanation: "Min-heap: rodič ≤ potomci; využití v Dijkstrovi, prioritních frontách."
      },
      {
        q: "Co je orientovaný graf?",
        options: [
          "Graf, kde hrany mají směr (z u do v)",
          "Graf bez cyklů",
          "Souvislý graf",
          "Strom"
        ],
        correct: 0,
        explanation: "V orientovaném grafu jsou hrany uspořádané dvojice; reprezentace závisí na směru."
      },
      {
        q: "Co je strom v teorii grafů?",
        options: [
          "Souvislý acyklický neorientovaný graf",
          "Graf s cyklem",
          "Úplný graf",
          "Bipartitní graf"
        ],
        correct: 0,
        explanation: "Strom má n-1 hran, jednoznačnou cestu mezi libovolnými dvěma vrcholy."
      },
      {
        q: "Co je kostra grafu (spanning tree)?",
        options: [
          "Podgraf, který je stromem a obsahuje všechny vrcholy",
          "Cyklus přes všechny vrcholy",
          "Komponenta souvislosti",
          "Část grafu s minimem hran"
        ],
        correct: 0,
        explanation: "Kostra spojuje všechny vrcholy bez cyklů; v ohodnoceném grafu hledáme minimální kostru."
      },
      {
        q: "Co je úplný graf K_n?",
        options: [
          "Graf, ve kterém existuje hrana mezi každou dvojicí vrcholů",
          "Graf bez hran",
          "Strom s n vrcholy",
          "Bipartitní graf"
        ],
        correct: 0,
        explanation: "Úplný graf K_n má n(n-1)/2 hran."
      },
      {
        q: "Co je bipartitní graf?",
        options: [
          "Graf, jehož vrcholy lze rozdělit do dvou množin tak, že každá hrana je mezi nimi",
          "Graf se dvěma komponentami",
          "Graf s dvěma vrcholy",
          "Orientovaný graf"
        ],
        correct: 0,
        explanation: "Bipartitní graf nemá liché cykly; např. K_{3,3} je bipartitní."
      },
      {
        q: "Jaká je paměťová složitost matice sousednosti?",
        options: [
          "O(V²)",
          "O(V+E)",
          "O(V)",
          "O(E)"
        ],
        correct: 0,
        explanation: "Matice V×V; vhodná pro husté grafy, jinak plýtvá pamětí."
      },
      {
        q: "Co je stupeň vrcholu?",
        options: [
          "Počet hran incidentních s vrcholem",
          "Vzdálenost od kořene",
          "Pořadí vrcholu",
          "Počet sousedů na úrovni 2"
        ],
        correct: 0,
        explanation: "V orientovaném grafu rozlišujeme vstupní a výstupní stupeň."
      }
    ]
  },
  {
    id: 21,
    title: "Vzdálenosti v grafu, Dijkstra, prohledávání",
    description: "Dijkstrův algoritmus, BFS, DFS, eulerovské/hamiltonovské grafy, labyrint.",
    questions: [
      {
        q: "Co počítá Dijkstrův algoritmus?",
        options: [
          "Nejkratší cesty ze zdroje do všech vrcholů v grafu s nezápornými hranami",
          "Minimální kostru grafu",
          "Topologické uspořádání",
          "Maximální tok"
        ],
        correct: 0,
        explanation: "Dijkstra: SSSP pro nezáporně ohodnocené grafy. Selže při záporných hranách – tam Bellman-Ford."
      },
      {
        q: "Jaký je rozdíl mezi BFS a DFS?",
        options: [
          "BFS prochází po vrstvách (fronta), DFS hloubkou (zásobník/rekurze)",
          "BFS používá rekurzi, DFS frontu",
          "BFS najde jen kratší cestu, DFS jen delší",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "BFS používá FIFO frontu, DFS zásobník/rekurzi; BFS najde nejkratší cestu v neohodnoceném grafu."
      },
      {
        q: "Co je Eulerovský tah?",
        options: [
          "Tah, který projde každou hranou grafu právě jednou",
          "Tah procházející každým vrcholem právě jednou",
          "Nejkratší cesta",
          "Cyklus délky 4"
        ],
        correct: 0,
        explanation: "Eulerovský tah existuje, pokud je graf souvislý a má 0 nebo 2 vrcholy lichého stupně."
      },
      {
        q: "Co je Hamiltonská kružnice?",
        options: [
          "Kružnice procházející každým vrcholem grafu právě jednou",
          "Kružnice procházející každou hranou",
          "Strom obsahující všechny vrcholy",
          "Cyklus se sudým počtem hran"
        ],
        correct: 0,
        explanation: "Hamiltonská kružnice – NP-úplný problém; obecně neexistuje efektivní algoritmus."
      },
      {
        q: "Jakou strukturu používá BFS pro průchod grafem?",
        options: [
          "Frontu (FIFO)",
          "Zásobník (LIFO)",
          "Haldu",
          "Hash tabulku"
        ],
        correct: 0,
        explanation: "BFS používá frontu pro postupné zpracování vrstev od zdroje."
      },
      {
        q: "Jaká je časová složitost Dijkstrova algoritmu s haldou?",
        options: [
          "O((V+E) log V)",
          "O(V²)",
          "O(V·E)",
          "O(E²)"
        ],
        correct: 0,
        explanation: "S binární haldou je složitost O((V+E) log V); s Fibonacciho haldou O(E + V log V)."
      },
      {
        q: "Který algoritmus zvládá záporné hrany v grafu?",
        options: [
          "Bellman-Ford",
          "Dijkstra",
          "Prim",
          "Kruskal"
        ],
        correct: 0,
        explanation: "Bellman-Ford je O(V·E), umí detekovat záporné cykly."
      },
      {
        q: "Který algoritmus počítá nejkratší cesty mezi všemi dvojicemi vrcholů?",
        options: [
          "Floyd-Warshall",
          "Dijkstra",
          "Kruskal",
          "DFS"
        ],
        correct: 0,
        explanation: "Floyd-Warshall: dynamické programování, O(V³); funguje i pro záporné (ne cykly)."
      },
      {
        q: "Jakou datovou strukturu používá DFS?",
        options: [
          "Zásobník (rekurze nebo explicitní stack)",
          "Frontu",
          "Haldu",
          "Hash tabulku"
        ],
        correct: 0,
        explanation: "DFS přirozeně využívá rekurzi, případně explicitní zásobník."
      },
      {
        q: "K čemu lze využít DFS?",
        options: [
          "Detekce cyklů, topologické řazení, hledání komponent souvislosti",
          "Pouze pro stromy",
          "Pouze pro nejkratší cesty",
          "Komprese grafů"
        ],
        correct: 0,
        explanation: "DFS je všestranný; mnoho aplikací v grafové teorii."
      },
      {
        q: "Co je topologické uspořádání DAG?",
        options: [
          "Lineární uspořádání vrcholů tak, že každá hrana vede zleva doprava",
          "Uspořádání podle stupně",
          "Nejkratší cesta",
          "BFS pořadí"
        ],
        correct: 0,
        explanation: "Topologické řazení existuje právě tehdy, když graf nemá cykly (DAG)."
      },
      {
        q: "Co je most (bridge) v grafu?",
        options: [
          "Hrana, jejíž odebrání zvýší počet komponent souvislosti",
          "Cesta mezi vrcholy",
          "Cyklus",
          "Vrchol nejvyššího stupně"
        ],
        correct: 0,
        explanation: "Mosty se hledají pomocí DFS a low-link hodnot (Tarjan)."
      }
    ]
  },
  {
    id: 22,
    title: "Základní pojmy UI (umělé inteligence)",
    description: "Algoritmus, heuristika, Turingův test, čínský pokoj, prohledávání stavového prostoru, A*.",
    questions: [
      {
        q: "Co je Turingův test?",
        options: [
          "Test, zda stroj dokáže v textové konverzaci nerozeznatelně napodobit člověka",
          "Test rychlosti procesoru",
          "Měření IQ AI modelu",
          "Benchmark pro neuronové sítě"
        ],
        correct: 0,
        explanation: "Turingův test (1950) – posuzovatel komunikuje s člověkem a strojem; pokud nedokáže rozlišit, stroj 'projde'."
      },
      {
        q: "Co tvrdí argument čínského pokoje (Searle)?",
        options: [
          "Manipulace symboly podle pravidel není totéž co skutečné porozumění",
          "Číňané jsou lepší v matematice",
          "AI musí umět čínsky",
          "Mozek je deterministický stroj"
        ],
        correct: 0,
        explanation: "Argument míří proti silné AI: syntaktická manipulace ≠ sémantika/vědomí."
      },
      {
        q: "Co je heuristika v UI?",
        options: [
          "Odhadová funkce, která vede prohledávání rychleji k cíli (bez záruky optimality)",
          "Náhodný algoritmus",
          "Vyčerpávající prohledávání",
          "Statistická chyba"
        ],
        correct: 0,
        explanation: "Heuristika přibližně odhaduje vzdálenost k cíli; A* používá h(n)."
      },
      {
        q: "Jaký je rozdíl mezi prohledáváním do šířky a do hloubky?",
        options: [
          "BFS rozšiřuje uzly po úrovních, DFS jde co nejhlouběji jednou větví",
          "BFS najde vždy řešení, DFS nikdy",
          "DFS používá frontu, BFS zásobník",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "BFS najde nejkratší cestu, paměťově náročnější; DFS šetří paměť, ale nemusí najít optimum."
      },
      {
        q: "Co potřebuje A* algoritmus pro garanci optimality?",
        options: [
          "Přípustnou (admissible) heuristiku – nikdy nepřeceňuje skutečnou vzdálenost",
          "Pouze deterministický graf",
          "Vyvážený strom",
          "Konstantní paměť"
        ],
        correct: 0,
        explanation: "f(n) = g(n) + h(n); h musí být dolním odhadem skutečné vzdálenosti."
      },
      {
        q: "Co je stavový prostor v UI?",
        options: [
          "Množina všech možných konfigurací (stavů) problému a přechody mezi nimi",
          "Paměť počítače",
          "3D scéna",
          "Databáze pravidel"
        ],
        correct: 0,
        explanation: "Stavový prostor (graf) – hledání řešení = nalezení cesty z počátečního do cílového stavu."
      },
      {
        q: "Co je silná AI vs. slabá AI?",
        options: [
          "Silná AI tvrdí, že stroj má skutečné vědomí; slabá jen simuluje inteligenci",
          "Silná je rychlejší",
          "Slabá nepoužívá neuronové sítě",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "Silná (Strong) AI: stroj má mysl; slabá (Weak): jen nástroj simulující chování."
      },
      {
        q: "Co je informované vs. neinformované prohledávání?",
        options: [
          "Informované využívá heuristiku (např. A*), neinformované ne (BFS, DFS)",
          "Informované má více paměti",
          "Neinformované je rychlejší",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "Heuristika navádí prohledávání ke slibným stavům; neinformované prochází systematicky."
      },
      {
        q: "Co je iterativní prohlubování (IDS)?",
        options: [
          "Opakované DFS s postupně rostoucím limitem hloubky",
          "Iterativní BFS",
          "Genetický algoritmus",
          "Dynamické programování"
        ],
        correct: 0,
        explanation: "IDS kombinuje úspornost DFS s úplností BFS; vhodné pro neznámou hloubku."
      },
      {
        q: "Co je greedy best-first search?",
        options: [
          "Prohledávání řízené pouze heuristikou h(n), bez ceny dosud uražené",
          "Genetický algoritmus",
          "Bezhladové hledání",
          "Algoritmus s LIFO frontou"
        ],
        correct: 0,
        explanation: "Greedy je rychlý, ale nezaručuje optimalitu (na rozdíl od A*)."
      },
      {
        q: "Co je expertní systém?",
        options: [
          "Program využívající znalostní bázi a inferenční mechanismus pro řešení problémů v doméně",
          "Konzultační firma",
          "Databáze odborníků",
          "Hra simulující experta"
        ],
        correct: 0,
        explanation: "Expertní systémy (MYCIN, Prospector) obsahují fakta a pravidla typu IF-THEN."
      },
      {
        q: "Co je minimax algoritmus?",
        options: [
          "Algoritmus pro hry dvou hráčů hledající tah maximalizující minimum protihráče",
          "Algoritmus pro min a max prvek",
          "Optimalizace funkce",
          "Algoritmus pro grafy"
        ],
        correct: 0,
        explanation: "Minimax + alfa-beta prořezávání: standardní přístup pro hry jako šachy."
      }
    ]
  },
  {
    id: 23,
    title: "Vybraná témata UI",
    description: "Neuronové sítě, backpropagation, genetické algoritmy, kognitivní vědy, CRUM.",
    questions: [
      {
        q: "Co dělá backpropagation algoritmus?",
        options: [
          "Šíří chybu z výstupu zpět vrstvami a aktualizuje váhy pomocí gradientu",
          "Generuje nová data",
          "Klasifikuje vstupy",
          "Vybírá topologii sítě"
        ],
        correct: 0,
        explanation: "Backprop počítá gradient ztráty vzhledem k vahám pomocí řetězového pravidla."
      },
      {
        q: "Co je fitness funkce v genetických algoritmech?",
        options: [
          "Funkce hodnotící kvalitu jedince (řešení) v populaci",
          "Funkce mutující geny",
          "Funkce vybírající náhodné jedince",
          "Funkce ukončující evoluci"
        ],
        correct: 0,
        explanation: "Fitness určuje pravděpodobnost selekce a kvalitu nalezeného řešení."
      },
      {
        q: "Které jsou tři hlavní operátory genetického algoritmu?",
        options: [
          "Selekce, křížení (crossover) a mutace",
          "Add, remove, update",
          "Hash, sort, search",
          "Read, write, compute"
        ],
        correct: 0,
        explanation: "GA: selekce vybírá rodiče, crossover kombinuje, mutace zavádí variabilitu."
      },
      {
        q: "Co je dopředné šíření signálu (feedforward) v neuronové síti?",
        options: [
          "Postupný výpočet aktivací vrstev od vstupu k výstupu",
          "Zpětné šíření chyby",
          "Trénovací algoritmus",
          "Optimalizační metoda"
        ],
        correct: 0,
        explanation: "Forward pass: x → vrstvy → predikce; následně backward pass počítá gradienty."
      },
      {
        q: "Co znamená koncepce CRUM v kognitivní vědě?",
        options: [
          "Computational-Representational Understanding of Mind – mysl jako výpočetní systém pracující s reprezentacemi",
          "Centrum kognitivního výzkumu",
          "Křivka učení neuronové sítě",
          "Model paměti CPU"
        ],
        correct: 0,
        explanation: "CRUM (Thagard): kognice = výpočetní operace nad mentálními reprezentacemi."
      },
      {
        q: "Co je aktivační funkce v neuronu?",
        options: [
          "Nelineární funkce aplikovaná na váženou sumu vstupů (např. ReLU, sigmoid, tanh)",
          "Inicializátor vah",
          "Loss funkce",
          "Optimalizační algoritmus"
        ],
        correct: 0,
        explanation: "Aktivační funkce zavádí nelinearitu, bez níž by síť byla ekvivalentní lineárnímu modelu."
      },
      {
        q: "Co je overfitting (přeučení) neuronové sítě?",
        options: [
          "Síť se naučí trénovací data včetně šumu a špatně generalizuje na nová",
          "Síť běží příliš dlouho",
          "Síť má málo vrstev",
          "Síť ztrácí váhy"
        ],
        correct: 0,
        explanation: "Obrana: regularizace (L1/L2), dropout, více dat, early stopping."
      },
      {
        q: "Co je crossover (křížení) v genetickém algoritmu?",
        options: [
          "Operace kombinující geny dvou rodičů do potomka",
          "Náhodná změna jednoho genu",
          "Selekce rodičů",
          "Ohodnocení jedince"
        ],
        correct: 0,
        explanation: "Crossover (one-point, uniform) předává vlastnosti potomkům; mutace přidává variabilitu."
      },
      {
        q: "Co je konvoluční neuronová síť (CNN)?",
        options: [
          "Síť obsahující konvoluční vrstvy vhodná pro zpracování obrazů",
          "Síť bez vah",
          "Síť s rekurentní vrstvou",
          "Síť pro grafy"
        ],
        correct: 0,
        explanation: "CNN sdílí váhy (konvoluce) a využívá lokální spojení; RNN jsou pro sekvence."
      },
      {
        q: "Co je rekurentní neuronová síť (RNN)?",
        options: [
          "Síť se zpětnými vazbami pro zpracování sekvencí (text, řeč)",
          "Síť s opakovanými vrstvami",
          "Síť bez aktivačních funkcí",
          "Síť s jedním neuronem"
        ],
        correct: 0,
        explanation: "RNN/LSTM/GRU pracují se stavem a zachycují závislosti v čase."
      },
      {
        q: "Co je supervised learning?",
        options: [
          "Učení s učitelem – z trénovacích dvojic (vstup, požadovaný výstup)",
          "Učení bez dat",
          "Učení s posílením",
          "Učení bez výstupů"
        ],
        correct: 0,
        explanation: "Klasifikace, regrese; potřebujeme označená data."
      },
      {
        q: "Co je reinforcement learning?",
        options: [
          "Agent se učí maximalizovat odměnu z interakce s prostředím",
          "Učení s pevnými daty",
          "Učení bez učitele",
          "Pouze klasifikační úloha"
        ],
        correct: 0,
        explanation: "RL: agent → akce → odměna; algoritmy Q-learning, policy gradient."
      }
    ]
  }
];
