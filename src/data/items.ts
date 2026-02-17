import type { Item } from "../types/item";

export const itemsDatabase: Item[] = [
    // --- Weapons ---
    { id: 'greatsword', name: 'Дворучний меч', type: 'weapon', description: 'Важкий меч, що потребує обох рук для удару.' },
    { id: 'dagger', name: 'Кинджал', type: 'weapon', description: 'Легкий клинок, який легко приховати.' },
    { id: 'longsword', name: 'Довгий меч', type: 'weapon', description: 'Класична зброя лицарів та воїнів.' },
    { id: 'warhammer', name: 'Бойовий молот', type: 'weapon', description: 'Важка зброя, здатна трощити черепи та обладунки.' },
    { id: 'greataxe', name: 'Дворучна сокира', type: 'weapon', description: 'Зброя варварів, що завдає жахливих ран.' },
    { id: 'rapier', name: 'Рапіра', type: 'weapon', description: 'Витончена зброя для швидких випадів.' },
    { id: 'longbow', name: 'Довгий лук', type: 'weapon', description: 'Потребує сили та влучності для стрільби на великі відстані.' },
    { id: 'spear', name: 'Спис', type: 'weapon', description: 'Довга та легка зброя, ідеальна для ударів з повітря.' },

    // --- Armor ---
    { id: 'chain-mail', name: 'Кольчуга', type: 'armor', description: 'Металеві кільця, що забезпечують добрий захист.' },
    { id: 'leather-armor', name: 'Шкіряний обладунок', type: 'armor', description: 'Легкий та гнучкий захист для спритних героїв.' },
    { id: 'plate-armor', name: 'Лати', type: 'armor', description: 'Найважчий і найнадійніший захист, доступний воїну.' },
    { id: 'shield', name: 'Щит', type: 'armor', description: 'Дерев’яний або залізний щит, що додає +2 до захисту.' },

    // --- Artifacts (Цікаві штуки) ---
    { id: 'scroll-of-identify', name: 'Сувій Розпізнання', type: 'artifact', description: 'Магічний сувій, що дозволяє дізнатися властивості будь-якого магічного предмета.' },
    { id: 'lucky-coin', name: 'Щаслива монета', type: 'artifact', description: 'Завжди випадає орлом, коли власник хоче когось обдурити.' },
    { id: 'astral-compass', name: 'Астральний компас', type: 'artifact', description: 'Його стрілка вказує не на північ, а на найближчий портал між світами.' },
    { id: 'fey-lantern', name: 'Ліхтар Фей', type: 'artifact', description: 'Світить м’яким рожевим світлом і дозволяє бачити невидимих фей.' },
    { id: 'pouch-of-spores', name: 'Мішечок спор', type: 'artifact', description: 'Світиться в темряві. Якщо його відкрити, навколо зацвітають дивні гриби.' },
    { id: 'shadow-shard', name: 'Уламок тіні', type: 'artifact', description: 'Крижаний на дотик камінь, що поглинає світло навколо себе.' },
    { id: 'lightning-stone', name: 'Грозовий камінь', type: 'artifact', description: 'Шорсткий камінь, що вібрує в руці. Раз на день він може випустити невелику іскру, щоб запалити вогнище або налякати ворога.'},

    // --- Gear & Tools ---
    { id: 'backpack', name: 'Рюкзак', type: 'gear', description: 'Міцний шкіряний мішок для всього вашого скарбу.' },
    { id: 'thieves-tools', name: 'Злодійські інструменти', type: 'tool', description: 'Набір відмичок та затискачів для злому замків.' },
    { id: 'holy-symbol', name: 'Святий символ', type: 'gear', description: 'Знак вашої віри, необхідний для виклику божественної сили.' },
    { id: 'tinkers-tools', name: 'Інструменти майстра', type: 'tool', description: 'Молотки, лещата та шестерні для створення механізмів.' },
    { id: 'healers-kit', name: 'Набір цілителя', type: 'gear', description: 'Бинти, мазі та трави для зупинки кровотечі.', quantity: 10 },
    { id: 'holy-symbol-storm', name: 'Символ Шторму', type: 'gear', description: 'Срібний амулет у формі блискавки, що б’ється об хмару.' },
    { id: 'storm-glass', name: 'Штормове скло', type: 'gear', description: 'Маленька колба з піском, який починає хаотично рухатися перед дощем.' },
    { id: 'feather-pouch', name: 'Мішечок для пір’я', type: 'gear', description: 'Тканинна сумка для збору рідкісних пір’їн та оберегів.' },
];