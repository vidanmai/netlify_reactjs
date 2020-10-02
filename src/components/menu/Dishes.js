//List of dishes on menu
export const dishes = [
    //Foretter
    {
        index: 1,
        kategori: 'foretter',
        navn: 'Kinesiske vårruller (2 stk)',
        beskrivelse: 'Fylt med oksekjøtt og kål. Serveres med sursøt saus',
        allergener: ['G', 'Sv'],
        pris: 55
    },
    {
        index: 2,
        kategori: 'foretter',
        navn: 'Vietnamesiske vårruller (2 stk)',
        beskrivelse: 'Fylt med svinekjøtt, grønnsaker og glassnudler. Serveres med søt chilisaus',
        allergener: ['E', 'F'],
        pris: 55
    },
    {
        index: 3,
        kategori: 'foretter',
        navn: 'Vegetar vårruller (4 stk)',
        beskrivelse: 'Serveres med sursøt saus',
        allergener: ['G', 'Sv'],
        pris: 45
    },
    {
        index: 4,
        kategori: 'foretter',
        navn: 'Tom yum kung',
        beskrivelse: 'Klassisk thai suppe med scampi og asiatiske ingredienser. Sterk og syrlig smak',
        allergener: ['F', 'Sk'],
        pris: 55
    },
    {
        index: 7,
        kategori: 'foretter',
        navn: 'Kylling satay',
        beskrivelse: 'Marinert kylling på grillspyd. Serveres med peanøttsaus',
        allergener: ['G', 'E', 'P'],
        pris: 59
    },
    {
        index: 9,
        kategori: 'foretter',
        navn: 'Ferske vårruller (2 stk)',
        beskrivelse: 'Kylling, scampi, risnudler og asiatiske grønnsaker. Serveres med peanøttsaus',
        allergener: ['G', 'Sk', 'P'],
        pris: 55
    },
    {
        index: 10,
        kategori: 'foretter',
        navn: 'Rekechips',
        beskrivelse: 'Fritert ris-chips med rekesmak',
        allergener: ['Sk'],
        pris: 28
    },
    // Thailandsk
    {
        index: 12,
        kategori: 'thailandsk',
        navn: 'Pad Neua Namman Hoy',
        beskrivelse: 'Biff i ingefær-oyster saus med chili og grønnsaker',
        allergener: ['G', 'S', 'Bl', 'Se'],
        pris: 119
    },
    {
        index: 14,
        kategori: 'thailandsk',
        navn: 'Khad Pad Bai Krapo (Kylling/Biff)',
        beskrivelse: 'Kylling eller oksekjøtt i sterkhvitløk-basilikumsaus og grønnsaker',
        allergener: ['S', 'Bl', 'E', 'G', 'Se'],
        pris: 119
    },
    {
        index: 15,
        kategori: 'thailandsk',
        navn: 'Gaeng Phed (Kylling/Biff)',
        beskrivelse: 'Kylling eller oksekjøtt i kokosmelk, rød karri, basilikum, limeblad og grønnsaker',
        allergener: ['E', 'F'],
        pris: 119
    },
    {
        index: 16,
        kategori: 'thailandsk',
        navn: 'Gaeng Phed – Kung',
        beskrivelse: 'Scampi i kokosmelk, rød karri, basilikum, limeblad og grønnsaker',
        allergener: ['Sk', 'F'],
        pris: 119
    },
    {
        index: 17,
        kategori: 'thailandsk',
        navn: 'Gaeng Keo Wan (Kylling/Biff)',
        beskrivelse: 'Kylling eller oksekjøtt i kokosmelk, grønn karri, basilikum, limeblad og grønnsaker',
        allergener: ['E', 'F'],
        pris: 119
    },
    {
        index: 18,
        kategori: 'thailandsk',
        navn: 'Gaeng Keo Wan – Kung',
        beskrivelse: 'Scampi i kokosmelk, grønn karri, basilikum, limeblad og grønnsaker',
        allergener: ['E', 'F'],
        pris: 119
    },
    {
        index: 19,
        kategori: 'thailandsk',
        navn: 'Panang Gai',
        beskrivelse: 'Kylling i kokosmelk, Panang karri, limeblad og grønnsaker',
        allergener: ['E', 'F'],
        pris: 119
    },
    //Vietnamesisk
    {
        index: 22,
        kategori: 'vietnamesisk',
        navn: 'Biff med koriander og ananas',
        beskrivelse: 'Strimlet biff i søt-syrlig saus med koriander og ananas',
        allergener: ['S', 'G', 'Bl', 'Se'],
        pris: 119
    },
    {
        index: 28,
        kategori: 'vietnamesisk',
        navn: 'Spicy scampi',
        beskrivelse: 'Marinert scampi i asiatiske krydder med hvitløk og chili',
        allergener: ['G', 'Sk', 'Se', 'Sel'],
        pris: 119
    },
    //Stekt ris - nudler
    {
        index: 40,
        kategori: 'stekt ris - nudler',
        navn: 'Saigon nudler – bun thit nuong',
        beskrivelse: 'Marinert biff, scampi i risnudler med frisk salat i lime dressing og peanøttsaus',
        allergener: ['F', 'P', 'Sk', 'E'],
        pris: 145
    },
    {
        index: 42,
        kategori: 'stekt ris - nudler',
        navn: 'Bali stekt ris',
        beskrivelse: 'Stekt ris i gul karri med kylling, scampi, egg, grønnsaker og ananas',
        allergener: ['E', 'S', 'G'],
        pris: 130
    },
    {
        index: 45,
        kategori: 'stekt ris - nudler',
        navn: 'Singapore nudler',
        beskrivelse: 'Risnudler woket m/ kylling og scampi i karri og grønnsaker',
        allergener: [], //TODO: mangler allergener
        pris: 130
    },
    {
        index: 50,
        kategori: 'stekt ris - nudler',
        navn: 'Bamboo stekt ris (Kylling/Skinke)',
        beskrivelse: 'Stekt ris med kylling/skinke, reker, egg og grønnsaker',
        allergener: ['G', 'E', 'S', 'Sk', 'Se'],
        pris: 119
    },
    {
        index: 51,
        kategori: 'stekt ris - nudler',
        navn: 'Pad thai',
        beskrivelse: 'Thai risnudler med kylling, egg, peanøtter, scampi og tofu i mild chilisaus',
        allergener: ['E', 'P', 'Sk', 'S'],
        pris: 135
    },
    {
        index: 53,
        kategori: 'stekt ris - nudler',
        navn: 'Mi Xao (Biff/Kylling)',
        beskrivelse: 'Stekte nudler med biff/kylling og grønnsaker i syrlig chilisaus',
        allergener: ['G', 'E', 'Bl', 'Sel', 'Se'],
        pris: 119
    },
    {
        index: 54,
        kategori: 'stekt ris - nudler',
        navn: 'Bamboo risnudler',
        beskrivelse: 'Risnudler med biff, kylling, scampi og asiatiske grønnsaker',
        allergener: ['G', 'E', 'S', 'Bl', 'Sk', 'Se'],
        pris: 119
    },
    //Vegetar
    {
        index: 77,
        kategori: 'vegetar',
        navn: 'Grønnsaker chopsuey',
        beskrivelse: '', //TODO: mangler beskrivelse
        allergener: ['G', 'S'],
        pris: 110
    },
    {
        index: 78,
        kategori: 'vegetar',
        navn: 'Woket tofu med grønnsaker',
        beskrivelse: '', //TODO: mangler
        allergener: ['G', 'S'],
        pris: 119
    },
    {
        index: 79,
        kategori: 'vegetar',
        navn: 'Tofu i panang karri med grønnsaker',
        beskrivelse: '', //TODO: mangler
        allergener: ['S'],
        pris: 119
    },
    //Kinesisk
    {
        index: 30,
        kategori: 'kinesisk',
        navn: 'Biff chopsuey',
        beskrivelse: 'Biff woket med grønnsaker i oyster-soyasaus',
        allergener: ['G', 'S', 'Sel', 'Bl', 'Se'],
        pris: 119
    },
    {
        index: 32,
        kategori: 'kinesisk',
        navn: 'Kinesisk pepperbiff',
        beskrivelse: 'Biff woket med grønnsaker i pepper-soyasaus',
        allergener: ['G', 'S', 'Sel', 'Bl', 'Se'],
        pris: 119
    },
    {
        index: 34,
        kategori: 'kinesisk',
        navn: 'Biff med brokkoli',
        beskrivelse: 'Strimlet biff med løk og brokkoli i oyster-soyasaus',
        allergener: ['G', 'S', 'Bl', 'Se'],
        pris: 119
    },
    {
        index: 35,
        kategori: 'kinesisk',
        navn: 'Biff i karri (Kylling, Biff)',
        beskrivelse: 'Woket kylling/biff med grønnsaker i karrisaus',
        allergener: ['E', 'Sel'],
        pris: 119
    },
    {
        index: 38,
        kategori: 'kinesisk',
        navn: 'Kylling med cashewnøtter',
        beskrivelse: 'Kylling med wokede grønnsaker og cashewnøtter',
        allergener: ['G', 'E', 'Bl', 'Sel', 'N', 'Se'],
        pris: 119
    },
    {
        index: 39,
        kategori: 'kinesisk',
        navn: 'Innbakt kylling',
        beskrivelse: 'Innbakt kyllingfilet med sursøt saus, løk, paprika og ananas',
        allergener: ['E', 'Sv'],
        pris: 119
    },
    {
        index: 41,
        kategori: 'kinesisk',
        navn: 'Ko lo yuk',
        beskrivelse: 'Innbakt svinefilet med sursøt saus, løk, paprika og ananas',
        allergener: ['Sv'],
        pris: 119
    },
    {
        index: 43,
        kategori: 'kinesisk',
        navn: 'Scampi Gong Bao',
        beskrivelse: 'Scampi woket med grønnsaker, cashewnøtter og en blanding av chilisaus',
        allergener: ['G', 'Sel', 'N', 'Se', 'Sk'],
        pris: 119
    },
    {
        index: 29,
        kategori: 'husets anbefalinger',
        navn: 'Bamboo Rolling Duck - 1/4 and',
        beskrivelse: 'Serveres med pannekaker og hjemmelaget hoisin-plummesaus',
        allergener: ['G'],
        pris: 189
    },
    {
        index: 29,
        kategori: 'husets anbefalinger',
        navn: 'Bamboo Rolling Duck - 1/2 and',
        beskrivelse: 'Serveres med pannekaker og hjemmelaget hoisin-plummesaus',
        allergener: ['G'],
        pris: 359
    },
    {
        index: 31,
        kategori: 'husets anbefalinger',
        navn: 'Scampi og kamskjell',
        beskrivelse: 'Woket med grønnsaker og husets spicy hotbean-chilisaus',
        allergener: ['G', 'E', 'Sel', 'N', 'Se'],
        pris: 149
    },
    {
        index: 33,
        kategori: 'husets anbefalinger',
        navn: 'Indrefilet med syrlig chilisaus og ingefær',
        beskrivelse: 'Marinert indrefilet med squash, ingefær, limeblad og husets chilisaus',
        allergener: ['G', 'Se'],
        pris: 169
    },
    {
        index: 36,
        kategori: 'husets anbefalinger',
        navn: 'Kylling Gong Bao',
        beskrivelse: 'Med cashewnøtter, grønnsaker og en blanding av chilisorter',
        allergener: ['G', 'E', 'Sel', 'N', 'Se'],
        pris: 139
    },
    {
        index: 37,
        kategori: 'husets anbefalinger',
        navn: 'Hot chili pot',
        beskrivelse: 'Biff, kylling og scampi med grønnsaker i spicy hot-pot saus',
        allergener: ['G', 'E', 'Sel', 'Sk', 'Se'],
        pris: 149
    },
    {
        index: 46,
        kategori: 'husets anbefalinger',
        navn: 'Indrefilet i Szechuan style',
        beskrivelse: 'Marinert indrefilet med grønnsaker i husets hvitløk-chilisaus',
        allergener: ['G', 'Se'],
        pris: 169
    },
    {
        index: 47,
        kategori: 'husets anbefalinger',
        navn: 'And a la Saigon',
        beskrivelse: 'Sprøstrekt andefilet med asiatiske grønnsaker, husets saus og chili',
        allergener: ['G'],
        pris: 159
    },
    {
        index: 48,
        kategori: 'husets anbefalinger',
        navn: 'And i Thai rød karri',
        beskrivelse: 'Sprøstrekt andefilet i Thai rød karri med kokos, grønnsaker og ananas',
        allergener: ['F'],
        pris: 159
    },
    {
        index: 49,
        kategori: 'husets anbefalinger',
        navn: 'Thai kylling ingefær - chili',
        beskrivelse: 'Kylling woket med grønnsaker i ingefær chilisaus',
        allergener: ['G', 'S', 'Bl', 'E', 'Sel', 'Se'],
        pris: 139
    },
    //Japansk
    //Bamboo meny
    {
        index: 55,
        kategori: 'bamboo meny',
        navn: 'Sushi liten meny',
        beskrivelse: '7 biter: 4 nigiri + 3 maki',
        allergener: ['F', 'Sk', 'E', 'Se'],
        pris: 79
    },
    {
        index: 56,
        kategori: 'bamboo meny',
        navn: 'Sushi medium meny',
        beskrivelse: '11 biter: 8 nigiri + 6 maki',
        allergener: ['F', 'Sk', 'E', 'Se', 'Bl'],
        pris: 110
    },
    {
        index: 57,
        kategori: 'bamboo meny',
        navn: 'Sushi stor meny',
        beskrivelse: '16 biter: 10 nigiri + 6 maki',
        allergener: ['F', 'Sk', 'E', 'Se', 'Bl'],
        pris: 155
    },
    {
        index: 58,
        kategori: 'bamboo meny',
        navn: 'Sushi x-tra stor meny',
        beskrivelse: '20 biter: 14 nigiri + 6 maki',
        allergener: ['F', 'Sk', 'E', 'Se', 'Bl'],
        pris: 195
    },
    {
        index: 59,
        kategori: 'bamboo meny',
        navn: 'Bamboo Combo',
        beskrivelse: '28 biter: 6 tempura maki, 14 nigiri + 8 skiver sashimi',
        allergener: ['F', 'Sk', 'E', 'Se', 'Bl', 'G'],
        pris: 285
    },
    {
        index: 90,
        kategori: 'bamboo meny',
        navn: 'Selskapsmeny',
        beskrivelse: '41 biter: 5 futo maki, 24 nigiri og 12 maki',
        allergener: ['F', 'Sk', 'E', 'Se', 'Bl', 'G'],
        pris: 495
    },
    {
        index: 91,
        kategori: 'bamboo meny',
        navn: 'Maki Mix',
        beskrivelse: '12 biter: 6 tempura maki + 6 sakura maki',
        allergener: ['F', 'Sk', 'E', 'Se', 'G'],
        pris: 109
    },
    {
        index: 92,
        kategori: 'bamboo meny',
        navn: 'Crispy Laks Futo',
        beskrivelse: '12 biter tempura laks + 5 skiver laks sashimi',
        allergener: ['F', 'E', 'Se', 'G'],
        pris: 139
    },
    {
        index: 93,
        kategori: 'bamboo meny',
        navn: 'Bamboo familiemeny',
        beskrivelse: '64 biter: 24 nigiri + 30 biter maki + 10 skiver sashimi',
        allergener: ['F', 'Sk', 'E', 'Se', 'G'],
        pris: 695
    },
    //Nigiri sushi
    {
        index: 60,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Tunfisk',
        beskrivelse: '',
        allergener: [],
        pris: 40
    },
    {
        index: 61,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Laks',
        beskrivelse: '',
        allergener: [],
        pris: 35
    },
    {
        index: 62,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Scampi',
        beskrivelse: '',
        allergener: [],
        pris: 40
    },
    {
        index: 63,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Kamskjell',
        beskrivelse: '',
        allergener: [],
        pris: 40
    },
    {
        index: 64,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Flambert laks',
        beskrivelse: '',
        allergener: [],
        pris: 40
    },
    {
        index: 65,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Marinert ål',
        beskrivelse: '',
        allergener: [],
        pris: 40
    },
    {
        index: 66,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Rå reker',
        beskrivelse: '',
        allergener: [],
        pris: 40
    },
    {
        index: 67,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Kveite',
        beskrivelse: '',
        allergener: [],
        pris: 40
    },
    {
        index: 68,
        kategori: 'Nigiri sushi - 2 biter per ordre',
        navn: 'Avokado',
        beskrivelse: '',
        allergener: [],
        pris: 32
    },
    //Maki mono
    {
        index: 69,
        kategori: 'Maki mono - 6 biter',
        navn: 'Laks Mango Roll',
        beskrivelse: 'Laks, mango og mangosaus',
        allergener: ['F'],
        pris: 64
    },
    {
        index: 70,
        kategori: 'Maki mono - 6 biter',
        navn: 'Philadelphia Roll',
        beskrivelse: 'Laks, kremost og avokado',
        allergener: ['S', 'L', 'F'],
        pris: 64
    },
    {
        index: 71,
        kategori: 'Maki mono - 6 biter',
        navn: 'California Roll',
        beskrivelse: 'Crabstick og avokado',
        allergener: ['Sk'],
        pris: 54
    },
    {
        index: 72,
        kategori: 'Maki mono - 6 biter',
        navn: 'Kappa Roll',
        beskrivelse: 'Agurk og avokado',
        allergener: [],
        pris: 50
    },
    {
        index: 73,
        kategori: 'Maki mono - 6 biter',
        navn: 'Tempura Roll',
        beskrivelse: 'Fritert scampi og avokado',
        allergener: ['G', 'Sk'],
        pris: 69
    },
    {
        index: 74,
        kategori: 'Maki mono - 6 biter',
        navn: 'Sakura Roll',
        beskrivelse: 'Laks, vårløk og chilimajones',
        allergener: ['E', 'Se', 'F'],
        pris: 54
    },
    {
        index: 75,
        kategori: 'Maki mono - 6 biter',
        navn: 'Spicy Tuna Roll',
        beskrivelse: 'Tunfisk, vårløk og chilimajones',
        allergener: ['E', 'Se', 'F'],
        pris: 60
    },
    {
        index: 76,
        kategori: 'Maki mono - 6 biter',
        navn: 'Laks Avokado Roll',
        beskrivelse: 'Laks og avokado',
        allergener: ['F'],
        pris: 64
    },
    {
        index: 80,
        kategori: 'Maki mono - 6 biter',
        navn: 'Kamskjell Roll',
        beskrivelse: 'Kamskjell, avokado og chilimajones',
        allergener: ['E', 'Se', 'Bl'],
        pris: 64
    },
    {
        index: 81,
        kategori: 'Maki mono - 6 biter',
        navn: 'Tokyo Roll',
        beskrivelse: 'Kokt scampi, avokado og tobiko med chilimajones',
        allergener: ['E', 'Se', 'Sk', 'F'],
        pris: 68
    },
    {
        index: 89,
        kategori: 'Maki mono - 6 biter',
        navn: 'Kylling Roll',
        beskrivelse: 'Fritert kylling, avokado og chilimajones',
        allergener: ['G', 'Se', 'F'],
        pris: 69
    },
    //Futo maki
    {
        index:  82,
        kategori: 'Futo maki - 6 biter',
        navn: 'Asian Futo Roll',
        beskrivelse: 'Fritert scampi, crabstick, avocado og tobiko',
        allergener: ['G', 'Sk', 'F'],
        pris: 79
    },
    {
        index:  83,
        kategori: 'Futo maki - 6 biter',
        navn: 'Chef Futo Roll',
        beskrivelse: 'Fritert scampi, laks, tunfisk, crabstick, og chilimajones',
        allergener: ['G', 'E', 'Se', 'Sk', 'F'],
        pris: 79
    },
    {
        index:  84,
        kategori: 'Futo maki - 6 biter',
        navn: 'Soft Shell Crab Roll',
        beskrivelse: 'Fritert soft shell krabbe, avocado og tobiko',
        allergener: ['G', 'E', 'Se', 'Sk', 'F'],
        pris: 85
    },
    {
        index:  89,
        kategori: 'Futo maki - 6 biter',
        navn: 'Bamboo Futo Roll',
        beskrivelse: 'Frityrstekt rull med laks, avokado og ost. Toppet med teriyakisaus og chilimajones',
        allergener: ['G', 'E', 'Se', 'Sk', 'F'],
        pris: 79
    },
    //Sashimi
    {
        index:  85,
        kategori: 'Sashimi',
        navn: 'Red & white',
        beskrivelse: '9 skiver: laks, kveite og tunfisk',
        allergener: ['G', 'S', 'F'],
        pris: 105
    },
    {
        index:  86,
        kategori: 'Sashimi',
        navn: 'Mix sashimi',
        beskrivelse: '12 skiver: laks, kveite, tunfisk og kamskjell',
        allergener: ['G', 'S', 'F', 'Bl'],
        pris: 119
    },
    {
        index:  87,
        kategori: 'Sashimi',
        navn: "Chef's choice",
        beskrivelse: '15 skiver av dagens fisk',
        allergener: ['G', 'S', 'F', 'Sk', 'B'],
        pris: 149
    },
    //Ekstra
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Cashewnøtter',
        beskrivelse: '',
        allergener: [],
        pris: 10
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Chilimajones',
        beskrivelse: '',
        allergener: [],
        pris: 10
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Grønnsaker',
        beskrivelse: '',
        allergener: [],
        pris: 15
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Indrefilet',
        beskrivelse: '',
        allergener: [],
        pris: 50
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Ingefær',
        beskrivelse: '',
        allergener: [],
        pris: 10
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Kaiso/Sjøtang',
        beskrivelse: '',
        allergener: [],
        pris: 10
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Ris',
        beskrivelse: '',
        allergener: [],
        pris: 10
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Scampi',
        beskrivelse: '',
        allergener: [],
        pris: 15
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Soya',
        beskrivelse: '',
        allergener: [],
        pris: 5
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: '',
        beskrivelse: 'Saus',
        allergener: [],
        pris: 10
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Sursøt saus',
        beskrivelse: '',
        allergener: [],
        pris: 10
    },
    {
        index: null,
        kategori: 'ekstra',
        navn: 'Sweet chilisaus',
        beskrivelse: '',
        allergener: [],
        pris: 10
    },
    //Mineralvann
    {
        index: null,
        kategori: 'mineralvann',
        navn: '0,5 l plastflaske',
        beskrivelse: '',
        allergener: [],
        pris: 32
    },
];