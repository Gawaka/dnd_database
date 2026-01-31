import type { Stats } from '../types/stat';

export const statsDescription: Stats[] = [
    {
        id: "str",
        originalName: "Strength",
        name: "Сила",
        description: "Фізична міць. Впливає на атаки ближнього бою, атлетику та вантажопідйомність."
    },
    {
        id: "dex",
        originalName: "Dexterity",
        name: "Спритність",
        description: "Спритність та реакція. Впливає на Клас Обладунку (AC), ініціативу та скритність."
    },
    {
        id: "con",
        originalName: "Constitution",
        name: "Витривалість",
        description: "Здоров'я та стійкість. Визначає кількість HP та здатність витримувати фізичні навантаження."
    },
    {
        id: "int",
        originalName: "Intelligence",
        name: "Інтелект",
        description: "Логіка та пам'ять. Важливий для розслідувань, знань про світ та магії чарівників."
    },
    {
        id: "wis",
        originalName: "Wisdom",
        name: "Мудрість",
        description: "Інтуїція та сприйняття. Впливає на Уважність, Виживання та магію природи/віри."
    },
    {
        id: "cha",
        originalName: "Charisma",
        name: "Харизма",
        description: "Сила особистості. Впливає на переконання, залякування та магію чаклунів чи бардів."
    }
];