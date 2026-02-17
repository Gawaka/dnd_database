import { useState } from 'react';
import type { Character } from '../../types/character';
import { getModifier, skillToStatMap } from '../../utils/utils';
import { CharacterSection } from '../CharacterSection/CharacterSection';
import { EmptyState } from '../EmptyState/EmptyState';
import './CharacterSheet.scss';
import { statsDescription } from '../../data/stats';
import { StatsDescription } from '../StatsDescription/StatsDescription';
import { features as allFeaturesData } from '../../data/features';
import { skills as allSkillsData } from '../../data/skills';
import { spells as allSpellsData } from '../../data/spells';
import { itemsDatabase as allItemsData} from '../../data/items';

interface CharacterSheetProps {
    character: Character;
};

export function CharacterSheet({character}: CharacterSheetProps) {

    const [activeItem, setActiveItem] = useState<{
        section: 'skills'|'features'|'spells'|'stats'|'inventory',
        value: string
    } | null>(null);
    const [isOpen, setIsOpen] = useState({
        skills: true,
        features: true,
        spells: true,
        inventory: true
    });

    const statConfigs = [
        { label: 'strength', icon: '⚔', id: 'str'},
        { label: 'dexterity', icon: '➳', id: 'dex'},
        { label: 'constitution', icon: '✚', id: 'con'},
        { label: 'intelligence', icon: '🕮', id: 'int'},
        { label: 'wisdom', icon: '👁', id: 'wis'},
        { label: 'charisma', icon: '🗲', id: 'cha'},
    ];

    const toggleState = (section: 'skills' | 'features' | 'spells' | 'inventory')=> {
        setIsOpen(prev=> ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const currentInventoryItem = allItemsData.find(item=>
        item.id.toLowerCase() === activeItem?.value.toLowerCase() ||
        item.name?.toLowerCase() === activeItem?.value.toLowerCase()
    );
    const currentFeature = allFeaturesData.find(item=> 
        item.id.toLowerCase() === activeItem?.value.toLowerCase() ||
        item.originalName?.toLowerCase() === activeItem?.value.toLowerCase()
    );
    const currentSpells = allSpellsData.find(item=> 
        item.id.toLowerCase() === activeItem?.value.toLowerCase() ||
        item.originalName?.toLowerCase() === activeItem?.value.toLowerCase()
    );
    const currentSkill = allSkillsData.find(item => {
        if (!activeItem?.value) return false;
        const normalize = (str: string) => str.toLowerCase().replace(/[-\s]/g, '');
        const searchValue = normalize(activeItem.value);
        const skillId = normalize(item.id);
        const originalName = item.originalName ? normalize(item.originalName) : '';

        return searchValue.includes(skillId) || searchValue.includes(originalName);
    });

    const formatedSkills = character.skills.map((skill)=> {
        const currentlySkill = skill;
        const relatedStat = skillToStatMap[currentlySkill];
        const racialBonus = character.race.bonuses?.[relatedStat as keyof typeof character.race.bonuses] || 0;
        const valueStat = character.stats[relatedStat as keyof typeof character.stats] + racialBonus;
        const skillMod = getModifier(valueStat); 
        const sign = skillMod > 0 ? '+' : '';
        // console.log(`${currentlySkill} (${sign}${skillMod})`);
        

        return `${currentlySkill} (${sign}${skillMod})`
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
                            const currentStat = statsDescription.find(item=> item.id === stat.id);

                            return(
                                <li 
                                    className="details__stats-item" 
                                    key={stat.label}
                                    onMouseEnter={()=> setActiveItem({section: 'stats', value: stat.id})}
                                    onMouseLeave={()=> setActiveItem(null)}
                                >
                                    <span>{stat.icon}</span> {stat.label}: <strong>{baseValue}{`${racialBonus ? ' + ' + racialBonus + ' racial' : ''}`}</strong>
                                    <span> ({sign}{mod})</span>
                                    <StatsDescription 
                                        data={activeItem?.value === stat.id ? currentStat : undefined}
                                        activeItem={activeItem?.value || null}
                                    />
                                </li>
                            )
                    })}
                </ul>
                <img src={character.class.icon} alt="class-icon" className="character-sheet__stats-class-icon"/>
            </section>
            <section className="character-sheet__wrapper">
                <CharacterSection
                className='character-sheet__equipment'
                classNameItem={'item'}
                text={'Inventory'}
                onClick={()=> toggleState('inventory')}
                state={isOpen.inventory}
                arr={character.inventory}
                fullData={currentInventoryItem}
                section='inventory'
                activeItem={activeItem}
                onMouseEnter={(item)=> setActiveItem({section: 'inventory', value: item})}
                onMouseLeave={()=> setActiveItem(null)}
                />
                    {/* <section className='character-sheet__equipment'>
                        <h3 className='character-sheet__title'>Inventory</h3>
                        <ul className='character-sheet__equipment-items'>
                            {character.inventory.map((item, id)=> (
                                <li className='character-sheet__equipment-item' key={id}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section> */}
                <CharacterSection
                    className='character-sheet__skills'
                    classNameItem={'item'}
                    text={'Skills'} 
                    onClick={()=> toggleState('skills')} 
                    state={isOpen.skills} 
                    arr={formatedSkills}
                    fullData={currentSkill}
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
                    fullData={currentFeature}
                    section='features'
                    activeItem={activeItem}
                    onMouseEnter={(item: any) => setActiveItem({
                    section: 'features', 
                    value: typeof item === 'string' ? item : item.originalName 
                })}
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
                            fullData={currentSpells}
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