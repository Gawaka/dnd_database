import { useState } from 'react';
import { scenarios } from '../../data/scenarios';
import { ScenarioCard } from '../ScenarioCard/ScenarioCard';
import { Button } from '../Button/Button';
import { ScenarioDetails } from '../ScenarioDetails.tsx/ScenarioDetails';
import './scenariosPage.scss';

export function ScenariosPage() {
    const [activeScenario, setActiveScenario] = useState<string | null>();

    const currentScenario = scenarios.find(item=> activeScenario === item.id);
    console.log(currentScenario);

    return(
        <section className='scenarios-page'>
            {activeScenario ? (
                <div className="scenarios-page__view-header">
                    <h2 className='scenarios-page__title'>Scenarios</h2>
                    <Button 
                        text={'Back to list'} 
                        className={activeScenario ? `button-secondary` : 'button-secondary--hide-button'} 
                        onClick={()=> setActiveScenario(null)}/>
                </div>
                ): <h2 className='scenarios-page__title'>Scenarios</h2>}
            
            <div className={activeScenario ? `scenarios-page__wrapper--details` : 'scenarios-page__wrapper'}>
                {activeScenario ? (
                    <div>
                        {/* <Button text={'Back to list'} className="button-secondary" onClick={()=> setActiveScenario(null)}/> */}
                            {currentScenario && <ScenarioDetails scenario={currentScenario} />}
                    </div>
                ) : scenarios.map(scenario=> (
                        <ScenarioCard
                            key={scenario.id}
                            scenario={scenario}
                            isActive={scenario.id === activeScenario}
                            onSelect={()=> setActiveScenario(scenario.id)}
                        />
                ))}
            </div>
        </section>
    )
}