import { useState } from 'react';
import type { Character } from '../../types/character';
import { getModifier, skillToStatMap } from '../../utils/utils';
import { CharacterSection } from '../CharacterSection/CharacterSection';
import { EmptyState } from '../EmptyState/EmptyState';
import './CharacterSheet.scss';

interface CharacterSheetProps {
    character: Character;
};

export function CharacterSheet({character}: CharacterSheetProps) {

    const [activeItem, setActiveItem] = useState<{section: 'skills'|'features'|'spells', value: string} | null>(null);
    const [isOpen, setIsOpen] = useState({
        skills: true,
        features: true,
        spells: true
    });

    const statConfigs = [
        { label: 'strength', icon: '⚔' },
        { label: 'dexterity', icon: '➳' },
        { label: 'constitution', icon: '✚' },
        { label: 'intelligence', icon: '🕮' },
        { label: 'wisdom', icon: '👁' },
        { label: 'charisma', icon: '🗲' },
    ];

    const toggleState = (section: 'skills' | 'features' | 'spells')=> {
        setIsOpen(prev=> ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const formatedSkills = character.skills.map((skill)=> {
        const currentSkill = skill;
        const relatedStat = skillToStatMap[currentSkill];
        const racialBonus = character.race.bonuses?.[relatedStat as keyof typeof character.race.bonuses] || 0;
        const valueStat = character.stats[relatedStat as keyof typeof character.stats] + racialBonus;
        const skillMod = getModifier(valueStat); 
        const sign = skillMod > 0 ? '+' : '';

        return `${currentSkill} (${sign}${skillMod})`
    });

    return(
        <div className='character-sheet'>
            <section  className="character-sheet__stats">
                <h3 className='character-sheet__title'>Stats</h3>
                <ul className="character-sheet__stats-items">
                    {statConfigs.map((stat)=> {
                            const baseValue = character.stats[stat.label as keyof typeof character.stats];
                            const racialBonus = character.race.bonuses?.[stat.label as keyof typeof character.race.bonuses] || 0;
                            const totalValue = baseValue + racialBonus;
                            const mod = getModifier(totalValue);
                            const sign = mod > 0 ? '+' : '';

                            return(
                                <li className="details__stats-item" key={stat.label}>
                                    <span>{stat.icon}</span> {stat.label}: <strong>{baseValue}{`${racialBonus ? ' + ' + racialBonus + ' racial' : ''}`}</strong>
                                    <span> ({sign}{mod})</span>
                                </li>
                            )
                    })}
                </ul>
                <img src={character.class.icon} alt="class-icon" className="character-sheet__stats-class-icon"/>
            </section>
            <section className="character-sheet__wrapper">
                <CharacterSection
                    className='character-sheet__skills'
                    classNameItem={'item'}
                    text={'Skills'} 
                    onClick={()=> toggleState('skills')} 
                    state={isOpen.skills} 
                    arr={formatedSkills}
                    section='skills'
                    activeItem={activeItem}
                    onMouseEnter={(item)=> setActiveItem({section: 'skills', value: item})}
                    onMouseLeave={()=> setActiveItem(null)}
                />
                <CharacterSection 
                    className='character-sheet__features'
                    classNameItem='item'
                    text={'Features'} 
                    onClick={()=> toggleState('features')} 
                    state={isOpen.features} 
                    arr={character.features}
                    section='features'
                    activeItem={activeItem}
                    onMouseEnter={(item)=> setActiveItem({section: 'features', value: item})}
                    onMouseLeave={()=> setActiveItem(null)}
                />
                <section className="character-sheet__spells-wrapper">
                    {character.spells && character.spells.length > 0 ? (
                        <>
                            <CharacterSection 
                            className='character-sheet__spells'
                            classNameItem='item'
                            text={'Spells'} 
                            onClick={()=> toggleState('spells')} 
                            state={isOpen.spells} 
                            arr={character.spells}
                            section='spells'
                            activeItem={activeItem}
                            onMouseEnter={(item)=> setActiveItem({section: 'spells', value: item})}
                            onMouseLeave={()=> setActiveItem(null)}
                            />
                        </>
                    ) : (<EmptyState text='This hero dont have spells.' image={'../src/assets/img/dice.svg'} className='empty-state'/>)}
                </section>
            </section>
        </div>
    )
}