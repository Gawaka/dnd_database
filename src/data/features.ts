import type { Feature } from '../types/feature';

export const features: Feature[] = [
// --- Racial Features ---
    {
        id: 'darkvision',
        name: 'Темний зір',
        originalName: 'Darkvision',
        source: 'Race',
        description: 'Ви звикли до життя під землею або в сутінках. Ви бачите в темряві на відстані 60 футів так, ніби це тьмяне світло.'
    },
    {
        id: 'fey-ancestry',
        name: 'Спадщина фей',
        originalName: 'Fey Ancestry',
        source: 'Race',
        description: 'Ви маєте перевагу на рятівні кидки від чарування, і магія не може вас приспати.'
    },
    {
        id: 'relentless-endurance',
        name: 'Непохитна стійкість',
        originalName: 'Relentless Endurance',
        source: 'Race',
        description: 'Коли ваше здоров’я падає до 0, але ви не вбиті миттєво, ви можете залишитися з 1 HP (один раз на довгий відпочинок).'
    },
    {
        id: 'gnome-cunning',
        name: 'Гномська хитрість',
        originalName: 'Gnome Cunning',
        source: 'Race',
        description: 'Ви маєте перевагу на рятівні кидки Інтелекту, Мудрості та Харизми проти магії.'
    },
    {
        id: 'hellish-resistance',
        name: 'Пекельна стійкість',
        originalName: 'Hellish Resistance',
        source: 'Race',
        description: 'Ви маєте опір до урону вогнем.'
    },
    {
        id: 'breath-weapon',
        name: 'Дихання дракона',
        originalName: 'Breath Weapon',
        source: 'Race',
        description: 'Ви можете використати дію, щоб видихнути руйнівну енергію (вогонь, холод або кислоту). Вороги роблять рятівний кидок.'
    },
    {
        id: 'sunlight-sensitivity',
        name: 'Чутливість до сонця',
        originalName: 'Sunlight Sensitivity',
        source: 'Race',
        description: 'Ви маєте поміху на кидки атаки та перевірки Уважності, коли ви або ваша ціль знаходитесь під прямим сонячним світлом.'
    },

    // --- Class Features (Level 1) ---
    {
        id: 'rage',
        name: 'Лють',
        originalName: 'Rage',
        source: 'Class',
        description: 'У бою ви впадаєте в лють. Ви отримуєте перевагу на перевірки Сили, бонус до урону та опір до фізичних атак.'
    },
    {
        id: 'unarmored-defense',
        name: 'Захист без обладунків',
        originalName: 'Unarmored Defense',
        source: 'Class',
        description: 'Коли ви не носите обладунків, ваш Клас Доспеху (AC) дорівнює 10 + модифікатор Спритності + модифікатор Тілобудови (або Мудрості для Монаха).'
    },
    {
        id: 'bardic-inspiration',
        name: 'Бардівське натхнення',
        originalName: 'Bardic Inspiration',
        source: 'Class',
        description: 'Бонусною дією ви можете надихнути союзника, давши йому кубик d6, який він може додати до кидка атаки, перевірки або рятівного кидка.'
    },
    {
        id: 'second-wind',
        name: 'Друге дихання',
        originalName: 'Second Wind',
        source: 'Class',
        description: 'Ви маєте обмежений запас витривалості. Бонусною дією ви можете відновити 1d10 + ваш рівень здоров’я.'
    },
    {
        id: 'fighting-style',
        name: 'Бойовий стиль',
        originalName: 'Fighting Style',
        source: 'Class',
        description: 'Ви спеціалізуєтесь на певному стилі бою (наприклад, стрільба, захист або дворучна зброя), отримуючи відповідні бонуси.'
    },
    {
        id: 'martial-arts',
        name: 'Бойові мистецтва',
        originalName: 'Martial Arts',
        source: 'Class',
        description: 'Ви майстерно володієте власним тілом. Ви можете використовувати Спритність замість Сили для беззбройних ударів і робити додатковий удар бонусною дією.'
    },
    {
        id: 'divine-sense',
        name: 'Божественне чуття',
        originalName: 'Divine Sense',
        source: 'Class',
        description: 'Ви відчуваєте присутність зла та добра. Ви знаєте розташування будь-якого небожителя, демона або нежиті в межах 60 футів.'
    },
    {
        id: 'lay-on-hands',
        name: 'Покладання рук',
        originalName: 'Lay on Hands',
        source: 'Class',
        description: 'Ви маєте запас цілющої сили. Ви можете торкнутися істоти, щоб відновити їй здоров’я або вилікувати хворобу.'
    },
    {
        id: 'sneak-attack',
        name: 'Прихована атака',
        originalName: 'Sneak Attack',
        source: 'Class',
        description: 'Один раз на хід ви можете завдати додаткові 1d6 урону, якщо маєте перевагу на атаку або якщо ворог вашої цілі знаходиться поруч.'
    },
    {
        id: 'favored-enemy',
        name: 'Улюблений ворог',
        originalName: 'Favored Enemy',
        source: 'Class',
        description: 'Ви вивчили все про певний тип ворогів (наприклад, нежить або гобліни). Ви маєте перевагу на вистежування цих істот.'
    },
    {
        id: 'magical-tinkering',
        name: 'Магічне майстрування',
        originalName: 'Magical Tinkering',
        source: 'Class',
        description: 'Ви можете наділити крихітний предмет (камінь, пір’їну) слабкою магією: змусити його світитися, видавати звук або показувати повідомлення.'
    },
    {
        id: 'spellcasting',
        name: 'Використання заклинань',
        originalName: 'Spellcasting',
        source: 'Class',
        description: 'Ви навчилися керувати магічною енергією для створення заклинань. Ви використовуєте свій основний атрибут для їх посилення.'
    }
];