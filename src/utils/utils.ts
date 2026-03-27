// import img from ''

interface UtilsProps {
    max: number,
}

export const racesAvatars = [
    { id: 'dragonborn', img: '/races-avatars/dragonborn.jpg' },
    { id: 'dwarf',      img: '/races-avatars/dwarf.jpg' },
    { id: 'elf',        img: '/races-avatars/elf.jpg' },
    { id: 'gnome',      img: '/races-avatars/gnome.jpg' },
    { id: 'half-elf',   img: '/races-avatars/half-elf.jpg' },
    { id: 'half-orc',   img: '/races-avatars/half-orc.jpg' },
    { id: 'halfling',   img: '/races-avatars/halfing.jpg' },
    { id: 'human',      img: '/races-avatars/human.jpg' },
    { id: 'tiefling',   img: '/races-avatars/tiefling.jpg' },
];

console.log(racesAvatars);


export function getModifier(score: number) {
    const numModifier = (score - 10)/2;

    return Math.floor(numModifier)
};

export function getRandomChar({max}: UtilsProps) {
    return Math.floor(Math.random() * max) + 1;
};

export const skillToStatMap: Record<string, string> = {
    // Strength
    'Athletics': 'strength',

    // Dexterity
    'Acrobatics': 'dexterity',
    'Sleight of Hand': 'dexterity',
    'Stealth': 'dexterity',

    // Intelligence
    'Arcana': 'intelligence',
    'History': 'intelligence',
    'Investigation': 'intelligence',
    'Nature': 'intelligence',
    'Religion': 'intelligence',

    // Wisdom
    'Animal Handling': 'wisdom',
    'Insight': 'wisdom',
    'Medicine': 'wisdom',
    'Perception': 'wisdom',
    'Survival': 'wisdom',

    // Charisma
    'Deception': 'charisma',
    'Intimidation': 'charisma',
    'Performance': 'charisma',
    'Persuasion': 'charisma',
};