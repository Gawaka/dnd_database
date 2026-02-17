import { useState } from 'react';
import { CharacterCard } from '../CharacterCard/CharacterCard'
import { characters } from '../../data/characters';
import { Details } from '../Details/Details';
import { Skeleton } from '../Skeleton/Skeleton';
import { getRandomChar } from '../../utils/utils';
import './charactersPage.scss';


export function CharactersPage() {
        const [activeCharacterId, setActiveCharacterId] = useState<string | null>(()=> {
            const randomIndex = getRandomChar({max: characters.length});
            return characters[randomIndex].id;
        });
        const activeCharacter = characters.find(char=> char.id === activeCharacterId);

    return (
        <main className='app__main'>
            <div className='character-grid'>
            {characters.map(char => (
                <CharacterCard
                    key={char.id}
                    character={char}
                    isActive={char.id === activeCharacterId}
                    onSelect={()=> setActiveCharacterId(char.id)}
                />
            ))}
            </div>
            <div className='details-panel'>
                {activeCharacter ? (
                <Details character={activeCharacter} onClose={()=> setActiveCharacterId(null)}/>
                ) : (
                <Skeleton/>
                )}
            </div>
        </main>
    )
}