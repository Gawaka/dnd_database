
interface UtilsProps {
    max: number,
}

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