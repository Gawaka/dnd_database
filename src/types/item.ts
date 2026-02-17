
export interface Item {
    id: string;
    name: string;
    type: 'weapon' | 'armor' | 'gear' | 'artifact' | 'tool';
    description: string;
    quantity?: number;
}