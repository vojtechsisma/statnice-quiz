const TSP_TOPICS = [
  {
    id: 1,
    title: "Základní principy počítačů",
    description: "Elektrické obvody, číselné soustavy, logické funkce, jejich minimalizace.",
    questions: [
      {
        q: "Kolik je 1011₂ v desítkové soustavě?",
        options: ["11", "9", "13", "15"],
        correct: 0,
        explanation: "1·8 + 0·4 + 1·2 + 1·1 = 11."
      },
      {
        q: "Která metoda se používá pro minimalizaci logických funkcí graficky?",
        options: [
          "Karnaughova mapa",
          "Booleovo síto",
          "Eulerův diagram",
          "Newtonova metoda"
        ],
        correct: 0,
        explanation: "K-mapa: tabulka rozdělená podle Grayova kódu, umožňuje vizuální nalezení implikantů."
      },
      {
        q: "Co je hradlo NAND z hlediska úplnosti?",
        options: [
          "Univerzální hradlo – lze z něj sestavit libovolnou logickou funkci",
          "Speciální hradlo pro paměti",
          "Hradlo pouze pro inverzi",
          "Hradlo bez výstupu"
        ],
        correct: 0,
        explanation: "{NAND} i {NOR} jsou funkčně úplné množiny – lze realizovat AND, OR i NOT."
      },
      {
        q: "Jaká je hodnota výrazu A · (A + B) podle Booleovy algebry?",
        options: ["A", "B", "A + B", "0"],
        correct: 0,
        explanation: "Absorpční zákon: A·(A+B) = A."
      },
      {
        q: "Která soustava se v hardwaru používá pro reprezentaci dat?",
        options: [
          "Dvojková (binární)",
          "Desítková",
          "Osmičková",
          "Šestnáctková jako primární"
        ],
        correct: 0,
        explanation: "Hardware pracuje s dvěma napěťovými úrovněmi → binární; hex je jen lidsky čitelný zápis."
      },
      {
        q: "Kolik je FF₁₆ v desítkové soustavě?",
        options: ["255", "256", "127", "512"],
        correct: 0,
        explanation: "F=15, takže 15·16 + 15 = 255."
      },
      {
        q: "Jaká je hodnota A + A·B podle Booleovy algebry?",
        options: ["A", "B", "A·B", "1"],
        correct: 0,
        explanation: "Absorpční zákon: A + A·B = A."
      },
      {
        q: "Které hradlo realizuje funkci 'výlučný součet' (exclusive OR)?",
        options: ["XOR", "NAND", "NOR", "AND"],
        correct: 0,
        explanation: "XOR má výstup 1, pokud se vstupy liší."
      },
      {
        q: "Co je úplný disjunktivní normální tvar (ÚDNF)?",
        options: [
          "Součet všech mintermů, kde funkce nabývá hodnoty 1",
          "Součin maxtermů",
          "Pouze jediný term",
          "Inverze funkce"
        ],
        correct: 0,
        explanation: "ÚDNF = OR mintermů (AND vstupních proměnných) pro řádky s výstupem 1."
      },
      {
        q: "Kolik je 25₁₀ v binární soustavě?",
        options: ["11001", "10101", "11011", "10011"],
        correct: 0,
        explanation: "25 = 16 + 8 + 1 = 11001₂."
      },
      {
        q: "Co popisuje Ohmův zákon?",
        options: [
          "Vztah mezi napětím, proudem a odporem: U = R·I",
          "Vztah mezi výkonem a frekvencí",
          "Zákon zachování energie",
          "Pravidlo pro paralelní zapojení"
        ],
        correct: 0,
        explanation: "Základní zákon elektrických obvodů."
      },
      {
        q: "Která tvrzení o hradle NOR NEPLATÍ?",
        options: [
          "NOR má výstup 1 pouze pokud je některý vstup 1",
          "NOR je funkčně úplné hradlo",
          "NOR je negace OR",
          "Pomocí NOR lze sestavit AND i NOT"
        ],
        correct: 0,
        explanation: "NOR má výstup 1, jen pokud jsou VŠECHNY vstupy 0."
      },
      {
        q: "Co je de Morganovo pravidlo?",
        options: [
          "¬(A·B) = ¬A + ¬B a ¬(A+B) = ¬A·¬B",
          "A + 1 = A",
          "A · A = 0",
          "A + ¬A = 0"
        ],
        correct: 0,
        explanation: "Pravidla negace součtu a součinu v Booleově algebře."
      }
    ]
  },
  {
    id: 2,
    title: "Základy mikroprocesorů",
    description: "Architektura, CISC/RISC, strojové instrukce, sběrnice, DMA, přerušení.",
    questions: [
      {
        q: "Jaký je hlavní rozdíl mezi CISC a RISC?",
        options: [
          "CISC má širokou sadu komplexních instrukcí, RISC jednoduché instrukce s pevnou délkou",
          "RISC má více registrů (vždy 8), CISC jen 4",
          "RISC nemůže zpracovávat ints",
          "CISC nepoužívá pipelining"
        ],
        correct: 0,
        explanation: "CISC (x86) optimalizuje hustotu kódu; RISC (ARM, RISC-V) zjednodušuje pipeline a kompilátor."
      },
      {
        q: "Co je DMA?",
        options: [
          "Direct Memory Access – přenos dat mezi periferií a pamětí bez účasti CPU",
          "Dynamic Memory Allocation",
          "Disk Multiprocessing Architecture",
          "Distributed Memory Array"
        ],
        correct: 0,
        explanation: "DMA řadič přenáší data nezávisle na CPU; CPU mezitím vykonává jiný kód."
      },
      {
        q: "Co je přerušení (interrupt)?",
        options: [
          "Asynchronní signál, který přeruší běh CPU a předá řízení obslužné rutině (ISR)",
          "Pád aplikace",
          "Synchronizační bariéra mezi vlákny",
          "Chyba v překladu"
        ],
        correct: 0,
        explanation: "IRQ – hardwarové i softwarové; ISR (Interrupt Service Routine) zpracuje událost a vrátí řízení."
      },
      {
        q: "Co je sběrnice (bus)?",
        options: [
          "Společný komunikační kanál pro přenos dat mezi komponentami systému",
          "Hardwarová součástka pro chlazení",
          "Programovací konstrukt",
          "Cache mezi CPU a RAM"
        ],
        correct: 0,
        explanation: "Adresová, datová a řídicí sběrnice propojují CPU, paměť a I/O."
      },
      {
        q: "Která jednotka procesoru vykonává aritmetické a logické operace?",
        options: [
          "ALU (Arithmetic Logic Unit)",
          "Řadič",
          "Cache",
          "Sběrnice"
        ],
        correct: 0,
        explanation: "ALU provádí +, -, AND, OR, XOR, shift; řadič dekóduje instrukce a řídí tok."
      },
      {
        q: "Co je pipelining v procesoru?",
        options: [
          "Souběžné zpracování více instrukcí v různých fázích vykonávání",
          "Souběžné čtení několika pamětí",
          "Paralelní běh více vláken",
          "Přenos dat přes DMA"
        ],
        correct: 0,
        explanation: "Pipeline: fetch, decode, execute, memory, writeback běží současně pro různé instrukce."
      },
      {
        q: "Co obsahuje registr PC (Program Counter)?",
        options: [
          "Adresu následující instrukce k provedení",
          "Výsledek poslední operace",
          "Aktuální stav příznaků",
          "Adresu vrcholu zásobníku"
        ],
        correct: 0,
        explanation: "PC (IP) ukazuje na další instrukci v paměti."
      },
      {
        q: "Co jsou tři hlavní druhy sběrnic?",
        options: [
          "Adresová, datová a řídicí",
          "Vstupní, výstupní a paralelní",
          "Cache, RAM a disková",
          "USB, PCI a SATA"
        ],
        correct: 0,
        explanation: "Adresová určuje cíl, datová přenáší hodnoty, řídicí signalizuje typ operace."
      },
      {
        q: "Jaká je výhoda RISC architektury?",
        options: [
          "Jednoduché instrukce snadno paralelizovatelné v pipeline",
          "Vyšší hustota kódu",
          "Méně registrů",
          "Větší počet adresových režimů"
        ],
        correct: 0,
        explanation: "RISC = pevná délka instrukce, snadné dekódování, hluboká pipeline."
      },
      {
        q: "Co je strojový cyklus?",
        options: [
          "Základní časová jednotka vykonávání instrukce procesorem",
          "Restart počítače",
          "Cyklus DMA přenosu",
          "Cyklus chlazení CPU"
        ],
        correct: 0,
        explanation: "Strojový cyklus může obsahovat několik hodinových taktů (fetch, decode, ...)."
      },
      {
        q: "Co je vektor přerušení?",
        options: [
          "Tabulka s adresami obslužných rutin (ISR) jednotlivých přerušení",
          "Pole hodnot z senzorů",
          "Číslo procesoru",
          "Stavový registr"
        ],
        correct: 0,
        explanation: "CPU dle čísla přerušení vyhledá v IVT/IDT adresu handleru."
      },
      {
        q: "Které tvrzení o DMA NENÍ pravdivé?",
        options: [
          "DMA vyžaduje aktivní účast CPU během celého přenosu",
          "DMA umožňuje přenos paměť-periferie bez CPU",
          "DMA zvyšuje propustnost I/O",
          "DMA může cyklicky krást sběrnici"
        ],
        correct: 0,
        explanation: "Naopak – DMA odlehčuje CPU, ten je informován jen po dokončení přerušením."
      }
    ]
  },
  {
    id: 3,
    title: "Základy architektury počítačů",
    description: "Základní deska, čipová sada, PCI, USB, rozhraní PC.",
    questions: [
      {
        q: "Co je čipová sada (chipset)?",
        options: [
          "Sada čipů na základní desce řídící komunikaci CPU s pamětí a periferiemi",
          "Sada čipů v procesoru",
          "Set chladících čipů",
          "Sběrnice typu USB"
        ],
        correct: 0,
        explanation: "Chipset (Northbridge/Southbridge, dnes integrované) řídí PCIe, paměť, USB atd."
      },
      {
        q: "Co je hlavní výhoda USB oproti starším portům (COM, LPT)?",
        options: [
          "Hot-plug, vyšší rychlost, napájení a sjednocení rozhraní",
          "Vyšší napětí",
          "Pouze pro tiskárny",
          "Bezdrátový přenos"
        ],
        correct: 0,
        explanation: "USB umožňuje připojení za běhu, jednotný kabel, vyšší rychlosti, napájení zařízení."
      },
      {
        q: "Co je PCIe (PCI Express)?",
        options: [
          "Sériové bod-bod rozhraní pro připojení rozšiřujících karet (GPU, NVMe)",
          "Paralelní sběrnice",
          "USB řadič",
          "Síťový protokol"
        ],
        correct: 0,
        explanation: "PCIe nahradilo PCI; používá lanes (x1, x4, x8, x16) s vysokou propustností."
      },
      {
        q: "Co je BIOS/UEFI?",
        options: [
          "Firmware základní desky inicializující hardware a startující OS",
          "Operační systém",
          "Antivir",
          "Síťový protokol"
        ],
        correct: 0,
        explanation: "BIOS/UEFI provádí POST, inicializaci a zavádí bootloader; UEFI je modernější s GPT, Secure Boot."
      },
      {
        q: "Která komponenta není součástí základní desky?",
        options: [
          "Externí monitor",
          "Sokety CPU",
          "Sloty RAM",
          "Čipová sada"
        ],
        correct: 0,
        explanation: "Monitor je externí periferie; deska obsahuje sokety, chipset, BIOS, sběrnice."
      },
      {
        q: "Co je POST během startu počítače?",
        options: [
          "Power-On Self-Test – diagnostika hardwaru při startu",
          "Power Optimized System Tuning",
          "Periferní On-Screen Test",
          "Post-OS Tuning"
        ],
        correct: 0,
        explanation: "POST kontroluje CPU, RAM, GPU a další komponenty před zavedením OS."
      },
      {
        q: "K čemu slouží SATA rozhraní?",
        options: [
          "Připojení interních úložišť (HDD/SSD) k základní desce",
          "Připojení GPU",
          "Síťová komunikace",
          "Audio výstup"
        ],
        correct: 0,
        explanation: "SATA nahradilo PATA pro disky; max. 6 Gb/s u SATA III."
      },
      {
        q: "Která sběrnice nahradila AGP pro grafické karty?",
        options: ["PCIe", "PCI", "ISA", "USB"],
        correct: 0,
        explanation: "PCIe x16 je standard pro moderní grafické karty."
      },
      {
        q: "Co je výhoda UEFI oproti klasickému BIOSu?",
        options: [
          "Podpora GPT, větší disky (>2 TB), Secure Boot, grafické rozhraní",
          "Nižší cena hardwaru",
          "Pouze textové menu",
          "Menší velikost firmwaru"
        ],
        correct: 0,
        explanation: "UEFI je moderní firmware s lepší funkčností a rozšiřitelností."
      },
      {
        q: "Která sběrnice je sériová a typu bod-bod?",
        options: ["PCIe", "ISA", "PCI", "PATA"],
        correct: 0,
        explanation: "PCIe používá sériové linky (lanes); starší ISA a PCI byly paralelní."
      },
      {
        q: "K čemu slouží socket procesoru?",
        options: [
          "Mechanické a elektrické rozhraní pro upevnění CPU na základní desku",
          "Konektor pro síťový kabel",
          "Rozhraní pro grafickou kartu",
          "Slot pro RAM"
        ],
        correct: 0,
        explanation: "Příklady: LGA 1700 (Intel), AM5 (AMD); definuje pinout a kompatibilitu."
      },
      {
        q: "Co je M.2?",
        options: [
          "Tvarový faktor a konektor pro SSD a další karty s podporou PCIe nebo SATA",
          "Procesorový socket",
          "Typ DDR paměti",
          "Bezdrátový standard"
        ],
        correct: 0,
        explanation: "M.2 sloty často podporují NVMe SSD pro vysokorychlostní úložiště."
      }
    ]
  },
  {
    id: 4,
    title: "Paměti počítačů",
    description: "Hierarchie pamětí, cache, RAM, ROM, DIMM, disky.",
    questions: [
      {
        q: "Jaká je hierarchie pamětí od nejrychlejší k nejpomalejší?",
        options: [
          "Registry → cache (L1/L2/L3) → RAM → SSD → HDD",
          "HDD → RAM → cache → registry",
          "Cache → registry → RAM → ROM",
          "RAM → cache → registry → SSD"
        ],
        correct: 0,
        explanation: "Čím blíže k CPU, tím rychlejší a menší paměť."
      },
      {
        q: "Co je cache paměť?",
        options: [
          "Rychlá vyrovnávací paměť mezi CPU a RAM, držící často používaná data",
          "Záloha disku",
          "Paměť pro grafiku",
          "Virtuální paměť"
        ],
        correct: 0,
        explanation: "Cache využívá lokality reference; L1 nejmenší a nejrychlejší, L3 sdílená."
      },
      {
        q: "Jaký je rozdíl mezi DRAM a SRAM?",
        options: [
          "DRAM potřebuje obnovování (refresh), je hustá a levná; SRAM je rychlejší a držena flip-flopy",
          "DRAM je rychlejší než SRAM",
          "SRAM je nevolatilní",
          "DRAM se používá v cache"
        ],
        correct: 0,
        explanation: "DRAM v hlavní paměti, SRAM v cache; SRAM je rychlejší, dražší a méně hustá."
      },
      {
        q: "Co je ROM?",
        options: [
          "Paměť pouze pro čtení s perzistentním obsahem (firmware)",
          "Random Online Memory",
          "RAM s ochranou proti zápisu",
          "Read Open Memory"
        ],
        correct: 0,
        explanation: "ROM uchovává data i bez napájení; varianty PROM, EPROM, EEPROM, Flash."
      },
      {
        q: "Co je logická struktura disku?",
        options: [
          "Organizace dat na disku pomocí systému souborů, tabulek a metadat",
          "Fyzické rozdělení na talíře",
          "Sběrnice řadiče",
          "Hardwarový firmware"
        ],
        correct: 0,
        explanation: "Logická struktura: partitioning, file system (NTFS, ext4, FAT), inody, journal."
      },
      {
        q: "Co znamená 'volatilní' paměť?",
        options: [
          "Po odpojení napájení ztrácí svůj obsah",
          "Má omezený počet zápisů",
          "Pouze ke čtení",
          "Energeticky úsporná"
        ],
        correct: 0,
        explanation: "DRAM a SRAM jsou volatilní; ROM a Flash jsou perzistentní."
      },
      {
        q: "Jaký je typický rozdíl mezi SSD a HDD?",
        options: [
          "SSD je rychlejší, bez mechanických částí; HDD má rotující ploténky",
          "SSD vždy větší kapacita",
          "HDD je rychlejší v náhodném přístupu",
          "SSD používá magnetický záznam"
        ],
        correct: 0,
        explanation: "SSD používá NAND flash, nižší latence; HDD má levnější Gb."
      },
      {
        q: "Co znamená princip lokality reference?",
        options: [
          "Programy mají tendenci přistupovat k blízkým paměťovým místům v krátké době",
          "Data jsou uložena lokálně na disku",
          "Lokální proměnné jsou rychlejší",
          "Cache je vždy nejblíže CPU"
        ],
        correct: 0,
        explanation: "Časová a prostorová lokalita – základ funkčnosti cache."
      },
      {
        q: "Co je virtuální paměť?",
        options: [
          "Mechanismus OS umožňující procesům používat větší adresní prostor než je fyzická RAM",
          "Hardwarová paměť ve VR brýlích",
          "Cache CPU",
          "Pouze swap soubor"
        ],
        correct: 0,
        explanation: "Virtuální paměť mapuje virtuální adresy na fyzické přes MMU; využívá stránkování."
      },
      {
        q: "Která paměť uchovává nejmenší množství dat a je nejrychlejší?",
        options: ["Registry", "L1 cache", "RAM", "SSD"],
        correct: 0,
        explanation: "Registry CPU jsou na vrcholu hierarchie, několik desítek bajtů."
      },
      {
        q: "Co je DIMM?",
        options: [
          "Modul paměti RAM s pinami na obou stranách (Dual In-line Memory Module)",
          "Disková jednotka",
          "Typ procesoru",
          "Sběrnice"
        ],
        correct: 0,
        explanation: "DDR DIMM se zasouvají do slotů na základní desce."
      },
      {
        q: "Co je Flash paměť?",
        options: [
          "Nevolatilní elektricky mazatelná polovodičová paměť",
          "Volatilní RAM s vysokou rychlostí",
          "Cache třetí úrovně",
          "Magnetický disk"
        ],
        correct: 0,
        explanation: "Flash (NAND/NOR) se používá v SSD, USB flash, mobilech."
      }
    ]
  },
  {
    id: 5,
    title: "Principy operačních systémů",
    description: "Mikrojádro vs monolit, procesy, vlákna, CPU scheduling, synchronizace.",
    questions: [
      {
        q: "Jaký je rozdíl mezi procesem a vláknem?",
        options: [
          "Proces má vlastní paměťový prostor, vlákna sdílejí paměť v rámci procesu",
          "Vlákno je rychlejší proces",
          "Proces nemá stack, vlákno ano",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "Vlákna v procesu sdílejí heap a kód, mají vlastní stack a registry."
      },
      {
        q: "Jaká je výhoda mikrojádra oproti monolitickému jádru?",
        options: [
          "Větší modularita a izolace služeb (běží v user space), lepší bezpečnost",
          "Vždy rychlejší",
          "Méně paměti",
          "Nepodporuje multitasking"
        ],
        correct: 0,
        explanation: "Mikrojádro (Minix, QNX) drží v kernel space jen nutné věci; služby běží jako procesy."
      },
      {
        q: "Co je problém producent-konzument?",
        options: [
          "Synchronizační problém s sdíleným bufferem mezi vlákny produkujícími a spotřebovávajícími data",
          "Ekonomický model",
          "Algoritmus řazení",
          "Princip cachování"
        ],
        correct: 0,
        explanation: "Řeší se semafory/monitory: producent čeká, je-li buffer plný; konzument, je-li prázdný."
      },
      {
        q: "Která plánovací strategie přidělí CPU procesu s nejkratším odhadovaným časem běhu?",
        options: [
          "SJF (Shortest Job First)",
          "FCFS",
          "Round Robin",
          "Priority"
        ],
        correct: 0,
        explanation: "SJF minimalizuje průměrnou dobu čekání, ale vyžaduje znalost délky úlohy."
      },
      {
        q: "Co je deadlock?",
        options: [
          "Situace, kdy procesy navzájem čekají na zdroje a žádný nemůže pokračovat",
          "Pád procesu na chybu segmentace",
          "Stav, kdy CPU vykonává prázdnou smyčku",
          "Zápis do read-only paměti"
        ],
        correct: 0,
        explanation: "4 podmínky: vzájemné vyloučení, hold-and-wait, no preemption, kruhové čekání."
      },
      {
        q: "Co je preemptivní plánování?",
        options: [
          "OS může proces násilně přerušit a předat CPU jinému procesu",
          "Procesy se ukončují samy",
          "Pevné rozdělení času bez kontroly",
          "Bez plánovače"
        ],
        correct: 0,
        explanation: "Opak je kooperativní plánování, kde procesy musí dobrovolně předat CPU."
      },
      {
        q: "Co je semafor?",
        options: [
          "Synchronizační primitiv s celočíselným čítačem a operacemi wait/signal",
          "Mutex bez čítače",
          "Datová struktura fronty",
          "Plánovač procesů"
        ],
        correct: 0,
        explanation: "Semafor zavedl Dijkstra; binární semafor je v podstatě mutex."
      },
      {
        q: "Co je kontextové přepnutí (context switch)?",
        options: [
          "Uložení stavu jednoho procesu a obnovení stavu jiného při přepnutí CPU",
          "Změna kontextu uživatelského rozhraní",
          "Přepnutí mezi okny",
          "Změna jazyka systému"
        ],
        correct: 0,
        explanation: "Ukládají se registry, PC, stack pointer; je to drahá operace."
      },
      {
        q: "Která strategie cyklicky střídá procesy po pevných časových kvantech?",
        options: ["Round Robin", "SJF", "FCFS", "Priority"],
        correct: 0,
        explanation: "RR je preemptivní s časovým kvantem (time slice)."
      },
      {
        q: "Co je race condition?",
        options: [
          "Situace, kdy výsledek závisí na pořadí přístupu více vláken ke sdílenému zdroji",
          "Soutěž mezi procesy o CPU čas",
          "Cyklus závodu o paměť",
          "Pomalý běh systému"
        ],
        correct: 0,
        explanation: "Řeší se synchronizací – mutexy, atomické operace."
      },
      {
        q: "Co je kritická sekce?",
        options: [
          "Část kódu přistupující ke sdíleným zdrojům, kterou smí provádět jen jedno vlákno",
          "Kritická chyba systému",
          "Sekce s nejvyšší prioritou",
          "Část jádra"
        ],
        correct: 0,
        explanation: "Kritická sekce vyžaduje vzájemné vyloučení (mutex, semafor)."
      },
      {
        q: "Které tvrzení o monolitickém jádru NEPLATÍ?",
        options: [
          "Všechny moduly běží v oddělených procesech v user space",
          "Všechny služby běží v kernel space",
          "Je obvykle rychlejší než mikrojádro",
          "Pád ovladače může shodit celý systém"
        ],
        correct: 0,
        explanation: "Naopak – v monolitu vše v kernel space; v user space jsou služby u mikrojádra."
      }
    ]
  },
  {
    id: 6,
    title: "Souborové systémy a logická struktura dat",
    description: "Principy FS, atributy, operace, VFS, zamykání.",
    questions: [
      {
        q: "Co je VFS v Linuxu?",
        options: [
          "Abstraktní vrstva (Virtual File System) sjednocující přístup k různým souborovým systémům",
          "Virtual Flash Storage",
          "Verifikační vrstva souborů",
          "Vzdálený souborový server"
        ],
        correct: 0,
        explanation: "VFS nabízí jednotné API (open, read, write) nad ext4, NTFS, NFS atd."
      },
      {
        q: "Co je inode v unixovém souborovém systému?",
        options: [
          "Struktura držící metadata souboru (oprávnění, vlastník, blokové ukazatele), nikoli jméno",
          "Položka adresáře",
          "Časové razítko",
          "Cache souboru"
        ],
        correct: 0,
        explanation: "Inode obsahuje vše o souboru kromě jména; jméno → inode je v adresáři."
      },
      {
        q: "Jaký je rozdíl mezi vynuceným a nevynuceným (advisory) zamykáním souboru?",
        options: [
          "Vynucené zámky vynucuje jádro, nevynucené (kooperativní) musí aplikace respektovat",
          "Vynucené jsou pouze pro čtení",
          "Nevynucené jsou rychlejší",
          "Vynucené fungují jen na NTFS"
        ],
        correct: 0,
        explanation: "Linux preferuje advisory locks (flock/fcntl); vynucené (mandatory) jsou vzácné a deprecated."
      },
      {
        q: "Co je sekvenční přístup k souboru?",
        options: [
          "Čtení/zápis dat postupně od začátku k konci",
          "Přístup pomocí klíče",
          "Přístup k libovolné pozici",
          "Paralelní přístup více procesů"
        ],
        correct: 0,
        explanation: "Opak je přímý (random) přístup s lseek; sekvenční je nejjednodušší."
      },
      {
        q: "Co znamená mapování souboru do virtuální paměti (mmap)?",
        options: [
          "Obsah souboru se zpřístupní jako oblast paměti procesu, OS jej stránkuje on-demand",
          "Soubor se zkopíruje do RAM celý",
          "Vytvoří se symbolický odkaz",
          "Soubor se zaheshuje"
        ],
        correct: 0,
        explanation: "mmap je efektivní pro velké soubory a sdílení paměti mezi procesy."
      },
      {
        q: "Co je žurnálovací (journaling) souborový systém?",
        options: [
          "FS, který si vede log změn pro rychlou obnovu po pádu (ext4, NTFS)",
          "FS bez metadat",
          "FS pro síťové sdílení",
          "FS s šifrováním"
        ],
        correct: 0,
        explanation: "Journal zaznamenává operace předtím, než jsou zapsány na disk."
      },
      {
        q: "Který souborový systém typicky používá Windows?",
        options: ["NTFS", "ext4", "btrfs", "ZFS"],
        correct: 0,
        explanation: "NTFS podporuje ACL, kompresi, šifrování, journaling."
      },
      {
        q: "Co je symbolický odkaz (symlink)?",
        options: [
          "Soubor obsahující cestu k jinému souboru, který odkazuje",
          "Pevný odkaz na inode",
          "Kopie souboru",
          "Záloha souboru"
        ],
        correct: 0,
        explanation: "Symlink může odkazovat i přes file systémy; cíl nemusí existovat."
      },
      {
        q: "Jaký je rozdíl mezi hard linkem a symlinkem?",
        options: [
          "Hard link odkazuje na stejný inode; symlink obsahuje cestu k souboru",
          "Hard link funguje přes různé FS",
          "Symlink nelze smazat",
          "Hard link je jen pro adresáře"
        ],
        correct: 0,
        explanation: "Hard linky sdílejí inode – při smazání jednoho jména soubor existuje dál."
      },
      {
        q: "Co jsou atributy souboru v unixu?",
        options: [
          "Práva (rwx) pro vlastníka, skupinu, ostatní; vlastník; čas",
          "Pouze přípona",
          "Pouze název",
          "Velikost a typ pouze"
        ],
        correct: 0,
        explanation: "Sada metadat v inode – chmod, chown, timestamps."
      },
      {
        q: "Co je FAT32 omezení velikosti souboru?",
        options: [
          "Maximálně 4 GB na soubor",
          "Maximálně 2 GB na soubor",
          "Maximálně 16 GB na soubor",
          "Bez omezení"
        ],
        correct: 0,
        explanation: "FAT32 používá 32bitové ukazatele velikosti; limit 4 GB - 1 B."
      },
      {
        q: "K čemu slouží mount point?",
        options: [
          "Bod v adresářové struktuře, kam je připojen souborový systém",
          "Logická jednotka disku",
          "Bod synchronizace",
          "Pozice kurzoru"
        ],
        correct: 0,
        explanation: "V Linuxu se FS připojuje do existujícího adresáře (např. /mnt)."
      }
    ]
  },
  {
    id: 7,
    title: "RM ISO/OSI a TCP/IP",
    description: "Modely, vrstvy, PDU, RFC, adresace.",
    questions: [
      {
        q: "Kolik vrstev má model ISO/OSI?",
        options: ["7", "4", "5", "9"],
        correct: 0,
        explanation: "OSI vrstvy: fyzická, linková, síťová, transportní, relační, prezentační, aplikační."
      },
      {
        q: "Na které vrstvě TCP/IP modelu pracuje protokol IP?",
        options: [
          "Síťová (Internet)",
          "Transportní",
          "Aplikační",
          "Linková"
        ],
        correct: 0,
        explanation: "IP zajišťuje směrování paketů mezi sítěmi (L3)."
      },
      {
        q: "Co je PDU na transportní vrstvě?",
        options: [
          "Segment (TCP) nebo datagram (UDP)",
          "Rámec",
          "Paket",
          "Bit"
        ],
        correct: 0,
        explanation: "L2 = rámec, L3 = paket, L4 = segment/datagram."
      },
      {
        q: "Jaký je hlavní rozdíl mezi TCP a UDP?",
        options: [
          "TCP je spojově orientovaný a spolehlivý, UDP nespojový a best-effort",
          "TCP je rychlejší než UDP",
          "UDP umožňuje šifrování",
          "TCP nepoužívá porty"
        ],
        correct: 0,
        explanation: "TCP: handshake, řízení toku, ACK. UDP: bez navazování, žádné záruky."
      },
      {
        q: "Co jsou RFC dokumenty?",
        options: [
          "Standardizační dokumenty internetových protokolů (Request for Comments)",
          "Reakční formuláře",
          "Specifikace hardwaru",
          "Šifrovací klíče"
        ],
        correct: 0,
        explanation: "RFC popisují např. TCP (RFC 9293), HTTP, IP; vydává IETF."
      },
      {
        q: "Která vrstva OSI je zodpovědná za šifrování a kompresi dat?",
        options: ["Prezentační (L6)", "Aplikační (L7)", "Relační (L5)", "Transportní (L4)"],
        correct: 0,
        explanation: "Prezentační vrstva řeší formát dat, převody znakových sad, šifrování."
      },
      {
        q: "Kolik bitů má IPv4 adresa?",
        options: ["32", "16", "64", "128"],
        correct: 0,
        explanation: "IPv4 = 4 oktety po 8 bitech, např. 192.168.0.1."
      },
      {
        q: "Kolik bitů má IPv6 adresa?",
        options: ["128", "64", "32", "256"],
        correct: 0,
        explanation: "IPv6 řeší vyčerpání adres rozšířením na 128 bitů."
      },
      {
        q: "Co je MAC adresa?",
        options: [
          "48bitový jedinečný identifikátor síťové karty na L2",
          "IP adresa na L3",
          "Adresa procesoru Apple",
          "Adresa serveru"
        ],
        correct: 0,
        explanation: "MAC je obvykle nastavena výrobcem do hardware NIC."
      },
      {
        q: "Která vrstva OSI obsahuje rámce?",
        options: ["Linková (L2)", "Síťová (L3)", "Transportní (L4)", "Fyzická (L1)"],
        correct: 0,
        explanation: "Linková vrstva pracuje s rámci, na L1 jsou bity."
      },
      {
        q: "Kolik vrstev má model TCP/IP?",
        options: ["4", "5", "7", "3"],
        correct: 0,
        explanation: "Linková, Internet, Transportní, Aplikační (někdy uváděno 5)."
      },
      {
        q: "Která organizace vydává RFC dokumenty?",
        options: ["IETF", "IEEE", "ISO", "W3C"],
        correct: 0,
        explanation: "Internet Engineering Task Force publikuje RFC."
      },
      {
        q: "Co je zapouzdření (encapsulation) v síťových modelech?",
        options: [
          "Přidávání hlaviček/zápatí na každé vrstvě při sestupu modelem",
          "Šifrování dat",
          "Kompresia obsahu",
          "Filtrace paketů"
        ],
        correct: 0,
        explanation: "Data se obalují metadaty na každé vrstvě; opak je dekapsulace."
      }
    ]
  },
  {
    id: 8,
    title: "Směrování a přepínání",
    description: "Principy L2/L3, MAC a IP, směrovací algoritmy, role routeru a switche.",
    questions: [
      {
        q: "Na jaké vrstvě OSI pracuje switch?",
        options: [
          "Linková (L2) – přepíná podle MAC adres",
          "Síťová (L3)",
          "Aplikační (L7)",
          "Fyzická (L1)"
        ],
        correct: 0,
        explanation: "Klasický switch pracuje s MAC tabulkou; existují i L3 switches s routingem."
      },
      {
        q: "Co dělá router?",
        options: [
          "Směruje pakety mezi sítěmi podle IP adres a směrovací tabulky",
          "Připojuje koncová zařízení v jedné podsíti",
          "Filtruje pakety na základě portů",
          "Šifruje provoz"
        ],
        correct: 0,
        explanation: "Router operuje na L3, propojuje sítě, rozhoduje na základě cílové IP."
      },
      {
        q: "K čemu slouží ARP protokol?",
        options: [
          "Mapuje IP adresu na MAC adresu v lokální síti",
          "Mapuje doménu na IP",
          "Šifruje pakety",
          "Detekuje smyčky"
        ],
        correct: 0,
        explanation: "ARP request: 'Kdo má IP X?'; odpověď obsahuje MAC – uloží se do ARP cache."
      },
      {
        q: "Který algoritmus používá OSPF protokol?",
        options: [
          "Dijkstrův (link-state)",
          "Bellman-Ford (distance-vector)",
          "Prim",
          "Kruskal"
        ],
        correct: 0,
        explanation: "OSPF je link-state protokol s Dijkstrovým algoritmem nad topologií sítě."
      },
      {
        q: "K čemu slouží STP (Spanning Tree Protocol)?",
        options: [
          "Zabraňuje vzniku smyček na L2 ve switchovaných sítích",
          "Šifruje rámce",
          "Přiděluje IP adresy",
          "Diagnostikuje výpadky"
        ],
        correct: 0,
        explanation: "STP vytvoří kostru topologie; redundantní cesty blokuje, aktivuje při výpadku."
      },
      {
        q: "Co je VLAN?",
        options: [
          "Virtuální LAN – logické rozdělení switche na nezávislé broadcast domény",
          "Virtuální VPN",
          "Wi-Fi standard",
          "Routovací protokol"
        ],
        correct: 0,
        explanation: "VLAN tagy (IEEE 802.1Q) izolují provoz na L2."
      },
      {
        q: "Jaký typ směrovacího protokolu je BGP?",
        options: [
          "Path-vector (mezi autonomními systémy)",
          "Link-state",
          "Distance-vector LAN",
          "Multicast"
        ],
        correct: 0,
        explanation: "BGP je externí gateway protokol používaný v páteři internetu."
      },
      {
        q: "Co dělá NAT?",
        options: [
          "Překládá privátní IP adresy na veřejnou IP (a porty)",
          "Šifruje pakety",
          "Provádí kompresi",
          "Detekuje malware"
        ],
        correct: 0,
        explanation: "Network Address Translation umožňuje sdílení jedné veřejné IP více zařízeními."
      },
      {
        q: "Která vrstva přepíná v L3 switchi?",
        options: [
          "Pracuje na L3 (směrování) i L2 (přepínání)",
          "Pouze L1",
          "Pouze L7",
          "Pouze L4"
        ],
        correct: 0,
        explanation: "L3 switch kombinuje routing a switching pro vysokorychlostní propojení sítí."
      },
      {
        q: "Co je výchozí brána (default gateway)?",
        options: [
          "Router, kam se posílají pakety pro cíle mimo lokální podsíť",
          "Hlavní switch v síti",
          "DNS server",
          "DHCP server"
        ],
        correct: 0,
        explanation: "Pokud cílová IP není v lokální síti, paket jde na default gateway."
      },
      {
        q: "Která tabulka switche obsahuje vazbu port-MAC?",
        options: [
          "MAC tabulka (CAM)",
          "ARP tabulka",
          "Směrovací tabulka",
          "DNS cache"
        ],
        correct: 0,
        explanation: "Switch se učí MAC adresy ze zdrojových adres příchozích rámců."
      },
      {
        q: "Co je hlavní rozdíl mezi statickým a dynamickým směrováním?",
        options: [
          "Statické konfiguruje admin ručně; dynamické se učí směrovacími protokoly",
          "Statické je rychlejší vždy",
          "Dynamické nevyžaduje router",
          "Statické se mění samo"
        ],
        correct: 0,
        explanation: "Dynamické: RIP, OSPF, BGP – aktualizují tabulky podle topologie."
      }
    ]
  },
  {
    id: 9,
    title: "Operační systémy Windows",
    description: "Architektura, subsystémy, systémové procesy.",
    questions: [
      {
        q: "Co je smss.exe?",
        options: [
          "Session Manager Subsystem – první uživatelský proces po startu jádra",
          "Antivirus",
          "Správce souborů",
          "Síťový server"
        ],
        correct: 0,
        explanation: "smss.exe inicializuje session, spouští csrss.exe a winlogon.exe."
      },
      {
        q: "Co dělá winlogon.exe?",
        options: [
          "Spravuje přihlašování uživatelů a interaktivní session",
          "Zobrazuje stránku Windows logo",
          "Loguje systémové události",
          "Spouští všechny služby"
        ],
        correct: 0,
        explanation: "winlogon spolupracuje s LSA a credential providers při přihlášení."
      },
      {
        q: "Jaký je účel svchost.exe?",
        options: [
          "Hostuje sdílené služby Windows (DLL) v jednom procesu",
          "Spouští grafické rozhraní",
          "Provozuje SQL server",
          "Klient pro vzdálenou plochu"
        ],
        correct: 0,
        explanation: "svchost.exe je generický host pro služby implementované jako DLL."
      },
      {
        q: "Která architektonická vrstva Windows je nejníže?",
        options: [
          "HAL (Hardware Abstraction Layer)",
          "Win32 subsystém",
          "Uživatelské aplikace",
          "Registry"
        ],
        correct: 0,
        explanation: "HAL izoluje jádro od konkrétního hardwaru; nad ním kernel, executive, subsystémy."
      },
      {
        q: "Co je csrss.exe?",
        options: [
          "Client/Server Runtime Subsystem – Win32 subsystém pro grafiku a konzoli",
          "Cache server",
          "Antivirus",
          "Komprese souborů"
        ],
        correct: 0,
        explanation: "csrss spravuje konzolová okna, vypínání procesů Win32 subsystému."
      },
      {
        q: "Co je Windows Registry?",
        options: [
          "Hierarchická databáze konfigurace systému a aplikací",
          "Souborový systém",
          "Síťový adresář",
          "Adresářová struktura souborů"
        ],
        correct: 0,
        explanation: "Registry obsahuje klíče HKEY_LOCAL_MACHINE, HKEY_CURRENT_USER atd."
      },
      {
        q: "Co je NT kernel?",
        options: [
          "Hybridní jádro Windows NT a jeho nástupců",
          "Stará verze DOS",
          "Linuxové jádro",
          "Pouze nástroj příkazové řádky"
        ],
        correct: 0,
        explanation: "NT kernel je základ moderních Windows (XP, 7, 10, 11)."
      },
      {
        q: "Co je Active Directory?",
        options: [
          "Adresářová služba Microsoftu pro správu uživatelů, počítačů a politik",
          "Souborový systém",
          "Antivir",
          "Webový server"
        ],
        correct: 0,
        explanation: "AD používá LDAP, Kerberos; centrální správa v doménách."
      },
      {
        q: "Co je PowerShell?",
        options: [
          "Skriptovací jazyk a shell pro Windows založený na .NET",
          "Síťový protokol",
          "Souborový systém",
          "Antivirová utilita"
        ],
        correct: 0,
        explanation: "PowerShell pracuje s objekty, je dnes multiplatformní (PS Core)."
      },
      {
        q: "Co je NTFS?",
        options: [
          "New Technology File System – výchozí FS Windows",
          "Network Transport File System",
          "Net File System",
          "Naming Table File Service"
        ],
        correct: 0,
        explanation: "NTFS podporuje žurnálování, ACL, kompresi, šifrování (EFS)."
      },
      {
        q: "Co je explorer.exe?",
        options: [
          "Proces zajišťující shell Windows – plocha, hlavní panel, prozkoumávání souborů",
          "Webový prohlížeč",
          "Antivirus",
          "Síťový démon"
        ],
        correct: 0,
        explanation: "explorer.exe poskytuje grafický shell Windows."
      },
      {
        q: "Co je UAC (User Account Control)?",
        options: [
          "Bezpečnostní mechanismus vyžadující potvrzení pro administrátorské operace",
          "Správce uživatelů",
          "Konzole pro správu",
          "Zálohovací systém"
        ],
        correct: 0,
        explanation: "UAC zobrazuje dialogy a omezuje běh procesů v elevated módu."
      }
    ]
  },
  {
    id: 10,
    title: "Operační systémy Linux",
    description: "GNU, jádro, shell, systémová volání, démoni, systemd.",
    questions: [
      {
        q: "Co je systemd?",
        options: [
          "Init systém a service manager – PID 1 v moderních distribucích Linuxu",
          "Souborový systém",
          "Webový server",
          "Knihovna pro logování"
        ],
        correct: 0,
        explanation: "systemd nahradil SysV init; spravuje služby, sokety, mounty, journald."
      },
      {
        q: "Co je shell?",
        options: [
          "Příkazový interpret zprostředkující interakci s OS (bash, zsh)",
          "Jádro systému",
          "Démon správy paměti",
          "Souborový systém"
        ],
        correct: 0,
        explanation: "Shell překládá uživatelské příkazy na systémová volání a procesy."
      },
      {
        q: "Co je signal v Linuxu?",
        options: [
          "Asynchronní zpráva procesu (SIGINT, SIGTERM, SIGKILL) vyvolávající handler",
          "Síťový paket",
          "Kombinace kláves",
          "Logovací úroveň"
        ],
        correct: 0,
        explanation: "Signály doručuje jádro procesu; reakce: výchozí, ignorace, custom handler."
      },
      {
        q: "K čemu slouží démon udev?",
        options: [
          "Dynamicky spravuje uzly v /dev při připojení/odpojení hardwaru",
          "Spravuje uživatele",
          "Spouští boot",
          "Logování"
        ],
        correct: 0,
        explanation: "udev reaguje na události jádra (uevents) a vytváří/odstraňuje device nodes."
      },
      {
        q: "Co je pipe v Linuxu?",
        options: [
          "Jednosměrný kanál pro propojení standardního výstupu jednoho procesu se vstupem druhého",
          "Obrazový formát",
          "Síťové rozhraní",
          "Typ disku"
        ],
        correct: 0,
        explanation: "Pipe (|): `ls | grep txt` – stdout `ls` se přesměruje do stdin `grep`."
      },
      {
        q: "Co je GNU?",
        options: [
          "Projekt svobodného software poskytující nástroje, často kombinované s Linuxovým jádrem",
          "Nový OS",
          "Síťový protokol",
          "Souborový systém"
        ],
        correct: 0,
        explanation: "GNU/Linux: GNU nástroje + Linux kernel; licence GPL."
      },
      {
        q: "Co je systémové volání?",
        options: [
          "Rozhraní mezi uživatelským procesem a jádrem OS",
          "Volání knihovní funkce",
          "Vzdálené procedurální volání",
          "Spuštění shell skriptu"
        ],
        correct: 0,
        explanation: "syscall (např. read, write, fork) přepne procesor do kernel modu."
      },
      {
        q: "K čemu slouží fork()?",
        options: [
          "Vytvoří kopii (potomka) aktuálního procesu",
          "Ukončí proces",
          "Spustí nový program",
          "Načte soubor"
        ],
        correct: 0,
        explanation: "Po forku existují dva procesy; obvykle následuje exec() pro spuštění nového programu."
      },
      {
        q: "Co je démon (daemon)?",
        options: [
          "Proces běžící na pozadí bez interaktivního terminálu",
          "Uživatel s rozšířenými právy",
          "Virus",
          "Časovač jádra"
        ],
        correct: 0,
        explanation: "Démoni typicky končí na 'd': sshd, httpd, cron, systemd."
      },
      {
        q: "Co dělá příkaz chmod 755?",
        options: [
          "Nastaví práva rwxr-xr-x (vlastník čte/píše/spouští, ostatní jen čtou/spouští)",
          "Změní vlastníka souboru",
          "Smaže soubor",
          "Vytvoří symlink"
        ],
        correct: 0,
        explanation: "7=rwx, 5=r-x; tradiční Unix oprávnění."
      },
      {
        q: "Která knihovna implementuje standardní rozhraní C v GNU systémech?",
        options: ["glibc", "libstdc++", "musl-static", "libpng"],
        correct: 0,
        explanation: "GNU C Library (glibc) je výchozí v mnoha distribucích Linuxu."
      },
      {
        q: "Co je init proces (PID 1)?",
        options: [
          "První uživatelský proces, který spouští všechny ostatní",
          "Démon plánovače",
          "Jádro samotné",
          "Bootloader"
        ],
        correct: 0,
        explanation: "PID 1 spouští jádro; moderně je to systemd, dříve sysvinit."
      }
    ]
  },
  {
    id: 11,
    title: "Obecné principy internetu věcí (IoT)",
    description: "Charakteristika IoT, součásti, zpětná vazba, soukromí, omezená zařízení.",
    questions: [
      {
        q: "Co charakterizuje typické IoT zařízení?",
        options: [
          "Omezený výkon, paměť a energie, schopnost komunikace přes síť",
          "Vysoký výkon srovnatelný s PC",
          "Vždy bezdrátové napájení",
          "Vždy bez senzorů"
        ],
        correct: 0,
        explanation: "Constrained devices: malé MCU, omezená paměť, často bateriové napájení."
      },
      {
        q: "K čemu slouží A/D převodník v IoT?",
        options: [
          "Převádí analogový signál ze senzoru na digitální hodnotu",
          "Šifruje data",
          "Převádí napětí na frekvenci",
          "Filtruje šum"
        ],
        correct: 0,
        explanation: "ADC vzorkuje a kvantuje analogový vstup (např. teplotu) do binární podoby."
      },
      {
        q: "Co je referenční model IoT?",
        options: [
          "Vrstvená architektura popisující funkční bloky IoT (např. senzory, sítě, aplikace, business)",
          "Šablona pro databázi",
          "Konkrétní hardware",
          "Šifrovací protokol"
        ],
        correct: 0,
        explanation: "Modely jako IoT-A, Cisco 7-level definují vrstvy zařízení, komunikace, dat, aplikací."
      },
      {
        q: "Co je zpětná vazba v IoT systému?",
        options: [
          "Aktér ovlivňuje měřený proces na základě dat ze senzoru",
          "Posílání ACK paketů",
          "Hlášení chyb uživatelem",
          "Reklamace zboží"
        ],
        correct: 0,
        explanation: "Closed-loop: data ze senzorů → rozhodnutí → akce aktuátoru → změna prostředí."
      },
      {
        q: "Které hledisko soukromí je v IoT kritické?",
        options: [
          "Sběr velkého množství citlivých dat z osobního prostředí uživatele",
          "Velikost firmwaru",
          "Spotřeba energie",
          "Barva zařízení"
        ],
        correct: 0,
        explanation: "IoT zařízení sbírají kontinuálně data v domácnostech – riziko pro soukromí."
      },
      {
        q: "Co je aktuátor v IoT?",
        options: [
          "Zařízení, které mění fyzikální prostředí na základě řídicího signálu (motor, ventil)",
          "Senzor teploty",
          "A/D převodník",
          "Databáze"
        ],
        correct: 0,
        explanation: "Senzor měří, aktuátor působí (servomotor, relé, LED)."
      },
      {
        q: "Co je MCU?",
        options: [
          "Microcontroller Unit – integrovaný čip s CPU, pamětí a I/O pro vestavné aplikace",
          "Master Control Unit",
          "Multimedia Control Unit",
          "Memory Cache Unit"
        ],
        correct: 0,
        explanation: "MCU je srdce IoT zařízení; např. ESP32, STM32, Arduino."
      },
      {
        q: "Jaká je hlavní výhoda IoT?",
        options: [
          "Možnost monitorovat a řídit fyzikální procesy na dálku v reálném čase",
          "Nižší cena PC",
          "Eliminace všech kabelů",
          "Vyšší výkon GPU"
        ],
        correct: 0,
        explanation: "IoT propojuje fyzický a digitální svět: smart home, průmysl, zemědělství."
      },
      {
        q: "Co je M2M komunikace?",
        options: [
          "Machine-to-Machine – přímá výměna dat mezi zařízeními bez lidského zásahu",
          "Man-to-Machine",
          "Mobile-to-Mobile",
          "Multicast-to-Multicast"
        ],
        correct: 0,
        explanation: "Základ IoT; zařízení se domlouvají automaticky."
      },
      {
        q: "Co je smart device?",
        options: [
          "Zařízení s výpočetní jednotkou a síťovým připojením umožňujícím interakci",
          "Pouze chytrý telefon",
          "Pouze televize",
          "Cokoliv s baterií"
        ],
        correct: 0,
        explanation: "Smart device má MCU, senzory a komunikační rozhraní."
      },
      {
        q: "Co je typická spotřeba constrained IoT zařízení?",
        options: [
          "Velmi nízká (mW až mikroW), aby vydrželo roky na baterii",
          "Stovky wattů",
          "Kilowatty",
          "Variabilní v desítkách wattů"
        ],
        correct: 0,
        explanation: "Sleep režimy a optimalizace umožňují dlouhou výdrž."
      },
      {
        q: "Co znamená IoT zkratka?",
        options: [
          "Internet of Things",
          "Internet of Technology",
          "Internal Object Transfer",
          "Integrated Online Tools"
        ],
        correct: 0,
        explanation: "Termín Internet of Things zavedl Kevin Ashton v roce 1999."
      }
    ]
  },
  {
    id: 12,
    title: "Komunikace a bezpečnost v IoT",
    description: "Síťové technologie, edge/fog/cloud, protokoly, bezdrátové senzorové sítě, hrozby.",
    questions: [
      {
        q: "Co je edge computing?",
        options: [
          "Zpracování dat blízko zdroje (na hraně sítě), snižuje latenci a zátěž cloudu",
          "Vzdálené úložiště dat",
          "Šifrování na okrajových routerech",
          "Backup do cloudu"
        ],
        correct: 0,
        explanation: "Edge: výpočty na zařízeních nebo lokálních bránách; fog vrstva mezi edge a cloud."
      },
      {
        q: "Který protokol je typický pro IoT komunikaci nad TCP/IP?",
        options: [
          "MQTT (publish-subscribe, lightweight)",
          "FTP",
          "Telnet",
          "SMTP"
        ],
        correct: 0,
        explanation: "MQTT je lehký pub/sub protokol vhodný pro nízkokapacitní sítě a embedded zařízení."
      },
      {
        q: "Co je WSN?",
        options: [
          "Wireless Sensor Network – síť senzorových uzlů komunikujících bezdrátově",
          "Web Server Node",
          "Wi-Fi Security Network",
          "Wide Storage Network"
        ],
        correct: 0,
        explanation: "WSN: distribuované autonomní senzory měřící fyzikální veličiny a předávající data."
      },
      {
        q: "Co je threat modeling?",
        options: [
          "Proces identifikace, hodnocení a prioritizace hrozeb pro systém",
          "Modelování síťového provozu",
          "Šifrování dat",
          "Sledování CPU"
        ],
        correct: 0,
        explanation: "STRIDE, DREAD: systematicky najdou hrozby (spoofing, tampering, ...) a jejich rizika."
      },
      {
        q: "Která bezdrátová technologie cílí na velmi nízkou spotřebu a malé rychlosti pro IoT?",
        options: [
          "LoRaWAN / Zigbee / Bluetooth LE",
          "5G NR mmWave",
          "Wi-Fi 6 plný výkon",
          "Ethernet 10G"
        ],
        correct: 0,
        explanation: "LPWAN technologie (LoRa, Sigfox, NB-IoT) jsou navrženy pro malé pakety a roky na baterii."
      },
      {
        q: "Co je fog computing?",
        options: [
          "Distribuovaná vrstva mezi edge zařízeními a cloudem zajišťující lokální zpracování",
          "Nasazení v mlhavých oblastech",
          "Šifrované úložiště",
          "Synonymum cloudu"
        ],
        correct: 0,
        explanation: "Fog vrstva poskytuje výpočetní výkon blíže ke zdroji než cloud."
      },
      {
        q: "Co je CoAP protokol?",
        options: [
          "Constrained Application Protocol – HTTP-like protokol pro IoT nad UDP",
          "Cooperative Authentication Protocol",
          "Compressed Audio Protocol",
          "Cloud Object Application Protocol"
        ],
        correct: 0,
        explanation: "CoAP (RFC 7252) je lehký pro omezená zařízení; podpora REST."
      },
      {
        q: "Která hrozba znamená podvržení identity?",
        options: ["Spoofing", "Tampering", "Repudiation", "DoS"],
        correct: 0,
        explanation: "STRIDE: Spoofing = falešná identita; Tampering = úprava dat."
      },
      {
        q: "Co znamená DoS útok?",
        options: [
          "Denial of Service – zahlcení služby pro znepřístupnění legitimním uživatelům",
          "Disk Overwrite Service",
          "Decryption of Secrets",
          "Discovery of Servers"
        ],
        correct: 0,
        explanation: "DDoS = distribuovaný DoS, např. botnet IoT zařízení."
      },
      {
        q: "Co znamená koncové šifrování (end-to-end)?",
        options: [
          "Zprávy jsou šifrovány u odesílatele a dešifrovány až u finálního příjemce",
          "Šifrování pouze v páteřní síti",
          "Šifrování klíčů",
          "Hashování zpráv"
        ],
        correct: 0,
        explanation: "Mezilehlí účastníci nemají přístup k obsahu zpráv."
      },
      {
        q: "Která vlastnost je hlavní bezpečnostní výzva v IoT?",
        options: [
          "Omezený výkon zařízení komplikuje silnou kryptografii",
          "Vysoký výkon",
          "Velká paměť",
          "Stabilní napájení"
        ],
        correct: 0,
        explanation: "Constrained devices mají omezené možnosti pro běh moderních krypto algoritmů."
      },
      {
        q: "Co je Zigbee?",
        options: [
          "Bezdrátový standard pro low-power sítě (mesh) v IoT",
          "Protokol nad TCP",
          "Šifrovací standard",
          "Cloudová platforma"
        ],
        correct: 0,
        explanation: "Zigbee je nízkoenergetický mesh protokol postavený na IEEE 802.15.4."
      },
      {
        q: "K čemu slouží MQTT broker?",
        options: [
          "Server přijímající zprávy od publisherů a předávající je subscriberům",
          "Šifrování zpráv",
          "Ukládání souborů",
          "Routování paketů"
        ],
        correct: 0,
        explanation: "Broker (např. Mosquitto, HiveMQ) implementuje pub/sub model MQTT."
      }
    ]
  },
  {
    id: 13,
    title: "Principy objektového programování",
    description: "Příkaz, proměnná, typ, funkce, vlastnosti OOP, vizualizace.",
    questions: [
      {
        q: "Co je třída v OOP?",
        options: [
          "Šablona definující atributy a metody pro vytváření objektů",
          "Instance objektu",
          "Datový typ pro čísla",
          "Funkce bez argumentů"
        ],
        correct: 0,
        explanation: "Třída popisuje strukturu a chování; objekt je její instance s konkrétním stavem."
      },
      {
        q: "Co je dědičnost?",
        options: [
          "Mechanismus, kde podtřída přebírá atributy a chování nadtřídy a může je rozšiřovat/přepisovat",
          "Kopírování kódu mezi třídami",
          "Sdílení paměti mezi objekty",
          "Sériové zpracování objektů"
        ],
        correct: 0,
        explanation: "Dědičnost (is-a) umožňuje znovupoužití a polymorfismus."
      },
      {
        q: "Co je abstraktní třída?",
        options: [
          "Třída, která nemůže být přímo instancována a slouží jako základ pro odvozené třídy",
          "Třída bez metod",
          "Třída pouze pro testy",
          "Privátní třída"
        ],
        correct: 0,
        explanation: "Abstraktní třída může obsahovat abstraktní metody bez implementace."
      },
      {
        q: "Co je rozhraní (interface)?",
        options: [
          "Kontrakt definující metody, které implementující třídy musí poskytnout",
          "Stejné jako abstraktní třída",
          "Datová struktura",
          "Konkrétní implementace"
        ],
        correct: 0,
        explanation: "Interface popisuje 'co' (signatury), ne 'jak'; umožňuje vícenásobnou implementaci."
      },
      {
        q: "Který diagram UML se používá pro modelování statické struktury OOP?",
        options: [
          "Diagram tříd",
          "Sequence diagram",
          "Use case diagram",
          "Activity diagram"
        ],
        correct: 0,
        explanation: "Diagram tříd ukazuje třídy, atributy, metody a vztahy mezi nimi."
      },
      {
        q: "Co je zapouzdření (encapsulation) v OOP?",
        options: [
          "Skrytí vnitřní reprezentace objektu za rozhraní s modifikátory přístupu",
          "Sjednocení tříd",
          "Předávání zpráv",
          "Inicializace objektů"
        ],
        correct: 0,
        explanation: "Private/protected/public; data se mění jen přes metody."
      },
      {
        q: "Co je polymorfismus?",
        options: [
          "Stejné rozhraní s různou implementací podle typu objektu",
          "Více tříd se stejným názvem",
          "Dynamická alokace paměti",
          "Šablona pro generika"
        ],
        correct: 0,
        explanation: "Příklad: metoda draw() na různých tvarech (kruh, čtverec) – přebití (override)."
      },
      {
        q: "Co je konstruktor?",
        options: [
          "Speciální metoda volaná při vytváření instance pro inicializaci",
          "Destruktor",
          "Statická metoda",
          "Getter atributu"
        ],
        correct: 0,
        explanation: "Konstruktor obvykle nese jméno třídy, může mít přetížené varianty."
      },
      {
        q: "Co je metoda v OOP?",
        options: [
          "Funkce definovaná uvnitř třídy, popisující chování objektů",
          "Atribut třídy",
          "Proměnná",
          "Konstanta"
        ],
        correct: 0,
        explanation: "Metoda operuje typicky nad daty instance (this/self)."
      },
      {
        q: "Co znamená 'override' metody?",
        options: [
          "Podtřída poskytuje vlastní implementaci metody zděděné z nadtřídy",
          "Přetížení metody s jinými parametry",
          "Skrytí atributu",
          "Volání metody rodiče"
        ],
        correct: 0,
        explanation: "Override umožňuje polymorfní chování; Java používá @Override."
      },
      {
        q: "Co je rozdíl mezi overloadingem a overridingem?",
        options: [
          "Overloading = více metod stejného jména s jinými parametry; overriding = přepsání metody v podtřídě",
          "Jsou synonyma",
          "Overloading je jen pro konstruktory",
          "Overriding existuje jen v Pythonu"
        ],
        correct: 0,
        explanation: "Overloading = překlad-time; overriding = run-time polymorfismus."
      },
      {
        q: "Co je statická metoda?",
        options: [
          "Metoda patřící třídě, ne instanci; volá se přes název třídy",
          "Metoda bez návratové hodnoty",
          "Privátní metoda",
          "Metoda v konstruktoru"
        ],
        correct: 0,
        explanation: "Statické metody nemají přístup k instančním proměnným (žádné this)."
      }
    ]
  },
  {
    id: 14,
    title: "Reprezentace dat a jejich zpracování",
    description: "Pole, seznam, kolekce, streamy, persistence, CSV/JSON/XML.",
    questions: [
      {
        q: "Co je hlavní rozdíl mezi polem a spojovým seznamem?",
        options: [
          "Pole má pevnou velikost s O(1) přístupem indexem; seznam je dynamický s O(n) přístupem",
          "Pole je rychlejší vždy",
          "Seznam neumožňuje iteraci",
          "Pole nemůže obsahovat duplicity"
        ],
        correct: 0,
        explanation: "Pole: souvislá paměť, indexace v O(1). Seznam: uzly s ukazateli, vkládání v O(1)."
      },
      {
        q: "Co je objektová persistence?",
        options: [
          "Mechanismus pro ukládání stavu objektů mimo paměť (do souboru/DB) a obnovu",
          "Trvalá identita objektu v paměti",
          "Sdílení objektů mezi procesy",
          "Cachování objektů"
        ],
        correct: 0,
        explanation: "Persistence: serializace do JSON/XML/binárního formátu, ORM, databáze."
      },
      {
        q: "Který formát je strojově čitelný a založen na párech klíč-hodnota a polích?",
        options: [
          "JSON",
          "CSV",
          "Plain text",
          "Binary blob"
        ],
        correct: 0,
        explanation: "JSON je hierarchický formát s objekty a poli; široce používaný v API."
      },
      {
        q: "Co je stream v kontextu zpracování dat?",
        options: [
          "Sekvenční tok dat zpracovávaný po prvcích bez nutnosti načíst vše do paměti",
          "Sdílená paměť mezi procesy",
          "Náhodný přístup do souboru",
          "Komprimovaný soubor"
        ],
        correct: 0,
        explanation: "Stream umožňuje zpracovat velký objem dat průběžně (vstupní/výstupní streamy)."
      },
      {
        q: "K čemu slouží CSV formát?",
        options: [
          "Ukládání tabulárních dat oddělených čárkou (či jiným oddělovačem)",
          "Stromová data",
          "Multimedia",
          "Šifrovaná data"
        ],
        correct: 0,
        explanation: "CSV (Comma-Separated Values) je jednoduchý plain-text formát pro tabulky."
      },
      {
        q: "Který formát používá značky <tag> pro označení dat?",
        options: ["XML", "JSON", "CSV", "YAML"],
        correct: 0,
        explanation: "XML je značkovací jazyk s otevíracími a uzavíracími tagy."
      },
      {
        q: "Co je serializace?",
        options: [
          "Převod objektu na sekvenci bajtů pro přenos nebo uložení",
          "Šifrování dat",
          "Komprese",
          "Sériový přenos po USB"
        ],
        correct: 0,
        explanation: "Deserializace je opačný proces; používá se v API, persistence."
      },
      {
        q: "Která datová struktura je vhodná pro asociaci klíč-hodnota?",
        options: ["Hash map", "Pole", "Stack", "Spojový seznam"],
        correct: 0,
        explanation: "Hash map (slovník) má průměrné O(1) vyhledávání."
      },
      {
        q: "Co je ORM?",
        options: [
          "Object-Relational Mapping – mapování objektů na záznamy v relační DB",
          "Objektově orientovaná metoda",
          "Optimized RAM Mapping",
          "Online Read Method"
        ],
        correct: 0,
        explanation: "ORM nástroje: Hibernate, Entity Framework, SQLAlchemy."
      },
      {
        q: "Která vlastnost JSON jej činí populárním v API?",
        options: [
          "Lehký, čitelný a snadno parsovatelný formát kompatibilní s JS",
          "Binární formát",
          "Striktní schéma",
          "Pouze pro multimediální data"
        ],
        correct: 0,
        explanation: "JSON je dnes de facto standard pro REST API."
      },
      {
        q: "K čemu slouží kolekce v programování?",
        options: [
          "Struktura umožňující ukládání a manipulaci s skupinou hodnot (List, Set, Map)",
          "Algoritmus řazení",
          "Funkce pro tisk",
          "Komprese souborů"
        ],
        correct: 0,
        explanation: "Java Collections Framework: List, Set, Map a jejich implementace."
      },
      {
        q: "Jaký je rozdíl mezi List a Set?",
        options: [
          "List uchovává pořadí a duplicity; Set neobsahuje duplicity",
          "Set je uspořádaný",
          "List nemá indexy",
          "Set podporuje řazení vždy"
        ],
        correct: 0,
        explanation: "Set zaručuje unikátní prvky (HashSet, TreeSet)."
      }
    ]
  },
  {
    id: 15,
    title: "Datové struktury",
    description: "Fronta, zásobník, spojový seznam, kruhový buffer, asociativní pole.",
    questions: [
      {
        q: "Jakou disciplínu má fronta (queue)?",
        options: [
          "FIFO – First In, First Out",
          "LIFO",
          "Random access",
          "Priority"
        ],
        correct: 0,
        explanation: "Fronta: prvek vložený první se odebere první (např. tisková fronta)."
      },
      {
        q: "Jakou disciplínu má zásobník (stack)?",
        options: [
          "LIFO – Last In, First Out",
          "FIFO",
          "Random",
          "Round Robin"
        ],
        correct: 0,
        explanation: "Stack: push/pop na vrchol; využití v rekurzi, parserech."
      },
      {
        q: "Co je kruhový buffer?",
        options: [
          "Pole pevné velikosti používané cyklicky pomocí read/write ukazatelů",
          "Strom s kořeny",
          "Seznam s back-link",
          "Asociativní mapa"
        ],
        correct: 0,
        explanation: "Ring buffer: efektivní pro streamy, produkce-spotřeba; využívá modulo aritmetiku."
      },
      {
        q: "Co je asociativní pole (map, dictionary)?",
        options: [
          "Struktura mapující klíče na hodnoty s rychlým vyhledáním",
          "Pole vícerozměrné",
          "Pole s pojmenovanými indexy 0..n",
          "Stack s prioritou"
        ],
        correct: 0,
        explanation: "Implementace: hash mapa (O(1) průměrně) nebo strom (O(log n))."
      },
      {
        q: "Co charakterizuje cyklický spojový seznam?",
        options: [
          "Poslední uzel ukazuje zpět na první, tvoří cyklus",
          "Každý uzel má dva potomky",
          "Uzly jsou seřazené",
          "Existuje pouze ukazatel na hlavu"
        ],
        correct: 0,
        explanation: "Cyklický seznam: vhodný pro round-robin scheduling, hudební playlisty."
      },
      {
        q: "Co je binární strom?",
        options: [
          "Stromová struktura, kde každý uzel má nejvýše dva potomky",
          "Strom s 2 listy",
          "Seznam o 2 prvcích",
          "Pouze cyklický graf"
        ],
        correct: 0,
        explanation: "Binární vyhledávací strom má levý menší a pravý větší klíč."
      },
      {
        q: "Co je hash funkce?",
        options: [
          "Funkce mapující vstup libovolné délky na hodnotu pevné délky",
          "Šifrovací funkce s klíčem",
          "Komprese dat",
          "Generátor náhodných čísel"
        ],
        correct: 0,
        explanation: "Hash funkce by měla rovnoměrně rozdělit klíče přes index pole."
      },
      {
        q: "Jaká je časová složitost vyhledávání v hash mapě v průměrném případě?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 0,
        explanation: "Při dobrém hashování je přístup konstantní."
      },
      {
        q: "Která datová struktura podporuje rychlé vkládání a odebírání z obou konců?",
        options: ["Deque", "Stack", "Queue", "Strom"],
        correct: 0,
        explanation: "Deque (double-ended queue) má push/pop na obou koncích."
      },
      {
        q: "Co je obousměrně zřetězený seznam?",
        options: [
          "Seznam, kde každý uzel má ukazatel na předchozí i následující uzel",
          "Pole se dvěma rozměry",
          "Stack s dvěma zásobníky",
          "Hash mapa"
        ],
        correct: 0,
        explanation: "Umožňuje iteraci oběma směry; větší paměťová režie než jednosměrný seznam."
      },
      {
        q: "Která operace na stacku přidá prvek?",
        options: ["push", "pop", "peek", "enqueue"],
        correct: 0,
        explanation: "push = přidat na vrchol; pop = odebrat z vrcholu."
      },
      {
        q: "Co je prioritní fronta?",
        options: [
          "Fronta, kde se prvky odebírají podle priority, ne podle pořadí vložení",
          "Fronta s časovým limitem",
          "Fronta s pevnou velikostí",
          "Cyklická fronta"
        ],
        correct: 0,
        explanation: "Obvykle implementována binární haldou; využití v Dijkstrovi."
      }
    ]
  },
  {
    id: 16,
    title: "Tvorba uživatelského rozhraní",
    description: "Komponenty UI, layout, responzivita, událostmi řízené programování, MVC.",
    questions: [
      {
        q: "Co je událostmi řízené programování?",
        options: [
          "Tok řízení určují události (klikání, vstupy), které spouštějí handlery",
          "Sériové vykonávání kódu shora dolů",
          "Programování bez funkcí",
          "Použití pouze rekurze"
        ],
        correct: 0,
        explanation: "Event-driven: hlavní smyčka čeká na události, dispatcher volá zaregistrované callbacky."
      },
      {
        q: "Co je responzivní UI?",
        options: [
          "Rozhraní, které se přizpůsobí velikosti obrazovky a typu zařízení",
          "UI, které reaguje rychle (low latency)",
          "Rozhraní s animacemi",
          "UI generované AI"
        ],
        correct: 0,
        explanation: "Responzivní design používá media queries, flexbox/grid; obsah se přeskupuje dle viewportu."
      },
      {
        q: "K čemu slouží Controller v MVC?",
        options: [
          "Přijímá vstupy uživatele, aktualizuje Model a vybírá View",
          "Vykresluje UI",
          "Drží stav aplikace",
          "Spouští testy"
        ],
        correct: 0,
        explanation: "Controller propojuje View (vstupy) a Model (data/logika), spravuje tok aplikace."
      },
      {
        q: "Co je layout manager?",
        options: [
          "Komponenta určující rozmístění a velikost dceřiných komponent v kontejneru",
          "Správce souborů",
          "Editor UI",
          "Konfigurace barev"
        ],
        correct: 0,
        explanation: "Layout managery: flow, grid, border, flex; umožňují adaptivní rozvržení."
      },
      {
        q: "Co je vnitřní (inner) třída?",
        options: [
          "Třída definovaná uvnitř jiné třídy; má často přístup k jejím členům",
          "Třída uvnitř funkce",
          "Privátní instance",
          "Statická třída"
        ],
        correct: 0,
        explanation: "Inner class umožňuje úzké provázání s vnější třídou (např. listenery v UI)."
      },
      {
        q: "K čemu slouží Model v MVC?",
        options: [
          "Drží data a business logiku aplikace nezávisle na UI",
          "Vykresluje UI",
          "Zachycuje vstupy",
          "Komunikuje pouze s databází"
        ],
        correct: 0,
        explanation: "Model je nezávislý na View; změny v něm View notifikuje."
      },
      {
        q: "Co je View v MVC?",
        options: [
          "Vrstva zodpovědná za prezentaci dat uživateli",
          "Vrstva s business logikou",
          "Modul pro databázi",
          "Bezpečnostní vrstva"
        ],
        correct: 0,
        explanation: "View zobrazuje data z Modelu, posílá uživatelské akce Controlleru."
      },
      {
        q: "Co je listener (posluchač)?",
        options: [
          "Objekt registrovaný k naslouchání událostem a reakci na ně",
          "Komponenta zobrazující audio",
          "Logger systému",
          "Validátor vstupů"
        ],
        correct: 0,
        explanation: "Listener (callback) implementuje interface pro určitý typ události."
      },
      {
        q: "Co je flexbox?",
        options: [
          "CSS layout systém pro flexibilní rozmístění prvků v jedné dimenzi",
          "Knihovna pro animace",
          "JavaScript framework",
          "Šablonovací systém"
        ],
        correct: 0,
        explanation: "Flexbox řeší zarovnání, distribuci a změnu velikosti prvků v kontejneru."
      },
      {
        q: "Co je widget v UI?",
        options: [
          "Vizuální komponenta UI (tlačítko, pole, posuvník)",
          "Skriptovací jazyk",
          "Vrstva komunikace",
          "Souborový formát"
        ],
        correct: 0,
        explanation: "Widget = stavební prvek UI s vlastním vzhledem i chováním."
      },
      {
        q: "Co je MVVM?",
        options: [
          "Model-View-ViewModel – architektonický vzor s ViewModel jako prostředníkem mezi View a Model",
          "Model bez View",
          "Multi-View Multi-Model",
          "Multi-Variant View Model"
        ],
        correct: 0,
        explanation: "MVVM s data bindingem se používá ve WPF, Angular, Vue."
      },
      {
        q: "Co je drag-and-drop?",
        options: [
          "Interakce uchopení a přetažení prvku pomocí ukazatele",
          "Vícenásobný výběr",
          "Klávesová zkratka",
          "Animace"
        ],
        correct: 0,
        explanation: "D&D je běžná UI interakce pro přesun/kopírování položek."
      }
    ]
  },
  {
    id: 17,
    title: "Síťové a víceúlohové aplikace",
    description: "Klient/server, socket, protokol, paralelní zpracování.",
    questions: [
      {
        q: "Co je socket?",
        options: [
          "Koncový bod komunikace identifikovaný IP adresou a portem",
          "Hardwarový konektor",
          "Šifrovací klíč",
          "Soubor v adresáři"
        ],
        correct: 0,
        explanation: "Socket API umožňuje TCP/UDP komunikaci přes endpointy (IP+port)."
      },
      {
        q: "Jaký je rozdíl mezi iterativním a paralelním serverem?",
        options: [
          "Iterativní obsluhuje klienty po jednom, paralelní obsluhuje více klientů současně",
          "Iterativní používá rekurzi",
          "Paralelní není threadsafe",
          "Není rozdíl"
        ],
        correct: 0,
        explanation: "Paralelní server používá vlákna, procesy nebo asynchronní I/O pro souběžné spojení."
      },
      {
        q: "Co je protokol v síťové komunikaci?",
        options: [
          "Soubor pravidel pro formát a výměnu zpráv mezi komunikujícími stranami",
          "Hardwarový kabel",
          "Šifrovací algoritmus",
          "Síťové rozhraní"
        ],
        correct: 0,
        explanation: "Protokol definuje syntaxi, sémantiku a časování (např. HTTP, TCP, FTP)."
      },
      {
        q: "Která metoda zpracování umožňuje serveru obsloužit více klientů jedním vláknem?",
        options: [
          "Asynchronní (non-blocking) I/O s event loopem",
          "Pouze proces na klienta",
          "Synchronní I/O",
          "Sleep mezi klienty"
        ],
        correct: 0,
        explanation: "Asynchronní I/O (epoll, select, async/await) škáluje – Node.js, nginx."
      },
      {
        q: "Která vrstva TCP/IP modelu obsahuje HTTP?",
        options: [
          "Aplikační",
          "Transportní",
          "Síťová",
          "Linková"
        ],
        correct: 0,
        explanation: "HTTP je aplikační protokol nad TCP."
      },
      {
        q: "Co je třícestný handshake v TCP?",
        options: [
          "Třístupňová výměna SYN, SYN-ACK, ACK pro navázání spojení",
          "Šifrovací výměna",
          "Sjednocení rychlostí",
          "Detekce kolizí"
        ],
        correct: 0,
        explanation: "Klient → SYN, Server → SYN-ACK, Klient → ACK; pak může proudit data."
      },
      {
        q: "Co je mutex?",
        options: [
          "Zámek pro vzájemné vyloučení – jen jedno vlákno má přístup ke kritické sekci",
          "Datový typ vlákna",
          "Synchronní I/O",
          "Sdílená paměť"
        ],
        correct: 0,
        explanation: "Mutex (mutual exclusion) zabraňuje race condition."
      },
      {
        q: "Co je well-known port pro HTTP?",
        options: ["80", "21", "25", "53"],
        correct: 0,
        explanation: "HTTPS je 443; well-known porty jsou 0-1023."
      },
      {
        q: "Co je výhoda použití vláken oproti procesům?",
        options: [
          "Sdílí paměť, levnější vytvoření a přepínání",
          "Vyšší izolace",
          "Bezpečnější",
          "Lepší stabilita"
        ],
        correct: 0,
        explanation: "Vlákna v jednom procesu sdílejí adresní prostor, ale jsou náchylnější k race conditions."
      },
      {
        q: "K čemu slouží port v síťové komunikaci?",
        options: [
          "Identifikuje konkrétní aplikaci/službu na hostiteli",
          "Identifikuje hostitele",
          "Šifruje data",
          "Měří rychlost"
        ],
        correct: 0,
        explanation: "IP identifikuje stroj, port identifikuje proces/službu."
      },
      {
        q: "Co je client-server model?",
        options: [
          "Architektura, kde klient požaduje služby od centrálního serveru",
          "Peer-to-peer architektura",
          "Pouze cloudové aplikace",
          "Pouze webové aplikace"
        ],
        correct: 0,
        explanation: "Server je obvykle pasivní (čeká na požadavky), klient aktivní."
      },
      {
        q: "Co je hlavní výhoda paralelního zpracování?",
        options: [
          "Vyšší propustnost a využití více jader procesoru",
          "Jednodušší kód",
          "Méně paměti",
          "Vždy nižší latence"
        ],
        correct: 0,
        explanation: "Paralelizace umožňuje současný běh úloh; vyžaduje řešení synchronizace."
      }
    ]
  },
  {
    id: 18,
    title: "Publikování na webu",
    description: "HTML, CSS, JS, responzivita, přístupnost, DOM, prohlížeč.",
    questions: [
      {
        q: "Co je DOM?",
        options: [
          "Document Object Model – stromová reprezentace HTML/XML dokumentu, kterou lze programově upravovat",
          "Datová struktura pro CSS",
          "Sledovač DNS",
          "Síťové API"
        ],
        correct: 0,
        explanation: "Prohlížeč parsuje HTML do DOM stromu; JS s ním manipuluje přes API (document.*)."
      },
      {
        q: "Co je media query v CSS?",
        options: [
          "Podmíněný blok stylů aktivovaný při splnění kritérií (šířka, orientace, dpi)",
          "JS funkce pro fetch",
          "Šablona pro grafiku",
          "Selektor podle obsahu"
        ],
        correct: 0,
        explanation: "Media queries (`@media (max-width: 768px) {...}`) jsou základem responzivního designu."
      },
      {
        q: "Co znamená přístupnost (accessibility) webu?",
        options: [
          "Použitelnost webu pro lidi se znevýhodněním (zrak, sluch, motorika), např. WCAG, ARIA",
          "Rychlost načítání",
          "Dostupnost serveru 24/7",
          "Šifrovaný přenos"
        ],
        correct: 0,
        explanation: "A11y: sémantické HTML, alt texty, ARIA, kontrast, klávesnice; standard WCAG."
      },
      {
        q: "Který jazyk je primárně skriptovací pro web?",
        options: [
          "JavaScript",
          "C++",
          "Pascal",
          "Bash"
        ],
        correct: 0,
        explanation: "JavaScript běží v prohlížeči, dnes i na serveru (Node.js)."
      },
      {
        q: "Co dělá tag `<meta name=\"viewport\">`?",
        options: [
          "Řídí zobrazení stránky na mobilních zařízeních (šířka, scale)",
          "Definuje metadata pro vyhledávače",
          "Nastavuje kódování",
          "Vytváří záhlaví stránky"
        ],
        correct: 0,
        explanation: "`<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">` je klíčový pro responzivitu."
      },
      {
        q: "Co je HTML?",
        options: [
          "Značkovací jazyk pro tvorbu struktury webových stránek",
          "Skriptovací jazyk",
          "Stylesheet jazyk",
          "Programovací jazyk pro servery"
        ],
        correct: 0,
        explanation: "HyperText Markup Language; aktuální verze HTML5."
      },
      {
        q: "Co je CSS?",
        options: [
          "Jazyk pro popis vzhledu a layoutu HTML dokumentů",
          "Skriptovací jazyk",
          "Databázový jazyk",
          "Šablonovací jazyk"
        ],
        correct: 0,
        explanation: "Cascading Style Sheets – kaskádové styly."
      },
      {
        q: "Co dělá selektor `.menu` v CSS?",
        options: [
          "Vybere všechny prvky s class='menu'",
          "Vybere prvek s id='menu'",
          "Vybere tag <menu>",
          "Vybere atribut menu"
        ],
        correct: 0,
        explanation: "Tečka označuje selektor podle třídy; # podle id."
      },
      {
        q: "Co je sémantické HTML?",
        options: [
          "HTML používající tagy s významem (header, nav, article) místo obecných div",
          "HTML s validním kódem",
          "HTML s komentáři",
          "HTML s JavaScriptem"
        ],
        correct: 0,
        explanation: "Sémantika pomáhá vyhledávačům i čtečkám obrazovky."
      },
      {
        q: "K čemu slouží AJAX?",
        options: [
          "Asynchronní výměna dat mezi prohlížečem a serverem bez znovunačtení stránky",
          "Animační framework",
          "Šifrovací protokol",
          "Databázové dotazování"
        ],
        correct: 0,
        explanation: "Asynchronous JavaScript and XML; dnes obvykle s JSON."
      },
      {
        q: "Která HTTP metoda je idempotentní a slouží pro získání dat?",
        options: ["GET", "POST", "PATCH", "DELETE pouze"],
        correct: 0,
        explanation: "GET má vrátit zdroj bez vedlejších efektů."
      },
      {
        q: "Co znamená WCAG?",
        options: [
          "Web Content Accessibility Guidelines – pravidla pro přístupnost webu",
          "Web Caching Guidelines",
          "Web Code Authoring Group",
          "Wide-Compatibility Web Aplikační Guide"
        ],
        correct: 0,
        explanation: "WCAG definuje úrovně přístupnosti A, AA, AAA; vydává W3C."
      }
    ]
  },
  {
    id: 19,
    title: "Objektové modelování",
    description: "Účel, objekt/třída, UML, asociace, generalizace.",
    questions: [
      {
        q: "Co znamená generalizace v UML?",
        options: [
          "Vztah dědičnosti mezi obecnější nadtřídou a specializovanými podtřídami",
          "Sjednocení dvou tříd",
          "Implementace rozhraní",
          "Skládání objektů"
        ],
        correct: 0,
        explanation: "Generalizace 'is-a' – šipka s prázdným trojúhelníkem směřuje k rodiči."
      },
      {
        q: "Co je asociace v UML?",
        options: [
          "Sémantický vztah mezi instancemi tříd (vědí o sobě, komunikují)",
          "Synonymum pro dědičnost",
          "Datový typ",
          "Atribut třídy"
        ],
        correct: 0,
        explanation: "Asociace má kardinalitu (1:1, 1:N), roli, směr; speciální typy: agregace, kompozice."
      },
      {
        q: "Jaký je rozdíl mezi agregací a kompozicí?",
        options: [
          "Kompozice znamená silnější vztah – část nemůže existovat bez celku; agregace volnější (může)",
          "Jsou synonyma",
          "Agregace je vícenásobná",
          "Kompozice neimplikuje vlastnictví"
        ],
        correct: 0,
        explanation: "Kompozice (plný diamant) – životní cyklus částí svázán s celkem; agregace (prázdný diamant) – slabší."
      },
      {
        q: "K čemu slouží analytický model tříd?",
        options: [
          "Zachytit doménové koncepty z pohledu problému, bez implementačních detailů",
          "Optimalizace SQL dotazů",
          "Návrh GUI",
          "Specifikace API"
        ],
        correct: 0,
        explanation: "Analytický model: doménové třídy, vztahy; pak se odvíjí návrhový model s implementačními detaily."
      },
      {
        q: "Co je instance UML diagramu?",
        options: [
          "Object diagram – konkrétní snímek objektů a jejich propojení v určitém okamžiku",
          "Class diagram s konkrétními hodnotami",
          "Activity diagram",
          "State machine"
        ],
        correct: 0,
        explanation: "Object diagram ukazuje konkrétní instance tříd v určité konfiguraci."
      },
      {
        q: "Co je kardinalita asociace?",
        options: [
          "Počet instancí jedné třídy vztažený k instanci druhé třídy (1, *, 0..1, 1..*)",
          "Síla vazby",
          "Směr asociace",
          "Hierarchická úroveň"
        ],
        correct: 0,
        explanation: "Příklad: Student 1..* — 0..* Předmět."
      },
      {
        q: "Co je use case diagram?",
        options: [
          "UML diagram zachycující funkční požadavky pohledem aktérů a případů užití",
          "Diagram tříd",
          "Diagram aktivit",
          "Stavový diagram"
        ],
        correct: 0,
        explanation: "Aktéři (postavičky) interagují s use cases (elipsy)."
      },
      {
        q: "Co je sekvenční diagram?",
        options: [
          "UML diagram zobrazující výměnu zpráv mezi objekty v čase",
          "Diagram tříd",
          "Stavový stroj",
          "Use case diagram"
        ],
        correct: 0,
        explanation: "Vertikální osa = čas, horizontální = objekty (lifelines)."
      },
      {
        q: "Co je stavový diagram?",
        options: [
          "UML diagram popisující stavy objektu a přechody mezi nimi",
          "Diagram tříd",
          "Diagram nasazení",
          "Komponentový diagram"
        ],
        correct: 0,
        explanation: "Stavy (rounded boxes), přechody (šipky s eventem/guardem/akcí)."
      },
      {
        q: "K čemu slouží UML?",
        options: [
          "Standardizovaný jazyk pro vizuální modelování softwarových systémů",
          "Programovací jazyk",
          "Databázový jazyk",
          "Verzovací systém"
        ],
        correct: 0,
        explanation: "Unified Modeling Language vydává OMG; obsahuje 14 typů diagramů."
      },
      {
        q: "Co je atribut třídy v UML?",
        options: [
          "Vlastnost (proměnná) instance třídy s typem a viditelností",
          "Metoda třídy",
          "Vztah mezi třídami",
          "Konkrétní hodnota"
        ],
        correct: 0,
        explanation: "Notace: `- atribut: Typ = výchozí`; - značí private."
      },
      {
        q: "Co znamená '+' před názvem atributu/metody v UML?",
        options: [
          "Veřejná viditelnost (public)",
          "Soukromá (private)",
          "Chráněná (protected)",
          "Statická"
        ],
        correct: 0,
        explanation: "Notace UML: +public, -private, #protected, ~package."
      }
    ]
  }
];
