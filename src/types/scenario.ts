
export interface NPC {
    name: string;
    role: string; // 'Антагоніст', 'Союзник', 'Квестодавець' тощо
    description: string;
}

export interface Act {
    title: string;       // 'Акт 1: Прибуття та Облога'
    location: string;    // 'Верхні яруси шахти'
    description: string; // Що відбувається
    goal: string;        // Завдання гравців
    complication?: string; // (Опціонально) Пастки, ускладнення або великодки
}

export interface Scenario {
    id: string;
    name: string;
    avatar: string;
    description: string; // Короткий опис для прев'ю (картки)
    recommendedLevel: string; // '1-3'
    genres: string[];    // ['Темне фентезі', 'Виживання']
    
    background: string;  // Лор для Майстра (твоє поле plot)
    hooks: string[];     // Як залучити гравців (масив рядків)
    
    npcs: NPC[];         // Масив персонажів
    acts: Act[];         // Масив подій (зручно для виводу кроків)
    
    mechanics: {
        name: string;
        description: string;
    };
    
    rewards: {
        xp: string;
        loot: string[];
    };
}