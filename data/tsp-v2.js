const TSP_TOPICS_V2 = {
  1: [
    {
      q: "Kolik je v desítkové soustavě číslo 0b10110?",
      options: ["22", "20", "16", "26"],
      correct: 0,
      explanation: "0b10110 = 1·16 + 0·8 + 1·4 + 1·2 + 0·1 = 22."
    },
    {
      q: "Jaký je výsledek minimalizace funkce f(A,B) = A·B + A·B'?",
      options: ["A", "B", "A + B", "0"],
      correct: 0,
      explanation: "A·B + A·B' = A·(B + B') = A·1 = A."
    },
    {
      q: "Co je Karnaughova mapa?",
      options: [
        "Tabulková reprezentace logické funkce vhodná k vizuální minimalizaci pomocí seskupování sousedních jedniček",
        "Hardwarový obvod pro převod binárky na BCD",
        "Mapa adres v RAM",
        "Diagram síťové komunikace"
      ],
      correct: 0,
      explanation: "K-mapa využívá Grayova kódování, takže sousední buňky se liší v jedné proměnné – usnadňuje hledání minimálních termů."
    },
    {
      q: "Co je hradlo NAND a proč je důležité?",
      options: [
        "Negace AND; pomocí samotných NAND lze realizovat libovolnou booleovskou funkci (úplný systém)",
        "Hradlo s pevnou pravdivostní hodnotou 1",
        "Hradlo používané jen v synchronních obvodech",
        "Hradlo bez výstupu, jen pro testování"
      ],
      correct: 0,
      explanation: "NAND (stejně jako NOR) tvoří funkčně úplnou množinu, proto jsou často základem integrovaných obvodů."
    },
    {
      q: "Co je v boolské logice de Morganův zákon?",
      options: [
        "¬(A·B) = ¬A + ¬B a ¬(A+B) = ¬A·¬B",
        "A + A = 2A",
        "A·A = A²",
        "(A+B)·C = A+B·C"
      ],
      correct: 0,
      explanation: "De Morganovy zákony převádějí negaci součinu/součtu na součet/součin negací; klíčové pro minimalizaci."
    },
    {
      q: "Jaké napětí je obvykle v digitálním obvodu interpretováno jako log. 1 v TTL?",
      options: [
        "Přibližně 2,4 V – 5 V",
        "Přibližně 0 V – 0,8 V",
        "Záporné napětí",
        "Přesně 1 V"
      ],
      correct: 0,
      explanation: "TTL logika 5 V interpretuje vstup ≥ 2 V jako H a ≤ 0,8 V jako L; výstupy jsou ještě přísnější (≥ 2,4 V)."
    }
  ],
  2: [
    {
      q: "Co je strojový cyklus mikroprocesoru?",
      options: [
        "Jeden přístup procesoru ke sběrnici (fetch, read, write); instrukce se obvykle skládá z více strojových cyklů",
        "Doba běhu celého programu",
        "Synonymum pro hodinový takt",
        "Operace garbage collectoru"
      ],
      correct: 0,
      explanation: "Strojový cyklus odpovídá jednomu transferu po sběrnici; instrukční cyklus = fetch/decode/execute, často přes více strojových cyklů."
    },
    {
      q: "Jaká je hlavní výhoda RISC oproti CISC?",
      options: [
        "Jednoduchá instrukční sada usnadňuje pipeline a vyšší takt na úkor většího počtu instrukcí",
        "Méně registrů, ale složitější instrukce",
        "Možnost přímého spouštění bajtkódu",
        "Hardware nepotřebuje cache"
      ],
      correct: 0,
      explanation: "RISC se zaměřuje na jednoduché, stejně dlouhé instrukce vhodné pro pipelining a out-of-order; CISC mívá rozmanité, různě dlouhé instrukce."
    },
    {
      q: "K čemu slouží DMA?",
      options: [
        "K přenosu dat mezi periferií a pamětí bez zatěžování CPU",
        "K detekci chyb v paměti",
        "Ke správě virtuální paměti",
        "K šifrování přenosů"
      ],
      correct: 0,
      explanation: "DMA řadič přesouvá bloky dat samostatně; CPU pak může pracovat na jiné úloze a je informován přerušením po dokončení."
    },
    {
      q: "Co je přerušení (interrupt)?",
      options: [
        "Asynchronní signál, který CPU donutí přerušit aktuální tok a obsloužit obslužnou rutinu (ISR)",
        "Chyba v paměti během zápisu",
        "Přepnutí kontextu mezi vlákny",
        "Reset hodinového signálu"
      ],
      correct: 0,
      explanation: "Přerušení (HW nebo SW) zajišťují rychlou reakci procesoru na události bez busy-waitingu."
    },
    {
      q: "Co je sběrnice (bus) v architektuře počítače?",
      options: [
        "Souhrn vodičů sloužících k přenosu adres, dat a řízení mezi komponentami",
        "Disková jednotka pro zálohy",
        "Skupina periferních modulů",
        "Speciální typ paměti pro instrukce"
      ],
      correct: 0,
      explanation: "Sběrnice se obvykle dělí na datovou, adresní a řídicí; její šířka určuje propustnost."
    },
    {
      q: "Jaký je rozdíl mezi Harvardskou a von Neumannovou architekturou?",
      options: [
        "Harvard má oddělené paměti a sběrnice pro instrukce a data, von Neumann sdílí jednu paměť i sběrnici",
        "Harvardova architektura nemá zásobník",
        "Von Neumann pracuje pouze v plovoucí čárce",
        "Harvardova nemá pipelining"
      ],
      correct: 0,
      explanation: "Harvard umožňuje souběžné čtení instrukce a dat; využívá se u mikrokontrolérů a DSP."
    }
  ],
  3: [
    {
      q: "Co je čipová sada (chipset)?",
      options: [
        "Skupina integrovaných obvodů na základní desce řídících komunikaci mezi CPU, pamětí a periferiemi",
        "Soubor procesorů v multiprocesorovém systému",
        "Sada firmware aktualizací",
        "Sběrnice mezi GPU a displejem"
      ],
      correct: 0,
      explanation: "Historicky northbridge (paměť, PCIe, GPU) a southbridge (I/O); dnes je řada funkcí integrována přímo do CPU."
    },
    {
      q: "Co je hlavní výhoda PCI Express oproti starému PCI?",
      options: [
        "Sériová point-to-point komunikace s vyšší propustností a bez sdílené sběrnice",
        "Větší napětí, takže funguje na delší vzdálenosti",
        "Lepší zpětná kompatibilita s ISA",
        "Pouze grafická karta může používat PCIe"
      ],
      correct: 0,
      explanation: "PCIe používá nezávislé lanes a sériový přenos – nesdílí sběrnici jako paralelní PCI."
    },
    {
      q: "Jaký je standardní konektor pro USB 3.x?",
      options: [
        "Modře vyznačený konektor typu A nebo USB-C podporující rychlosti od 5 Gb/s výše",
        "DIN konektor",
        "Konektor RJ-45",
        "Eurokonektor SCART"
      ],
      correct: 0,
      explanation: "USB 3.x používá další páry vodičů; rozlišuje se vizuálně modrou barvou nebo zcela novým USB-C."
    },
    {
      q: "Co je SATA?",
      options: [
        "Sériové rozhraní pro připojení pevných disků a SSD",
        "Paralelní sběrnice pro tiskárny",
        "Bezdrátový protokol pro periferie",
        "Specifikace BIOSu"
      ],
      correct: 0,
      explanation: "SATA nahradilo paralelní PATA/IDE; SATA III nabízí cca 6 Gb/s, SSD často využívají rychlejší NVMe přes PCIe."
    },
    {
      q: "K čemu slouží UEFI?",
      options: [
        "Moderní rozhraní firmware mezi OS a HW, nahrazující klasický BIOS, s podporou GPT, větších disků a Secure Boot",
        "Souborový systém pro Windows",
        "Síťový protokol pro management",
        "Hardwarový hypervisor"
      ],
      correct: 0,
      explanation: "UEFI poskytuje grafické rozhraní, modulární architekturu, podporu Secure Boot a překonává limity BIOS/MBR."
    },
    {
      q: "Co je AGP a proč se přestal používat?",
      options: [
        "Sběrnice dedikovaná pro grafickou kartu; byla nahrazena rychlejším a univerzálnějším PCI Express",
        "Konektor pro klávesnici",
        "Sběrnice pro připojení baterií",
        "Standard pro ovladače tiskáren"
      ],
      correct: 0,
      explanation: "AGP byl mezikrok mezi PCI a PCIe; PCIe je rychlejší, sériová a univerzální."
    }
  ],
  4: [
    {
      q: "Jaký je rozdíl mezi SRAM a DRAM?",
      options: [
        "SRAM uchovává data v klopných obvodech bez obnovy, ale je drahá; DRAM používá kondenzátory a vyžaduje refresh, je levnější a hustější",
        "DRAM je rychlejší než SRAM",
        "SRAM je nevolatilní paměť",
        "DRAM funguje pouze v ROM modulu"
      ],
      correct: 0,
      explanation: "SRAM se používá pro cache (rychlá, energeticky úspornější v provozu), DRAM jako hlavní paměť."
    },
    {
      q: "Co je princip cache paměti?",
      options: [
        "Využití principů lokality (časové i prostorové) k uchování často používaných dat blíže CPU",
        "Šifrování dat během přenosu",
        "Komprese paměti pro úsporu místa",
        "Synchronizace mezi vlákny"
      ],
      correct: 0,
      explanation: "Cache zmírňuje rozdíl rychlostí mezi CPU a RAM; lokalita umožňuje vysokou hit ratio."
    },
    {
      q: "Co je 'cache hit' a 'cache miss'?",
      options: [
        "Hit: hledaná data jsou v cache; Miss: data v cache nejsou a musí se získat z nižší úrovně paměti",
        "Hit: chyba parity v cache; Miss: úspěšné čtení",
        "Hit i Miss jsou stejné, jen jiný název",
        "Hit: zápis do cache; Miss: čtení z RAM"
      ],
      correct: 0,
      explanation: "Hit ratio výrazně ovlivňuje výkon; nákladný miss vede k stallu procesoru."
    },
    {
      q: "Co je virtuální paměť?",
      options: [
        "Mechanismus, kdy OS poskytuje procesům lineární adresový prostor větší než fyzická RAM (typicky pomocí stránkování a swap)",
        "Paměť určená pro virtualizační stroje",
        "Speciální cache pro virtuální stroje",
        "Druh ROM s ochranou proti zápisu"
      ],
      correct: 0,
      explanation: "Virtuální paměť umožňuje izolaci procesů, lazy loading a swap na disk; využívá MMU a stránkovací tabulky."
    },
    {
      q: "Jaká vlastnost odlišuje DDR4 od DDR3?",
      options: [
        "Vyšší přenosové rychlosti, nižší napětí (1,2 V) a vyšší hustota modulů",
        "DDR4 funguje na 5 V",
        "DDR4 nepotřebuje paritu",
        "DDR4 je single-data-rate"
      ],
      correct: 0,
      explanation: "Každá generace DDR zvyšuje propustnost a snižuje napájecí napětí; DDR5 pokračuje v trendu (1,1 V)."
    },
    {
      q: "Co je ECC paměť?",
      options: [
        "Paměť s detekcí a opravou chyb (typicky single-bit error correction, multi-bit detection)",
        "Paměť s vyšší frekvencí pro servery",
        "Paměť bez parity, levnější varianta",
        "Paměť určená výhradně pro GPU"
      ],
      correct: 0,
      explanation: "ECC se používá v serverech a kritických systémech; doplňuje paritní bity pro Hammingův kód."
    }
  ],
  5: [
    {
      q: "Co je hlavní rozdíl mezi procesem a vláknem?",
      options: [
        "Proces má vlastní adresový prostor, vlákna sdílejí adresový prostor svého procesu",
        "Vlákno má vlastní stránky paměti, proces ne",
        "Procesy nelze plánovat",
        "Vlákno běží jen v jádře"
      ],
      correct: 0,
      explanation: "Vlákna jsou levnější jednotky paralelismu uvnitř procesu; sdílení paměti urychluje komunikaci, ale vyžaduje synchronizaci."
    },
    {
      q: "Co je preemptivní plánování CPU?",
      options: [
        "Plánovač může proces násilně odebrat z CPU a předat ho jinému (např. po vypršení časového kvanta)",
        "Proces dobrovolně předává CPU dalšímu",
        "Plánovač spouští jen vlákna jádra",
        "Procesy se plánují podle abecedy"
      ],
      correct: 0,
      explanation: "Preemption (např. round-robin) brání monopolizaci CPU a umožňuje real-time chování; opak je kooperativní plánování."
    },
    {
      q: "Co je deadlock?",
      options: [
        "Stav, kdy procesy čekají na zdroje držené ostatními a žádný nemůže pokračovat",
        "Stav, kdy proces dokončí činnost",
        "Náhodné zpoždění při I/O",
        "Synchronizační primitivum"
      ],
      correct: 0,
      explanation: "Pro deadlock platí Coffmanovy podmínky: mutual exclusion, hold-and-wait, no preemption, circular wait."
    },
    {
      q: "K čemu slouží semafor?",
      options: [
        "Synchronizační primitivum s čítačem pro řízení přístupu N vláken ke sdíleným zdrojům",
        "Hardware pro detekci kolize sběrnice",
        "Komponenta paměťové stránkovací tabulky",
        "Speciální zámek čistě pro mutex"
      ],
      correct: 0,
      explanation: "Semafor podporuje operace P (wait) a V (signal); binární semafor (počet 0/1) je obdoba mutexu."
    },
    {
      q: "Co je mikrojádro (microkernel) a v čem se liší od monolitu?",
      options: [
        "Mikrojádro v jádru ponechá jen nezbytné minimum (IPC, scheduling), zbytek (FS, ovladače) běží v user space",
        "Mikrojádro je vždy rychlejší než monolit",
        "Mikrojádro běží jen v reálném čase",
        "Monolitické jádro nepoužívá multitasking"
      ],
      correct: 0,
      explanation: "Mikrojádro má vyšší modularitu a izolaci, ale komunikace přes IPC bývá pomalejší; monolit (Linux) je výkonný, ale větší TCB."
    },
    {
      q: "Co je race condition?",
      options: [
        "Situace, kdy výsledek závisí na nedeterministickém pořadí přístupu více vláken ke sdílenému stavu",
        "Závod mezi dvěma procesy o vyšší prioritu",
        "Souběžný běh dvou jader pro výpočet",
        "Speciální plánovací algoritmus"
      ],
      correct: 0,
      explanation: "Race condition se obvykle řeší vzájemným vyloučením (mutex, atomic operations) nebo bezzámkovými strukturami."
    }
  ],
  6: [
    {
      q: "K čemu slouží i-uzel (inode) v unixových souborových systémech?",
      options: [
        "Drží metadata souboru (oprávnění, časy, ukazatele na bloky); jméno souboru je oddělené v adresářovém záznamu",
        "Indexuje názvy souborů podle abecedy",
        "Slouží pro mapování UID na uživatele",
        "Eviduje otevřené síťové sockety"
      ],
      correct: 0,
      explanation: "Inode obsahuje vše kromě jména a obsahu souboru; tvrdé linky odkazují na stejný inode."
    },
    {
      q: "Co je journaling FS?",
      options: [
        "FS, který před aplikací změn zapisuje záznamy do žurnálu kvůli rychlému zotavení po pádu",
        "FS s automatickou kompresí",
        "FS určený pouze pro logy",
        "FS s deduplikací bloků"
      ],
      correct: 0,
      explanation: "Journaling (ext3/4, NTFS, XFS) zajišťuje konzistenci metadat (případně i dat) po neočekávaném ukončení."
    },
    {
      q: "Jaký je rozdíl mezi tvrdým a symbolickým linkem?",
      options: [
        "Tvrdý link odkazuje na stejný inode (musí být ve stejném FS); symbolický link je samostatný soubor obsahující cestu",
        "Symbolický link nelze vytvořit v Linuxu",
        "Tvrdý link funguje jen přes síť",
        "Nemají rozdíl, jen jméno"
      ],
      correct: 0,
      explanation: "Tvrdý link zvyšuje link count inode, symlink se může rozbít při přesunu cíle a může vést přes FS hranice."
    },
    {
      q: "Co je VFS (Virtual File System)?",
      options: [
        "Abstraktní vrstva jádra poskytující jednotné rozhraní k různým souborovým systémům",
        "Speciální FS pro virtuální stroje",
        "Souborový systém v RAM (ramdisk)",
        "FS s podporou šifrování"
      ],
      correct: 0,
      explanation: "VFS umožňuje OS pracovat s ext4, NTFS, NFS, ... přes stejné systémové volání (open, read, ...)."
    },
    {
      q: "Co je file locking?",
      options: [
        "Mechanismus pro řízení souběžného přístupu k souboru (sdílené/výhradní zámky, povinné/doporučené)",
        "Šifrování souboru klíčem",
        "Komprese souboru po zápisu",
        "Předzakázení souboru pro budoucí použití"
      ],
      correct: 0,
      explanation: "Standardní rozhraní: flock(2), fcntl(2). Rozlišuje se mandatory vs. advisory locking a sdílený vs. exkluzivní zámek."
    },
    {
      q: "Co je sparse file?",
      options: [
        "Soubor obsahující nulové úseky, které FS fyzicky nealokuje, dokud nejsou zapsány",
        "Soubor menší než blok",
        "Soubor s rozloženými oprávněními",
        "Soubor přístupný pouze pro čtení"
      ],
      correct: 0,
      explanation: "Sparse soubory šetří diskové místo (např. obrazy disků, databáze) – díky tomu může logická velikost převyšovat fyzickou."
    }
  ],
  7: [
    {
      q: "Které vrstvy obsahuje model TCP/IP?",
      options: [
        "Linkovou, síťovou (Internet), transportní a aplikační",
        "Fyzickou, linkovou, síťovou, transportní, prezentační, relační, aplikační",
        "Fyzickou a aplikační",
        "Pouze síťovou a transportní"
      ],
      correct: 0,
      explanation: "TCP/IP slučuje vrstvy oproti OSI: link, internet, transport, application."
    },
    {
      q: "Co je v rámci OSI modelu PDU transportní vrstvy?",
      options: [
        "Segment (TCP) nebo datagram (UDP)",
        "Rámec",
        "Paket",
        "Bit"
      ],
      correct: 0,
      explanation: "Každá vrstva má vlastní PDU: bit (L1), rámec (L2), paket (L3), segment/datagram (L4)."
    },
    {
      q: "Jaký je rozdíl mezi TCP a UDP?",
      options: [
        "TCP poskytuje spolehlivý spojový přenos s ACK a řízením toku; UDP je bezestavový a bez záruk doručení",
        "TCP je rychlejší než UDP",
        "UDP používá three-way handshake",
        "TCP nepoužívá porty"
      ],
      correct: 0,
      explanation: "Volba TCP/UDP závisí na požadavku na spolehlivost vs. latenci/režii."
    },
    {
      q: "Co je RFC?",
      options: [
        "Request for Comments – dokumenty popisující internetové standardy a doporučení",
        "Real-time Flow Control",
        "Rozhraní mezi linkovou a fyzickou vrstvou",
        "Routovací protokol"
      ],
      correct: 0,
      explanation: "RFC vydávané IETF popisují protokoly (TCP, IP, HTTP), best practices, experimentální nápady."
    },
    {
      q: "Jaká je délka IPv6 adresy?",
      options: [
        "128 bitů",
        "32 bitů",
        "48 bitů",
        "256 bitů"
      ],
      correct: 0,
      explanation: "IPv6 zvětšuje adresní prostor na 128 b (proti 32 b u IPv4) – cca 3,4·10^38 adres."
    },
    {
      q: "Co je MAC adresa?",
      options: [
        "Hardwarový identifikátor síťového rozhraní na linkové vrstvě (typicky 48 bitů)",
        "Adresa v IPv4 přidělená serverem",
        "Identifikátor aplikační vrstvy",
        "Šifrovací klíč"
      ],
      correct: 0,
      explanation: "MAC adresa je obvykle pevně přidělená výrobcem; OUI prefix identifikuje výrobce."
    }
  ],
  8: [
    {
      q: "Co je rozdíl mezi switchem a hubem?",
      options: [
        "Switch posílá rámec jen na cílový port podle MAC tabulky, hub všechny rámce vysílá broadcastem",
        "Hub pracuje na L3, switch na L2",
        "Switch je vždy bezdrátový",
        "Není mezi nimi rozdíl"
      ],
      correct: 0,
      explanation: "Switch zvyšuje propustnost a snižuje kolize; hub je čistě fyzický opakovač (kolizní doména)."
    },
    {
      q: "Jaký princip používá protokol OSPF?",
      options: [
        "Link-state – každý router zná topologii celé oblasti a běží Dijkstrův algoritmus",
        "Distance-vector – router posílá sousedům jen vektory vzdáleností",
        "Hybridní algoritmus jako u BGP",
        "Statické směrovací tabulky"
      ],
      correct: 0,
      explanation: "OSPF je interior gateway protocol typu link-state, dělí síť do areas, používá metriku cost."
    },
    {
      q: "Co dělá ARP?",
      options: [
        "Mapuje IP adresu na MAC adresu v lokální síti",
        "Mapuje doménové jméno na IP",
        "Šifruje komunikaci v LAN",
        "Přiděluje IPv6 adresy"
      ],
      correct: 0,
      explanation: "ARP (Address Resolution Protocol) broadcastuje dotaz \"Kdo má IP X?\" – odpověď uloží do ARP cache."
    },
    {
      q: "Co je NAT?",
      options: [
        "Network Address Translation – mapování privátních adres na veřejné, typicky v routeru",
        "Síťový tester latence",
        "Algoritmus pro detekci kolizí",
        "Komprese hlaviček protokolu"
      ],
      correct: 0,
      explanation: "NAT umožňuje sdílet jednu veřejnou IP mezi mnoha klienty (PAT) a šetří adresní prostor IPv4."
    },
    {
      q: "Co je VLAN?",
      options: [
        "Virtuální LAN – logické rozdělení switche do více broadcast domén pomocí tagů 802.1Q",
        "Bezdrátová síť 802.11",
        "Síť s šifrovanou komunikací",
        "Synonymum pro VPN"
      ],
      correct: 0,
      explanation: "VLAN umožňuje izolaci provozu bez fyzického rozdělení sítě; rámce mezi switchi nesou VLAN tag."
    },
    {
      q: "Jaký je smysl protokolu STP (Spanning Tree)?",
      options: [
        "Předcházet smyčkám v ethernetové topologii deaktivací redundantních spojů a vytvořením stromové struktury",
        "Šifrovat komunikaci mezi switchi",
        "Distribuovat VLAN konfiguraci",
        "Přiřazovat IP adresy"
      ],
      correct: 0,
      explanation: "STP/RSTP volí kořenový switch a blokuje cesty způsobující smyčky; bez něj by docházelo k broadcast storm."
    }
  ],
  9: [
    {
      q: "Co je v architektuře Windows HAL?",
      options: [
        "Hardware Abstraction Layer – vrstva izolující jádro od specifik HW",
        "Hyperthreading Acceleration Layer",
        "Hardware Access List, oprávnění zařízení",
        "Vrstva pro spouštění Linuxových procesů"
      ],
      correct: 0,
      explanation: "HAL umožňuje jádru NT běžet na různých architekturách bez přepisu jádra – přístup k HW jde přes definované rozhraní."
    },
    {
      q: "Co je v NT službou SCM (Service Control Manager)?",
      options: [
        "Komponenta řídící spouštění, zastavování a stav systémových služeb",
        "Synchronizační manažer pro vlákna",
        "Správce uložené historie konzole",
        "Spouštěč skriptů přihlášení"
      ],
      correct: 0,
      explanation: "SCM (services.exe) registruje služby, spravuje jejich životní cyklus a komunikuje s nimi přes RPC."
    },
    {
      q: "K čemu slouží Win32 subsystém?",
      options: [
        "Poskytuje API pro Win32 aplikace nad jádrem NT (GDI, USER, KERNEL32)",
        "Emulace MS-DOS aplikací",
        "Virtualizace Linuxových procesů (WSL1)",
        "Subsystém pro POSIX kompatibilitu"
      ],
      correct: 0,
      explanation: "NT byl navržen s více subsystémy (Win32, OS/2, POSIX); dnes je Win32 dominantní."
    },
    {
      q: "Co je 'pagefile.sys'?",
      options: [
        "Soubor reprezentující stránkovací soubor virtuální paměti na disku",
        "Index Microsoft Search",
        "Konfigurační soubor registru",
        "Záložní obraz BIOSu"
      ],
      correct: 0,
      explanation: "Pagefile slouží pro odložení neaktivních stránek na disk; lze nastavit velikost nebo systémové řízení."
    },
    {
      q: "Co je registry ve Windows?",
      options: [
        "Hierarchická databáze konfigurace systému a aplikací (klíče HKEY_LOCAL_MACHINE atd.)",
        "Seznam přihlášených uživatelů",
        "Tabulka přerušení",
        "Log akcí instalátoru"
      ],
      correct: 0,
      explanation: "Registry centralizuje nastavení; uložen v hive souborech (SOFTWARE, SYSTEM, SAM, ...)."
    },
    {
      q: "Co je UAC ve Windows?",
      options: [
        "User Account Control – mechanismus oddělování běžných a administrátorských privilegií se souhlasovým dialogem",
        "Universal Application Container",
        "Update Acceleration Cache",
        "Unified Access Cluster"
      ],
      correct: 0,
      explanation: "UAC spouští aplikace s běžným tokenem a o elevaci žádá explicitně; výrazně snižuje povrch útoku."
    }
  ],
  10: [
    {
      q: "Co je systemd?",
      options: [
        "Init systém a service manager pro většinu moderních Linux distribucí",
        "Hardwarový démon pro správu napájení",
        "Sběrnice IPC mezi jádrem a uživatelem",
        "Šifrovací nástroj pro disky"
      ],
      correct: 0,
      explanation: "Systemd nahradil SysV init; spravuje služby (units), sockets, timery, journald."
    },
    {
      q: "Co je systémové volání (syscall) v Linuxu?",
      options: [
        "Rozhraní pro vstup do jádra z user space (např. open, read, write) přes přerušení/instrukci",
        "Volání knihovní funkce v glibc",
        "Volání systémového obslužného programu z shellu",
        "Funkce volaná pomocí RPC"
      ],
      correct: 0,
      explanation: "Syscall přepíná do kernel mode; libc tyto wrappery zpřístupňuje aplikacím."
    },
    {
      q: "Co dělá příkaz chmod 755?",
      options: [
        "Nastaví práva rwxr-xr-x na soubor (vlastník rwx, ostatní r-x)",
        "Nastaví výhradní práva rootovi",
        "Smaže oprávnění souboru",
        "Změní vlastníka souboru"
      ],
      correct: 0,
      explanation: "Číselná oktalová maska 7=rwx, 5=r-x; změna vlastníka by byla chown."
    },
    {
      q: "K čemu slouží 'pipe' v shellu?",
      options: [
        "Přesměrovává stdout jednoho procesu na stdin druhého (cmd1 | cmd2)",
        "Spouští procesy paralelně bez komunikace",
        "Otevírá síťové spojení",
        "Vytváří hardlink mezi procesy"
      ],
      correct: 0,
      explanation: "Pipe je anonymní FIFO mezi procesy – základ skládání utilit ve filozofii Unixu."
    },
    {
      q: "Co je 'fork' v Linuxu?",
      options: [
        "Systémové volání vytvářející kopii volajícího procesu (parent vs. child)",
        "Spuštění nové instance shellu",
        "Vlákno v jádře",
        "Sledování chyb (forkbomb)"
      ],
      correct: 0,
      explanation: "Po forku má potomek vlastní PID, ale sdílí copy-on-write paměť; následně bývá exec() pro nový program."
    },
    {
      q: "Co je démon (daemon) v Linuxu?",
      options: [
        "Proces běžící na pozadí mimo kontrolu terminálu, typicky poskytující službu",
        "Speciální typ jaderního vlákna",
        "Aplikační framework pro UI",
        "Plánovač úloh cron"
      ],
      correct: 0,
      explanation: "Démon se odpojuje od řídicího terminálu, mívá samostatnou session; jméno obvykle končí na 'd' (sshd, httpd)."
    }
  ],
  11: [
    {
      q: "Co je v IoT 'thing'?",
      options: [
        "Fyzické zařízení s jednoznačným identifikátorem schopné komunikovat v síti (senzor, akční člen, brána)",
        "Synonymum pro datový tok",
        "Aplikace pro analýzu dat",
        "Knihovna sloužící pro debug"
      ],
      correct: 0,
      explanation: "IoT spojuje fyzický a digitální svět – \"thing\" je zařízení s konektivitou a obvykle minimální výpočetní kapacitou."
    },
    {
      q: "Co znamená 'constrained device' v IoT?",
      options: [
        "Zařízení s omezeným výpočetním výkonem, pamětí a energií (např. malé MCU)",
        "Zařízení připojené pouze kabelem",
        "Zařízení vyžadující speciální certifikát",
        "Zařízení s rychlostí > 1 GB/s"
      ],
      correct: 0,
      explanation: "Constrained nodes (RFC 7228) mají třídy C0–C2 podle paměti a CPU; volí se vhodné protokoly (CoAP, 6LoWPAN)."
    },
    {
      q: "Jaká je hlavní zpětná vazba v IoT systémech?",
      options: [
        "Senzor → zpracování → akční člen, případně přes cloud; cyklus měření a řízení",
        "Pouze odesílání metrik do cloudu bez reakce",
        "Replikace stavu mezi koncovými zařízeními",
        "Manuální kontrola lidským operátorem"
      ],
      correct: 0,
      explanation: "Klasický uzavřený smyčkový princip: vnímání prostředí, rozhodování a zásah do prostředí (často zpracováno na okraji či v cloudu)."
    },
    {
      q: "Co je hlavní riziko soukromí v IoT?",
      options: [
        "Velké množství senzorů sbírá citlivá data o uživatelích a často je odesílá do cloudových služeb",
        "Vysoká cena zařízení",
        "Příliš krátká životnost baterií",
        "Vlnění Wi-Fi signálu"
      ],
      correct: 0,
      explanation: "Spolu se sběrem dat se objevují otázky souhlasu, agregace, profilování a bezpečnosti přenosu."
    },
    {
      q: "Co je IoT gateway?",
      options: [
        "Zařízení agregující data ze senzorů a překládající mezi lokálními a širšími protokoly (Zigbee → MQTT/HTTPS)",
        "Vysokorychlostní firewall pro datacentra",
        "Router pro mobilní sítě",
        "Šifrovací modul pro karty"
      ],
      correct: 0,
      explanation: "Gateway poskytuje konektivitu, lokální zpracování a bezpečnostní funkce mezi senzorickou sítí a cloudem."
    },
    {
      q: "Co je smysl OTA aktualizací v IoT?",
      options: [
        "Vzdálená aktualizace firmware/SW přes síť bez fyzického přístupu k zařízení",
        "Optická komunikace zařízení v reálném čase",
        "Operace na transparentní antény",
        "Out-of-Tolerance Adjustments – kalibrace"
      ],
      correct: 0,
      explanation: "OTA (Over-The-Air) je klíčové pro správu životnosti a bezpečnosti rozsáhlých flotil IoT zařízení."
    }
  ],
  12: [
    {
      q: "Co je MQTT?",
      options: [
        "Lehký publish-subscribe protokol nad TCP/IP s minimální režií, vhodný pro IoT komunikaci",
        "Šifrovací protokol vrstvy 7",
        "Hardwarová sběrnice pro senzory",
        "Standard pro 4G mobilní sítě"
      ],
      correct: 0,
      explanation: "MQTT používá brokera, témata a QoS úrovně 0/1/2; je vhodný pro pomalé/spolehlivé propojení."
    },
    {
      q: "Co je edge computing?",
      options: [
        "Zpracování dat na okraji sítě (blíže zdroji) místo centrálního cloudu – snižuje latenci a šířku pásma",
        "Speciální typ cloudu s nižším SLA",
        "Edge na rastru obrázku v IoT kameře",
        "Druh blockchain konsensu"
      ],
      correct: 0,
      explanation: "Edge přibližuje výpočet senzorům; fog je doplňující koncept mezi edge a cloudem."
    },
    {
      q: "Jaká je hlavní hrozba pro WSN (bezdrátové senzorové sítě)?",
      options: [
        "Útoky odposlechem, rušení rádiového signálu (jamming) a omezené možnosti silné kryptografie",
        "Pouze chyby v aplikaci na cloudu",
        "Vysoká cena šifrovacích modulů PC",
        "Nedostatek IPv6 adres"
      ],
      correct: 0,
      explanation: "Energetická omezení a sdílené rádiové médium dělají WSN náchylnou na specifické útoky (sinkhole, sybil, jamming)."
    },
    {
      q: "Co je CoAP?",
      options: [
        "Constrained Application Protocol – odlehčená alternativa HTTP nad UDP, pro IoT zařízení",
        "Šifrovaný tunel přes TLS pro IoT",
        "Centralizovaný registr IoT zařízení",
        "Bezdrátová technologie LoRa"
      ],
      correct: 0,
      explanation: "CoAP zachovává REST sémantiku (GET/POST/PUT/DELETE), používá UDP a DTLS, je optimalizovaný pro malá zařízení."
    },
    {
      q: "Co je 6LoWPAN?",
      options: [
        "Standard umožňující přenos IPv6 paketů přes nízkopříkonové bezdrátové sítě (např. IEEE 802.15.4)",
        "Šifrovací suita pro Bluetooth",
        "Skupina osob pro standardizaci LoRa",
        "Rozhraní pro připojení 6 senzorů"
      ],
      correct: 0,
      explanation: "6LoWPAN provádí kompresi a fragmentaci IPv6, čímž zpřístupňuje internetové standardy i pro constrained zařízení."
    },
    {
      q: "K čemu slouží DTLS v IoT?",
      options: [
        "K zabezpečení komunikace nad UDP (např. CoAP) tak, jako TLS zabezpečuje TCP",
        "K detekci ztracených paketů",
        "K časové synchronizaci",
        "K překladu doménových jmen"
      ],
      correct: 0,
      explanation: "DTLS (Datagram TLS) přenáší principy TLS do prostředí bez spojení; zachovává handshake a šifrování."
    }
  ],
  13: [
    {
      q: "Co je v OOP rozdíl mezi přetížením (overloading) a překrytím (overriding) metody?",
      options: [
        "Overloading: víc metod stejného jména s různými signaturami (compile-time); Overriding: podtřída přepisuje zděděnou metodu (runtime)",
        "Jsou to synonyma",
        "Overloading existuje jen v Pythonu",
        "Overriding mění vlastnosti pole"
      ],
      correct: 0,
      explanation: "Overload je statický mechanismus, override umožňuje dynamický polymorfismus."
    },
    {
      q: "Co je statická typová kontrola?",
      options: [
        "Kontrola typů provedená překladačem před spuštěním programu",
        "Kontrola typů za běhu pomocí instanceof",
        "Generování typové dokumentace",
        "Kontrola dat v databázi"
      ],
      correct: 0,
      explanation: "Statický typový systém zachycuje chyby brzy; dynamické jazyky (Python, JS) provádí kontrolu až za běhu."
    },
    {
      q: "Co je rozhraní (interface) v OOP?",
      options: [
        "Kontrakt deklarující sadu metod bez implementace, který třídy implementují",
        "Implementace bez metod, jen s atributy",
        "Pojmenovaná oblast paměti",
        "Speciální typ konstruktoru"
      ],
      correct: 0,
      explanation: "Interface umožňuje polymorfismus a oddělení API od implementace; některé jazyky umožňují default metody."
    },
    {
      q: "Co je 'this' (nebo self) reference?",
      options: [
        "Odkaz na aktuální instanci, na které byla metoda volána",
        "Odkaz na rodičovskou třídu",
        "Globální kontext aplikace",
        "Reference na první argument metody bez ohledu na typ"
      ],
      correct: 0,
      explanation: "this/self zpřístupňuje stav instance uvnitř metody; v některých jazycích je explicitní (Python), jinde implicitní."
    },
    {
      q: "Co znamená immutable třída?",
      options: [
        "Po vytvoření nelze měnit stav instance; všechny atributy jsou nastaveny v konstruktoru",
        "Třídu nelze dědit",
        "Třída nesmí mít konstruktor",
        "Třída nemá metody"
      ],
      correct: 0,
      explanation: "Neměnné objekty (String v Javě, frozen dataclass v Pythonu) jsou bezpečné pro sdílení a hashování."
    },
    {
      q: "Co je v UML notace značení visibility '#'?",
      options: [
        "Protected – přístupné v třídě a jejích potomcích",
        "Public – přístupné odkudkoli",
        "Private – pouze v dané třídě",
        "Package-private"
      ],
      correct: 0,
      explanation: "UML značky: + public, - private, # protected, ~ package."
    }
  ],
  14: [
    {
      q: "Jaký je v JSONu rozdíl mezi polem a objektem?",
      options: [
        "Pole [] je seřazený seznam hodnot; objekt {} je neuspořádaná množina dvojic klíč:hodnota",
        "JSON pole je vždy stejné jako objekt",
        "Objekt může obsahovat jen řetězce",
        "Pole obsahuje jen čísla"
      ],
      correct: 0,
      explanation: "Pole zachovává pořadí (index); objekt mapuje řetězcové klíče na hodnoty, pořadí klíčů standardně není zaručeno (i když je často respektováno)."
    },
    {
      q: "Co je CSV a kdy se používá?",
      options: [
        "Textový formát s hodnotami oddělenými oddělovačem (čárkou); vhodný pro tabulková data",
        "Binární formát pro obrázky",
        "Šifrovaný formát pro logy",
        "Formát pro 3D modely"
      ],
      correct: 0,
      explanation: "CSV je jednoduchý, široce kompatibilní; potřebuje konvence pro escapování (uvozovky) a kódování."
    },
    {
      q: "Co je generická kolekce?",
      options: [
        "Kolekce parametrizovaná typem prvků (např. List<T>) zajišťující typovou bezpečnost a kompaktnost kódu",
        "Kolekce mající pevně daný typ Object",
        "Kolekce bez konkrétní implementace",
        "Kolekce vázaná na jednu instanci"
      ],
      correct: 0,
      explanation: "Generika eliminují přetypovávání a poskytují kontroly v překladači; type erasure se používá v Javě."
    },
    {
      q: "Co je v jazyce Java/C# stream nebo LINQ?",
      options: [
        "Abstrakce pro proudové zpracování kolekcí pomocí mapování, filtrace a redukce, často lazy",
        "Vstupně-výstupní operace jen pro soubory",
        "Asynchronní zpracování zpráv",
        "Sériový komunikační protokol"
      ],
      correct: 0,
      explanation: "Stream/LINQ umožňuje deklarativní operace nad daty; klíčový rys: lazy evaluation a fluent API."
    },
    {
      q: "Co je perzistence dat?",
      options: [
        "Trvalé uložení dat tak, aby přežila ukončení aplikace nebo restart systému",
        "Synchronní zápis do RAM",
        "Klonování objektů v paměti",
        "Smazání dočasných dat"
      ],
      correct: 0,
      explanation: "Perzistence vyžaduje stabilní úložiště (disk, DB); aplikace často používají ORM nebo serializaci."
    },
    {
      q: "K čemu slouží XML schéma (XSD)?",
      options: [
        "Definuje strukturu, typy a omezení XML dokumentů pro validaci",
        "Šifruje XML obsah",
        "Slouží jen k formátování XML",
        "Synonymum pro JSON Schema"
      ],
      correct: 0,
      explanation: "XSD definuje povolené prvky, atributy, datové typy a multiplicitu; klíčové pro výměnu strukturovaných dat."
    }
  ],
  15: [
    {
      q: "Co je rozdíl mezi zásobníkem a frontou?",
      options: [
        "Zásobník je LIFO (push/pop), fronta je FIFO (enqueue/dequeue)",
        "Zásobník je vždy bez kapacity, fronta vždy s kapacitou",
        "Fronta nepoužívá ukazatele",
        "Zásobník nemá vrchol"
      ],
      correct: 0,
      explanation: "LIFO znamená 'naposled vložený, první vyjmutý'; FIFO 'první vložený, první vyjmutý'."
    },
    {
      q: "Co je kruhový buffer (ring buffer)?",
      options: [
        "Pole pevné velikosti chápané jako kruh – po dosažení konce se ukazatel přesune na začátek",
        "Buffer pro 3D grafiku",
        "Zásobník s nekonečnou velikostí",
        "Spojový seznam tvořící cyklus"
      ],
      correct: 0,
      explanation: "Ring buffer je efektivní pro streamování dat producent/spotřebitel s pevnou pamětí."
    },
    {
      q: "Jaká je výhoda dvousměrného spojového seznamu oproti jednosměrnému?",
      options: [
        "Lze se pohybovat oběma směry a snadno mazat uzel se znalostí jen jeho ukazatele",
        "Šetří paměť",
        "Je vždy rychlejší pro hledání",
        "Umí indexovat v O(1)"
      ],
      correct: 0,
      explanation: "Dvojnásobné ukazatele přidávají režii paměti, ale usnadňují operace; pro indexaci jsou pole stále lepší."
    },
    {
      q: "Jaká je amortizovaná složitost přidání do dynamického pole (ArrayList) na konec?",
      options: [
        "O(1) amortizovaně díky exponenciálnímu zvětšování kapacity",
        "O(n) vždy",
        "O(log n)",
        "O(n log n)"
      ],
      correct: 0,
      explanation: "Reallocation se provádí jen občas (např. dvojnásobně), takže průměrný náklad přidání zůstává konstantní."
    },
    {
      q: "Co je hash table v praxi?",
      options: [
        "Datová struktura mapující klíče na hodnoty pomocí hashovací funkce, řešící kolize",
        "Strom s hashem v každém uzlu",
        "Spojový seznam s primárním klíčem",
        "Datová struktura pro řazení"
      ],
      correct: 0,
      explanation: "Hash table poskytuje rychlé vyhledávání/vkládání průměrně O(1); volba hash funkce a strategie kolizí ovlivňuje výkon."
    },
    {
      q: "Co je rozdíl mezi stromem a grafem?",
      options: [
        "Strom je souvislý acyklický graf s n-1 hranami pro n vrcholů; obecný graf může mít cykly a více komponent",
        "Strom má vždy konečně mnoho vrcholů, graf nekonečně",
        "Strom je orientovaný, graf neorientovaný",
        "Strom má jen jeden uzel"
      ],
      correct: 0,
      explanation: "Strom je speciální případ grafu; má vlastnosti zaručující jedinečnou cestu mezi libovolnými dvěma vrcholy."
    }
  ],
  16: [
    {
      q: "Co je v UI 'flex' a 'grid' v CSS?",
      options: [
        "Layoutové systémy pro 1D (flex) a 2D (grid) rozvržení s flexibilitou velikostí, mezer a zarovnání",
        "Knihovny pro animace",
        "Synonyma pro float layout",
        "JavaScriptové frameworky"
      ],
      correct: 0,
      explanation: "Flexbox je jednorozměrný, Grid dvourozměrný; obě technologie nahradily nákladné triky s float/inline-block."
    },
    {
      q: "Co znamená responzivní design?",
      options: [
        "Návrh, který se přizpůsobuje různým velikostem obrazovky (media queries, fluidní rozvržení, breakpointy)",
        "Pouze pro mobilní aplikace",
        "Pouze tmavý/světlý režim",
        "Animace tlačítek při hover"
      ],
      correct: 0,
      explanation: "Responzivní UI reaguje na viewport; mobile-first přístup začíná malými obrazovkami a rozšiřuje se nahoru."
    },
    {
      q: "Co je událostmi řízené programování?",
      options: [
        "Architektura, kde tok řízení určuje výskyt událostí (klik, čas, zpráva), na které kód reaguje handlery",
        "Synonymum pro asynchronní HTTP",
        "Programování bez funkcí",
        "Vícevláknové zpracování s frontou"
      ],
      correct: 0,
      explanation: "Event-driven model je typický pro GUI a sítě; obvykle se opírá o event loop a handlery."
    },
    {
      q: "Co je v UI pojem 'separation of concerns' pro MVC?",
      options: [
        "Oddělení datového modelu, prezentační vrstvy a řízení toku do nezávislých komponent",
        "Zákaz spojování dvou vláken",
        "Oddělení uživatelských dat od mailové schránky",
        "Princip pro snížení počtu řádků kódu"
      ],
      correct: 0,
      explanation: "MVC odděluje zodpovědnosti, což usnadňuje testování a údržbu; ve frontendu se objevují jeho varianty (MVVM, Flux, ...)."
    },
    {
      q: "Co je 'accessibility' (přístupnost) UI?",
      options: [
        "Návrh rozhraní použitelného i lidmi s omezením (např. čtečka, kontrast, klávesnice); definováno WCAG",
        "Možnost přístupu administrátora",
        "Otevírání více oken",
        "Lokalizace překladů"
      ],
      correct: 0,
      explanation: "WCAG popisuje úrovně A/AA/AAA; klíčové aspekty: kontrast, alt texty, ARIA, ovládání klávesnicí."
    },
    {
      q: "Co je virtuální DOM?",
      options: [
        "Abstraktní reprezentace DOMu v paměti, kterou framework porovnává s předchozím stavem (diff) a aplikuje jen rozdíly",
        "Speciální typ shadow DOMu",
        "Synonymum pro web components",
        "DOM rozdělený mezi vlákna"
      ],
      correct: 0,
      explanation: "Virtual DOM (React) minimalizuje drahé DOM operace tím, že je dávkuje a aplikuje pouze rozdíly."
    }
  ],
  17: [
    {
      q: "Co je v socket programování rozdíl mezi TCP a UDP socketem?",
      options: [
        "TCP socket (SOCK_STREAM) je spojový a spolehlivý; UDP socket (SOCK_DGRAM) je nespojový a bez záruk",
        "TCP socket nepodporuje binární data",
        "UDP socket vyžaduje listen()",
        "TCP socket pracuje jen lokálně"
      ],
      correct: 0,
      explanation: "Volba se odráží v posloupnosti syscallů: TCP používá listen/accept, UDP jen bind/send/recvfrom."
    },
    {
      q: "Co dělá funkce accept() na serverovém socketu?",
      options: [
        "Akceptuje příchozí spojení a vrátí nový socket pro komunikaci s klientem",
        "Otevírá socket pro vysílání",
        "Posílá data po síti",
        "Uzavírá socket"
      ],
      correct: 0,
      explanation: "Serverový socket naslouchá; accept() blokuje, dokud nepřijde spojení, a vrací separátní socket pro komunikaci."
    },
    {
      q: "Co je rozdíl mezi paralelním a souběžným (concurrent) zpracováním?",
      options: [
        "Souběžnost je logické překrytí úloh (může být i 1 CPU), paralelismus znamená skutečně současný běh na více CPU",
        "Souběžnost vyžaduje GPU",
        "Paralelismus existuje jen ve virtuálních strojích",
        "Není mezi nimi rozdíl"
      ],
      correct: 0,
      explanation: "Concurrency je o struktuře programu, parallelism o souběžném vykonávání; jedno bez druhého je možné."
    },
    {
      q: "Co je 'thread pool'?",
      options: [
        "Sada předvytvořených vláken sdílených pro vykonávání úloh, čímž se eliminuje opakovaná tvorba vláken",
        "Vícevláknový OS",
        "Synchronizační primitivum",
        "Speciální verze garbage collectoru"
      ],
      correct: 0,
      explanation: "Thread pool zlepšuje výkon (méně overheadu) a omezuje počet souběžných vláken; obvykle ho doprovází fronta úloh."
    },
    {
      q: "Co je 'non-blocking I/O'?",
      options: [
        "I/O operace, která se ihned vrátí (případně s EAGAIN), místo aby blokovala vlákno, dokud nejsou data",
        "Pouze synchronní čtení",
        "Speciální typ pevného disku",
        "Funkce dostupná jen v GPU"
      ],
      correct: 0,
      explanation: "V kombinaci s event loopem (epoll/kqueue) umožňuje obsluhu mnoha spojení jediným vláknem."
    },
    {
      q: "Co je RPC?",
      options: [
        "Remote Procedure Call – vzdálené volání procedury, kde klient volá funkci jiného procesu transparentně",
        "Real-time Performance Counter",
        "Routing Protocol Configuration",
        "Read-Per-Cycle"
      ],
      correct: 0,
      explanation: "RPC abstrahuje komunikaci a serializaci (gRPC, Thrift, XML-RPC); kontrastuje s explicitním REST."
    }
  ],
  18: [
    {
      q: "Co je DOM?",
      options: [
        "Document Object Model – stromová reprezentace HTML dokumentu, přístupná z JavaScriptu",
        "Diagnostic Object Manager",
        "Datová schránka pro cookies",
        "Synonymum pro HTML značku <dom>"
      ],
      correct: 0,
      explanation: "DOM API umožňuje číst/upravovat stránku; je standardizován W3C/WHATWG."
    },
    {
      q: "Jaký je rozdíl mezi class a id selektorem v CSS?",
      options: [
        "Class se používá pro více prvků (.x), id právě pro jeden unikátní (#x); id má vyšší specifičnost",
        "Class lze použít jen v JS, id v CSS",
        "Id se v dokumentu může opakovat",
        "Class má vyšší prioritu než id"
      ],
      correct: 0,
      explanation: "Specifičnost CSS pravidel: inline > id > class/attribute/pseudo > prvek/pseudoelement."
    },
    {
      q: "Co je sémantický HTML?",
      options: [
        "Použití značek vyjadřujících význam obsahu (header, nav, article, footer) místo obecných div",
        "Speciální verze HTML s typovou kontrolou",
        "HTML generované pomocí AI",
        "Synonymum pro HTML5 video tag"
      ],
      correct: 0,
      explanation: "Sémantické značky pomáhají SEO, přístupnosti (čtečky) a údržbě kódu."
    },
    {
      q: "Co je AJAX?",
      options: [
        "Technika asynchronní výměny dat se serverem (typicky JSON/XML) bez nutnosti reloadu stránky",
        "Knihovna pro animace",
        "Verze JavaScriptu pro Adobe",
        "Šifrovací protokol"
      ],
      correct: 0,
      explanation: "AJAX (Asynchronous JavaScript and XML) je základ moderních interaktivních webových aplikací; dnes se převážně přenáší JSON přes fetch."
    },
    {
      q: "Co je media query v CSS?",
      options: [
        "Pravidlo aplikující styly na základě vlastností zařízení (šířka obrazovky, orientace, dpi)",
        "Skript pro stahování médií",
        "Dotaz do databáze pro multimediální obsah",
        "Synonymum pro video tag"
      ],
      correct: 0,
      explanation: "Media queries jsou základem responzivního designu; specifikují breakpointy a kontextové styly."
    },
    {
      q: "Co znamená 'progressive enhancement'?",
      options: [
        "Stavění webu nejdřív se základní funkčností (HTML), na kterou se postupně přidává CSS a JS pro pokročilé vlastnosti",
        "Postupné zvyšování rozlišení obrázku",
        "Hot-reload v devtools",
        "Optimalizace kompilace JS"
      ],
      correct: 0,
      explanation: "Progressive enhancement zaručí dostupnost obsahu i bez JS, postupně dodává bohatší zážitek pro schopnější prohlížeče."
    }
  ],
  19: [
    {
      q: "Co je v UML třídním diagramu asociace?",
      options: [
        "Strukturální vztah mezi dvěma třídami se sémantickým významem (např. 'student studuje předmět'), s násobností",
        "Vztah identický s dědičností",
        "Spojení tříd v rámci balíčku",
        "Synonymum pro interface"
      ],
      correct: 0,
      explanation: "Asociace popisuje vztah mezi instancemi; může mít role, násobnost (1, *, 0..1) a směr navigace."
    },
    {
      q: "Co je generalizace v UML?",
      options: [
        "Vztah dědičnosti – obecnější třída je nadtřídou specializovanějších",
        "Spojování instancí do skupiny",
        "Náhodný výběr typu prvku",
        "Generování UML modelu ze zdrojového kódu"
      ],
      correct: 0,
      explanation: "Generalizace odpovídá is-a vztahu v OOP a kreslí se prázdnou trojúhelníkovou šipkou."
    },
    {
      q: "K čemu slouží sequence diagram?",
      options: [
        "Zachycuje časovou posloupnost zpráv mezi objekty/aktéry pro konkrétní scénář",
        "Modeluje persistenci dat",
        "Popisuje strukturu balíčků",
        "Slouží pro grafické rozhraní"
      ],
      correct: 0,
      explanation: "Sequence diagram ukazuje, jak objekty spolupracují v rámci use case s důrazem na časové pořadí volání."
    },
    {
      q: "Jaký je rozdíl mezi kompozicí a agregací v UML?",
      options: [
        "Kompozice je silnější vlastnictví (život životnost součásti je vázána na celek); agregace je slabší ('má')",
        "Agregace nemá násobnost",
        "Kompozice je synonymum dědičnosti",
        "Agregace existuje jen u rozhraní"
      ],
      correct: 0,
      explanation: "Kompozice se kreslí plným kosočtvercem (whole-part), agregace prázdným."
    },
    {
      q: "Co je use case diagram?",
      options: [
        "Diagram zachycující aktéry a jejich případy užití (funkce systému), vhodný pro analýzu požadavků",
        "Diagram architektury výkonu",
        "Diagram tříd s metodami",
        "Diagram stavového automatu"
      ],
      correct: 0,
      explanation: "Use case diagram je orientovaný na uživatele a slouží jako most mezi byznysem a vývojem."
    },
    {
      q: "Co je stereotype v UML?",
      options: [
        "Rozšíření modelu pomocí «názvu» nad existujícím prvkem (např. «interface»), které specifikuje význam",
        "Předem definovaný balíček tříd",
        "Synonymum pro asociaci",
        "Šablona kódu generovaná z UML"
      ],
      correct: 0,
      explanation: "Stereotypy umožňují přidávat sémantiku v rámci UML profilu (např. <<entity>>, <<controller>>)."
    }
  ]
};
