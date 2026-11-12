// Generováno skriptem tools/build_content.py z obsah-faze2.md, obsah-vyslovnost.md a obsah-dialogy.md – needituj ručně.
window.EXTRAS = {
  "mistakes": [
    {
      "id": "m1",
      "right": "Ich bin zwanzig Jahre alt.",
      "wrong": "Ich habe zwanzig Jahre.",
      "explanation": "Česky „mám dvacet let“, německy „jsem dvacet let starý“: používá se *sein*, ne *haben*."
    },
    {
      "id": "m2",
      "right": "Ich gehe nach Hause.",
      "wrong": "Ich gehe zu Hause.",
      "explanation": "*nach Hause* = domů (směr), *zu Hause* = doma (místo)."
    },
    {
      "id": "m3",
      "right": "Ich habe einen Bruder.",
      "wrong": "Ich habe ein Bruder.",
      "explanation": "*Bruder* je rod *der*; po *haben* je 4. pád a mužský rod má *einen*."
    },
    {
      "id": "m4",
      "right": "Heute gehe ich ins Kino.",
      "wrong": "Heute ich gehe ins Kino.",
      "explanation": "Určité sloveso je v oznamovací větě vždy na druhém místě, i když větu začíná „dnes“."
    },
    {
      "id": "m5",
      "right": "Ich habe kein Geld.",
      "wrong": "Ich habe nicht Geld.",
      "explanation": "Před podstatným jménem se popírá slovem *kein*, *nicht* se používá u sloves a přídavných jmen."
    },
    {
      "id": "m6",
      "right": "Wie alt bist du?",
      "wrong": "Wie viele Jahre bist du?",
      "explanation": "Na věk se ptáme *wie alt*, ne „kolik let“."
    },
    {
      "id": "m7",
      "right": "Es ist kalt.",
      "wrong": "Ist kalt.",
      "explanation": "Německá věta potřebuje podmět; u počasí je to vždy *es*."
    },
    {
      "id": "m8",
      "right": "Ich weiß es nicht.",
      "wrong": "Ich weiß nicht es.",
      "explanation": "Zájmeno stojí před *nicht*."
    },
    {
      "id": "m9",
      "right": "Ich fahre mit dem Zug.",
      "wrong": "Ich fahre mit den Zug.",
      "explanation": "Po *mit* je vždy 3. pád: *dem Zug*."
    },
    {
      "id": "m10",
      "right": "Ich kann Deutsch sprechen.",
      "wrong": "Ich kann sprechen Deutsch.",
      "explanation": "Při modálním slovesu je plnovýznamové sloveso na konci věty."
    },
    {
      "id": "m11",
      "right": "Ich möchte einen Kaffee.",
      "wrong": "Ich möchte ein Kaffee.",
      "explanation": "*Kaffee* je rod *der*, po *möchte* je 4. pád, a mužský rod proto *einen*."
    },
    {
      "id": "m12",
      "right": "Ich gehe zur Schule.",
      "wrong": "Ich gehe nach Schule.",
      "explanation": "*nach* se používá u měst a zemí (nach Berlin); k místům a budovám patří *zu*: *zur Schule*."
    },
    {
      "id": "m13",
      "right": "Ich komme aus Tschechien.",
      "wrong": "Ich komme von Tschechien.",
      "explanation": "*aus* říká, odkud pocházíš (země, město); *von* je „od“ někoho."
    },
    {
      "id": "m14",
      "right": "Ich habe Hunger.",
      "wrong": "Ich bin Hunger.",
      "explanation": "Podstatné jméno *Hunger* se používá s *haben*; s *sein* by to bylo „hungrig“: *Ich bin hungrig*."
    }
  ],
  "falseFriends": [
    {
      "id": "ff-die-mappe",
      "en": "die Mappe",
      "means": "desky, složka",
      "notMeans": "mapa",
      "sentenceEn": "Die Mappe liegt auf dem Tisch.",
      "sentenceCs": "Desky leží na stole."
    },
    {
      "id": "ff-das-gift",
      "en": "das Gift",
      "means": "jed",
      "notMeans": "dárek",
      "sentenceEn": "Das Gift ist gefährlich.",
      "sentenceCs": "Jed je nebezpečný."
    },
    {
      "id": "ff-das-kind",
      "en": "das Kind",
      "means": "dítě",
      "notMeans": "laskavý",
      "sentenceEn": "Das Kind schläft schon.",
      "sentenceCs": "Dítě už spí."
    },
    {
      "id": "ff-der-chef",
      "en": "der Chef",
      "means": "šéf",
      "notMeans": "kuchař",
      "sentenceEn": "Der Chef kommt später.",
      "sentenceCs": "Šéf přijde později."
    },
    {
      "id": "ff-der-rock",
      "en": "der Rock",
      "means": "sukně",
      "notMeans": "hudba rock",
      "sentenceEn": "Der Rock ist aus Wolle.",
      "sentenceCs": "Sukně je z vlny."
    },
    {
      "id": "ff-bekommen",
      "en": "bekommen",
      "means": "dostat",
      "notMeans": "stát se",
      "sentenceEn": "Ich bekomme morgen ein Paket.",
      "sentenceCs": "Zítra dostanu balík."
    },
    {
      "id": "ff-die-art",
      "en": "die Art",
      "means": "druh, způsob",
      "notMeans": "umění",
      "sentenceEn": "Das ist eine besondere Art.",
      "sentenceCs": "To je zvláštní druh."
    },
    {
      "id": "ff-der-rat",
      "en": "der Rat",
      "means": "rada",
      "notMeans": "krysa",
      "sentenceEn": "Ich brauche deinen Rat.",
      "sentenceCs": "Potřebuji tvou radu."
    },
    {
      "id": "ff-der-hut",
      "en": "der Hut",
      "means": "klobouk",
      "notMeans": "chata",
      "sentenceEn": "Er trägt einen schwarzen Hut.",
      "sentenceCs": "Nosí černý klobouk."
    },
    {
      "id": "ff-der-brief",
      "en": "der Brief",
      "means": "dopis",
      "notMeans": "stručný popis",
      "sentenceEn": "Der Brief kommt morgen.",
      "sentenceCs": "Dopis přijde zítra."
    },
    {
      "id": "ff-die-bank",
      "en": "die Bank",
      "means": "lavice",
      "notMeans": "banka",
      "sentenceEn": "Wir sitzen auf der Bank im Park.",
      "sentenceCs": "Sedíme na lavičce v parku."
    },
    {
      "id": "ff-sensibel",
      "en": "sensibel",
      "means": "citlivý",
      "notMeans": "rozumný",
      "sentenceEn": "Sie ist sehr sensibel.",
      "sentenceCs": "Je velmi citlivá."
    }
  ],
  "pairs": [
    {
      "id": "mp-mutter-muetter",
      "a": {
        "id": "mp-mutter",
        "en": "Mutter",
        "cs": "matka"
      },
      "b": {
        "id": "mp-muetter",
        "en": "Mütter",
        "cs": "matky"
      },
      "note": "u × ü"
    },
    {
      "id": "mp-bruder-brueder",
      "a": {
        "id": "mp-bruder",
        "en": "Bruder",
        "cs": "bratr"
      },
      "b": {
        "id": "mp-brueder",
        "en": "Brüder",
        "cs": "bratři"
      },
      "note": "u × ü"
    },
    {
      "id": "mp-schon-schoen",
      "a": {
        "id": "mp-schon",
        "en": "schon",
        "cs": "už"
      },
      "b": {
        "id": "mp-schoen",
        "en": "schön",
        "cs": "krásný"
      },
      "note": "o × ö"
    },
    {
      "id": "mp-bar-baer",
      "a": {
        "id": "mp-bar",
        "en": "Bar",
        "cs": "bar"
      },
      "b": {
        "id": "mp-baer",
        "en": "Bär",
        "cs": "medvěd"
      },
      "note": "a × ä (dlouhé)"
    },
    {
      "id": "mp-wir-vier",
      "a": {
        "id": "mp-wir",
        "en": "wir",
        "cs": "my"
      },
      "b": {
        "id": "mp-vier",
        "en": "vier",
        "cs": "čtyři"
      },
      "note": "w × v (f)"
    },
    {
      "id": "mp-zeit-seit",
      "a": {
        "id": "mp-zeit",
        "en": "Zeit",
        "cs": "čas"
      },
      "b": {
        "id": "mp-seit",
        "en": "seit",
        "cs": "od"
      },
      "note": "c × z"
    },
    {
      "id": "mp-tasse-tasche",
      "a": {
        "id": "mp-tasse",
        "en": "Tasse",
        "cs": "šálek"
      },
      "b": {
        "id": "mp-tasche",
        "en": "Tasche",
        "cs": "taška"
      },
      "note": "s × š"
    },
    {
      "id": "mp-miete-mitte",
      "a": {
        "id": "mp-miete",
        "en": "Miete",
        "cs": "nájem"
      },
      "b": {
        "id": "mp-mitte",
        "en": "Mitte",
        "cs": "střed"
      },
      "note": "dlouhé i × krátké i"
    },
    {
      "id": "mp-beet-bett",
      "a": {
        "id": "mp-beet",
        "en": "Beet",
        "cs": "záhon"
      },
      "b": {
        "id": "mp-bett",
        "en": "Bett",
        "cs": "postel"
      },
      "note": "dlouhé e × krátké e"
    },
    {
      "id": "mp-ofen-offen",
      "a": {
        "id": "mp-ofen",
        "en": "Ofen",
        "cs": "trouba"
      },
      "b": {
        "id": "mp-offen",
        "en": "offen",
        "cs": "otevřený"
      },
      "note": "dlouhé o × krátké o"
    },
    {
      "id": "mp-leid-lied",
      "a": {
        "id": "mp-leid",
        "en": "Leid",
        "cs": "utrpení"
      },
      "b": {
        "id": "mp-lied",
        "en": "Lied",
        "cs": "píseň"
      },
      "note": "ei × ie"
    },
    {
      "id": "mp-wein-wien",
      "a": {
        "id": "mp-wein",
        "en": "Wein",
        "cs": "víno"
      },
      "b": {
        "id": "mp-wien",
        "en": "Wien",
        "cs": "Vídeň"
      },
      "note": "ei × ie"
    }
  ],
  "sounds": {
    "guide": [
      {
        "title": "ü",
        "examples": "über, Tür, fünf",
        "text": "Špulte rty jako na „ú“ a přitom řekněte „í“. Jazyk zůstává vpředu jako u „í“, ne vzadu jako u „ú“."
      },
      {
        "title": "ö",
        "examples": "schön, hören, Löffel",
        "text": "Špulte rty jako na „ó“ a přitom řekněte „é“."
      },
      {
        "title": "ä",
        "examples": "Käse, Bär, Äpfel",
        "text": "Dlouhé *ä* zní jako „é“, krátké *ä* jako krátké „e“."
      },
      {
        "title": "ch měkké",
        "examples": "ich, Milch, möchte",
        "text": "Po e, i, ä, ö, ü a po souhlásce je „ch“ měkké: jazyk se tiskne k patru a vzduch jemně syčí. Není to „k“ ani „š“."
      },
      {
        "title": "ch drsné",
        "examples": "Bach, Buch, auch",
        "text": "Po a, o, u a au je „ch“ drsné, vzadu v hrdle, jako v české „chata“."
      },
      {
        "title": "ß a ss",
        "examples": "Straße, heiß, Fuß",
        "text": "Vždy ostré „s“. Píšeme *ß* po dlouhé samohlásce a po dvojhlásce."
      },
      {
        "title": "sp, st",
        "examples": "Sport, Stein, spät",
        "text": "Na začátku slova se čtou „šp“ a „št“."
      },
      {
        "title": "z",
        "examples": "Zimmer, zehn, Platz",
        "text": "Čte se „c“, jako v české „cesta“."
      },
      {
        "title": "w a v",
        "examples": "Wasser, Wein, Vater, viel",
        "text": "*w* se čte jako české „v“; *v* se obvykle čte „f“ (Vater, viel)."
      },
      {
        "title": "pf",
        "examples": "Pfanne, Apfel",
        "text": "Obě hlásky vyslovíme hned za sebou: „p“ a „f“."
      },
      {
        "title": "r",
        "examples": "rot, Bruder, Vater",
        "text": "Německé „r“ se tvoří vzadu v hrdle, ne špičkou jazyka jako česky. Na konci slabiky (Vater, Bruder) zní jen jako slabé „a“."
      }
    ],
    "words": [
      {
        "id": "ueber",
        "en": "über",
        "cs": "nad, přes",
        "sentenceEn": "Das Bild hängt über dem Sofa.",
        "sentenceCs": "Obraz visí nad pohovkou.",
        "pron": "ÜBer",
        "note": "ü = „í“ se špulenými rty",
        "noteType": "pronunciation"
      },
      {
        "id": "fuer",
        "en": "für",
        "cs": "pro",
        "sentenceEn": "Das Geschenk ist für dich.",
        "sentenceCs": "Dárek je pro tebe.",
        "pron": "FÜR",
        "note": "ü, koncové r je slabé",
        "noteType": "pronunciation"
      },
      {
        "id": "buecher",
        "en": "Bücher",
        "cs": "knihy",
        "sentenceEn": "Die Bücher liegen auf dem Tisch.",
        "sentenceCs": "Knihy leží na stole.",
        "pron": "BÜcher",
        "note": "ü a měkké ch",
        "noteType": "pronunciation"
      },
      {
        "id": "oel",
        "en": "Öl",
        "cs": "olej",
        "sentenceEn": "Das Öl ist im Schrank.",
        "sentenceCs": "Olej je ve skříni.",
        "pron": "ÖL",
        "note": "ö = „é“ se špulenými rty",
        "noteType": "pronunciation"
      },
      {
        "id": "aepfel",
        "en": "Äpfel",
        "cs": "jablka",
        "sentenceEn": "Die Äpfel sind rot.",
        "sentenceCs": "Jablka jsou červená.",
        "pron": "EPfel",
        "note": "krátké ä = „e“",
        "noteType": "pronunciation"
      },
      {
        "id": "maedchen",
        "en": "Mädchen",
        "cs": "dívka",
        "sentenceEn": "Das Mädchen spielt im Garten.",
        "sentenceCs": "Dívka si hraje na zahradě.",
        "pron": "MÉTchen",
        "note": "dlouhé ä = „é“, -chen je měkké",
        "noteType": "pronunciation"
      },
      {
        "id": "licht",
        "en": "Licht",
        "cs": "světlo",
        "sentenceEn": "Das Licht ist an.",
        "sentenceCs": "Světlo je zapnuté.",
        "pron": "LICHT",
        "note": "měkké ch po i",
        "noteType": "pronunciation"
      },
      {
        "id": "dach",
        "en": "Dach",
        "cs": "střecha",
        "sentenceEn": "Das Dach ist rot.",
        "sentenceCs": "Střecha je červená.",
        "pron": "DACH",
        "note": "drsné ch po a",
        "noteType": "pronunciation"
      },
      {
        "id": "spass",
        "en": "Spaß",
        "cs": "zábava",
        "sentenceEn": "Das macht Spaß.",
        "sentenceCs": "To je zábava.",
        "pron": "ŠPÁS",
        "note": "sp = „šp“, ß = ostré „s“",
        "noteType": "pronunciation"
      },
      {
        "id": "stern",
        "en": "Stern",
        "cs": "hvězda",
        "sentenceEn": "Der Stern ist hell.",
        "sentenceCs": "Hvězda je jasná.",
        "pron": "ŠTERN",
        "note": "st = „št“",
        "noteType": "pronunciation"
      },
      {
        "id": "zeit",
        "en": "Zeit",
        "cs": "čas",
        "sentenceEn": "Ich habe keine Zeit.",
        "sentenceCs": "Nemám čas.",
        "pron": "CAJT",
        "note": "z = „c“",
        "noteType": "pronunciation"
      },
      {
        "id": "viel",
        "en": "viel",
        "cs": "mnoho",
        "sentenceEn": "Wir haben viel Arbeit.",
        "sentenceCs": "Máme hodně práce.",
        "pron": "FÍL",
        "note": "v = „f“",
        "noteType": "pronunciation"
      },
      {
        "id": "welt",
        "en": "Welt",
        "cs": "svět",
        "sentenceEn": "Die Welt ist groß.",
        "sentenceCs": "Svět je velký.",
        "pron": "VELT",
        "note": "w = „v“",
        "noteType": "pronunciation"
      },
      {
        "id": "pfeffer",
        "en": "Pfeffer",
        "cs": "pepř",
        "sentenceEn": "Ich brauche Salz und Pfeffer.",
        "sentenceCs": "Potřebuji sůl a pepř.",
        "pron": "PFEfer",
        "note": "pf = „p“ a hned „f“",
        "noteType": "pronunciation"
      }
    ],
    "twisters": [
      {
        "id": "tw1",
        "en": "Fischers Fritz fischt frische Fische.",
        "sentenceEn": "Fischers Fritz fischt frische Fische.",
        "cs": "Rybářův Fritz chytá čerstvé ryby.",
        "sentenceCs": "Rybářův Fritz chytá čerstvé ryby.",
        "goal": "f a š"
      },
      {
        "id": "tw2",
        "en": "Zehn zahme Ziegen ziehen zehn Zentner Zucker zum Zoo.",
        "sentenceEn": "Zehn zahme Ziegen ziehen zehn Zentner Zucker zum Zoo.",
        "cs": "Deset krotkých koz táhne deset centů cukru do zoo.",
        "sentenceCs": "Deset krotkých koz táhne deset centů cukru do zoo.",
        "goal": "z = c"
      },
      {
        "id": "tw3",
        "en": "Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid.",
        "sentenceEn": "Blaukraut bleibt Blaukraut und Brautkleid bleibt Brautkleid.",
        "cs": "Červené zelí zůstane červeným zelím a svatební šaty zůstanou svatebními šaty.",
        "sentenceCs": "Červené zelí zůstane červeným zelím a svatební šaty zůstanou svatebními šaty.",
        "goal": "bl, br a au"
      },
      {
        "id": "tw4",
        "en": "Müllers Mühle mahlt Mehl.",
        "sentenceEn": "Müllers Mühle mahlt Mehl.",
        "cs": "Müllerův mlýn mele mouku.",
        "sentenceCs": "Müllerův mlýn mele mouku.",
        "goal": "ü a m"
      },
      {
        "id": "tw5",
        "en": "Acht alte Ameisen aßen am Abend Ananas.",
        "sentenceEn": "Acht alte Ameisen aßen am Abend Ananas.",
        "cs": "Osm starých mravenců jedlo večer ananas.",
        "sentenceCs": "Osm starých mravenců jedlo večer ananas.",
        "goal": "ch (drsné) a a"
      }
    ]
  },
  "dialogs": [
    {
      "id": "d1",
      "level": "A1",
      "title": "Seznámení",
      "lines": [
        {
          "who": "Anna",
          "en": "Hallo! Ich heiße Anna. Und du?",
          "cs": "Ahoj! Jmenuji se Anna. A ty?",
          "ty": false,
          "pron": "HAlo ich HAJse ANa unt dú"
        },
        {
          "who": "Ty",
          "en": "Ich heiße Tom.",
          "cs": "Jmenuji se Tom.",
          "ty": true,
          "pron": "ich HAJse TOM",
          "wrong": [
            "Ja, ich bin müde.",
            "Nein, danke."
          ]
        },
        {
          "who": "Anna",
          "en": "Woher kommst du?",
          "cs": "Odkud jsi?",
          "ty": false,
          "pron": "voHÉR komst dú"
        },
        {
          "who": "Ty",
          "en": "Ich komme aus Tschechien.",
          "cs": "Pocházím z Česka.",
          "ty": true,
          "pron": "ich KOme aus ČEchien",
          "wrong": [
            "Ich heiße Anna.",
            "Das Wetter ist schön."
          ]
        },
        {
          "who": "Anna",
          "en": "Wo wohnst du?",
          "cs": "Kde bydlíš?",
          "ty": false,
          "pron": "VÓ vónst dú"
        },
        {
          "who": "Ty",
          "en": "Ich wohne in Prag.",
          "cs": "Bydlím v Praze.",
          "ty": true,
          "pron": "ich VÓne in PRÁK",
          "wrong": [
            "Ich habe einen Hund.",
            "Ich bin vierzig."
          ]
        },
        {
          "who": "Anna",
          "en": "Schön! Tschüss, bis bald!",
          "cs": "Hezky! Ahoj, brzy na viděnou!",
          "ty": false,
          "pron": "ŠÖN čüs bis balt"
        },
        {
          "who": "Ty",
          "en": "Tschüss, bis bald!",
          "cs": "Ahoj, brzy na viděnou!",
          "ty": true,
          "pron": "čüs bis balt",
          "wrong": [
            "Guten Morgen, Anna.",
            "Ich möchte einen Kaffee."
          ]
        }
      ]
    },
    {
      "id": "d2",
      "level": "A1",
      "title": "V kavárně",
      "lines": [
        {
          "who": "Číšník",
          "en": "Guten Tag. Was möchten Sie trinken?",
          "cs": "Dobrý den. Co si dáte k pití?",
          "ty": false,
          "pron": "gúten TÁK VAS MÖCHten zí TRINken"
        },
        {
          "who": "Ty",
          "en": "Ich möchte einen Kaffee, bitte.",
          "cs": "Dal bych si kávu, prosím.",
          "ty": true,
          "pron": "ich MÖCHte AJnen KAfé BITe",
          "wrong": [
            "Ich bin Tom.",
            "Ja, das Wetter ist schön."
          ]
        },
        {
          "who": "Číšník",
          "en": "Mit Milch?",
          "cs": "S mlékem?",
          "ty": false,
          "pron": "mit MILCH"
        },
        {
          "who": "Ty",
          "en": "Ja, mit Milch, bitte.",
          "cs": "Ano, s mlékem, prosím.",
          "ty": true,
          "pron": "já mit MILCH BITe",
          "wrong": [
            "Nein, ich wohne in Prag.",
            "Der Tisch ist braun."
          ]
        },
        {
          "who": "Číšník",
          "en": "Möchten Sie auch etwas essen?",
          "cs": "Dáte si i něco k jídlu?",
          "ty": false,
          "pron": "MÖCHten zí AUCH ETvas ESen"
        },
        {
          "who": "Ty",
          "en": "Ja, ein Brötchen mit Käse, bitte.",
          "cs": "Ano, housku se sýrem, prosím.",
          "ty": true,
          "pron": "já ajn BRÖTchen mit KÉze BITe",
          "wrong": [
            "Nein, ich bin vierzig.",
            "Ich komme aus Tschechien."
          ]
        },
        {
          "who": "Číšník",
          "en": "Gern. Das macht fünf Euro.",
          "cs": "Rád. To dělá pět eur.",
          "ty": false,
          "pron": "GERN das macht FÜNF OJro"
        },
        {
          "who": "Ty",
          "en": "Hier, bitte. Danke schön!",
          "cs": "Tady, prosím. Děkuji pěkně!",
          "ty": true,
          "pron": "HÍR BITe DANke ŠÖN",
          "wrong": [
            "Ich möchte ein Hotel.",
            "Ja, mit Milch."
          ]
        }
      ]
    },
    {
      "id": "d3",
      "level": "A1",
      "title": "V restauraci",
      "lines": [
        {
          "who": "Číšník",
          "en": "Guten Abend. Einen Tisch für zwei?",
          "cs": "Dobrý večer. Stůl pro dva?",
          "ty": false,
          "pron": "gúten Ábent AJnen TIŠ FÜR CVAJ"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte.",
          "cs": "Ano, prosím.",
          "ty": true,
          "pron": "já BITe",
          "wrong": [
            "Ich komme aus Tschechien.",
            "Der Zug ist schnell."
          ]
        },
        {
          "who": "Číšník",
          "en": "Hier ist die Speisekarte. Was möchten Sie trinken?",
          "cs": "Tady je jídelní lístek. Co si dáte k pití?",
          "ty": false,
          "pron": "HÍR ist die ŠPAJzekarte VAS MÖCHten zí TRINken"
        },
        {
          "who": "Ty",
          "en": "Ein Glas Wasser, bitte.",
          "cs": "Sklenici vody, prosím.",
          "ty": true,
          "pron": "ajn GLÁS VAser BITe",
          "wrong": [
            "Die Suppe ist heiß.",
            "Ja, ich wohne hier."
          ]
        },
        {
          "who": "Číšník",
          "en": "Und zum Essen?",
          "cs": "A k jídlu?",
          "ty": false,
          "pron": "unt cum ESen"
        },
        {
          "who": "Ty",
          "en": "Ich möchte die Suppe, bitte.",
          "cs": "Dal bych si polévku, prosím.",
          "ty": true,
          "pron": "ich MÖCHte die ZUpe BITe",
          "wrong": [
            "Ich wohne in Berlin.",
            "Ja, das ist mein Bruder."
          ]
        },
        {
          "who": "Číšník",
          "en": "Möchten Sie eine Nachspeise?",
          "cs": "Dáte si zákusek?",
          "ty": false,
          "pron": "MÖCHten zí AJne NÁCHšpajze"
        },
        {
          "who": "Ty",
          "en": "Nein, danke. Die Rechnung, bitte.",
          "cs": "Ne, děkuji. Účet, prosím.",
          "ty": true,
          "pron": "najn DANke die RECHnung BITe",
          "wrong": [
            "Ja, einen Tisch für zwei.",
            "Guten Abend."
          ]
        }
      ]
    },
    {
      "id": "d4",
      "level": "A1",
      "title": "V obchodě s potravinami",
      "lines": [
        {
          "who": "Prodavačka",
          "en": "Guten Tag. Kann ich Ihnen helfen?",
          "cs": "Dobrý den. Mohu vám pomoci?",
          "ty": false,
          "pron": "gúten TÁK kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ja, ich brauche Brot und Käse.",
          "cs": "Ano, potřebuji chléb a sýr.",
          "ty": true,
          "pron": "já ich BRAUche BRÓT unt KÉze",
          "wrong": [
            "Nein, ich wohne in Wien.",
            "Ja, es ist heiß."
          ]
        },
        {
          "who": "Prodavačka",
          "en": "Hier ist das Brot. Sonst noch etwas?",
          "cs": "Tady je chléb. Ještě něco?",
          "ty": false,
          "pron": "HÍR ist das BRÓT zonst NOCH ETvas"
        },
        {
          "who": "Ty",
          "en": "Ja, ein Kilo Äpfel, bitte.",
          "cs": "Ano, kilo jablek, prosím.",
          "ty": true,
          "pron": "já ajn KÍlo EPfel BITe",
          "wrong": [
            "Ich komme aus Wien.",
            "Ich heiße Anna."
          ]
        },
        {
          "who": "Prodavačka",
          "en": "Das macht vier Euro.",
          "cs": "To dělá čtyři eura.",
          "ty": false,
          "pron": "das macht FÍR OJro"
        },
        {
          "who": "Ty",
          "en": "Hier, bitte.",
          "cs": "Tady, prosím.",
          "ty": true,
          "pron": "HÍR BITe",
          "wrong": [
            "Guten Morgen.",
            "Ich brauche ein Taxi."
          ]
        },
        {
          "who": "Prodavačka",
          "en": "Möchten Sie eine Tüte?",
          "cs": "Chcete tašku?",
          "ty": false,
          "pron": "MÖCHten zí AJne TÜte"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Danke!",
          "cs": "Ano, prosím. Děkuji!",
          "ty": true,
          "pron": "já BITe DANke",
          "wrong": [
            "Das Wetter ist kalt.",
            "Ich habe zwei Brüder."
          ]
        }
      ]
    },
    {
      "id": "d5",
      "level": "A1",
      "title": "Na nádraží",
      "lines": [
        {
          "who": "Úřednice",
          "en": "Guten Morgen. Wohin möchten Sie fahren?",
          "cs": "Dobré ráno. Kam chcete jet?",
          "ty": false,
          "pron": "gúten MORgen voHIN MÖCHten zí FÁren"
        },
        {
          "who": "Ty",
          "en": "Ich möchte nach Berlin fahren.",
          "cs": "Chtěl bych jet do Berlína.",
          "ty": true,
          "pron": "ich MÖCHte NÁCH berLÍN FÁren",
          "wrong": [
            "Ich bin müde.",
            "Ich habe Hunger."
          ]
        },
        {
          "who": "Úřednice",
          "en": "Wann möchten Sie fahren?",
          "cs": "Kdy chcete jet?",
          "ty": false,
          "pron": "VAN MÖCHten zí FÁren"
        },
        {
          "who": "Ty",
          "en": "Morgen früh, bitte.",
          "cs": "Zítra brzy ráno, prosím.",
          "ty": true,
          "pron": "MORgen FRÜ BITe",
          "wrong": [
            "Nach Berlin.",
            "Ich bin müde."
          ]
        },
        {
          "who": "Úřednice",
          "en": "Hier ist Ihre Fahrkarte. Das macht dreißig Euro.",
          "cs": "Tady je vaše jízdenka. To dělá třicet eur.",
          "ty": false,
          "pron": "HÍR ist Íre FÁRkarte das macht DRAjsich OJro"
        },
        {
          "who": "Ty",
          "en": "Hier, bitte.",
          "cs": "Tady, prosím.",
          "ty": true,
          "pron": "HÍR BITe",
          "wrong": [
            "Ich wohne in Prag.",
            "Morgen früh."
          ]
        },
        {
          "who": "Úřednice",
          "en": "Der Zug fährt um acht Uhr von Gleis drei.",
          "cs": "Vlak jede v osm hodin z nástupiště tři.",
          "ty": false,
          "pron": "der CÚK FÉRT um ACHT ÚR fon GLAJS DRAJ"
        },
        {
          "who": "Ty",
          "en": "Danke! Auf Wiedersehen!",
          "cs": "Děkuji! Na shledanou!",
          "ty": true,
          "pron": "DANke auf VÍderzéen",
          "wrong": [
            "Ja, bitte.",
            "Ich möchte ein Brötchen."
          ]
        }
      ]
    },
    {
      "id": "d6",
      "level": "A1",
      "title": "V autobuse",
      "lines": [
        {
          "who": "Řidič",
          "en": "Guten Tag. Wohin fahren Sie?",
          "cs": "Dobrý den. Kam jedete?",
          "ty": false,
          "pron": "gúten TÁK voHIN FÁren zí"
        },
        {
          "who": "Ty",
          "en": "Zum Bahnhof, bitte.",
          "cs": "Na nádraží, prosím.",
          "ty": true,
          "pron": "cum BÁNhóf BITe",
          "wrong": [
            "Ich bin heute müde.",
            "Das ist ein Hund."
          ]
        },
        {
          "who": "Řidič",
          "en": "Eine Fahrkarte kostet drei Euro.",
          "cs": "Jízdenka stojí tři eura.",
          "ty": false,
          "pron": "AJne FÁRkarte KOstet DRAJ OJro"
        },
        {
          "who": "Ty",
          "en": "Hier sind fünf Euro.",
          "cs": "Tady je pět eur.",
          "ty": true,
          "pron": "HÍR zint FÜNF OJro",
          "wrong": [
            "Ich habe einen Bruder.",
            "Der Bus ist neu."
          ]
        },
        {
          "who": "Řidič",
          "en": "Danke. Hier ist Ihr Wechselgeld.",
          "cs": "Děkuji. Tady jsou vaše drobné.",
          "ty": false,
          "pron": "DANke HÍR ist ír VEKselgelt"
        },
        {
          "who": "Ty",
          "en": "Danke schön. Wie lange dauert die Fahrt?",
          "cs": "Děkuji pěkně. Jak dlouho trvá jízda?",
          "ty": true,
          "pron": "DANke ŠÖN VÍ LANge DAUert die FÁRT",
          "wrong": [
            "Ich möchte einen Tee.",
            "Ja, das Wetter ist schön."
          ]
        },
        {
          "who": "Řidič",
          "en": "Zehn Minuten. Die nächste Haltestelle ist der Bahnhof.",
          "cs": "Deset minut. Příští zastávka je nádraží.",
          "ty": false,
          "pron": "CÉN miNÚten die NÉCHste HALteštele ist der BÁNhóf"
        },
        {
          "who": "Ty",
          "en": "Super, danke!",
          "cs": "Skvělé, děkuji!",
          "ty": true,
          "pron": "ZÚper DANke",
          "wrong": [
            "Ich bin Anna.",
            "Der Zug ist kaputt."
          ]
        }
      ]
    },
    {
      "id": "d7",
      "level": "A1",
      "title": "V hotelu",
      "lines": [
        {
          "who": "Recepční",
          "en": "Guten Abend. Kann ich Ihnen helfen?",
          "cs": "Dobrý večer. Mohu vám pomoci?",
          "ty": false,
          "pron": "gúten Ábent kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ich habe eine Reservierung. Ich heiße Tom Schwarz.",
          "cs": "Mám rezervaci. Jmenuji se Tom Schwarz.",
          "ty": true,
          "pron": "ich HÁbe AJne rezerVÍrung ich HAJse TOM ŠVARC",
          "wrong": [
            "Ja, ich bin hungrig.",
            "Ich komme aus Prag."
          ]
        },
        {
          "who": "Recepční",
          "en": "Ja, ein Einzelzimmer für zwei Nächte.",
          "cs": "Ano, jednolůžkový pokoj na dvě noci.",
          "ty": false,
          "pron": "já ajn AJNcelcimer FÜR CVAJ NECHte"
        },
        {
          "who": "Ty",
          "en": "Genau. Ist das Frühstück im Preis?",
          "cs": "Přesně. Je snídaně v ceně?",
          "ty": true,
          "pron": "geNAU ist das FRÜštük im PRAJS",
          "wrong": [
            "Ich wohne in Wien.",
            "Der Zug ist schnell."
          ]
        },
        {
          "who": "Recepční",
          "en": "Ja, das Frühstück ist von sieben bis zehn Uhr.",
          "cs": "Ano, snídaně je od sedmi do deseti hodin.",
          "ty": false,
          "pron": "já das FRÜštük ist fon ZÍben bis CÉN ÚR"
        },
        {
          "who": "Ty",
          "en": "Gut. Wo ist der Aufzug?",
          "cs": "Dobře. Kde je výtah?",
          "ty": true,
          "pron": "GÚT VÓ ist der AUFcúk",
          "wrong": [
            "Das Zimmer ist schön.",
            "Ich bin vierzig Jahre alt."
          ]
        },
        {
          "who": "Recepční",
          "en": "Dort links. Hier ist Ihr Schlüssel.",
          "cs": "Tamhle vlevo. Tady je váš klíč.",
          "ty": false,
          "pron": "DORT LINKS HÍR ist ír ŠLÜsel"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank. Gute Nacht!",
          "cs": "Mnohokrát děkuji. Dobrou noc!",
          "ty": true,
          "pron": "FÍlen DANK gúte NACHT",
          "wrong": [
            "Guten Morgen!",
            "Ich möchte ein Taxi."
          ]
        }
      ]
    },
    {
      "id": "d8",
      "level": "A1",
      "title": "U lékaře",
      "lines": [
        {
          "who": "Lékařka",
          "en": "Guten Tag. Was fehlt Ihnen?",
          "cs": "Dobrý den. Co vám je?",
          "ty": false,
          "pron": "gúten TÁK VAS FÉLT ÍNen"
        },
        {
          "who": "Ty",
          "en": "Ich bin krank. Ich habe Fieber.",
          "cs": "Jsem nemocný. Mám horečku.",
          "ty": true,
          "pron": "ich bin KRANK ich HÁbe FÍber",
          "wrong": [
            "Ich habe einen Hund.",
            "Ich komme aus Prag."
          ]
        },
        {
          "who": "Lékařka",
          "en": "Haben Sie auch Husten?",
          "cs": "Máte také kašel?",
          "ty": false,
          "pron": "HÁben zí AUCH HÚsten"
        },
        {
          "who": "Ty",
          "en": "Ja, und Kopfschmerzen.",
          "cs": "Ano, a bolest hlavy.",
          "ty": true,
          "pron": "já unt KOPFšmercen",
          "wrong": [
            "Nein, ich bin Lehrer.",
            "Heute ist Montag."
          ]
        },
        {
          "who": "Lékařka",
          "en": "Seit wann sind Sie krank?",
          "cs": "Odkdy jste nemocný?",
          "ty": false,
          "pron": "zajt VAN zint zí KRANK"
        },
        {
          "who": "Ty",
          "en": "Seit gestern.",
          "cs": "Od včerejška.",
          "ty": true,
          "pron": "zajt GESTern",
          "wrong": [
            "In der Apotheke.",
            "Mit dem Zug."
          ]
        },
        {
          "who": "Lékařka",
          "en": "Sie haben eine Erkältung. Nehmen Sie dieses Medikament.",
          "cs": "Máte nachlazení. Berte tento lék.",
          "ty": false,
          "pron": "zí HÁben AJne erKELtung NÉmen zí DÍzes medikaMENT"
        },
        {
          "who": "Ty",
          "en": "Wie oft muss ich es nehmen?",
          "cs": "Jak často ho musím brát?",
          "ty": true,
          "pron": "VÍ OFT mus ich es NÉmen",
          "wrong": [
            "Ich habe Hunger.",
            "Das ist mein Bruder."
          ]
        }
      ]
    },
    {
      "id": "d9",
      "level": "A1",
      "title": "V lékárně",
      "lines": [
        {
          "who": "Lékárnice",
          "en": "Guten Tag. Was brauchen Sie?",
          "cs": "Dobrý den. Co potřebujete?",
          "ty": false,
          "pron": "gúten TÁK VAS BRAUchen zí"
        },
        {
          "who": "Ty",
          "en": "Ich brauche etwas gegen Husten.",
          "cs": "Potřebuji něco proti kašli.",
          "ty": true,
          "pron": "ich BRAUche ETvas GÉgen HÚsten",
          "wrong": [
            "Ich möchte eine Briefmarke.",
            "Ich habe eine Reservierung."
          ]
        },
        {
          "who": "Lékárnice",
          "en": "Hier ist ein Medikament. Nehmen Sie es dreimal am Tag.",
          "cs": "Tady je lék. Berte ho třikrát denně.",
          "ty": false,
          "pron": "HÍR ist ajn medikaMENT NÉmen zí es DRAJmál am TÁK"
        },
        {
          "who": "Ty",
          "en": "Wie viel kostet es?",
          "cs": "Kolik stojí?",
          "ty": true,
          "pron": "VÍ FÍL KOstet es",
          "wrong": [
            "Ich wohne in Berlin.",
            "Das Wetter ist kalt."
          ]
        },
        {
          "who": "Lékárnice",
          "en": "Es kostet acht Euro.",
          "cs": "Stojí osm eur.",
          "ty": false,
          "pron": "es KOstet ACHT OJro"
        },
        {
          "who": "Ty",
          "en": "Hier sind zehn Euro.",
          "cs": "Tady je deset eur.",
          "ty": true,
          "pron": "HÍR zint CÉN OJro",
          "wrong": [
            "Ja, ich komme morgen.",
            "Guten Abend."
          ]
        },
        {
          "who": "Lékárnice",
          "en": "Danke. Hier ist Ihr Wechselgeld. Gute Besserung!",
          "cs": "Děkuji. Tady jsou vaše drobné. Brzké uzdravení!",
          "ty": false,
          "pron": "DANke HÍR ist ír VEKselgelt gúte BEserung"
        },
        {
          "who": "Ty",
          "en": "Danke! Auf Wiedersehen!",
          "cs": "Děkuji! Na shledanou!",
          "ty": true,
          "pron": "DANke auf VÍderzéen",
          "wrong": [
            "Ja, bitte.",
            "Ich habe Kopfschmerzen."
          ]
        }
      ]
    },
    {
      "id": "d10",
      "level": "A1",
      "title": "Telefonát",
      "lines": [
        {
          "who": "Max",
          "en": "Hallo, hier ist Max. Wer ist da?",
          "cs": "Haló, tady Max. Kdo volá?",
          "ty": false,
          "pron": "HAlo HÍR ist maks VÉR ist dá"
        },
        {
          "who": "Ty",
          "en": "Hallo Max, hier ist Tom.",
          "cs": "Ahoj Maxi, tady Tom.",
          "ty": true,
          "pron": "HAlo maks HÍR ist TOM",
          "wrong": [
            "Ich wohne in Prag.",
            "Gute Nacht."
          ]
        },
        {
          "who": "Max",
          "en": "Hallo Tom! Wie geht es dir?",
          "cs": "Ahoj Tome! Jak se máš?",
          "ty": false,
          "pron": "HAlo TOM VÍ GÉT es dír"
        },
        {
          "who": "Ty",
          "en": "Gut, danke. Und dir?",
          "cs": "Dobře, děkuji. A tobě?",
          "ty": true,
          "pron": "GÚT DANke unt dír",
          "wrong": [
            "Ich komme aus Tschechien.",
            "Das Brot ist teuer."
          ]
        },
        {
          "who": "Max",
          "en": "Auch gut. Hast du morgen Zeit?",
          "cs": "Také dobře. Máš zítra čas?",
          "ty": false,
          "pron": "AUCH GÚT hast dú MORgen cajt"
        },
        {
          "who": "Ty",
          "en": "Ja, morgen habe ich Zeit.",
          "cs": "Ano, zítra mám čas.",
          "ty": true,
          "pron": "já MORgen HÁbe ich cajt",
          "wrong": [
            "Ich habe einen Hund.",
            "Das Wetter ist schön."
          ]
        },
        {
          "who": "Max",
          "en": "Super! Wir gehen ins Kino. Um acht Uhr?",
          "cs": "Skvělé! Půjdeme do kina. V osm hodin?",
          "ty": false,
          "pron": "ZÚper vír GÉen ins KÍno um ACHT ÚR"
        },
        {
          "who": "Ty",
          "en": "Ja, gern. Bis morgen!",
          "cs": "Ano, rád. Do zítřka!",
          "ty": true,
          "pron": "já GERN bis MORgen",
          "wrong": [
            "Ich esse Brot.",
            "Das Kino ist groß."
          ]
        }
      ]
    },
    {
      "id": "d11",
      "level": "A1",
      "title": "Na poště",
      "lines": [
        {
          "who": "Úředník",
          "en": "Guten Tag. Was möchten Sie?",
          "cs": "Dobrý den. Co si přejete?",
          "ty": false,
          "pron": "gúten TÁK VAS MÖCHten zí"
        },
        {
          "who": "Ty",
          "en": "Ich möchte dieses Paket nach Wien schicken.",
          "cs": "Chtěl bych poslat tento balík do Vídně.",
          "ty": true,
          "pron": "ich MÖCHte DÍzes paKÉT NÁCH vín ŠIken",
          "wrong": [
            "Ich möchte einen Kaffee.",
            "Ich bin müde."
          ]
        },
        {
          "who": "Úředník",
          "en": "Gut. Bitte legen Sie es auf die Waage.",
          "cs": "Dobře. Položte ho prosím na váhu.",
          "ty": false,
          "pron": "GÚT BITe LÉgen zí es auf die VÁge"
        },
        {
          "who": "Ty",
          "en": "Wie lange dauert das?",
          "cs": "Jak dlouho to trvá?",
          "ty": true,
          "pron": "VÍ LANge DAUert das",
          "wrong": [
            "Es ist schön.",
            "Ich wohne dort."
          ]
        },
        {
          "who": "Úředník",
          "en": "Zwei Tage. Das kostet sieben Euro.",
          "cs": "Dva dny. To stojí sedm eur.",
          "ty": false,
          "pron": "CVAJ TÁge das KOstet ZÍben OJro"
        },
        {
          "who": "Ty",
          "en": "Und ich brauche auch eine Briefmarke.",
          "cs": "A potřebuji také známku.",
          "ty": true,
          "pron": "unt ich BRAUche AUCH AJne BRÍFmarke",
          "wrong": [
            "Ich bin hungrig.",
            "Der Bus kommt."
          ]
        },
        {
          "who": "Úředník",
          "en": "Hier ist die Briefmarke. Das macht zusammen neun Euro.",
          "cs": "Tady je známka. Dohromady to dělá devět eur.",
          "ty": false,
          "pron": "HÍR ist die BRÍFmarke das macht cuZAmen NOJN OJro"
        },
        {
          "who": "Ty",
          "en": "Hier, bitte. Danke und auf Wiedersehen!",
          "cs": "Tady, prosím. Děkuji a na shledanou!",
          "ty": true,
          "pron": "HÍR BITe DANke unt auf VÍderzéen",
          "wrong": [
            "Das Paket ist schwer.",
            "Ich möchte ein Paket."
          ]
        }
      ]
    },
    {
      "id": "d12",
      "level": "A1",
      "title": "Cesta k nádraží",
      "lines": [
        {
          "who": "Chodec",
          "en": "Guten Tag. Kann ich Ihnen helfen?",
          "cs": "Dobrý den. Mohu vám pomoci?",
          "ty": false,
          "pron": "gúten TÁK kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ja, wo ist der Bahnhof, bitte?",
          "cs": "Ano, kde je nádraží, prosím?",
          "ty": true,
          "pron": "já VÓ ist der BÁNhóf BITe",
          "wrong": [
            "Ich bin Tom.",
            "Der Bahnhof ist groß."
          ]
        },
        {
          "who": "Chodec",
          "en": "Gehen Sie geradeaus und dann links.",
          "cs": "Jděte rovně a pak vlevo.",
          "ty": false,
          "pron": "GÉen zí gerádeAUS unt DAN LINKS"
        },
        {
          "who": "Ty",
          "en": "Ist es weit?",
          "cs": "Je to daleko?",
          "ty": true,
          "pron": "ist es VAJT",
          "wrong": [
            "Ich gehe nach Hause.",
            "Ich möchte ein Brötchen."
          ]
        },
        {
          "who": "Chodec",
          "en": "Nein, nur zehn Minuten zu Fuß.",
          "cs": "Ne, jen deset minut pěšky.",
          "ty": false,
          "pron": "najn NÚR CÉN miNÚten cú FÚS"
        },
        {
          "who": "Ty",
          "en": "Danke! Und wo ist die Bank?",
          "cs": "Děkuji! A kde je banka?",
          "ty": true,
          "pron": "DANke unt VÓ ist die BANK",
          "wrong": [
            "Ich möchte Brot.",
            "Gute Nacht."
          ]
        },
        {
          "who": "Chodec",
          "en": "Die Bank ist an der Ecke, rechts.",
          "cs": "Banka je na rohu, vpravo.",
          "ty": false,
          "pron": "die BANK ist an der EKe RECHTS"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank! Auf Wiedersehen!",
          "cs": "Mnohokrát děkuji! Na shledanou!",
          "ty": true,
          "pron": "FÍlen DANK auf VÍderzéen",
          "wrong": [
            "Ich bin müde.",
            "Nein, danke."
          ]
        }
      ]
    },
    {
      "id": "d13",
      "level": "A1",
      "title": "Na trhu",
      "lines": [
        {
          "who": "Prodavač",
          "en": "Guten Morgen! Frische Äpfel, frisches Gemüse!",
          "cs": "Dobré ráno! Čerstvá jablka, čerstvá zelenina!",
          "ty": false,
          "pron": "gúten MORgen FRIše EPfel FRIšes geMÜze"
        },
        {
          "who": "Ty",
          "en": "Guten Morgen! Wie viel kosten die Äpfel?",
          "cs": "Dobré ráno! Kolik stojí jablka?",
          "ty": true,
          "pron": "gúten MORgen VÍ FÍL KOsten die EPfel",
          "wrong": [
            "Ich komme aus Prag.",
            "Das ist ein Hund."
          ]
        },
        {
          "who": "Prodavač",
          "en": "Ein Kilo kostet zwei Euro.",
          "cs": "Kilo stojí dvě eura.",
          "ty": false,
          "pron": "ajn KÍlo KOstet CVAJ OJro"
        },
        {
          "who": "Ty",
          "en": "Ich nehme zwei Kilo, bitte.",
          "cs": "Vezmu si dvě kila, prosím.",
          "ty": true,
          "pron": "ich NÉme CVAJ KÍlo BITe",
          "wrong": [
            "Das Wetter ist kalt.",
            "Ich habe einen Bruder."
          ]
        },
        {
          "who": "Prodavač",
          "en": "Gern. Sonst noch etwas?",
          "cs": "Rád. Ještě něco?",
          "ty": false,
          "pron": "GERN zonst NOCH ETvas"
        },
        {
          "who": "Ty",
          "en": "Ja, ein Kilo Kartoffeln.",
          "cs": "Ano, kilo brambor.",
          "ty": true,
          "pron": "já ajn KÍlo karTOfeln",
          "wrong": [
            "Nein, ich wohne hier.",
            "Ich heiße Tom."
          ]
        },
        {
          "who": "Prodavač",
          "en": "Das macht sechs Euro.",
          "cs": "To dělá šest eur.",
          "ty": false,
          "pron": "das macht ZEKS OJro"
        },
        {
          "who": "Ty",
          "en": "Hier sind zehn Euro.",
          "cs": "Tady je deset eur.",
          "ty": true,
          "pron": "HÍR zint CÉN OJro",
          "wrong": [
            "Ich möchte ein Hotel.",
            "Auf Wiedersehen, Anna."
          ]
        }
      ]
    },
    {
      "id": "d14",
      "level": "A1",
      "title": "U pokladny",
      "lines": [
        {
          "who": "Pokladní",
          "en": "Guten Tag. Haben Sie eine Kundenkarte?",
          "cs": "Dobrý den. Máte zákaznickou kartu?",
          "ty": false,
          "pron": "gúten TÁK HÁben zí AJne KUNdenkarte"
        },
        {
          "who": "Ty",
          "en": "Nein, ich habe keine Kundenkarte.",
          "cs": "Ne, nemám zákaznickou kartu.",
          "ty": true,
          "pron": "najn ich HÁbe KAJne KUNdenkarte",
          "wrong": [
            "Ja, das ist mein Bruder.",
            "Es ist heiß."
          ]
        },
        {
          "who": "Pokladní",
          "en": "Das macht zwölf Euro fünfzig.",
          "cs": "To dělá dvanáct eur padesát.",
          "ty": false,
          "pron": "das macht CVÖLF OJro FÜNFcich"
        },
        {
          "who": "Ty",
          "en": "Kann ich mit Karte bezahlen?",
          "cs": "Mohu platit kartou?",
          "ty": true,
          "pron": "kan ich mit KARte beCÁlen",
          "wrong": [
            "Ich bin zwölf Jahre alt.",
            "Ich habe Hunger."
          ]
        },
        {
          "who": "Pokladní",
          "en": "Ja, natürlich. Brauchen Sie eine Tüte?",
          "cs": "Ano, samozřejmě. Potřebujete tašku?",
          "ty": false,
          "pron": "já naTÜRlich BRAUchen zí AJne TÜte"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Eine Tüte.",
          "cs": "Ano, prosím. Tašku.",
          "ty": true,
          "pron": "já BITe AJne TÜte",
          "wrong": [
            "Ich komme aus Wien.",
            "Der Supermarkt ist offen."
          ]
        },
        {
          "who": "Pokladní",
          "en": "Hier ist Ihr Kassenbon.",
          "cs": "Tady je vaše účtenka.",
          "ty": false,
          "pron": "HÍR ist ír KAsenbon"
        },
        {
          "who": "Ty",
          "en": "Danke! Schönen Tag noch!",
          "cs": "Děkuji! Hezký den!",
          "ty": true,
          "pron": "DANke ŠÖnen TÁK NOCH",
          "wrong": [
            "Gute Nacht!",
            "Ich möchte ein Brötchen."
          ]
        }
      ]
    },
    {
      "id": "d15",
      "level": "A1",
      "title": "Ve škole",
      "lines": [
        {
          "who": "Učitelka",
          "en": "Guten Morgen! Wie heißt du?",
          "cs": "Dobré ráno! Jak se jmenuješ?",
          "ty": false,
          "pron": "gúten MORgen VÍ hajst dú"
        },
        {
          "who": "Ty",
          "en": "Ich heiße Tom.",
          "cs": "Jmenuji se Tom.",
          "ty": true,
          "pron": "ich HAJse TOM",
          "wrong": [
            "Ich bin müde.",
            "Ich habe ein Buch."
          ]
        },
        {
          "who": "Učitelka",
          "en": "Woher kommst du, Tom?",
          "cs": "Odkud jsi, Tome?",
          "ty": false,
          "pron": "voHÉR komst dú TOM"
        },
        {
          "who": "Ty",
          "en": "Ich komme aus Tschechien.",
          "cs": "Pocházím z Česka.",
          "ty": true,
          "pron": "ich KOme aus ČEchien",
          "wrong": [
            "Ich heiße Tom.",
            "Ich lerne Deutsch."
          ]
        },
        {
          "who": "Učitelka",
          "en": "Sprichst du schon Deutsch?",
          "cs": "Mluvíš už německy?",
          "ty": false,
          "pron": "šprichst dú ŠÓN DOJČ"
        },
        {
          "who": "Ty",
          "en": "Ein bisschen. Ich lerne jeden Tag.",
          "cs": "Trochu. Učím se každý den.",
          "ty": true,
          "pron": "ajn BISchen ich LERne JÉden TÁK",
          "wrong": [
            "Ja, ich bin vierzig.",
            "Ich habe einen Hund."
          ]
        },
        {
          "who": "Učitelka",
          "en": "Sehr gut! Nimm bitte dein Heft.",
          "cs": "Velmi dobře! Vezmi si prosím sešit.",
          "ty": false,
          "pron": "ZÉR GÚT nim BITe dajn HEFT"
        },
        {
          "who": "Ty",
          "en": "Ich habe mein Heft vergessen. Haben Sie einen Stift?",
          "cs": "Zapomněl jsem sešit. Máte pero?",
          "ty": true,
          "pron": "ich HÁbe majn HEFT ferGEsen HÁben zí AJnen ŠTIFT",
          "wrong": [
            "Es ist heiß.",
            "Ja, ich komme morgen."
          ]
        }
      ]
    },
    {
      "id": "d16",
      "level": "A1",
      "title": "V práci",
      "lines": [
        {
          "who": "Kolegyně",
          "en": "Guten Morgen! Wie geht es dir?",
          "cs": "Dobré ráno! Jak se máš?",
          "ty": false,
          "pron": "gúten MORgen VÍ GÉT es dír"
        },
        {
          "who": "Ty",
          "en": "Gut, danke. Und dir?",
          "cs": "Dobře, děkuji. A tobě?",
          "ty": true,
          "pron": "GÚT DANke unt dír",
          "wrong": [
            "Ich heiße Tom.",
            "Ich wohne in Prag."
          ]
        },
        {
          "who": "Kolegyně",
          "en": "Auch gut. Hast du heute viel Arbeit?",
          "cs": "Také dobře. Máš dnes hodně práce?",
          "ty": false,
          "pron": "AUCH GÚT hast dú HOJte FÍL ARbajt"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe viel zu tun.",
          "cs": "Ano, mám hodně co dělat.",
          "ty": true,
          "pron": "já ich HÁbe FÍL cú tún",
          "wrong": [
            "Ja, das Wetter ist schön.",
            "Ich komme aus Tschechien."
          ]
        },
        {
          "who": "Kolegyně",
          "en": "Möchtest du einen Kaffee?",
          "cs": "Dáš si kávu?",
          "ty": false,
          "pron": "MÖCHtest dú AJnen KAfé"
        },
        {
          "who": "Ty",
          "en": "Ja, gern. Mit Milch, bitte.",
          "cs": "Ano, rád. S mlékem, prosím.",
          "ty": true,
          "pron": "já GERN mit MILCH BITe",
          "wrong": [
            "Nein, ich bin Lehrer.",
            "Ich habe zwei Brüder."
          ]
        },
        {
          "who": "Kolegyně",
          "en": "Gut. Um zwölf Uhr ist Mittagspause.",
          "cs": "Dobře. Ve dvanáct hodin je polední přestávka.",
          "ty": false,
          "pron": "GÚT um CVÖLF ÚR ist MItákspauze"
        },
        {
          "who": "Ty",
          "en": "Prima, bis später!",
          "cs": "Skvěle, zatím!",
          "ty": true,
          "pron": "PRÍma bis ŠPÉter",
          "wrong": [
            "Guten Morgen!",
            "Ich habe Fieber."
          ]
        }
      ]
    },
    {
      "id": "d17",
      "level": "A1",
      "title": "Počasí",
      "lines": [
        {
          "who": "Kamarád",
          "en": "Wie ist das Wetter heute?",
          "cs": "Jaké je dnes počasí?",
          "ty": false,
          "pron": "VÍ ist das VEter HOJte"
        },
        {
          "who": "Ty",
          "en": "Es regnet und es ist kalt.",
          "cs": "Prší a je zima.",
          "ty": true,
          "pron": "es RÉgnet unt es ist KALT",
          "wrong": [
            "Ich habe einen Bruder.",
            "Ich heiße Max."
          ]
        },
        {
          "who": "Kamarád",
          "en": "Schade. Hast du einen Mantel?",
          "cs": "Škoda. Máš kabát?",
          "ty": false,
          "pron": "ŠÁde hast dú AJnen MANtel"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe einen Mantel und einen Hut.",
          "cs": "Ano, mám kabát a klobouk.",
          "ty": true,
          "pron": "já ich HÁbe AJnen MANtel unt AJnen HÚT",
          "wrong": [
            "Nein, ich wohne in Wien.",
            "Das Wetter ist schön."
          ]
        },
        {
          "who": "Kamarád",
          "en": "Und morgen? Wie ist das Wetter morgen?",
          "cs": "A zítra? Jaké bude počasí zítra?",
          "ty": false,
          "pron": "unt MORgen VÍ ist das VEter MORgen"
        },
        {
          "who": "Ty",
          "en": "Morgen scheint die Sonne.",
          "cs": "Zítra svítí slunce.",
          "ty": true,
          "pron": "MORgen šajnt die ZOne",
          "wrong": [
            "Gestern war ich zu Hause.",
            "Ich habe Durst."
          ]
        },
        {
          "who": "Kamarád",
          "en": "Super! Dann gehen wir spazieren.",
          "cs": "Skvělé! Pak půjdeme na procházku.",
          "ty": false,
          "pron": "ZÚper DAN GÉen vír špaCÍren"
        },
        {
          "who": "Ty",
          "en": "Ja, gern. Bis morgen!",
          "cs": "Ano, rád. Do zítřka!",
          "ty": true,
          "pron": "já GERN bis MORgen",
          "wrong": [
            "Ich habe einen Bruder.",
            "Ich möchte ein Hotel."
          ]
        }
      ]
    },
    {
      "id": "d18",
      "level": "A1",
      "title": "Rodina",
      "lines": [
        {
          "who": "Kamarádka",
          "en": "Hast du Geschwister?",
          "cs": "Máš sourozence?",
          "ty": false,
          "pron": "hast dú geŠVIster"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe einen Bruder und eine Schwester.",
          "cs": "Ano, mám bratra a sestru.",
          "ty": true,
          "pron": "já ich HÁbe AJnen BRÚder unt AJne ŠVESter",
          "wrong": [
            "Ich wohne in Prag.",
            "Nein, danke."
          ]
        },
        {
          "who": "Kamarádka",
          "en": "Wie alt ist dein Bruder?",
          "cs": "Kolik je tvému bratrovi let?",
          "ty": false,
          "pron": "VÍ ALT ist dajn BRÚder"
        },
        {
          "who": "Ty",
          "en": "Er ist fünfzehn Jahre alt.",
          "cs": "Je mu patnáct let.",
          "ty": true,
          "pron": "ér ist FÜNFcén JÁre ALT",
          "wrong": [
            "Er wohnt in Berlin.",
            "Er ist Lehrer."
          ]
        },
        {
          "who": "Kamarádka",
          "en": "Und was macht deine Schwester?",
          "cs": "A co dělá tvá sestra?",
          "ty": false,
          "pron": "unt VAS macht DAJne ŠVESter"
        },
        {
          "who": "Ty",
          "en": "Sie ist Lehrerin.",
          "cs": "Je učitelka.",
          "ty": true,
          "pron": "zí ist LÉrerin",
          "wrong": [
            "Sie ist fünfzehn Jahre alt.",
            "Sie wohnt in Wien."
          ]
        },
        {
          "who": "Kamarádka",
          "en": "Und deine Eltern? Wo wohnen sie?",
          "cs": "A tvoji rodiče? Kde bydlí?",
          "ty": false,
          "pron": "unt DAJne ELtern VÓ VÓnen zí"
        },
        {
          "who": "Ty",
          "en": "Sie wohnen in Brünn.",
          "cs": "Bydlí v Brně.",
          "ty": true,
          "pron": "zí VÓnen in BRÜN",
          "wrong": [
            "Sie sind sehr nett.",
            "Ich habe einen Hund."
          ]
        }
      ]
    },
    {
      "id": "d19",
      "level": "A1",
      "title": "V obchodě s oblečením",
      "lines": [
        {
          "who": "Prodavačka",
          "en": "Guten Tag. Kann ich Ihnen helfen?",
          "cs": "Dobrý den. Mohu vám pomoci?",
          "ty": false,
          "pron": "gúten TÁK kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ja, ich suche eine blaue Jacke.",
          "cs": "Ano, hledám modrou bundu.",
          "ty": true,
          "pron": "já ich ZÚche AJne BLAue JAke",
          "wrong": [
            "Nein, ich bin müde.",
            "Ich möchte einen Kaffee."
          ]
        },
        {
          "who": "Prodavačka",
          "en": "Welche Größe haben Sie?",
          "cs": "Jakou velikost máte?",
          "ty": false,
          "pron": "VELche GRÖse HÁben zí"
        },
        {
          "who": "Ty",
          "en": "Größe M, bitte.",
          "cs": "Velikost M, prosím.",
          "ty": true,
          "pron": "GRÖse em BITe",
          "wrong": [
            "Ich wohne in Prag.",
            "Blau, bitte."
          ]
        },
        {
          "who": "Prodavačka",
          "en": "Hier ist eine Jacke. Wie gefällt sie Ihnen?",
          "cs": "Tady je bunda. Jak se vám líbí?",
          "ty": false,
          "pron": "HÍR ist AJne JAke VÍ geFELT zí ÍNen"
        },
        {
          "who": "Ty",
          "en": "Sie gefällt mir. Wie viel kostet sie?",
          "cs": "Líbí se mi. Kolik stojí?",
          "ty": true,
          "pron": "zí geFELT mír VÍ FÍL KOstet zí",
          "wrong": [
            "Ich habe Hunger.",
            "Sie kommt aus Wien."
          ]
        },
        {
          "who": "Prodavačka",
          "en": "Sie kostet sechzig Euro.",
          "cs": "Stojí šedesát eur.",
          "ty": false,
          "pron": "zí KOstet ZECHcich OJro"
        },
        {
          "who": "Ty",
          "en": "Gut, ich nehme sie.",
          "cs": "Dobře, vezmu si ji.",
          "ty": true,
          "pron": "GÚT ich NÉme zí",
          "wrong": [
            "Nein, danke, ich bin krank.",
            "Ich bin sechzig Jahre alt."
          ]
        }
      ]
    },
    {
      "id": "d20",
      "level": "A1",
      "title": "Plány na víkend",
      "lines": [
        {
          "who": "Kamarád",
          "en": "Was machst du am Wochenende?",
          "cs": "Co děláš o víkendu?",
          "ty": false,
          "pron": "VAS machst dú am VOchenende"
        },
        {
          "who": "Ty",
          "en": "Am Samstag gehe ich ins Kino.",
          "cs": "V sobotu jdu do kina.",
          "ty": true,
          "pron": "am ZAMStak GÉe ich ins KÍno",
          "wrong": [
            "Ich bin Tom.",
            "Ich esse Fleisch."
          ]
        },
        {
          "who": "Kamarád",
          "en": "Welcher Film läuft?",
          "cs": "Jaký film běží?",
          "ty": false,
          "pron": "VELcher FILM LOJFT"
        },
        {
          "who": "Ty",
          "en": "Ich weiß es nicht. Kommst du mit?",
          "cs": "Nevím. Půjdeš se mnou?",
          "ty": true,
          "pron": "ich VAJS es nicht komst dú mit",
          "wrong": [
            "Ich wohne in der Stadt.",
            "Ja, ich bin Lehrer."
          ]
        },
        {
          "who": "Kamarád",
          "en": "Gern! Um wie viel Uhr?",
          "cs": "Rád! V kolik hodin?",
          "ty": false,
          "pron": "GERN um VÍ FÍL ÚR"
        },
        {
          "who": "Ty",
          "en": "Um acht Uhr. Und am Sonntag?",
          "cs": "V osm hodin. A v neděli?",
          "ty": true,
          "pron": "um ACHT ÚR unt am ZONták",
          "wrong": [
            "Ich habe einen Bruder.",
            "Das Kino ist groß."
          ]
        },
        {
          "who": "Kamarád",
          "en": "Am Sonntag gehe ich wandern.",
          "cs": "V neděli jdu na túru.",
          "ty": false,
          "pron": "am ZONták GÉe ich VANdern"
        },
        {
          "who": "Ty",
          "en": "Das klingt gut. Viel Spaß!",
          "cs": "To zní dobře. Hezky si to užij!",
          "ty": true,
          "pron": "das klingt GÚT FÍL ŠPÁS",
          "wrong": [
            "Ich bin müde.",
            "Ich habe Hunger."
          ]
        }
      ]
    },
    {
      "id": "d21",
      "level": "A2",
      "title": "Wochenende erzählen",
      "lines": [
        {
          "who": "Lena",
          "en": "Hallo Tom! Wie war dein Wochenende?",
          "cs": "Ahoj Tome! Jaký byl tvůj víkend?",
          "ty": false,
          "pron": "HAlo TOM VÍ vár dajn VOchenende"
        },
        {
          "who": "Ty",
          "en": "Es war schön. Ich bin mit Freunden gewandert.",
          "cs": "Bylo hezky. Šel jsem s přáteli na túru.",
          "ty": true,
          "pron": "es vár ŠÖN ich bin mit FROJnden geVANdert",
          "wrong": [
            "Ich habe einen Hund.",
            "Das kostet zehn Euro."
          ]
        },
        {
          "who": "Lena",
          "en": "Wohin seid ihr gegangen?",
          "cs": "Kam jste šli?",
          "ty": false,
          "pron": "voHIN zajt ír geGAngen"
        },
        {
          "who": "Ty",
          "en": "Wir sind in die Berge gefahren.",
          "cs": "Jeli jsme do hor.",
          "ty": true,
          "pron": "vír zint in die BERge geFÁren",
          "wrong": [
            "Ich trinke gern Tee.",
            "Ich bin vierzig Jahre alt."
          ]
        },
        {
          "who": "Lena",
          "en": "Und wie war das Wetter?",
          "cs": "A jaké bylo počasí?",
          "ty": false,
          "pron": "unt VÍ vár das VEter"
        },
        {
          "who": "Ty",
          "en": "Am Samstag hat es geregnet, aber am Sonntag war es sonnig.",
          "cs": "V sobotu pršelo, ale v neděli bylo slunečno.",
          "ty": true,
          "pron": "am ZAMStak hat es geRÉgnet ÁBer am ZONták vár es ZOnich",
          "wrong": [
            "Ich möchte ein Zimmer.",
            "Der Zug fährt um acht."
          ]
        },
        {
          "who": "Lena",
          "en": "Das klingt gut. Hast du Fotos gemacht?",
          "cs": "To zní dobře. Fotil jsi?",
          "ty": false,
          "pron": "das klingt GÚT hast dú FÓtos geMACHT"
        },
        {
          "who": "Ty",
          "en": "Ja, ich zeige sie dir später.",
          "cs": "Ano, ukážu ti je později.",
          "ty": true,
          "pron": "já ich CAJge zí dír ŠPÉter",
          "wrong": [
            "Nein, ich wohne in Prag.",
            "Guten Appetit!"
          ]
        },
        {
          "who": "Lena",
          "en": "Wunderbar, ich freue mich darauf!",
          "cs": "Skvělé, těším se na to!",
          "ty": false,
          "pron": "VUNderbár ich FROJe mich daRAUF"
        },
        {
          "who": "Ty",
          "en": "Und was hast du am Wochenende gemacht?",
          "cs": "A co jsi dělala ty o víkendu?",
          "ty": true,
          "pron": "unt VAS hast dú am VOchenende geMACHT",
          "wrong": [
            "Ich habe Kopfschmerzen.",
            "Ein Kaffee, bitte."
          ]
        }
      ]
    },
    {
      "id": "d22",
      "level": "A2",
      "title": "Im Urlaub",
      "lines": [
        {
          "who": "Paul",
          "en": "Wo hast du letztes Jahr Urlaub gemacht?",
          "cs": "Kde jsi byl loni na dovolené?",
          "ty": false,
          "pron": "VÓ hast dú LECtes JÁR ÚRlaup geMACHT"
        },
        {
          "who": "Ty",
          "en": "Ich war in Italien, am Meer.",
          "cs": "Byl jsem v Itálii u moře.",
          "ty": true,
          "pron": "ich vár in iTÁlien am MÉR",
          "wrong": [
            "Ich bin Lehrer.",
            "Das Brot ist frisch."
          ]
        },
        {
          "who": "Paul",
          "en": "Wie lange bist du geblieben?",
          "cs": "Jak dlouho jsi zůstal?",
          "ty": false,
          "pron": "VÍ LANge bist dú geBLÍben"
        },
        {
          "who": "Ty",
          "en": "Zwei Wochen. Das Hotel war direkt am Strand.",
          "cs": "Dva týdny. Hotel byl přímo na pláži.",
          "ty": true,
          "pron": "CVAJ VOchen das hoTEL vár diREKT am ŠTRANT",
          "wrong": [
            "Ich habe einen Bruder.",
            "Es ist halb vier."
          ]
        },
        {
          "who": "Paul",
          "en": "Und das Essen? Hat es dir geschmeckt?",
          "cs": "A jídlo? Chutnalo ti?",
          "ty": false,
          "pron": "unt das ESen hat es dír geŠMEKT"
        },
        {
          "who": "Ty",
          "en": "Sehr gut! Ich habe jeden Tag Pizza gegessen.",
          "cs": "Velmi! Každý den jsem jedl pizzu.",
          "ty": true,
          "pron": "ZÉR GÚT ich HÁbe JÉden TÁK PICa geGEsen",
          "wrong": [
            "Ich muss morgen arbeiten.",
            "Wo ist der Bahnhof?"
          ]
        },
        {
          "who": "Paul",
          "en": "Hast du auch die Stadt besichtigt?",
          "cs": "Prohlédl sis také město?",
          "ty": false,
          "pron": "hast dú AUCH die ŠTAT beZICHtigt"
        },
        {
          "who": "Ty",
          "en": "Ja, wir haben einen Ausflug nach Rom gemacht.",
          "cs": "Ano, udělali jsme výlet do Říma.",
          "ty": true,
          "pron": "já vír HÁben AJnen AUSflúk NÁCH róm geMACHT",
          "wrong": [
            "Nein, danke, ich bin satt.",
            "Ich brauche eine Jacke."
          ]
        },
        {
          "who": "Paul",
          "en": "Fährst du dieses Jahr wieder dorthin?",
          "cs": "Pojedeš tam letos znovu?",
          "ty": false,
          "pron": "FÉRST dú DÍzes JÁR VÍder dortHIN"
        },
        {
          "who": "Ty",
          "en": "Vielleicht. Ich möchte auch Spanien sehen.",
          "cs": "Možná. Chtěl bych vidět i Španělsko.",
          "ty": true,
          "pron": "fiLAJCHT ich MÖCHte AUCH ŠPÁnien ZÉen",
          "wrong": [
            "Ich spiele Fußball.",
            "Das ist meine Mutter."
          ]
        }
      ]
    },
    {
      "id": "d23",
      "level": "A2",
      "title": "Wohnung suchen",
      "lines": [
        {
          "who": "Makler",
          "en": "Guten Tag! Sie suchen eine Wohnung?",
          "cs": "Dobrý den! Hledáte byt?",
          "ty": false,
          "pron": "gúten TÁK zí ZÚchen AJne VÓnung"
        },
        {
          "who": "Ty",
          "en": "Ja, ich suche eine Wohnung mit zwei Zimmern.",
          "cs": "Ano, hledám byt se dvěma pokoji.",
          "ty": true,
          "pron": "já ich ZÚche AJne VÓnung mit CVAJ CImern",
          "wrong": [
            "Nein, ich komme aus Polen.",
            "Ich möchte eine Suppe."
          ]
        },
        {
          "who": "Makler",
          "en": "Möchten Sie in der Stadt oder am Stadtrand wohnen?",
          "cs": "Chcete bydlet ve městě, nebo na okraji?",
          "ty": false,
          "pron": "MÖCHten zí in der ŠTAT Óder am ŠTATrant VÓnen"
        },
        {
          "who": "Ty",
          "en": "Lieber in der Stadt, nah an der U-Bahn.",
          "cs": "Raději ve městě, blízko metra.",
          "ty": true,
          "pron": "LÍber in der ŠTAT NÁ an der Ú-bán",
          "wrong": [
            "Ich habe Hunger.",
            "Heute ist Montag."
          ]
        },
        {
          "who": "Makler",
          "en": "Wie viel Miete können Sie bezahlen?",
          "cs": "Kolik nájmu můžete platit?",
          "ty": false,
          "pron": "VÍ FÍL MÍte KÖnen zí beCÁlen"
        },
        {
          "who": "Ty",
          "en": "Bis zu siebenhundert Euro im Monat.",
          "cs": "Až sedm set eur měsíčně.",
          "ty": true,
          "pron": "bis cú ZÍbenhundert OJro im MÓnat",
          "wrong": [
            "Ich spreche ein bisschen Deutsch.",
            "Ich gehe ins Kino."
          ]
        },
        {
          "who": "Makler",
          "en": "Ich habe eine schöne Wohnung mit Balkon.",
          "cs": "Mám pěkný byt s balkonem.",
          "ty": false,
          "pron": "ich HÁbe AJne ŠÖne VÓnung mit balKÓN"
        },
        {
          "who": "Ty",
          "en": "Das klingt gut. Kann ich sie heute sehen?",
          "cs": "To zní dobře. Mohu ho vidět dnes?",
          "ty": true,
          "pron": "das klingt GÚT kan ich zí HOJte ZÉen",
          "wrong": [
            "Ich bin müde.",
            "Das Wetter ist kalt."
          ]
        },
        {
          "who": "Makler",
          "en": "Ja, um fünfzehn Uhr. Passt das?",
          "cs": "Ano, v patnáct hodin. Vyhovuje to?",
          "ty": false,
          "pron": "já um FÜNFcén ÚR past das"
        },
        {
          "who": "Ty",
          "en": "Ja, das passt. Vielen Dank!",
          "cs": "Ano, vyhovuje. Mnohokrát děkuji!",
          "ty": true,
          "pron": "já das past FÍlen DANK",
          "wrong": [
            "Nein, ich habe keinen Hund.",
            "Ich möchte bezahlen."
          ]
        }
      ]
    },
    {
      "id": "d24",
      "level": "A2",
      "title": "Beim Friseur",
      "lines": [
        {
          "who": "Friseurin",
          "en": "Guten Tag! Haben Sie einen Termin?",
          "cs": "Dobrý den! Máte objednání?",
          "ty": false,
          "pron": "gúten TÁK HÁben zí AJnen terMÍN"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe einen Termin um zehn Uhr.",
          "cs": "Ano, mám objednání na desátou.",
          "ty": true,
          "pron": "já ich HÁbe AJnen terMÍN um CÉN ÚR",
          "wrong": [
            "Nein, ich bin Student.",
            "Ich esse gern Fisch."
          ]
        },
        {
          "who": "Friseurin",
          "en": "Bitte setzen Sie sich. Was möchten Sie?",
          "cs": "Posaďte se, prosím. Co si přejete?",
          "ty": false,
          "pron": "BITe ZEcen zí zich VAS MÖCHten zí"
        },
        {
          "who": "Ty",
          "en": "Die Haare sollen kürzer werden, aber nicht zu kurz.",
          "cs": "Vlasy mají být kratší, ale ne příliš.",
          "ty": true,
          "pron": "die HÁre ZOlen KÜRcer VÉRden ÁBer nicht cú kurc",
          "wrong": [
            "Ich habe eine Katze.",
            "Zwei Brötchen, bitte."
          ]
        },
        {
          "who": "Friseurin",
          "en": "Soll ich sie auch waschen?",
          "cs": "Mám je také umýt?",
          "ty": false,
          "pron": "zol ich zí AUCH VAšen"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Und schneiden Sie die Seiten etwas kürzer.",
          "cs": "Ano, prosím. A zkraťte boky trochu víc.",
          "ty": true,
          "pron": "já BITe unt ŠNAJden zí die ZAJten ETvas KÜRcer",
          "wrong": [
            "Nein, es ist schon spät.",
            "Ich wohne in Wien."
          ]
        },
        {
          "who": "Friseurin",
          "en": "Gefällt Ihnen das so?",
          "cs": "Líbí se vám to tak?",
          "ty": false,
          "pron": "geFELT ÍNen das zó"
        },
        {
          "who": "Ty",
          "en": "Ja, das sieht sehr gut aus. Danke!",
          "cs": "Ano, vypadá to moc dobře. Děkuji!",
          "ty": true,
          "pron": "já das zít ZÉR GÚT aus DANke",
          "wrong": [
            "Ich habe Durst.",
            "Es gibt viele Autos."
          ]
        },
        {
          "who": "Friseurin",
          "en": "Das macht dreißig Euro.",
          "cs": "To dělá třicet eur.",
          "ty": false,
          "pron": "das macht DRAjsich OJro"
        },
        {
          "who": "Ty",
          "en": "Hier, bitte. Stimmt so.",
          "cs": "Tady, prosím. Zbytek nechte.",
          "ty": true,
          "pron": "HÍR BITe štimt zó",
          "wrong": [
            "Ich komme aus Berlin.",
            "Guten Morgen!"
          ]
        }
      ]
    },
    {
      "id": "d25",
      "level": "A2",
      "title": "Im Fundbüro",
      "lines": [
        {
          "who": "Beamter",
          "en": "Guten Tag! Kann ich Ihnen helfen?",
          "cs": "Dobrý den! Mohu vám pomoci?",
          "ty": false,
          "pron": "gúten TÁK kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe meine Tasche im Zug vergessen.",
          "cs": "Ano, zapomněl jsem tašku ve vlaku.",
          "ty": true,
          "pron": "já ich HÁbe MAJne TAše im CÚK ferGEsen",
          "wrong": [
            "Ich möchte einen Tee.",
            "Heute scheint die Sonne."
          ]
        },
        {
          "who": "Beamter",
          "en": "Wann war das genau?",
          "cs": "Kdy to bylo přesně?",
          "ty": false,
          "pron": "VAN vár das geNAU"
        },
        {
          "who": "Ty",
          "en": "Gestern Abend gegen acht Uhr.",
          "cs": "Včera večer kolem osmé hodiny.",
          "ty": true,
          "pron": "GESTern Ábent GÉgen ACHT ÚR",
          "wrong": [
            "Ich habe zwei Kinder.",
            "Das Zimmer ist klein."
          ]
        },
        {
          "who": "Beamter",
          "en": "Wie sieht die Tasche aus?",
          "cs": "Jak taška vypadá?",
          "ty": false,
          "pron": "VÍ zít die TAše aus"
        },
        {
          "who": "Ty",
          "en": "Sie ist schwarz und aus Leder.",
          "cs": "Je černá a z kůže.",
          "ty": true,
          "pron": "zí ist ŠVARC unt aus LÉder",
          "wrong": [
            "Ich spiele gern Gitarre.",
            "Der Bus kommt gleich."
          ]
        },
        {
          "who": "Beamter",
          "en": "Was war in der Tasche?",
          "cs": "Co v ní bylo?",
          "ty": false,
          "pron": "VAS vár in der TAše"
        },
        {
          "who": "Ty",
          "en": "Mein Handy, ein Buch und meine Brille.",
          "cs": "Můj mobil, kniha a moje brýle.",
          "ty": true,
          "pron": "majn HENdi ajn BÚCH unt MAJne BRIle",
          "wrong": [
            "Ich bin zwanzig Jahre alt.",
            "Gute Nacht!"
          ]
        },
        {
          "who": "Beamter",
          "en": "Einen Moment, ich schaue nach. Ja, wir haben sie!",
          "cs": "Okamžik, podívám se. Ano, máme ji!",
          "ty": false,
          "pron": "AJnen moMENT ich ŠAUe NÁCH já vír HÁben zí"
        },
        {
          "who": "Ty",
          "en": "Das ist ja super! Vielen Dank für Ihre Hilfe.",
          "cs": "To je skvělé! Mnohokrát děkuji za pomoc.",
          "ty": true,
          "pron": "das ist já ZÚper FÍlen DANK FÜR Íre HILfe",
          "wrong": [
            "Nein, ich trinke keinen Kaffee.",
            "Das ist zu teuer."
          ]
        }
      ]
    },
    {
      "id": "d26",
      "level": "A2",
      "title": "Arzttermin vereinbaren",
      "lines": [
        {
          "who": "Praxis",
          "en": "Praxis Doktor Weber, guten Tag.",
          "cs": "Ordinace doktora Webera, dobrý den.",
          "ty": false,
          "pron": "PRAKsis DOKtór VÉber gúten TÁK"
        },
        {
          "who": "Ty",
          "en": "Guten Tag, ich möchte gern einen Termin vereinbaren.",
          "cs": "Dobrý den, rád bych se objednal.",
          "ty": true,
          "pron": "gúten TÁK ich MÖCHte GERN AJnen terMÍN ferAJNbáren",
          "wrong": [
            "Ich kaufe ein Brot.",
            "Ich bin im Park."
          ]
        },
        {
          "who": "Praxis",
          "en": "Worum geht es denn?",
          "cs": "O co se jedná?",
          "ty": false,
          "pron": "voRUM GÉT es DEN"
        },
        {
          "who": "Ty",
          "en": "Ich habe seit drei Tagen Husten und Fieber.",
          "cs": "Mám tři dny kašel a horečku.",
          "ty": true,
          "pron": "ich HÁbe zajt DRAJ TÁgen HÚsten unt FÍber",
          "wrong": [
            "Ich fahre morgen nach Berlin.",
            "Das Essen schmeckt gut."
          ]
        },
        {
          "who": "Praxis",
          "en": "Das ist nicht gut. Können Sie heute Nachmittag kommen?",
          "cs": "To není dobré. Můžete přijít dnes odpoledne?",
          "ty": false,
          "pron": "das ist nicht GÚT KÖnen zí HOJte NÁCHmitak KOmen"
        },
        {
          "who": "Ty",
          "en": "Ja, das geht. Wann genau?",
          "cs": "Ano, to jde. V kolik přesně?",
          "ty": true,
          "pron": "já das GÉT VAN geNAU",
          "wrong": [
            "Ich habe keine Zeit für Kaffee.",
            "Ich wohne in Brünn."
          ]
        },
        {
          "who": "Praxis",
          "en": "Um sechzehn Uhr dreißig. Bringen Sie bitte Ihre Versicherungskarte mit.",
          "cs": "V šestnáct třicet. Přineste, prosím, kartu pojištěnce.",
          "ty": false,
          "pron": "um ZECHcén ÚR DRAjsich BRINgen zí BITe Íre ferZIcherungskarte mit"
        },
        {
          "who": "Ty",
          "en": "Gut, mache ich. Muss ich etwas Besonderes beachten?",
          "cs": "Dobře, udělám. Musím něco zvláštního dodržet?",
          "ty": true,
          "pron": "GÚT MAche ich mus ich ETvas beZONderes beACHten",
          "wrong": [
            "Ja, ich mag Schokolade.",
            "Es ist heute sehr heiß."
          ]
        },
        {
          "who": "Praxis",
          "en": "Nein. Bleiben Sie am besten zu Hause und trinken Sie viel.",
          "cs": "Ne. Zůstaňte nejlépe doma a hodně pijte.",
          "ty": false,
          "pron": "najn BLAJben zí am BEsten cú HAUze unt TRINken zí FÍL"
        },
        {
          "who": "Ty",
          "en": "Danke schön, bis später!",
          "cs": "Děkuji pěkně, na viděnou později!",
          "ty": true,
          "pron": "DANke ŠÖN bis ŠPÉter",
          "wrong": [
            "Ich habe Hunger.",
            "Guten Appetit!"
          ]
        }
      ]
    },
    {
      "id": "d27",
      "level": "A2",
      "title": "Im Supermarkt",
      "lines": [
        {
          "who": "Kassiererin",
          "en": "Guten Tag! Haben Sie eine Kundenkarte?",
          "cs": "Dobrý den! Máte zákaznickou kartu?",
          "ty": false,
          "pron": "gúten TÁK HÁben zí AJne KUNdenkarte"
        },
        {
          "who": "Ty",
          "en": "Nein, leider nicht.",
          "cs": "Ne, bohužel ne.",
          "ty": true,
          "pron": "najn LAJder nicht",
          "wrong": [
            "Ja, ich möchte ein Eis.",
            "Ich schlafe schon."
          ]
        },
        {
          "who": "Kassiererin",
          "en": "Brauchen Sie eine Tüte?",
          "cs": "Potřebujete tašku?",
          "ty": false,
          "pron": "BRAUchen zí AJne TÜte"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Eine große Tüte.",
          "cs": "Ano, prosím. Velkou tašku.",
          "ty": true,
          "pron": "já BITe AJne GRÓse TÜte",
          "wrong": [
            "Nein, ich bin kein Arzt.",
            "Das Hotel ist neu."
          ]
        },
        {
          "who": "Kassiererin",
          "en": "Das macht vierundzwanzig Euro fünfzig.",
          "cs": "To dělá dvacet čtyři eur padesát.",
          "ty": false,
          "pron": "das macht FÍRuntCVANcich OJro FÜNFcich"
        },
        {
          "who": "Ty",
          "en": "Kann ich mit Karte bezahlen?",
          "cs": "Mohu platit kartou?",
          "ty": true,
          "pron": "kan ich mit KARte beCÁlen",
          "wrong": [
            "Ich komme aus Prag.",
            "Das ist mein Bruder."
          ]
        },
        {
          "who": "Kassiererin",
          "en": "Natürlich. Bitte stecken Sie die Karte hier ein.",
          "cs": "Samozřejmě. Zasuňte kartu sem, prosím.",
          "ty": false,
          "pron": "naTÜRlich BITe ŠTEken zí die KARte HÍR ajn"
        },
        {
          "who": "Ty",
          "en": "Es funktioniert nicht. Kann ich bar zahlen?",
          "cs": "Nefunguje to. Mohu platit v hotovosti?",
          "ty": true,
          "pron": "es funkcioNÍRT nicht kan ich bár CÁlen",
          "wrong": [
            "Ich liebe Musik.",
            "Ich habe zwei Katzen."
          ]
        },
        {
          "who": "Kassiererin",
          "en": "Ja, das geht. Hier ist Ihr Kassenzettel.",
          "cs": "Ano, to jde. Tady je vaše účtenka.",
          "ty": false,
          "pron": "já das GÉT HÍR ist ír KAsencetl"
        },
        {
          "who": "Ty",
          "en": "Danke, schönen Tag noch!",
          "cs": "Děkuji, hezký den!",
          "ty": true,
          "pron": "DANke ŠÖnen TÁK NOCH",
          "wrong": [
            "Gute Besserung!",
            "Ich bin müde."
          ]
        }
      ]
    },
    {
      "id": "d28",
      "level": "A2",
      "title": "Geburtstagsfeier",
      "lines": [
        {
          "who": "Sara",
          "en": "Hallo! Schön, dass du gekommen bist!",
          "cs": "Ahoj! Je hezké, že jsi přišel!",
          "ty": false,
          "pron": "HAlo ŠÖN DAS dú geKOmen bist"
        },
        {
          "who": "Ty",
          "en": "Alles Gute zum Geburtstag! Das ist für dich.",
          "cs": "Všechno nejlepší k narozeninám! Tohle je pro tebe.",
          "ty": true,
          "pron": "Ales gúte cum geBURTstak das ist FÜR dich",
          "wrong": [
            "Gute Reise!",
            "Ich brauche einen Arzt."
          ]
        },
        {
          "who": "Sara",
          "en": "Oh, vielen Dank! Das ist aber lieb von dir.",
          "cs": "Ach, děkuji! To je od tebe milé.",
          "ty": false,
          "pron": "ó FÍlen DANK das ist ÁBer líp fon dír"
        },
        {
          "who": "Ty",
          "en": "Wie alt wirst du denn?",
          "cs": "Kolik ti vlastně bude?",
          "ty": true,
          "pron": "VÍ ALT virst dú DEN",
          "wrong": [
            "Wo ist die Toilette?",
            "Ich habe keine Zeit."
          ]
        },
        {
          "who": "Sara",
          "en": "Ich werde dreißig. Möchtest du ein Stück Kuchen?",
          "cs": "Bude mi třicet. Dáš si kousek dortu?",
          "ty": false,
          "pron": "ich VERde DRAjsich MÖCHtest dú ajn ŠTÜK KÚchen"
        },
        {
          "who": "Ty",
          "en": "Gern! Hast du den Kuchen selbst gebacken?",
          "cs": "Rád! Upekla jsi ten dort sama?",
          "ty": true,
          "pron": "GERN hast dú dén KÚchen zelpst geBAken",
          "wrong": [
            "Nein, ich fahre mit dem Bus.",
            "Heute regnet es."
          ]
        },
        {
          "who": "Sara",
          "en": "Ja, nach dem Rezept meiner Oma.",
          "cs": "Ano, podle receptu mé babičky.",
          "ty": false,
          "pron": "já NÁCH dém reCEPT MAJner ÓMa"
        },
        {
          "who": "Ty",
          "en": "Er schmeckt wirklich fantastisch!",
          "cs": "Chutná opravdu fantasticky!",
          "ty": true,
          "pron": "ér šmekt VIRKlich fanTAstiš",
          "wrong": [
            "Ich bin Verkäufer.",
            "Der Zug ist weg."
          ]
        },
        {
          "who": "Sara",
          "en": "Das freut mich. Komm, ich stelle dir meine Freunde vor.",
          "cs": "To mě těší. Pojď, představím ti své přátele.",
          "ty": false,
          "pron": "das FROJT mich kom ich ŠTEle dír MAJne FROJnde fór"
        },
        {
          "who": "Ty",
          "en": "Gern. Ich bin gespannt, sie kennenzulernen.",
          "cs": "Rád. Jsem zvědavý, až je poznám.",
          "ty": true,
          "pron": "GERN ich bin geŠPANT zí KEnencuLERnen",
          "wrong": [
            "Ich esse kein Fleisch.",
            "Ich suche eine Wohnung."
          ]
        }
      ]
    },
    {
      "id": "d29",
      "level": "A2",
      "title": "Den Weg in der Stadt fragen",
      "lines": [
        {
          "who": "Passantin",
          "en": "Kann ich Ihnen helfen? Sie sehen verloren aus.",
          "cs": "Mohu vám pomoci? Vypadáte ztraceně.",
          "ty": false,
          "pron": "kan ich ÍNen HElfen zí ZÉen ferLÓren aus"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Ich suche das Rathaus.",
          "cs": "Ano, prosím. Hledám radnici.",
          "ty": true,
          "pron": "já BITe ich ZÚche das RÁThaus",
          "wrong": [
            "Ich bin sehr müde.",
            "Ich kaufe ein Hemd."
          ]
        },
        {
          "who": "Passantin",
          "en": "Das ist nicht weit. Gehen Sie hier geradeaus.",
          "cs": "To není daleko. Jděte odsud rovně.",
          "ty": false,
          "pron": "das ist nicht VAJT GÉen zí HÍR gerádeAUS"
        },
        {
          "who": "Ty",
          "en": "Und dann? Muss ich irgendwo abbiegen?",
          "cs": "A potom? Musím někde odbočit?",
          "ty": true,
          "pron": "unt DAN mus ich IRgendvó APbígen",
          "wrong": [
            "Ich esse gern Pizza.",
            "Das Kind schläft."
          ]
        },
        {
          "who": "Passantin",
          "en": "Ja, an der zweiten Kreuzung links.",
          "cs": "Ano, na druhé křižovatce doleva.",
          "ty": false,
          "pron": "já an der CVAJten KROJcung LINKS"
        },
        {
          "who": "Ty",
          "en": "An der zweiten Kreuzung links. Und wie lange dauert das?",
          "cs": "Na druhé křižovatce doleva. A jak dlouho to trvá?",
          "ty": true,
          "pron": "an der CVAJten KROJcung LINKS unt VÍ LANge DAUert das",
          "wrong": [
            "Ich heiße Peter.",
            "Ich habe Fieber."
          ]
        },
        {
          "who": "Passantin",
          "en": "Zu Fuß ungefähr zehn Minuten.",
          "cs": "Pěšky asi deset minut.",
          "ty": false,
          "pron": "cú FÚS UNgefér CÉN miNÚten"
        },
        {
          "who": "Ty",
          "en": "Gibt es auch eine Bushaltestelle in der Nähe?",
          "cs": "Je tam i zastávka autobusu poblíž?",
          "ty": true,
          "pron": "gípt es AUCH AJne BUShaltešTELe in der NÉe",
          "wrong": [
            "Ich mag keine Äpfel.",
            "Es ist halb zwölf."
          ]
        },
        {
          "who": "Passantin",
          "en": "Ja, direkt vor dem Rathaus fährt die Linie fünf.",
          "cs": "Ano, přímo před radnicí jezdí linka pět.",
          "ty": false,
          "pron": "já diREKT fór dém RÁThaus FÉRT die LÍnie FÜNF"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank für Ihre Hilfe!",
          "cs": "Mnohokrát děkuji za vaši pomoc!",
          "ty": true,
          "pron": "FÍlen DANK FÜR Íre HILfe",
          "wrong": [
            "Ich habe Kopfschmerzen.",
            "Gute Nacht!"
          ]
        }
      ]
    },
    {
      "id": "d30",
      "level": "A2",
      "title": "Im Reisebüro",
      "lines": [
        {
          "who": "Berater",
          "en": "Guten Tag! Wie kann ich Ihnen helfen?",
          "cs": "Dobrý den! Jak vám mohu pomoci?",
          "ty": false,
          "pron": "gúten TÁK VÍ kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ich möchte im Sommer eine Reise nach Griechenland buchen.",
          "cs": "Chtěl bych v létě zarezervovat cestu do Řecka.",
          "ty": true,
          "pron": "ich MÖCHte im ZOmer AJne RAJze NÁCH GRÍchenlant BÚchen",
          "wrong": [
            "Ich suche eine Apotheke.",
            "Das ist mein Vater."
          ]
        },
        {
          "who": "Berater",
          "en": "Für wie viele Personen?",
          "cs": "Pro kolik osob?",
          "ty": false,
          "pron": "FÜR VÍ FÍle perZÓnen"
        },
        {
          "who": "Ty",
          "en": "Für zwei Personen, meine Frau und mich.",
          "cs": "Pro dvě osoby, mou ženu a mě.",
          "ty": true,
          "pron": "FÜR CVAJ perZÓnen MAJne FRAU unt mich",
          "wrong": [
            "Ich bin neununddreißig Jahre alt.",
            "Der Kaffee ist heiß."
          ]
        },
        {
          "who": "Berater",
          "en": "Wann möchten Sie fliegen und wie lange bleiben?",
          "cs": "Kdy chcete letět a jak dlouho zůstat?",
          "ty": false,
          "pron": "VAN MÖCHten zí FLÍgen unt VÍ LANge BLAJben"
        },
        {
          "who": "Ty",
          "en": "Anfang August für eine Woche.",
          "cs": "Začátkem srpna na týden.",
          "ty": true,
          "pron": "ANfang auGUST FÜR AJne VOche",
          "wrong": [
            "Ich lese ein Buch.",
            "Wir haben keine Milch."
          ]
        },
        {
          "who": "Berater",
          "en": "Ich habe ein Hotel mit Frühstück am Strand. Es kostet neunhundert Euro pro Person.",
          "cs": "Mám hotel se snídaní na pláži. Stojí devět set eur na osobu.",
          "ty": false,
          "pron": "ich HÁbe ajn hoTEL mit FRÜštük am ŠTRANT es KOstet NOJNhundert OJro pró perZÓN"
        },
        {
          "who": "Ty",
          "en": "Das ist ein bisschen teuer. Gibt es etwas Günstigeres?",
          "cs": "To je trochu drahé. Je něco levnějšího?",
          "ty": true,
          "pron": "das ist ajn BISchen TOJer gípt es ETvas GÜNstigeres",
          "wrong": [
            "Ich möchte noch einen Tee.",
            "Er spielt Fußball."
          ]
        },
        {
          "who": "Berater",
          "en": "Ja, ohne Frühstück kostet es sechshundert Euro.",
          "cs": "Ano, bez snídaně to stojí šest set eur.",
          "ty": false,
          "pron": "já ÓNe FRÜštük KOstet es ZEKShundert OJro"
        },
        {
          "who": "Ty",
          "en": "Das nehme ich. Wie kann ich bezahlen?",
          "cs": "To si vezmu. Jak mohu zaplatit?",
          "ty": true,
          "pron": "das NÉme ich VÍ kan ich beCÁlen",
          "wrong": [
            "Ich fahre mit dem Fahrrad.",
            "Gute Besserung!"
          ]
        }
      ]
    },
    {
      "id": "d31",
      "level": "A2",
      "title": "Fahrkarte am Automaten",
      "lines": [
        {
          "who": "Mann",
          "en": "Entschuldigung, wissen Sie, wie der Automat funktioniert?",
          "cs": "Promiňte, víte, jak funguje automat?",
          "ty": false,
          "pron": "entŠULdigung VISen zí VÍ der autoMÁT funkcioNÍRT"
        },
        {
          "who": "Ty",
          "en": "Ja, zuerst wählen Sie Ihr Ziel aus.",
          "cs": "Ano, nejdřív zvolíte cíl.",
          "ty": true,
          "pron": "já cuÉRST VÉlen zí ír CÍL aus",
          "wrong": [
            "Ich habe Hunger.",
            "Mein Name ist Anna."
          ]
        },
        {
          "who": "Mann",
          "en": "Ich möchte nach München. Und jetzt?",
          "cs": "Chci do Mnichova. A teď?",
          "ty": false,
          "pron": "ich MÖCHte NÁCH MÜNchen unt JECT"
        },
        {
          "who": "Ty",
          "en": "Dann drücken Sie auf „Einzelfahrt“.",
          "cs": "Pak stisknete „jednotlivá jízdenka“.",
          "ty": true,
          "pron": "DAN DRÜken zí auf AJNcelfárt",
          "wrong": [
            "Das Wetter ist schön.",
            "Ich komme aus Wien."
          ]
        },
        {
          "who": "Mann",
          "en": "Muss ich auch den Zug auswählen?",
          "cs": "Musím také zvolit vlak?",
          "ty": false,
          "pron": "mus ich AUCH dén CÚK AUSvélen"
        },
        {
          "who": "Ty",
          "en": "Nein, die Fahrkarte gilt für den ganzen Tag.",
          "cs": "Ne, jízdenka platí na celý den.",
          "ty": true,
          "pron": "najn die FÁRkarte gilt FÜR dén GANcen TÁK",
          "wrong": [
            "Ja, ich mag Äpfel.",
            "Es ist sehr kalt."
          ]
        },
        {
          "who": "Mann",
          "en": "Wie kann ich bezahlen?",
          "cs": "Jak mohu zaplatit?",
          "ty": false,
          "pron": "VÍ kan ich beCÁlen"
        },
        {
          "who": "Ty",
          "en": "Mit Karte oder mit Münzen, wie Sie möchten.",
          "cs": "Kartou nebo mincemi, jak chcete.",
          "ty": true,
          "pron": "mit KARte Óder mit MÜNcen VÍ zí MÖCHten",
          "wrong": [
            "Ich schlafe schon.",
            "Hier ist es laut."
          ]
        },
        {
          "who": "Mann",
          "en": "Es hat geklappt! Vielen Dank!",
          "cs": "Povedlo se! Mnohokrát děkuji!",
          "ty": false,
          "pron": "es hat geKLAPT FÍlen DANK"
        },
        {
          "who": "Ty",
          "en": "Gern geschehen. Gute Reise!",
          "cs": "Rádo se stalo. Šťastnou cestu!",
          "ty": true,
          "pron": "GERN geŠÉen gúte RAJze",
          "wrong": [
            "Gute Besserung!",
            "Das stimmt nicht."
          ]
        }
      ]
    },
    {
      "id": "d32",
      "level": "A2",
      "title": "Im Restaurant etwas reklamieren",
      "lines": [
        {
          "who": "Kellner",
          "en": "Guten Abend! Schmeckt Ihnen das Essen?",
          "cs": "Dobrý večer! Chutná vám jídlo?",
          "ty": false,
          "pron": "gúten Ábent šmekt ÍNen das ESen"
        },
        {
          "who": "Ty",
          "en": "Entschuldigung, die Suppe ist leider kalt.",
          "cs": "Promiňte, polévka je bohužel studená.",
          "ty": true,
          "pron": "entŠULdigung die ZUpe ist LAJder KALT",
          "wrong": [
            "Ja, ich möchte tanzen.",
            "Ich bin Ingenieur."
          ]
        },
        {
          "who": "Kellner",
          "en": "Oh, das tut mir leid. Ich bringe Ihnen sofort eine neue.",
          "cs": "Ach, to mě mrzí. Hned vám přinesu novou.",
          "ty": false,
          "pron": "ó das tút mír lajt ich BRINge ÍNen zoFORT AJne NOJe"
        },
        {
          "who": "Ty",
          "en": "Danke. Und ich habe ein Wasser bestellt, aber noch keins bekommen.",
          "cs": "Děkuji. A objednal jsem si vodu, ale ještě jsem ji nedostal.",
          "ty": true,
          "pron": "DANke unt ich HÁbe ajn VAser beŠTELT ÁBer NOCH kajns beKOmen",
          "wrong": [
            "Ich fahre mit dem Zug.",
            "Er ist mein Onkel."
          ]
        },
        {
          "who": "Kellner",
          "en": "Das habe ich vergessen. Ich bringe es gleich.",
          "cs": "To jsem zapomněl. Přinesu ji hned.",
          "ty": false,
          "pron": "das HÁbe ich ferGEsen ich BRINge es glajch"
        },
        {
          "who": "Ty",
          "en": "Kein Problem. Ist das Fleisch frisch?",
          "cs": "Žádný problém. Je maso čerstvé?",
          "ty": true,
          "pron": "kajn proBLÉM ist das FLAJŠ friš",
          "wrong": [
            "Ich habe zwei Brüder.",
            "Wo ist das Kino?"
          ]
        },
        {
          "who": "Kellner",
          "en": "Natürlich, wir kaufen es jeden Morgen.",
          "cs": "Samozřejmě, kupujeme ho každé ráno.",
          "ty": false,
          "pron": "naTÜRlich vír KAUfen es JÉden MORgen"
        },
        {
          "who": "Ty",
          "en": "Dann nehme ich das Schnitzel mit Kartoffeln.",
          "cs": "Tak si vezmu řízek s bramborami.",
          "ty": true,
          "pron": "DAN NÉme ich das ŠNICl mit karTOfeln",
          "wrong": [
            "Ich möchte schlafen.",
            "Es ist sehr früh."
          ]
        },
        {
          "who": "Kellner",
          "en": "Sehr gern. Möchten Sie noch etwas trinken?",
          "cs": "S radostí. Chcete ještě něco k pití?",
          "ty": false,
          "pron": "ZÉR GERN MÖCHten zí NOCH ETvas TRINken"
        },
        {
          "who": "Ty",
          "en": "Ja, ein Glas Weißwein, bitte.",
          "cs": "Ano, sklenku bílého vína, prosím.",
          "ty": true,
          "pron": "já ajn GLÁS VAJSvajn BITe",
          "wrong": [
            "Ich bin Vegetarier.",
            "Ich wohne in Prag."
          ]
        }
      ]
    },
    {
      "id": "d33",
      "level": "A2",
      "title": "Das Handy ist kaputt",
      "lines": [
        {
          "who": "Verkäufer",
          "en": "Guten Tag! Was kann ich für Sie tun?",
          "cs": "Dobrý den! Co pro vás mohu udělat?",
          "ty": false,
          "pron": "gúten TÁK VAS kan ich FÜR zí tún"
        },
        {
          "who": "Ty",
          "en": "Mein Handy ist kaputt. Der Bildschirm ist gesprungen.",
          "cs": "Můj mobil je rozbitý. Displej je prasklý.",
          "ty": true,
          "pron": "majn HENdi ist kaPUT der BILTšírm ist geŠPRUngen",
          "wrong": [
            "Ich möchte eine Pizza.",
            "Der Hund ist groß."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Darf ich mal sehen? Wie ist das passiert?",
          "cs": "Mohu se podívat? Jak se to stalo?",
          "ty": false,
          "pron": "darf ich mál ZÉen VÍ ist das paSÍRT"
        },
        {
          "who": "Ty",
          "en": "Es ist mir gestern aus der Hand gefallen.",
          "cs": "Včera mi vypadl z ruky.",
          "ty": true,
          "pron": "es ist mír GESTern aus der HANT geFAlen",
          "wrong": [
            "Ich bin Student.",
            "Ich wohne in Hamburg."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Das kann ich reparieren. Das dauert zwei Tage.",
          "cs": "To mohu opravit. Bude to trvat dva dny.",
          "ty": false,
          "pron": "das kan ich repaRÍren das DAUert CVAJ TÁge"
        },
        {
          "who": "Ty",
          "en": "Was kostet die Reparatur?",
          "cs": "Kolik stojí oprava?",
          "ty": true,
          "pron": "VAS KOstet die reparaTÚR",
          "wrong": [
            "Wo ist die Toilette?",
            "Ich spiele Klavier."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Neunzig Euro. Ich muss aber ein neues Glas bestellen.",
          "cs": "Devadesát eur. Musím ale objednat nové sklo.",
          "ty": false,
          "pron": "NOJNcich OJro ich mus ÁBer ajn NOJes GLÁS beŠTElen"
        },
        {
          "who": "Ty",
          "en": "Das ist in Ordnung. Kann ich in der Zeit ein Ersatzgerät bekommen?",
          "cs": "To je v pořádku. Mohu mezitím dostat náhradní přístroj?",
          "ty": true,
          "pron": "das ist in ORDnung kan ich in der cajt ajn erZACgerét beKOmen",
          "wrong": [
            "Ich mag Schokolade.",
            "Ich suche den Bahnhof."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Ja, ich gebe Ihnen eins. Bitte unterschreiben Sie hier.",
          "cs": "Ano, dám vám jeden. Podepište se tady, prosím.",
          "ty": false,
          "pron": "já ich GÉbe ÍNen AJNS BITe unterŠRAJben zí HÍR"
        },
        {
          "who": "Ty",
          "en": "Gern. Wann kann ich es abholen?",
          "cs": "Rád. Kdy si ho mohu vyzvednout?",
          "ty": true,
          "pron": "GERN VAN kan ich es APhólen",
          "wrong": [
            "Heute ist Freitag.",
            "Nein, danke."
          ]
        }
      ]
    },
    {
      "id": "d34",
      "level": "A2",
      "title": "Kleidung umtauschen",
      "lines": [
        {
          "who": "Verkäuferin",
          "en": "Guten Tag! Kann ich Ihnen helfen?",
          "cs": "Dobrý den! Mohu vám pomoci?",
          "ty": false,
          "pron": "gúten TÁK kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ja, ich möchte diese Hose umtauschen. Sie ist zu klein.",
          "cs": "Ano, chtěl bych vyměnit tyto kalhoty. Jsou příliš malé.",
          "ty": true,
          "pron": "já ich MÖCHte DÍze HÓze UMtaušen zí ist cú KLAJN",
          "wrong": [
            "Ich suche ein Taxi.",
            "Wir haben Hunger."
          ]
        },
        {
          "who": "Verkäuferin",
          "en": "Haben Sie den Kassenzettel dabei?",
          "cs": "Máte s sebou účtenku?",
          "ty": false,
          "pron": "HÁben zí dén KAsencetl daBAJ"
        },
        {
          "who": "Ty",
          "en": "Ja, hier ist er. Ich habe sie gestern gekauft.",
          "cs": "Ano, tady je. Koupil jsem je včera.",
          "ty": true,
          "pron": "já HÍR ist ér ich HÁbe zí GESTern geKAUFT",
          "wrong": [
            "Nein, ich bin Arzt.",
            "Die Suppe ist heiß."
          ]
        },
        {
          "who": "Verkäuferin",
          "en": "Welche Größe brauchen Sie?",
          "cs": "Jakou velikost potřebujete?",
          "ty": false,
          "pron": "VELche GRÖse BRAUchen zí"
        },
        {
          "who": "Ty",
          "en": "Eine Nummer größer, bitte.",
          "cs": "O číslo větší, prosím.",
          "ty": true,
          "pron": "AJne NUmer GRÖser BITe",
          "wrong": [
            "Ich komme aus Polen.",
            "Es regnet stark."
          ]
        },
        {
          "who": "Verkäuferin",
          "en": "Moment, ich schaue nach. Ja, die haben wir noch.",
          "cs": "Okamžik, podívám se. Ano, ty ještě máme.",
          "ty": false,
          "pron": "moMENT ich ŠAUe NÁCH já die HÁben vír NOCH"
        },
        {
          "who": "Ty",
          "en": "Kann ich sie anprobieren?",
          "cs": "Mohu si je vyzkoušet?",
          "ty": true,
          "pron": "kan ich zí ANprobíren",
          "wrong": [
            "Das schmeckt sehr gut.",
            "Ich habe einen Termin."
          ]
        },
        {
          "who": "Verkäuferin",
          "en": "Natürlich. Die Umkleidekabine ist dort hinten.",
          "cs": "Samozřejmě. Zkušební kabinka je támhle vzadu.",
          "ty": false,
          "pron": "naTÜRlich die UMklajdekabíne ist DORT HINten"
        },
        {
          "who": "Ty",
          "en": "Sie passt perfekt. Die nehme ich.",
          "cs": "Padnou perfektně. Ty si vezmu.",
          "ty": true,
          "pron": "zí past perFEKT die NÉme ich",
          "wrong": [
            "Ich möchte bitte zahlen.",
            "Er ist krank."
          ]
        }
      ]
    },
    {
      "id": "d35",
      "level": "A2",
      "title": "Mit dem Nachbarn sprechen",
      "lines": [
        {
          "who": "Nachbar",
          "en": "Guten Tag! Sie sind neu hier, oder?",
          "cs": "Dobrý den! Vy jste tu nový, že?",
          "ty": false,
          "pron": "gúten TÁK zí zint NOJ HÍR Óder"
        },
        {
          "who": "Ty",
          "en": "Ja, ich bin letzte Woche eingezogen. Ich heiße Peter.",
          "cs": "Ano, nastěhoval jsem se minulý týden. Jmenuji se Peter.",
          "ty": true,
          "pron": "já ich bin LECte VOche AJNgecógen ich HAJse PÉter",
          "wrong": [
            "Nein, ich wohne in Wien.",
            "Ich habe Durst."
          ]
        },
        {
          "who": "Nachbar",
          "en": "Willkommen im Haus! Ich bin Herr Schmidt und wohne im zweiten Stock.",
          "cs": "Vítejte v domě! Jsem pan Schmidt a bydlím ve druhém patře.",
          "ty": false,
          "pron": "vilKOmen im HAUS ich bin her šmit unt VÓne im CVAJten štok"
        },
        {
          "who": "Ty",
          "en": "Freut mich! Ich wohne im dritten Stock, direkt über Ihnen.",
          "cs": "Těší mě! Bydlím ve třetím patře, přímo nad vámi.",
          "ty": true,
          "pron": "FROJT mich ich VÓne im DRITen štok diREKT ÜBer ÍNen",
          "wrong": [
            "Ich suche den Bahnhof.",
            "Das Brot ist alt."
          ]
        },
        {
          "who": "Nachbar",
          "en": "Dann sind wir Nachbarn. Wann müssen wir den Müll rausbringen?",
          "cs": "Pak jsme sousedé. Kdy musíme vynést odpadky?",
          "ty": false,
          "pron": "DAN zint vír NACHbarn VAN MÜsen vír dén MÜL RAUSbringen"
        },
        {
          "who": "Ty",
          "en": "Das weiß ich noch nicht. Gibt es dafür einen Plan im Treppenhaus?",
          "cs": "To ještě nevím. Je na to plán na schodišti?",
          "ty": true,
          "pron": "das VAJS ich NOCH nicht gípt es daFÜR AJnen PLÁN im TREpenhaus",
          "wrong": [
            "Ich esse gern Fisch.",
            "Ich bin vierzig Jahre alt."
          ]
        },
        {
          "who": "Nachbar",
          "en": "Ja, schauen Sie dort an der Tür. Die Mülltonne ist hinten im Hof.",
          "cs": "Ano, podívejte se tam na dveře. Popelnice je vzadu na dvoře.",
          "ty": false,
          "pron": "já ŠAUen zí DORT an der TÜR die MÜLtone ist HINten im hóf"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank. Ist das Haus ruhig?",
          "cs": "Mnohokrát děkuji. Je dům klidný?",
          "ty": true,
          "pron": "FÍlen DANK ist das HAUS RUich",
          "wrong": [
            "Heute ist Sonntag.",
            "Ich möchte einen Kaffee."
          ]
        },
        {
          "who": "Nachbar",
          "en": "Ja, nur am Wochenende ist manchmal etwas Musik zu hören.",
          "cs": "Ano, jen o víkendu je občas slyšet hudba.",
          "ty": false,
          "pron": "já NÚR am VOchenende ist MANCHmál ETvas muZÍK cú HÖren"
        },
        {
          "who": "Ty",
          "en": "Kein Problem. Ich freue mich, Sie kennenzulernen.",
          "cs": "Žádný problém. Těší mě, že vás poznávám.",
          "ty": true,
          "pron": "kajn proBLÉM ich FROJe mich zí KEnencuLERnen",
          "wrong": [
            "Ich gehe zum Arzt.",
            "Gute Nacht!"
          ]
        }
      ]
    },
    {
      "id": "d36",
      "level": "A2",
      "title": "Gemeinsam kochen",
      "lines": [
        {
          "who": "Julia",
          "en": "Hast du Lust, heute Abend mit mir zu kochen?",
          "cs": "Máš chuť dnes večer se mnou vařit?",
          "ty": false,
          "pron": "hast dú lust HOJte Ábent mit mír cú KOchen"
        },
        {
          "who": "Ty",
          "en": "Sehr gern! Was wollen wir kochen?",
          "cs": "Moc rád! Co budeme vařit?",
          "ty": true,
          "pron": "ZÉR GERN VAS VOlen vír KOchen",
          "wrong": [
            "Ich habe keinen Bruder.",
            "Der Bus ist voll."
          ]
        },
        {
          "who": "Julia",
          "en": "Ich dachte an Spaghetti mit Tomatensoße.",
          "cs": "Myslela jsem na špagety s rajčatovou omáčkou.",
          "ty": false,
          "pron": "ich DACHte an špaGEti mit toMÁtenzóse"
        },
        {
          "who": "Ty",
          "en": "Gute Idee! Was brauchen wir noch?",
          "cs": "Dobrý nápad! Co ještě potřebujeme?",
          "ty": true,
          "pron": "gúte iDÉ VAS BRAUchen vír NOCH",
          "wrong": [
            "Ich wohne in Köln.",
            "Es ist schon spät."
          ]
        },
        {
          "who": "Julia",
          "en": "Wir brauchen Zwiebeln, Knoblauch und frischen Käse.",
          "cs": "Potřebujeme cibuli, česnek a čerstvý sýr.",
          "ty": false,
          "pron": "vír BRAUchen CVÍbeln KNÓblauch unt FRIšen KÉze"
        },
        {
          "who": "Ty",
          "en": "Ich gehe schnell in den Supermarkt und kaufe alles.",
          "cs": "Skočím rychle do supermarketu a všechno koupím.",
          "ty": true,
          "pron": "ich GÉe ŠNEL in dén ZÚpermarkt unt KAUfe Ales",
          "wrong": [
            "Ich bin Lehrer.",
            "Er spielt Tennis."
          ]
        },
        {
          "who": "Julia",
          "en": "Danke! Soll ich schon Wasser aufsetzen?",
          "cs": "Díky! Mám už dát vařit vodu?",
          "ty": false,
          "pron": "DANke zol ich ŠÓN VAser AUFzecen"
        },
        {
          "who": "Ty",
          "en": "Ja, und schneide bitte die Zwiebeln.",
          "cs": "Ano, a nakrájej prosím cibuli.",
          "ty": true,
          "pron": "já unt ŠNAJde BITe die CVÍbeln",
          "wrong": [
            "Nein, ich habe keine Katze.",
            "Das ist mein Freund."
          ]
        },
        {
          "who": "Julia",
          "en": "Mache ich. Möchtest du Wein dazu trinken?",
          "cs": "Udělám. Chceš k tomu pít víno?",
          "ty": false,
          "pron": "MAche ich MÖCHtest dú VAJN daCÚ TRINken"
        },
        {
          "who": "Ty",
          "en": "Gern, ein Glas Rotwein wäre toll.",
          "cs": "Rád, sklenka červeného vína by byla skvělá.",
          "ty": true,
          "pron": "GERN ajn GLÁS RÓTvajn VÉre tol",
          "wrong": [
            "Ich fahre morgen nach Rom.",
            "Guten Morgen!"
          ]
        }
      ]
    },
    {
      "id": "d37",
      "level": "A2",
      "title": "Im Sportverein",
      "lines": [
        {
          "who": "Trainer",
          "en": "Hallo! Wie kann ich dir helfen?",
          "cs": "Ahoj! Jak ti mohu pomoci?",
          "ty": false,
          "pron": "HAlo VÍ kan ich dír HElfen"
        },
        {
          "who": "Ty",
          "en": "Ich möchte gern Mitglied im Verein werden.",
          "cs": "Rád bych se stal členem klubu.",
          "ty": true,
          "pron": "ich MÖCHte GERN MITglít im ferAJN VÉRden",
          "wrong": [
            "Ich bin im Büro.",
            "Ich esse einen Apfel."
          ]
        },
        {
          "who": "Trainer",
          "en": "Welche Sportart interessiert dich?",
          "cs": "Jaký sport tě zajímá?",
          "ty": false,
          "pron": "VELche ŠPORTart interesÍRT dich"
        },
        {
          "who": "Ty",
          "en": "Ich spiele gern Volleyball, aber ich war lange nicht mehr im Training.",
          "cs": "Rád hraji volejbal, ale už dlouho jsem netrénoval.",
          "ty": true,
          "pron": "ich ŠPÍle GERN VOlibal ÁBer ich vár LANge nicht mér im TRÉning",
          "wrong": [
            "Ich habe Zahnschmerzen.",
            "Das Zimmer ist kalt."
          ]
        },
        {
          "who": "Trainer",
          "en": "Das ist kein Problem. Wir trainieren montags und donnerstags um achtzehn Uhr.",
          "cs": "To není problém. Trénujeme v pondělí a ve čtvrtek v osmnáct hodin.",
          "ty": false,
          "pron": "das ist kajn proBLÉM vír trenÍren MÓNtáks unt DONerstáks um ACHcén ÚR"
        },
        {
          "who": "Ty",
          "en": "Was kostet die Mitgliedschaft im Monat?",
          "cs": "Kolik stojí členství měsíčně?",
          "ty": true,
          "pron": "VAS KOstet die MITglítšaft im MÓnat",
          "wrong": [
            "Ich wohne in Linz.",
            "Wir fahren nach Hause."
          ]
        },
        {
          "who": "Trainer",
          "en": "Fünfzehn Euro. Für Studenten gibt es einen Rabatt.",
          "cs": "Patnáct eur. Pro studenty je sleva.",
          "ty": false,
          "pron": "FÜNFcén OJro FÜR štuDENten gípt es AJnen raBAT"
        },
        {
          "who": "Ty",
          "en": "Ich bin Student. Kann ich einmal zum Probetraining kommen?",
          "cs": "Jsem student. Mohu přijít jednou na zkoušku?",
          "ty": true,
          "pron": "ich bin štuDENT kan ich AJNmál cum PRÓbetrénink KOmen",
          "wrong": [
            "Heute ist Mittwoch.",
            "Der Tee ist heiß."
          ]
        },
        {
          "who": "Trainer",
          "en": "Natürlich! Komm einfach am Montag vorbei.",
          "cs": "Samozřejmě! Prostě přijď v pondělí.",
          "ty": false,
          "pron": "naTÜRlich kom AJNfach am MÓNták forBAJ"
        },
        {
          "who": "Ty",
          "en": "Super, dann bis Montag!",
          "cs": "Skvělé, tak na viděnou v pondělí!",
          "ty": true,
          "pron": "ZÚper DAN bis MÓNták",
          "wrong": [
            "Gute Besserung!",
            "Nein, danke."
          ]
        }
      ]
    },
    {
      "id": "d38",
      "level": "A2",
      "title": "Hobbys und Freizeit",
      "lines": [
        {
          "who": "Tina",
          "en": "Was machst du gern in deiner Freizeit?",
          "cs": "Co rád děláš ve volném čase?",
          "ty": false,
          "pron": "VAS machst dú GERN in DAJner FRAJcajt"
        },
        {
          "who": "Ty",
          "en": "Ich lese viel und fotografiere gern.",
          "cs": "Hodně čtu a rád fotografuji.",
          "ty": true,
          "pron": "ich LÉze FÍL unt fotografÍre GERN",
          "wrong": [
            "Ich fahre morgen nach Hause.",
            "Ich bin sehr hungrig."
          ]
        },
        {
          "who": "Tina",
          "en": "Interessant! Was fotografierst du am liebsten?",
          "cs": "Zajímavé! Co fotografuješ nejraději?",
          "ty": false,
          "pron": "interesANT VAS fotografÍrst dú am LÍPsten"
        },
        {
          "who": "Ty",
          "en": "Am liebsten Landschaften, besonders in den Bergen.",
          "cs": "Nejraději krajinu, zvlášť v horách.",
          "ty": true,
          "pron": "am LÍPsten LANTšaften beZONders in dén BERgen",
          "wrong": [
            "Ich trinke einen Kaffee.",
            "Der Zug hat Verspätung."
          ]
        },
        {
          "who": "Tina",
          "en": "Hast du schon einmal eine Ausstellung gemacht?",
          "cs": "Měl jsi už někdy výstavu?",
          "ty": false,
          "pron": "hast dú ŠÓN AJNmál AJne AUSštelung geMACHT"
        },
        {
          "who": "Ty",
          "en": "Ja, letztes Jahr in einem kleinen Café.",
          "cs": "Ano, loni v malé kavárně.",
          "ty": true,
          "pron": "já LECtes JÁR in AJnem KLAJnen kaFÉ",
          "wrong": [
            "Nein, ich habe Kopfschmerzen.",
            "Ich suche ein Hotel."
          ]
        },
        {
          "who": "Tina",
          "en": "Toll! Ich möchte deine Bilder gern sehen.",
          "cs": "Skvělé! Ráda bych viděla tvé fotografie.",
          "ty": false,
          "pron": "tol ich MÖCHte DAJne BILder GERN ZÉen"
        },
        {
          "who": "Ty",
          "en": "Ich zeige sie dir am Wochenende. Und was machst du gern?",
          "cs": "Ukážu ti je o víkendu. A co děláš ráda ty?",
          "ty": true,
          "pron": "ich CAJge zí dír am VOchenende unt VAS machst dú GERN",
          "wrong": [
            "Ich habe einen Termin.",
            "Das kostet fünf Euro."
          ]
        },
        {
          "who": "Tina",
          "en": "Ich tanze, und im Sommer fahre ich viel Fahrrad.",
          "cs": "Tancuji a v létě hodně jezdím na kole.",
          "ty": false,
          "pron": "ich TANce unt im ZOmer FÁre ich FÍL FÁRrat"
        },
        {
          "who": "Ty",
          "en": "Dann haben wir beide viele Hobbys.",
          "cs": "Pak máme oba mnoho koníčků.",
          "ty": true,
          "pron": "DAN HÁben vír BAJde FÍle HObís",
          "wrong": [
            "Ich wohne in Brünn.",
            "Gute Nacht!"
          ]
        }
      ]
    },
    {
      "id": "d39",
      "level": "A2",
      "title": "Urlaubspläne",
      "lines": [
        {
          "who": "Max",
          "en": "Hast du schon Pläne für den Sommer?",
          "cs": "Máš už plány na léto?",
          "ty": false,
          "pron": "hast dú ŠÓN PLÉne FÜR dén ZOmer"
        },
        {
          "who": "Ty",
          "en": "Ja, ich will im August nach Österreich fahren.",
          "cs": "Ano, chci v srpnu jet do Rakouska.",
          "ty": true,
          "pron": "já ich vil im auGUST NÁCH ÖSterajch FÁren",
          "wrong": [
            "Ich bin Mechaniker.",
            "Er hat einen Hund."
          ]
        },
        {
          "who": "Max",
          "en": "Was möchtest du dort machen?",
          "cs": "Co tam chceš dělat?",
          "ty": false,
          "pron": "VAS MÖCHtest dú DORT MAchen"
        },
        {
          "who": "Ty",
          "en": "Ich will wandern und im See schwimmen.",
          "cs": "Chci chodit po horách a plavat v jezeře.",
          "ty": true,
          "pron": "ich vil VANdern unt im ZÉ ŠVIMen",
          "wrong": [
            "Ich esse Suppe.",
            "Die Tür ist offen."
          ]
        },
        {
          "who": "Max",
          "en": "Fährst du allein oder mit Freunden?",
          "cs": "Pojedeš sám, nebo s přáteli?",
          "ty": false,
          "pron": "FÉRST dú aLAJN Óder mit FROJnden"
        },
        {
          "who": "Ty",
          "en": "Mit zwei Freunden. Wir mieten ein kleines Haus.",
          "cs": "Se dvěma přáteli. Pronajmeme si malý dům.",
          "ty": true,
          "pron": "mit CVAJ FROJnden vír MÍten ajn KLAJnes HAUS",
          "wrong": [
            "Ich bin müde.",
            "Wo ist die Bank?"
          ]
        },
        {
          "who": "Max",
          "en": "Das klingt super. Fahrt ihr mit dem Auto?",
          "cs": "To zní skvěle. Pojedete autem?",
          "ty": false,
          "pron": "das klingt ZÚper FÁRT ír mit dém AUto"
        },
        {
          "who": "Ty",
          "en": "Nein, wir nehmen den Zug, das ist bequemer.",
          "cs": "Ne, pojedeme vlakem, je to pohodlnější.",
          "ty": true,
          "pron": "najn vír NÉmen dén CÚK das ist beKVÉmer",
          "wrong": [
            "Ich habe keinen Hunger.",
            "Ich spreche gut Deutsch."
          ]
        },
        {
          "who": "Max",
          "en": "Ich beneide dich ein bisschen.",
          "cs": "Trochu ti závidím.",
          "ty": false,
          "pron": "ich beNAJde dich ajn BISchen"
        },
        {
          "who": "Ty",
          "en": "Komm doch mit! Es ist noch ein Platz frei.",
          "cs": "Pojeď s námi! Ještě je jedno místo volné.",
          "ty": true,
          "pron": "kom doch mit es ist NOCH ajn PLAC fraj",
          "wrong": [
            "Ich möchte zahlen.",
            "Gute Nacht!"
          ]
        }
      ]
    },
    {
      "id": "d40",
      "level": "A2",
      "title": "Termin telefonisch verschieben",
      "lines": [
        {
          "who": "Sekretärin",
          "en": "Büro Müller, guten Tag.",
          "cs": "Kancelář Müller, dobrý den.",
          "ty": false,
          "pron": "büRÓ MÜler gúten TÁK"
        },
        {
          "who": "Ty",
          "en": "Guten Tag, hier spricht Peter Novák. Ich habe morgen einen Termin.",
          "cs": "Dobrý den, tady Peter Novák. Mám zítra schůzku.",
          "ty": true,
          "pron": "gúten TÁK HÍR špricht PÉter NOvák ich HÁbe MORgen AJnen terMÍN",
          "wrong": [
            "Ich möchte einen Tee.",
            "Ich bin Lehrer."
          ]
        },
        {
          "who": "Sekretärin",
          "en": "Ja, um zehn Uhr bei Herrn Müller. Gibt es ein Problem?",
          "cs": "Ano, v deset hodin u pana Müllera. Je nějaký problém?",
          "ty": false,
          "pron": "já um CÉN ÚR baj hern MÜler gípt es ajn proBLÉM"
        },
        {
          "who": "Ty",
          "en": "Leider bin ich krank und kann nicht kommen.",
          "cs": "Bohužel jsem nemocný a nemohu přijít.",
          "ty": true,
          "pron": "LAJder bin ich KRANK unt kan nicht KOmen",
          "wrong": [
            "Ich fahre mit dem Zug.",
            "Es ist sehr heiß."
          ]
        },
        {
          "who": "Sekretärin",
          "en": "Das tut mir leid. Gute Besserung! Möchten Sie einen neuen Termin?",
          "cs": "To je mi líto. Brzké uzdravení! Chcete nový termín?",
          "ty": false,
          "pron": "das tút mír lajt gúte BEserung MÖCHten zí AJnen NOJen terMÍN"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Haben Sie nächste Woche etwas frei?",
          "cs": "Ano, prosím. Máte příští týden něco volného?",
          "ty": true,
          "pron": "já BITe HÁben zí NÉCHste VOche ETvas fraj",
          "wrong": [
            "Nein, ich habe Durst.",
            "Das Buch ist neu."
          ]
        },
        {
          "who": "Sekretärin",
          "en": "Am Dienstag um vierzehn Uhr oder am Mittwoch um elf Uhr.",
          "cs": "V úterý ve čtrnáct hodin nebo ve středu v jedenáct.",
          "ty": false,
          "pron": "am DÍNstak um FÍRcén ÚR Óder am MITvoch um ELF ÚR"
        },
        {
          "who": "Ty",
          "en": "Der Dienstag passt mir besser.",
          "cs": "Úterý mi vyhovuje lépe.",
          "ty": true,
          "pron": "der DÍNstak past mír BEser",
          "wrong": [
            "Ich wohne in Prag.",
            "Ich suche einen Arzt."
          ]
        },
        {
          "who": "Sekretärin",
          "en": "Gut, dann trage ich Sie am Dienstag um vierzehn Uhr ein.",
          "cs": "Dobře, pak vás zapíšu na úterý ve čtrnáct hodin.",
          "ty": false,
          "pron": "GÚT DAN TRÁge ich zí am DÍNstak um FÍRcén ÚR ajn"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank und auf Wiederhören!",
          "cs": "Mnohokrát děkuji a na slyšenou!",
          "ty": true,
          "pron": "FÍlen DANK unt auf VÍderhören",
          "wrong": [
            "Guten Appetit!",
            "Ich bin zwanzig."
          ]
        }
      ]
    },
    {
      "id": "d41",
      "level": "B1",
      "title": "Reklamation im Geschäft",
      "lines": [
        {
          "who": "Verkäufer",
          "en": "Guten Tag! Wie kann ich Ihnen helfen?",
          "cs": "Dobrý den! Jak vám mohu pomoci?",
          "ty": false,
          "pron": "gúten TÁK VÍ kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ich habe diesen Toaster vor einer Woche gekauft, aber er funktioniert nicht.",
          "cs": "Koupil jsem tento toustovač před týdnem, ale nefunguje.",
          "ty": true,
          "pron": "ich HÁbe DÍzen TÓster fór AJner VOche geKAUFT ÁBer ér funkcioNÍRT nicht",
          "wrong": [
            "Ich möchte ein Eis.",
            "Ich wohne in Prag."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Das tut mir leid. Haben Sie den Kassenzettel noch?",
          "cs": "To mě mrzí. Máte ještě účtenku?",
          "ty": false,
          "pron": "das tút mír lajt HÁben zí dén KAsencetl NOCH"
        },
        {
          "who": "Ty",
          "en": "Ja, hier. Außerdem ist das Kabel beschädigt.",
          "cs": "Ano, tady. Navíc je kabel poškozený.",
          "ty": true,
          "pron": "já HÍR AUserdém ist das KÁbel beŠÉdicht",
          "wrong": [
            "Nein, ich bin Lehrer.",
            "Das Wetter ist schön."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Möchten Sie das Gerät umtauschen oder Ihr Geld zurückbekommen?",
          "cs": "Chcete přístroj vyměnit, nebo dostat peníze zpět?",
          "ty": false,
          "pron": "MÖCHten zí das geRÉT UMtaušen Óder ír GELT cuRÜKbekomen"
        },
        {
          "who": "Ty",
          "en": "Ich hätte lieber mein Geld zurück, weil ich keinen neuen Toaster brauche.",
          "cs": "Raději bych dostal peníze zpět, protože nový toustovač nepotřebuji.",
          "ty": true,
          "pron": "ich HETe LÍber majn GELT cuRÜK VAJL ich KAJnen NOJen TÓster BRAUche",
          "wrong": [
            "Ich habe zwei Brüder.",
            "Ich fahre mit dem Bus."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Das ist kein Problem. Ich muss nur kurz meine Chefin fragen.",
          "cs": "To není problém. Musím se jen krátce zeptat šéfové.",
          "ty": false,
          "pron": "das ist kajn proBLÉM ich mus NÚR kurc MAJne ŠEfin FRÁgen"
        },
        {
          "who": "Ty",
          "en": "Selbstverständlich. Wie lange wird es dauern?",
          "cs": "Samozřejmě. Jak dlouho to bude trvat?",
          "ty": true,
          "pron": "ZELPSTferštendlich VÍ LANge virt es DAUern",
          "wrong": [
            "Ich esse gern Fisch.",
            "Heute ist Montag."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Nur ein paar Minuten. Dann bekommen Sie den Betrag bar zurück.",
          "cs": "Jen pár minut. Pak dostanete částku zpět v hotovosti.",
          "ty": false,
          "pron": "NÚR ajn PÁR miNÚten DAN beKOmen zí dén beTRÁK bár cuRÜK"
        },
        {
          "who": "Ty",
          "en": "Gut, vielen Dank für Ihre freundliche Hilfe.",
          "cs": "Dobře, mnohokrát děkuji za vaši vstřícnou pomoc.",
          "ty": true,
          "pron": "GÚT FÍlen DANK FÜR Íre FROJNTliche HILfe",
          "wrong": [
            "Gute Nacht!",
            "Ich suche den Bahnhof."
          ]
        }
      ]
    },
    {
      "id": "d42",
      "level": "B1",
      "title": "Vorstellungsgespräch",
      "lines": [
        {
          "who": "Chefin",
          "en": "Guten Tag, Herr Novák. Nehmen Sie bitte Platz.",
          "cs": "Dobrý den, pane Nováku. Posaďte se, prosím.",
          "ty": false,
          "pron": "gúten TÁK her NOvák NÉmen zí BITe PLAC"
        },
        {
          "who": "Ty",
          "en": "Guten Tag, Frau Berger. Vielen Dank für die Einladung.",
          "cs": "Dobrý den, paní Bergerová. Mnohokrát děkuji za pozvání.",
          "ty": true,
          "pron": "gúten TÁK FRAU BERger FÍlen DANK FÜR die AJNládung",
          "wrong": [
            "Ich bin sehr müde.",
            "Der Kaffee ist kalt."
          ]
        },
        {
          "who": "Chefin",
          "en": "Erzählen Sie mir bitte etwas über Ihre Berufserfahrung.",
          "cs": "Povězte mi, prosím, něco o své praxi.",
          "ty": false,
          "pron": "erCÉlen zí mír BITe ETvas ÜBer Íre beRÚFSerfárung"
        },
        {
          "who": "Ty",
          "en": "Ich arbeite seit fünf Jahren als Verkäufer und habe viel mit Kunden zu tun.",
          "cs": "Pracuji pět let jako prodavač a mám hodně co do činění se zákazníky.",
          "ty": true,
          "pron": "ich ARbajte zajt FÜNF JÁren als ferKOJfer unt HÁbe FÍL mit KUNden cú tún",
          "wrong": [
            "Ich mag keine Äpfel.",
            "Wir fahren nach Hause."
          ]
        },
        {
          "who": "Chefin",
          "en": "Warum möchten Sie bei uns arbeiten?",
          "cs": "Proč chcete pracovat u nás?",
          "ty": false,
          "pron": "vaRUM MÖCHten zí baj uns ARbajten"
        },
        {
          "who": "Ty",
          "en": "Ihre Firma hat einen guten Ruf, und ich möchte mich weiterentwickeln.",
          "cs": "Vaše firma má dobré jméno a chci se dál rozvíjet.",
          "ty": true,
          "pron": "Íre FIRma hat AJnen gúten rúf unt ich MÖCHte mich VAJterentvikln",
          "wrong": [
            "Ich habe Hunger.",
            "Ich bin vierzig Jahre alt."
          ]
        },
        {
          "who": "Chefin",
          "en": "Wie gut sprechen Sie Deutsch?",
          "cs": "Jak dobře mluvíte německy?",
          "ty": false,
          "pron": "VÍ GÚT ŠPRECHen zí DOJČ"
        },
        {
          "who": "Ty",
          "en": "Ich spreche es ziemlich gut, aber ich lerne jeden Tag etwas Neues.",
          "cs": "Mluvím docela dobře, ale každý den se učím něco nového.",
          "ty": true,
          "pron": "ich ŠPREche es CÍmlich GÚT ÁBer ich LERne JÉden TÁK ETvas NOJes",
          "wrong": [
            "Ich habe einen Hund.",
            "Das Hotel ist teuer."
          ]
        },
        {
          "who": "Chefin",
          "en": "Wann könnten Sie bei uns anfangen?",
          "cs": "Kdy byste mohl u nás začít?",
          "ty": false,
          "pron": "VAN KÖNten zí baj uns ANfangen"
        },
        {
          "who": "Ty",
          "en": "Ich habe eine Kündigungsfrist von einem Monat.",
          "cs": "Mám výpovědní lhůtu jeden měsíc.",
          "ty": true,
          "pron": "ich HÁbe AJne KÜNdigungsfrist fon AJnem MÓnat",
          "wrong": [
            "Ich trinke einen Tee.",
            "Guten Appetit!"
          ]
        }
      ]
    },
    {
      "id": "d43",
      "level": "B1",
      "title": "Wohnungsbesichtigung",
      "lines": [
        {
          "who": "Vermieter",
          "en": "Guten Tag, kommen Sie herein. Das ist die Wohnung.",
          "cs": "Dobrý den, pojďte dál. Tohle je ten byt.",
          "ty": false,
          "pron": "gúten TÁK KOmen zí heRAJN das ist die VÓnung"
        },
        {
          "who": "Ty",
          "en": "Danke. Sie ist heller, als ich gedacht habe.",
          "cs": "Děkuji. Je světlejší, než jsem si myslel.",
          "ty": true,
          "pron": "DANke zí ist HELer als ich geDACHT HÁbe",
          "wrong": [
            "Ich möchte bezahlen.",
            "Ich lese ein Buch."
          ]
        },
        {
          "who": "Vermieter",
          "en": "Ja, sie hat große Fenster nach Süden. Die Küche ist neu.",
          "cs": "Ano, má velká okna na jih. Kuchyně je nová.",
          "ty": false,
          "pron": "já zí hat GRÓse FENster NÁCH ZÜden die KÜche ist NOJ"
        },
        {
          "who": "Ty",
          "en": "Ist die Küche mit Herd und Kühlschrank eingerichtet?",
          "cs": "Je kuchyně vybavena sporákem a lednicí?",
          "ty": true,
          "pron": "ist die KÜche mit HÉRT unt KÜLšrank AJNgerichtet",
          "wrong": [
            "Ich habe Fieber.",
            "Es ist sehr kalt."
          ]
        },
        {
          "who": "Vermieter",
          "en": "Ja, das gehört alles zur Wohnung. Die Nebenkosten betragen hundertfünfzig Euro.",
          "cs": "Ano, to všechno patří k bytu. Poplatky činí sto padesát eur.",
          "ty": false,
          "pron": "já das geHÖRT Ales cur VÓnung die NÉbenkosten beTRÁgen HUNdertFÜNFcich OJro"
        },
        {
          "who": "Ty",
          "en": "Sind in den Nebenkosten auch Heizung und Wasser enthalten?",
          "cs": "Jsou v poplatcích zahrnuty také topení a voda?",
          "ty": true,
          "pron": "zint in dén NÉbenkosten AUCH HAJcung unt VAser entHALten",
          "wrong": [
            "Ich bin Student.",
            "Das ist mein Onkel."
          ]
        },
        {
          "who": "Vermieter",
          "en": "Heizung und Wasser ja, Strom nicht. Den müssen Sie selbst bezahlen.",
          "cs": "Topení a voda ano, elektřina ne. Tu musíte platit sami.",
          "ty": false,
          "pron": "HAJcung unt VAser já ŠTRÓM nicht dén MÜsen zí zelpst beCÁlen"
        },
        {
          "who": "Ty",
          "en": "Verstehe. Darf ich Haustiere halten?",
          "cs": "Rozumím. Smím mít domácí zvířata?",
          "ty": true,
          "pron": "ferŠTÉe darf ich HAUStíre HALten",
          "wrong": [
            "Ich komme aus Polen.",
            "Wo ist die Apotheke?"
          ]
        },
        {
          "who": "Vermieter",
          "en": "Eine Katze ist erlaubt, einen Hund möchte ich nicht.",
          "cs": "Kočka je povolena, psa nechci.",
          "ty": false,
          "pron": "AJne KAce ist erLAUPT AJnen HUNT MÖCHte ich nicht"
        },
        {
          "who": "Ty",
          "en": "Das ist in Ordnung. Ich überlege es mir und melde mich morgen.",
          "cs": "To je v pořádku. Rozmyslím si to a ozvu se zítra.",
          "ty": true,
          "pron": "das ist in ORDnung ich überLÉge es mír unt MELde mich MORgen",
          "wrong": [
            "Gute Besserung!",
            "Ich spiele Fußball."
          ]
        }
      ]
    },
    {
      "id": "d44",
      "level": "B1",
      "title": "Bei der Bank",
      "lines": [
        {
          "who": "Beraterin",
          "en": "Guten Tag! Was kann ich für Sie tun?",
          "cs": "Dobrý den! Co pro vás mohu udělat?",
          "ty": false,
          "pron": "gúten TÁK VAS kan ich FÜR zí tún"
        },
        {
          "who": "Ty",
          "en": "Ich möchte ein Konto eröffnen, weil ich nach Deutschland ziehe.",
          "cs": "Chtěl bych si otevřít účet, protože se stěhuji do Německa.",
          "ty": true,
          "pron": "ich MÖCHte ajn KONto erÖFnen VAJL ich NÁCH DOJČlant CÍe",
          "wrong": [
            "Ich suche einen Arzt.",
            "Ich esse gern Pizza."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Dafür brauche ich Ihren Ausweis und eine Meldebescheinigung.",
          "cs": "K tomu potřebuji váš průkaz a potvrzení o přihlášení k pobytu.",
          "ty": false,
          "pron": "daFÜR BRAUche ich Íren AUSvajs unt AJne MELdebeŠAJnigung"
        },
        {
          "who": "Ty",
          "en": "Den Ausweis habe ich dabei. Die Meldebescheinigung bekomme ich erst nächste Woche.",
          "cs": "Průkaz mám s sebou. Potvrzení dostanu až příští týden.",
          "ty": true,
          "pron": "dén AUSvajs HÁbe ich daBAJ die MELdebeŠAJnigung beKOme ich erst NÉCHste VOche",
          "wrong": [
            "Nein, ich bin kein Arzt.",
            "Das Essen ist kalt."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Dann kommen Sie am besten nächste Woche noch einmal.",
          "cs": "Pak přijďte nejlépe příští týden ještě jednou.",
          "ty": false,
          "pron": "DAN KOmen zí am BEsten NÉCHste VOche NOCH AJNmál"
        },
        {
          "who": "Ty",
          "en": "Kann ich mich vorher über die Kosten informieren?",
          "cs": "Mohu se předtím informovat o poplatcích?",
          "ty": true,
          "pron": "kan ich mich FÓRhér ÜBer die KOsten informÍren",
          "wrong": [
            "Heute ist Freitag.",
            "Ich fahre mit dem Zug."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Natürlich. Die Kontoführung kostet fünf Euro im Monat.",
          "cs": "Samozřejmě. Vedení účtu stojí pět eur měsíčně.",
          "ty": false,
          "pron": "naTÜRlich die KONtofürung KOstet FÜNF OJro im MÓnat"
        },
        {
          "who": "Ty",
          "en": "Und bekomme ich eine Karte, mit der ich im Ausland zahlen kann?",
          "cs": "A dostanu kartu, kterou mohu platit v zahraničí?",
          "ty": true,
          "pron": "unt beKOme ich AJne KARte mit der ich im AUSlant CÁlen kan",
          "wrong": [
            "Ich habe Kopfschmerzen.",
            "Ich bin müde."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Ja, die Karte gilt in ganz Europa.",
          "cs": "Ano, karta platí v celé Evropě.",
          "ty": false,
          "pron": "já die KARte gilt in ganc ojROpa"
        },
        {
          "who": "Ty",
          "en": "Gut, dann komme ich in einer Woche wieder.",
          "cs": "Dobře, tak přijdu za týden znovu.",
          "ty": true,
          "pron": "GÚT DAN KOme ich in AJner VOche VÍder",
          "wrong": [
            "Guten Appetit!",
            "Nein, danke."
          ]
        }
      ]
    },
    {
      "id": "d45",
      "level": "B1",
      "title": "Beim Arzt über Beschwerden sprechen",
      "lines": [
        {
          "who": "Ärztin",
          "en": "Guten Tag! Was führt Sie zu mir?",
          "cs": "Dobrý den! Co vás ke mně přivádí?",
          "ty": false,
          "pron": "gúten TÁK VAS FÜRT zí cú mír"
        },
        {
          "who": "Ty",
          "en": "Ich habe seit zwei Wochen Rückenschmerzen, besonders morgens.",
          "cs": "Mám dva týdny bolesti zad, zvláště ráno.",
          "ty": true,
          "pron": "ich HÁbe zajt CVAJ VOchen RÜkenšmercen beZONders MORgens",
          "wrong": [
            "Ich möchte einen Kaffee.",
            "Ich fahre morgen nach Berlin."
          ]
        },
        {
          "who": "Ärztin",
          "en": "Arbeiten Sie viel im Sitzen?",
          "cs": "Pracujete hodně vsedě?",
          "ty": false,
          "pron": "ARbajten zí FÍL im ZIcen"
        },
        {
          "who": "Ty",
          "en": "Ja, ich sitze den ganzen Tag am Computer.",
          "cs": "Ano, sedím celý den u počítače.",
          "ty": true,
          "pron": "já ich ZIce dén GANcen TÁK am komPJUter",
          "wrong": [
            "Ich habe einen Bruder.",
            "Der Zug kommt gleich."
          ]
        },
        {
          "who": "Ärztin",
          "en": "Treiben Sie regelmäßig Sport?",
          "cs": "Sportujete pravidelně?",
          "ty": false,
          "pron": "TRAJben zí RÉgelmésich ŠPORT"
        },
        {
          "who": "Ty",
          "en": "Leider nicht. Ich habe dafür kaum Zeit.",
          "cs": "Bohužel ne. Mám na to sotva čas.",
          "ty": true,
          "pron": "LAJder nicht ich HÁbe daFÜR KAUM cajt",
          "wrong": [
            "Ich wohne in Wien.",
            "Das ist mein Vater."
          ]
        },
        {
          "who": "Ärztin",
          "en": "Ich untersuche Sie jetzt kurz. Tut es hier weh?",
          "cs": "Nyní vás krátce vyšetřím. Bolí to tady?",
          "ty": false,
          "pron": "ich unterZÚche zí JECT kurc tút es HÍR vé"
        },
        {
          "who": "Ty",
          "en": "Ja, genau da. Ist es etwas Ernstes?",
          "cs": "Ano, přesně tady. Je to něco vážného?",
          "ty": true,
          "pron": "já geNAU dá ist es ETvas ERNstes",
          "wrong": [
            "Ich habe keinen Hunger.",
            "Gute Nacht!"
          ]
        },
        {
          "who": "Ärztin",
          "en": "Nein, die Muskeln sind verspannt. Ich verschreibe Ihnen Physiotherapie.",
          "cs": "Ne, svaly jsou ztuhlé. Předepíšu vám fyzioterapii.",
          "ty": false,
          "pron": "najn die MUSkeln zint ferŠPANT ich ferŠRAJbe ÍNen fyzioterAPÍ"
        },
        {
          "who": "Ty",
          "en": "Danke, Frau Doktor. Soll ich noch etwas beachten?",
          "cs": "Děkuji, paní doktorko. Mám ještě něco dodržovat?",
          "ty": true,
          "pron": "DANke FRAU DOKtór zol ich NOCH ETvas beACHten",
          "wrong": [
            "Ich bin zwanzig Jahre alt.",
            "Es regnet stark."
          ]
        }
      ]
    },
    {
      "id": "d46",
      "level": "B1",
      "title": "Ein Abonnement kündigen",
      "lines": [
        {
          "who": "Mitarbeiter",
          "en": "Kundenservice, guten Tag. Wie kann ich Ihnen helfen?",
          "cs": "Zákaznický servis, dobrý den. Jak vám mohu pomoci?",
          "ty": false,
          "pron": "KUNdenserviss gúten TÁK VÍ kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Guten Tag, ich möchte mein Abonnement kündigen.",
          "cs": "Dobrý den, chtěl bych vypovědět předplatné.",
          "ty": true,
          "pron": "gúten TÁK ich MÖCHte majn abonMAN KÜNdigen",
          "wrong": [
            "Ich habe Durst.",
            "Ich bin im Park."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "Schade! Darf ich fragen, warum?",
          "cs": "Škoda! Mohu se zeptat proč?",
          "ty": false,
          "pron": "ŠÁde darf ich FRÁgen vaRUM"
        },
        {
          "who": "Ty",
          "en": "Ich benutze den Dienst kaum noch, und er ist mir zu teuer geworden.",
          "cs": "Službu už téměř nepoužívám a je pro mě příliš drahá.",
          "ty": true,
          "pron": "ich beNUce dén DÍNST KAUM NOCH unt ér ist mír cú TOJer geVORden",
          "wrong": [
            "Ich spiele Klavier.",
            "Das Kind schläft."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "Ich könnte Ihnen ein günstigeres Angebot machen.",
          "cs": "Mohl bych vám nabídnout levnější nabídku.",
          "ty": false,
          "pron": "ich KÖNte ÍNen ajn GÜNstigeres ANgebót MAchen"
        },
        {
          "who": "Ty",
          "en": "Nein danke, ich habe mich schon entschieden.",
          "cs": "Ne, děkuji, už jsem se rozhodl.",
          "ty": true,
          "pron": "najn DANke ich HÁbe mich ŠÓN entŠÍden",
          "wrong": [
            "Ja, ich möchte ein Eis.",
            "Wir haben Hunger."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "In Ordnung. Dann brauche ich Ihre Kundennummer.",
          "cs": "V pořádku. Pak potřebuji vaše zákaznické číslo.",
          "ty": false,
          "pron": "in ORDnung DAN BRAUche ich Íre KUNdennumer"
        },
        {
          "who": "Ty",
          "en": "Sie steht in der E-Mail, die ich Ihnen gerade schicke.",
          "cs": "Je v e-mailu, který vám právě posílám.",
          "ty": true,
          "pron": "zí štét in der Í-mejl die ich ÍNen geRÁde ŠIke",
          "wrong": [
            "Ich habe einen Hund.",
            "Es ist halb vier."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "Danke. Ihre Kündigung gilt zum Ende des Monats.",
          "cs": "Děkuji. Vaše výpověď platí ke konci měsíce.",
          "ty": false,
          "pron": "DANke Íre KÜNdigung gilt cum ENde des MÓnats"
        },
        {
          "who": "Ty",
          "en": "Bitte bestätigen Sie mir das schriftlich.",
          "cs": "Potvrďte mi to, prosím, písemně.",
          "ty": true,
          "pron": "BITe beŠTÉtigen zí mír das ŠRIFTlich",
          "wrong": [
            "Guten Appetit!",
            "Ich bin Verkäufer."
          ]
        }
      ]
    },
    {
      "id": "d47",
      "level": "B1",
      "title": "Eine Besprechung verschieben",
      "lines": [
        {
          "who": "Kollegin",
          "en": "Hallo Peter, hast du kurz Zeit?",
          "cs": "Ahoj Petere, máš chvilku času?",
          "ty": false,
          "pron": "HAlo PÉter hast dú kurc cajt"
        },
        {
          "who": "Ty",
          "en": "Ja, klar. Was gibt es denn?",
          "cs": "Ano, jasně. Copak se děje?",
          "ty": true,
          "pron": "já klár VAS gípt es DEN",
          "wrong": [
            "Nein, ich habe einen Hund.",
            "Das Brot ist frisch."
          ]
        },
        {
          "who": "Kollegin",
          "en": "Unsere Besprechung morgen früh kollidiert mit einem Kundentermin.",
          "cs": "Naše zítřejší ranní schůzka se kryje se schůzkou se zákazníkem.",
          "ty": false,
          "pron": "UNzere beŠPREchung MORgen FRÜ koliDÍRT mit AJnem KUNdentermín"
        },
        {
          "who": "Ty",
          "en": "Das ist ärgerlich. Wann könntest du denn stattdessen?",
          "cs": "To je nepříjemné. Kdy bys mohla místo toho?",
          "ty": true,
          "pron": "das ist ERgerlich VAN KÖNtest dú DEN štatDEsen",
          "wrong": [
            "Ich bin müde.",
            "Ich fahre mit dem Fahrrad."
          ]
        },
        {
          "who": "Kollegin",
          "en": "Am Nachmittag wäre mir lieber, vielleicht um fünfzehn Uhr.",
          "cs": "Odpoledne by mi bylo milejší, třeba v patnáct hodin.",
          "ty": false,
          "pron": "am NÁCHmitak VÉre mír LÍber fiLAJCHT um FÜNFcén ÚR"
        },
        {
          "who": "Ty",
          "en": "Das passt mir auch. Soll ich die anderen informieren?",
          "cs": "To vyhovuje i mně. Mám informovat ostatní?",
          "ty": true,
          "pron": "das past mír AUCH zol ich die ANderen informÍren",
          "wrong": [
            "Ich habe Kopfschmerzen.",
            "Heute scheint die Sonne."
          ]
        },
        {
          "who": "Kollegin",
          "en": "Gern, das wäre sehr nett von dir.",
          "cs": "S radostí, to by od tebe bylo moc milé.",
          "ty": false,
          "pron": "GERN das VÉre ZÉR NET fon dír"
        },
        {
          "who": "Ty",
          "en": "Ich schreibe gleich eine kurze Nachricht an alle.",
          "cs": "Hned napíšu všem krátkou zprávu.",
          "ty": true,
          "pron": "ich ŠRAJbe glajch AJne KURce NÁCHricht an ALe",
          "wrong": [
            "Ich esse gern Pizza.",
            "Er spielt Tennis."
          ]
        },
        {
          "who": "Kollegin",
          "en": "Perfekt. Dann sehen wir uns morgen um drei.",
          "cs": "Perfektní. Pak se uvidíme zítra ve tři.",
          "ty": false,
          "pron": "perFEKT DAN ZÉen vír uns MORgen um DRAJ"
        },
        {
          "who": "Ty",
          "en": "Genau. Bis dann!",
          "cs": "Přesně. Tak zatím!",
          "ty": true,
          "pron": "geNAU bis DAN",
          "wrong": [
            "Gute Reise!",
            "Ich suche den Bahnhof."
          ]
        }
      ]
    },
    {
      "id": "d48",
      "level": "B1",
      "title": "Mit dem Chef über Urlaub sprechen",
      "lines": [
        {
          "who": "Chef",
          "en": "Guten Morgen! Sie wollten mich sprechen?",
          "cs": "Dobré ráno! Chtěl jste se mnou mluvit?",
          "ty": false,
          "pron": "gúten MORgen zí VOLten mich ŠPRECHen"
        },
        {
          "who": "Ty",
          "en": "Ja, ich möchte gern wegen meines Urlaubs fragen.",
          "cs": "Ano, rád bych se zeptal kvůli své dovolené.",
          "ty": true,
          "pron": "já ich MÖCHte GERN VÉgen MAJnes ÚRlaups FRÁgen",
          "wrong": [
            "Ich habe Hunger.",
            "Ich wohne in Linz."
          ]
        },
        {
          "who": "Chef",
          "en": "Wann würden Sie gern frei haben?",
          "cs": "Kdy byste chtěl mít volno?",
          "ty": false,
          "pron": "VAN VÜRden zí GERN fraj HÁben"
        },
        {
          "who": "Ty",
          "en": "Ich würde gern die ersten zwei Augustwochen nehmen.",
          "cs": "Chtěl bych si vzít první dva týdny v srpnu.",
          "ty": true,
          "pron": "ich VÜRde GERN die ERsten CVAJ AUgustvochen NÉmen",
          "wrong": [
            "Ich bin Arzt.",
            "Das Hotel ist neu."
          ]
        },
        {
          "who": "Chef",
          "en": "Im August sind schon einige Kollegen im Urlaub.",
          "cs": "V srpnu už je několik kolegů na dovolené.",
          "ty": false,
          "pron": "im auGUST zint ŠÓN AJnige koLÉgen im ÚRlaup"
        },
        {
          "who": "Ty",
          "en": "Ich weiß, aber ich habe die Reise schon gebucht. Ich kann nur dann fahren.",
          "cs": "Vím, ale cestu jsem už zarezervoval. Mohu jet jen tehdy.",
          "ty": true,
          "pron": "ich VAJS ÁBer ich HÁbe die RAJze ŠÓN geBÚCHT ich kan NÚR DAN FÁren",
          "wrong": [
            "Nein, danke.",
            "Ich trinke gern Tee."
          ]
        },
        {
          "who": "Chef",
          "en": "Gut, dann sprechen Sie das bitte noch mit Frau Meier ab.",
          "cs": "Dobře, pak to prosím ještě domluvte s paní Meierovou.",
          "ty": false,
          "pron": "GÚT DAN ŠPRECHen zí das BITe NOCH mit FRAU MAJer ap"
        },
        {
          "who": "Ty",
          "en": "Mache ich. Ich übernehme vorher alle dringenden Aufgaben.",
          "cs": "Udělám. Předtím převezmu všechny naléhavé úkoly.",
          "ty": true,
          "pron": "MAche ich ich überNÉme FÓRhér ALe DRINgenden AUFgáben",
          "wrong": [
            "Ich habe einen Termin.",
            "Das ist mein Bruder."
          ]
        },
        {
          "who": "Chef",
          "en": "Das ist eine gute Lösung. Ich genehmige den Urlaub.",
          "cs": "To je dobré řešení. Dovolenou schvaluji.",
          "ty": false,
          "pron": "das ist AJne gúte LÖzung ich geNÉmige dén ÚRlaup"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank für Ihr Verständnis!",
          "cs": "Mnohokrát děkuji za vaše pochopení!",
          "ty": true,
          "pron": "FÍlen DANK FÜR ír ferŠTENTnis",
          "wrong": [
            "Gute Besserung!",
            "Es ist sehr heiß."
          ]
        }
      ]
    },
    {
      "id": "d49",
      "level": "B1",
      "title": "Den Umzug organisieren",
      "lines": [
        {
          "who": "Freund",
          "en": "Wann ziehst du eigentlich um?",
          "cs": "Kdy se vlastně stěhuješ?",
          "ty": false,
          "pron": "VAN CÍst dú AJgentlich um"
        },
        {
          "who": "Ty",
          "en": "Am ersten Samstag im Oktober, wenn alles klappt.",
          "cs": "První sobotu v říjnu, pokud všechno vyjde.",
          "ty": true,
          "pron": "am ERsten ZAMStak im okTÓber VEN Ales klapt",
          "wrong": [
            "Ich bin Lehrer.",
            "Ich esse einen Apfel."
          ]
        },
        {
          "who": "Freund",
          "en": "Hast du schon einen Transporter gemietet?",
          "cs": "Pronajal sis už dodávku?",
          "ty": false,
          "pron": "hast dú ŠÓN AJnen transPORter geMÍtet"
        },
        {
          "who": "Ty",
          "en": "Noch nicht, aber ich habe mehrere Angebote verglichen.",
          "cs": "Ještě ne, ale porovnal jsem několik nabídek.",
          "ty": true,
          "pron": "NOCH nicht ÁBer ich HÁbe MÉrere ANgebóte ferGLIchen",
          "wrong": [
            "Ich fahre morgen nach Rom.",
            "Wo ist die Toilette?"
          ]
        },
        {
          "who": "Freund",
          "en": "Brauchst du Hilfe beim Tragen? Ich könnte mit anpacken.",
          "cs": "Potřebuješ pomoc s nošením? Mohl bych přiložit ruku k dílu.",
          "ty": false,
          "pron": "BRAUchst dú HILfe bajm TRÁgen ich KÖNte mit ANpaken"
        },
        {
          "who": "Ty",
          "en": "Das wäre super! Zu zweit geht es viel schneller.",
          "cs": "To by bylo skvělé! Ve dvou to jde mnohem rychleji.",
          "ty": true,
          "pron": "das VÉre ZÚper cú cvajt GÉT es FÍL ŠNELer",
          "wrong": [
            "Ich habe Fieber.",
            "Der Zug hat Verspätung."
          ]
        },
        {
          "who": "Freund",
          "en": "Soll ich auch ein paar Kartons mitbringen?",
          "cs": "Mám přinést také pár krabic?",
          "ty": false,
          "pron": "zol ich AUCH ajn PÁR karTONS MITbringen"
        },
        {
          "who": "Ty",
          "en": "Ja, gern. Ich habe noch nicht genug zum Einpacken.",
          "cs": "Ano, rád. Ještě nemám dost na balení.",
          "ty": true,
          "pron": "já GERN ich HÁbe NOCH nicht geNÚK cum AJNpaken",
          "wrong": [
            "Ich mag keine Fische.",
            "Gute Nacht!"
          ]
        },
        {
          "who": "Freund",
          "en": "Und wer hilft dir beim Aufbauen der Möbel?",
          "cs": "A kdo ti pomůže se stavěním nábytku?",
          "ty": false,
          "pron": "unt VÉR hilft dír bajm AUFbauen der MÖbl"
        },
        {
          "who": "Ty",
          "en": "Mein Bruder, er kommt extra aus Brünn.",
          "cs": "Můj bratr, přijede speciálně z Brna.",
          "ty": true,
          "pron": "majn BRÚder ér komt EKStra aus BRÜN",
          "wrong": [
            "Ich trinke Kaffee.",
            "Es regnet stark."
          ]
        }
      ]
    },
    {
      "id": "d50",
      "level": "B1",
      "title": "Über einen Film sprechen",
      "lines": [
        {
          "who": "Anna",
          "en": "Hast du gestern den neuen Film im Kino gesehen?",
          "cs": "Viděl jsi včera nový film v kině?",
          "ty": false,
          "pron": "hast dú GESTern dén NOJen FILM im KÍno geZÉen"
        },
        {
          "who": "Ty",
          "en": "Ja, und ich fand ihn ehrlich gesagt ziemlich enttäuschend.",
          "cs": "Ano, a upřímně řečeno mi přišel dost zklamávající.",
          "ty": true,
          "pron": "já unt ich fant ín ÉRlich geZÁKT CÍmlich entTOJšent",
          "wrong": [
            "Ich habe einen Termin.",
            "Das Auto ist neu."
          ]
        },
        {
          "who": "Anna",
          "en": "Wirklich? Ich habe gehört, dass die Kritiken sehr gut waren.",
          "cs": "Opravdu? Slyšela jsem, že kritiky byly velmi dobré.",
          "ty": false,
          "pron": "VIRKlich ich HÁbe geHÖRT DAS die kriTÍken ZÉR GÚT VÁren"
        },
        {
          "who": "Ty",
          "en": "Die Schauspieler waren gut, aber die Geschichte war langweilig.",
          "cs": "Herci byli dobří, ale příběh byl nudný.",
          "ty": true,
          "pron": "die ŠAUšpíler VÁren GÚT ÁBer die geŠICHte vár LANGvajlich",
          "wrong": [
            "Ich wohne in Köln.",
            "Ich habe Durst."
          ]
        },
        {
          "who": "Anna",
          "en": "Das finde ich schade, ich wollte ihn mir am Wochenende anschauen.",
          "cs": "To je škoda, chtěla jsem se na něj podívat o víkendu.",
          "ty": false,
          "pron": "das FINde ich ŠÁde ich VOLte ín mír am VOchenende ANšauen"
        },
        {
          "who": "Ty",
          "en": "Schau ihn dir trotzdem an, vielleicht gefällt er dir besser.",
          "cs": "Stejně se na něj podívej, možná se ti bude líbit víc.",
          "ty": true,
          "pron": "šau ín dír TROCdém an fiLAJCHT geFELT ér dír BEser",
          "wrong": [
            "Ich bin vierzig Jahre alt.",
            "Wir fahren nach Hause."
          ]
        },
        {
          "who": "Anna",
          "en": "Das mache ich. Welcher Film hat dir denn zuletzt richtig gefallen?",
          "cs": "Udělám to. Který film se ti naposledy opravdu líbil?",
          "ty": false,
          "pron": "das MAche ich VELcher FILM hat dír DEN cuLECT RICHtich geFAlen"
        },
        {
          "who": "Ty",
          "en": "Ein historischer Film über die Berliner Mauer, der hat mich sehr berührt.",
          "cs": "Historický film o berlínské zdi, ten mě velmi dojal.",
          "ty": true,
          "pron": "ajn hisTÓRišer FILM ÜBer die berLÍner MAUer der hat mich ZÉR beRÜRT",
          "wrong": [
            "Ich spreche ein bisschen Deutsch.",
            "Heute ist Dienstag."
          ]
        },
        {
          "who": "Anna",
          "en": "Den kenne ich nicht. Vielleicht schauen wir ihn zusammen.",
          "cs": "Ten neznám. Možná se na něj podíváme společně.",
          "ty": false,
          "pron": "dén KEne ich nicht fiLAJCHT ŠAUen vír ín cuZAmen"
        },
        {
          "who": "Ty",
          "en": "Gern, wir können uns am Freitag verabreden.",
          "cs": "Rád, můžeme se domluvit na pátek.",
          "ty": true,
          "pron": "GERN vír KÖnen uns am FRAJták ferAPréden",
          "wrong": [
            "Gute Besserung!",
            "Ich möchte bezahlen."
          ]
        }
      ]
    },
    {
      "id": "d51",
      "level": "B1",
      "title": "Stau und Verspätung",
      "lines": [
        {
          "who": "Kollege",
          "en": "Wo bist du denn? Die Besprechung hat schon angefangen.",
          "cs": "Kde vlastně jsi? Porada už začala.",
          "ty": false,
          "pron": "VÓ bist dú DEN die beŠPREchung hat ŠÓN ANgefangen"
        },
        {
          "who": "Ty",
          "en": "Es tut mir leid, ich stehe seit einer halben Stunde im Stau.",
          "cs": "Je mi líto, stojím půl hodiny v koloně.",
          "ty": true,
          "pron": "es tút mír lajt ich ŠTÉe zajt AJner HALben ŠTUNde im ŠTAU",
          "wrong": [
            "Ich esse gern Fisch.",
            "Das Wetter ist schön."
          ]
        },
        {
          "who": "Kollege",
          "en": "Weißt du schon, wie lange es noch dauert?",
          "cs": "Víš už, jak dlouho to ještě potrvá?",
          "ty": false,
          "pron": "vajst dú ŠÓN VÍ LANge es NOCH DAUert"
        },
        {
          "who": "Ty",
          "en": "Auf der Autobahn gab es einen Unfall. Ich schätze, noch zwanzig Minuten.",
          "cs": "Na dálnici byla nehoda. Odhaduji ještě dvacet minut.",
          "ty": true,
          "pron": "auf der AUtobán gáp es AJnen UNfal ich ŠEce NOCH CVANcich miNÚten",
          "wrong": [
            "Ich habe zwei Kinder.",
            "Ich bin sehr hungrig."
          ]
        },
        {
          "who": "Kollege",
          "en": "Soll ich dem Chef Bescheid sagen?",
          "cs": "Mám dát šéfovi vědět?",
          "ty": false,
          "pron": "zol ich dém ŠEF beŠAJT ZÁgen"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Sag ihm, dass ich so schnell wie möglich komme.",
          "cs": "Ano, prosím. Řekni mu, že přijdu, jak nejrychleji to půjde.",
          "ty": true,
          "pron": "já BITe zák ím DAS ich zó ŠNEL VÍ MÖklich KOme",
          "wrong": [
            "Nein, ich habe keine Katze.",
            "Der Tee ist heiß."
          ]
        },
        {
          "who": "Kollege",
          "en": "Alles klar. Brauchst du Unterlagen, die wir dir mailen sollen?",
          "cs": "Jasně. Potřebuješ podklady, které ti máme poslat e-mailem?",
          "ty": false,
          "pron": "Ales klár BRAUchst dú UNterlágen die vír dír MÉjlen ZOlen"
        },
        {
          "who": "Ty",
          "en": "Das wäre hilfreich, dann kann ich sie noch im Auto lesen.",
          "cs": "To by bylo užitečné, pak si je můžu přečíst ještě v autě.",
          "ty": true,
          "pron": "das VÉre HILFrajch DAN kan ich zí NOCH im AUto LÉzen",
          "wrong": [
            "Ich suche ein Hotel.",
            "Heute ist Sonntag."
          ]
        },
        {
          "who": "Kollege",
          "en": "Aber lies sie nicht beim Fahren!",
          "cs": "Ale nečti je při řízení!",
          "ty": false,
          "pron": "ÁBer lís zí nicht bajm FÁren"
        },
        {
          "who": "Ty",
          "en": "Keine Sorge, ich warte, bis der Stau sich auflöst.",
          "cs": "Žádné obavy, počkám, až se kolona rozpustí.",
          "ty": true,
          "pron": "KAJne ZORge ich VARte bis der ŠTAU zich AUFlöst",
          "wrong": [
            "Guten Appetit!",
            "Ich bin Student."
          ]
        }
      ]
    },
    {
      "id": "d52",
      "level": "B1",
      "title": "Das Paket ist nicht angekommen",
      "lines": [
        {
          "who": "Mitarbeiterin",
          "en": "Kundendienst, guten Tag. Was kann ich für Sie tun?",
          "cs": "Zákaznická podpora, dobrý den. Co pro vás mohu udělat?",
          "ty": false,
          "pron": "KUNdendínst gúten TÁK VAS kan ich FÜR zí tún"
        },
        {
          "who": "Ty",
          "en": "Ich habe vor zehn Tagen ein Paket bestellt, aber es ist noch nicht angekommen.",
          "cs": "Před deseti dny jsem objednal balík, ale ještě nedorazil.",
          "ty": true,
          "pron": "ich HÁbe fór CÉN TÁgen ajn paKÉT beŠTELT ÁBer es ist NOCH nicht ANgekomen",
          "wrong": [
            "Ich möchte einen Kaffee.",
            "Er ist mein Onkel."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Das tut mir leid. Haben Sie die Sendungsnummer?",
          "cs": "To mě mrzí. Máte číslo zásilky?",
          "ty": false,
          "pron": "das tút mír lajt HÁben zí die ZENdungsnumer"
        },
        {
          "who": "Ty",
          "en": "Ja, sie lautet eins, zwei, drei, vier, fünf.",
          "cs": "Ano, zní jedna, dva, tři, čtyři, pět.",
          "ty": true,
          "pron": "já zí LAUtet AJNS CVAJ DRAJ FÍR FÜNF",
          "wrong": [
            "Ich wohne in Brünn.",
            "Das Essen ist kalt."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Einen Moment bitte. Laut System wurde das Paket nicht zugestellt, weil niemand zu Hause war.",
          "cs": "Okamžik, prosím. Podle systému nebyl balík doručen, protože nikdo nebyl doma.",
          "ty": false,
          "pron": "AJnen moMENT BITe LAUT zysTÉM VURde das paKÉT nicht CÚgeštelt VAJL NÍmant cú HAUze vár"
        },
        {
          "who": "Ty",
          "en": "Das stimmt nicht. Ich war den ganzen Tag zu Hause.",
          "cs": "To není pravda. Byl jsem celý den doma.",
          "ty": true,
          "pron": "das štimt nicht ich vár dén GANcen TÁK cú HAUze",
          "wrong": [
            "Ja, ich bin Lehrer.",
            "Ich suche den Bahnhof."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Ich entschuldige mich. Ich veranlasse eine neue Zustellung für morgen.",
          "cs": "Omlouvám se. Zajistím nové doručení na zítřek.",
          "ty": false,
          "pron": "ich entŠULdige mich ich ferANlase AJne NOJe CÚštelung FÜR MORgen"
        },
        {
          "who": "Ty",
          "en": "Kann ich ein Zeitfenster wählen? Vormittags bin ich nicht da.",
          "cs": "Mohu zvolit časové okno? Dopoledne tu nejsem.",
          "ty": true,
          "pron": "kan ich ajn CAJTfenster VÉlen FÓRmitáks bin ich nicht dá",
          "wrong": [
            "Ich mag Schokolade.",
            "Es ist halb zwölf."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Ja, zwischen vierzehn und sechzehn Uhr. Ist das in Ordnung?",
          "cs": "Ano, mezi čtrnáctou a šestnáctou hodinou. Je to v pořádku?",
          "ty": false,
          "pron": "já CVIšen FÍRcén unt ZECHcén ÚR ist das in ORDnung"
        },
        {
          "who": "Ty",
          "en": "Ja, das passt. Vielen Dank für Ihre Hilfe.",
          "cs": "Ano, to vyhovuje. Mnohokrát děkuji za vaši pomoc.",
          "ty": true,
          "pron": "já das past FÍlen DANK FÜR Íre HILfe",
          "wrong": [
            "Gute Nacht!",
            "Nein, ich habe Hunger."
          ]
        }
      ]
    },
    {
      "id": "d53",
      "level": "B1",
      "title": "Einen Schaden bei der Versicherung melden",
      "lines": [
        {
          "who": "Berater",
          "en": "Versicherung Nord, guten Tag. Wie kann ich helfen?",
          "cs": "Pojišťovna Nord, dobrý den. Jak mohu pomoci?",
          "ty": false,
          "pron": "ferZIcherung nort gúten TÁK VÍ kan ich HElfen"
        },
        {
          "who": "Ty",
          "en": "Guten Tag, ich möchte einen Schaden melden. Jemand ist in mein geparktes Auto gefahren.",
          "cs": "Dobrý den, chtěl bych nahlásit škodu. Někdo mi najel do zaparkovaného auta.",
          "ty": true,
          "pron": "gúten TÁK ich MÖCHte AJnen ŠÁden MELden JÉmant ist in majn gePARKtes AUto geFÁren",
          "wrong": [
            "Ich esse einen Apfel.",
            "Ich bin im Park."
          ]
        },
        {
          "who": "Berater",
          "en": "Das ist ärgerlich. Wann ist es passiert?",
          "cs": "To je nepříjemné. Kdy se to stalo?",
          "ty": false,
          "pron": "das ist ERgerlich VAN ist es paSÍRT"
        },
        {
          "who": "Ty",
          "en": "Vorgestern Abend, vor meinem Haus. Der Fahrer ist einfach weggefahren.",
          "cs": "Předevčírem večer před mým domem. Řidič prostě odjel.",
          "ty": true,
          "pron": "FÓRgestern Ábent fór MAJnem HAUS der FÁRer ist AJNfach VEKgefáren",
          "wrong": [
            "Ich habe keinen Hunger.",
            "Der Zug ist weg."
          ]
        },
        {
          "who": "Berater",
          "en": "Haben Sie die Polizei informiert?",
          "cs": "Informoval jste policii?",
          "ty": false,
          "pron": "HÁben zí die policAJ informÍRT"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe eine Anzeige erstattet und habe auch Fotos vom Schaden gemacht.",
          "cs": "Ano, podal jsem oznámení a pořídil jsem také fotografie škody.",
          "ty": true,
          "pron": "já ich HÁbe AJne ANcajge erŠTAtet unt HÁbe AUCH FÓtos fom ŠÁden geMACHT",
          "wrong": [
            "Nein, ich wohne in Wien.",
            "Das Kind spielt."
          ]
        },
        {
          "who": "Berater",
          "en": "Sehr gut. Bitte schicken Sie uns die Fotos und den Polizeibericht.",
          "cs": "Velmi dobře. Pošlete nám prosím fotografie a policejní zprávu.",
          "ty": false,
          "pron": "ZÉR GÚT BITe ŠIken zí uns die FÓtos unt dén poliCAJbericht"
        },
        {
          "who": "Ty",
          "en": "Wie lange dauert die Bearbeitung des Antrags?",
          "cs": "Jak dlouho trvá vyřízení žádosti?",
          "ty": true,
          "pron": "VÍ LANge DAUert die beARbajtung des ANtráks",
          "wrong": [
            "Heute ist Mittwoch.",
            "Ich habe einen Bruder."
          ]
        },
        {
          "who": "Berater",
          "en": "In der Regel etwa zwei Wochen. Wir melden uns bei Ihnen.",
          "cs": "Zpravidla asi dva týdny. Ozveme se vám.",
          "ty": false,
          "pron": "in der RÉgl ETva CVAJ VOchen vír MELden uns baj ÍNen"
        },
        {
          "who": "Ty",
          "en": "Danke. Wer bezahlt in der Zwischenzeit die Reparatur?",
          "cs": "Děkuji. Kdo mezitím zaplatí opravu?",
          "ty": true,
          "pron": "DANke VÉR beCÁLT in der CVIšencajt die reparaTÚR",
          "wrong": [
            "Gute Besserung!",
            "Ich fahre nach Hause."
          ]
        }
      ]
    },
    {
      "id": "d54",
      "level": "B1",
      "title": "Beim Elternabend",
      "lines": [
        {
          "who": "Lehrerin",
          "en": "Guten Abend! Schön, dass Sie zum Elternabend gekommen sind.",
          "cs": "Dobrý večer! Je hezké, že jste přišli na třídní schůzku.",
          "ty": false,
          "pron": "gúten Ábent ŠÖN DAS zí cum ELternábent geKOmen zint"
        },
        {
          "who": "Ty",
          "en": "Guten Abend! Ich bin der Vater von Lukas.",
          "cs": "Dobrý večer! Jsem otec Lukáše.",
          "ty": true,
          "pron": "gúten Ábent ich bin der FÁter fon LÚkas",
          "wrong": [
            "Ich möchte einen Tee.",
            "Ich habe Fieber."
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Ah ja, Lukas ist ein aufmerksamer Schüler, nur in Mathe hat er Schwierigkeiten.",
          "cs": "Ach ano, Lukáš je pozorný žák, jen v matematice má potíže.",
          "ty": false,
          "pron": "á já LÚkas ist ajn AUFmerkzámer ŠÜler NÚR in MAte hat ér ŠVÍrichkajten"
        },
        {
          "who": "Ty",
          "en": "Das wundert mich nicht. Er sagt, dass er die Aufgaben schwer versteht.",
          "cs": "To mě nepřekvapuje. Říká, že úkolům těžko rozumí.",
          "ty": true,
          "pron": "das VUNdert mich nicht ér zákt DAS ér die AUFgáben švér ferŠTÉT",
          "wrong": [
            "Ich wohne in Köln.",
            "Das Auto ist neu."
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Vielleicht wäre Nachhilfe eine Möglichkeit.",
          "cs": "Možná by doučování byla možnost.",
          "ty": false,
          "pron": "fiLAJCHT VÉre NÁCHhilfe AJne MÖklichkajt"
        },
        {
          "who": "Ty",
          "en": "Gibt es an der Schule ein Angebot oder müssen wir privat jemanden suchen?",
          "cs": "Je ve škole nějaká nabídka, nebo musíme hledat někoho soukromě?",
          "ty": true,
          "pron": "gípt es an der ŠÚle ajn ANgebót Óder MÜsen vír priVÁT JÉmanden ZÚchen",
          "wrong": [
            "Ich bin Verkäufer.",
            "Wo ist die Bank?"
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Wir haben eine kostenlose Lerngruppe am Mittwochnachmittag.",
          "cs": "Máme bezplatnou studijní skupinu ve středu odpoledne.",
          "ty": false,
          "pron": "vír HÁben AJne KOstenlóze LERNgrupe am MITvochnáchmitak"
        },
        {
          "who": "Ty",
          "en": "Das klingt gut. Wie kann ich ihn anmelden?",
          "cs": "To zní dobře. Jak ho mohu přihlásit?",
          "ty": true,
          "pron": "das klingt GÚT VÍ kan ich ín ANmelden",
          "wrong": [
            "Ich esse gern Fisch.",
            "Es ist sehr kalt."
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Füllen Sie einfach dieses Formular aus und geben Sie es mir zurück.",
          "cs": "Vyplňte prostě tento formulář a vraťte mi ho.",
          "ty": false,
          "pron": "FÜlen zí AJNfach DÍzes formuLÁR aus unt GÉben zí es mír cuRÜK"
        },
        {
          "who": "Ty",
          "en": "Mache ich gleich. Vielen Dank für Ihre Unterstützung.",
          "cs": "Udělám hned. Mnohokrát děkuji za vaši podporu.",
          "ty": true,
          "pron": "MAche ich glajch FÍlen DANK FÜR Íre unterŠTÜcung",
          "wrong": [
            "Guten Appetit!",
            "Ich bin zwanzig."
          ]
        }
      ]
    },
    {
      "id": "d55",
      "level": "B1",
      "title": "Mülltrennung erklären",
      "lines": [
        {
          "who": "Nachbarin",
          "en": "Entschuldigung, Sie haben Ihren Müll in die falsche Tonne geworfen.",
          "cs": "Promiňte, vyhodil jste odpadky do špatné popelnice.",
          "ty": false,
          "pron": "entŠULdigung zí HÁben Íren MÜL in die FALše TOne geVORfen"
        },
        {
          "who": "Ty",
          "en": "Oh, das tut mir leid. Ich bin neu hier und kenne das System noch nicht.",
          "cs": "Ach, to mě mrzí. Jsem tu nový a systém ještě neznám.",
          "ty": true,
          "pron": "ó das tút mír lajt ich bin NOJ HÍR unt KEne das zysTÉM NOCH nicht",
          "wrong": [
            "Ich habe Hunger.",
            "Ich fahre mit dem Zug."
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Kein Problem. Die gelbe Tonne ist für Plastik und Verpackungen.",
          "cs": "Žádný problém. Žlutá popelnice je na plasty a obaly.",
          "ty": false,
          "pron": "kajn proBLÉM die GELbe TOne ist FÜR PLAStik unt ferPAkungen"
        },
        {
          "who": "Ty",
          "en": "Und wohin kommt das Papier?",
          "cs": "A kam patří papír?",
          "ty": true,
          "pron": "unt voHIN komt das paPÍR",
          "wrong": [
            "Ich spiele Gitarre.",
            "Heute ist Freitag."
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Altpapier gehört in die blaue Tonne, Glas in den Container an der Straße.",
          "cs": "Starý papír patří do modré popelnice, sklo do kontejneru u ulice.",
          "ty": false,
          "pron": "ALTpapír geHÖRT in die BLAue TOne GLÁS in dén konTÉJner an der ŠTRÁse"
        },
        {
          "who": "Ty",
          "en": "Gibt es auch Pfand auf Flaschen?",
          "cs": "Platí se také záloha za lahve?",
          "ty": true,
          "pron": "gípt es AUCH pfant auf FLAšen",
          "wrong": [
            "Nein, danke.",
            "Ich suche ein Taxi."
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Ja, Pfandflaschen bringen Sie am besten zurück in den Supermarkt.",
          "cs": "Ano, zálohované lahve nejlépe vraťte do supermarketu.",
          "ty": false,
          "pron": "já PFANTflašen BRINgen zí am BEsten cuRÜK in dén ZÚpermarkt"
        },
        {
          "who": "Ty",
          "en": "Das ist praktisch. Und was mache ich mit Bioabfall?",
          "cs": "To je praktické. A co udělám s bioodpadem?",
          "ty": true,
          "pron": "das ist PRAKtiš unt VAS MAche ich mit BÍOapfal",
          "wrong": [
            "Ich habe einen Termin.",
            "Der Tee ist kalt."
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Der kommt in die braune Tonne, die wird alle zwei Wochen geleert.",
          "cs": "Ten patří do hnědé popelnice, ta se vyváží každé dva týdny.",
          "ty": false,
          "pron": "der komt in die BRAUne TOne die virt ALe CVAJ VOchen geLÉRT"
        },
        {
          "who": "Ty",
          "en": "Danke für die Erklärung, ich achte ab jetzt darauf.",
          "cs": "Děkuji za vysvětlení, od teď si na to dám pozor.",
          "ty": true,
          "pron": "DANke FÜR die erKLÉrung ich ACHte ap JECT daRAUF",
          "wrong": [
            "Gute Reise!",
            "Ich komme aus Prag."
          ]
        }
      ]
    },
    {
      "id": "d56",
      "level": "B1",
      "title": "Online bestellte Ware zurückgeben",
      "lines": [
        {
          "who": "Mitarbeiter",
          "en": "Online-Shop Kleiderwelt, guten Tag.",
          "cs": "Internetový obchod Kleiderwelt, dobrý den.",
          "ty": false,
          "pron": "ONlajnšop KLAJdervelt gúten TÁK"
        },
        {
          "who": "Ty",
          "en": "Guten Tag, ich habe vor drei Tagen einen Mantel bestellt, aber er passt nicht.",
          "cs": "Dobrý den, před třemi dny jsem objednal kabát, ale nesedí mi.",
          "ty": true,
          "pron": "gúten TÁK ich HÁbe fór DRAJ TÁgen AJnen MANtel beŠTELT ÁBer ér past nicht",
          "wrong": [
            "Ich möchte einen Kaffee.",
            "Ich bin Arzt."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "Das ist kein Problem. Sie haben vierzehn Tage Zeit für die Rückgabe.",
          "cs": "To není problém. Na vrácení máte čtrnáct dní.",
          "ty": false,
          "pron": "das ist kajn proBLÉM zí HÁben FÍRcén TÁge cajt FÜR die RÜKgábe"
        },
        {
          "who": "Ty",
          "en": "Muss ich das Rückporto selbst bezahlen?",
          "cs": "Musím zaplatit zpáteční poštovné sám?",
          "ty": true,
          "pron": "mus ich das RÜKporto zelpst beCÁlen",
          "wrong": [
            "Ich habe keinen Hund.",
            "Das Hotel ist teuer."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "Nein, die Rücksendung ist bei uns kostenlos. Sie bekommen ein Etikett per E-Mail.",
          "cs": "Ne, vrácení je u nás zdarma. Dostanete štítek e-mailem.",
          "ty": false,
          "pron": "najn die RÜKzendung ist baj uns KOstenlós zí beKOmen ajn etiKET per Í-mejl"
        },
        {
          "who": "Ty",
          "en": "Gut. Und wann bekomme ich mein Geld zurück?",
          "cs": "Dobře. A kdy dostanu peníze zpět?",
          "ty": true,
          "pron": "GÚT unt VAN beKOme ich majn GELT cuRÜK",
          "wrong": [
            "Ich fahre nach Hause.",
            "Es regnet stark."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "Sobald das Paket bei uns angekommen ist, überweisen wir den Betrag innerhalb von fünf Tagen.",
          "cs": "Jakmile balík u nás dorazí, převedeme částku do pěti dnů.",
          "ty": false,
          "pron": "zoBALT das paKÉT baj uns ANgekomen ist überVAJzen vír dén beTRÁK INerhalp fon FÜNF TÁgen"
        },
        {
          "who": "Ty",
          "en": "Kann ich den Mantel auch in einer anderen Größe bestellen?",
          "cs": "Mohu kabát objednat také v jiné velikosti?",
          "ty": true,
          "pron": "kan ich dén MANtel AUCH in AJner ANderen GRÖse beŠTElen",
          "wrong": [
            "Ich lese ein Buch.",
            "Wir haben Durst."
          ]
        },
        {
          "who": "Mitarbeiter",
          "en": "Natürlich. Bestellen Sie ihn einfach neu und schicken Sie den alten zurück.",
          "cs": "Samozřejmě. Objednejte ho prostě znovu a starý pošlete zpět.",
          "ty": false,
          "pron": "naTÜRlich beŠTElen zí ín AJNfach NOJ unt ŠIken zí dén ALten cuRÜK"
        },
        {
          "who": "Ty",
          "en": "Danke für die schnelle Hilfe, das mache ich so.",
          "cs": "Děkuji za rychlou pomoc, udělám to tak.",
          "ty": true,
          "pron": "DANke FÜR die ŠNELe HILfe das MAche ich zó",
          "wrong": [
            "Gute Nacht!",
            "Das ist mein Freund."
          ]
        }
      ]
    },
    {
      "id": "d57",
      "level": "B1",
      "title": "Beschwerde im Hotel",
      "lines": [
        {
          "who": "Rezeptionist",
          "en": "Guten Abend! Kann ich Ihnen helfen?",
          "cs": "Dobrý večer! Mohu vám pomoci?",
          "ty": false,
          "pron": "gúten Ábent kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ja, mit meinem Zimmer gibt es leider mehrere Probleme.",
          "cs": "Ano, s mým pokojem je bohužel několik problémů.",
          "ty": true,
          "pron": "já mit MAJnem CImer gípt es LAJder MÉrere proBLÉme",
          "wrong": [
            "Ich möchte eine Pizza.",
            "Ich wohne in Wien."
          ]
        },
        {
          "who": "Rezeptionist",
          "en": "Das tut mir leid. Was ist denn los?",
          "cs": "To mě mrzí. Co se děje?",
          "ty": false,
          "pron": "das tút mír lajt VAS ist DEN lós"
        },
        {
          "who": "Ty",
          "en": "Die Heizung funktioniert nicht, und es ist sehr laut, weil direkt unter dem Fenster gebaut wird.",
          "cs": "Topení nefunguje a je velmi hlučno, protože se přímo pod oknem staví.",
          "ty": true,
          "pron": "die HAJcung funkcioNÍRT nicht unt es ist ZÉR LAUT VAJL diREKT UNter dém FENster geBAUT virt",
          "wrong": [
            "Ich bin Student.",
            "Das Brot ist alt."
          ]
        },
        {
          "who": "Rezeptionist",
          "en": "Ich verstehe. Ich kann Ihnen ein anderes Zimmer auf der Rückseite anbieten.",
          "cs": "Rozumím. Mohu vám nabídnout jiný pokoj vzadu.",
          "ty": false,
          "pron": "ich ferŠTÉe ich kan ÍNen ajn ANderes CImer auf der RÜKzajte ANbíten"
        },
        {
          "who": "Ty",
          "en": "Ist das Zimmer ruhiger und hat es einen Balkon?",
          "cs": "Je ten pokoj klidnější a má balkon?",
          "ty": true,
          "pron": "ist das CImer RÚiger unt hat es AJnen balKÓN",
          "wrong": [
            "Ich habe Fieber.",
            "Es ist schon spät."
          ]
        },
        {
          "who": "Rezeptionist",
          "en": "Ja, es hat einen kleinen Balkon und ist ruhig. Es liegt im dritten Stock.",
          "cs": "Ano, má malý balkon a je klidný. Je ve třetím patře.",
          "ty": false,
          "pron": "já es hat AJnen KLAJnen balKÓN unt ist RUich es lígt im DRITen štok"
        },
        {
          "who": "Ty",
          "en": "Gut, dann nehme ich es. Kann jemand mein Gepäck tragen?",
          "cs": "Dobře, tak si ho vezmu. Může mi někdo odnést zavazadla?",
          "ty": true,
          "pron": "GÚT DAN NÉme ich es kan JÉmant majn gePEK TRÁgen",
          "wrong": [
            "Nein, danke.",
            "Ich fahre mit dem Bus."
          ]
        },
        {
          "who": "Rezeptionist",
          "en": "Selbstverständlich. Als Entschädigung bekommen Sie morgen das Frühstück gratis.",
          "cs": "Samozřejmě. Jako kompenzaci dostanete zítra snídani zdarma.",
          "ty": false,
          "pron": "ZELPSTferštendlich als entŠÉdigung beKOmen zí MORgen das FRÜštük GRÁtis"
        },
        {
          "who": "Ty",
          "en": "Das ist sehr freundlich, vielen Dank.",
          "cs": "To je velmi milé, mnohokrát děkuji.",
          "ty": true,
          "pron": "das ist ZÉR FROJNTlich FÍlen DANK",
          "wrong": [
            "Gute Besserung!",
            "Ich suche den Bahnhof."
          ]
        }
      ]
    },
    {
      "id": "d58",
      "level": "B1",
      "title": "Sich für einen Sprachkurs anmelden",
      "lines": [
        {
          "who": "Mitarbeiterin",
          "en": "Sprachschule Lingua, guten Tag.",
          "cs": "Jazyková škola Lingua, dobrý den.",
          "ty": false,
          "pron": "ŠPRÁCHšúle LINgva gúten TÁK"
        },
        {
          "who": "Ty",
          "en": "Guten Tag, ich möchte mich für einen Deutschkurs anmelden.",
          "cs": "Dobrý den, chtěl bych se přihlásit na kurz němčiny.",
          "ty": true,
          "pron": "gúten TÁK ich MÖCHte mich FÜR AJnen DOJČkurs ANmelden",
          "wrong": [
            "Ich suche einen Arzt.",
            "Ich esse einen Apfel."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Welches Niveau haben Sie?",
          "cs": "Jakou máte úroveň?",
          "ty": false,
          "pron": "VELches niVÓ HÁben zí"
        },
        {
          "who": "Ty",
          "en": "Ich glaube, ich bin zwischen A zwei und B eins.",
          "cs": "Myslím, že jsem mezi A dva a B jedna.",
          "ty": true,
          "pron": "ich GLAUbe ich bin CVIšen á CVAJ unt bé AJNS",
          "wrong": [
            "Ich habe einen Bruder.",
            "Der Zug hat Verspätung."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Dann machen wir zuerst einen kurzen Einstufungstest.",
          "cs": "Pak nejdřív uděláme krátký zařazovací test.",
          "ty": false,
          "pron": "DAN MAchen vír cuÉRST AJnen KURcen AJNštúfungstest"
        },
        {
          "who": "Ty",
          "en": "Gerne. Wann finden die Kurse statt?",
          "cs": "Rád. Kdy se konají kurzy?",
          "ty": true,
          "pron": "GERne VAN FINden die KURze štat",
          "wrong": [
            "Ich habe Durst.",
            "Heute scheint die Sonne."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Wir haben einen Abendkurs, montags und mittwochs von achtzehn bis zwanzig Uhr.",
          "cs": "Máme večerní kurz, v pondělí a ve středu od osmnácti do dvaceti hodin.",
          "ty": false,
          "pron": "vír HÁben AJnen ÁbentKURS MÓNtáks unt MITvochs fon ACHcén bis CVANcich ÚR"
        },
        {
          "who": "Ty",
          "en": "Das passt gut zu meiner Arbeit. Wie lange dauert der Kurs?",
          "cs": "To dobře odpovídá mé práci. Jak dlouho kurz trvá?",
          "ty": true,
          "pron": "das past GÚT cú MAJner ARbajt VÍ LANge DAUert der KURS",
          "wrong": [
            "Ich wohne in Brünn.",
            "Wir fahren nach Hause."
          ]
        },
        {
          "who": "Mitarbeiterin",
          "en": "Zwölf Wochen. Die Gebühr beträgt dreihundertachtzig Euro.",
          "cs": "Dvanáct týdnů. Poplatek činí tři sta osmdesát eur.",
          "ty": false,
          "pron": "CVÖLF VOchen die geBÜR beTRÉKT DRAJhundertACHcich OJro"
        },
        {
          "who": "Ty",
          "en": "In Ordnung. Kann ich auch in Raten zahlen?",
          "cs": "V pořádku. Mohu platit také ve splátkách?",
          "ty": true,
          "pron": "in ORDnung kan ich AUCH in RÁten CÁlen",
          "wrong": [
            "Gute Nacht!",
            "Ich bin vierzig."
          ]
        }
      ]
    },
    {
      "id": "d59",
      "level": "B1",
      "title": "Über die Nachrichten diskutieren",
      "lines": [
        {
          "who": "Kollege",
          "en": "Hast du heute die Nachrichten gelesen? Die Energiepreise steigen schon wieder.",
          "cs": "Četl jsi dnes zprávy? Ceny energií zase rostou.",
          "ty": false,
          "pron": "hast dú HOJte die NÁCHrichten geLÉzen die energíPRAJze ŠTAJgen ŠÓN VÍder"
        },
        {
          "who": "Ty",
          "en": "Ja, das macht mir Sorgen. Besonders im Winter wird es teuer.",
          "cs": "Ano, dělá mi to starosti. Zvlášť v zimě to bude drahé.",
          "ty": true,
          "pron": "já das macht mír ZORgen beZONders im VInter virt es TOJer",
          "wrong": [
            "Ich möchte einen Kaffee.",
            "Er ist mein Onkel."
          ]
        },
        {
          "who": "Kollege",
          "en": "Meiner Meinung nach sollte der Staat mehr helfen.",
          "cs": "Podle mého názoru by měl stát víc pomáhat.",
          "ty": false,
          "pron": "MAJner MAJnung NÁCH ZOLte der štát mér HElfen"
        },
        {
          "who": "Ty",
          "en": "Da stimme ich dir teilweise zu, aber jeder sollte auch selbst Energie sparen.",
          "cs": "S tím částečně souhlasím, ale každý by měl také sám šetřit energii.",
          "ty": true,
          "pron": "dá ŠTIMe ich dír TAJLvajze cú ÁBer JÉder ZOLte AUCH zelpst energÍ ŠPÁren",
          "wrong": [
            "Ich habe Hunger.",
            "Das Wetter ist kalt."
          ]
        },
        {
          "who": "Kollege",
          "en": "Das stimmt. Ich habe zum Beispiel die Heizung etwas niedriger gestellt.",
          "cs": "To je pravda. Já jsem například trochu snížil topení.",
          "ty": false,
          "pron": "das štimt ich HÁbe cum BAJšpíl die HAJcung ETvas NÍdriger geŠTELT"
        },
        {
          "who": "Ty",
          "en": "Ich lasse außerdem öfter das Auto stehen und fahre mit dem Rad.",
          "cs": "Já navíc častěji nechávám auto stát a jezdím na kole.",
          "ty": true,
          "pron": "ich LAse AUserdém ÖFter das AUto ŠTÉen unt FÁre mit dém rát",
          "wrong": [
            "Ich spiele Fußball.",
            "Ich bin im Büro."
          ]
        },
        {
          "who": "Kollege",
          "en": "Das finde ich gut. Aber nicht jeder hat diese Möglichkeit.",
          "cs": "To považuji za dobré. Ale ne každý má tuto možnost.",
          "ty": false,
          "pron": "das FINde ich GÚT ÁBer nicht JÉder hat DÍze MÖklichkajt"
        },
        {
          "who": "Ty",
          "en": "Da hast du recht. Auf dem Land ist man oft aufs Auto angewiesen.",
          "cs": "V tom máš pravdu. Na venkově je člověk často odkázán na auto.",
          "ty": true,
          "pron": "dá hast dú RECHT auf dém LANT ist man OFT aufs AUto ANgevízen",
          "wrong": [
            "Ich esse gern Pizza.",
            "Wo ist die Apotheke?"
          ]
        },
        {
          "who": "Kollege",
          "en": "Genau. Es braucht also verschiedene Lösungen.",
          "cs": "Přesně. Je tedy potřeba různých řešení.",
          "ty": false,
          "pron": "geNAU es BRAUcht ALzó ferŠÍdene LÖzungen"
        },
        {
          "who": "Ty",
          "en": "Ja, und vor allem eine ehrliche Diskussion darüber.",
          "cs": "Ano, a především upřímná diskuse o tom.",
          "ty": true,
          "pron": "já unt fór ALem AJne ÉRliche diskuSJÓN daRÜber",
          "wrong": [
            "Guten Appetit!",
            "Ich fahre morgen nach Rom."
          ]
        }
      ]
    },
    {
      "id": "d60",
      "level": "B1",
      "title": "Abschied und Rückblick",
      "lines": [
        {
          "who": "Freundin",
          "en": "Morgen fährst du also zurück nach Prag. Wie schnell die Zeit vergangen ist!",
          "cs": "Zítra se tedy vracíš do Prahy. Jak ten čas rychle uběhl!",
          "ty": false,
          "pron": "MORgen FÉRST dú ALzó cuRÜK NÁCH PRÁK VÍ ŠNEL die cajt ferGAngen ist"
        },
        {
          "who": "Ty",
          "en": "Ja, ich kann es kaum glauben. Es waren sechs tolle Monate.",
          "cs": "Ano, sotva tomu můžu uvěřit. Bylo to šest skvělých měsíců.",
          "ty": true,
          "pron": "já ich kan es KAUM GLAUben es VÁren ZEKS TOle MÓnate",
          "wrong": [
            "Ich habe Hunger.",
            "Ich wohne in Linz."
          ]
        },
        {
          "who": "Freundin",
          "en": "Was hat dir hier am besten gefallen?",
          "cs": "Co se ti tady líbilo nejvíc?",
          "ty": false,
          "pron": "VAS hat dír HÍR am BEsten geFAlen"
        },
        {
          "who": "Ty",
          "en": "Am meisten haben mir die Menschen gefallen, sie waren alle so freundlich.",
          "cs": "Nejvíc se mi líbili lidé, všichni byli tak přátelští.",
          "ty": true,
          "pron": "am MAJsten HÁben mír die MENšen geFAlen zí VÁren ALe zó FROJNTlich",
          "wrong": [
            "Ich mag keine Äpfel.",
            "Das Brot ist frisch."
          ]
        },
        {
          "who": "Freundin",
          "en": "Und dein Deutsch ist auch viel besser geworden.",
          "cs": "A tvá němčina se také hodně zlepšila.",
          "ty": false,
          "pron": "unt dajn DOJČ ist AUCH FÍL BEser geVORden"
        },
        {
          "who": "Ty",
          "en": "Danke, das habe ich vor allem dir und den anderen zu verdanken.",
          "cs": "Děkuji, to vděčím hlavně tobě a ostatním.",
          "ty": true,
          "pron": "DANke das HÁbe ich fór ALem dír unt dén ANderen cú ferDANken",
          "wrong": [
            "Ich suche den Bahnhof.",
            "Es regnet stark."
          ]
        },
        {
          "who": "Freundin",
          "en": "Du musst uns unbedingt bald wieder besuchen.",
          "cs": "Musíš nás určitě brzy zase navštívit.",
          "ty": false,
          "pron": "dú must uns UNbedingt balt VÍder beZÚchen"
        },
        {
          "who": "Ty",
          "en": "Das mache ich bestimmt. Vielleicht schon im nächsten Sommer.",
          "cs": "To určitě udělám. Možná už příští léto.",
          "ty": true,
          "pron": "das MAche ich beŠTIMT fiLAJCHT ŠÓN im NÉCHsten ZOmer",
          "wrong": [
            "Ich habe Kopfschmerzen.",
            "Heute ist Montag."
          ]
        },
        {
          "who": "Freundin",
          "en": "Dann bist du herzlich eingeladen. Bleib in Kontakt!",
          "cs": "Pak jsi srdečně zván. Zůstaň v kontaktu!",
          "ty": false,
          "pron": "DAN bist dú HERClich AJNgeládn blajp in konTAKT"
        },
        {
          "who": "Ty",
          "en": "Auf jeden Fall. Pass auf dich auf, und bis bald!",
          "cs": "Rozhodně. Opatruj se a brzy na viděnou!",
          "ty": true,
          "pron": "auf JÉden FAL pas auf dich auf unt bis balt",
          "wrong": [
            "Guten Appetit!",
            "Ich bin müde."
          ]
        }
      ]
    },
    {
      "id": "d61",
      "level": "B2",
      "title": "Den Stromanbieter wechseln",
      "lines": [
        {
          "who": "Berater",
          "en": "Guten Tag, hier ist die Kundenberatung. Sie hatten wegen Ihres Stromvertrags angefragt?",
          "cs": "Dobrý den, tady zákaznické poradenství. Ptal jste se kvůli smlouvě na elektřinu?",
          "ty": false,
          "pron": "gúten TÁK HÍR ist die KUNdenberátung zí HATen VÉgen ÍRes ŠTRÓMfertráks ANgefrákt"
        },
        {
          "who": "Ty",
          "en": "Ja, meine Stromrechnung ist deutlich höher als im letzten Jahr, und ich möchte gern wechseln.",
          "cs": "Ano, můj účet za elektřinu je výrazně vyšší než loni a rád bych změnil dodavatele.",
          "ty": true,
          "pron": "já MAJne ŠTRÓMrechnung ist DOJTlich HÖer als im LECten JÁR unt ich MÖCHte GERN VEkseln",
          "wrong": [
            "Nein, ich rufe wegen einer Pizza an.",
            "Ich bin gestern spät nach Hause gekommen."
          ]
        },
        {
          "who": "Berater",
          "en": "Verstehe. Wie hoch war Ihr Verbrauch im letzten Jahr?",
          "cs": "Rozumím. Jaká byla vaše spotřeba v loňském roce?",
          "ty": false,
          "pron": "ferŠTÉe VÍ hóch vár ír ferBRAUCH im LECten JÁR"
        },
        {
          "who": "Ty",
          "en": "Ungefähr dreitausend Kilowattstunden. Ich wohne allein in einer Dreizimmerwohnung.",
          "cs": "Přibližně tři tisíce kilowatthodin. Bydlím sám v bytě o třech pokojích.",
          "ty": true,
          "pron": "UNgefér drajTAUzent kiloVATštunden ich VÓne aLAJN in AJner DRAJcimerVÓnung",
          "wrong": [
            "Ich möchte zwei Fahrkarten kaufen.",
            "Mein Bruder ist Arzt."
          ]
        },
        {
          "who": "Berater",
          "en": "Dann hätten wir einen Ökostromtarif mit einem günstigen Preis für das erste Jahr.",
          "cs": "Pak bychom měli tarif zelené elektřiny s výhodnou cenou na první rok.",
          "ty": false,
          "pron": "DAN HETen vír AJnen ÖkoŠTRÓMtaríf mit AJnem GÜNstigen PRAJS FÜR das ERste JÁR"
        },
        {
          "who": "Ty",
          "en": "Ökostrom finde ich gut. Gibt es eine lange Vertragsbindung?",
          "cs": "Zelená elektřina se mi líbí. Je tam dlouhá vázanost smlouvy?",
          "ty": true,
          "pron": "ÖkoŠTRÓM FINde ich GÚT gípt es AJne LANge ferTRÁKSbindung",
          "wrong": [
            "Ich trinke lieber Saft.",
            "Heute ist Sonntag."
          ]
        },
        {
          "who": "Berater",
          "en": "Nein, nur zwölf Monate, und bei Preiserhöhungen können Sie sofort kündigen.",
          "cs": "Ne, jen dvanáct měsíců a při zvýšení cen můžete okamžitě vypovědět.",
          "ty": false,
          "pron": "najn NÚR CVÖLF MÓnate unt baj PRAJSerhöungen KÖnen zí zoFORT KÜNdigen"
        },
        {
          "who": "Ty",
          "en": "Das ist ein gutes Argument. Was muss ich selbst erledigen, wenn ich wechsle?",
          "cs": "To je dobrý argument. Co musím sám zařídit, když změním dodavatele?",
          "ty": true,
          "pron": "das ist ajn GÚtes argüMENT VAS mus ich zelpst erLÉdigen VEN ich VEksle",
          "wrong": [
            "Ich war vorgestern im Theater.",
            "Die Tomaten sind frisch."
          ]
        },
        {
          "who": "Berater",
          "en": "Nichts, wir kümmern uns um die Kündigung beim alten Anbieter. Sie brauchen nur Ihre Zählernummer.",
          "cs": "Nic, o výpověď u starého dodavatele se postaráme. Potřebujeme jen číslo vašeho elektroměru.",
          "ty": false,
          "pron": "nichts vír KÜmern uns um die KÜNdigung bajm ALten ANbíter zí BRAUchen NÚR Íre CÉlernumer"
        },
        {
          "who": "Ty",
          "en": "Die habe ich hier. Dann machen wir den Wechsel gleich.",
          "cs": "To mám tady. Tak změnu hned uděláme.",
          "ty": true,
          "pron": "die HÁbe ich HÍR DAN MAchen vír dén VEksel glajch",
          "wrong": [
            "Ich wohne im vierten Stock.",
            "Schönes Wochenende noch!"
          ]
        }
      ]
    },
    {
      "id": "d62",
      "level": "B2",
      "title": "Der Mietvertrag",
      "lines": [
        {
          "who": "Vermieter",
          "en": "Hier ist der Mietvertrag. Bitte lesen Sie ihn in Ruhe durch.",
          "cs": "Tady je nájemní smlouva. Přečtěte si ji prosím v klidu.",
          "ty": false,
          "pron": "HÍR ist der MÍTfertrák BITe LÉzen zí ín in RÚe durch"
        },
        {
          "who": "Ty",
          "en": "Danke. Muss ich eine Kaution bezahlen?",
          "cs": "Děkuji. Musím zaplatit kauci?",
          "ty": true,
          "pron": "DANke mus ich AJne kaucJÓN beCÁlen",
          "wrong": [
            "Der Kaffee schmeckt heute gut.",
            "Ich fahre morgen nach Berlin."
          ]
        },
        {
          "who": "Vermieter",
          "en": "Ja, drei Monatsmieten. Das Geld bekommen Sie beim Auszug zurück.",
          "cs": "Ano, tři měsíční nájmy. Peníze dostanete zpět při vystěhování.",
          "ty": false,
          "pron": "já DRAJ MÓnatsmíten das GELT beKOmen zí bajm AUScuk cuRÜK"
        },
        {
          "who": "Ty",
          "en": "Gut. Und wie lange ist die Kündigungsfrist?",
          "cs": "Dobře. A jak dlouhá je výpovědní lhůta?",
          "ty": true,
          "pron": "GÚT unt VÍ LANge ist die KÜNdigungsfrist",
          "wrong": [
            "Meine Schwester arbeitet in einer Bank.",
            "Das Wetter ist heute wunderbar."
          ]
        },
        {
          "who": "Vermieter",
          "en": "Drei Monate zum Monatsende. Das steht in Paragraf zwölf.",
          "cs": "Tři měsíce ke konci měsíce. Je to v paragrafu dvanáct.",
          "ty": false,
          "pron": "DRAJ MÓnate cum MÓnatsende das štét in paraGRÁF CVÖLF"
        },
        {
          "who": "Ty",
          "en": "Und wer ist für die Reparaturen verantwortlich, wenn etwas kaputtgeht?",
          "cs": "A kdo odpovídá za opravy, když se něco pokazí?",
          "ty": true,
          "pron": "unt VÉR ist FÜR die reparaTÚren ferANTvortlich VEN ETvas kaPUTgét",
          "wrong": [
            "Ich trinke meinen Tee ohne Zucker.",
            "Der Film beginnt um acht Uhr."
          ]
        },
        {
          "who": "Vermieter",
          "en": "Kleine Reparaturen zahlen Sie selbst, große übernehme ich.",
          "cs": "Malé opravy platíte sami, velké převezmu já.",
          "ty": false,
          "pron": "KLAJne reparaTÚren CÁlen zí zelpst GRÓse überNÉme ich"
        },
        {
          "who": "Ty",
          "en": "Das ist fair. Darf ich in der Wohnung ein paar Wände streichen?",
          "cs": "To je fér. Smím v bytě vymalovat pár stěn?",
          "ty": true,
          "pron": "das ist fér darf ich in der VÓnung ajn PÁR VENde ŠTRAJchen",
          "wrong": [
            "Ich esse am liebsten Nudeln.",
            "Die Straße ist heute sehr voll."
          ]
        },
        {
          "who": "Vermieter",
          "en": "Ja, aber beim Auszug müssen die Wände wieder weiß sein.",
          "cs": "Ano, ale při vystěhování musí být stěny zase bílé.",
          "ty": false,
          "pron": "já ÁBer bajm AUScuk MÜsen die VENde VÍder VAJS ZAJN"
        },
        {
          "who": "Ty",
          "en": "Einverstanden. Dann unterschreibe ich den Vertrag gleich hier.",
          "cs": "Souhlasím. Tak smlouvu podepíšu hned tady.",
          "ty": true,
          "pron": "AJNferštanden DAN unterŠRAJbe ich dén ferTRÁK glajch HÍR",
          "wrong": [
            "Ich hätte gern eine Tasse Kaffee.",
            "Entschuldigung, wo ist die Toilette?"
          ]
        }
      ]
    },
    {
      "id": "d63",
      "level": "B2",
      "title": "Beschwerde über Lärm",
      "lines": [
        {
          "who": "Nachbarin",
          "en": "Guten Abend! Ist alles in Ordnung? Sie sehen ärgerlich aus.",
          "cs": "Dobrý večer! Je všechno v pořádku? Vypadáte rozzlobeně.",
          "ty": false,
          "pron": "gúten Ábent ist Ales in ORDnung zí ZÉen ERgerlich aus"
        },
        {
          "who": "Ty",
          "en": "Ehrlich gesagt, nein. Die Musik von oben war gestern bis Mitternacht zu hören.",
          "cs": "Upřímně řečeno, ne. Hudba shora byla včera slyšet do půlnoci.",
          "ty": true,
          "pron": "ÉRlich geZÁKT najn die muZÍK fon Óben vár GESTern bis MItenacht cú HÖren",
          "wrong": [
            "Danke, ich habe schon gegessen.",
            "Nein, ich fahre nicht in den Urlaub."
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Das tut mir leid. Das sind die neuen Nachbarn, sie sind erst letzte Woche eingezogen.",
          "cs": "To mě mrzí. To jsou noví sousedé, nastěhovali se teprve minulý týden.",
          "ty": false,
          "pron": "das tút mír lajt das zint die NOJen NACHbarn zí zint erst LECte VOche AJNgecógen"
        },
        {
          "who": "Ty",
          "en": "Haben Sie schon mit ihnen gesprochen?",
          "cs": "Mluvila jste už s nimi?",
          "ty": true,
          "pron": "HÁben zí ŠÓN mit ÍNen geŠPROchen",
          "wrong": [
            "Ich habe morgen einen Termin.",
            "Wie viel kostet der Apfel?"
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Noch nicht, aber ich könnte mit Ihnen hingehen, wenn Sie wollen.",
          "cs": "Ještě ne, ale mohla bych jít s vámi, jestli chcete.",
          "ty": false,
          "pron": "NOCH nicht ÁBer ich KÖNte mit ÍNen HINgéen VEN zí VOlen"
        },
        {
          "who": "Ty",
          "en": "Das ist nett von Ihnen. Ich würde lieber erst allein mit ihnen reden.",
          "cs": "To je od vás milé. Raději bych s nimi nejdřív promluvil sám.",
          "ty": true,
          "pron": "das ist NET fon ÍNen ich VÜRde LÍber erst aLAJN mit ÍNen RÉden",
          "wrong": [
            "Ich kaufe morgen ein neues Fahrrad.",
            "Der Bus kommt in fünf Minuten."
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Gute Idee. Sagen Sie ihnen freundlich, dass die Hausordnung ab zweiundzwanzig Uhr Ruhe vorschreibt.",
          "cs": "Dobrý nápad. Řekněte jim přátelsky, že domovní řád předepisuje klid od dvaceti dvou hodin.",
          "ty": false,
          "pron": "gúte iDÉ ZÁgen zí ÍNen FROJNTlich DAS die HAUSordnung ap CVAJundcvancich ÚR RÚe FÓRšrajpt"
        },
        {
          "who": "Ty",
          "en": "Das mache ich. Ich hoffe, dass wir das Problem ohne Streit lösen können.",
          "cs": "Udělám to. Doufám, že problém vyřešíme bez hádky.",
          "ty": true,
          "pron": "das MAche ich ich HOfe DAS vír das proBLÉM ÓNe ŠTRAJT LÖzen KÖnen",
          "wrong": [
            "Ich habe leider kein Geld dabei.",
            "Im Sommer fahren wir ans Meer."
          ]
        },
        {
          "who": "Nachbarin",
          "en": "Bestimmt. Wenn es nicht klappt, sagen Sie mir Bescheid.",
          "cs": "Určitě. Kdyby to nevyšlo, dejte mi vědět.",
          "ty": false,
          "pron": "beŠTIMT VEN es nicht klapt ZÁgen zí mír beŠAJT"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank für Ihre Hilfe. Einen schönen Abend noch!",
          "cs": "Mnohokrát děkuji za pomoc. Ještě hezký večer!",
          "ty": true,
          "pron": "FÍlen DANK FÜR Íre HILfe AJnen ŠÖnen Ábent NOCH",
          "wrong": [
            "Ich nehme den Fisch, bitte.",
            "Wo ist die nächste Apotheke?"
          ]
        }
      ]
    },
    {
      "id": "d64",
      "level": "B2",
      "title": "Rückenschmerzen beim Hausarzt",
      "lines": [
        {
          "who": "Arzt",
          "en": "Guten Morgen. Was führt Sie zu mir?",
          "cs": "Dobré ráno. Co vás ke mně přivádí?",
          "ty": false,
          "pron": "gúten MORgen VAS FÜRT zí cú mír"
        },
        {
          "who": "Ty",
          "en": "Ich habe seit einer Woche starke Rückenschmerzen, besonders morgens.",
          "cs": "Už týden mě silně bolí záda, zvlášť ráno.",
          "ty": true,
          "pron": "ich HÁbe zajt AJner VOche ŠTARke RÜkenšmercen beZONders MORgens",
          "wrong": [
            "Ich möchte bitte einen Tisch reservieren.",
            "Ich habe mein Handy zu Hause vergessen."
          ]
        },
        {
          "who": "Arzt",
          "en": "Haben Sie in letzter Zeit schwer gehoben oder lange am Schreibtisch gesessen?",
          "cs": "Zvedal jste v poslední době těžké věci, nebo dlouho seděl u stolu?",
          "ty": false,
          "pron": "HÁben zí in LECter cajt švér geHÓben Óder LANge am ŠRAJPtiš geZEsen"
        },
        {
          "who": "Ty",
          "en": "Ich sitze den ganzen Tag am Computer und mache kaum Sport.",
          "cs": "Sedím celý den u počítače a téměř nesportuji.",
          "ty": true,
          "pron": "ich ZIce dén GANcen TÁK am komPJUter unt MAche KAUM ŠPORT",
          "wrong": [
            "Ich habe gestern Nudeln gekocht.",
            "Meine Wohnung ist im dritten Stock."
          ]
        },
        {
          "who": "Arzt",
          "en": "Das ist wahrscheinlich die Ursache. Ich untersuche Sie jetzt kurz. Tut es hier weh?",
          "cs": "To je pravděpodobně příčina. Teď vás krátce vyšetřím. Bolí to tady?",
          "ty": false,
          "pron": "das ist várŠAJNlich die ÚRzache ich unterZÚche zí JECT kurc tút es HÍR vé"
        },
        {
          "who": "Ty",
          "en": "Ja, genau da. Es zieht bis ins Bein.",
          "cs": "Ano, právě tady. Táhne se to až do nohy.",
          "ty": true,
          "pron": "já geNAU dá es cít bis ins BAJN",
          "wrong": [
            "Nein, ich nehme keinen Zucker.",
            "Das Zimmer ist leider schon besetzt."
          ]
        },
        {
          "who": "Arzt",
          "en": "Ich verschreibe Ihnen eine Salbe und Physiotherapie. Bewegen Sie sich mehr!",
          "cs": "Předepíšu vám mast a fyzioterapii. Více se hýbejte!",
          "ty": false,
          "pron": "ich ferŠRAJbe ÍNen AJne ZALbe unt fyzioterAPÍ beVÉgen zí zich mér"
        },
        {
          "who": "Ty",
          "en": "Kann ich trotzdem arbeiten, oder brauche ich eine Krankschreibung?",
          "cs": "Mohu přesto pracovat, nebo potřebuji neschopenku?",
          "ty": true,
          "pron": "kan ich TROCdém ARbajten Óder BRAUche ich AJne KRANKšrajbung",
          "wrong": [
            "Ich fahre meistens mit dem Zug.",
            "Das Konzert war einfach wunderbar."
          ]
        },
        {
          "who": "Arzt",
          "en": "Ich schreibe Sie für drei Tage krank. Kommen Sie danach noch einmal zur Kontrolle.",
          "cs": "Napíšu vás na tři dny marodit. Potom přijďte ještě na kontrolu.",
          "ty": false,
          "pron": "ich ŠRAJbe zí FÜR DRAJ TÁge KRANK KOmen zí daNÁCH NOCH AJNmál cur konTROle"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank, Herr Doktor. Dann komme ich nächste Woche wieder.",
          "cs": "Děkuji, pane doktore. Tak přijdu příští týden zase.",
          "ty": true,
          "pron": "FÍlen DANK her DOKtór DAN KOme ich NÉCHste VOche VÍder",
          "wrong": [
            "Guten Appetit, bis später!",
            "Ich suche eine Jacke in Größe M."
          ]
        }
      ]
    },
    {
      "id": "d65",
      "level": "B2",
      "title": "Beim Zahnarzt",
      "lines": [
        {
          "who": "Zahnärztin",
          "en": "Guten Tag, nehmen Sie bitte Platz. Wo haben Sie Schmerzen?",
          "cs": "Dobrý den, posaďte se prosím. Kde vás bolí?",
          "ty": false,
          "pron": "gúten TÁK NÉmen zí BITe PLAC VÓ HÁben zí ŠMERcen"
        },
        {
          "who": "Ty",
          "en": "Links unten. Ein Zahn reagiert stark auf Kälte und Süßes.",
          "cs": "Vlevo dole. Jeden zub silně reaguje na chlad a sladké.",
          "ty": true,
          "pron": "LINKS UNten ajn CÁN reaGÍRT štark auf KELte unt ZÜses",
          "wrong": [
            "Ich spiele gern Fußball am Wochenende.",
            "Der Zug hat zehn Minuten Verspätung."
          ]
        },
        {
          "who": "Zahnärztin",
          "en": "Machen Sie bitte den Mund weit auf. Hm, hier sehe ich ein Loch.",
          "cs": "Otevřete prosím ústa dokořán. Hm, tady vidím kaz.",
          "ty": false,
          "pron": "MAchen zí BITe dén MUNT VAJT auf hm HÍR ZÉe ich ajn loch"
        },
        {
          "who": "Ty",
          "en": "Muss der Zahn gezogen werden?",
          "cs": "Musí se zub vytrhnout?",
          "ty": true,
          "pron": "mus der CÁN geCÓgen VÉRden",
          "wrong": [
            "Ich habe vergessen, Brot zu kaufen.",
            "Mein Bruder wohnt in Hamburg."
          ]
        },
        {
          "who": "Zahnärztin",
          "en": "Nein, ich kann ihn füllen. Ich gebe Ihnen eine Spritze, damit Sie nichts spüren.",
          "cs": "Ne, mohu ho plombovat. Dám vám injekci, abyste nic necítil.",
          "ty": false,
          "pron": "najn ich kan ín FÜlen ich GÉbe ÍNen AJne ŠPRIce daMIT zí nichts ŠPÜren"
        },
        {
          "who": "Ty",
          "en": "Gut. Wie lange dauert die Behandlung ungefähr?",
          "cs": "Dobře. Jak dlouho léčba přibližně trvá?",
          "ty": true,
          "pron": "GÚT VÍ LANge DAUert die beHANdlung UNgefér",
          "wrong": [
            "Ich trage gern eine Mütze im Winter.",
            "Die Suppe ist leider zu salzig."
          ]
        },
        {
          "who": "Zahnärztin",
          "en": "Etwa zwanzig Minuten. Danach essen Sie bitte zwei Stunden lang nichts.",
          "cs": "Asi dvacet minut. Potom dvě hodiny nic nejezte.",
          "ty": false,
          "pron": "ETva CVANcich miNÚten daNÁCH ESen zí BITe CVAJ ŠTUNden lang nichts"
        },
        {
          "who": "Ty",
          "en": "Verstanden. Soll ich in nächster Zeit etwas anders machen?",
          "cs": "Rozumím. Mám v nejbližší době dělat něco jinak?",
          "ty": true,
          "pron": "ferŠTANden zol ich in NECHSter cajt ETvas ANders MAchen",
          "wrong": [
            "Ich lese lieber Bücher als Zeitungen.",
            "Nächstes Jahr ziehe ich nach Wien."
          ]
        },
        {
          "who": "Zahnärztin",
          "en": "Putzen Sie die Zähne zweimal täglich und kommen Sie alle sechs Monate zur Kontrolle.",
          "cs": "Čistěte si zuby dvakrát denně a choďte každého půl roku na kontrolu.",
          "ty": false,
          "pron": "PUcen zí die CÉne CVAJmál TEKlich unt KOmen zí ALe ZEKS MÓnate cur konTROle"
        },
        {
          "who": "Ty",
          "en": "Das werde ich machen. Vielen Dank für die Behandlung!",
          "cs": "To budu dělat. Děkuji za ošetření!",
          "ty": true,
          "pron": "das VERde ich MAchen FÍlen DANK FÜR die beHANdlung",
          "wrong": [
            "Wir treffen uns um halb neun.",
            "Das Wetter wird morgen schlechter."
          ]
        }
      ]
    },
    {
      "id": "d66",
      "level": "B2",
      "title": "Die Bankkarte wurde eingezogen",
      "lines": [
        {
          "who": "Beraterin",
          "en": "Guten Tag, wie kann ich Ihnen helfen?",
          "cs": "Dobrý den, jak vám mohu pomoci?",
          "ty": false,
          "pron": "gúten TÁK VÍ kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Meine Bankkarte wurde im Automaten eingezogen, und ich weiß nicht, warum.",
          "cs": "Moje bankovní karta se zasekla v bankomatu a nevím proč.",
          "ty": true,
          "pron": "MAJne BANKkarte VURde im autoMÁten AJNgecógen unt ich VAJS nicht vaRUM",
          "wrong": [
            "Ich hätte gern zwei Brötchen.",
            "Ich bin heute sehr früh aufgestanden."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Haben Sie dreimal die falsche Geheimzahl eingegeben?",
          "cs": "Zadal jste třikrát špatné PIN?",
          "ty": false,
          "pron": "HÁben zí DRAJmál die FALše geHAJMcál AJNgegében"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe die Zahl verwechselt, weil ich eine neue Karte bekommen habe.",
          "cs": "Ano, spletl jsem číslo, protože jsem dostal novou kartu.",
          "ty": true,
          "pron": "já ich HÁbe die CÁL ferVEkselt VAJL ich AJne NOJe KARte beKOmen HÁbe",
          "wrong": [
            "Nein, ich fahre nicht mit dem Auto.",
            "Das Hotel liegt direkt am Strand."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Das passiert häufig. Ich bestelle Ihnen sofort eine Ersatzkarte.",
          "cs": "To se stává často. Hned vám objednám náhradní kartu.",
          "ty": false,
          "pron": "das paSÍRT HOJfich ich beŠTEle ÍNen zoFORT AJne erZACkarte"
        },
        {
          "who": "Ty",
          "en": "Wie lange dauert das, und kostet es etwas?",
          "cs": "Jak dlouho to trvá a stojí to něco?",
          "ty": true,
          "pron": "VÍ LANge DAUert das unt KOstet es ETvas",
          "wrong": [
            "Ich gehe jeden Tag spazieren.",
            "Mein Zug fährt von Gleis drei."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Fünf Werktage, und es ist kostenlos, weil es nicht Ihre Schuld war.",
          "cs": "Pět pracovních dnů a je to zdarma, protože to nebyla vaše vina.",
          "ty": false,
          "pron": "FÜNF VERKtáge unt es ist KOstenlós VAJL es nicht Íre šult vár"
        },
        {
          "who": "Ty",
          "en": "Super. Kann ich in der Zwischenzeit trotzdem Geld abheben?",
          "cs": "Skvělé. Mohu mezitím přesto vybírat peníze?",
          "ty": true,
          "pron": "ZÚper kan ich in der CVIšencajt TROCdém GELT APhében",
          "wrong": [
            "Ich habe keine Geschwister.",
            "Der Film hat mir gut gefallen."
          ]
        },
        {
          "who": "Beraterin",
          "en": "Ja, am Schalter mit Ihrem Ausweis, oder Sie nutzen die App auf dem Handy.",
          "cs": "Ano, na přepážce s občanským průkazem, nebo použijte aplikaci v telefonu.",
          "ty": false,
          "pron": "já am ŠAlter mit ÍRem AUSvajs Óder zí NUcen die EP auf dém HENdi"
        },
        {
          "who": "Ty",
          "en": "Ich nehme die App. Danke für die schnelle Hilfe!",
          "cs": "Použiju aplikaci. Děkuji za rychlou pomoc!",
          "ty": true,
          "pron": "ich NÉme die EP DANke FÜR die ŠNELe HILfe",
          "wrong": [
            "Ich nehme die Suppe und einen Salat.",
            "Wie komme ich zum Marktplatz?"
          ]
        }
      ]
    },
    {
      "id": "d67",
      "level": "B2",
      "title": "Umziehen und ummelden",
      "lines": [
        {
          "who": "Beamter",
          "en": "Nummer dreiundvierzig, bitte! Was kann ich für Sie tun?",
          "cs": "Číslo čtyřicet tři, prosím! Co pro vás mohu udělat?",
          "ty": false,
          "pron": "NUmer DRAJuntfírcich BITe VAS kan ich FÜR zí tún"
        },
        {
          "who": "Ty",
          "en": "Ich bin vor zwei Wochen umgezogen und möchte mich ummelden.",
          "cs": "Před dvěma týdny jsem se přestěhoval a chci změnit trvalé bydliště.",
          "ty": true,
          "pron": "ich bin fór CVAJ VOchen UMgecógen unt MÖCHte mich UMmelden",
          "wrong": [
            "Ich möchte ein Zugticket nach München.",
            "Ich suche eine Apotheke."
          ]
        },
        {
          "who": "Beamter",
          "en": "Haben Sie das ausgefüllte Formular und Ihren Mietvertrag dabei?",
          "cs": "Máte s sebou vyplněný formulář a nájemní smlouvu?",
          "ty": false,
          "pron": "HÁben zí das AUSgefülte formuLÁR unt Íren MÍTfertrák daBAJ"
        },
        {
          "who": "Ty",
          "en": "Das Formular ja, aber den Vertrag habe ich leider zu Hause gelassen.",
          "cs": "Formulář ano, ale smlouvu jsem bohužel nechal doma.",
          "ty": true,
          "pron": "das formuLÁR já ÁBer dén ferTRÁK HÁbe ich LAJder cú HAUze geLAsen",
          "wrong": [
            "Ja, ich nehme ihn mit Milch.",
            "Nein, ich esse kein Fleisch."
          ]
        },
        {
          "who": "Beamter",
          "en": "Ohne Vertrag geht es nicht, aber Sie brauchen nur die Bestätigung des Vermieters.",
          "cs": "Bez smlouvy to nejde, ale stačí potvrzení pronajímatele.",
          "ty": false,
          "pron": "ÓNe ferTRÁK GÉT es nicht ÁBer zí BRAUchen NÚR die beŠTÉtigung des ferMÍters"
        },
        {
          "who": "Ty",
          "en": "Die habe ich auf dem Handy. Kann ich sie Ihnen zeigen?",
          "cs": "To mám v telefonu. Mohu vám ho ukázat?",
          "ty": true,
          "pron": "die HÁbe ich auf dém HENdi kan ich zí ÍNen CAJgen",
          "wrong": [
            "Mein Handy kostet dreihundert Euro.",
            "Ich habe Hunger und Durst."
          ]
        },
        {
          "who": "Beamter",
          "en": "Das reicht. Sie bekommen in einigen Tagen eine Bestätigung per Post.",
          "cs": "To stačí. Za několik dní dostanete potvrzení poštou.",
          "ty": false,
          "pron": "das rajcht zí beKOmen in AJnigen TÁgen AJne beŠTÉtigung per POST"
        },
        {
          "who": "Ty",
          "en": "Muss ich auch meinen Ausweis ändern lassen?",
          "cs": "Musím si nechat změnit i občanský průkaz?",
          "ty": true,
          "pron": "mus ich AUCH MAJnen AUSvajs ENdern LAsen",
          "wrong": [
            "Ich war noch nie in Italien.",
            "Die Wohnung hat einen Balkon."
          ]
        },
        {
          "who": "Beamter",
          "en": "Nein, es wird nur die neue Adresse eingetragen. Das ist kostenlos.",
          "cs": "Ne, zapíše se jen nová adresa. To je zdarma.",
          "ty": false,
          "pron": "najn es virt NÚR die NOJe aDRESe AJNgetrágen das ist KOstenlós"
        },
        {
          "who": "Ty",
          "en": "Wunderbar, dann bin ich fertig. Vielen Dank und auf Wiedersehen!",
          "cs": "Skvělé, tak jsem hotov. Děkuji a na shledanou!",
          "ty": true,
          "pron": "VUNderbár DAN bin ich FERtich FÍlen DANK unt auf VÍderzéen",
          "wrong": [
            "Zwei Kaffee, bitte.",
            "Ich bin Lehrer von Beruf."
          ]
        }
      ]
    },
    {
      "id": "d68",
      "level": "B2",
      "title": "Den Handyvertrag wechseln",
      "lines": [
        {
          "who": "Verkäufer",
          "en": "Willkommen im Mobilfunkshop! Wie kann ich Ihnen helfen?",
          "cs": "Vítejte v obchodě s mobilními službami! Jak vám mohu pomoci?",
          "ty": false,
          "pron": "vilKOmen im moBÍLfunkšop VÍ kan ich ÍNen HElfen"
        },
        {
          "who": "Ty",
          "en": "Ich bin mit meinem Tarif nicht mehr zufrieden und überlege, den Anbieter zu wechseln.",
          "cs": "Nejsem se svým tarifem už spokojen a uvažuji, že změním operátora.",
          "ty": true,
          "pron": "ich bin mit MAJnem taRÍF nicht mér cuFRÍden unt überLÉge dén ANbíter cú VEkseln",
          "wrong": [
            "Ich suche ein Geschenk für meine Mutter.",
            "Ich brauche bitte eine Tüte."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Wie viele Gigabyte verbrauchen Sie im Monat ungefähr?",
          "cs": "Kolik gigabajtů měsíčně přibližně spotřebujete?",
          "ty": false,
          "pron": "VÍ FÍle GIgabajt ferBRAUchen zí im MÓnat UNgefér"
        },
        {
          "who": "Ty",
          "en": "Meistens nur wenige, weil ich fast immer im WLAN bin.",
          "cs": "Většinou jen málo, protože jsem skoro pořád na wifi.",
          "ty": true,
          "pron": "MAJstens NÚR VÉnige VAJL ich FAST IMer im VÉlán bin",
          "wrong": [
            "Ich komme aus Prag.",
            "Mein Auto ist leider kaputt."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Dann reicht Ihnen dieser Tarif für zwanzig Euro im Monat mit fünf Gigabyte.",
          "cs": "Pak vám stačí tento tarif za dvacet eur měsíčně s pěti gigabajty.",
          "ty": false,
          "pron": "DAN rajcht ÍNen DÍzer taRÍF FÜR CVANcich OJro im MÓnat mit FÜNF GIgabajt"
        },
        {
          "who": "Ty",
          "en": "Gibt es eine Mindestvertragslaufzeit?",
          "cs": "Existuje minimální doba trvání smlouvy?",
          "ty": true,
          "pron": "gípt es AJne MINdestfertrágslaufcajt",
          "wrong": [
            "Ich habe heute frei.",
            "Es ist schon sehr spät."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Zwölf Monate, danach können Sie jederzeit monatlich kündigen.",
          "cs": "Dvanáct měsíců, potom můžete kdykoli vypovědět s měsíční lhůtou.",
          "ty": false,
          "pron": "CVÖLF MÓnate daNÁCH KÖnen zí JÉderCAJT MÓnatlich KÜNdigen"
        },
        {
          "who": "Ty",
          "en": "In Ordnung. Kann ich meine alte Nummer behalten?",
          "cs": "V pořádku. Mohu si ponechat staré číslo?",
          "ty": true,
          "pron": "in ORDnung kan ich MAJne ALte NUmer beHALten",
          "wrong": [
            "Ich trinke lieber Wasser.",
            "Wir haben Gäste zum Essen."
          ]
        },
        {
          "who": "Verkäufer",
          "en": "Ja, das geht. Wir übernehmen den ganzen Wechsel für Sie.",
          "cs": "Ano, to jde. Celou změnu za vás zařídíme.",
          "ty": false,
          "pron": "já das GÉT vír übeRNÉmen dén GANcen VEksel FÜR zí"
        },
        {
          "who": "Ty",
          "en": "Dann nehme ich den Vertrag. Wo muss ich unterschreiben?",
          "cs": "Tak tu smlouvu beru. Kde musím podepsat?",
          "ty": true,
          "pron": "DAN NÉme ich dén ferTRÁK VÓ mus ich unterŠRAJben",
          "wrong": [
            "Wie viel Uhr ist es?",
            "Das Fenster ist offen."
          ]
        }
      ]
    },
    {
      "id": "d69",
      "level": "B2",
      "title": "In der Fahrradwerkstatt",
      "lines": [
        {
          "who": "Mechaniker",
          "en": "Hallo! Was fehlt Ihrem Fahrrad?",
          "cs": "Dobrý den! Co chybí vašemu kolu?",
          "ty": false,
          "pron": "HAlo VAS FÉLT ÍRem FÁRrat"
        },
        {
          "who": "Ty",
          "en": "Der Hinterreifen ist platt, und die Bremsen quietschen.",
          "cs": "Zadní pneumatika je prázdná a brzdy pískají.",
          "ty": true,
          "pron": "der HINterrajfen ist plat unt die BREMzen KVÍčen",
          "wrong": [
            "Ich möchte ein Eis mit Schokolade.",
            "Meine Tochter geht in die Schule."
          ]
        },
        {
          "who": "Mechaniker",
          "en": "Dann schauen wir uns beides an. Haben Sie den Reifen schon einmal geflickt?",
          "cs": "Pak se podíváme na obojí. Lepil jste už pneumatiku?",
          "ty": false,
          "pron": "DAN ŠAUen vír uns BAJdes an HÁben zí dén RAJfen ŠÓN AJNmál geFLIKT"
        },
        {
          "who": "Ty",
          "en": "Nein, das habe ich noch nie gemacht. Ich fahre das Rad jeden Tag zur Arbeit.",
          "cs": "Ne, to jsem ještě nikdy nedělal. Jezdím na kole každý den do práce.",
          "ty": true,
          "pron": "najn das HÁbe ich NOCH NÍ geMACHT ich FÁre das rát JÉden TÁK cur ARbajt",
          "wrong": [
            "Ja, ich trinke gern Tee.",
            "Der Winter ist dieses Jahr kalt."
          ]
        },
        {
          "who": "Mechaniker",
          "en": "Dann sollten wir auch die Kette ölen und die Schaltung einstellen.",
          "cs": "Pak bychom měli také namazat řetěz a seřídit řazení.",
          "ty": false,
          "pron": "DAN ZOLten vír AUCH die KEte ÖLen unt die ŠALtung AJNštelen"
        },
        {
          "who": "Ty",
          "en": "Wenn es nicht zu teuer ist, machen Sie bitte alles.",
          "cs": "Pokud to není moc drahé, udělejte prosím všechno.",
          "ty": true,
          "pron": "VEN es nicht cú TOJer ist MAchen zí BITe Ales",
          "wrong": [
            "Ich habe leider keinen Hunger.",
            "Mein Zimmer ist im ersten Stock."
          ]
        },
        {
          "who": "Mechaniker",
          "en": "Das kostet ungefähr fünfzig Euro. Das Rad ist morgen Mittag fertig.",
          "cs": "To stojí zhruba padesát eur. Kolo bude hotové zítra v poledne.",
          "ty": false,
          "pron": "das KOstet UNgefér FÜNFcich OJro das rát ist MORgen MIták FERtich"
        },
        {
          "who": "Ty",
          "en": "Morgen Mittag passt gut. Kann ich es vorher abholen, falls es früher fertig ist?",
          "cs": "Zítra v poledne se hodí. Mohu si ho vyzvednout dřív, kdyby bylo dřív hotové?",
          "ty": true,
          "pron": "MORgen MIták past GÚT kan ich es FÓRhér APhólen FALS es FRÜer FERtich ist",
          "wrong": [
            "Ich fahre morgen nach Dresden.",
            "Das Konzert war wirklich schön."
          ]
        },
        {
          "who": "Mechaniker",
          "en": "Natürlich, ich rufe Sie dann kurz an.",
          "cs": "Samozřejmě, pak vám krátce zavolám.",
          "ty": false,
          "pron": "naTÜRlich ich RÚfe zí DAN kurc an"
        },
        {
          "who": "Ty",
          "en": "Prima, vielen Dank! Dann bis morgen.",
          "cs": "Skvělé, mnohokrát děkuji! Tak zítra.",
          "ty": true,
          "pron": "PRÍma FÍlen DANK DAN bis MORgen",
          "wrong": [
            "Ich habe keinen Schlüssel.",
            "Heute gibt es Fisch."
          ]
        }
      ]
    },
    {
      "id": "d70",
      "level": "B2",
      "title": "Urlaub gemeinsam planen",
      "lines": [
        {
          "who": "Lena",
          "en": "Wo wollen wir dieses Jahr Urlaub machen? Ich würde gern ans Meer.",
          "cs": "Kam pojedeme letos na dovolenou? Já bych chtěla k moři.",
          "ty": false,
          "pron": "VÓ VOlen vír DÍzes JÁR ÚRlaup MAchen ich VÜRde GERN ans MÉR"
        },
        {
          "who": "Ty",
          "en": "Ans Meer klingt gut, aber ich möchte auch etwas sehen, nicht nur am Strand liegen.",
          "cs": "K moři zní dobře, ale chci taky něco vidět, ne jen ležet na pláži.",
          "ty": true,
          "pron": "ans MÉR klingt GÚT ÁBer ich MÖCHte AUCH ETvas ZÉen nicht NÚR am ŠTRANT LÍgen",
          "wrong": [
            "Ich habe eine Allergie gegen Nüsse.",
            "Der Bus fährt gleich ab."
          ]
        },
        {
          "who": "Lena",
          "en": "Wie wäre es mit Kroatien? Dort gibt es Strände und alte Städte.",
          "cs": "Co třeba Chorvatsko? Jsou tam pláže i stará města.",
          "ty": false,
          "pron": "VÍ VÉre es mit kroÁcien DORT gípt es ŠTRENde unt ALte ŠTETe"
        },
        {
          "who": "Ty",
          "en": "Gute Idee. Wollen wir mit dem Auto fahren oder lieber fliegen?",
          "cs": "Dobrý nápad. Pojedeme autem, nebo raději poletíme?",
          "ty": true,
          "pron": "gúte iDÉ VOlen vír mit dém AUto FÁren Óder LÍber FLÍgen",
          "wrong": [
            "Nein, ich habe schon bezahlt.",
            "Mein Lieblingsessen ist Pizza."
          ]
        },
        {
          "who": "Lena",
          "en": "Mit dem Auto ist es günstiger, und wir sind unabhängig.",
          "cs": "Autem je to levnější a jsme nezávislí.",
          "ty": false,
          "pron": "mit dém AUto ist es GÜNstiger unt vír zint UNaphengich"
        },
        {
          "who": "Ty",
          "en": "Stimmt, aber die Fahrt dauert fast zehn Stunden. Wir müssten abwechselnd fahren.",
          "cs": "To je pravda, ale cesta trvá skoro deset hodin. Museli bychom se střídat.",
          "ty": true,
          "pron": "štimt ÁBer die FÁRT DAUert FAST CÉN ŠTUNden vír MÜSten APvekselnt FÁren",
          "wrong": [
            "Ich habe im Garten gearbeitet.",
            "Die Rechnung bitte."
          ]
        },
        {
          "who": "Lena",
          "en": "Das ist kein Problem. Wir könnten unterwegs eine Nacht übernachten.",
          "cs": "To není problém. Mohli bychom cestou jednu noc přenocovat.",
          "ty": false,
          "pron": "das ist kajn proBLÉM vír KÖNten UNterVÉKS AJne NACHT überNACHten"
        },
        {
          "who": "Ty",
          "en": "Dann lass uns gleich im Internet nach einer Unterkunft suchen.",
          "cs": "Tak pojďme hned na internetu hledat ubytování.",
          "ty": true,
          "pron": "DAN las uns glajch im INternet NÁCH AJner UNterkunft ZÚchen",
          "wrong": [
            "Ich gehe jetzt schlafen.",
            "Mein Telefon ist leer."
          ]
        },
        {
          "who": "Lena",
          "en": "Gern! Ich schaue nach Ferienwohnungen, und du suchst die Route heraus.",
          "cs": "Rádo! Já se podívám po apartmánech a ty vyhledej trasu.",
          "ty": false,
          "pron": "GERN ich ŠAUe NÁCH FÉRienVÓnungen unt dú zúchst die RÚte heRAUS"
        },
        {
          "who": "Ty",
          "en": "Abgemacht. Ich freue mich schon sehr auf den Urlaub!",
          "cs": "Domluveno. Už se na dovolenou moc těším!",
          "ty": true,
          "pron": "APgemacht ich FROJe mich ŠÓN ZÉR auf dén ÚRlaup",
          "wrong": [
            "Es tut mir leid, ich bin krank.",
            "Ich wasche mir die Hände."
          ]
        }
      ]
    },
    {
      "id": "d71",
      "level": "B2",
      "title": "Anschlusszug verpasst",
      "lines": [
        {
          "who": "Angestellter",
          "en": "Guten Tag, Sie haben Ihren Anschluss verpasst?",
          "cs": "Dobrý den, zmeškal jste přípoj?",
          "ty": false,
          "pron": "gúten TÁK zí HÁben Íren ANšlus ferPAST"
        },
        {
          "who": "Ty",
          "en": "Ja, mein Zug hatte vierzig Minuten Verspätung, und der Anschlusszug ist schon weg.",
          "cs": "Ano, můj vlak měl čtyřicet minut zpoždění a přípojný vlak už odjel.",
          "ty": true,
          "pron": "já majn CÚK HATe FÍRcich miNÚten ferŠPÉtung unt der ANšluscuk ist ŠÓN VÉK",
          "wrong": [
            "Nein, ich möchte ein Brötchen.",
            "Ich suche mein Hotel."
          ]
        },
        {
          "who": "Angestellter",
          "en": "Das tut mir leid. Der nächste Zug nach Leipzig fährt in einer Stunde.",
          "cs": "To mě mrzí. Další vlak do Lipska jede za hodinu.",
          "ty": false,
          "pron": "das tút mír lajt der NÉCHste CÚK NÁCH LAJPcich FÉRT in AJner ŠTUNde"
        },
        {
          "who": "Ty",
          "en": "Ist meine Fahrkarte weiterhin gültig, oder muss ich eine neue kaufen?",
          "cs": "Je moje jízdenka dál platná, nebo musím koupit novou?",
          "ty": true,
          "pron": "ist MAJne FÁRkarte VAJterhin GÜLtich Óder mus ich AJne NOJe KAUfen",
          "wrong": [
            "Ich esse gern Äpfel.",
            "Heute scheint die Sonne."
          ]
        },
        {
          "who": "Angestellter",
          "en": "Sie ist weiterhin gültig. Bei so einer Verspätung können Sie außerdem eine Entschädigung beantragen.",
          "cs": "Je dál platná. Při takovém zpoždění můžete navíc požádat o odškodnění.",
          "ty": false,
          "pron": "zí ist VAJterhin GÜLtich baj zó AJner ferŠPÉtung KÖnen zí AUserdém AJne entŠÉdigung beANtrágen"
        },
        {
          "who": "Ty",
          "en": "Wie funktioniert das? Muss ich ein Formular ausfüllen?",
          "cs": "Jak to funguje? Musím vyplnit formulář?",
          "ty": true,
          "pron": "VÍ funkcioNÍRT das mus ich ajn formuLÁR AUSfülen",
          "wrong": [
            "Ich fahre normalerweise mit dem Rad.",
            "Der Kaffee ist zu heiß."
          ]
        },
        {
          "who": "Angestellter",
          "en": "Ja, das geht online oder hier am Schalter. Ich gebe Ihnen gleich eins mit.",
          "cs": "Ano, jde to online nebo tady na přepážce. Hned vám jeden dám.",
          "ty": false,
          "pron": "já das GÉT ONlajn Óder HÍR am ŠAlter ich GÉbe ÍNen glajch AJNS mit"
        },
        {
          "who": "Ty",
          "en": "Danke. Wo kann ich in der Zwischenzeit warten?",
          "cs": "Děkuji. Kde mohu mezitím počkat?",
          "ty": true,
          "pron": "DANke VÓ kan ich in der CVIšencajt VARten",
          "wrong": [
            "Ich habe zwei Brüder.",
            "Wir kochen heute zusammen."
          ]
        },
        {
          "who": "Angestellter",
          "en": "Im Wartebereich gegenüber gibt es Sitzplätze und einen Kaffeeautomaten.",
          "cs": "V čekárně naproti jsou místa k sezení a automat na kávu.",
          "ty": false,
          "pron": "im VARteberajch gégenÜber gípt es ZICplece unt AJnen KAfeautoMÁten"
        },
        {
          "who": "Ty",
          "en": "Gut, dann warte ich dort. Vielen Dank für Ihre Hilfe!",
          "cs": "Dobře, tak tam počkám. Děkuji za pomoc!",
          "ty": true,
          "pron": "GÚT DAN VARte ich DORT FÍlen DANK FÜR Íre HILfe",
          "wrong": [
            "Ich nehme noch ein Stück Kuchen.",
            "Das Gepäck ist sehr schwer."
          ]
        }
      ]
    },
    {
      "id": "d72",
      "level": "B2",
      "title": "Im Fitnessstudio",
      "lines": [
        {
          "who": "Trainer",
          "en": "Hallo, willkommen! Sind Sie neu bei uns?",
          "cs": "Dobrý den, vítejte! Jste u nás nový?",
          "ty": false,
          "pron": "HAlo vilKOmen zint zí NOJ baj uns"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe mich gestern angemeldet und möchte gern anfangen, regelmäßig zu trainieren.",
          "cs": "Ano, včera jsem se přihlásil a rád bych začal pravidelně cvičit.",
          "ty": true,
          "pron": "já ich HÁbe mich GESTern ANgemeldet unt MÖCHte GERN ANfangen RÉgelmésich cú trenÍren",
          "wrong": [
            "Ich esse gern Pizza.",
            "Ich fahre gleich nach Hause."
          ]
        },
        {
          "who": "Trainer",
          "en": "Super! Was ist Ihr Ziel? Wollen Sie abnehmen oder Muskeln aufbauen?",
          "cs": "Skvělé! Jaký je váš cíl? Chcete zhubnout, nebo nabrat svaly?",
          "ty": false,
          "pron": "ZÚper VAS ist ír CÍL VOlen zí APnémen Óder MUSkeln AUFbauen"
        },
        {
          "who": "Ty",
          "en": "Ich möchte vor allem fitter werden, denn mein Rücken macht mir Probleme.",
          "cs": "Chci být hlavně fit, protože mi dělají problémy záda.",
          "ty": true,
          "pron": "ich MÖCHte fór ALem FITer VÉRden DEN majn RÜken macht mír proBLÉme",
          "wrong": [
            "Ich trinke jeden Morgen Kaffee.",
            "Mein Hund heißt Bello."
          ]
        },
        {
          "who": "Trainer",
          "en": "Dann empfehle ich Ihnen zweimal pro Woche Krafttraining und einmal Schwimmen.",
          "cs": "Pak vám doporučuji dvakrát týdně silový trénink a jednou plavání.",
          "ty": false,
          "pron": "DAN empFÉle ich ÍNen CVAJmál pró VOche KRAFTtréning unt AJNmál ŠVIMen"
        },
        {
          "who": "Ty",
          "en": "Gut. Muss ich mich vor jedem Training anmelden, oder kann ich einfach kommen?",
          "cs": "Dobře. Musím se před každým tréninkem hlásit, nebo mohu prostě přijít?",
          "ty": true,
          "pron": "GÚT mus ich mich fór JÉdem TRÉning ANmelden Óder kan ich AJNfach KOmen",
          "wrong": [
            "Die Pizza war lecker.",
            "Ich stehe um sieben Uhr auf."
          ]
        },
        {
          "who": "Trainer",
          "en": "Sie können jederzeit kommen. Nur zu den Kursen sollten Sie sich vorher eintragen.",
          "cs": "Můžete přijít kdykoli. Jen na kurzy byste se měl předem zapsat.",
          "ty": false,
          "pron": "zí KÖnen JÉderCAJT KOmen NÚR cú dén KURzen ZOLten zí zich FÓRhér AJNtrágen"
        },
        {
          "who": "Ty",
          "en": "Verstanden. Kann ich heute noch eine kleine Einführung bekommen?",
          "cs": "Rozumím. Mohu ještě dnes dostat malé zaškolení?",
          "ty": true,
          "pron": "ferŠTANden kan ich HOJte NOCH AJne KLAJne AJNfürung beKOmen",
          "wrong": [
            "Ich sitze am liebsten am Fenster.",
            "Der Hund ist sehr lieb."
          ]
        },
        {
          "who": "Trainer",
          "en": "Klar! Ich zeige Ihnen gleich die wichtigsten Geräte. Folgen Sie mir bitte.",
          "cs": "Jasně! Hned vám ukážu nejdůležitější přístroje. Pojďte prosím za mnou.",
          "ty": false,
          "pron": "klár ich CAJge ÍNen glajch die VICHtigsten geRÉte FOLgen zí mír BITe"
        },
        {
          "who": "Ty",
          "en": "Sehr gern. Ich bin schon gespannt, wie es sich anfühlt.",
          "cs": "Velmi rád. Jsem už zvědavý, jaké to bude.",
          "ty": true,
          "pron": "ZÉR GERN ich bin ŠÓN geŠPANT VÍ es zich ANfült",
          "wrong": [
            "Das Wasser ist zu kalt.",
            "Ich suche meinen Schlüssel."
          ]
        }
      ]
    },
    {
      "id": "d73",
      "level": "B2",
      "title": "Eine Familienfeier planen",
      "lines": [
        {
          "who": "Julia",
          "en": "Mama wird nächsten Monat sechzig. Wir sollten eine Feier organisieren.",
          "cs": "Mamce bude příští měsíc šedesát. Měli bychom uspořádat oslavu.",
          "ty": false,
          "pron": "MAma virt NÉCHsten MÓnat ZECHcich vír ZOLten AJne FAJer organiZÍren"
        },
        {
          "who": "Ty",
          "en": "Gute Idee. Sollen wir ein Restaurant reservieren oder zu Hause feiern?",
          "cs": "Dobrý nápad. Máme zarezervovat restauraci, nebo oslavit doma?",
          "ty": true,
          "pron": "gúte iDÉ ZOlen vír ajn restoRÁN rezerVÍren Óder cú HAUze FAJern",
          "wrong": [
            "Ich esse gern Reis.",
            "Morgen regnet es bestimmt."
          ]
        },
        {
          "who": "Julia",
          "en": "Zu Hause ist es persönlicher, aber es macht viel Arbeit.",
          "cs": "Doma je to osobnější, ale dá to hodně práce.",
          "ty": false,
          "pron": "cú HAUze ist es perZÖNlicher ÁBer es macht FÍL ARbajt"
        },
        {
          "who": "Ty",
          "en": "Wir könnten Essen bestellen und nur den Kuchen selbst backen.",
          "cs": "Mohli bychom objednat jídlo a upéct jen dort.",
          "ty": true,
          "pron": "vír KÖNten ESen beŠTElen unt NÚR dén KÚchen zelpst BAken",
          "wrong": [
            "Ich spiele leider kein Instrument.",
            "Die Karten sind ausverkauft."
          ]
        },
        {
          "who": "Julia",
          "en": "Dann sollten wir die Gästeliste machen. Wie viele Leute kommen ungefähr?",
          "cs": "Pak bychom měli sestavit seznam hostů. Kolik lidí asi přijde?",
          "ty": false,
          "pron": "DAN ZOLten vír die GESteliste MAchen VÍ FÍle LOJte KOmen UNgefér"
        },
        {
          "who": "Ty",
          "en": "Mit Oma, Onkel Peter und den Cousins sind es etwa fünfzehn.",
          "cs": "S babičkou, strýcem Peterem a bratranci je to asi patnáct.",
          "ty": true,
          "pron": "mit ÓMa ONkel PÉter unt dén kuZÉNS zint es ETva FÜNFcén",
          "wrong": [
            "Ich wohne im dritten Stock.",
            "Das ist ein schönes Bild."
          ]
        },
        {
          "who": "Julia",
          "en": "Perfekt. Ich schreibe die Einladungen, und du kümmerst dich um das Geschenk.",
          "cs": "Perfektní. Já napíšu pozvánky a ty se postaráš o dárek.",
          "ty": false,
          "pron": "perFEKT ich ŠRAJbe die AJNládungen unt dú KÜMerst dich um das geŠENK"
        },
        {
          "who": "Ty",
          "en": "Einverstanden. Was meinst du, was würde Mama gefallen?",
          "cs": "Souhlasím. Co myslíš, co by mamku potěšilo?",
          "ty": true,
          "pron": "AJNferštanden VAS majnst dú VAS VÜRde MAma geFAlen",
          "wrong": [
            "Ich habe keinen Termin.",
            "Das Auto steht vor der Tür."
          ]
        },
        {
          "who": "Julia",
          "en": "Sie wünscht sich schon lange eine Reise. Wir könnten zusammenlegen.",
          "cs": "Už dlouho si přeje výlet. Mohli bychom se složit.",
          "ty": false,
          "pron": "zí vünšt zich ŠÓN LANge AJne RAJze vír KÖNten cuZAmenlégen"
        },
        {
          "who": "Ty",
          "en": "Das ist eine tolle Idee! Ich rechne aus, wie viel jeder von uns zahlen muss.",
          "cs": "To je skvělý nápad! Spočítám, kolik musí každý z nás zaplatit.",
          "ty": true,
          "pron": "das ist AJne TOle iDÉ ich RECHne aus VÍ FÍL JÉder fon uns CÁlen mus",
          "wrong": [
            "Ich nehme noch ein Brötchen.",
            "Bitte sprechen Sie langsamer."
          ]
        }
      ]
    },
    {
      "id": "d74",
      "level": "B2",
      "title": "Über Umweltschutz diskutieren",
      "lines": [
        {
          "who": "Max",
          "en": "Hast du gelesen, dass die Stadt mehr Fahrradwege bauen will?",
          "cs": "Četl jsi, že město chce stavět víc cyklostezek?",
          "ty": false,
          "pron": "hast dú geLÉzen DAS die ŠTAT mér FÁRrádvége BAUen vil"
        },
        {
          "who": "Ty",
          "en": "Ja, ich finde das sehr sinnvoll, weil es weniger Autoverkehr in der Innenstadt gibt.",
          "cs": "Ano, považuji to za velmi rozumné, protože v centru bude méně automobilové dopravy.",
          "ty": true,
          "pron": "já ich FINde das ZÉR ZINfol VAJL es VÉniger AUtoferkér in der INenštat gípt",
          "wrong": [
            "Nein, ich lese nie die Speisekarte.",
            "Meine Katze schläft den ganzen Tag."
          ]
        },
        {
          "who": "Max",
          "en": "Aber viele Leute brauchen das Auto für den Weg zur Arbeit.",
          "cs": "Ale spousta lidí potřebuje auto na cestu do práce.",
          "ty": false,
          "pron": "ÁBer FÍle LOJte BRAUchen das AUto FÜR dén VÉK cur ARbajt"
        },
        {
          "who": "Ty",
          "en": "Das stimmt, trotzdem könnten viele mit Bus und Bahn fahren, wenn die Fahrkarten billiger wären.",
          "cs": "To je pravda, přesto by mohlo mnoho lidí jezdit autobusem a vlakem, kdyby jízdenky byly levnější.",
          "ty": true,
          "pron": "das štimt TROCdém KÖNten FÍle mit BUS unt bán FÁren VEN die FÁRkarten BILiger VÉren",
          "wrong": [
            "Ich habe keine Lust auf Fisch.",
            "Gestern war es sehr heiß."
          ]
        },
        {
          "who": "Max",
          "en": "Das sehe ich auch so. Was tust du persönlich für die Umwelt?",
          "cs": "To vidím také tak. Co děláš ty osobně pro životní prostředí?",
          "ty": false,
          "pron": "das ZÉe ich AUCH zó VAS túst dú perZÖNlich FÜR die UMvelt"
        },
        {
          "who": "Ty",
          "en": "Ich trenne den Müll, kaufe regional ein und fahre fast nur mit dem Rad.",
          "cs": "Třídím odpad, nakupuji regionálně a jezdím téměř jen na kole.",
          "ty": true,
          "pron": "ich TREne dén MÜL KAUfe regioNÁL ajn unt FÁre FAST NÚR mit dém rát",
          "wrong": [
            "Ich war gestern im Kino.",
            "Der Zug fährt um acht."
          ]
        },
        {
          "who": "Max",
          "en": "Ich würde gern mehr tun, aber Bioprodukte sind mir oft zu teuer.",
          "cs": "Chtěl bych dělat víc, ale bioprodukty jsou mi často příliš drahé.",
          "ty": false,
          "pron": "ich VÜRde GERN mér tún ÁBer BÍoprodukte zint mír OFT cú TOJer"
        },
        {
          "who": "Ty",
          "en": "Man muss nicht alles perfekt machen. Schon kleine Schritte helfen.",
          "cs": "Nemusí se dělat všechno dokonale. Už malé kroky pomáhají.",
          "ty": true,
          "pron": "man mus nicht Ales perFEKT MAchen ŠÓN KLAJne ŠRITe HElfen",
          "wrong": [
            "Ich bin leider allergisch gegen Katzen.",
            "Das Essen war ausgezeichnet."
          ]
        },
        {
          "who": "Max",
          "en": "Da hast du recht. Ich fange gleich damit an und nehme morgen das Rad.",
          "cs": "Máš pravdu. Začnu hned a zítra pojedu na kole.",
          "ty": false,
          "pron": "dá hast dú RECHT ich FANge glajch daMIT an unt NÉme MORgen das rát"
        },
        {
          "who": "Ty",
          "en": "Prima, dann können wir zusammen fahren. Ich hole dich um acht Uhr ab.",
          "cs": "Skvělé, pak můžeme jet spolu. Vyzvednu tě v osm.",
          "ty": true,
          "pron": "PRÍma DAN KÖnen vír cuZAmen FÁren ich HÓle dich um ACHT ÚR ap",
          "wrong": [
            "Ich habe es leider nicht gefunden.",
            "Gute Besserung!"
          ]
        }
      ]
    },
    {
      "id": "d75",
      "level": "B2",
      "title": "Einladung zum Abendessen",
      "lines": [
        {
          "who": "Eva",
          "en": "Hast du am Samstag schon etwas vor? Wir würden dich gern zum Abendessen einladen.",
          "cs": "Máš v sobotu už něco v plánu? Rádi bychom tě pozvali na večeři.",
          "ty": false,
          "pron": "hast dú am ZAMStak ŠÓN ETvas fór vír VÜRden dich GERN cum Ábentesen AJNládn"
        },
        {
          "who": "Ty",
          "en": "Das klingt wunderbar. Um wie viel Uhr soll ich kommen?",
          "cs": "To zní báječně. V kolik mám přijít?",
          "ty": true,
          "pron": "das klingt VUNderbár um VÍ FÍL ÚR zol ich KOmen",
          "wrong": [
            "Ich war schon in Berlin.",
            "Mein Zug war pünktlich."
          ]
        },
        {
          "who": "Eva",
          "en": "Gegen sieben. Gibt es etwas, das du nicht essen darfst oder nicht magst?",
          "cs": "Kolem sedmé. Je něco, co nesmíš nebo nemáš rád?",
          "ty": false,
          "pron": "GÉgen ZÍben gípt es ETvas das dú nicht ESen darfst Óder nicht mákst"
        },
        {
          "who": "Ty",
          "en": "Ich esse alles, nur Pilze mag ich nicht besonders.",
          "cs": "Jím všechno, jen houby nemám zvlášť rád.",
          "ty": true,
          "pron": "ich ESe Ales NÚR PILce mák ich nicht beZONders",
          "wrong": [
            "Ich wohne in der Altstadt.",
            "Heute ist mein Geburtstag."
          ]
        },
        {
          "who": "Eva",
          "en": "Kein Problem, ich koche Nudeln mit Gemüse. Möchtest du etwas mitbringen?",
          "cs": "Žádný problém, uvařím těstoviny se zeleninou. Chceš něco přinést?",
          "ty": false,
          "pron": "kajn proBLÉM ich KOche NÚdeln mit geMÜze MÖCHtest dú ETvas MITbringen"
        },
        {
          "who": "Ty",
          "en": "Ich bringe eine Flasche Wein und einen Nachtisch mit.",
          "cs": "Přinesu láhev vína a zákusek.",
          "ty": true,
          "pron": "ich BRINge AJne FLAše VAJN unt AJnen NÁCHtiš mit",
          "wrong": [
            "Ich brauche eine neue Brille.",
            "Die Tür ist leider kaputt."
          ]
        },
        {
          "who": "Eva",
          "en": "Das ist lieb. Kommst du mit dem Auto, oder soll ich dich abholen?",
          "cs": "To je milé. Přijedeš autem, nebo tě mám vyzvednout?",
          "ty": false,
          "pron": "das ist líp komst dú mit dém AUto Óder zol ich dich APhólen"
        },
        {
          "who": "Ty",
          "en": "Ich komme mit der Straßenbahn, weil ich Wein trinken möchte.",
          "cs": "Přijedu tramvají, protože chci pít víno.",
          "ty": true,
          "pron": "ich KOme mit der ŠTRÁsenbán VAJL ich VAJN TRINken MÖCHte",
          "wrong": [
            "Ich habe heute Kopfschmerzen.",
            "Das Wetter war letzte Woche besser."
          ]
        },
        {
          "who": "Eva",
          "en": "Gut, dann sehen wir uns Samstag. Ich freue mich!",
          "cs": "Dobře, tak se vidíme v sobotu. Těším se!",
          "ty": false,
          "pron": "GÚT DAN ZÉen vír uns ZAMStak ich FROJe mich"
        },
        {
          "who": "Ty",
          "en": "Ich mich auch! Bis Samstag, und danke für die Einladung.",
          "cs": "Já taky! Na shledanou v sobotu a děkuji za pozvání.",
          "ty": true,
          "pron": "ich mich AUCH bis ZAMStak unt DANke FÜR die AJNládung",
          "wrong": [
            "Guten Appetit, bis später!",
            "Entschuldigung, wie viel kostet das?"
          ]
        }
      ]
    },
    {
      "id": "d76",
      "level": "B2",
      "title": "Die Rechnung im Restaurant",
      "lines": [
        {
          "who": "Kellner",
          "en": "Möchten Sie noch etwas bestellen, oder soll ich die Rechnung bringen?",
          "cs": "Dáte si ještě něco, nebo mám přinést účet?",
          "ty": false,
          "pron": "MÖCHten zí NOCH ETvas beŠTElen Óder zol ich die RECHnung BRINgen"
        },
        {
          "who": "Ty",
          "en": "Die Rechnung bitte. Wir zahlen getrennt.",
          "cs": "Účet prosím. Platíme odděleně.",
          "ty": true,
          "pron": "die RECHnung BITe vír CÁlen geTRENT",
          "wrong": [
            "Wir wohnen in einem Hotel.",
            "Der Tisch ist sehr schön."
          ]
        },
        {
          "who": "Kellner",
          "en": "Natürlich. Wer hatte die Suppe und das Schnitzel?",
          "cs": "Samozřejmě. Kdo měl polévku a řízek?",
          "ty": false,
          "pron": "naTÜRlich VÉR HATe die ZUpe unt das ŠNICl"
        },
        {
          "who": "Ty",
          "en": "Das war ich. Dazu hatte ich ein Mineralwasser.",
          "cs": "To jsem byl já. K tomu jsem měl minerálku.",
          "ty": true,
          "pron": "das vár ich daCÚ HATe ich ajn mineRÁLvaser",
          "wrong": [
            "Meine Freundin trinkt keinen Alkohol.",
            "Ich komme gleich wieder."
          ]
        },
        {
          "who": "Kellner",
          "en": "Das macht zusammen achtzehn Euro fünfzig.",
          "cs": "To dělá dohromady osmnáct eur padesát.",
          "ty": false,
          "pron": "das macht cuZAmen ACHcén OJro FÜNFcich"
        },
        {
          "who": "Ty",
          "en": "Ich glaube, hier ist ein Fehler. Das Mineralwasser steht zweimal auf der Rechnung.",
          "cs": "Myslím, že tady je chyba. Minerálka je na účtu dvakrát.",
          "ty": true,
          "pron": "ich GLAUbe HÍR ist ajn FÉler das mineRÁLvaser štét CVAJmál auf der RECHnung",
          "wrong": [
            "Die Musik ist hier zu laut.",
            "Ich hätte gern noch ein Eis."
          ]
        },
        {
          "who": "Kellner",
          "en": "Oh, Entschuldigung, Sie haben recht. Ich korrigiere das sofort.",
          "cs": "Ach, promiňte, máte pravdu. Hned to opravím.",
          "ty": false,
          "pron": "ó entŠULdigung zí HÁben RECHT ich koriGÍre das zoFORT"
        },
        {
          "who": "Ty",
          "en": "Kein Problem. Kann ich mit Karte zahlen?",
          "cs": "Nic se neděje. Mohu platit kartou?",
          "ty": true,
          "pron": "kajn proBLÉM kan ich mit KARte CÁlen",
          "wrong": [
            "Nein, ich habe keinen Hunger mehr.",
            "Das Eis war ausgezeichnet."
          ]
        },
        {
          "who": "Kellner",
          "en": "Ja, natürlich. Hier ist das Gerät. Möchten Sie einen Beleg?",
          "cs": "Ano, samozřejmě. Tady je terminál. Přejete si stvrzenku?",
          "ty": false,
          "pron": "já naTÜRlich HÍR ist das geRÉT MÖCHten zí AJnen beLÉK"
        },
        {
          "who": "Ty",
          "en": "Ja, bitte. Und hier ist noch etwas Trinkgeld für Sie.",
          "cs": "Ano, prosím. A tady je pro vás ještě něco na spropitné.",
          "ty": true,
          "pron": "já BITe unt HÍR ist NOCH ETvas TRINKgelt FÜR zí",
          "wrong": [
            "Nein, ich esse nur Gemüse.",
            "Die Suppe ist kalt."
          ]
        }
      ]
    },
    {
      "id": "d77",
      "level": "B2",
      "title": "Einen Gebrauchtwagen kaufen",
      "lines": [
        {
          "who": "Autohändler",
          "en": "Guten Tag! Interessieren Sie sich für den blauen Kombi?",
          "cs": "Dobrý den! Zajímáte se o toho modrého kombi?",
          "ty": false,
          "pron": "gúten TÁK interesÍren zí zich FÜR dén BLAUen KOMbi"
        },
        {
          "who": "Ty",
          "en": "Ja, ich habe die Anzeige im Internet gesehen. Wie viele Kilometer ist er gefahren?",
          "cs": "Ano, viděl jsem inzerát na internetu. Kolik kilometrů najel?",
          "ty": true,
          "pron": "já ich HÁbe die ANcajge im INternet geZÉen VÍ FÍle kiloMÉter ist ér geFÁren",
          "wrong": [
            "Ich habe Hunger und Durst.",
            "Der Himmel ist heute blau."
          ]
        },
        {
          "who": "Autohändler",
          "en": "Hundertzwanzigtausend, und er hat noch Garantie für ein Jahr.",
          "cs": "Sto dvacet tisíc a má ještě rok záruku.",
          "ty": false,
          "pron": "HUNdertcvancichtauzent unt ér hat NOCH garanTÍ FÜR ajn JÁR"
        },
        {
          "who": "Ty",
          "en": "Das klingt gut. Hatte das Auto schon einmal einen Unfall?",
          "cs": "To zní dobře. Mělo auto už někdy nehodu?",
          "ty": true,
          "pron": "das klingt GÚT HATe das AUto ŠÓN AJNmál AJnen UNfal",
          "wrong": [
            "Ich trinke gern Orangensaft.",
            "Die Wohnung ist zu klein."
          ]
        },
        {
          "who": "Autohändler",
          "en": "Nein, es ist unfallfrei. Die Papiere kann ich Ihnen gern zeigen.",
          "cs": "Ne, je bez nehody. Doklady vám rád ukážu.",
          "ty": false,
          "pron": "najn es ist UNfalfraj die paPÍre kan ich ÍNen GERN CAJgen"
        },
        {
          "who": "Ty",
          "en": "Gern. Kann ich auch eine Probefahrt machen?",
          "cs": "Rád. Mohu se také projet na zkoušku?",
          "ty": true,
          "pron": "GERN kan ich AUCH AJne PRÓbefárt MAchen",
          "wrong": [
            "Ich bin nicht verheiratet.",
            "Das Wochenende war lang."
          ]
        },
        {
          "who": "Autohändler",
          "en": "Natürlich, den Schlüssel hole ich gleich. Fahren Sie bitte vorsichtig.",
          "cs": "Samozřejmě, klíč hned přinesu. Jezděte prosím opatrně.",
          "ty": false,
          "pron": "naTÜRlich dén ŠLÜsel HÓle ich glajch FÁren zí BITe FÓRzichtich"
        },
        {
          "who": "Ty",
          "en": "Keine Sorge. Wenn mir das Auto gefällt, wie viel können Sie beim Preis nachlassen?",
          "cs": "Bez obav. Když se mi auto bude líbit, kolik můžete slevit z ceny?",
          "ty": true,
          "pron": "KAJne ZORge VEN mír das AUto geFELT VÍ FÍL KÖnen zí bajm PRAJS NÁCHlasen",
          "wrong": [
            "Entschuldigung, ich habe mich verspätet.",
            "Danke, ich habe schon gefrühstückt."
          ]
        },
        {
          "who": "Autohändler",
          "en": "Bei Barzahlung können wir über den Preis reden.",
          "cs": "Při platbě v hotovosti se o ceně můžeme bavit.",
          "ty": false,
          "pron": "baj BÁRcálung KÖnen vír ÜBer dén PRAJS RÉden"
        },
        {
          "who": "Ty",
          "en": "Dann schauen wir uns erst das Auto an und sprechen danach über den Preis.",
          "cs": "Tak se nejdřív podíváme na auto a potom si o ceně promluvíme.",
          "ty": true,
          "pron": "DAN ŠAUen vír uns erst das AUto an unt ŠPRECHen daNÁCH ÜBer dén PRAJS",
          "wrong": [
            "Ich nehme zwei Kilo Äpfel.",
            "Gute Nacht, schlafen Sie gut!"
          ]
        }
      ]
    },
    {
      "id": "d78",
      "level": "B2",
      "title": "Eine Wanderung planen",
      "lines": [
        {
          "who": "Tom",
          "en": "Das Wetter soll am Sonntag schön werden. Wollen wir wandern gehen?",
          "cs": "Počasí má být v neděli pěkné. Chceme jít na túru?",
          "ty": false,
          "pron": "das VEter zol am ZONták ŠÖN VÉRden VOlen vír VANdern GÉen"
        },
        {
          "who": "Ty",
          "en": "Gern! Hast du schon eine Route im Kopf?",
          "cs": "Rád! Máš už nějakou trasu v hlavě?",
          "ty": true,
          "pron": "GERN hast dú ŠÓN AJne RÚte im KOPF",
          "wrong": [
            "Nein, ich habe keinen Regenschirm.",
            "Ich kaufe gleich Brot."
          ]
        },
        {
          "who": "Tom",
          "en": "Ich dachte an den Rundweg am See. Er ist etwa fünfzehn Kilometer lang.",
          "cs": "Myslel jsem na okružní cestu kolem jezera. Je dlouhá asi patnáct kilometrů.",
          "ty": false,
          "pron": "ich DACHte an dén RUNTvék am ZÉ ér ist ETva FÜNFcén kiloMÉter lang"
        },
        {
          "who": "Ty",
          "en": "Das ist ziemlich weit. Wie lange brauchen wir dafür?",
          "cs": "To je docela daleko. Jak dlouho nám to zabere?",
          "ty": true,
          "pron": "das ist CÍmlich VAJT VÍ LANge BRAUchen vír daFÜR",
          "wrong": [
            "Ich war noch nie am Meer.",
            "Der Kuchen schmeckt gut."
          ]
        },
        {
          "who": "Tom",
          "en": "Mit Pausen ungefähr fünf Stunden. Wir sollten früh losgehen.",
          "cs": "S přestávkami zhruba pět hodin. Měli bychom vyrazit brzy.",
          "ty": false,
          "pron": "mit PAUzen UNgefér FÜNF ŠTUNden vír ZOLten FRÜ LOSgéen"
        },
        {
          "who": "Ty",
          "en": "Einverstanden. Soll ich etwas zu essen und zu trinken einpacken?",
          "cs": "Souhlasím. Mám zabalit něco k jídlu a pití?",
          "ty": true,
          "pron": "AJNferštanden zol ich ETvas cú ESen unt cú TRINken AJNpaken",
          "wrong": [
            "Ich bin in Prag geboren.",
            "Das Konzert beginnt um acht."
          ]
        },
        {
          "who": "Tom",
          "en": "Ja, bitte. Und denk an feste Schuhe, weil der Weg manchmal steil ist.",
          "cs": "Ano, prosím. A mysli na pevné boty, protože cesta je občas strmá.",
          "ty": false,
          "pron": "já BITe unt denk an FESte ŠÚe VAJL der VÉK MANCHmál štajl ist"
        },
        {
          "who": "Ty",
          "en": "Mache ich. Treffen wir uns um sieben am Bahnhof?",
          "cs": "Udělám. Sejdeme se v sedm na nádraží?",
          "ty": true,
          "pron": "MAche ich TREfen vír uns um ZÍben am BÁNhóf",
          "wrong": [
            "Ich habe leider keine Kinder.",
            "Meine Tante lebt in Wien."
          ]
        },
        {
          "who": "Tom",
          "en": "Perfekt. Ich kaufe schon die Fahrkarten. Bis Sonntag!",
          "cs": "Perfektní. Jízdenky už koupím. Na neděli!",
          "ty": false,
          "pron": "perFEKT ich KAUfe ŠÓN die FÁRkarten bis ZONták"
        },
        {
          "who": "Ty",
          "en": "Super, bis Sonntag. Hoffentlich bleibt das Wetter so!",
          "cs": "Super, do neděle. Doufejme, že počasí vydrží!",
          "ty": true,
          "pron": "ZÚper bis ZONták HOfentlich blajpt das VEter zó",
          "wrong": [
            "Ich hätte gern ein Glas Wasser.",
            "Vielen Dank für das Geschenk!"
          ]
        }
      ]
    },
    {
      "id": "d79",
      "level": "B2",
      "title": "Den Installateur bestellen",
      "lines": [
        {
          "who": "Installateur",
          "en": "Installation Maier, guten Tag. Was kann ich für Sie tun?",
          "cs": "Instalace Maier, dobrý den. Co pro vás mohu udělat?",
          "ty": false,
          "pron": "instalaCJÓN MAJer gúten TÁK VAS kan ich FÜR zí tún"
        },
        {
          "who": "Ty",
          "en": "Bei mir tropft der Wasserhahn in der Küche, und das Wasser im Bad wird nicht mehr warm.",
          "cs": "U mě kape kohoutek v kuchyni a voda v koupelně už není teplá.",
          "ty": true,
          "pron": "baj mír tropft der VAserhán in der KÜche unt das VAser im bát virt nicht mér VARM",
          "wrong": [
            "Ich möchte gern einen Tisch für vier Personen.",
            "Mein Sohn spielt Gitarre."
          ]
        },
        {
          "who": "Installateur",
          "en": "Das klingt nach einem Defekt am Boiler. Seit wann haben Sie das Problem?",
          "cs": "To zní jako závada na bojleru. Odkdy ten problém máte?",
          "ty": false,
          "pron": "das klingt NÁCH AJnem deFEKT am BOJler zajt VAN HÁben zí das proBLÉM"
        },
        {
          "who": "Ty",
          "en": "Seit gestern Abend. Können Sie heute noch vorbeikommen?",
          "cs": "Od včerejšího večera. Můžete ještě dnes přijít?",
          "ty": true,
          "pron": "zajt GESTern Ábent KÖnen zí HOJte NOCH forBAJkomen",
          "wrong": [
            "Ich bin im Juli geboren.",
            "Das Brot ist alt."
          ]
        },
        {
          "who": "Installateur",
          "en": "Heute ist es schwierig. Ich könnte morgen früh gegen acht Uhr bei Ihnen sein.",
          "cs": "Dnes je to těžké. Mohl bych být u vás zítra ráno kolem osmé.",
          "ty": false,
          "pron": "HOJte ist es ŠVÍrich ich KÖNte MORgen FRÜ GÉgen ACHT ÚR baj ÍNen ZAJN"
        },
        {
          "who": "Ty",
          "en": "Morgen früh passt gut. Muss jemand zu Hause sein?",
          "cs": "Zítra ráno se hodí. Musí být někdo doma?",
          "ty": true,
          "pron": "MORgen FRÜ past GÚT mus JÉmant cú HAUze ZAJN",
          "wrong": [
            "Ich fahre mit dem Bus.",
            "Die Kinder spielen draußen."
          ]
        },
        {
          "who": "Installateur",
          "en": "Ja, ich brauche Zugang zur Wohnung. Die Reparatur kostet etwa hundertachtzig Euro.",
          "cs": "Ano, potřebuji přístup do bytu. Oprava stojí asi sto osmdesát eur.",
          "ty": false,
          "pron": "já ich BRAUche CUgang cur VÓnung die reparaTÚR KOstet ETva HUNdertachcich OJro"
        },
        {
          "who": "Ty",
          "en": "Das ist in Ordnung. Soll ich vorher etwas vorbereiten?",
          "cs": "To je v pořádku. Mám předem něco připravit?",
          "ty": true,
          "pron": "das ist in ORDnung zol ich FÓRhér ETvas FÓRberajten",
          "wrong": [
            "Ich suche eine neue Wohnung.",
            "Zum Frühstück esse ich Müsli."
          ]
        },
        {
          "who": "Installateur",
          "en": "Stellen Sie bitte alles vom Boiler weg, damit ich gut herankomme.",
          "cs": "Odstavte prosím všechno od bojleru, abych se k němu dobře dostal.",
          "ty": false,
          "pron": "ŠTElen zí BITe Ales fom BOJler VÉK daMIT ich GÚT heRANkome"
        },
        {
          "who": "Ty",
          "en": "Mache ich. Dann bis morgen früh, und vielen Dank!",
          "cs": "Udělám. Tak do zítřejšího rána a mnohokrát děkuji!",
          "ty": true,
          "pron": "MAche ich DAN bis MORgen FRÜ unt FÍlen DANK",
          "wrong": [
            "Ich nehme den Bus um acht.",
            "Wie spät ist es jetzt?"
          ]
        }
      ]
    },
    {
      "id": "d80",
      "level": "B2",
      "title": "Die Prüfung bestanden",
      "lines": [
        {
          "who": "Lehrerin",
          "en": "Herzlichen Glückwunsch! Sie haben die Prüfung bestanden.",
          "cs": "Srdečně blahopřeji! Zkoušku jste složil.",
          "ty": false,
          "pron": "HERClichen GLÜKvunš zí HÁben die PRÜfung beŠTANden"
        },
        {
          "who": "Ty",
          "en": "Wirklich? Das freut mich riesig! Ich hatte vor dem Test große Angst.",
          "cs": "Opravdu? To mě nesmírně těší! Před testem jsem měl velký strach.",
          "ty": true,
          "pron": "VIRKlich das FROJT mich RÍzich ich HATe fór dém test GRÓse ANGST",
          "wrong": [
            "Nein, ich nehme den Zug.",
            "Heute ist es bewölkt."
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Sie haben im Sprechen besonders gut abgeschnitten. Wie haben Sie geübt?",
          "cs": "V mluvení jste obzvlášť dobře obstál. Jak jste cvičil?",
          "ty": false,
          "pron": "zí HÁben im ŠPRECHen beZONders GÚT APgešniten VÍ HÁben zí geÜPT"
        },
        {
          "who": "Ty",
          "en": "Ich habe jeden Tag mit der App gelernt und mit Freunden Deutsch gesprochen.",
          "cs": "Učil jsem se každý den s aplikací a mluvil s přáteli německy.",
          "ty": true,
          "pron": "ich HÁbe JÉden TÁK mit der EP geLERNT unt mit FROJnden DOJČ geŠPROchen",
          "wrong": [
            "Ich habe gestern Schuhe gekauft.",
            "Das Büro schließt um fünf."
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Das ist die beste Methode. Was haben Sie jetzt vor?",
          "cs": "To je nejlepší metoda. Co máte teď v plánu?",
          "ty": false,
          "pron": "das ist die BESte meTÓde VAS HÁben zí JECT fór"
        },
        {
          "who": "Ty",
          "en": "Ich würde gern in Deutschland arbeiten, deshalb möchte ich mein Deutsch weiter verbessern.",
          "cs": "Chtěl bych pracovat v Německu, proto chci svou němčinu dál zlepšovat.",
          "ty": true,
          "pron": "ich VÜRde GERN in DOJČlant ARbajten DESHALP MÖCHte ich majn DOJČ VAJter ferBEsern",
          "wrong": [
            "Ich habe morgen Geburtstag.",
            "Wir fahren am Montag zurück."
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Dann empfehle ich Ihnen einen Kurs auf dem nächsten Niveau und viel Lesen.",
          "cs": "Pak vám doporučuji kurz na další úrovni a hodně číst.",
          "ty": false,
          "pron": "DAN empFÉle ich ÍNen AJnen KURS auf dém NÉCHsten niVÓ unt FÍL LÉzen"
        },
        {
          "who": "Ty",
          "en": "Das mache ich. Dürfte ich Sie später um ein Zeugnis bitten?",
          "cs": "Udělám to. Směl bych vás později požádat o vysvědčení?",
          "ty": true,
          "pron": "das MAche ich DÜRFte ich zí ŠPÉter um ajn COJKnis BITen",
          "wrong": [
            "Ich nehme meinen Tee mit Zitrone.",
            "Hier ist die Speisekarte."
          ]
        },
        {
          "who": "Lehrerin",
          "en": "Selbstverständlich. Sie bekommen das Zertifikat nächste Woche per Post.",
          "cs": "Samozřejmě. Certifikát dostanete příští týden poštou.",
          "ty": false,
          "pron": "ZELPSTferštendlich zí beKOmen das certifiKÁT NÉCHste VOche per POST"
        },
        {
          "who": "Ty",
          "en": "Vielen Dank für alles. Ich habe bei Ihnen sehr viel gelernt.",
          "cs": "Mnohokrát děkuji za všechno. Hodně jsem se u vás naučil.",
          "ty": true,
          "pron": "FÍlen DANK FÜR Ales ich HÁbe baj ÍNen ZÉR FÍL geLERNT",
          "wrong": [
            "Das Zimmer ist schon besetzt.",
            "Ich esse gern Eis."
          ]
        }
      ]
    }
  ],
  "grammar": {
    "cases": [
      {
        "id": "g-cases-1",
        "level": "A1",
        "right": "Ich sehe den Mann.",
        "wrong": "Ich sehe der Mann.",
        "wrong2": "Ich sehe dem Mann.",
        "explanation": "Po *sehen* je 4. pád (kdo? co? – koho? co?): mužský rod mění *der* na *den*."
      },
      {
        "id": "g-cases-2",
        "level": "A1",
        "right": "Der Mann liest ein Buch.",
        "wrong": "Den Mann liest ein Buch.",
        "wrong2": "Der Mann liest einen Buch.",
        "explanation": "Podmět je v 1. pádu (*der Mann*), *Buch* je rod *das*, takže *ein Buch* se nemění."
      },
      {
        "id": "g-cases-3",
        "level": "A1",
        "right": "Ich kaufe einen Tisch.",
        "wrong": "Ich kaufe ein Tisch.",
        "wrong2": "Ich kaufe einer Tisch.",
        "explanation": "*Tisch* je rod *der* a po *kaufen* je 4. pád, proto *einen*."
      },
      {
        "id": "g-cases-4",
        "level": "A1",
        "right": "Ich habe keinen Hunger.",
        "wrong": "Ich habe kein Hunger.",
        "wrong2": "Ich habe keine Hunger.",
        "explanation": "*Hunger* je mužský rod, v 4. pádu *keinen*."
      },
      {
        "id": "g-cases-5",
        "level": "A1",
        "right": "Das ist meine Mutter.",
        "wrong": "Das ist mein Mutter.",
        "wrong2": "Das ist meinen Mutter.",
        "explanation": "*Mutter* je ženský rod, ženský rod má koncovku *-e*: *meine*."
      },
      {
        "id": "g-cases-6",
        "level": "A1",
        "right": "Die Frau trinkt einen Tee.",
        "wrong": "Die Frau trinkt ein Tee.",
        "wrong2": "Der Frau trinkt einen Tee.",
        "explanation": "Podmět *die Frau* zůstává v 1. pádu; *Tee* je mužský rod, v 4. pádu *einen*."
      },
      {
        "id": "g-cases-7",
        "level": "A1",
        "right": "Ich liebe dich.",
        "wrong": "Ich liebe dir.",
        "wrong2": "Ich liebe du.",
        "explanation": "*lieben* chce 4. pád, zájmeno je *dich*."
      },
      {
        "id": "g-cases-8",
        "level": "A1",
        "right": "Ich helfe dir.",
        "wrong": "Ich helfe dich.",
        "wrong2": "Ich helfe du.",
        "explanation": "*helfen* chce 3. pád, proto *dir*."
      },
      {
        "id": "g-cases-9",
        "level": "A1",
        "right": "Ich gebe dem Kind einen Apfel.",
        "wrong": "Ich gebe das Kind einen Apfel.",
        "wrong2": "Ich gebe dem Kind ein Apfel.",
        "explanation": "Komu? 3. pád (*dem Kind*), co? 4. pád (*einen Apfel*, *Apfel* je mužský)."
      },
      {
        "id": "g-cases-10",
        "level": "A1",
        "right": "Das Auto gehört meinem Vater.",
        "wrong": "Das Auto gehört mein Vater.",
        "wrong2": "Das Auto gehört meinen Vater.",
        "explanation": "*gehören* chce 3. pád, mužský rod *meinem*."
      },
      {
        "id": "g-cases-11",
        "level": "A1",
        "right": "Wir sprechen mit dem Lehrer.",
        "wrong": "Wir sprechen mit den Lehrer.",
        "wrong2": "Wir sprechen mit der Lehrer.",
        "explanation": "Po *mit* je vždy 3. pád, mužský rod: *dem*."
      },
      {
        "id": "g-cases-12",
        "level": "A1",
        "right": "Ich komme aus der Schule.",
        "wrong": "Ich komme aus die Schule.",
        "wrong2": "Ich komme aus den Schule.",
        "explanation": "Po *aus* je 3. pád, ženský rod: *der*."
      },
      {
        "id": "g-cases-13",
        "level": "A1",
        "right": "Er wohnt bei seinen Eltern.",
        "wrong": "Er wohnt bei seine Eltern.",
        "wrong2": "Er wohnt bei seinem Eltern.",
        "explanation": "Po *bei* je 3. pád; v množném čísle má 3. pád koncovku *-n*: *seinen Eltern*."
      },
      {
        "id": "g-cases-14",
        "level": "A1",
        "right": "Ich trinke den Kaffee.",
        "wrong": "Ich trinke der Kaffee.",
        "wrong2": "Ich trinke dem Kaffee.",
        "explanation": "*der Kaffee* v 4. pádu: *den Kaffee*."
      },
      {
        "id": "g-cases-15",
        "level": "A1",
        "right": "Die Kinder spielen im Garten.",
        "wrong": "Die Kinder spielen ins Garten.",
        "wrong2": "Die Kinder spielen im Gartens.",
        "explanation": "Kde? Místo = 3. pád: *im* je *in dem*."
      },
      {
        "id": "g-cases-16",
        "level": "A2",
        "right": "Ich gehe in den Garten.",
        "wrong": "Ich gehe im Garten.",
        "wrong2": "Ich gehe in dem Garten.",
        "explanation": "Kam? Pohyb = 4. pád: *in den Garten*."
      },
      {
        "id": "g-cases-17",
        "level": "A2",
        "right": "Das Buch liegt auf dem Tisch.",
        "wrong": "Das Buch liegt auf den Tisch.",
        "wrong2": "Das Buch liegt auf der Tisch.",
        "explanation": "Kde? Místo = 3. pád: *auf dem Tisch*."
      },
      {
        "id": "g-cases-18",
        "level": "A2",
        "right": "Ich lege das Buch auf den Tisch.",
        "wrong": "Ich lege das Buch auf dem Tisch.",
        "wrong2": "Ich lege das Buch auf der Tisch.",
        "explanation": "Kam? Pohyb = 4. pád: *auf den Tisch*."
      },
      {
        "id": "g-cases-19",
        "level": "A2",
        "right": "Der Hund ist unter dem Bett.",
        "wrong": "Der Hund ist unter das Bett.",
        "wrong2": "Der Hund ist unter den Bett.",
        "explanation": "Kde? 3. pád; *Bett* je rod *das*, 3. pád *dem*."
      },
      {
        "id": "g-cases-20",
        "level": "A2",
        "right": "Ich danke dir für das Geschenk.",
        "wrong": "Ich danke dich für das Geschenk.",
        "wrong2": "Ich danke dir für dem Geschenk.",
        "explanation": "*danken* chce 3. pád, *für* chce 4. pád."
      },
      {
        "id": "g-cases-21",
        "level": "A2",
        "right": "Das Haus meiner Eltern ist groß.",
        "wrong": "Das Haus meine Eltern ist groß.",
        "wrong2": "Das Haus meinen Eltern ist groß.",
        "explanation": "2. pád množného čísla (čí?) má *der*, u přivlastňovacího zájmena *meiner*."
      },
      {
        "id": "g-cases-22",
        "level": "A2",
        "right": "Wem gehört diese Tasche?",
        "wrong": "Wen gehört diese Tasche?",
        "wrong2": "Wer gehört diese Tasche?",
        "explanation": "*gehören* chce 3. pád, takže *wem*."
      },
      {
        "id": "g-cases-23",
        "level": "A2",
        "right": "Ich gebe ihm das Buch.",
        "wrong": "Ich gebe er das Buch.",
        "wrong2": "Ich gebe ihn das Buch.",
        "explanation": "Komu? 3. pád: *ihm*."
      },
      {
        "id": "g-cases-24",
        "level": "B1",
        "right": "Wegen des schlechten Wetters bleiben wir zu Hause.",
        "wrong": "Wegen dem schlechten Wetter bleiben wir zu Hause.",
        "wrong2": "Wegen das schlechte Wetter bleiben wir zu Hause.",
        "explanation": "*wegen* chce v psané řeči 2. pád: *des schlechten Wetters*."
      },
      {
        "id": "g-cases-25",
        "level": "B1",
        "right": "Trotz des Regens gehen wir spazieren.",
        "wrong": "Trotz dem Regen gehen wir spazieren.",
        "wrong2": "Trotz der Regen gehen wir spazieren.",
        "explanation": "*trotz* chce 2. pád; mužský a střední rod mají v 2. pádu *-s*: *des Regens*."
      },
      {
        "id": "g-cases-26",
        "level": "B1",
        "right": "Ich habe den Mann gesehen, dem ich geholfen habe.",
        "wrong": "Ich habe den Mann gesehen, den ich geholfen habe.",
        "wrong2": "Ich habe den Mann gesehen, der ich geholfen habe.",
        "explanation": "Vztažné zájmeno se řídí slovesem ve vedlejší větě: *helfen* chce 3. pád, tedy *dem*."
      },
      {
        "id": "g-cases-27",
        "level": "B1",
        "right": "Das ist die Frau, deren Sohn Arzt ist.",
        "wrong": "Das ist die Frau, dessen Sohn Arzt ist.",
        "wrong2": "Das ist die Frau, die Sohn Arzt ist.",
        "explanation": "„Jejíž“ u ženského rodu je *deren*, u mužského a středního *dessen*."
      },
      {
        "id": "g-cases-28",
        "level": "B1",
        "right": "Er denkt an seine Zukunft.",
        "wrong": "Er denkt an seiner Zukunft.",
        "wrong2": "Er denkt von seine Zukunft.",
        "explanation": "*denken an* chce 4. pád (myslet na): *an seine Zukunft*."
      }
    ],
    "wordOrder": [
      {
        "id": "g-wordOrder-1",
        "level": "A1",
        "right": "Heute gehe ich ins Kino.",
        "wrong": "Heute ich gehe ins Kino.",
        "wrong2": "",
        "explanation": "Určité sloveso je v oznamovací větě vždy na druhém místě, i když větu začíná „dnes“."
      },
      {
        "id": "g-wordOrder-2",
        "level": "A1",
        "right": "Ich trinke gern Tee.",
        "wrong": "Ich gern trinke Tee.",
        "wrong2": "",
        "explanation": "*gern* patří za sloveso, ne před něj."
      },
      {
        "id": "g-wordOrder-3",
        "level": "A1",
        "right": "Morgen fahre ich nach Berlin.",
        "wrong": "Morgen ich fahre nach Berlin.",
        "wrong2": "Morgen fahre nach Berlin ich.",
        "explanation": "Po „zítra“ následuje hned sloveso, až potom podmět."
      },
      {
        "id": "g-wordOrder-4",
        "level": "A1",
        "right": "Wo wohnst du?",
        "wrong": "Wo du wohnst?",
        "wrong2": "Wo wohnen du?",
        "explanation": "Otázka s tázacím slovem: sloveso hned za ním, podmět až potom."
      },
      {
        "id": "g-wordOrder-5",
        "level": "A1",
        "right": "Kommst du aus Prag?",
        "wrong": "Kommst aus Prag du?",
        "wrong2": "Aus Prag du kommst?",
        "explanation": "Zjišťovací otázka (ano–ne) začíná slovesem."
      },
      {
        "id": "g-wordOrder-6",
        "level": "A1",
        "right": "Ich spreche nicht gut Deutsch.",
        "wrong": "Ich nicht spreche gut Deutsch.",
        "wrong2": "Ich spreche gut nicht Deutsch.",
        "explanation": "*nicht* stojí za slovesem, před výrazem, který popírá: *nicht gut*."
      },
      {
        "id": "g-wordOrder-7",
        "level": "A1",
        "right": "Ich habe keine Zeit.",
        "wrong": "Ich habe nicht keine Zeit.",
        "wrong2": "Ich keine habe Zeit.",
        "explanation": "*keine* stojí před podstatným jménem a už samo vyjadřuje zápor."
      },
      {
        "id": "g-wordOrder-8",
        "level": "A1",
        "right": "Im Sommer fahren wir ans Meer.",
        "wrong": "Im Sommer wir fahren ans Meer.",
        "wrong2": "Wir im Sommer fahren ans Meer.",
        "explanation": "Sloveso musí být druhé: po „v létě“ hned *fahren*."
      },
      {
        "id": "g-wordOrder-9",
        "level": "A1",
        "right": "Es regnet heute.",
        "wrong": "Es heute regnet.",
        "wrong2": "Heute es regnet.",
        "explanation": "Oznamovací věta: sloveso je vždy na druhém místě."
      },
      {
        "id": "g-wordOrder-10",
        "level": "A1",
        "right": "Ich möchte einen Kaffee trinken.",
        "wrong": "Ich möchte trinken einen Kaffee.",
        "wrong2": "Ich trinken möchte einen Kaffee.",
        "explanation": "Při *möchte* je druhé sloveso v infinitivu na konci věty."
      },
      {
        "id": "g-wordOrder-11",
        "level": "A2",
        "right": "Ich kann gut schwimmen.",
        "wrong": "Ich kann schwimmen gut.",
        "wrong2": "Ich schwimmen kann gut.",
        "explanation": "Modální sloveso na druhém místě, plnovýznamové sloveso na konci."
      },
      {
        "id": "g-wordOrder-12",
        "level": "A2",
        "right": "Ich stehe um sechs Uhr auf.",
        "wrong": "Ich aufstehe um sechs Uhr.",
        "wrong2": "Ich stehe auf um sechs Uhr.",
        "explanation": "U odlučitelných sloves jde předpona na konec věty, před ní stojí čas."
      },
      {
        "id": "g-wordOrder-13",
        "level": "A2",
        "right": "Ich rufe dich morgen an.",
        "wrong": "Ich anrufe dich morgen.",
        "wrong2": "Ich rufe an dich morgen.",
        "explanation": "*anrufen* se odlučuje: *rufe … an*, předpona skončí na konci."
      },
      {
        "id": "g-wordOrder-14",
        "level": "A2",
        "right": "Ich weiß, dass er krank ist.",
        "wrong": "Ich weiß, dass er ist krank.",
        "wrong2": "Ich weiß, dass ist er krank.",
        "explanation": "Ve vedlejší větě s *dass* jde určité sloveso na konec."
      },
      {
        "id": "g-wordOrder-15",
        "level": "A2",
        "right": "Ich bleibe zu Hause, weil ich krank bin.",
        "wrong": "Ich bleibe zu Hause, weil ich bin krank.",
        "wrong2": "Ich bleibe zu Hause, weil bin ich krank.",
        "explanation": "Po *weil* je určité sloveso na konci vedlejší věty."
      },
      {
        "id": "g-wordOrder-16",
        "level": "A2",
        "right": "Wenn es regnet, bleibe ich zu Hause.",
        "wrong": "Wenn es regnet, ich bleibe zu Hause.",
        "wrong2": "Wenn es regnet ich bleibe zu Hause.",
        "explanation": "Vedlejší věta stojí na prvním místě, takže hlavní věta pak začíná slovesem."
      },
      {
        "id": "g-wordOrder-17",
        "level": "A2",
        "right": "Ich gebe dem Kind das Buch.",
        "wrong": "Ich dem Kind gebe das Buch.",
        "wrong2": "Ich gebe dem Kind Buch das.",
        "explanation": "Obvyklé pořadí podstatných jmen: nejdřív komu (3. pád), potom co (4. pád)."
      },
      {
        "id": "g-wordOrder-18",
        "level": "A2",
        "right": "Ich gebe es ihm.",
        "wrong": "Ich gebe ihm es.",
        "wrong2": "",
        "explanation": "Zájmeno v 4. pádu stojí před zájmenem ve 3. pádu: *es ihm*."
      },
      {
        "id": "g-wordOrder-19",
        "level": "A2",
        "right": "Ich möchte wissen, wo du wohnst.",
        "wrong": "Ich möchte wissen, wo wohnst du.",
        "wrong2": "Ich möchte wissen, wo du wohnen.",
        "explanation": "Nepřímá otázka je vedlejší věta: sloveso na konci."
      },
      {
        "id": "g-wordOrder-20",
        "level": "A2",
        "right": "Ich habe einen Bruder und er heißt Max.",
        "wrong": "Ich habe einen Bruder und heißt er Max.",
        "wrong2": "Ich habe einen Bruder und er Max heißt.",
        "explanation": "Po *und* se spojuje hlavní věta, sloveso je zase druhé."
      },
      {
        "id": "g-wordOrder-21",
        "level": "B1",
        "right": "Ich glaube, dass er morgen kommt.",
        "wrong": "Ich glaube, dass er kommt morgen.",
        "wrong2": "Ich glaube, er kommt, dass morgen.",
        "explanation": "Ve vedlejší větě s *dass* jde určité sloveso na konec."
      },
      {
        "id": "g-wordOrder-22",
        "level": "B1",
        "right": "Weil ich krank war, bin ich zu Hause geblieben.",
        "wrong": "Weil ich krank war, ich bin zu Hause geblieben.",
        "wrong2": "Weil ich war krank, bin ich zu Hause geblieben.",
        "explanation": "Po vedlejší větě začíná hlavní věta slovesem."
      },
      {
        "id": "g-wordOrder-23",
        "level": "B1",
        "right": "Ich weiß nicht, ob er kommt.",
        "wrong": "Ich weiß nicht, ob kommt er.",
        "wrong2": "Ich weiß nicht, ob er kommen.",
        "explanation": "*ob* (zda) otevírá vedlejší větu, sloveso na konec."
      },
      {
        "id": "g-wordOrder-24",
        "level": "B1",
        "right": "Ich habe das Buch gelesen, das du mir empfohlen hast.",
        "wrong": "Ich habe das Buch gelesen, das du hast mir empfohlen.",
        "wrong2": "Ich habe das Buch gelesen, das du mir hast empfohlen.",
        "explanation": "Vztažná věta je vedlejší: pomocné sloveso *hast* jde úplně na konec."
      },
      {
        "id": "g-wordOrder-25",
        "level": "B1",
        "right": "Er hat gesagt, dass er nicht kommen kann.",
        "wrong": "Er hat gesagt, dass er nicht kann kommen.",
        "wrong2": "Er hat gesagt, dass er nicht kommen können.",
        "explanation": "Ve vedlejší větě je na konci modální sloveso, před ním infinitiv."
      },
      {
        "id": "g-wordOrder-26",
        "level": "B1",
        "right": "Ich freue mich darauf, dich zu sehen.",
        "wrong": "Ich freue mich darauf, zu dich sehen.",
        "wrong2": "Ich freue mich darauf, dich sehen zu.",
        "explanation": "Infinitiv se *zu* stojí na konci, předmět před ním."
      },
      {
        "id": "g-wordOrder-27",
        "level": "B1",
        "right": "Deshalb bin ich nach Hause gegangen.",
        "wrong": "Deshalb ich bin nach Hause gegangen.",
        "wrong2": "Deshalb ich ging nach Hause.",
        "explanation": "*deshalb* je na prvním místě, sloveso hned za ním."
      },
      {
        "id": "g-wordOrder-28",
        "level": "B1",
        "right": "Obwohl es regnet, gehen wir spazieren.",
        "wrong": "Obwohl es regnet, wir gehen spazieren.",
        "wrong2": "",
        "explanation": "Za vedlejší větou následuje sloveso hlavní věty."
      },
      {
        "id": "g-wordOrder-29",
        "level": "B1",
        "right": "Ich habe keine Lust, heute zu arbeiten.",
        "wrong": "Ich habe keine Lust, zu arbeiten heute.",
        "wrong2": "Ich habe keine Lust, arbeiten zu heute.",
        "explanation": "Časový údaj stojí před infinitivem se *zu*."
      }
    ],
    "prepositions": [
      {
        "id": "g-prepositions-1",
        "level": "A1",
        "right": "Ich fahre mit dem Zug.",
        "wrong": "Ich fahre mit den Zug.",
        "wrong2": "Ich fahre mit der Zug.",
        "explanation": "Po *mit* je vždy 3. pád: *dem Zug*."
      },
      {
        "id": "g-prepositions-2",
        "level": "A1",
        "right": "Das Geschenk ist für dich.",
        "wrong": "Das Geschenk ist für dir.",
        "wrong2": "Das Geschenk ist für du.",
        "explanation": "Po *für* je vždy 4. pád: *dich*."
      },
      {
        "id": "g-prepositions-3",
        "level": "A1",
        "right": "Ich komme aus Tschechien.",
        "wrong": "Ich komme von Tschechien.",
        "wrong2": "Ich komme zu Tschechien.",
        "explanation": "*aus* říká, odkud pocházíš; *von* je „od“ někoho."
      },
      {
        "id": "g-prepositions-4",
        "level": "A1",
        "right": "Ich gehe zum Arzt.",
        "wrong": "Ich gehe nach Arzt.",
        "wrong2": "Ich gehe in Arzt.",
        "explanation": "K osobám a institucím patří *zu*: *zum Arzt* (zu dem)."
      },
      {
        "id": "g-prepositions-5",
        "level": "A1",
        "right": "Ich fahre nach Berlin.",
        "wrong": "Ich fahre zu Berlin.",
        "wrong2": "Ich fahre in Berlin.",
        "explanation": "K městům a zemím bez členu patří *nach*."
      },
      {
        "id": "g-prepositions-6",
        "level": "A1",
        "right": "Ich wohne in Deutschland.",
        "wrong": "Ich wohne nach Deutschland.",
        "wrong2": "Ich wohne zu Deutschland.",
        "explanation": "Kde? K místu se používá *in*."
      },
      {
        "id": "g-prepositions-7",
        "level": "A1",
        "right": "Ich bin im Büro.",
        "wrong": "Ich bin in das Büro.",
        "wrong2": "Ich bin zu dem Büro.",
        "explanation": "Kde? *in dem* se spojí do *im*."
      },
      {
        "id": "g-prepositions-8",
        "level": "A1",
        "right": "Ich gehe ins Büro.",
        "wrong": "Ich gehe im Büro.",
        "wrong2": "Ich gehe in dem Büro.",
        "explanation": "Kam? Směr = 4. pád: *in das* se spojí do *ins*."
      },
      {
        "id": "g-prepositions-9",
        "level": "A1",
        "right": "Ich warte auf den Bus.",
        "wrong": "Ich warte für den Bus.",
        "wrong2": "Ich warte an den Bus.",
        "explanation": "*warten auf* + 4. pád."
      },
      {
        "id": "g-prepositions-10",
        "level": "A1",
        "right": "Er arbeitet bei Siemens.",
        "wrong": "Er arbeitet an Siemens.",
        "wrong2": "Er arbeitet zu Siemens.",
        "explanation": "*bei* se používá u firem a osob: u koho, v čem."
      },
      {
        "id": "g-prepositions-11",
        "level": "A1",
        "right": "Ich bin seit einem Jahr hier.",
        "wrong": "Ich bin für einem Jahr hier.",
        "wrong2": "Ich bin seit ein Jahr hier.",
        "explanation": "*seit* + 3. pád vyjadřuje dobu, která trvá až dosud."
      },
      {
        "id": "g-prepositions-12",
        "level": "A1",
        "right": "Nach dem Essen trinke ich Tee.",
        "wrong": "Nach das Essen trinke ich Tee.",
        "wrong2": "Nach den Essen trinke ich Tee.",
        "explanation": "Po *nach* je 3. pád: *dem Essen*."
      },
      {
        "id": "g-prepositions-13",
        "level": "A1",
        "right": "Ich fahre ohne meinen Bruder.",
        "wrong": "Ich fahre ohne meinem Bruder.",
        "wrong2": "Ich fahre ohne mein Bruder.",
        "explanation": "Po *ohne* je 4. pád."
      },
      {
        "id": "g-prepositions-14",
        "level": "A1",
        "right": "Wir treffen uns am Montag.",
        "wrong": "Wir treffen uns im Montag.",
        "wrong2": "Wir treffen uns auf Montag.",
        "explanation": "U dnů se používá *am* (an dem)."
      },
      {
        "id": "g-prepositions-15",
        "level": "A1",
        "right": "Ich stehe um sieben Uhr auf.",
        "wrong": "Ich stehe an sieben Uhr auf.",
        "wrong2": "Ich stehe in sieben Uhr auf.",
        "explanation": "S přesným časem hodin se používá *um*."
      },
      {
        "id": "g-prepositions-16",
        "level": "A2",
        "right": "Ich warte auf dich.",
        "wrong": "Ich warte für dich.",
        "wrong2": "Ich warte nach dich.",
        "explanation": "*warten auf* + 4. pád: čekat na někoho."
      },
      {
        "id": "g-prepositions-17",
        "level": "A2",
        "right": "Ich freue mich auf die Ferien.",
        "wrong": "Ich freue mich über die Ferien.",
        "wrong2": "Ich freue mich für die Ferien.",
        "explanation": "*sich freuen auf* = těšit se na něco, co teprve přijde."
      },
      {
        "id": "g-prepositions-18",
        "level": "A2",
        "right": "Ich freue mich über das Geschenk.",
        "wrong": "Ich freue mich auf das Geschenk.",
        "wrong2": "Ich freue mich für das Geschenk.",
        "explanation": "*sich freuen über* = mít radost z toho, co už je."
      },
      {
        "id": "g-prepositions-19",
        "level": "A2",
        "right": "Ich denke oft an dich.",
        "wrong": "Ich denke oft auf dich.",
        "wrong2": "Ich denke oft über dich.",
        "explanation": "*denken an* + 4. pád: myslet na někoho."
      },
      {
        "id": "g-prepositions-20",
        "level": "A2",
        "right": "Wir sprechen über das Wetter.",
        "wrong": "Wir sprechen von das Wetter.",
        "wrong2": "Wir sprechen über dem Wetter.",
        "explanation": "*sprechen über* + 4. pád: mluvit o něčem."
      },
      {
        "id": "g-prepositions-21",
        "level": "A2",
        "right": "Ich interessiere mich für Musik.",
        "wrong": "Ich interessiere mich an Musik.",
        "wrong2": "Ich interessiere mich auf Musik.",
        "explanation": "*sich interessieren für* + 4. pád."
      },
      {
        "id": "g-prepositions-22",
        "level": "A2",
        "right": "Ich habe Angst vor dem Hund.",
        "wrong": "Ich habe Angst von dem Hund.",
        "wrong2": "Ich habe Angst für den Hund.",
        "explanation": "*Angst haben vor* + 3. pád."
      },
      {
        "id": "g-prepositions-23",
        "level": "A2",
        "right": "Ich warte vor dem Haus.",
        "wrong": "Ich warte vor das Haus.",
        "wrong2": "Ich warte vor den Haus.",
        "explanation": "Kde? Místo = 3. pád: *vor dem Haus*."
      },
      {
        "id": "g-prepositions-24",
        "level": "A2",
        "right": "Die Lampe hängt über dem Tisch.",
        "wrong": "Die Lampe hängt über den Tisch.",
        "wrong2": "Die Lampe hängt über der Tisch.",
        "explanation": "Kde? Místo = 3. pád: *über dem Tisch*."
      },
      {
        "id": "g-prepositions-25",
        "level": "A2",
        "right": "Er stellt die Flasche auf den Tisch.",
        "wrong": "Er stellt die Flasche auf dem Tisch.",
        "wrong2": "Er stellt die Flasche auf der Tisch.",
        "explanation": "Kam? Pohyb = 4. pád: *auf den Tisch*."
      },
      {
        "id": "g-prepositions-26",
        "level": "A2",
        "right": "Ich gehe durch den Park.",
        "wrong": "Ich gehe durch dem Park.",
        "wrong2": "Ich gehe durch der Park.",
        "explanation": "Po *durch* je vždy 4. pád."
      },
      {
        "id": "g-prepositions-27",
        "level": "A2",
        "right": "Ich bin gegen den Plan.",
        "wrong": "Ich bin gegen dem Plan.",
        "wrong2": "Ich bin gegen der Plan.",
        "explanation": "Po *gegen* je vždy 4. pád."
      },
      {
        "id": "g-prepositions-28",
        "level": "A2",
        "right": "Er wohnt gegenüber der Schule.",
        "wrong": "Er wohnt gegenüber die Schule.",
        "wrong2": "Er wohnt gegenüber den Schule.",
        "explanation": "Po *gegenüber* je 3. pád."
      },
      {
        "id": "g-prepositions-29",
        "level": "B1",
        "right": "Ich bin mit der Arbeit zufrieden.",
        "wrong": "Ich bin über die Arbeit zufrieden.",
        "wrong2": "Ich bin mit die Arbeit zufrieden.",
        "explanation": "*zufrieden mit* + 3. pád."
      },
      {
        "id": "g-prepositions-30",
        "level": "B1",
        "right": "Ich bin stolz auf meinen Sohn.",
        "wrong": "Ich bin stolz über meinen Sohn.",
        "wrong2": "Ich bin stolz für meinen Sohn.",
        "explanation": "*stolz sein auf* + 4. pád."
      },
      {
        "id": "g-prepositions-31",
        "level": "B1",
        "right": "Ich träume von einem Haus am Meer.",
        "wrong": "Ich träume über ein Haus am Meer.",
        "wrong2": "Ich träume an einem Haus am Meer.",
        "explanation": "*träumen von* + 3. pád."
      },
      {
        "id": "g-prepositions-32",
        "level": "B1",
        "right": "Er hat sich in sie verliebt.",
        "wrong": "Er hat sich auf sie verliebt.",
        "wrong2": "Er hat sich zu sie verliebt.",
        "explanation": "*sich verlieben in* + 4. pád."
      },
      {
        "id": "g-prepositions-33",
        "level": "B1",
        "right": "Ich bin damit einverstanden.",
        "wrong": "Ich bin darauf einverstanden.",
        "wrong2": "Ich bin dafür einverstanden.",
        "explanation": "*einverstanden sein mit* – zájmenné příslovce *damit* (s tím)."
      },
      {
        "id": "g-prepositions-34",
        "level": "B1",
        "right": "Worauf wartest du?",
        "wrong": "Wofür wartest du?",
        "wrong2": "Worüber wartest du?",
        "explanation": "*warten auf* – otázka *worauf*: na co?"
      },
      {
        "id": "g-prepositions-35",
        "level": "B1",
        "right": "Während des Urlaubs habe ich viel gelesen.",
        "wrong": "Während dem Urlaub habe ich viel gelesen.",
        "wrong2": "Während den Urlaub habe ich viel gelesen.",
        "explanation": "*während* chce 2. pád (v mluvě i 3.)."
      }
    ],
    "verbs": [
      {
        "id": "g-verbs-1",
        "level": "A1",
        "right": "Ich bin müde.",
        "wrong": "Ich habe müde.",
        "wrong2": "Ich bist müde.",
        "explanation": "*sein* se v 1. osobě jednotného čísla časuje *ich bin*."
      },
      {
        "id": "g-verbs-2",
        "level": "A1",
        "right": "Du bist mein Freund.",
        "wrong": "Du bin mein Freund.",
        "wrong2": "Du ist mein Freund.",
        "explanation": "*du bist*."
      },
      {
        "id": "g-verbs-3",
        "level": "A1",
        "right": "Er ist Lehrer.",
        "wrong": "Er bist Lehrer.",
        "wrong2": "Er sein Lehrer.",
        "explanation": "3. osoba: *er ist*; před povoláním není člen."
      },
      {
        "id": "g-verbs-4",
        "level": "A1",
        "right": "Wir sind in Prag.",
        "wrong": "Wir sein in Prag.",
        "wrong2": "Wir ist in Prag.",
        "explanation": "*wir sind*."
      },
      {
        "id": "g-verbs-5",
        "level": "A1",
        "right": "Ich habe einen Bruder.",
        "wrong": "Ich bin einen Bruder.",
        "wrong2": "Ich haben einen Bruder.",
        "explanation": "*haben* v 1. osobě: *ich habe*."
      },
      {
        "id": "g-verbs-6",
        "level": "A1",
        "right": "Du hast Hunger.",
        "wrong": "Du habt Hunger.",
        "wrong2": "Du hat Hunger.",
        "explanation": "*du hast*."
      },
      {
        "id": "g-verbs-7",
        "level": "A1",
        "right": "Er hat ein Auto.",
        "wrong": "Er habt ein Auto.",
        "wrong2": "Er haben ein Auto.",
        "explanation": "3. osoba jednotného čísla: *er hat*."
      },
      {
        "id": "g-verbs-8",
        "level": "A1",
        "right": "Ich spiele Fußball.",
        "wrong": "Ich spielst Fußball.",
        "wrong2": "Ich spielt Fußball.",
        "explanation": "Pravidelné sloveso: 1. osoba má koncovku *-e*."
      },
      {
        "id": "g-verbs-9",
        "level": "A1",
        "right": "Du kommst aus Polen.",
        "wrong": "Du kommt aus Polen.",
        "wrong2": "Du komme aus Polen.",
        "explanation": "2. osoba jednotného čísla má koncovku *-st*."
      },
      {
        "id": "g-verbs-10",
        "level": "A1",
        "right": "Sie wohnt in Wien.",
        "wrong": "Sie wohne in Wien.",
        "wrong2": "Sie wohnst in Wien.",
        "explanation": "3. osoba jednotného čísla má koncovku *-t*."
      },
      {
        "id": "g-verbs-11",
        "level": "A1",
        "right": "Wir lernen Deutsch.",
        "wrong": "Wir lernt Deutsch.",
        "wrong2": "Wir lernst Deutsch.",
        "explanation": "1. osoba množného čísla má koncovku *-en*."
      },
      {
        "id": "g-verbs-12",
        "level": "A1",
        "right": "Ihr trinkt Wasser.",
        "wrong": "Ihr trinken Wasser.",
        "wrong2": "Ihr trinkst Wasser.",
        "explanation": "2. osoba množného čísla má koncovku *-t*."
      },
      {
        "id": "g-verbs-13",
        "level": "A1",
        "right": "Du arbeitest viel.",
        "wrong": "Du arbeitst viel.",
        "wrong2": "Du arbeite viel.",
        "explanation": "Kmen na *-t* potřebuje v 2. osobě mezi kmenem a koncovkou *e*: *arbeitest*."
      },
      {
        "id": "g-verbs-14",
        "level": "A1",
        "right": "Er fährt nach Hause.",
        "wrong": "Er fahrt nach Hause.",
        "wrong2": "Er fahrte nach Hause.",
        "explanation": "*fahren* mění v 2. a 3. osobě *a* na *ä*: *er fährt*."
      },
      {
        "id": "g-verbs-15",
        "level": "A1",
        "right": "Du isst einen Apfel.",
        "wrong": "Du esst einen Apfel.",
        "wrong2": "Du ist einen Apfel.",
        "explanation": "*essen* mění *e* na *i*; kmen na *-s* má v 2. osobě jen *-t*: *du isst*."
      },
      {
        "id": "g-verbs-16",
        "level": "A1",
        "right": "Er liest ein Buch.",
        "wrong": "Er lest ein Buch.",
        "wrong2": "Er liesst ein Buch.",
        "explanation": "*lesen* mění *e* na *ie*: *er liest*."
      },
      {
        "id": "g-verbs-17",
        "level": "A1",
        "right": "Er spricht gut Deutsch.",
        "wrong": "Er sprecht gut Deutsch.",
        "wrong2": "Er sprich gut Deutsch.",
        "explanation": "*sprechen* mění *e* na *i*: *er spricht*."
      },
      {
        "id": "g-verbs-18",
        "level": "A1",
        "right": "Ich weiß es nicht.",
        "wrong": "Ich wissen es nicht.",
        "wrong2": "Ich weißt es nicht.",
        "explanation": "*wissen* je nepravidelné: *ich weiß*."
      },
      {
        "id": "g-verbs-19",
        "level": "A1",
        "right": "Ich möchte Wasser.",
        "wrong": "Ich möchten Wasser.",
        "wrong2": "Ich möchtest Wasser.",
        "explanation": "U *möchte* je 1. a 3. osoba stejná: *ich möchte*."
      },
      {
        "id": "g-verbs-20",
        "level": "A2",
        "right": "Ich muss arbeiten.",
        "wrong": "Ich musse arbeiten.",
        "wrong2": "Ich müsst arbeiten.",
        "explanation": "Modální *müssen*: *ich muss*, bez koncovky."
      },
      {
        "id": "g-verbs-21",
        "level": "A2",
        "right": "Er kann gut kochen.",
        "wrong": "Er kannt gut kochen.",
        "wrong2": "Er könnt gut kochen.",
        "explanation": "*können* v 3. osobě bez koncovky: *er kann*."
      },
      {
        "id": "g-verbs-22",
        "level": "A2",
        "right": "Du darfst hier parken.",
        "wrong": "Du darfen hier parken.",
        "wrong2": "Du darfst hier parkst.",
        "explanation": "*dürfen*: *du darfst*; druhé sloveso zůstane v infinitivu."
      },
      {
        "id": "g-verbs-23",
        "level": "A2",
        "right": "Wir wollen ins Kino gehen.",
        "wrong": "Wir wollt ins Kino gehen.",
        "wrong2": "Wir wollen ins Kino gehst.",
        "explanation": "*wollen*: *wir wollen*; druhé sloveso v infinitivu."
      },
      {
        "id": "g-verbs-24",
        "level": "A2",
        "right": "Er steht früh auf.",
        "wrong": "Er aufsteht früh.",
        "wrong2": "Er steht früh.",
        "explanation": "Odlučitelné sloveso *aufstehen*: *er steht … auf*."
      },
      {
        "id": "g-verbs-25",
        "level": "A2",
        "right": "Er ruft mich jeden Tag an.",
        "wrong": "Er anruft mich jeden Tag.",
        "wrong2": "Er ruft mich jeden Tag.",
        "explanation": "*anrufen* se v hlavní větě rozdělí."
      },
      {
        "id": "g-verbs-26",
        "level": "A2",
        "right": "Ich fange um acht Uhr an.",
        "wrong": "Ich anfange um acht Uhr.",
        "wrong2": "Ich fange um acht Uhr.",
        "explanation": "*anfangen*: *ich fange … an*."
      },
      {
        "id": "g-verbs-27",
        "level": "A2",
        "right": "Wir kaufen heute ein.",
        "wrong": "Wir einkaufen heute.",
        "wrong2": "Wir kaufen heute.",
        "explanation": "*einkaufen*: *wir kaufen … ein*."
      },
      {
        "id": "g-verbs-28",
        "level": "A2",
        "right": "Ich muss früh aufstehen.",
        "wrong": "Ich muss früh stehen auf.",
        "wrong2": "Ich muss früh aufsteht.",
        "explanation": "V infinitivu se předpona neodlučuje: *aufstehen*."
      },
      {
        "id": "g-verbs-29",
        "level": "A2",
        "right": "Ich wasche mir die Hände.",
        "wrong": "Ich wasche mich die Hände.",
        "wrong2": "Ich wasche mich meine Hände.",
        "explanation": "Když je předmětem část těla, zvratné zájmeno je ve 3. pádu: *mir* (myji si ruce)."
      },
      {
        "id": "g-verbs-30",
        "level": "A2",
        "right": "Ich freue mich auf dich.",
        "wrong": "Ich freue dich auf mich.",
        "wrong2": "Ich freue mir auf dich.",
        "explanation": "Zvratné sloveso: *ich freue mich*."
      },
      {
        "id": "g-verbs-31",
        "level": "A2",
        "right": "Gib mir das Buch!",
        "wrong": "Gibst mir das Buch!",
        "wrong2": "Geb mir das Buch!",
        "explanation": "Rozkaz u *geben*: *gib*, protože mění *e* na *i*."
      },
      {
        "id": "g-verbs-32",
        "level": "A2",
        "right": "Lies das Buch!",
        "wrong": "Lese das Buch!",
        "wrong2": "Liest das Buch!",
        "explanation": "Rozkaz u *lesen* (du-forma): *lies*, bez koncovky."
      },
      {
        "id": "g-verbs-33",
        "level": "A2",
        "right": "Kommen Sie bitte herein!",
        "wrong": "Kommt Sie bitte herein!",
        "wrong2": "Komm Sie bitte herein!",
        "explanation": "Zdvořilý rozkaz: *Kommen Sie*, sloveso před *Sie*."
      },
      {
        "id": "g-verbs-34",
        "level": "B1",
        "right": "Wenn ich Zeit hätte, würde ich reisen.",
        "wrong": "Wenn ich Zeit habe, würde ich reisen.",
        "wrong2": "Wenn ich Zeit hätte, ich würde reisen.",
        "explanation": "Podmiňovací způsob: *hätte* ve vedlejší větě a *würde* + infinitiv."
      },
      {
        "id": "g-verbs-35",
        "level": "B1",
        "right": "Ich würde gern nach Italien fahren.",
        "wrong": "Ich würde gern nach Italien gefahren.",
        "wrong2": "Ich würde gern fahren nach Italien.",
        "explanation": "*würde* + infinitiv na konci věty: zdvořilé nebo nereálné přání."
      },
      {
        "id": "g-verbs-36",
        "level": "B1",
        "right": "Könnten Sie mir bitte helfen?",
        "wrong": "Können Sie mir bitte helfen würde?",
        "wrong2": "Könnte Sie mir bitte helfen?",
        "explanation": "Zdvořilá žádost: *Könnten Sie* (konjunktiv II) s *Sie*."
      },
      {
        "id": "g-verbs-37",
        "level": "B1",
        "right": "Das Auto wird repariert.",
        "wrong": "Das Auto wird repariert worden.",
        "wrong2": "Das Auto wird reparieren.",
        "explanation": "Pasivum: *werden* + příčestí."
      },
      {
        "id": "g-verbs-38",
        "level": "B1",
        "right": "Hier wird Deutsch gesprochen.",
        "wrong": "Hier wird Deutsch sprechen.",
        "wrong2": "Hier ist Deutsch gesprochen.",
        "explanation": "Pasivum v přítomnosti: *wird* + příčestí na konci."
      },
      {
        "id": "g-verbs-39",
        "level": "B1",
        "right": "Ich werde nächste Woche umziehen.",
        "wrong": "Ich werde nächste Woche umgezogen.",
        "wrong2": "Ich werde nächste Woche ziehen um.",
        "explanation": "Budoucí čas: *werden* + infinitiv na konci."
      }
    ],
    "perfect": [
      {
        "id": "g-perfect-1",
        "level": "A2",
        "right": "Ich habe Kaffee getrunken.",
        "wrong": "Ich bin Kaffee getrunken.",
        "wrong2": "Ich habe Kaffee trinken.",
        "explanation": "Perfekt: *haben* + příčestí na konci."
      },
      {
        "id": "g-perfect-2",
        "level": "A2",
        "right": "Ich habe Deutsch gelernt.",
        "wrong": "Ich habe Deutsch gelernen.",
        "wrong2": "Ich habe Deutsch lernt.",
        "explanation": "Pravidelné sloveso: *ge-* + kmen + *-t*, tedy *gelernt*."
      },
      {
        "id": "g-perfect-3",
        "level": "A2",
        "right": "Ich habe ein Buch gekauft.",
        "wrong": "Ich bin ein Buch gekauft.",
        "wrong2": "Ich habe ein Buch kaufen.",
        "explanation": "*kaufen* tvoří perfekt s *haben*: *gekauft*."
      },
      {
        "id": "g-perfect-4",
        "level": "A2",
        "right": "Ich bin nach Berlin gefahren.",
        "wrong": "Ich habe nach Berlin gefahren.",
        "wrong2": "Ich bin nach Berlin gefahrt.",
        "explanation": "Slovesa pohybu tvoří perfekt se *sein*; *fahren* má příčestí *gefahren*."
      },
      {
        "id": "g-perfect-5",
        "level": "A2",
        "right": "Er ist nach Hause gegangen.",
        "wrong": "Er hat nach Hause gegangen.",
        "wrong2": "Er ist nach Hause gegeht.",
        "explanation": "*gehen* se *sein*, příčestí *gegangen*."
      },
      {
        "id": "g-perfect-6",
        "level": "A2",
        "right": "Wir sind gestern zu Hause geblieben.",
        "wrong": "Wir haben gestern zu Hause geblieben.",
        "wrong2": "Wir sind gestern zu Hause gebleibt.",
        "explanation": "*bleiben* se *sein*, příčestí *geblieben*."
      },
      {
        "id": "g-perfect-7",
        "level": "A2",
        "right": "Sie ist früh aufgestanden.",
        "wrong": "Sie hat früh aufgestanden.",
        "wrong2": "Sie ist früh gestanden auf.",
        "explanation": "*aufstehen* se *sein*; *ge* se vkládá mezi předponu a kmen: *aufgestanden*."
      },
      {
        "id": "g-perfect-8",
        "level": "A2",
        "right": "Ich habe dich angerufen.",
        "wrong": "Ich habe dich geanrufen.",
        "wrong2": "Ich habe dich anrufen.",
        "explanation": "Odlučitelné sloveso: *ge* se vloží mezi předponu a kmen: *angerufen*."
      },
      {
        "id": "g-perfect-9",
        "level": "A2",
        "right": "Ich habe viel gearbeitet.",
        "wrong": "Ich habe viel gearbeit.",
        "wrong2": "Ich habe viel arbeitet.",
        "explanation": "Kmen na *-t* potřebuje *-et*: *gearbeitet*."
      },
      {
        "id": "g-perfect-10",
        "level": "A2",
        "right": "Er hat einen Film gesehen.",
        "wrong": "Er hat einen Film gesah.",
        "wrong2": "Er hat einen Film gesieht.",
        "explanation": "*sehen* je nepravidelné: *gesehen*."
      },
      {
        "id": "g-perfect-11",
        "level": "A2",
        "right": "Wir haben Pizza gegessen.",
        "wrong": "Wir haben Pizza geesst.",
        "wrong2": "Wir haben Pizza gegesst.",
        "explanation": "*essen*: *gegessen*."
      },
      {
        "id": "g-perfect-12",
        "level": "A2",
        "right": "Ich habe gestern lange geschlafen.",
        "wrong": "Ich bin gestern lange geschlafen.",
        "wrong2": "Ich habe gestern lange geschlaft.",
        "explanation": "*schlafen* s *haben*, příčestí *geschlafen*."
      },
      {
        "id": "g-perfect-13",
        "level": "A2",
        "right": "Hast du das Buch gelesen?",
        "wrong": "Hast du das Buch gelest?",
        "wrong2": "Bist du das Buch gelesen?",
        "explanation": "Otázka v perfektu: pomocné sloveso první, příčestí *gelesen* na konci."
      },
      {
        "id": "g-perfect-14",
        "level": "A2",
        "right": "Ich habe es nicht verstanden.",
        "wrong": "Ich habe es nicht geverstanden.",
        "wrong2": "Ich habe es nicht verstehen.",
        "explanation": "Nepřízvučná předpona *ver-* nepřijímá *ge-*: *verstanden*."
      },
      {
        "id": "g-perfect-15",
        "level": "A2",
        "right": "Er hat die Tür geöffnet.",
        "wrong": "Er hat die Tür öffnet.",
        "wrong2": "Er hat die Tür geöffnen.",
        "explanation": "Pravidelné *öffnen*: *geöffnet*."
      },
      {
        "id": "g-perfect-16",
        "level": "A2",
        "right": "Sie hat mir geholfen.",
        "wrong": "Sie ist mir geholfen.",
        "wrong2": "Sie hat mir gehelft.",
        "explanation": "*helfen* se *haben*, příčestí *geholfen*."
      },
      {
        "id": "g-perfect-17",
        "level": "A2",
        "right": "Ich bin gestern im Kino gewesen.",
        "wrong": "Ich habe gestern im Kino gewesen.",
        "wrong2": "Ich bin gestern im Kino gewest.",
        "explanation": "*sein* tvoří perfekt se *sein*: *bin gewesen*."
      },
      {
        "id": "g-perfect-18",
        "level": "A2",
        "right": "Ich habe viel Zeit gehabt.",
        "wrong": "Ich bin viel Zeit gehabt.",
        "wrong2": "Ich habe viel Zeit gehaben.",
        "explanation": "*haben* se *haben*: *gehabt*."
      },
      {
        "id": "g-perfect-19",
        "level": "A2",
        "right": "Wann bist du angekommen?",
        "wrong": "Wann hast du angekommen?",
        "wrong2": "Wann bist du gekommen an?",
        "explanation": "*ankommen* se *sein*; příčestí *angekommen*."
      },
      {
        "id": "g-perfect-20",
        "level": "A2",
        "right": "Wir haben das Zimmer gebucht.",
        "wrong": "Wir sind das Zimmer gebucht.",
        "wrong2": "Wir haben das Zimmer buchen.",
        "explanation": "*buchen* je pravidelné s *haben*: *gebucht*."
      },
      {
        "id": "g-perfect-21",
        "level": "B1",
        "right": "Gestern war ich im Büro.",
        "wrong": "Gestern ich war im Büro.",
        "wrong2": "Gestern bin ich im Büro war.",
        "explanation": "Präteritum od *sein* je *war*; po „včera“ hned sloveso."
      },
      {
        "id": "g-perfect-22",
        "level": "B1",
        "right": "Er hatte keine Zeit.",
        "wrong": "Er habte keine Zeit.",
        "wrong2": "Er hat keine Zeit gehabte.",
        "explanation": "Präteritum od *haben*: *hatte*."
      },
      {
        "id": "g-perfect-23",
        "level": "B1",
        "right": "Als ich ein Kind war, habe ich viel gespielt.",
        "wrong": "Als ich ein Kind bin, habe ich viel gespielt.",
        "wrong2": "Als ich war ein Kind, habe ich viel gespielt.",
        "explanation": "*Als* se používá pro minulost; ve vedlejší větě je sloveso na konci a v minulém čase."
      },
      {
        "id": "g-perfect-24",
        "level": "B1",
        "right": "Nachdem ich gegessen hatte, bin ich gegangen.",
        "wrong": "Nachdem ich gegessen hatte, ich bin gegangen.",
        "wrong2": "Nachdem ich hatte gegessen, bin ich gegangen.",
        "explanation": "Předminulý čas (*hatte gegessen*) a po vedlejší větě hned sloveso hlavní věty."
      },
      {
        "id": "g-perfect-25",
        "level": "B1",
        "right": "Ich wollte gestern kommen.",
        "wrong": "Ich wollte gestern gekommen.",
        "wrong2": "Ich wollen gestern kommen.",
        "explanation": "Modální slovesa mají v minulém čase obvykle präteritum: *wollte*."
      },
      {
        "id": "g-perfect-26",
        "level": "B1",
        "right": "Wir mussten lange warten.",
        "wrong": "Wir müssten lange warten.",
        "wrong2": "Wir musste lange warten.",
        "explanation": "Präteritum od *müssen*: *wir mussten* (bez přehlásky)."
      },
      {
        "id": "g-perfect-27",
        "level": "B1",
        "right": "Ich konnte nicht schlafen.",
        "wrong": "Ich könnte nicht schlafen.",
        "wrong2": "Ich kann nicht geschlafen.",
        "explanation": "Minulost od *können*: *konnte*; *könnte* je konjunktiv."
      },
      {
        "id": "g-perfect-28",
        "level": "B1",
        "right": "Er erzählte eine lustige Geschichte.",
        "wrong": "Er erzählete eine lustige Geschichte.",
        "wrong2": "Er hat erzählte eine lustige Geschichte.",
        "explanation": "Präteritum pravidelných sloves: kmen + *-te*."
      },
      {
        "id": "g-perfect-29",
        "level": "B1",
        "right": "Wir waren letztes Jahr in Wien.",
        "wrong": "Wir wart letztes Jahr in Wien.",
        "wrong2": "Wir sind letztes Jahr in Wien waren.",
        "explanation": "Präteritum od *sein*: *wir waren*."
      },
      {
        "id": "g-perfect-30",
        "level": "B1",
        "right": "Haben Sie schon gegessen?",
        "wrong": "Haben Sie schon essen?",
        "wrong2": "Sind Sie schon gegessen?",
        "explanation": "Otázka v perfektu: *haben* + příčestí *gegessen*."
      }
    ],
    "adjectives": [
      {
        "id": "g-adjectives-1",
        "level": "A2",
        "right": "Ich habe einen kleinen Hund.",
        "wrong": "Ich habe ein kleinen Hund.",
        "wrong2": "Ich habe einen kleine Hund.",
        "explanation": "Mužský rod, 4. pád: *einen* a přídavné jméno *kleinen*."
      },
      {
        "id": "g-adjectives-2",
        "level": "A2",
        "right": "Das ist ein interessantes Buch.",
        "wrong": "Das ist ein interessanter Buch.",
        "wrong2": "Das ist ein interessante Buch.",
        "explanation": "Po *ein* ve středním rodě přídavné jméno nese koncovku *-es*: *ein interessantes Buch*."
      },
      {
        "id": "g-adjectives-3",
        "level": "A2",
        "right": "Ich brauche eine neue Jacke.",
        "wrong": "Ich brauche ein neue Jacke.",
        "wrong2": "Ich brauche eine neuen Jacke.",
        "explanation": "Ženský rod, 4. pád: *eine neue Jacke*."
      },
      {
        "id": "g-adjectives-4",
        "level": "A2",
        "right": "Der neue Lehrer ist nett.",
        "wrong": "Der neuer Lehrer ist nett.",
        "wrong2": "Der neuen Lehrer ist nett.",
        "explanation": "Po určitém členu *der* v 1. pádu mužský rod: *-e*, tedy *der neue Lehrer*."
      },
      {
        "id": "g-adjectives-5",
        "level": "A2",
        "right": "Das ist ein guter Freund.",
        "wrong": "Das ist ein gute Freund.",
        "wrong2": "Das ist ein guten Freund.",
        "explanation": "Po *ein* v 1. pádu mužského rodu nese přídavné jméno koncovku *-er*: *ein guter Freund*."
      },
      {
        "id": "g-adjectives-6",
        "level": "A2",
        "right": "Die rote Tasche ist teuer.",
        "wrong": "Die roten Tasche ist teuer.",
        "wrong2": "Die rot Tasche ist teuer.",
        "explanation": "Po *die* v 1. pádu ženského rodu přídavné jméno končí na *-e*: *die rote Tasche*."
      },
      {
        "id": "g-adjectives-7",
        "level": "A2",
        "right": "Das neue Auto ist schnell.",
        "wrong": "Das neues Auto ist schnell.",
        "wrong2": "Das neuen Auto ist schnell.",
        "explanation": "Po určitém členu *das* v 1. pádu stačí *-e*; *-es* by bylo jen po *ein*."
      },
      {
        "id": "g-adjectives-8",
        "level": "A2",
        "right": "Ich sehe den großen Baum.",
        "wrong": "Ich sehe den große Baum.",
        "wrong2": "Ich sehe den großer Baum.",
        "explanation": "Po určitém členu je v 4. pádu mužského rodu koncovka *-en*: *den großen Baum*."
      },
      {
        "id": "g-adjectives-9",
        "level": "A2",
        "right": "Er trägt eine schwarze Hose.",
        "wrong": "Er trägt eine schwarzen Hose.",
        "wrong2": "Er trägt eine schwarz Hose.",
        "explanation": "Ženský rod v 4. pádu zůstává *-e*: *eine schwarze Hose*. Před podstatným jménem přídavné jméno vždy koncovku má."
      },
      {
        "id": "g-adjectives-10",
        "level": "A2",
        "right": "Wir haben ein großes Zimmer.",
        "wrong": "Wir haben ein große Zimmer.",
        "wrong2": "Wir haben ein großer Zimmer.",
        "explanation": "Střední rod po *ein* v 1. i 4. pádu: *-es*."
      },
      {
        "id": "g-adjectives-11",
        "level": "A2",
        "right": "Ich suche meinen alten Schlüssel.",
        "wrong": "Ich suche mein alten Schlüssel.",
        "wrong2": "Ich suche meinen alte Schlüssel.",
        "explanation": "Mužský rod v 4. pádu: *meinen* a *-en* u přídavného jména (*Schlüssel* je rod *der*)."
      },
      {
        "id": "g-adjectives-12",
        "level": "A2",
        "right": "Ich möchte einen heißen Tee.",
        "wrong": "Ich möchte ein heißen Tee.",
        "wrong2": "Ich möchte einen heiße Tee.",
        "explanation": "*Tee* je mužský rod, 4. pád: *einen heißen Tee*."
      },
      {
        "id": "g-adjectives-13",
        "level": "A2",
        "right": "Das ist eine schöne Stadt.",
        "wrong": "Das ist eine schönen Stadt.",
        "wrong2": "Das ist ein schöne Stadt.",
        "explanation": "Ženský rod: *eine* a koncovka *-e*."
      },
      {
        "id": "g-adjectives-14",
        "level": "A2",
        "right": "Die kleinen Kinder spielen im Garten.",
        "wrong": "Die kleine Kinder spielen im Garten.",
        "wrong2": "Die kleiner Kinder spielen im Garten.",
        "explanation": "Po určitém členu mají množná čísla vždy *-en*: *die kleinen Kinder*."
      },
      {
        "id": "g-adjectives-15",
        "level": "A2",
        "right": "Das Wetter ist heute schön.",
        "wrong": "Das Wetter ist heute schöne.",
        "wrong2": "Das Wetter ist heute schönes.",
        "explanation": "Přídavné jméno za slovesem *sein* (přísudek) se neskloňuje, na rozdíl od češtiny."
      },
      {
        "id": "g-adjectives-16",
        "level": "A2",
        "right": "Meine Wohnung ist klein und hell.",
        "wrong": "Meine Wohnung ist kleine und helle.",
        "wrong2": "Meine Wohnung ist kleinen und hellen.",
        "explanation": "Za *sein* žádné koncovky: *klein und hell*."
      },
      {
        "id": "g-adjectives-17",
        "level": "A2",
        "right": "Er hat keine neuen Schuhe.",
        "wrong": "Er hat keine neue Schuhe.",
        "wrong2": "Er hat keine neuer Schuhe.",
        "explanation": "Po *kein* v množném čísle vždy *-en*: *keine neuen Schuhe*."
      },
      {
        "id": "g-adjectives-18",
        "level": "B1",
        "right": "Kalter Kaffee schmeckt nicht gut.",
        "wrong": "Kalte Kaffee schmeckt nicht gut.",
        "wrong2": "Kalten Kaffee schmeckt nicht gut.",
        "explanation": "Bez členu přebírá přídavné jméno koncovku členu: 1. pád mužského rodu *-er* (jako *der*)."
      },
      {
        "id": "g-adjectives-19",
        "level": "B1",
        "right": "Ich trinke gern kalten Tee.",
        "wrong": "Ich trinke gern kalte Tee.",
        "wrong2": "Ich trinke gern kalter Tee.",
        "explanation": "Bez členu v 4. pádu mužského rodu: *-en* (jako *den*)."
      },
      {
        "id": "g-adjectives-20",
        "level": "B1",
        "right": "Ich trinke gern frische Milch.",
        "wrong": "Ich trinke gern frischen Milch.",
        "wrong2": "Ich trinke gern frisch Milch.",
        "explanation": "Bez členu u ženského rodu *-e* (jako *die*): *frische Milch*."
      },
      {
        "id": "g-adjectives-21",
        "level": "B1",
        "right": "Ich habe nette Kollegen.",
        "wrong": "Ich habe nett Kollegen.",
        "wrong2": "Ich habe netten Kollegen.",
        "explanation": "Bez členu v množném čísle ve 4. pádu *-e*: *nette Kollegen*."
      },
      {
        "id": "g-adjectives-22",
        "level": "B1",
        "right": "Ich habe viele gute Freunde.",
        "wrong": "Ich habe viele guten Freunde.",
        "wrong2": "Ich habe viele gut Freunde.",
        "explanation": "Po *viele*, *einige* a *wenige* se přídavné jméno chová jako bez členu: *-e*."
      },
      {
        "id": "g-adjectives-23",
        "level": "B1",
        "right": "Nach einem langen Tag bin ich müde.",
        "wrong": "Nach einem lange Tag bin ich müde.",
        "wrong2": "Nach ein langen Tag bin ich müde.",
        "explanation": "Po *nach* je 3. pád; mužský rod po *einem* má *-en*: *einem langen Tag*."
      },
      {
        "id": "g-adjectives-24",
        "level": "B1",
        "right": "Ich wohne in einer kleinen Stadt.",
        "wrong": "Ich wohne in einer kleine Stadt.",
        "wrong2": "Ich wohne in einer kleiner Stadt.",
        "explanation": "Ve 3. pádu je po členu vždy *-en*: *in einer kleinen Stadt*."
      },
      {
        "id": "g-adjectives-25",
        "level": "B1",
        "right": "Mit dem alten Auto fahren wir nach Wien.",
        "wrong": "Mit dem alte Auto fahren wir nach Wien.",
        "wrong2": "Mit dem alter Auto fahren wir nach Wien.",
        "explanation": "Po *mit* je 3. pád a po *dem* přídavné jméno končí na *-en*."
      },
      {
        "id": "g-adjectives-26",
        "level": "B1",
        "right": "Bei schlechtem Wetter bleiben wir zu Hause.",
        "wrong": "Bei schlechtes Wetter bleiben wir zu Hause.",
        "wrong2": "Bei schlechten Wetter bleiben wir zu Hause.",
        "explanation": "Bez členu se ve 3. pádu mužského a středního rodu objeví koncovka členu: *-em* (jako *dem*)."
      },
      {
        "id": "g-adjectives-27",
        "level": "B1",
        "right": "Mit frischem Brot schmeckt die Suppe besser.",
        "wrong": "Mit frisches Brot schmeckt die Suppe besser.",
        "wrong2": "Mit frischen Brot schmeckt die Suppe besser.",
        "explanation": "Bez členu ve 3. pádu středního rodu: *frischem Brot*."
      },
      {
        "id": "g-adjectives-28",
        "level": "B1",
        "right": "Sie trinkt Kaffee mit warmer Milch.",
        "wrong": "Sie trinkt Kaffee mit warme Milch.",
        "wrong2": "Sie trinkt Kaffee mit warmem Milch.",
        "explanation": "Bez členu ve 3. pádu ženského rodu: *-er* (jako *der*)."
      },
      {
        "id": "g-adjectives-29",
        "level": "B1",
        "right": "Das ist ein hoher Berg.",
        "wrong": "Das ist ein hocher Berg.",
        "wrong2": "Das ist ein hoch Berg.",
        "explanation": "*hoch* před podstatným jménem ztrácí *c*: *hoher Berg*."
      },
      {
        "id": "g-adjectives-30",
        "level": "B1",
        "right": "Mein Bruder ist größer als ich.",
        "wrong": "Mein Bruder ist mehr groß als ich.",
        "wrong2": "Mein Bruder ist größer wie ich.",
        "explanation": "Komparativ se tvoří příponou *-er* (často s přehláskou) a porovnává se s *als*."
      },
      {
        "id": "g-adjectives-31",
        "level": "B1",
        "right": "Er ist so groß wie sein Vater.",
        "wrong": "Er ist so groß als sein Vater.",
        "wrong2": "Er ist so größer wie sein Vater.",
        "explanation": "Rovnost: *so* + základní tvar + *wie*."
      },
      {
        "id": "g-adjectives-32",
        "level": "B1",
        "right": "Dieses Buch ist besser als das andere.",
        "wrong": "Dieses Buch ist guter als das andere.",
        "wrong2": "Dieses Buch ist mehr gut als das andere.",
        "explanation": "Nepravidelný komparativ: *gut – besser – am besten*."
      },
      {
        "id": "g-adjectives-33",
        "level": "B1",
        "right": "Die Preise sind höher geworden.",
        "wrong": "Die Preise sind hocher geworden.",
        "wrong2": "Die Preise sind mehr hoch geworden.",
        "explanation": "Nepravidelný komparativ: *hoch – höher – am höchsten*."
      },
      {
        "id": "g-adjectives-34",
        "level": "B1",
        "right": "Ich esse gern Pizza, aber lieber Pasta.",
        "wrong": "Ich esse gern Pizza, aber gerner Pasta.",
        "wrong2": "Ich esse gern Pizza, aber mehr gern Pasta.",
        "explanation": "Stupňování *gern – lieber – am liebsten* je nepravidelné."
      },
      {
        "id": "g-adjectives-35",
        "level": "B1",
        "right": "Er läuft am schnellsten.",
        "wrong": "Er läuft am schnellster.",
        "wrong2": "Er läuft schnellsten.",
        "explanation": "Superlativ příslovce: *am* + *-sten*."
      },
      {
        "id": "g-adjectives-36",
        "level": "B1",
        "right": "Das ist das beste Restaurant der Stadt.",
        "wrong": "Das ist das gutste Restaurant der Stadt.",
        "wrong2": "Das ist das bessere Restaurant der Stadt.",
        "explanation": "Před podstatným jménem superlativ + koncovka: *das beste* (od *gut*)."
      },
      {
        "id": "g-adjectives-37",
        "level": "B1",
        "right": "Das ist der höchste Berg in Deutschland.",
        "wrong": "Das ist der hochste Berg in Deutschland.",
        "wrong2": "Das ist der höchsten Berg in Deutschland.",
        "explanation": "Superlativ od *hoch* je *höchst-*; po *der* v 1. pádu mužského rodu *-e*."
      },
      {
        "id": "g-adjectives-38",
        "level": "B2",
        "right": "Der Deutsche wohnt in Prag.",
        "wrong": "Der Deutscher wohnt in Prag.",
        "wrong2": "Der Deutsch wohnt in Prag.",
        "explanation": "Podstatné jméno vzniklé z přídavného se skloňuje jako přídavné: po *der* je *-e*."
      },
      {
        "id": "g-adjectives-39",
        "level": "B2",
        "right": "Ein Deutscher wohnt in Prag.",
        "wrong": "Ein Deutsche wohnt in Prag.",
        "wrong2": "Ein Deutsch wohnt in Prag.",
        "explanation": "Po *ein* v 1. pádu mužského rodu *-er*: *ein Deutscher*."
      },
      {
        "id": "g-adjectives-40",
        "level": "B2",
        "right": "Ich kenne viele Deutsche.",
        "wrong": "Ich kenne viele Deutschen.",
        "wrong2": "Ich kenne viele Deutscher.",
        "explanation": "Množné číslo bez členu a po *viele* má *-e*."
      },
      {
        "id": "g-adjectives-41",
        "level": "B2",
        "right": "Ich möchte etwas Neues ausprobieren.",
        "wrong": "Ich möchte etwas neue ausprobieren.",
        "wrong2": "Ich möchte etwas Neuen ausprobieren.",
        "explanation": "Po *etwas*, *nichts*, *viel* se přídavné jméno píše velkým a má *-es*: *etwas Neues*."
      },
      {
        "id": "g-adjectives-42",
        "level": "B2",
        "right": "Es gibt nichts Besonderes.",
        "wrong": "Es gibt nichts Besondere.",
        "wrong2": "Es gibt nichts Besonders.",
        "explanation": "Po *nichts* velké písmeno a koncovka *-es*: *nichts Besonderes*."
      },
      {
        "id": "g-adjectives-43",
        "level": "B2",
        "right": "Das Haus des alten Mannes ist verkauft.",
        "wrong": "Das Haus des alter Mannes ist verkauft.",
        "wrong2": "Das Haus des alte Mannes ist verkauft.",
        "explanation": "Ve 2. pádu po členu *-en* a podstatné jméno mužského rodu přibírá *-es*."
      },
      {
        "id": "g-adjectives-44",
        "level": "B2",
        "right": "Er ist der älteste von drei Brüdern.",
        "wrong": "Er ist der ältester von drei Brüdern.",
        "wrong2": "Er ist der am ältesten von drei Brüdern.",
        "explanation": "Před podstatným jménem *der älteste*, tvar *am …sten* se nepoužívá."
      },
      {
        "id": "g-adjectives-45",
        "level": "B2",
        "right": "Sie hat die gleiche Jacke wie ich.",
        "wrong": "Sie hat die gleiche Jacke als ich.",
        "wrong2": "Sie hat die gleiche Jacke wie mich.",
        "explanation": "Po *gleich* je *wie* a hned za ním 1. pád (*ich*)."
      },
      {
        "id": "g-adjectives-46",
        "level": "B2",
        "right": "Je älter er wird, desto ruhiger wird er.",
        "wrong": "Je mehr alt er wird, desto mehr ruhig wird er.",
        "wrong2": "Je älter er wird, desto ruhiger er wird.",
        "explanation": "*Je … desto* se komparativem; po *desto* následuje hlavní věta, sloveso hned za ním."
      }
    ],
    "conditional": [
      {
        "id": "g-conditional-1",
        "level": "B1",
        "right": "Ich hätte gern einen Kaffee.",
        "wrong": "Ich hatte gern einen Kaffee.",
        "wrong2": "Ich hätten gern einen Kaffee.",
        "explanation": "Zdvořilé přání: *ich hätte* (bez koncovky), ne *hatte*, to je minulý čas."
      },
      {
        "id": "g-conditional-2",
        "level": "B1",
        "right": "Könnten Sie mir bitte helfen?",
        "wrong": "Könnt Sie mir bitte helfen?",
        "wrong2": "Konnten Sie mir bitte helfen?",
        "explanation": "Zdvořilá prosba: *könnten* (konjunktiv s přehláskou), ne *konnten* (minulý čas)."
      },
      {
        "id": "g-conditional-3",
        "level": "B1",
        "right": "Würdest du mir bitte das Salz geben?",
        "wrong": "Würdest du mir bitte das Salz gegeben?",
        "wrong2": "Würdest du mir bitte das Salz gibst?",
        "explanation": "*würde* + infinitiv na konci věty: *geben*."
      },
      {
        "id": "g-conditional-4",
        "level": "B1",
        "right": "Dürfte ich Sie etwas fragen?",
        "wrong": "Dürfe ich Sie etwas fragen?",
        "wrong2": "Durfte ich Sie etwas fragen?",
        "explanation": "Zdvořilá žádost: *dürfte* (s přehláskou)."
      },
      {
        "id": "g-conditional-5",
        "level": "B1",
        "right": "Hätten Sie vielleicht einen Moment Zeit?",
        "wrong": "Hätte Sie vielleicht einen Moment Zeit?",
        "wrong2": "Hatten Sie vielleicht einen Moment Zeit?",
        "explanation": "*Sie* se časuje jako 3. osoba množného čísla: *hätten Sie*."
      },
      {
        "id": "g-conditional-6",
        "level": "B1",
        "right": "Ich würde gern nach Wien fahren.",
        "wrong": "Ich würde gern nach Wien gefahren.",
        "wrong2": "Ich würde gern nach Wien fährt.",
        "explanation": "Po *würde* je vždy základní tvar slovesa (infinitiv) na konci věty."
      },
      {
        "id": "g-conditional-7",
        "level": "B1",
        "right": "Ich würde lieber zu Hause bleiben.",
        "wrong": "Ich würde lieber zu Hause geblieben.",
        "wrong2": "Ich würde lieber zu Hause bleibt.",
        "explanation": "*würde* + infinitiv: *bleiben*."
      },
      {
        "id": "g-conditional-8",
        "level": "B1",
        "right": "Wenn ich reich wäre, würde ich reisen.",
        "wrong": "Wenn ich reich war, würde ich reisen.",
        "wrong2": "Wenn ich reich wäre, ich würde reisen.",
        "explanation": "Nereálná podmínka: *wäre* (ne *war*) a po vedlejší větě hned sloveso hlavní věty."
      },
      {
        "id": "g-conditional-9",
        "level": "B1",
        "right": "Wenn ich Zeit hätte, würde ich dich besuchen.",
        "wrong": "Wenn ich Zeit hatte, würde ich dich besuchen.",
        "wrong2": "Wenn ich Zeit hätte, ich würde dich besuchen.",
        "explanation": "Nereálná podmínka: *hätte* ve vedlejší větě, hned potom *würde* v hlavní."
      },
      {
        "id": "g-conditional-10",
        "level": "B1",
        "right": "An deiner Stelle würde ich das nicht tun.",
        "wrong": "An deiner Stelle werde ich das nicht tun.",
        "wrong2": "An deiner Stelle würden ich das nicht tun.",
        "explanation": "Rada: *an deiner Stelle würde ich*; *werde* by byla budoucnost."
      },
      {
        "id": "g-conditional-11",
        "level": "B1",
        "right": "Es wäre schön, wenn du kommen könntest.",
        "wrong": "Es wäre schön, wenn du kommen konntest.",
        "wrong2": "Es wäre schön, wenn du könntest kommen.",
        "explanation": "Ve vedlejší větě je konjunktiv *könntest* na konci, za infinitivem."
      },
      {
        "id": "g-conditional-12",
        "level": "B1",
        "right": "Du solltest mehr schlafen.",
        "wrong": "Du sollte mehr schlafen.",
        "wrong2": "Du solltest mehr geschlafen.",
        "explanation": "Rada: *du solltest* + infinitiv."
      },
      {
        "id": "g-conditional-13",
        "level": "B1",
        "right": "Wir sollten früher losgehen.",
        "wrong": "Wir sollte früher losgehen.",
        "wrong2": "Wir sollt früher losgehen.",
        "explanation": "*wir sollten* (stejný tvar jako infinitiv) + infinitiv *losgehen*."
      },
      {
        "id": "g-conditional-14",
        "level": "B2",
        "right": "Wenn ich das gewusst hätte, wäre ich nicht gekommen.",
        "wrong": "Wenn ich das gewusst habe, wäre ich nicht gekommen.",
        "wrong2": "Wenn ich das gewusst hätte, war ich nicht gekommen.",
        "explanation": "Nereálná minulost: *hätte* / *wäre* + příčestí; *kommen* je sloveso pohybu, tedy *wäre gekommen*."
      },
      {
        "id": "g-conditional-15",
        "level": "B2",
        "right": "Hätte ich mehr Geld, würde ich ein Haus kaufen.",
        "wrong": "Wenn hätte ich mehr Geld, würde ich ein Haus kaufen.",
        "wrong2": "Hätte ich mehr Geld, ich würde ein Haus kaufen.",
        "explanation": "Bez *wenn* se vedlejší věta začíná slovesem; hlavní věta pak začíná slovesem také."
      },
      {
        "id": "g-conditional-16",
        "level": "B2",
        "right": "Ich hätte nie gedacht, dass das so schwer ist.",
        "wrong": "Ich hatte nie gedacht, dass das so schwer ist.",
        "wrong2": "Ich hätte nie gedenkt, dass das so schwer ist.",
        "explanation": "*hätte gedacht* = bych nepomyslel; *hatte gedacht* je jen minulost."
      },
      {
        "id": "g-conditional-17",
        "level": "B2",
        "right": "Ich wäre fast zu spät gekommen.",
        "wrong": "Ich war fast zu spät gekommen.",
        "wrong2": "Ich hätte fast zu spät gekommen.",
        "explanation": "*kommen* tvoří perfekt se *sein*, tedy konjunktiv *wäre gekommen*."
      },
      {
        "id": "g-conditional-18",
        "level": "B2",
        "right": "Ich wünschte, ich hätte mehr Zeit.",
        "wrong": "Ich wünschte, ich habe mehr Zeit.",
        "wrong2": "Ich wünschte, ich hatte mehr Zeit.",
        "explanation": "Po *wünschte* (přání, které se nesplnilo) následuje konjunktiv: *hätte*."
      },
      {
        "id": "g-conditional-19",
        "level": "B2",
        "right": "Ich wünschte, du wärst hier.",
        "wrong": "Ich wünschte, du warst hier.",
        "wrong2": "Ich wünschte, du wirst hier.",
        "explanation": "Přání: konjunktiv *du wärst*."
      },
      {
        "id": "g-conditional-20",
        "level": "B2",
        "right": "Wenn er nur schneller wäre!",
        "wrong": "Wenn er nur schneller war!",
        "wrong2": "",
        "explanation": "Přání s *wenn … nur* se vyjadřuje konjunktivem: *wäre*."
      },
      {
        "id": "g-conditional-21",
        "level": "B2",
        "right": "Er tut so, als wäre er krank.",
        "wrong": "Er tut so, als war er krank.",
        "wrong2": "Er tut so, als ob er wäre krank.",
        "explanation": "*als* + sloveso na druhém místě, konjunktiv *wäre*; s *als ob* je sloveso na konci."
      },
      {
        "id": "g-conditional-22",
        "level": "B2",
        "right": "Er tut so, als ob er alles wüsste.",
        "wrong": "Er tut so, als ob er alles wusste.",
        "wrong2": "Er tut so, als er alles wüsste.",
        "explanation": "Po *als ob* následuje konjunktiv (*wüsste*) a sloveso je na konci; *als* bez *ob* by mělo sloveso hned za sebou."
      },
      {
        "id": "g-conditional-23",
        "level": "B2",
        "right": "Sie sagt, er sei krank.",
        "wrong": "Sie sagt, er seie krank.",
        "wrong2": "Sie sagt, er sein krank.",
        "explanation": "Konjunktiv I ve zprostředkované řeči: *er sei* (od *sein* nepravidelně)."
      },
      {
        "id": "g-conditional-24",
        "level": "B2",
        "right": "Er sagte, sie habe keine Zeit.",
        "wrong": "Er sagte, sie hebe keine Zeit.",
        "wrong2": "Er sagte, sie habt keine Zeit.",
        "explanation": "Konjunktiv I od *haben*: *sie habe*."
      },
      {
        "id": "g-conditional-25",
        "level": "B2",
        "right": "Mit etwas Glück hätten wir es geschafft.",
        "wrong": "Mit etwas Glück haben wir es geschafft hätten.",
        "wrong2": "Mit etwas Glück hatten wir es geschafft.",
        "explanation": "*hätten … geschafft*: nereálná minulost (s trochou štěstí bychom to zvládli)."
      },
      {
        "id": "g-conditional-26",
        "level": "B2",
        "right": "Sie hätte lieber zu Hause bleiben sollen.",
        "wrong": "Sie hätte lieber zu Hause sollen bleiben.",
        "wrong2": "Sie wäre lieber zu Hause bleiben sollen.",
        "explanation": "S modálním slovesem v minulém konjunktivu: *hätte … bleiben sollen* (dva infinitivy na konci)."
      },
      {
        "id": "g-conditional-27",
        "level": "B2",
        "right": "Das hätte ich dir gleich sagen können.",
        "wrong": "Das hätte ich dir gleich sagen gekonnt.",
        "wrong2": "Das hätte ich dir gleich können sagen.",
        "explanation": "Modální sloveso v minulosti za infinitivem: *sagen können* (náhradní infinitiv, ne příčestí)."
      }
    ],
    "passive": [
      {
        "id": "g-passive-1",
        "level": "A2",
        "right": "Die Suppe wird gekocht.",
        "wrong": "Die Suppe wird kochen.",
        "wrong2": "Die Suppe wird gekochen.",
        "explanation": "Pasiv přítomného času: *werden* + příčestí (*gekocht*)."
      },
      {
        "id": "g-passive-2",
        "level": "A2",
        "right": "Der Brief wird geschrieben.",
        "wrong": "Der Brief wird schreiben.",
        "wrong2": "Der Brief wird geschriebt.",
        "explanation": "*werden* + příčestí; *schreiben* má příčestí *geschrieben*."
      },
      {
        "id": "g-passive-3",
        "level": "A2",
        "right": "Hier wird Deutsch gesprochen.",
        "wrong": "Hier wird Deutsch sprechen.",
        "wrong2": "Hier wird Deutsch gesprecht.",
        "explanation": "Pasiv: *wird … gesprochen*; podmět je *Deutsch*."
      },
      {
        "id": "g-passive-4",
        "level": "B1",
        "right": "Das Auto wird repariert.",
        "wrong": "Das Auto wird reparieren.",
        "wrong2": "Das Auto wird gerepariert.",
        "explanation": "Slovesa na *-ieren* netvoří příčestí s *ge-*: *repariert*."
      },
      {
        "id": "g-passive-5",
        "level": "B1",
        "right": "Die Tür wurde geschlossen.",
        "wrong": "Die Tür wurde schließen.",
        "wrong2": "Die Tür wurde geschloss.",
        "explanation": "Minulý čas pasiva: *wurde* + příčestí *geschlossen*."
      },
      {
        "id": "g-passive-6",
        "level": "B1",
        "right": "Das Fenster wurde gestern geputzt.",
        "wrong": "Das Fenster wurde gestern geputzen.",
        "wrong2": "Das Fenster wird gestern geputzt.",
        "explanation": "Po *gestern* minulý čas pasiva: *wurde … geputzt*."
      },
      {
        "id": "g-passive-7",
        "level": "B1",
        "right": "Die Fenster werden jeden Tag geputzt.",
        "wrong": "Die Fenster werden jeden Tag putzen.",
        "wrong2": "Die Fenster wird jeden Tag geputzt.",
        "explanation": "Množné číslo: *werden*, na konci příčestí."
      },
      {
        "id": "g-passive-8",
        "level": "B1",
        "right": "Der Vertrag wurde unterschrieben.",
        "wrong": "Der Vertrag wurde geunterschrieben.",
        "wrong2": "Der Vertrag wurde unterschreiben.",
        "explanation": "Neodlučitelná předpona *unter-*: příčestí bez *ge-*."
      },
      {
        "id": "g-passive-9",
        "level": "B1",
        "right": "Der Tisch wurde abgeräumt.",
        "wrong": "Der Tisch wurde geabräumt.",
        "wrong2": "Der Tisch wurde räumt ab.",
        "explanation": "Odlučitelné *abräumen*: *ge* se vloží mezi předponu a kmen: *abgeräumt*."
      },
      {
        "id": "g-passive-10",
        "level": "B1",
        "right": "Die Rechnung muss bezahlt werden.",
        "wrong": "Die Rechnung muss bezahlt sein.",
        "wrong2": "Die Rechnung muss werden bezahlt.",
        "explanation": "Pasiv s modálním slovesem: příčestí + *werden* na konci věty."
      },
      {
        "id": "g-passive-11",
        "level": "B1",
        "right": "Hier darf nicht geraucht werden.",
        "wrong": "Hier darf nicht rauchen werden.",
        "wrong2": "Hier darf nicht geraucht sein.",
        "explanation": "*darf nicht* + příčestí + *werden*."
      },
      {
        "id": "g-passive-12",
        "level": "B1",
        "right": "Das kann nicht vergessen werden.",
        "wrong": "Das kann nicht vergessen sein.",
        "wrong2": "Das kann nicht werden vergessen.",
        "explanation": "Modální pasiv: *vergessen werden* na konci."
      },
      {
        "id": "g-passive-13",
        "level": "B1",
        "right": "Der Täter wurde von der Polizei verhaftet.",
        "wrong": "Der Täter wurde von die Polizei verhaftet.",
        "wrong2": "Der Täter wurde mit der Polizei verhaftet.",
        "explanation": "Původce děje se uvádí s *von* + 3. pád: *von der Polizei*."
      },
      {
        "id": "g-passive-14",
        "level": "B1",
        "right": "Die Kinder werden von der Lehrerin unterrichtet.",
        "wrong": "Die Kinder werden von die Lehrerin unterrichtet.",
        "wrong2": "Die Kinder werden von der Lehrerin unterrichten.",
        "explanation": "*von* + 3. pád a příčestí na konci."
      },
      {
        "id": "g-passive-15",
        "level": "B1",
        "right": "Das Buch wurde von einem berühmten Autor geschrieben.",
        "wrong": "Das Buch wurde von einen berühmten Autor geschrieben.",
        "wrong2": "Das Buch wurde von einem berühmten Autor geschreibt.",
        "explanation": "*von* + 3. pád: *einem berühmten Autor*; příčestí *geschrieben*."
      },
      {
        "id": "g-passive-16",
        "level": "B1",
        "right": "Der Computer ist repariert worden.",
        "wrong": "Der Computer ist repariert geworden.",
        "wrong2": "Der Computer hat repariert worden.",
        "explanation": "Perfekt pasivu: *ist … worden* (ne *geworden*), pomocné je *sein*."
      },
      {
        "id": "g-passive-17",
        "level": "B1",
        "right": "Das Paket ist heute geliefert worden.",
        "wrong": "Das Paket ist heute geliefert geworden.",
        "wrong2": "Das Paket hat heute geliefert worden.",
        "explanation": "Perfekt pasivu: *sein* + příčestí + *worden*."
      },
      {
        "id": "g-passive-18",
        "level": "B1",
        "right": "Es wird viel Wasser getrunken.",
        "wrong": "Es wird viel Wasser trinken.",
        "wrong2": "Es wird viel Wasser getrinkt.",
        "explanation": "*trinken* má příčestí *getrunken*."
      },
      {
        "id": "g-passive-19",
        "level": "B2",
        "right": "Mir wurde geholfen.",
        "wrong": "Ich wurde geholfen.",
        "wrong2": "Mir wurde helfen.",
        "explanation": "*helfen* chce 3. pád, takže v pasivu není podmět: *mir wurde geholfen*."
      },
      {
        "id": "g-passive-20",
        "level": "B2",
        "right": "Dem Mann wurde ein Zimmer gegeben.",
        "wrong": "Der Mann wurde ein Zimmer gegeben.",
        "wrong2": "Dem Mann wurde ein Zimmer geben.",
        "explanation": "Komu? 3. pád zůstává i v pasivu: *dem Mann*."
      },
      {
        "id": "g-passive-21",
        "level": "B2",
        "right": "Es wurde getanzt und gelacht.",
        "wrong": "Es wurde getanzt und gelachen.",
        "wrong2": "Es wurde tanzen und lachen.",
        "explanation": "Bezosobní pasiv: *es wurde* + příčestí; *lachen* má příčestí *gelacht*."
      },
      {
        "id": "g-passive-22",
        "level": "B2",
        "right": "Bei uns wird um acht Uhr gegessen.",
        "wrong": "Bei uns ist um acht Uhr gegessen.",
        "wrong2": "Bei uns wird um acht Uhr gegesst.",
        "explanation": "Bezosobní pasiv: *wird … gegessen*."
      },
      {
        "id": "g-passive-23",
        "level": "B2",
        "right": "Das Haus soll nächstes Jahr verkauft werden.",
        "wrong": "Das Haus soll nächstes Jahr verkauft sein.",
        "wrong2": "Das Haus soll nächstes Jahr werden verkauft.",
        "explanation": "Modální pasiv v budoucnosti: příčestí + *werden* na konci."
      },
      {
        "id": "g-passive-24",
        "level": "B2",
        "right": "Es muss etwas getan werden.",
        "wrong": "Es muss etwas tun werden.",
        "wrong2": "Es muss etwas getan sein.",
        "explanation": "*getan werden*: příčestí od *tun* je *getan*."
      },
      {
        "id": "g-passive-25",
        "level": "B2",
        "right": "Das Problem lässt sich leicht lösen.",
        "wrong": "Das Problem lässt sich leicht gelöst.",
        "wrong2": "Das Problem lässt leicht sich lösen.",
        "explanation": "*sich lassen* + infinitiv nahrazuje pasiv („dá se vyřešit“); *sich* hned za *lässt*."
      },
      {
        "id": "g-passive-26",
        "level": "B2",
        "right": "Der Film wurde im Jahr zweitausend gedreht.",
        "wrong": "Der Film wurde im Jahr zweitausend gedrehen.",
        "wrong2": "Der Film war im Jahr zweitausend gedreht.",
        "explanation": "Minulý děj v pasivu: *wurde … gedreht*."
      }
    ],
    "conjunctions": [
      {
        "id": "g-conjunctions-1",
        "level": "A2",
        "right": "Ich bleibe zu Hause, weil ich krank bin.",
        "wrong": "Ich bleibe zu Hause, weil ich bin krank.",
        "wrong2": "Ich bleibe zu Hause, weil bin ich krank.",
        "explanation": "Po *weil* je sloveso na konci vedlejší věty."
      },
      {
        "id": "g-conjunctions-2",
        "level": "A2",
        "right": "Ich weiß, dass er kommt.",
        "wrong": "Ich weiß, dass er kommen.",
        "wrong2": "Ich weiß, dass kommt er.",
        "explanation": "Po *dass* je časované sloveso na konci."
      },
      {
        "id": "g-conjunctions-3",
        "level": "A2",
        "right": "Er sagt, dass er keine Zeit hat.",
        "wrong": "Er sagt, dass er hat keine Zeit.",
        "wrong2": "Er sagt, dass hat er keine Zeit.",
        "explanation": "Vedlejší věta s *dass*: časované sloveso (*hat*) na konci."
      },
      {
        "id": "g-conjunctions-4",
        "level": "A2",
        "right": "Wenn es regnet, bleibe ich zu Hause.",
        "wrong": "Wenn es regnet, ich bleibe zu Hause.",
        "wrong2": "Wenn regnet es, bleibe ich zu Hause.",
        "explanation": "Po vedlejší větě hned sloveso hlavní věty: *bleibe ich*."
      },
      {
        "id": "g-conjunctions-5",
        "level": "A2",
        "right": "Ich gehe nach Hause, denn ich bin müde.",
        "wrong": "Ich gehe nach Hause, denn bin ich müde.",
        "wrong2": "Ich gehe nach Hause, denn ich müde bin.",
        "explanation": "*denn* je souřadící spojka a nemění slovosled."
      },
      {
        "id": "g-conjunctions-6",
        "level": "A2",
        "right": "Ich lerne Deutsch, weil ich in Wien arbeiten möchte.",
        "wrong": "Ich lerne Deutsch, weil ich möchte in Wien arbeiten.",
        "wrong2": "Ich lerne Deutsch, weil ich in Wien möchte arbeiten.",
        "explanation": "Ve vedlejší větě je časované sloveso na úplném konci, po infinitivu: *arbeiten möchte*."
      },
      {
        "id": "g-conjunctions-7",
        "level": "A2",
        "right": "Ich rufe dich an, wenn ich ankomme.",
        "wrong": "Ich rufe dich an, wenn ich komme an.",
        "wrong2": "Ich rufe dich an, wenn ich anzukommen.",
        "explanation": "Odlučitelné sloveso se ve vedlejší větě nerozdělí: *ankomme*."
      },
      {
        "id": "g-conjunctions-8",
        "level": "B1",
        "right": "Obwohl es regnet, gehen wir spazieren.",
        "wrong": "Obwohl es regnet, wir gehen spazieren.",
        "wrong2": "Obwohl regnet es, gehen wir spazieren.",
        "explanation": "Po vedlejší větě s *obwohl* začíná hlavní věta slovesem."
      },
      {
        "id": "g-conjunctions-9",
        "level": "B1",
        "right": "Ich trinke Tee, damit ich wach bleibe.",
        "wrong": "Ich trinke Tee, damit ich bleibe wach.",
        "wrong2": "Ich trinke Tee, um ich wach zu bleiben.",
        "explanation": "*damit* uvozuje vedlejší větu s vlastním podmětem; sloveso na konci."
      },
      {
        "id": "g-conjunctions-10",
        "level": "B1",
        "right": "Ich lerne viel, um die Prüfung zu bestehen.",
        "wrong": "Ich lerne viel, um die Prüfung bestehen.",
        "wrong2": "Ich lerne viel, um die Prüfung bestehen zu.",
        "explanation": "*um … zu* + infinitiv na konci: *zu bestehen*."
      },
      {
        "id": "g-conjunctions-11",
        "level": "B1",
        "right": "Er geht ins Bett, ohne die Zähne zu putzen.",
        "wrong": "Er geht ins Bett, ohne die Zähne putzen.",
        "wrong2": "Er geht ins Bett, ohne die Zähne putzt.",
        "explanation": "*ohne … zu* + infinitiv."
      },
      {
        "id": "g-conjunctions-12",
        "level": "B1",
        "right": "Ich habe keine Lust, heute zu arbeiten.",
        "wrong": "Ich habe keine Lust, heute arbeiten.",
        "wrong2": "Ich habe keine Lust, zu heute arbeiten.",
        "explanation": "Infinitivní větu uvozuje *zu* těsně před slovesem: *zu arbeiten*."
      },
      {
        "id": "g-conjunctions-13",
        "level": "B1",
        "right": "Der Mann, der dort steht, ist mein Onkel.",
        "wrong": "Der Mann, den dort steht, ist mein Onkel.",
        "wrong2": "Der Mann, der steht dort, ist mein Onkel.",
        "explanation": "Vztažné zájmeno *der* (1. pád, mužský rod) a sloveso na konci vedlejší věty."
      },
      {
        "id": "g-conjunctions-14",
        "level": "B1",
        "right": "Die Frau, die ich gestern getroffen habe, ist nett.",
        "wrong": "Die Frau, der ich gestern getroffen habe, ist nett.",
        "wrong2": "Die Frau, die ich habe gestern getroffen, ist nett.",
        "explanation": "Koho jsem potkal? 4. pád ženského rodu: *die*; sloveso *habe* na konci."
      },
      {
        "id": "g-conjunctions-15",
        "level": "B1",
        "right": "Das Buch, das ich lese, ist spannend.",
        "wrong": "Das Buch, was ich lese, ist spannend.",
        "wrong2": "Das Buch, den ich lese, ist spannend.",
        "explanation": "Vztažné zájmeno se řídí rodem slova, na které se vztahuje: *das Buch … das*."
      },
      {
        "id": "g-conjunctions-16",
        "level": "B1",
        "right": "Ich weiß nicht, ob er kommt.",
        "wrong": "Ich weiß nicht, ob kommt er.",
        "wrong2": "Ich weiß nicht, ob er kommen.",
        "explanation": "Nepřímá otázka s *ob*: sloveso na konci."
      },
      {
        "id": "g-conjunctions-17",
        "level": "B1",
        "right": "Ich weiß nicht, wo er wohnt.",
        "wrong": "Ich weiß nicht, wo wohnt er.",
        "wrong2": "Ich weiß nicht, wo er wohnen.",
        "explanation": "Nepřímá otázka s tázacím slovem: časované sloveso na konci."
      },
      {
        "id": "g-conjunctions-18",
        "level": "B1",
        "right": "Ich frage mich, wann der Zug ankommt.",
        "wrong": "Ich frage mich, wann kommt der Zug an.",
        "wrong2": "Ich frage mich, wann der Zug kommt an.",
        "explanation": "V nepřímé otázce se odlučitelné sloveso spojí: *ankommt*."
      },
      {
        "id": "g-conjunctions-19",
        "level": "B1",
        "right": "Als ich jung war, wohnte ich in Brünn.",
        "wrong": "Wenn ich jung war, wohnte ich in Brünn.",
        "wrong2": "Als ich war jung, wohnte ich in Brünn.",
        "explanation": "*als* se používá pro jednorázovou minulost, *wenn* pro opakování nebo budoucnost."
      },
      {
        "id": "g-conjunctions-20",
        "level": "B1",
        "right": "Immer wenn ich ihn sehe, lache ich.",
        "wrong": "Immer als ich ihn sehe, lache ich.",
        "wrong2": "Immer wenn ich sehe ihn, lache ich.",
        "explanation": "Opakování: *immer wenn*, ne *als*."
      },
      {
        "id": "g-conjunctions-21",
        "level": "B1",
        "right": "Bevor du gehst, mach bitte das Licht aus.",
        "wrong": "Bevor gehst du, mach bitte das Licht aus.",
        "wrong2": "Bevor du gehen, mach bitte das Licht aus.",
        "explanation": "Vedlejší věta s *bevor*: podmět a časované sloveso na konci."
      },
      {
        "id": "g-conjunctions-22",
        "level": "B1",
        "right": "Falls du Zeit hast, ruf mich an.",
        "wrong": "Falls du hast Zeit, ruf mich an.",
        "wrong2": "Falls hast du Zeit, ruf mich an.",
        "explanation": "*falls* = pro případ, že; sloveso na konci."
      },
      {
        "id": "g-conjunctions-23",
        "level": "B1",
        "right": "Sobald ich Zeit habe, melde ich mich.",
        "wrong": "Sobald ich habe Zeit, melde ich mich.",
        "wrong2": "Sobald habe ich Zeit, melde ich mich.",
        "explanation": "*sobald* uvozuje vedlejší větu: sloveso na konci."
      },
      {
        "id": "g-conjunctions-24",
        "level": "B2",
        "right": "Während er arbeitet, hört sie Musik.",
        "wrong": "Während er arbeitet, sie hört Musik.",
        "wrong2": "Während arbeitet er, hört sie Musik.",
        "explanation": "Po vedlejší větě s *während* hned sloveso hlavní věty: *hört sie*."
      },
      {
        "id": "g-conjunctions-25",
        "level": "B2",
        "right": "Er ist müde, weil er schlecht geschlafen hat.",
        "wrong": "Er ist müde, weil er hat schlecht geschlafen.",
        "wrong2": "Er ist müde, weil er schlecht hat geschlafen.",
        "explanation": "Ve vedlejší větě v perfektu je pomocné sloveso úplně na konci: *geschlafen hat*."
      },
      {
        "id": "g-conjunctions-26",
        "level": "B2",
        "right": "Es ist wichtig, dass man pünktlich ist.",
        "wrong": "Es ist wichtig, dass man ist pünktlich.",
        "wrong2": "Es ist wichtig, dass pünktlich man ist.",
        "explanation": "Po *dass* sloveso na konci."
      },
      {
        "id": "g-conjunctions-27",
        "level": "B2",
        "right": "Ich habe ihn gefragt, ob er mitkommen will.",
        "wrong": "Ich habe ihn gefragt, ob er will mitkommen.",
        "wrong2": "Ich habe ihn gefragt, ob er mitkommt will.",
        "explanation": "Modální sloveso je na konci vedlejší věty: *mitkommen will*."
      },
      {
        "id": "g-conjunctions-28",
        "level": "B2",
        "right": "Er arbeitet viel, sodass er kaum Freizeit hat.",
        "wrong": "Er arbeitet viel, sodass er hat kaum Freizeit.",
        "wrong2": "Er arbeitet viel, sodass hat er kaum Freizeit.",
        "explanation": "*sodass* (důsledek) uvozuje vedlejší větu: sloveso na konci."
      },
      {
        "id": "g-conjunctions-29",
        "level": "B2",
        "right": "Das ist die Stadt, in der ich geboren bin.",
        "wrong": "Das ist die Stadt, in die ich geboren bin.",
        "wrong2": "Das ist die Stadt, in der ich bin geboren.",
        "explanation": "Kde? Místo = 3. pád: *in der*; sloveso na konci."
      },
      {
        "id": "g-conjunctions-30",
        "level": "B2",
        "right": "Das ist der Mann, dessen Auto gestohlen wurde.",
        "wrong": "Das ist der Mann, dem sein Auto gestohlen wurde.",
        "wrong2": "Das ist der Mann, dessen Autos gestohlen wurde.",
        "explanation": "2. pád vztažného zájmena (čí?) je *dessen*; za ním podstatné jméno bez členu."
      },
      {
        "id": "g-conjunctions-31",
        "level": "B2",
        "right": "Alles, was er sagt, ist wahr.",
        "wrong": "Alles, das er sagt, ist wahr.",
        "wrong2": "Alles, wer er sagt, ist wahr.",
        "explanation": "Po *alles*, *nichts*, *etwas* následuje vztažné *was*."
      },
      {
        "id": "g-conjunctions-32",
        "level": "B2",
        "right": "Trotzdem gehe ich hin.",
        "wrong": "Trotzdem ich gehe hin.",
        "wrong2": "Trotzdem ich hin gehe.",
        "explanation": "*trotzdem* je příslovce: na prvním místě a sloveso hned za ním."
      },
      {
        "id": "g-conjunctions-33",
        "level": "B2",
        "right": "Deshalb bleibe ich zu Hause.",
        "wrong": "Deshalb ich bleibe zu Hause.",
        "wrong2": "Deshalb ich zu Hause bleibe.",
        "explanation": "*deshalb* je příslovce, sloveso je na druhém místě."
      },
      {
        "id": "g-conjunctions-34",
        "level": "B2",
        "right": "Außerdem habe ich keine Zeit.",
        "wrong": "Außerdem ich habe keine Zeit.",
        "wrong2": "Außerdem ich keine Zeit habe.",
        "explanation": "*außerdem* je příslovce, sloveso hned za ním."
      },
      {
        "id": "g-conjunctions-35",
        "level": "B2",
        "right": "Er hat nicht nur gearbeitet, sondern auch gelernt.",
        "wrong": "Er hat nicht nur gearbeitet, aber auch gelernt.",
        "wrong2": "Er hat nur nicht gearbeitet, sondern auch gelernt.",
        "explanation": "Dvojice *nicht nur … sondern auch*."
      },
      {
        "id": "g-conjunctions-36",
        "level": "B2",
        "right": "Indem er viel liest, lernt er neue Wörter.",
        "wrong": "Indem er liest viel, lernt er neue Wörter.",
        "wrong2": "Indem er viel lesen, lernt er neue Wörter.",
        "explanation": "*indem* (tím, že) uvozuje vedlejší větu: sloveso na konci."
      },
      {
        "id": "g-conjunctions-37",
        "level": "B2",
        "right": "Statt zu schlafen, sieht er fern.",
        "wrong": "Statt schlafen, sieht er fern.",
        "wrong2": "Statt zu schlafen, er sieht fern.",
        "explanation": "*statt … zu* + infinitiv; po čárce hned sloveso."
      }
    ]
  }
};
