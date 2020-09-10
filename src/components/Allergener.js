export const allergener = [
    'G',
    'E',
    'F',
    'P',
    'S',
    'N',
    'Sel',
    'Sen',
    'Se',
    'Sv',
    'Sk',
    'Bl'
];
const allergens = [
    {
        desc: 'Gluten (G)',
        entry: 'G'
    },
    {
        desc: 'Egg (E)',
        entry: 'E'
    },
    {
        desc: 'Fisk (F)',
        entry: 'F'
    },
    {
        desc: 'Peanøtter (P)',
        entry: 'P'
    },
    {
        desc: 'Soya (S)',
        entry: 'S'
    },
    {
        desc: 'Nøtter (N)',
        entry: 'N'
    },
    {
        desc: 'Selleri (Sel)',
        entry: 'Sel'
    },
    {
        desc: 'Sennep (Sen)',
        entry: 'Sen'
    },
    {
        desc: 'Sesamfrø (Se)',
        entry: 'Se'
    },
    {
        desc: 'Svoveldioksid og sulfitter (Sv)',
        entry: 'Sv'
    },
    {
        desc: 'Skalldyr (Sk)',
        entry: 'Sk'
    },
    {
        desc: 'Bløtdyr (Bl)',
        entry: 'Bl'
    }
];

//Function for sorting allergen objects
function compare(a, b) {
    if (a.entry < b.entry) {
        return -1;
    }
    if (a.entry > b.entry) {
        return 1;
    }
    return 0;
}


export const allergenDescriptions = allergens.sort(compare);