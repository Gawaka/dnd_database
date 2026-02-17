import type { Character } from '../types/character';

const hero01: Character = {
    id: '1',
    name: 'Lefortaz',
    image: '../src/assets/img/avatars/hero01.png',
    race: {id: 'high-elf', name: 'High Elf', bonuses: { dexterity: 2, intelligence: 1 }},
    class: {id: 'fighter', name: 'Fighter', hitDie: 10, icon: '../src/assets/img/class-icons/fighter.svg'},
    level: 1,
    stats: {
        strength: 15,
        dexterity: 13,
        constitution: 14,
        intelligence: 8,
        wisdom: 12,
        charisma: 10
    },
    bio: 'Ветеран багатьох воєн, який розчарувався в політиках і королях. Тепер він продає свій меч тому, чия справа здається йому справедливою, або просто тому, хто більше заплатить.',
    nature: 'Дисциплінований, прагматичний та надійний.',
    goal: 'Знайти спокійну гавань або гідну справу, заради якої варто померти.',
    worldview: 'Законно-нейтральний.',
    skills: ['Athletics', 'Perception', 'Survival', 'Intimidation'],
    features: ['Darkvision', 'Fey Ancestry', 'Fighting Style (Great Weapon)', 'Second Wind'],
    inventory: ['Дворучний меч', 'Кольчуга', 'Рюкзак', 'rations', 'tinderbox'],
};

const hero02: Character = {
    id: '2',
    name: 'Grale  ',
    image: '../src/assets/img/avatars/hero02.png',
    race: {id: 'human', name: 'Human', bonuses: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1 }},
    class: {id: 'wizard', name: 'Wizard', hitDie: 6, icon: '../src/assets/img/class-icons/wizard.svg'},
    level: 1,
    stats: {
        strength: 8,
        dexterity: 14,
        constitution: 13,
        intelligence: 15,
        wisdom: 12,
        charisma: 10
    },
    bio: 'Академік, який покинув безпечну бібліотеку заради пошуку першоджерел магії. Він вважає, що знання — це єдина справжня влада, і не зупиниться ні перед чим, щоб розгадати таємниці світобудови.',
    nature: 'Інтелектуальний, методичний та дещо зарозумілий.',
    goal: 'Знайти таємне заклинання або артефакт, що змінить закони магії.',
    worldview: 'Нейтральний.',
    skills: ['Arcana', 'History', 'Investigation'],
    features: ['Arcane Recovery', 'Spellcasting'],
    spells: ['Fire Bolt', 'Mage Hand', 'Ray of Frost', 'Magic Missile', 'Shield', 'Sleep'],
    inventory: ['quarterstaff', 'spellbook', 'component-pouch', 'ink-pen', 'scroll-of-identify']
};

const hero03: Character = {
    id: '3',
    name: 'Tilodar',
    image: '../src/assets/img/avatars/hero03.png',
    race: {id: 'half-elf', name: 'Half Elf', bonuses: {charisma: 2, dexterity: 1, constitution: 1}},
    class: {id: 'rogue', name: 'Rogue', hitDie: 8, icon: '../src/assets/img/class-icons/rogue.svg'},
    level: 1,
    stats: {
        strength: 8,
        dexterity: 16,
        constitution: 14,
        intelligence: 13,
        wisdom: 11,
        charisma: 10
    },
    bio: 'Вигнанець із гільдії злодіїв, який викрав не ту річ у не тієї людини. Тепер він змушений мандрувати з авантюристами, використовуючи свої навички злому та скритності, щоб вижити.',
    nature: 'Хитрий, скептичний та схильний до іронії.',
    goal: 'Накопичити достатньо золота, щоб купити собі свободу від минулого.',
    worldview: 'Хаотично-нейтральний.',
    skills: ['Stealth', 'Sleight of Hand', 'Acrobatics', 'Deception', 'Perception'],
    features: ['Darkvision', 'Sneak Attack', 'Thieves\' Cant', 'Expertise (Stealth)'],
    inventory: ['dagger', 'leather-armor', 'thieves-tools', 'crowbar', 'lucky-coin']
};

const hero04: Character = {
    id: '4',
    name: 'Leadrif',
    image: '../src/assets/img/avatars/hero04.png',
    race: {id: 'hill-dwarf', name: 'Hill Dwarf', bonuses: {constitution: 2, wisdom: 1}},
    class: {id: 'paladin', name: 'Paladin', hitDie: 10, icon: '../src/assets/img/class-icons/paladin.svg'},
    level: 1,
    stats: {
        strength: 16,
        dexterity: 10,
        constitution: 14,
        intelligence: 8,
        wisdom: 12,
        charisma: 14
    },
    bio: 'Лицар, що дав клятву захищати слабких після того, як сам ледь не загинув від рук розбійників. Його віра непохитна, а зброя наповнена божественним сяйвом, що карає зло.',
    nature: 'Самовідданий, чесний та непохитний.',
    goal: 'Викорінити несправедливість і стати прикладом честі для інших.',
    worldview: 'Законно-добрий.',
    skills: ['Athletics', 'Religion', 'Persuasion'],
    features: ['Darkvision', 'Dwarven Resilience', 'Divine Sense', 'Lay on Hands'],
    inventory: ['warhammer', 'shield', 'plate-armor', 'holy-symbol', 'prayer-book']
};

const hero05: Character = {
    id: '5',
    name: 'Kargoth',
    image: '../src/assets/img/avatars/hero05.png',
    race: { id: 'half-orc', name: 'Half Orc', bonuses: { strength: 2, constitution: 1 }},
    class: { id: 'barbarian', name: 'Barbarian', hitDie: 12, icon: '../src/assets/img/class-icons/barbarian.svg'},
    level: 1,
    stats: {
        strength: 16,
        dexterity: 14,
        constitution: 16,
        intelligence: 8,
        wisdom: 10,
        charisma: 10
    },
    bio: 'Вигнанець зі свого клану, чия лють у бою лякає навіть союзників. Він шукає гідного супротивника, який зможе витримати його удар, або славну смерть у битві з чудовиськом.',
    nature: 'Дикий, імпульсивний та прямий.',
    goal: 'Перемогти легендарного звіра, щоб довести свою силу колишньому клану.',
    worldview: 'Хаотично-нейтральний.',
    skills: ['Athletics', 'Intimidation', 'Survival'],
    features: ['Darkvision', 'Relentless Endurance', 'Savage Attacks', 'Rage', 'Unarmored Defense'],
    inventory: ['greataxe', 'handaxe', 'explorers-pack', 'trophy-necklace']
};

const hero06: Character = {
    id: '6',
    name: 'Victus',
    image: '../src/assets/img/avatars/hero06.png',
    race: { id: 'tiefling', name: 'Tiefling', bonuses: { charisma: 2, intelligence: 1 }},
    class: { id: 'bard', name: 'Bard', hitDie: 8, icon: '../src/assets/img/class-icons/bard.svg'},
    level: 1,
    stats: {
        strength: 8,
        dexterity: 14,
        constitution: 14,
        intelligence: 12,
        wisdom: 10,
        charisma: 16
    },
    bio: 'Мандрівний музикант, який збирає забуті легенди та розбиті серця. Його голос може надихнути армію або посіяти розбрат серед королів. Він вірить, що світ — це сцена, а всі ми — лише актори.',
    nature: 'Харизматичний, артистичний та красномовний.',
    goal: 'Написати баладу, яка житиме вічно і змінить хід історії.',
    worldview: 'Хаотично-добрий.',
    skills: ['Performance', 'Persuasion', 'Deception', 'Insight'],
    features: ['Darkvision', 'Hellish Resistance', 'Bardic Inspiration', 'Spellcasting'],
    spells: ['Vicious Mockery', 'Minor Illusion', 'Healing Word', 'Thunderwave', 'Charm Person', 'Thaumaturgy'],
    inventory: ['rapier', 'lute', 'diplomats-pack', 'disguise-kit']
};

const hero07: Character = {
    id: '7',
    name: 'Broma',
    image: '../src/assets/img/avatars/hero07.png',
    race: { id: 'hill-dwarf', name: 'Hill Dwarf', bonuses: {constitution: 2, wisdom: 1}},
    class: { id: 'cleric', name: 'Cleric', hitDie: 8, icon: '../src/assets/img/class-icons/cleric.svg'},
    level: 1,
    stats: {
        strength: 14,
        dexterity: 10,
        constitution: 15,
        intelligence: 10,
        wisdom: 16,
        charisma: 10
    },
    bio: 'Військова медик, яка бачила занадто багато смертей. Вона служить богу життя і ковальства, вважаючи, що кожне зцілене життя — це перемога над темрявою. Її віра міцна, як сталь її молота.',
    nature: 'Турботлива, стійка та мудра.',
    goal: 'Відновити зруйнований храм свого бога в горах.',
    worldview: 'Істинно-добрий.',
    skills: ['Medicine', 'History', 'Insight'],
    features: ['Darkvision', 'Stonecunning', 'Spellcasting', 'Divine Domain (Life)'],
    spells: ['Sacred Flame', 'Guidance', 'Bless', 'Cure Wounds', 'Guiding Bolt'],
    inventory: ['mace', 'scale-mail', 'holy-symbol', 'healers-kit', 'smith-tools']
};

const hero08: Character = {
    id: '8',
    name: 'Elara',
    image: '../src/assets/img/avatars/hero08.png',
    race: { id: 'wood-elf', name: 'Wood Elf', bonuses: {dexterity: 2, wisdom: 1}},
    class: { id: 'druid', name: 'Druid', hitDie: 8, icon: '../src/assets/img/class-icons/druid.svg'},
    level: 1,
    stats: {
        strength: 10,
        dexterity: 14,
        constitution: 14,
        intelligence: 10,
        wisdom: 16,
        charisma: 10
    },
    bio: 'Охоронець стародавнього гаю, який був спалений війною. Вона вийшла у світ людей, щоб навчити їх поваги до природи, або покарати тих, хто її нищить.',
    nature: 'Спокійна, спостережлива та відсторонена.',
    goal: 'Відновити баланс природи в регіоні, постраждалому від магії.',
    worldview: 'Нейтральний.',
    skills: ['Nature', 'Survival', 'Animal Handling', 'Perception'],
    features: ['Darkvision', 'Fey Ancestry', 'Mask of the Wild', 'Druidic', 'Spellcasting'],
    spells: ['Druidcraft', 'Shillelagh', 'Entangle', 'Goodberry', 'Speak with Animals'],
    inventory: ['quarterstaff', 'leather-armor', 'totem', 'herbalism-kit']
};

const hero09: Character = {
    id: '9',
    name: 'Shen',
    image: '../src/assets/img/avatars/hero09.png',
    race: { id: 'human', name: 'Human', bonuses: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1}},
    class: { id: 'monk', name: 'Monk', hitDie: 8, icon: '../src/assets/img/class-icons/monk.svg'},
    level: 1,
    stats: {
        strength: 10,
        dexterity: 16,
        constitution: 13,
        intelligence: 10,
        wisdom: 16,
        charisma: 10
    },
    bio: 'Аскет, який покинув монастир у пошуках просвітлення через пізнання світу. Він не використовує зброї, вважаючи своє тіло досконалим інструментом. Його рухи швидші за вітер, а розум чистий як вода.',
    nature: 'Зосереджений, дисциплінований та філософський.',
    goal: 'Знайти втрачені сувої свого майстра.',
    worldview: 'Законно-нейтральний.',
    skills: ['Acrobatics', 'Insight', 'Athletics'],
    features: ['Unarmored Defense', 'Martial Arts'],
    inventory: ['darts', 'monks-robe', 'holy-symbol', 'ancient-scroll']
};

const hero10: Character = {
    id: '10',
    name: 'Milo',
    image: '../src/assets/img/avatars/hero10.png',
    race: { id: 'halfling', name: 'Halfling', bonuses: {dexterity: 2, charisma: 1}},
    class: { id: 'ranger', name: 'Ranger', hitDie: 10, icon: '../src/assets/img/class-icons/ranger.svg'},
    level: 1,
    stats: {
        strength: 10,
        dexterity: 16,
        constitution: 14,
        intelligence: 10,
        wisdom: 14,
        charisma: 10
    },
    bio: 'Провідник, який знає кожну стежку в диких землях. Попри свій малий зріст, він є смертоносним стрільцем, який ніколи не промахується. Він віддає перевагу компанії тварин, а не людей.',
    nature: 'Обережний, практичний та відданий друзям.',
    goal: 'Захистити кордони свого поселення від вторгнення гоблінів.',
    worldview: 'Хаотично-добрий.',
    skills: ['Survival', 'Stealth', 'Nature', 'Perception', 'Animal Handling'],
    features: ['Lucky', 'Brave', 'Favored Enemy (Goblins)', 'Natural Explorer'],
    inventory: ['longbow', 'shortsword', 'quiver', 'rope-silk', 'goblin-ear-necklace']
};

const hero11: Character = {
    id: '11',
    name: 'Ignis',
    image: '../src/assets/img/avatars/hero11.png',
    race: { id: 'dragonborn', name: 'Dragonborn', bonuses: {strength: 2, charisma: 1}},
    class: { id: 'sorcerer', name: 'Sorcerer', hitDie: 6, icon: '../src/assets/img/class-icons/sorcerer.svg'},
    level: 1,
    stats: {
        strength: 10,
        dexterity: 13,
        constitution: 14,
        intelligence: 10,
        wisdom: 10,
        charisma: 16
    },
    bio: 'Нащадок драконів, в чиїх жилах тече нестримна магія. Вона не вчилася чаклувати — сила сама виривається з неї. Вона боїться, що одного дня втратить контроль і спалить все, що любить.',
    nature: 'Емоційна, нестабільна та могутня.',
    goal: 'Навчитися повністю контролювати свою вроджену магію.',
    worldview: 'Хаотично-нейтральнний.',
    skills: ['Intimidation', 'Arcana'],
    features: ['Breath Weapon (Fire)', 'Damage Resistance (Fire)', 'Spellcasting', 'Wild Magic Surge'],
    spells: ['Fire Bolt', 'Light', 'Mage Hand', 'Chaos Bolt', 'Burning Hands'],
    inventory: ['dagger', 'arcane-focus', 'explorers-pack', 'burnt-amulet']
};

const hero12: Character = {
    id: '12',
    name: 'Morgana',
    image: '../src/assets/img/avatars/hero12.png',
    race: { id: 'drow', name: 'Drow (Dark Elf)', bonuses: {dexterity: 2, charisma: 1}},
    class: { id: 'warlock', name: 'Warlock', hitDie: 8, icon: '../src/assets/img/class-icons/warlock.svg'},
    level: 1,
    stats: {
        strength: 8,
        dexterity: 14,
        constitution: 14,
        intelligence: 12,
        wisdom: 10,
        charisma: 16
    },
    bio: 'Вона уклала угоду з древньою сутністю з Безодні, щоб врятувати життя своєї сестри. Тепер вона володіє забороненими знаннями, але ціна, яку їй доводиться платити, зростає з кожним днем.',
    nature: 'Таємнича, маніпулятивна та рішуча.',
    goal: 'Знайти спосіб розірвати контракт зі своїм покровителем, зберігши при цьому силу.',
    worldview: 'Нейтральний.',
    skills: ['Deception', 'Arcana', 'History', 'intimidation'],
    features: ['Otherworldly Patron (Fiend)', 'Pact Magic'],
    spells: ['Eldritch Blast', 'Prestidigitation', 'Hex', 'Hellish Rebuke'],
    inventory: ['dagger', 'arcane-focus', 'scholars-pack', 'pact-contract']
};

const hero13: Character = {
    id: '13',
    name: 'Zanna',
    image: '../src/assets/img/avatars/hero13.png',
    race: { id: 'rock-gnome', name: 'Rock Gnome', bonuses: { intelligence: 2, constitution: 1}},
    class: { id: 'artificer', name: 'Artificer', hitDie: 8, icon: '../src/assets/img/class-icons/artificer.svg'},
    level: 1,
    stats: {
        strength: 10,
        dexterity: 14,
        constitution: 14,
        intelligence: 14, 
        wisdom: 12,
        charisma: 8
    },
    bio: 'Колишня студентка академії магічної інженерії, яку вигнали за "надмірно вибухові" експерименти. Вона мандрує світом, збираючи рідкісні метали та деталі, щоб створити свій magnum opus — механічного захисника, який матиме душу.',
    nature: 'Ексцентрична, геніальна та трохи розсіяна.',
    goal: 'Розкрити секрет створення розумних конструктів.',
    worldview: 'Хаотично-добрий',
    skills: [
        'Arcana', 
        'Investigation', 
        'Sleight of Hand'
    ],
    features: [
        'Darkvision', 
        'Gnome Cunning', 
        'Artificer\'s Lore', 
        'Tinker', 
        'Magical Tinkering', 
        'Spellcasting'
    ],
    spells: [
        'Mending', 
        'Fire Bolt', 
        'Cure Wounds', 
        'Grease', 
        'Detect Magic'
    ],
    inventory: ['light-crossbow', 'tinkers-tools', 'magnifying-glass', 'clockwork-toy']
};

const hero14: Character = {
    id: '14',
    name: 'Laeroth',
    image: '../src/assets/img/avatars/hero14.png',
    race: { id: 'githyanki', name: 'Githyanki', bonuses: {strength: 2, intelligence: 1}},
    class: { id: 'fighter', name: 'Fighter', hitDie: 10, icon: '../src/assets/img/class-icons/fighter.svg'},
    level: 1,
    stats: {
        strength: 16,
        dexterity: 12,
        constitution: 14,
        intelligence: 14,
        wisdom: 10,
        charisma: 10
    },
    bio: 'Воїтелька з Астрального плану, вихована у вічній війні проти Іллітидів. Вона потрапила на Матеріальний план під час рейду і тепер шукає шлях назад до своєї королеви, або ж... починає сумніватися в її наказах.',
    nature: 'Мілітаристська, жорстока до ворогів, прагматична.',
    goal: 'Знайти та знищити колонію пожирачів розуму.',
    worldview: 'Законослухняно-злий',
    skills: ['Athletics', 'History', 'Intimidation'],
    features: [
        'Githyanki Psionics', 
        'Martial Prodigy', 
        'Fighting Style (Great Weapon Fighting)', 
        'Second Wind'
    ],
    spells: [
        'Mage Hand (Psionic)'
    ],
    inventory: ['greatsword', 'githyanki-armor', 'astral-compass']
};

const hero15: Character = {
    id: '15',
    name: 'Darius',
    image: '../src/assets/img/avatars/hero15.png',
    race: { id: 'human', name: 'Human', bonuses: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1}},
    class: { id: 'paladin', name: 'Paladin (Oathbreaker)', hitDie: 10, icon: '../src/assets/img/class-icons/paladin.svg'},
    level: 1,
    stats: { strength: 16, dexterity: 10, constitution: 14, intelligence: 10, wisdom: 8, charisma: 16 },
    bio: 'Колишній лицар світлого ордену, який розчарувався в кодексі честі після зради командування. Тепер він служить лише собі та темним силам, які дали йому владу помститися.',
    nature: 'Цинічний, владний та безжалісний.',
    goal: 'Знищити орден, якому він колись служив.',
    worldview: 'Законослухняно-злий',
    skills: ['Intimidation', 'Athletics', 'Persuasion'],
    features: ['Divine Sense', 'Lay on Hands', 'Fighting Style (Dueling)'],
    inventory: ['longsword', 'shield', 'broken-holy-symbol', 'skull-trinket']
};

const hero16: Character = {
    id: '16',
    name: 'Fizzwick',
    image: '../src/assets/img/avatars/hero16.png',
    race: { id: 'gnome', name: 'Rock Gnome', bonuses: {intelligence: 2, constitution: 1}},
    class: { id: 'wizard', name: 'Wizard', hitDie: 6, icon: '../src/assets/img/class-icons/wizard.svg'},
    level: 1,
    stats: { strength: 8, dexterity: 14, constitution: 14, intelligence: 17, wisdom: 10, charisma: 12 },
    bio: 'Геній ілюзій, який використовує магію не для війни, а для створення грандіозних шоу та обману багатіїв. Він вважає реальність занадто нудною і постійно намагається її "прикрасити".',
    nature: 'Грайливий, хаотичний та непередбачуваний.',
    goal: 'Створити ілюзію, яку неможливо відрізнити від реальності.',
    worldview: 'Хаотично-нейтральний',
    skills: ['Arcana', 'Sleight of Hand', 'Deception'],
    features: ['Gnome Cunning', 'Arcane Recovery', 'Spellcasting'],
    spells: ['Minor Illusion', 'Prestidigitation', 'Silent Image', 'Color Spray', 'Disguise Self', 'Grease'],
    inventory: ['quarterstaff', 'deck-of-cards', 'colorful-robes', 'wand-of-smiles']
};

const hero17: Character = {
    id: '17',
    name: 'Nyx',
    image: '../src/assets/img/avatars/hero17.png',
    race: { id: 'tiefling', name: 'Tiefling', bonuses: {charisma: 2, intelligence: 1}},
    class: { id: 'rogue', name: 'Rogue', hitDie: 8, icon: '../src/assets/img/class-icons/rogue.svg'},
    level: 1,
    stats: { strength: 8, dexterity: 15, constitution: 12, intelligence: 14, wisdom: 10, charisma: 16 },
    bio: 'Вона виросла на вулицях, де її рогата зовнішність викликала страх. Вона навчилася використовувати це, ставши найманим шпигуном. Вона не краде гаманці, вона краде секрети.',
    nature: 'Стриманий, спостережливий маніпулятор.',
    goal: 'Знайти компромат на місцевого лорда.',
    worldview: 'Нейтральний',
    skills: ['Stealth', 'Insight', 'Investigation', 'Persuasion'],
    features: ['Darkvision', 'Hellish Resistance', 'Sneak Attack', 'Expertise (Deception)'],
    spells: ['Thaumaturgy'],
    inventory: ['shortsword', 'hand-crossbow', 'poisoners-kit', 'spies-pouch']
};

const hero18: Character = {
    id: '18',
    name: 'Thorin',
    image: '../src/assets/img/avatars/hero18.png',
    race: { id: 'dwarf', name: 'Mountain Dwarf', bonuses: {constitution: 2, strength: 2}},
    class: { id: 'barbarian', name: 'Barbarian', hitDie: 12, icon: '../src/assets/img/class-icons/barbarian.svg'},
    level: 1,
    stats: { strength: 17, dexterity: 12, constitution: 17, intelligence: 8, wisdom: 10, charisma: 8 },
    bio: 'Воїн, який впадає у бойовий транс, забуваючи про біль. Він не носить обладунків, покладаючись на свою товсту шкіру та лють. Його вигнали з кузні за те, що він ламав метал замість того, щоб кувати його.',
    nature: 'Грубий, прямий та нестримний.',
    goal: 'Знайти смерть у славній битві проти дракона.',
    worldview: 'Хаотично-добрий',
    skills: ['Athletics', 'Survival', 'Intimidation'],
    features: ['Darkvision', 'Dwarven Resilience', 'Rage', 'Unarmored Defense'],
    inventory: ['greataxe', 'broken-anvil-piece', 'drinking-horn']
};

const hero19: Character = {
    id: '19',
    name: 'Sylas',
    image: '../src/assets/img/avatars/hero19.png',
    race: { id: 'half-elf', name: 'Half-Elf', bonuses: { charisma: 2, dexterity: 1, constitution: 1}},
    class: { id: 'warlock', name: 'Warlock (Archfey)', hitDie: 8, icon: '../src/assets/img/class-icons/warlock.svg'},
    level: 1,
    stats: { strength: 8, dexterity: 14, constitution: 14, intelligence: 10, wisdom: 12, charisma: 17 },
    bio: 'Загубившись у лісі в дитинстві, він уклав угоду з Королевою Фей, щоб знайти вихід. Тепер він її очі та вуха у світі смертних. Його магія виглядає як мерехтливе світло та тіні.',
    nature: 'Мрійливий, загадковий та трохи божевільний.',
    goal: 'Виконати три забаганки своєї покровительки.',
    worldview: 'Хаотично-нейтральний',
    skills: ['Nature', 'Deception', 'Persuasion'],
    features: ['Fey Ancestry', 'Otherworldly Patron (Archfey)', 'Pact Magic'],
    spells: ['Eldritch Blast', 'Minor Illusion', 'Faerie Fire', 'Sleep'],
    inventory: ['quarterstaff', 'fey-lantern', 'satchel-of-glitter']
};

const hero20: Character = {
    id: '20',
    name: 'Grom',
    image: '../src/assets/img/avatars/hero20.png',
    race: { id: 'half-orc', name: 'Half Orc', bonuses: {strength: 2, constitution: 1}},
    class: { id: 'ranger', name: 'Ranger', hitDie: 10, icon: '../src/assets/img/class-icons/ranger.svg'},
    level: 1,
    stats: { strength: 16, dexterity: 12, constitution: 14, intelligence: 10, wisdom: 14, charisma: 8 },
    bio: 'Мисливець за головами, який спеціалізується на вилові монстрів у міських каналізаціях. Він використовує грубу силу та улюблену сокиру та одноручний арбалет. Шрами на його тілі — це карта його трофеїв.',
    nature: 'Мовчазний професіонал.',
    goal: 'Вполювати вервольфа, який тероризує передмістя.',
    worldview: 'Законослухняно-нейтральний',
    skills: ['Survival', 'Perception', 'Athletics'],
    features: ['Darkvision', 'Relentless Endurance', 'Favored Enemy (Monstrosities)', 'Natural Explorer (Urban)'],
    inventory: ['battleaxe', 'hand-crossbow', 'hunters-trap', 'monster-pouch']
};

const hero21: Character = {
    id: '21',
    name: 'Vanrya',
    image: '../src/assets/img/avatars/hero21.png',
    race: { id: 'human', name: 'Human', bonuses: {strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1}},
    class: { id: 'druid', name: 'Druid (Spore)', hitDie: 8, icon: '../src/assets/img/class-icons/druid.svg'},
    level: 1,
    stats: { strength: 10, dexterity: 12, constitution: 14, intelligence: 12, wisdom: 16, charisma: 10 },
    bio: 'Вона не поклоняється квітам та деревам, вона поклоняється грибам, плісняві та розкладу. Вона вірить, що смерть — це лише початок нового життя для грибниці. Її одяг завжди пахне сирою землею.',
    nature: 'Похмура, філософська та моторошна.',
    goal: 'Поширити спори свого священного гриба на нові землі.',
    worldview: 'Нейтрально-злий',
    skills: ['Medicine', 'Nature', 'Survival'],
    features: ['Druidic', 'Spellcasting'],
    spells: ['Chill Touch', 'Poison Spray', 'Inflict Wounds', 'Detect Poison and Disease'],
    inventory: ['quarterstaff', 'wooden-shield', 'pouch-of-spores']
};

const hero22: Character = {
    id: '22',
    name: 'Lyra',
    image: '../src/assets/img/avatars/hero22.png',
    race: { id: 'drow', name: 'Drow (Dark Elf)', bonuses: { dexterity: 2, charisma: 1 }},
    class: { id: 'bard', name: 'Bard', hitDie: 8, icon: '../src/assets/img/class-icons/bard.svg'},
    level: 1,
    stats: { strength: 8, dexterity: 16, constitution: 12, intelligence: 12, wisdom: 10, charisma: 16 },
    bio: 'Акробатка цирку, яка втекла, щоб побачити світ. Вона використовує свої виступи, щоб відволікати ворогів, поки її друзі роблять брудну роботу. Вона завжди сміється в обличчя небезпеці.',
    nature: 'Оптимістична, смілива та балакуча.',
    goal: 'Стати найвідомішою артисткою королівства.',
    worldview: 'Хаотично-добрий',
    skills: ['Acrobatics', 'Performance', 'Persuasion', 'Sleight of Hand'],
    features: ['Lucky', 'Brave', 'Bardic Inspiration', 'Spellcasting'],
    spells: ['Vicious Mockery', 'Dancing Lights', 'Charm Person', 'Feather Fall', 'Heroism'],
    inventory: ['rapier', 'tambourine', 'juggling-balls', 'costume']
};

const hero23: Character = {
    id: '23',
    name: 'Kael',
    image: '../src/assets/img/avatars/hero23.png',
    race: { id: 'high elf', name: 'High Elf', bonuses: { dexterity: 2, intelligence: 1 }},
    class: { id: 'cleric', name: 'Cleric (Light)', hitDie: 8, icon: '../src/assets/img/class-icons/cleric.svg'},
    level: 1,
    stats: { strength: 10, dexterity: 12, constitution: 12, intelligence: 12, wisdom: 16, charisma: 13 },
    bio: 'Інквізитор церкви Світла. Він не лікує, він випалює єресь вогнем. Його віра фанатична, і він готовий спалити ціле місто, щоб знищити одного демона.',
    nature: 'Суворий, нетерпимий та палкий.',
    goal: 'Очистити світ від нежиті будь-якою ціною.',
    worldview: 'Законослухняно-нейтральний',
    skills: ['Religion', 'History', 'Insight'],
    features: ['Darkvision', 'Fey Ancestry', 'Spellcasting', 'Warding Flare'],
    spells: ['Light', 'Sacred Flame', 'Burning Hands', 'Faerie Fire', 'Guiding Bolt'],
    inventory: ['mace', 'scale-mail', 'holy-symbol', 'censer-of-purification']
};

const hero24: Character = {
    id: '24',
    name: 'Toar',
    image: '../src/assets/img/avatars/hero24.png',
    race: { id: 'dragonborn', name: 'Silver Dragonborn', bonuses: { strength: 2, charisma: 1}},
    class: { id: 'fighter', name: 'Fighter', hitDie: 10, icon: '../src/assets/img/class-icons/fighter.svg'},
    level: 1,
    stats: { strength: 17, dexterity: 10, constitution: 14, intelligence: 10, wisdom: 12, charisma: 12 },
    bio: 'Шляхетний воїн з далеких північних земель. Він використовує своє крижане дихання та важку алебарду, щоб контролювати поле бою. Він говорить мало, але кожне його слово має вагу.',
    nature: 'Холодний, розважливий та чесний.',
    goal: 'Повернути фамільну зброю, викрадену бандитами.',
    worldview: 'Законослухняно-добрий',
    skills: ['Athletics', 'History', 'Intimidation'],
    features: ['Breath Weapon (Cold)', 'Damage Resistance (Cold)', 'Fighting Style (Defense)', 'Second Wind'],
    inventory: ['halberd', 'heavy-armor', 'silver-dragon-scale']
};

const hero25: Character = {
    id: '25',
    name: 'Ember',
    image: '../src/assets/img/avatars/hero25.png',
    race: { id: 'genasi', name: 'Fire Genasi', bonuses: { constitution: 2, intelligence: 1 }},
    class: { id: 'sorcerer', name: 'Sorcerer (Draconic)', hitDie: 6, icon: '../src/assets/img/class-icons/sorcerer.svg'},
    level: 1,
    stats: { strength: 10, dexterity: 14, constitution: 14, intelligence: 10, wisdom: 8, charisma: 16 },
    bio: 'Її волосся буквально палає, коли вона злиться. Вона народилася під час виверження вулкану і магія вогню тече в її жилах. Вона погано контролює свої сили і часто випадково підпалює речі.',
    nature: 'Запальна, пристрасна та небезпечна.',
    goal: 'Знайти спосіб приборкати свій внутрішній вогонь.',
    worldview: 'Хаотично-нейтральний',
    skills: ['Arcana', 'Intimidation'],
    features: ['Darkvision', 'Fire Resistance', 'Draconic Resilience', 'Spellcasting'],
    spells: ['Fire Bolt', 'Control Flames', 'Burning Hands', 'Shield', 'Produce Flame'],
    inventory: ['dagger', 'fire-opal-focus', 'burnt-journal']
};

const hero26: Character = {
    id: '26',
    name: 'Swift',
    image: '../src/assets/img/avatars/hero26.png',
    race: { id: 'wood-elf', name: 'Wood Elf', bonuses: { dexterity: 2, wisdom: 1}},
    class: { id: 'monk', name: 'Monk', hitDie: 8, icon: '../src/assets/img/class-icons/monk.svg'},
    level: 1,
    stats: { strength: 10, dexterity: 17, constitution: 13, intelligence: 10, wisdom: 15, charisma: 8 },
    bio: 'Тіньовий вбивця, яка використовує стиль "П\'яного майстра" (хоча сам не п\'є). Вона рухається безшумно, як тінь, і завдає ударів там, де ворог найменше очікує. Служить таємному ордену.',
    nature: 'Спокійна, іронічна та смертоносна.',
    goal: 'Виконати контракт на усунення корумпованого чиновника.',
    worldview: 'Законно-зла',
    skills: ['Stealth', 'Acrobatics', 'Insight'],
    features: ['Darkvision', 'Fey Ancestry', 'Unarmored Defense', 'Martial Arts'],
    inventory: ['shortsword', 'monks-robe', 'vial-of-shadow-ink']
};

const hero27: Character = {
    id: '27',
    name: 'Aldous',
    image: '../src/assets/img/avatars/hero27.png',
    race: { id: 'human', name: 'Human', bonuses: { strength: 1, dexterity: 1, constitution: 1, intelligence: 1, wisdom: 1, charisma: 1}},
    class: { id: 'artificer', name: 'Artificer (Alchemist)', hitDie: 8, icon: '../src/assets/img/class-icons/artificer.svg'},
    level: 1,
    stats: {
        strength: 10,
        dexterity: 12,
        constitution: 14,
        intelligence: 16, // Головний стат для змішування реагентів
        wisdom: 12,
        charisma: 10
    },
    bio: 'Колишній військовий лікар, який був позбавлений ліцензії за використання заборонених хімічних сполук для порятунку солдатів. Він не вірить у богів, він вірить у науку. Його пояс завішаний склянками з рідинами, які можуть як зцілити, так і розчинити ворога живцем.',
    nature: 'Цинічний, прагматичний та допитливий.',
    goal: 'Створити еліксир безсмертя (або хоча б панацею від чуми).',
    worldview: 'Законослухняно-нейтральний',
    skills: ['Medicine', 'Nature', 'Investigation'],
    features: [
        'Alchemist\'s Supplies Proficiency', 
        'Magical Tinkering', 
        'Experimental Elixir', 
        'Spellcasting'
    ],
    spells: [
        'Acid Splash',
        'Poison Spray',
        'Ray of Sickness',
        'Cure Wounds',
        'Purify Food and Drink'
    ],
    inventory: ['alchemists-supplies', 'acid-flask', 'vial-of-unknown-liquid']
};


const hero28: Character = {
    id: '28',
    name: 'Vaelar',
    image: '../src/assets/img/avatars/hero28.png',
    race: { id: 'drow', name: 'Drow (Dark Elf)', bonuses: {dexterity: 2, charisma: 1}},
    class: { id: 'sorcerer', name: 'Sorcerer (Shadow Magic)', hitDie: 6, icon: '../src/assets/img/class-icons/sorcerer.svg'},
    level: 1,
    stats: {
        strength: 8,
        dexterity: 16,
        constitution: 14,
        intelligence: 10,
        wisdom: 10,
        charisma: 16
    },
    bio: 'Він народився під час затемнення в Мензоберранзані. Його магія — це не вогонь чи блискавки, а сама темрява, що оживає. Він втік на поверхню, бо відчував, що Тіні кличуть його не служити павучій королеві Ллос, а знайти власний шлях. Світло сонця завдає йому болю, але темрява в серцях людей лякає його ще більше.',
    nature: 'Меланхолійний, тихий та лякаюче спокійний.',
    goal: 'Зрозуміти природу своєї темної сили та не дати їй поглинути себе.',
    worldview: 'Хаотично-добрий',
    skills: ['Stealth', 'Deception', 'Persuasion', 'Perception'],
    features: [
        'Superior Darkvision',
        'Sunlight Sensitivity',
        'Drow Magic', 
        'Eyes of the Dark',
        'Strength of the Grave'
    ],
    spells: [
        'Chill Touch',
        'Minor Illusion',
        'Dancing Lights',
        'False Life',
        'Sleep'
    ],
    inventory: ['dagger', 'shadow-shard', 'drow-cloak']
};

const hero29: Character = {
    id: '29',
    name: 'Q\'al',
    image: '../src/assets/img/avatars/hero29.png',
    race: { id: 'aarakocra', name: 'Aarakocra', bonuses: {wisdom: 2}},
    class: { id: 'cleric', name: 'Cleric', hitDie: 8, icon: '../src/assets/img/class-icons/cleric.svg' },
    level: 1,
    stats: {
        strength: 14,
        dexterity: 16,
        constitution: 12,
        intelligence: 10,
        wisdom: 16,
        charisma: 8
    },
    bio: 'Він спустився з найвищих піків, де шторми ніколи не вщухають. К\'аль вірить, що блискавка — це єдина чиста форма правосуддя. Він говорить рідко, різкими клекочучими звуками, і завжди спостерігає за горизонтом. Його пір\'я пахне озоном і дощем.',
    nature: 'Відсторонений, рішучий та непередбачуваний, як гроза.',
    goal: 'Полювати на елементалів землі, які оскверняють небо.',
    worldview: 'Хаотично-нейтральний',
    skills: ['Perception', 'Acrobatics', 'Nature'],
    features: [
        'Flight',
        'Talons',
        'Spellcasting',
        'Wrath of the storm'
    ],
    spells: [
        'Thaumaturgy',
        'Guidance',
        'Thunderwave',
        'Fog cloud',
        'Guiding bolt',
        'Healing word'
    ],
    inventory: ['spear', 'holy-symbol-storm', 'storm-glass', 'feather-pouch', 'lightning-stone']
};

export const characters: Character[] = [
    hero01,
    hero02,
    hero03,
    hero04,
    hero05,
    hero06,
    hero07,
    hero08, 
    hero09,
    hero10,
    hero11,
    hero12,
    hero13,
    hero14,
    hero15,
    hero16,
    hero17,
    hero18,
    hero19,
    hero20,
    hero21,
    hero22,
    hero23,
    hero24,
    hero25,
    hero26,
    hero27,
    hero28,
    hero29
];