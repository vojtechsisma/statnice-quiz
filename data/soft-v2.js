const SOFT_TOPICS_V2 = {
  1: [
    {
      q: "Co je fold (reduce) v kontextu funkcionálního programování?",
      options: [
        "Funkce vyššího řádu, která redukuje seznam na jednu hodnotu pomocí akumulátoru",
        "Operace pro spojení dvou seznamů do jednoho",
        "Algoritmus pro řazení seznamu podle klíče",
        "Konstrukce pro definici nového datového typu"
      ],
      correct: 0,
      explanation: "Fold (foldl/foldr, reduce) prochází seznam a postupně aplikuje binární funkci na akumulátor a prvek, čímž celý seznam zredukuje na jednu hodnotu."
    },
    {
      q: "Co je redukční strategie 'call-by-need'?",
      options: [
        "Argument se vyhodnotí maximálně jednou, až když je poprvé potřeba, výsledek se cachuje",
        "Argument se vyhodnotí vždy před voláním funkce",
        "Argument se kopíruje při každém použití uvnitř funkce",
        "Argument se vyhodnocuje na pozadí v jiném vlákně"
      ],
      correct: 0,
      explanation: "Call-by-need je optimalizovaná varianta line vyhodnocení (call-by-name) – výraz se vyhodnotí nejvýš jednou a výsledek se sdílí."
    },
    {
      q: "Co je algebraický datový typ (ADT)?",
      options: [
        "Typ definovaný jako součet (varianty) a součin (n-tice) hodnot, např. data Tree = Leaf | Node Int Tree Tree",
        "Typ pro reprezentaci matic a vektorů",
        "Typ optimalizovaný pro aritmetické operace",
        "Třída obsahující abstraktní metody"
      ],
      correct: 0,
      explanation: "ADT kombinuje sum (alternativy/konstruktory) a product (více polí) typy a umožňuje pattern matching."
    },
    {
      q: "K čemu slouží pattern matching?",
      options: [
        "K dekonstrukci hodnot algebraických typů a větvení podle jejich struktury",
        "K hledání podřetězců v textu pomocí regulárních výrazů",
        "Ke kontrole shody typů při kompilaci",
        "K porovnávání objektů na rovnost"
      ],
      correct: 0,
      explanation: "Pattern matching umožňuje rozlišit varianty datového typu a zároveň extrahovat jejich složky (např. case … of)."
    },
    {
      q: "Co znamená pojem 'closure' (uzávěr)?",
      options: [
        "Funkce zachycující proměnné z okolního lexikálního prostředí",
        "Uzavřená skupina funkcí v modulu",
        "Konec bloku v jazycích s indentací",
        "Synchronizační primitivum pro vlákna"
      ],
      correct: 0,
      explanation: "Closure je funkce, která si pamatuje (uzavírá) proměnné z prostředí, kde byla definována."
    },
    {
      q: "Proč je v čistě funkcionálních jazycích neměnnost (immutability) klíčová?",
      options: [
        "Usnadňuje uvažování o programu, paralelizaci a zaručuje referenční transparentnost",
        "Šetří paměť díky in-place modifikacím",
        "Umožňuje rychlejší vstupně-výstupní operace",
        "Vyžaduje to standard jazyka C"
      ],
      correct: 0,
      explanation: "Neměnné struktury eliminují vedlejší efekty, umožňují bezpečné sdílení mezi vlákny a podporují rovnicové uvažování o kódu."
    }
  ],
  2: [
    {
      q: "Co je unifikace v Prologu?",
      options: [
        "Proces sjednocení dvou termů tak, aby se staly syntakticky shodnými dosazením za proměnné",
        "Sloučení dvou databází faktů do jedné",
        "Spojení několika klauzulí do jedné",
        "Optimalizace opakovaných volání predikátu"
      ],
      correct: 0,
      explanation: "Unifikace hledá nejobecnější substituci proměnných, která dva termy převede na stejný tvar."
    },
    {
      q: "Co dělá operátor řezu (!) v Prologu?",
      options: [
        "Zabraňuje backtrackingu přes daný bod – \"odsekne\" alternativy",
        "Odstraní fakt z databáze",
        "Negativně neguje predikát",
        "Spustí vyhodnocení s nulovou hloubkou"
      ],
      correct: 0,
      explanation: "Cut (!) odřízne backtracking přes místo svého výskytu i přes volání mateřského cíle – zužuje prohledávací prostor."
    },
    {
      q: "Co znamená reverzibilita predikátu v Prologu?",
      options: [
        "Tentýž predikát lze použít v různých režimech (např. append/3 jak ke spojení, tak k rozkladu seznamu)",
        "Predikát lze definovat shora dolů i zdola nahoru",
        "Predikát vrací výsledky v opačném pořadí",
        "Predikát automaticky negaci"
      ],
      correct: 0,
      explanation: "Díky logické povaze a unifikaci může predikát fungovat ve více argumentových režimech (in/out kombinacích)."
    },
    {
      q: "Jaká je sémantika negace v Prologu (\\+ nebo not/1)?",
      options: [
        "Negace jako selhání: ¬P uspěje, jestliže důkaz P selže",
        "Klasická logická negace, ekvivalentní matematickému \"není pravda\"",
        "Zákaz unifikace pro daný term",
        "Negace bitové hodnoty"
      ],
      correct: 0,
      explanation: "Prolog používá negaci jako selhání (Negation as Failure) – funguje pouze za předpokladu uzavřeného světa."
    },
    {
      q: "Co je v Prologu predikát \"member/2\"?",
      options: [
        "Predikát testující/generující prvky seznamu pomocí rekurze a unifikace",
        "Funkce vracející počet prvků seznamu",
        "Operátor pro přístup k poli n-tice",
        "Vestavěný operátor přiřazení"
      ],
      correct: 0,
      explanation: "member(X,[X|_]) a member(X,[_|T]) :- member(X,T) – díky backtrackingu generuje postupně všechny prvky."
    },
    {
      q: "K čemu slouží predikát assertz/1?",
      options: [
        "Přidává nový fakt nebo pravidlo na konec databáze za běhu",
        "Ověřuje, že tvrzení je pravdivé, jinak ukončí program",
        "Vyhodí výjimku, pokud term není ground",
        "Vypíše tvrzení do logu"
      ],
      correct: 0,
      explanation: "assertz přidá klauzuli na konec databáze (asserta na začátek); slouží k dynamické modifikaci znalostní báze."
    }
  ],
  3: [
    {
      q: "Co reprezentuje v BPMN tečkovaná šipka (message flow)?",
      options: [
        "Tok zpráv mezi dvěma účastníky (pooly)",
        "Sekvenční tok uvnitř pool",
        "Datovou asociaci s artefaktem",
        "Časové prodlení procesu"
      ],
      correct: 0,
      explanation: "Message flow (čárkovaná šipka) zobrazuje komunikaci mezi různými participanty, tedy mezi pooly."
    },
    {
      q: "Co je v BPMN \"gateway\" typu XOR?",
      options: [
        "Exkluzivní rozhodovací bod – pouze jedna výstupní větev je aktivována na základě podmínky",
        "Paralelní fork všech výstupů",
        "Spojení několika vláken zpět do jednoho",
        "Časovač spouštějící konkrétní větev"
      ],
      correct: 0,
      explanation: "XOR gateway aktivuje právě jednu cestu podle splnění podmínek (data-based exclusive)."
    },
    {
      q: "Co je v BPMN pool?",
      options: [
        "Reprezentace participanta procesu – samostatná organizace nebo systém",
        "Skupina paralelně probíhajících aktivit",
        "Sdílená paměť mezi procesy",
        "Bazén úloh připravených k provedení"
      ],
      correct: 0,
      explanation: "Pool reprezentuje participanta; uvnitř obvykle obsahuje swimlanes pro role/organizační jednotky."
    },
    {
      q: "Jaký je rozdíl mezi sekvenčním tokem a message flow?",
      options: [
        "Sekvenční tok řídí pořadí aktivit v rámci jednoho poolu; message flow přechází mezi pooly",
        "Sekvenční tok je vždy synchronní, message flow asynchronní",
        "Sekvenční tok se používá jen pro data, message flow pro signály",
        "Není mezi nimi rozdíl, jde o synonyma"
      ],
      correct: 0,
      explanation: "Sequence flow modeluje pořadí uvnitř participanta, message flow modeluje komunikaci mezi participanty."
    },
    {
      q: "Co modeluje workflow pattern \"Multiple Instances Without Synchronization\"?",
      options: [
        "Spuštění více instancí aktivity, které dále pokračují nezávisle bez synchronizace návratu",
        "Spuštění N instancí a čekání, až všechny skončí",
        "Cyklický průchod jednou instancí s různými parametry",
        "Sériové opakování aktivity"
      ],
      correct: 0,
      explanation: "Tento pattern umožňuje vytvořit více běhů aktivity, aniž by se proces čekal na jejich dokončení."
    },
    {
      q: "Co je intermediate timer event v BPMN?",
      options: [
        "Událost uvnitř procesu, která čeká na uplynutí časového intervalu nebo na konkrétní okamžik",
        "Start událost spouštěná v určenou dobu",
        "Časovač měřící dobu trvání aktivity pro reporting",
        "Mezikrok ukládající stav procesu"
      ],
      correct: 0,
      explanation: "Intermediate timer pozastaví tok do uplynutí časového údaje (duration/date) nebo přivede tok po vypršení."
    }
  ],
  4: [
    {
      q: "Co znamená princip 'composition over inheritance'?",
      options: [
        "Preferovat skládání objektů z menších částí před hlubokou hierarchií dědičnosti",
        "Vždy dědit, nikdy nepoužívat kompozici",
        "Místo objektů používat globální funkce",
        "Skládat metody do jedné velké funkce"
      ],
      correct: 0,
      explanation: "Skládání (composition) je flexibilnější a méně provázané než dědičnost; doporučuje to GoF i moderní OOP praxe."
    },
    {
      q: "Co je dynamický (pozdní) polymorfismus?",
      options: [
        "Volání metody je rozhodnuto až za běhu podle skutečného typu objektu (virtuální metody)",
        "Polymorfismus rozhodnutý za překladu na základě signatur",
        "Možnost mít více proměnných stejného typu",
        "Schopnost programu měnit za běhu zdrojový kód"
      ],
      correct: 0,
      explanation: "Late binding vybírá konkrétní implementaci až dynamicky – základ klasického OOP polymorfismu přes virtuální metody."
    },
    {
      q: "Co je abstraktní třída?",
      options: [
        "Třída, která nemůže být přímo instancována a typicky obsahuje aspoň jednu abstraktní metodu",
        "Třída bez atributů",
        "Třída implementovaná pouze v interpretu",
        "Třída, jejíž metody nelze přepsat"
      ],
      correct: 0,
      explanation: "Abstraktní třída slouží jako šablona pro potomky; pro vytvoření instancí se musí podtřídit a doimplementovat abstraktní členy."
    },
    {
      q: "Co znamená 'Liskov Substitution Principle' (LSP)?",
      options: [
        "Instance podtřídy musí být použitelná všude, kde se očekává instance nadtřídy, bez narušení korektnosti",
        "Třídy by neměly mít více než jednu zodpovědnost",
        "Mezi třídami nesmí být kruhové závislosti",
        "Každý objekt musí být schopen serializace"
      ],
      correct: 0,
      explanation: "LSP (písmeno L v SOLID) říká, že podtřída nesmí porušit kontrakt nadtřídy – jinak nelze bezpečně nahrazovat."
    },
    {
      q: "K čemu slouží zapouzdření (encapsulation)?",
      options: [
        "Skrýt vnitřní stav objektu a vystavit jen kontrolované rozhraní",
        "Spojit více objektů do jednoho balíčku",
        "Zabalit objekt do binární podoby pro přenos sítí",
        "Zaznamenat změny objektů do logu"
      ],
      correct: 0,
      explanation: "Encapsulation chrání invarianty objektu a umožňuje měnit implementaci bez dopadu na klienty."
    },
    {
      q: "Co je vícenásobná dědičnost a jaký je její hlavní problém?",
      options: [
        "Třída dědí z více předků; problémem je diamantový problém kvůli nejednoznačnosti",
        "Dědičnost přes více úrovní; problém je rychlost",
        "Implementace více rozhraní; nemá žádný problém",
        "Sdílení atributů mezi sourozenci; problém je paměť"
      ],
      correct: 0,
      explanation: "Diamond problem: pokud dva předkové dědí společného předka, vznikají duplicitní/ambiguity členové – proto je v některých jazycích zakázána (Java) nebo řešena MRO/virtual inheritance (C++, Python)."
    }
  ],
  5: [
    {
      q: "Jaký je hlavní rozdíl mezi Scrumem a Kanbanem?",
      options: [
        "Scrum používá fixní iterace (sprinty) a role, Kanban je tokový s WIP limity bez sprintů",
        "Kanban má sprinty, Scrum ne",
        "Scrum nepoužívá tabule, Kanban ano",
        "Kanban je určen jen pro hardware projekty"
      ],
      correct: 0,
      explanation: "Scrum je iterativně-přírůstkový s časovými okny, Kanban se zaměřuje na vizualizaci toku a omezení rozpracované práce."
    },
    {
      q: "Co je 'definition of done' ve Scrumu?",
      options: [
        "Sdílený seznam kritérií, která musí splňovat každá hotová položka backlogu",
        "Dokument popisující konec projektu",
        "Definice okamžiku ukončení sprintu",
        "Datum vydání produktu"
      ],
      correct: 0,
      explanation: "DoD zajišťuje konzistentní pohled na to, kdy je práce dokončena (testy, dokumentace, code review, ...)."
    },
    {
      q: "Co je Test-Driven Development (TDD) v základní iteraci?",
      options: [
        "Cyklus Red-Green-Refactor: nejprve napsat selhávající test, pak minimální kód, pak refaktorovat",
        "Napsat všechny testy předem a teprve potom celou implementaci",
        "Testovat pouze release verzi",
        "Generovat testy automaticky z dokumentace"
      ],
      correct: 0,
      explanation: "TDD vede vývoj testy: nejprve napiš test (red), pak minimální produkční kód (green), pak vyčisti (refactor)."
    },
    {
      q: "Co je hlavním rizikem vodopádového modelu?",
      options: [
        "Změny požadavků v pozdních fázích jsou drahé a rizikové",
        "Příliš mnoho komunikace se zákazníkem",
        "Příliš rychlá iterace bez plánování",
        "Nelze ho použít pro velké projekty"
      ],
      correct: 0,
      explanation: "Vodopád má lineární fáze a omezenou zpětnou vazbu – pozdní změny vyžadují drahé přepracování."
    },
    {
      q: "Co je 'planning poker'?",
      options: [
        "Technika konsenzuálního odhadu pracnosti pomocí karet (často Fibonacciho čísel)",
        "Plánovací schůzka řízená Product Ownerem na konci sprintu",
        "Náhodný výběr úloh ze sprint backlogu",
        "Hazardní rozdělení rolí v týmu"
      ],
      correct: 0,
      explanation: "Členové týmu nezávisle ukáží odhad kartou; rozdílné odhady se prodiskutují, dokud nedojde ke shodě."
    },
    {
      q: "Která hodnota je explicitně zmíněna v Manifestu agilního vývoje?",
      options: [
        "Reagování na změnu před následováním plánu",
        "Detailní dokumentace nad fungujícím software",
        "Smluvní vyjednávání nad spoluprací se zákazníkem",
        "Procesy a nástroje nad jednotlivci a interakcemi"
      ],
      correct: 0,
      explanation: "Manifest říká pravý opak ostatních variant: lidé > procesy, fungující SW > dokumentace, spolupráce > smlouvy, reakce > plán."
    }
  ],
  6: [
    {
      q: "Co je ontologie v informatice?",
      options: [
        "Formální explicitní specifikace sdílené konceptualizace domény",
        "Knihovna funkcí pro práci s grafy",
        "Slovník programovacího jazyka",
        "Statistický model textu"
      ],
      correct: 0,
      explanation: "Definice podle Grubera: ontologie zachycuje pojmy, jejich vlastnosti a vztahy v doméně formálním způsobem."
    },
    {
      q: "Co je triplet v RDF?",
      options: [
        "Trojice subjekt–predikát–objekt vyjadřující jeden fakt",
        "Tři libovolné URI v dokumentu",
        "Trojice tříd v hierarchii",
        "Triáda agentů v distribuovaném systému"
      ],
      correct: 0,
      explanation: "Základní stavební prvek RDF je trojice (s, p, o), z níž se skládá graf znalostí."
    },
    {
      q: "Co je principem Linked Data?",
      options: [
        "Používat URI k pojmenování věcí, HTTP pro dereferenci a propojovat data odkazy mezi datovými sadami",
        "Centralizovat data do jedné databáze",
        "Šifrovat propojení mezi datovými body",
        "Propojovat soubory přes symlinky v souborovém systému"
      ],
      correct: 0,
      explanation: "Principy Linked Data (Tim Berners-Lee): identifikátory URI, HTTP přístupnost, standardní formáty (RDF) a odkazy mezi daty."
    },
    {
      q: "Jaký je rozdíl mezi daty, informacemi a znalostmi (pyramida DIKW)?",
      options: [
        "Data jsou syrová fakta, informace jsou data v kontextu, znalosti jsou propojené informace s významem",
        "Jde o synonyma odlišená pouze jazykově",
        "Data jsou textová, informace obrazová, znalosti zvuková",
        "Znalosti jsou méně cenné než data"
      ],
      correct: 0,
      explanation: "DIKW pyramida: Data → Information → Knowledge (→ Wisdom) – každá úroveň přidává kontext a smysl."
    },
    {
      q: "Co je třída a co instance v OWL ontologii?",
      options: [
        "Třída je množina jedinců s podobnými vlastnostmi, instance je konkrétní jedinec",
        "Třída je metoda, instance je její volání",
        "Třída je tabulka, instance je sloupec",
        "Třída i instance znamenají totéž v OWL"
      ],
      correct: 0,
      explanation: "OWL třídy (owl:Class) jsou kolekce individuí; instance jsou konkrétní entity zařazené do tříd (rdf:type)."
    },
    {
      q: "Co znamená 'open world assumption' v sémantickém webu?",
      options: [
        "Co není uvedeno, není považováno za nepravdivé – pouze za neznámé",
        "Data jsou volně dostupná všem uživatelům",
        "Ontologie nesmí být uzavřena před dokončením",
        "Predikáty se vyhodnocují zleva doprava"
      ],
      correct: 0,
      explanation: "OWA: nepřítomnost faktu neimplikuje jeho neplatnost (opačně k closed world assumption v databázích)."
    }
  ],
  7: [
    {
      q: "K čemu slouží jazyk SPARQL?",
      options: [
        "K dotazování (a aktualizaci) RDF grafů pomocí vzorů trojic",
        "K definici schémat ontologií",
        "K překladu mezi XML a RDF",
        "Ke správě uživatelských oprávnění v sémantických aplikacích"
      ],
      correct: 0,
      explanation: "SPARQL je W3C standard pro dotazy nad RDF; pracuje s pattern matching na trojicích a podporuje SELECT/CONSTRUCT/ASK/DESCRIBE."
    },
    {
      q: "Co dělá SPARQL klauzule OPTIONAL?",
      options: [
        "Zahrnuje další vzor, ale výsledek nevyřadí, pokud se vzor neshoduje (analogie LEFT JOIN)",
        "Povolí dotazu běžet déle než limit",
        "Označí proměnnou jako nepovinnou pro klienta",
        "Vrátí výsledky v náhodném pořadí"
      ],
      correct: 0,
      explanation: "OPTIONAL umožňuje rozšířit řešení o údaje, které někdy chybí, bez vyloučení záznamu."
    },
    {
      q: "Co je vrstva RDFS nad RDF?",
      options: [
        "Schématový jazyk umožňující definovat třídy, podtřídy a vlastnosti pro RDF",
        "Bezpečnostní vrstva pro RDF přenos",
        "Schéma pro relační databáze v sémantickém webu",
        "Server pro publikaci RDF dokumentů"
      ],
      correct: 0,
      explanation: "RDFS přidává základní modelovací prvky (rdfs:Class, rdfs:subClassOf, rdfs:domain, rdfs:range) pro odvozování."
    },
    {
      q: "Co je inference (odvozování) v sémantickém webu?",
      options: [
        "Automatické odvození nových trojic z existujících na základě sémantiky RDFS/OWL",
        "Statistický odhad chybějících hodnot",
        "Zrychlené hledání cesty v grafu",
        "Učení neuronové sítě nad RDF"
      ],
      correct: 0,
      explanation: "Reasoner aplikuje pravidla (např. transitivita podtřídy) a doplňuje implicitní fakta do grafu."
    },
    {
      q: "Co je SPARQL endpoint?",
      options: [
        "Webová služba (typicky HTTP) přijímající SPARQL dotazy a vracející výsledky",
        "Soubor s lokální RDF databází",
        "Vstupní fronta pro asynchronní úlohy",
        "Nástroj na vizualizaci grafů"
      ],
      correct: 0,
      explanation: "Endpoint je HTTP rozhraní triplestore, např. DBpedia SPARQL endpoint."
    },
    {
      q: "Co je rozdíl mezi OWL DL a OWL Full?",
      options: [
        "OWL DL je rozhodnutelná podmnožina s formálními omezeními, OWL Full nemá omezení, ale není rozhodnutelná",
        "OWL DL podporuje data type properties, OWL Full ne",
        "OWL DL pracuje jen lokálně, OWL Full v cloudu",
        "Není mezi nimi rozdíl, jen historický název"
      ],
      correct: 0,
      explanation: "OWL DL odpovídá Description Logic SHOIN/SROIQ; OWL Full umožňuje míchat třídy a instance bez omezení – ale ztrácí rozhodnutelnost."
    }
  ],
  8: [
    {
      q: "Co dělá relační operace projekce (π)?",
      options: [
        "Vybírá zadané sloupce z relace (vertikální výřez)",
        "Vybírá řádky splňující podmínku",
        "Spojí dvě tabulky podle klíče",
        "Seřadí relaci podle sloupců"
      ],
      correct: 0,
      explanation: "Projekce π_{A,B}(R) ponechá jen vyjmenované atributy; výsledek je relace s méně sloupci."
    },
    {
      q: "Co je integritní omezení typu cizí klíč (foreign key)?",
      options: [
        "Hodnoty atributu musí existovat jako primární klíč v jiné (nebo téže) tabulce",
        "Hodnoty atributu musí být unikátní v rámci tabulky",
        "Atribut nesmí obsahovat NULL",
        "Atribut musí být indexován pro rychlejší vyhledávání"
      ],
      correct: 0,
      explanation: "FK zajišťuje referenční integritu mezi tabulkami; databáze brání vzniku nereferencovaných hodnot."
    },
    {
      q: "Co je transakce v DBS?",
      options: [
        "Logická jednotka práce splňující vlastnosti ACID",
        "Síťové spojení klienta s databází",
        "Synonymum pro SQL dotaz",
        "Záloha databáze v daném čase"
      ],
      correct: 0,
      explanation: "Transakce je atomická posloupnost operací splňující Atomicity, Consistency, Isolation, Durability."
    },
    {
      q: "Co znamená NULL v SQL?",
      options: [
        "Neznámou nebo chybějící hodnotu – není to nula ani prázdný řetězec",
        "Vždy hodnotu rovnou prázdnému řetězci",
        "Speciální typ ukazatele",
        "Neplatnou hodnotu, která způsobí chybu dotazu"
      ],
      correct: 0,
      explanation: "NULL reprezentuje neznámou hodnotu; porovnání s ní vrací UNKNOWN, takže se používá IS NULL / IS NOT NULL."
    },
    {
      q: "Jaký je rozdíl mezi WHERE a HAVING?",
      options: [
        "WHERE filtruje řádky před agregací, HAVING filtruje skupiny po agregaci",
        "Není mezi nimi rozdíl, jde o aliasy",
        "WHERE se používá u JOIN, HAVING u UNION",
        "HAVING povoluje vnořené dotazy, WHERE ne"
      ],
      correct: 0,
      explanation: "WHERE běží před GROUP BY, HAVING po něm – proto v HAVING můžeme použít agregační funkce."
    },
    {
      q: "Co je relační operace přirozeného spojení (natural join)?",
      options: [
        "Spojí dvě relace podle sloupců se shodnými jmény a duplicitní sloupce zachová jednou",
        "Vždy spojí relace podle prvního sloupce",
        "Spojí relace pomocí kartézského součinu bez podmínky",
        "Spojí relace, jen pokud mají stejný počet řádků"
      ],
      correct: 0,
      explanation: "Natural join automaticky equi-spojí stejnojmenné sloupce a v projekci je nechá pouze jednou."
    }
  ],
  9: [
    {
      q: "Jaká je definice druhé normální formy (2NF)?",
      options: [
        "Relace je v 1NF a všechny neklíčové atributy jsou závislé na celém primárním klíči (žádná částečná závislost)",
        "Relace neobsahuje žádné NULL hodnoty",
        "Všechny atributy jsou indexovány",
        "V relaci je právě jeden klíč"
      ],
      correct: 0,
      explanation: "2NF odstraňuje částečné závislosti vůči složenému primárnímu klíči; vyžaduje předtím 1NF."
    },
    {
      q: "Co je v E-R modelu slabá entita?",
      options: [
        "Entita, jejíž existence závisí na jiné entitě a její klíč obsahuje klíč nadřazené entity",
        "Entita s málo atributy",
        "Entita bez primárního klíče",
        "Entita zobrazená přerušovanou čarou kvůli návrhové nejistotě"
      ],
      correct: 0,
      explanation: "Slabá entita potřebuje vlastníka (identifying relationship) – sama se nedá jednoznačně identifikovat."
    },
    {
      q: "Jaký vztah v E-R modeluje kardinalita M:N?",
      options: [
        "Mnoho ku mnoha – v relačním schématu se realizuje vazební tabulkou",
        "Jeden ku jednomu – stačí přidat sloupec do jedné z tabulek",
        "Mnoho ku jedné – cizí klíč na straně mnoha",
        "Žádný vztah, jde o nekonzistenci modelu"
      ],
      correct: 0,
      explanation: "M:N vztah se převede pomocnou tabulkou s dvěma cizími klíči (asociativní entita)."
    },
    {
      q: "Co znamená atribut multivalued v E-R modelu?",
      options: [
        "Atribut nabývá více hodnot pro jednu entitu (např. seznam telefonních čísel)",
        "Atribut má více možných datových typů",
        "Hodnoty atributu se vážou na více tabulek",
        "Atribut, který je zároveň primárním klíčem"
      ],
      correct: 0,
      explanation: "Vícehodnotový atribut se obvykle v relačním modelu rozloží do samostatné tabulky."
    },
    {
      q: "Co je Boyce-Coddova normální forma (BCNF)?",
      options: [
        "Každá netriviální funkční závislost vychází z nadklíče",
        "Třetí normální forma rozšířená o NOT NULL omezení",
        "Forma vyžadující denormalizaci pro výkon",
        "Forma vyžadující jediný atribut v klíči"
      ],
      correct: 0,
      explanation: "BCNF je přísnější varianta 3NF, která eliminuje i závislosti mezi částmi kandidátních klíčů."
    },
    {
      q: "Co je atribut odvozený (derived) v E-R modelu?",
      options: [
        "Atribut, jehož hodnota lze vypočítat z jiných atributů (např. věk z data narození)",
        "Atribut zděděný z nadřazené entity",
        "Atribut vytvořený generalizací",
        "Atribut sloužící jako cizí klíč"
      ],
      correct: 0,
      explanation: "Derived atribut se v modelu označuje a v databázi se obvykle neukládá, nýbrž počítá (případně jako pohled/sloupec generated)."
    }
  ],
  10: [
    {
      q: "Proč se v počítačové grafice používají homogenní souřadnice?",
      options: [
        "Umožňují vyjádřit translaci jako násobení maticí a sjednotit afinní i projektivní transformace",
        "Zjednodušují uložení barev v paměti",
        "Zvyšují přesnost čísel s plovoucí řádovou čárkou",
        "Šetří paměť tím, že vynechávají souřadnici z"
      ],
      correct: 0,
      explanation: "Přidání w-souřadnice umožní vyjádřit posun maticí 4×4 a kombinovat všechny transformace násobením."
    },
    {
      q: "Co je perspektivní projekce?",
      options: [
        "Promítání, kde se vzdálenější objekty zobrazí menší (paprsky se sbíhají do středu promítání)",
        "Promítání, kde se velikost objektů nemění bez ohledu na vzdálenost",
        "Promítání pouze na osu z",
        "Promítání pomocí ortogonálních paprsků"
      ],
      correct: 0,
      explanation: "Perspektivní projekce simuluje pohled lidského oka; ortografická naopak zachovává velikost (paprsky rovnoběžné)."
    },
    {
      q: "Jakým způsobem se v homogenních souřadnicích vyjadřuje bod a vektor?",
      options: [
        "Bod má w = 1, směrový vektor má w = 0",
        "Bod má w = 0, směrový vektor má w = 1",
        "Oba mají w = 1, rozliší se předznamenáním",
        "Bod má w = -1, vektor w = +1"
      ],
      correct: 0,
      explanation: "Bod (x,y,z,1) se přemísťuje při posunu, vektor (x,y,z,0) je posunem invariantní."
    },
    {
      q: "Co popisuje matice modelu (model matrix)?",
      options: [
        "Transformaci z lokálních souřadnic objektu do souřadnic světa",
        "Transformaci ze světa do kamery",
        "Transformaci z kamery do clip space",
        "Promítnutí na obrazovku"
      ],
      correct: 0,
      explanation: "Model → World → View → Projection: model matrix posouvá/rotuje/měřítkuje vrcholy ze své lokální soustavy do světové."
    },
    {
      q: "Co je 'frustum' v souvislosti s kamerou?",
      options: [
        "Komolý jehlan reprezentující zorné pole perspektivní kamery",
        "Krychlová oblast pro ortografickou kameru",
        "Speciální shader pro stíny",
        "Datová struktura pro BVH"
      ],
      correct: 0,
      explanation: "View frustum ohraničuje viditelný prostor; objekty mimo něj jsou ořezány (frustum culling)."
    },
    {
      q: "Co dělá inverzní matice pohledu (view matrix)?",
      options: [
        "Transformuje souřadnice kamery zpět do světových souřadnic",
        "Otáčí scénu kolem osy z",
        "Mění perspektivu na ortografickou",
        "Provádí stínování fragmentu"
      ],
      correct: 0,
      explanation: "Inverze view matice vede z kamery zpět do světa; samotná view matice transformuje svět do soustavy kamery."
    }
  ],
  11: [
    {
      q: "Jaký je rozdíl mezi konstruktorovou a setterovou injektáží?",
      options: [
        "Konstruktorová předá závislosti při vytvoření a podporuje neměnnost; setterová přiřazuje po vytvoření a hodí se pro volitelné závislosti",
        "Konstruktorová je rychlejší, setterová je vždy pomalejší",
        "Setterová funguje jen v Javě",
        "Není mezi nimi technický rozdíl"
      ],
      correct: 0,
      explanation: "Konstruktorová injektáž zaručí povinné závislosti při sestrojení; setterová nabídne flexibilitu, ale objekt může být dočasně nekompletní."
    },
    {
      q: "Co je IoC kontejner?",
      options: [
        "Komponenta zodpovědná za vytváření, konfiguraci a propojování objektů na základě definovaných závislostí",
        "Konfigurace serveru pro Docker kontejnery",
        "Třída pro uchovávání globálního stavu aplikace",
        "Nástroj pro správu front zpráv"
      ],
      correct: 0,
      explanation: "IoC kontejner (Spring, Guice, .NET DI) řídí životní cyklus a sestavení komponent místo aplikace samotné."
    },
    {
      q: "Co je princip 'Hollywood' v IoC?",
      options: [
        "Don't call us, we'll call you – framework volá uživatelský kód, ne naopak",
        "Programátoři by měli pracovat odděleně v týmech",
        "Vždy preferuj produkční kód před testy",
        "Architektura má být centralizovaná"
      ],
      correct: 0,
      explanation: "Inversion of Control obrací řízení: vlastní kód se zapojuje do životního cyklu frameworku, který ho volá."
    },
    {
      q: "Co je service locator a v čem se liší od DI?",
      options: [
        "Vzor, kde si komponenta sama vyžádá závislost z registru – závislost na lokátoru tím skrytě vzniká",
        "Synonymum pro DI bez rozdílu",
        "Síťová služba pro vyhledávání mikroslužeb",
        "Nástroj pro logování závislostí"
      ],
      correct: 0,
      explanation: "Service Locator je explicitní vyhledání závislosti uvnitř komponenty; DI naopak závislosti dodá zvenku, čímž je závislost viditelnější."
    },
    {
      q: "Co je 'scope' (rozsah životnosti) komponenty v DI kontejneru?",
      options: [
        "Pravidlo, jak dlouho instance žije a jak je sdílena (např. singleton, prototype, request)",
        "Oblast paměti vyhrazená kontejnerem",
        "Kontextový balíček konfigurace",
        "Maximální počet instancí třídy"
      ],
      correct: 0,
      explanation: "Scope určuje, zda se použije sdílená instance (singleton), nová pokaždé (prototype), na request, session atd."
    },
    {
      q: "Co je výhoda DI z hlediska testování?",
      options: [
        "Závislosti lze snadno nahradit mocky/stuby, čímž se izolují testované komponenty",
        "Testy jsou automaticky generovány",
        "Eliminuje potřebu unit testů",
        "Spouští testy v separátním procesu"
      ],
      correct: 0,
      explanation: "Díky tomu, že komponenta přijímá závislosti zvenku, je v testu lze nahradit kontrolovanými implementacemi."
    }
  ],
  12: [
    {
      q: "Co je v REST architektuře HATEOAS?",
      options: [
        "Princip, podle kterého klient přechází stavy aplikace pomocí hypermedia odkazů obsažených v odpovědích",
        "Algoritmus pro hashování tokenů",
        "Formát serializace objektů",
        "Bezpečnostní hlavička proti CSRF"
      ],
      correct: 0,
      explanation: "Hypermedia as the Engine of Application State je třetí úroveň Richardsonova modelu zralosti REST."
    },
    {
      q: "Jaký je významový rozdíl mezi PUT a PATCH?",
      options: [
        "PUT nahrazuje celý zdroj, PATCH aplikuje částečnou úpravu",
        "PUT je idempotentní, PATCH ne",
        "PUT se používá jen pro vytvoření, PATCH jen pro mazání",
        "PUT vrací 201, PATCH vrací 200 vždy"
      ],
      correct: 0,
      explanation: "PUT je idempotentní úplná náhrada, PATCH popisuje delta úprav; idempotence PATCH závisí na implementaci."
    },
    {
      q: "Co je hlavní nevýhodou monolitu oproti mikroslužbám?",
      options: [
        "Obtížné nezávislé nasazování a škálování jednotlivých částí aplikace",
        "Nemožnost mít sdílenou databázi",
        "Nutnost používat REST protokol",
        "Vyžaduje vždy jazyk Go"
      ],
      correct: 0,
      explanation: "Monolit se nasazuje jako celek, takže drobné změny vynucují kompletní rollout; mikroslužby tuto vazbu rozvolňují."
    },
    {
      q: "Co je circuit breaker pattern v mikroslužbách?",
      options: [
        "Mechanismus, který po opakovaných chybách dočasně přestane volat poškozenou službu a chrání tak systém",
        "Hardwarový jistič v datacentru",
        "Plánovač restartu kontejnerů",
        "Limit počtu uživatelů na endpoint"
      ],
      correct: 0,
      explanation: "Circuit breaker (např. Hystrix, Resilience4j) brání kaskádovým selháním tím, že rychle vrátí chybu/náhradu místo dlouhých timeoutů."
    },
    {
      q: "Čím se odlišuje SOAP od REST?",
      options: [
        "SOAP je protokol postavený na XML s WSDL kontraktem; REST je architektonický styl nad HTTP s libovolným payloadem",
        "REST je starší než SOAP",
        "SOAP nemůže běžet přes HTTP",
        "REST vyžaduje WS-Security"
      ],
      correct: 0,
      explanation: "SOAP definuje obálku zpráv a WS-* standardy; REST se opírá o HTTP sémantiku a zdroje, nejčastěji s JSON."
    },
    {
      q: "Co je API gateway?",
      options: [
        "Vstupní bod, který směruje požadavky na mikroslužby a může řešit autentizaci, rate limiting či agregaci",
        "Brána pro Wi-Fi v datacentru",
        "Generátor klientů pro OpenAPI",
        "Service mesh sidecar"
      ],
      correct: 0,
      explanation: "API gateway centralizuje cross-cutting concerns a poskytuje jednotný interface pro vnější klienty."
    }
  ],
  13: [
    {
      q: "Jaký je rozdíl mezi modely barev RGB a CMYK?",
      options: [
        "RGB je aditivní (pro obrazovky), CMYK subtraktivní (pro tisk)",
        "RGB má 3 kanály, CMYK 2",
        "CMYK pracuje výhradně v plovoucí čárce",
        "Mezi modely není praktický rozdíl"
      ],
      correct: 0,
      explanation: "RGB skládá barvy přidáním světla, CMYK odečítá ze světla; různá výchozí prostředí (displej vs. tisk)."
    },
    {
      q: "Co dělá Bresenhamův algoritmus?",
      options: [
        "Rasterizuje úsečku v rastru pouze pomocí celočíselné aritmetiky",
        "Vyplňuje polygony semínkovou metodou",
        "Antialiasuje hrany pomocí vyhlazování",
        "Detekuje hrany v obraze"
      ],
      correct: 0,
      explanation: "Bresenhamův algoritmus rozhoduje, který pixel rozsvítit, pomocí inkrementálních celočíselných chyb."
    },
    {
      q: "Co je antialiasing v rasterizaci?",
      options: [
        "Technika potlačení vizuálních artefaktů (zubatých hran) způsobených vzorkováním na konečném rastru",
        "Komprese textur",
        "Detekce kolize objektů",
        "Algoritmus pro výpočet stínů"
      ],
      correct: 0,
      explanation: "Antialiasing (FSAA, MSAA, FXAA) zjemňuje přechody barev/intensity na hranách objektů."
    },
    {
      q: "Co je 'scanline fill' algoritmus?",
      options: [
        "Vyplňování polygonu po jednotlivých řádcích pomocí průsečíků hran s aktuálním řádkem",
        "Posun viditelné scény při scrollování",
        "Hardwarová operace v shaderu",
        "Detekce viditelnosti BSP stromem"
      ],
      correct: 0,
      explanation: "Pro každý y vyhledá průsečíky aktivních hran, seřadí je a vyplňuje úseky mezi nimi."
    },
    {
      q: "Co je 'flood fill'?",
      options: [
        "Algoritmus vyplňující souvislou oblast stejné barvy začínající od daného pixelu (semínka)",
        "Rasterizace kružnice rovnicí",
        "Antialiasing s váženými průměry",
        "Vyplnění hranice úsečky pomocí Bézierových křivek"
      ],
      correct: 0,
      explanation: "Flood fill rekurzivně/přes frontu rozšiřuje oblast od semínka, dokud naráží na stejnou cílovou barvu."
    },
    {
      q: "K čemu slouží gama korekce?",
      options: [
        "Kompenzuje nelineární odezvu zobrazovacích zařízení tak, aby výsledný obraz odpovídal lidskému vnímání jasu",
        "Mění saturaci barev",
        "Komprimuje obraz ztrátově",
        "Změní rozlišení obrazu na čtvercové pixely"
      ],
      correct: 0,
      explanation: "Gama převod (např. exponent ≈ 2.2) řeší rozdíl mezi lineárním osvětlením scény a nelineárním vnímáním/zobrazením."
    }
  ],
  14: [
    {
      q: "Co je z-buffer (depth buffer)?",
      options: [
        "Paměť hloubek pro každý pixel, podle které se rozhoduje o viditelnosti fragmentů",
        "Vyrovnávací paměť pro vertexy",
        "Buffer pro odložené textury",
        "Paměť pro střelu paprsku v ray-tracingu"
      ],
      correct: 0,
      explanation: "Z-buffer zaznamenává hloubku nejbližšího vykresleného fragmentu a porovnáním rozhodne, zda nový fragment přepíše."
    },
    {
      q: "Jaký je rozdíl mezi vertex shaderem a fragment shaderem?",
      options: [
        "Vertex shader transformuje vrcholy, fragment shader určuje výslednou barvu pixelu",
        "Vertex shader funguje na CPU, fragment na GPU",
        "Vertex shader generuje textury, fragment shader vrcholy",
        "Mezi nimi není funkční rozdíl"
      ],
      correct: 0,
      explanation: "V grafickém pipeline pracuje vertex shader na vrcholech, rasterizer generuje fragmenty a fragment shader spočítá barvu."
    },
    {
      q: "Co je Phongův osvětlovací model?",
      options: [
        "Empirický model osvětlení se složkami ambient, diffuse a specular",
        "Algoritmus pro globální osvětlení s ray-tracingem",
        "Model deformace povrchů pomocí kostí",
        "Heuristika pro detekci kolize"
      ],
      correct: 0,
      explanation: "Phong sčítá ambientní, difuzní (Lambert) a zrcadlovou složku; specular závisí na úhlu mezi reflektovaným paprskem a kamerou."
    },
    {
      q: "K čemu slouží index buffer?",
      options: [
        "Ukládá indexy do vertex bufferu, čímž umožňuje sdílení vrcholů mezi trojúhelníky",
        "Mapuje souřadnice textury na obrazovku",
        "Drží pořadí vykreslovacích volání",
        "Eviduje hloubku objektů"
      ],
      correct: 0,
      explanation: "Index buffer šetří paměť tím, že vrcholy se ukládají jednou a indexy popisují primitiva."
    },
    {
      q: "Co je technika shadow mapping?",
      options: [
        "Stíny se počítají renderem scény z pohledu světla; vzniklá hloubková mapa pak slouží k testu stínu při finálním vykreslení",
        "Generování stínů pomocí raytracingu na CPU",
        "Předpočítané stíny zapečené do textur (lightmaps)",
        "Vykreslení stínu zrcadlením geometrie"
      ],
      correct: 0,
      explanation: "Shadow map = depth buffer ze světla; fragment je ve stínu, je-li jeho hloubka větší než hodnota v mapě."
    },
    {
      q: "Jaké je pořadí typických fází grafického pipeline?",
      options: [
        "Vertex stage → tessellation/geometry → rasterizace → fragment stage → vystupní operace",
        "Rasterizace → vertex stage → fragment stage → výstup",
        "Fragment → vertex → výstup → rasterizace",
        "Geometry → rasterizace → vertex → výstup"
      ],
      correct: 0,
      explanation: "Moderní pipeline: input assembly, vertex shader, (tess, geom), rasterizer, fragment shader, output merger."
    }
  ],
  15: [
    {
      q: "Co je Nyquistův-Shannonův vzorkovací teorém?",
      options: [
        "Vzorkovací frekvence musí být alespoň dvojnásobkem nejvyšší frekvence signálu, aby nedošlo k aliasingu",
        "Vzorkování musí probíhat přesně 44.1 kHz",
        "Vzorkování musí být ekvidistantní v prostoru",
        "Vzorky lze zahodit, pokud se opakují"
      ],
      correct: 0,
      explanation: "Nyquistova podmínka f_s ≥ 2·f_max zaručuje rekonstrukci signálu bez aliasingu."
    },
    {
      q: "Co je histogram obrazu?",
      options: [
        "Funkce udávající četnost jednotlivých intenzit/jasů pixelů v obraze",
        "Vektor barevných kanálů pixelu",
        "Filtr pro úpravu kontrastu",
        "Statistický odhad šumu v obraze"
      ],
      correct: 0,
      explanation: "Histogram zobrazuje rozdělení hodnot pixelů; lze na něm dělat ekvalizaci, prahování apod."
    },
    {
      q: "Co je segmentace obrazu?",
      options: [
        "Rozdělení obrazu na oblasti odpovídající objektům nebo částem scény",
        "Komprese obrazu po blocích",
        "Vyhlazení obrazu Gaussovým filtrem",
        "Doostření hran"
      ],
      correct: 0,
      explanation: "Segmentace klasifikuje pixely do skupin (např. prahováním, hranovou detekcí, K-means, neuronové sítě)."
    },
    {
      q: "Jaký je rozdíl mezi ztrátovou a bezeztrátovou kompresí?",
      options: [
        "Bezeztrátová zachovává všechna data, ztrátová zahodí část informace ve prospěch většího kompresního poměru",
        "Bezeztrátová pracuje pouze pro text, ztrátová pro obraz",
        "Ztrátová je vždy rychlejší než bezeztrátová",
        "Bezeztrátová potřebuje hardwarovou akceleraci"
      ],
      correct: 0,
      explanation: "JPEG/MP3 = ztrátové, PNG/FLAC/ZIP = bezeztrátové. Volba závisí na požadované kvalitě a velikosti."
    },
    {
      q: "Co dělá konvoluce s Gaussovským jádrem?",
      options: [
        "Vyhlazuje obraz – potlačuje šum a vysoké frekvence",
        "Zaostřuje hrany detekcí gradientu",
        "Detekuje rohy podle Harrisova kritéria",
        "Provádí ekvalizaci histogramu"
      ],
      correct: 0,
      explanation: "Gaussovský filtr je lineární low-pass filtr; vyhlazení je užitečné jako příprava před hranovou detekcí."
    },
    {
      q: "Co je aliasing v obrazových datech?",
      options: [
        "Vznik nežádoucích artefaktů (např. moaré), když je vzorkovací frekvence pod Nyquistovým limitem",
        "Použití aliasu funkce pro lepší čitelnost kódu",
        "Komprese stejných barevných oblastí",
        "Označení dvou jmen pro stejný pixel"
      ],
      correct: 0,
      explanation: "Aliasing je důsledek podvzorkování; v obrazech způsobuje jaggies, mřížkové artefakty, falešné vzory."
    }
  ],
  16: [
    {
      q: "Co je CSRF útok?",
      options: [
        "Cross-Site Request Forgery – útočník donutí prohlížeč přihlášeného uživatele odeslat nechtěný požadavek na jinou stránku",
        "Odposlech komunikace ve veřejné Wi-Fi",
        "Injekce JS kódu do stránky uživatele",
        "Brute-force útok na heslo"
      ],
      correct: 0,
      explanation: "CSRF zneužívá implicitní cookie autentizaci; obranou jsou anti-CSRF tokeny nebo SameSite cookies."
    },
    {
      q: "Co je SPA (Single Page Application)?",
      options: [
        "Webová aplikace, která se načte jednou a další interakce probíhají v JavaScriptu bez celkového reloadu",
        "Aplikace s jedinou HTML stránkou bez JS",
        "Statická stránka generovaná SSR",
        "Aplikace pro jednoho uživatele"
      ],
      correct: 0,
      explanation: "SPA komunikuje s API a aktualizuje DOM v prohlížeči (React/Vue/Angular); celá navigace je řešena na klientu."
    },
    {
      q: "K čemu slouží OAuth 2.0?",
      options: [
        "K udělení omezeného přístupu k uživatelským prostředkům třetí straně bez sdílení hesla",
        "Pro hashování hesel",
        "Pro šifrování komunikace mezi servery",
        "K validaci e-mailových adres"
      ],
      correct: 0,
      explanation: "OAuth 2.0 definuje autorizaci pomocí access tokenů, s grant typy (Authorization Code, Client Credentials atd.)."
    },
    {
      q: "Jak se liší autentizace a autorizace?",
      options: [
        "Autentizace ověřuje identitu (kdo jsem), autorizace určuje oprávnění (co smím)",
        "Jsou to synonyma",
        "Autentizace je vždy synchronní, autorizace asynchronní",
        "Autorizace probíhá před autentizací"
      ],
      correct: 0,
      explanation: "Nejdřív identifikace + autentizace, pak autorizace na konkrétní zdroj/akci."
    },
    {
      q: "Co je server-side rendering (SSR)?",
      options: [
        "Server vygeneruje finální HTML a pošle ho klientovi, typicky kvůli SEO a rychlejšímu prvnímu vykreslení",
        "Vykreslení obrazovky na serveru jako screenshot",
        "Stahování JavaScriptových balíčků až na serveru",
        "Synonymum pro CDN"
      ],
      correct: 0,
      explanation: "SSR (Next.js, Nuxt) generuje HTML na serveru a klient přebírá interaktivitu hydratací."
    },
    {
      q: "Co je SQL injection?",
      options: [
        "Útok, při kterém útočník vloží vlastní SQL kód do dotazu kvůli nevhodnému spojování vstupů s SQL",
        "Optimalizace SQL pomocí indexů",
        "Synonymum pro stored procedure",
        "Útok na DNS server"
      ],
      correct: 0,
      explanation: "Obranou je parametrizace dotazů (prepared statements) a ne konkatenace uživatelského vstupu do SQL."
    }
  ],
  17: [
    {
      q: "Co je rozdíl mezi MVC a MVVM?",
      options: [
        "MVVM zavádí ViewModel s data bindingem; pohled je synchronizován automaticky, controller chybí",
        "MVVM se používá pouze v Javě, MVC v .NET",
        "MVC nepoužívá model",
        "Není mezi nimi rozdíl, jen jiný název"
      ],
      correct: 0,
      explanation: "MVVM (typické v WPF/Angular) propojuje View s ViewModelem oboustranným bindingem; MVC pohled aktualizuje controller."
    },
    {
      q: "Co dělá Observer pattern?",
      options: [
        "Definuje vztah 1:N, kdy se po změně stavu subjektu automaticky informují všichni zaregistrovaní pozorovatelé",
        "Sleduje běh programu pro účely ladění",
        "Kontroluje validitu dat ve formuláři",
        "Posílá zprávy mezi mikroslužbami"
      ],
      correct: 0,
      explanation: "Observer (publish-subscribe) odděluje subjekt od jeho odběratelů a podporuje volné vazby."
    },
    {
      q: "Co je hlavní rys SOA (Service-Oriented Architecture)?",
      options: [
        "Aplikace je složena z volně provázaných služeb komunikujících přes standardizovaná rozhraní",
        "Všechny moduly sdílí stejnou databázi a paměť",
        "Architektura se skládá z UI a kernelu",
        "Aplikace se buduje pomocí jediné transakce"
      ],
      correct: 0,
      explanation: "SOA staví na poskytovatelích a konzumentech služeb, často s registrem služeb a definovanými kontrakty (SOAP/REST)."
    },
    {
      q: "Co je MVP (Model-View-Presenter)?",
      options: [
        "Vzor s pasivním pohledem, který deleguje veškerou logiku do Presenteru držícího referenci na pohled",
        "Architektura pro správu mikroprocesoru",
        "Singleton držící konfiguraci",
        "Vzor pro práci s vlákny"
      ],
      correct: 0,
      explanation: "V MVP je View pasivní a všechny eventy obsluhuje Presenter; usnadňuje testování bez UI frameworku."
    },
    {
      q: "Co je Strategy pattern?",
      options: [
        "Vzor zapouzdřující rodinu algoritmů a umožňující jejich záměnu za běhu",
        "Vzor pro chování v multivláknovém prostředí",
        "Singleton držící konfiguraci",
        "Vzor pro vytvoření objektu krok po kroku"
      ],
      correct: 0,
      explanation: "Strategy odděluje algoritmus od kontextu, takže lze měnit chování bez podmíněných příkazů."
    },
    {
      q: "Co dělá Factory Method?",
      options: [
        "Deleguje tvorbu objektů na podtřídy, aniž by klient znal konkrétní třídu produktu",
        "Vytváří všechny objekty aplikace v hlavní metodě",
        "Sestavuje objekty z volitelných částí",
        "Slouží jako synchronizační primitivum"
      ],
      correct: 0,
      explanation: "Factory Method definuje rozhraní pro tvorbu objektu; podtřídy rozhodují, jakou konkrétní třídu instancovat."
    }
  ],
  18: [
    {
      q: "Jaká je průměrná časová složitost Quicksortu a kdy nastává jeho nejhorší případ?",
      options: [
        "Průměrně O(n log n); nejhorší případ O(n²) typicky pro již setříděné pole se špatným pivotem",
        "Průměrně O(n²), nejhorší O(n log n)",
        "Vždy O(n log n) bez ohledu na vstup",
        "Vždy O(n) díky randomizaci"
      ],
      correct: 0,
      explanation: "Quicksort dělí pole podle pivota; nevhodný pivot vede k nevyváženému dělení a O(n²)."
    },
    {
      q: "Co znamená, že je řadicí algoritmus stabilní?",
      options: [
        "Zachovává relativní pořadí prvků se shodným klíčem",
        "Není závislý na velikosti vstupu",
        "Funguje vždy v polynomiálním čase",
        "Nevyžaduje extra paměť"
      ],
      correct: 0,
      explanation: "Stabilní jsou např. Merge sort, Insertion sort; Quicksort obvykle není stabilní."
    },
    {
      q: "Co je v Mergesortu hlavní výhoda a nevýhoda?",
      options: [
        "Výhoda: garantované O(n log n) a stabilita; nevýhoda: vyžaduje O(n) extra paměti",
        "Výhoda: in-place řazení; nevýhoda: nestabilní",
        "Výhoda: lineární čas; nevýhoda: omezení na celá čísla",
        "Nemá žádné výhody"
      ],
      correct: 0,
      explanation: "Mergesort dělí a slévá pole, je stabilní a předvídatelný, ale potřebuje pomocné pole."
    },
    {
      q: "Co dělá Bucket sort?",
      options: [
        "Rozdělí prvky do koeficientových přihrádek a každou přihrádku samostatně seřadí",
        "Seřadí prvky pomocí jediného srovnání",
        "Spočítá počty výskytů a poskládá výstup (counting sort)",
        "Najde medián a rekurzivně třídí poloviny"
      ],
      correct: 0,
      explanation: "Bucket sort předpokládá rovnoměrné rozdělení vstupu; v ideálním případě dosáhne O(n)."
    },
    {
      q: "Která vlastnost odlišuje Insertion sort od Selection sortu?",
      options: [
        "Insertion sort využívá částečně setříděný vstup (téměř seřazené pole zpracuje téměř lineárně)",
        "Selection sort je stabilní, Insertion ne",
        "Selection sort běží v O(n log n)",
        "Insertion sort nepoužívá srovnání"
      ],
      correct: 0,
      explanation: "Insertion sort má adaptivní chování: na téměř seřazených datech je velmi rychlý; Selection vždy O(n²)."
    },
    {
      q: "Co je dolní mez složitosti srovnávacího řazení?",
      options: [
        "Ω(n log n) – plyne z modelu rozhodovacího stromu",
        "Ω(n) – odpovídá jednomu průchodu polem",
        "Ω(n²) – kvůli nutnosti porovnat každé dva prvky",
        "Bez dolní meze – závisí na implementaci"
      ],
      correct: 0,
      explanation: "Rozhodovací strom má n! listů; jeho hloubka je Ω(n log n), což je obecná dolní mez srovnávacích algoritmů."
    }
  ],
  19: [
    {
      q: "Jaká je časová složitost binárního vyhledávání?",
      options: [
        "O(log n) v setříděném poli",
        "O(n) i v setříděném poli",
        "O(1) díky hashování",
        "O(n log n) kvůli rekurzi"
      ],
      correct: 0,
      explanation: "Binární vyhledávání dělí interval v každém kroku napůl; ovšem vyžaduje setříděná data."
    },
    {
      q: "Co je princip KMP algoritmu hledání podřetězce?",
      options: [
        "Předpočítá tabulku prefixových délek (failure function), aby po neshodě nemusel vracet ukazatel ve vstupu zpět",
        "Posune vzorek dopředu o nejdelší společný sufix se vstupem",
        "Hashuje okénka vzorku a vstupu",
        "Hrubou silou zkouší všechny pozice"
      ],
      correct: 0,
      explanation: "KMP využívá tabulku LPS (longest prefix–suffix), díky čemuž běží v O(n+m)."
    },
    {
      q: "Co dělá Rabin-Karpova metoda?",
      options: [
        "Hashuje okénko vzorku a postupně se posouvajícího okénka vstupu pomocí rolling hash a porovnává hashe",
        "Hledá jen v setříděných textech",
        "Vyžaduje speciální Trie",
        "Vyhledává pouze regulární výrazy"
      ],
      correct: 0,
      explanation: "Rolling hash umožňuje konstantní aktualizaci při posunu okénka; průměrně O(n+m), nejhůře O(nm)."
    },
    {
      q: "Co dělá Boyer-Mooreův algoritmus efektivně?",
      options: [
        "Posunuje vzorek o více znaků díky heuristikám 'bad character' a 'good suffix'",
        "Hashuje vzorek na konstantní délku",
        "Předpočítá automat na celý text",
        "Hledá pouze binární řetězce"
      ],
      correct: 0,
      explanation: "Boyer-Moore typicky překonává naivní vyhledávání tím, že umí přeskočit větší úseky vstupu."
    },
    {
      q: "Jaká je amortizovaná složitost vyhledávání v hashovací tabulce při dobré rozptylové funkci?",
      options: [
        "O(1) průměrně",
        "O(log n)",
        "O(n) kvůli kolizím",
        "O(n log n)"
      ],
      correct: 0,
      explanation: "Pokud je rozptyl rovnoměrný a faktor zaplnění nízký, vyhledávání i vkládání jsou amortizovaně O(1)."
    },
    {
      q: "Co je kolize v hashovací tabulce a jak se řeší?",
      options: [
        "Dva různé klíče se zobrazí na stejný index; řeší se zřetězováním nebo otevřeným adresováním",
        "Změna velikosti tabulky během vkládání; řešením je zákaz rehashe",
        "Souběžný zápis dvou vláken; řeší se mutexem",
        "Přetečení integeru v hashi; řeší se modulem"
      ],
      correct: 0,
      explanation: "Strategie: chaining (seznam v bucketu) nebo open addressing (lineární/quadratic probing, double hashing)."
    }
  ],
  20: [
    {
      q: "Co je graf typu DAG?",
      options: [
        "Directed Acyclic Graph – orientovaný graf bez cyklů",
        "Dynamický graf s mazáním uzlů",
        "Dvouvrstvý graf s rozdělením vrcholů",
        "Graf s vrcholy nezáporné valence"
      ],
      correct: 0,
      explanation: "DAG umožňuje topologické uspořádání; využívá se pro plánování závislostí, build systémy, verzovací DAGy apod."
    },
    {
      q: "Jaká je vlastnost minimální kostry (MST)?",
      options: [
        "Spojuje všechny vrcholy bez cyklu s minimálním součtem vah hran",
        "Obsahuje právě polovinu hran grafu",
        "Existuje pouze pro úplné grafy",
        "Vždy obsahuje nejtěžší hranu"
      ],
      correct: 0,
      explanation: "MST má n-1 hran (pro souvislý graf s n vrcholy) a minimalizuje součet vah; známé algoritmy: Kruskal, Prim, Borůvka."
    },
    {
      q: "Jaký je hlavní rozdíl mezi Primovým a Kruskalovým algoritmem?",
      options: [
        "Prim rozšiřuje strom od vrcholu, Kruskal přidává hrany podle vah s detekcí cyklu",
        "Prim funguje jen pro neorientované, Kruskal jen pro orientované grafy",
        "Kruskal je rychlejší v hustých grafech, Prim v řídkých",
        "Prim nemůže pracovat se zápornými vahami, Kruskal ano"
      ],
      correct: 0,
      explanation: "Prim používá prioritní frontu pro nejbližší vrchol, Kruskal řadí hrany a používá Union-Find."
    },
    {
      q: "Co je binární vyhledávací strom (BVS) a jeho hlavní vlastnost?",
      options: [
        "Strom, kde pro každý uzel platí: levý podstrom obsahuje menší hodnoty, pravý větší",
        "Strom s binární reprezentací každého uzlu",
        "Strom omezený na dvě úrovně",
        "Strom určený pro hashování"
      ],
      correct: 0,
      explanation: "BVS udržuje uspořádání, díky čemuž vyhledávání běží O(h); pro vyvážené stromy h ≈ log n."
    },
    {
      q: "Co je halda (heap) a k čemu se používá?",
      options: [
        "Stromová struktura splňující haldovou vlastnost, používaná pro prioritní fronty a heapsort",
        "Vyrovnávací paměť mezi diskem a RAM",
        "Synonymum pro garbage collected paměť",
        "Datová struktura pro perzistentní úložiště"
      ],
      correct: 0,
      explanation: "Halda umožňuje O(log n) vložení a vyjmutí extrému a O(1) přístup ke kořeni; bývá implementována polem."
    },
    {
      q: "Co je hustý a co řídký graf z hlediska počtu hran?",
      options: [
        "Hustý: |E| ≈ |V|²; řídký: |E| ≈ |V|",
        "Hustý: |E| < log|V|; řídký: |E| > |V|²",
        "Vždy záleží jen na počtu vrcholů",
        "Jde o stejné pojmy"
      ],
      correct: 0,
      explanation: "Volba reprezentace (matice vs. seznam sousedů) i složitost algoritmů závisí na hustotě grafu."
    }
  ],
  21: [
    {
      q: "Proč Dijkstrův algoritmus selhává na záporných hranách?",
      options: [
        "Po finalizaci vrcholu se k němu už nevrací – při záporných hranách by jeho vzdálenost mohla později klesnout",
        "Nelze ho implementovat s prioritní frontou",
        "Záporné hrany způsobí cyklus v rekurzi",
        "Nepracuje s plovoucí čárkou"
      ],
      correct: 0,
      explanation: "Pro grafy se zápornými hranami se používá Bellman-Ford (i detekce záporných cyklů)."
    },
    {
      q: "Jaký je rozdíl mezi BFS a DFS?",
      options: [
        "BFS prochází po vrstvách (fronta), DFS jde co nejhlouběji (zásobník/rekurze)",
        "BFS funguje jen v stromech, DFS i v grafech",
        "DFS vždy najde nejkratší cestu, BFS ne",
        "BFS běží v O(V²), DFS v O(V log V)"
      ],
      correct: 0,
      explanation: "BFS najde nejkratší cestu v neohodnoceném grafu; DFS je vhodný pro topologické řazení, detekci cyklu apod."
    },
    {
      q: "Co je eulerovský tah v grafu?",
      options: [
        "Tah, který projde každou hranou právě jednou (existuje, pokud má graf 0 nebo 2 vrcholy lichého stupně)",
        "Tah procházející každým vrcholem právě jednou",
        "Cyklus s minimální vahou",
        "Cesta mezi dvěma vrcholy v MST"
      ],
      correct: 0,
      explanation: "Eulerovský tah/cyklus existuje za podmínek na stupně vrcholů; nezaměňovat s hamiltonovským (vrcholy)."
    },
    {
      q: "Co je hamiltonovský cyklus?",
      options: [
        "Cyklus, který navštíví každý vrchol právě jednou (problém je NP-úplný)",
        "Cyklus na hamiltonovských grafech délky V/2",
        "Cyklus mezi sousedy v BFS stromě",
        "Cyklus s minimálním součtem vah"
      ],
      correct: 0,
      explanation: "Rozhodnutí existence hamiltonovského cyklu patří mezi klasické NP-úplné problémy."
    },
    {
      q: "Co je 'right-hand rule' v bludišti?",
      options: [
        "Heuristika průchodu, kde se při bloudění držíme stále pravé zdi – funguje pro jednoduše souvislá bludiště",
        "Pravidlo, podle kterého musíme jít vždy vpravo",
        "Univerzální algoritmus pro nejkratší cestu",
        "Reverzní průchod od cíle ke startu"
      ],
      correct: 0,
      explanation: "Wall follower funguje pro bludiště bez ostrovů; v obecných grafech ne."
    },
    {
      q: "Co je topologické uspořádání DAGu?",
      options: [
        "Lineární uspořádání vrcholů, ve kterém pro každou hranu (u,v) předchází u před v",
        "Seřazení vrcholů podle stupně",
        "Seřazení hran podle vah",
        "Lexikografické seřazení vrcholů podle jména"
      ],
      correct: 0,
      explanation: "Topologické pořadí existuje právě tehdy, je-li graf acyklický; lze ho najít DFS nebo Kahnovým algoritmem."
    }
  ],
  22: [
    {
      q: "Co je v UI heuristika 'admisibilní' (přípustná) v algoritmu A*?",
      options: [
        "Heuristika nikdy nepřeceňuje skutečnou vzdálenost k cíli – zaručuje optimalitu A*",
        "Heuristika je vždy lineární funkcí počtu kroků",
        "Heuristika musí být monotonní (konzistentní)",
        "Heuristika musí být deterministická"
      ],
      correct: 0,
      explanation: "Admisibilní heuristika je dolním odhadem skutečné ceny; konzistence je silnější podmínka."
    },
    {
      q: "Co je Turingův test?",
      options: [
        "Test, ve kterém posuzovatel rozhoduje, zda komunikuje s člověkem nebo strojem, na základě konverzace",
        "Test výpočetní složitosti programu",
        "Měření IQ stroje pomocí testů",
        "Algoritmus pro detekci umělého textu"
      ],
      correct: 0,
      explanation: "Turing navrhl tzv. imitation game jako pragmatickou definici strojové inteligence."
    },
    {
      q: "Jaký je hlavní argument 'čínského pokoje'?",
      options: [
        "I když systém zpracovává symboly tak, že vypadá jako rozumějící, nemusí jim doopravdy rozumět – syntax nezakládá sémantiku",
        "Stroje budou rozumět, jen pokud budou dost rychlé",
        "Lidský jazyk nelze formalizovat",
        "Překlad mezi jazyky není možný strojově"
      ],
      correct: 0,
      explanation: "Searleova kritika silné UI tvrdí, že manipulace se symboly nestačí pro pravé porozumění."
    },
    {
      q: "Co je rozdíl mezi heuristickým a algoritmickým přístupem?",
      options: [
        "Algoritmus má jasně definované kroky a zaručený výsledek, heuristika je odhadová strategie bez záruky optimality",
        "Heuristika běží vždy rychleji",
        "Algoritmus pracuje pouze s čísly",
        "Není mezi nimi rozdíl, jde o synonyma"
      ],
      correct: 0,
      explanation: "Heuristiky se používají, když přesné řešení je drahé; obětují záruky za rychlost a praktickou účinnost."
    },
    {
      q: "Co je stavový prostor v UI?",
      options: [
        "Množina možných stavů a přechodů mezi nimi, ve které prohledáváme řešení",
        "Paměť alokovaná pro vyhledávání",
        "Soubor vstupů a výstupů úlohy",
        "Bayesovský prostor pravděpodobnosti"
      ],
      correct: 0,
      explanation: "Úloha se formalizuje jako počáteční stav, akce, přechody a cílový test – následně se prohledává stavový prostor."
    },
    {
      q: "Která vlastnost odlišuje A* od greedy best-first search?",
      options: [
        "A* využívá f(n) = g(n) + h(n) – kombinuje skutečnou cenu s heuristikou; greedy bere jen h(n)",
        "A* nepoužívá heuristiku",
        "Greedy je vždy optimální",
        "A* prohledává jen orientované grafy"
      ],
      correct: 0,
      explanation: "Díky g(n) bere A* v úvahu cestu dosud a s admisibilní h(n) garantuje optimální řešení."
    }
  ],
  23: [
    {
      q: "Co je backpropagation?",
      options: [
        "Algoritmus pro výpočet gradientu chybové funkce v neuronové síti pomocí řetězového pravidla",
        "Reset vah neuronové sítě po každé epoše",
        "Distribuce výpočtu do více GPU",
        "Heuristika pro výběr trénovacích dat"
      ],
      correct: 0,
      explanation: "Backprop šíří chybu zpět vrstvami a poskytuje gradienty pro aktualizaci vah optimalizátorem (SGD, Adam ...)."
    },
    {
      q: "Co je přeučení (overfitting)?",
      options: [
        "Model se naučí trénovací data včetně šumu a špatně generalizuje na nová data",
        "Model je příliš jednoduchý a nedokáže se naučit ani trénovací sadu",
        "Optimalizátor neustále hledá nový minimum",
        "Model se učí déle, než je dovoleno regulací"
      ],
      correct: 0,
      explanation: "Overfit = vysoká přesnost na trénovacích datech a nízká na testovacích; bojuje se proti němu regularizací, dropoutem, augmentací."
    },
    {
      q: "Co dělá aktivační funkce ReLU?",
      options: [
        "f(x) = max(0, x) – nelineární, jednoduchá, mitiguje vanishing gradient",
        "f(x) = 1 / (1 + e^-x) – sigmoid",
        "f(x) = tanh(x)",
        "f(x) = sign(x) – výstup -1/1"
      ],
      correct: 0,
      explanation: "ReLU je standardní aktivace v hlubokých sítích; jednoduchá a výpočetně rychlá, ale může 'umírat'."
    },
    {
      q: "Jaký je princip genetického algoritmu?",
      options: [
        "Populace kandidátů se vyvíjí pomocí selekce, křížení a mutace s cílem maximalizovat fitness funkci",
        "Jednotlivec se zlepšuje gradientovým sestupem",
        "Algoritmus se učí pomocí odměny a trestu",
        "Stochastické prohledávání pomocí teploty (simulované žíhání)"
      ],
      correct: 0,
      explanation: "GA napodobuje evoluci; nepoužívá gradient, hodí se pro nehladké/diskrétní problémy."
    },
    {
      q: "Co je konvoluční vrstva v CNN?",
      options: [
        "Vrstva aplikující sdílené konvoluční filtry, která zachytí lokální vzory v datech (obrazu)",
        "Plně propojená vrstva s redukcí dimenze",
        "Vrstva pro normalizaci batch dávky",
        "Vrstva pro aktivaci softmax"
      ],
      correct: 0,
      explanation: "Konvoluce sdílí váhy přes prostor, redukuje počet parametrů a využívá translational invariance."
    },
    {
      q: "Co je CRUM (Computational Representational Understanding of Mind)?",
      options: [
        "Pojetí, že mentální procesy jsou výpočty nad reprezentacemi – základní teze kognitivní vědy",
        "Algoritmus pro shlukování dokumentů",
        "Hardwarová architektura pro inferenci",
        "Síťový protokol pro robotiku"
      ],
      correct: 0,
      explanation: "CRUM je kognitivně-vědecký rámec (P. Thagard), podle kterého myšlení = výpočet + reprezentace."
    }
  ]
};
