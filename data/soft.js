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
      }
    ]
  }
];
