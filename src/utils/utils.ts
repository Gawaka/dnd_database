// import img from ''

interface UtilsProps {
    max: number,
}

export const racesAvatars = [
    { id: 'dragonborn', img: 'public/races-avatars/dragonborn.jpg' },
    { id: 'dwarf',      img: 'public/races-avatars/dwarf.jpg' },
    { id: 'elf',        img: 'public/races-avatars/elf.jpg' },
    { id: 'gnome',      img: 'public/races-avatars/gnome.jpg' },
    { id: 'half-elf',   img: 'public/races-avatars/half-elf.jpg' },
    { id: 'half-orc',   img: 'public/races-avatars/half-orc.jpg' },
    { id: 'halfling',   img: 'public/races-avatars/halfing.jpg' },
    { id: 'human',      img: 'public/races-avatars/human.jpg' },
    { id: 'tiefling',   img: 'public/races-avatars/tiefling.jpg' },
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