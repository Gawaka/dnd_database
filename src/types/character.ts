import type {Stats} from '../types/stats';
import type {Race} from '../types/race';
import type {CharacterClass} from '../types/class';

// types/character.ts
export interface Character {
    id: string;
    name: string;
    image: string;
    race: Race;
    class: CharacterClass;
    level: number;
    stats: Stats;
    bio: string;
    nature: string;
    goal: string;
    worldview: string;
    skills: string[];      // Навички (напр. Stealth, Athletics)
    features: string[];    // Класові та расові особливості (напр. Darkvision, Rage)
    spells?: string[];     // Заклинання (тільки для магів)
}