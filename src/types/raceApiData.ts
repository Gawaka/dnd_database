
export interface AbilityBonus {
    bonus: number;
    ability_score: {
        name: string;
        index: string;
    };
}

export interface Race {
    name: string;
    index: string;
    age: string|number;
    alignment: string;
    language_desc: string;
    size: string
    size_description: string;
    speed: string|number;
    avatar?: string;
    subraces: any;
    ability_bonuses: AbilityBonus[];
    ability_bonus_options?: {
    choose: number;
    from: { option_set_type: string };
    } | null;
    traits: { index: string; name: string }[];
}