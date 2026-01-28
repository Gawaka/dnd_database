import { useState } from 'react';
import { Header } from './components/Header/Header';
import { CharacterCard } from './components/CharacterCard/CharacterCard';
import { characters } from './data/characters';
import { Details } from './components/Details/Details';
import { Skeleton } from './components/Skeleton/Skeleton';
import './style/app.scss';

function App() {
    const [activeCharacterId, setActiveCharacterId] = useState<string | null>(null);
    const activeCharacter = characters.find(char=> char.id === activeCharacterId);


    return (
    <div className='app'>
        <Header/>
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
    </div>
    )
}

export default App