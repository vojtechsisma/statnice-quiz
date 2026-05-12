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
      }
    ]
  }
];
