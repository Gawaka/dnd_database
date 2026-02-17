// Спільні поля для всього
interface BaseEntity {
    id: string;
    name: string;
    originalName: string;
    description: string;
}

// Конкретні типи
export interface Feature extends BaseEntity {
    source: string;
}

export interface Skill extends BaseEntity {
    ability: string;
}

export interface Spell extends BaseEntity {
    level: number;
    school: string;
    castingTime: string;
    range: string;
    components: string;
    duration: string;
}

export interface Inventory extends BaseEntity {
    type: string
}

// Універсальний тип для нашого компонента
export type EntityInfoData = Feature | Skill | Spell | Inventory;