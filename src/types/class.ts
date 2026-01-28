

type HitDie = 4 | 6 | 8 | 10 | 12;

export interface CharacterClass {
    id: string,
    name: string,
    hitDie: HitDie,
    icon: string
}