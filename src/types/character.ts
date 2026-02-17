import type {Stats} from '../types/stats';
import type {Race} from '../types/race';
import type {CharacterClass} from '../types/class';

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
    skills: any[];
    features: any[];
    spells?: any[];
    inventory: string[];
}