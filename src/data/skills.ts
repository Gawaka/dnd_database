import type { Skill } from '../types/skill';

export const skills: Skill[] = [
    {
        id: 'athletics',
        name: 'Атлетика',
        originalName: 'Athletics',
        ability: 'strength',
        description: 'Здатність лазити, стрибати або плавати. Також використовується для боротьби та штовхання.'
    },
    {
        id: 'acrobatics',
        name: 'Акробатика',
        originalName: 'Acrobatics',
        ability: 'dexterity',
        description: 'Здатність втримати рівновагу на слизькій поверхні, канаті, або вирватися із захвату.'
    },
    {
        id: 'sleight-of-hand',
        name: 'Вправність рук',
        originalName: 'Sleight of Hand',
        ability: 'dexterity',
        description: 'Фокуси, кишенькові крадіжки, приховування предметів або знешкодження пасток.'
    },
    {
        id: 'stealth',
        name: 'Скритність',
        originalName: 'Stealth',
        ability: 'dexterity',
        description: 'Здатність залишатися непоміченим, ховатися в тіні або безшумно рухатися.'
    },
    {
        id: 'arcana',
        name: 'Магія (Аркана)',
        originalName: 'Arcana',
        ability: 'intelligence',
        description: 'Знання про заклинання, магічні предмети, езотеричні символи, магічні традиції та плани існування.'
    },
    {
        id: 'history',
        name: 'Історія',
        originalName: 'History',
        ability: 'intelligence',
        description: 'Знання про історичні події, легендарних людей, стародавні королівства, минулі суперечки та війни.'
    },
    {
        id: 'investigation',
        name: 'Розслідування',
        originalName: 'Investigation',
        ability: 'intelligence',
        description: 'Пошук прихованих доказів, висновки на основі фактів, або пошук слабкого місця в конструкції.'
    },
    {
        id: 'nature',
        name: 'Природа',
        originalName: 'Nature',
        ability: 'intelligence',
        description: 'Знання про місцевість, рослини і тварин, погоду та природні цикли.'
    },
    {
        id: 'religion',
        name: 'Релігія',
        originalName: 'Religion',
        ability: 'intelligence',
        description: 'Знання про богів, ритуали та молитви, релігійні ієрархії, священні символи та таємні культи.'
    },
    {
        id: 'animal-handling',
        name: 'Догляд за тваринами',
        originalName: 'Animal Handling',
        ability: 'wisdom',
        description: 'Здатність заспокоїти домашню або дику тварину, керувати конем або зрозуміти наміри звіра.'
    },
    {
        id: 'insight',
        name: 'Проникливість',
        originalName: 'Insight',
        ability: 'wisdom',
        description: 'Визначення справжніх намірів істоти, розпізнавання брехні або передбачення наступного кроку ворога.'
    },
    {
        id: 'medicine',
        name: 'Медицина',
        originalName: 'Medicine',
        ability: 'wisdom',
        description: 'Здатність стабілізувати помираючого, діагностувати хворобу або визначити причину смерті.'
    },
    {
        id: 'perception',
        name: 'Уважність',
        originalName: 'Perception',
        ability: 'wisdom',
        description: 'Здатність помічати, чути або виявляти присутність чогось. Використовується для виявлення прихованих ворогів.'
    },
    {
        id: 'survival',
        name: 'Виживання',
        originalName: 'Survival',
        ability: 'wisdom',
        description: 'Здатність орієнтуватися в дикій місцевості, полювати, розпалювати вогонь та йти по сліду.'
    },
    {
        id: 'deception',
        name: 'Обман',
        originalName: 'Deception',
        ability: 'charisma',
        description: 'Приховування правди, вербально або через дії. Включає брехню, відволікання уваги та шахрайство.'
    },
    {
        id: 'intimidation',
        name: 'Залякування',
        originalName: 'Intimidation',
        ability: 'charisma',
        description: 'Здатність змусити інших робити те, що ви хочете, через прямі погрози, ворожі дії або фізичне насильство.'
    },
    {
        id: 'performance',
        name: 'Виступ',
        originalName: 'Performance',
        ability: 'charisma',
        description: 'Здатність розважати аудиторію музикою, танцями, акторською грою або розповідями.'
    },
    {
        id: 'persuasion',
        name: 'Переконання',
        originalName: 'Persuasion',
        ability: 'charisma',
        description: 'Здатність впливати на рішення інших чесною розмовою, дипломатією, ввічливістю або розумними аргументами.'
    }
];