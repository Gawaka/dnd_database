import { useState } from 'react';
import { scenarios } from '../../data/scenarios';
import './scenariosPage.scss';
import type { Scenario } from '../../types/scenario';
import { ScenarioCard } from '../ScenarioCard/ScenarioCard';



export function ScenariosPage() {
    const [activeScenario, setActiveScenario] = useState<string | null>();

    return(
        <section className='scenarios-page'>
            <h2 className='scenarios-page__title'>Scenarios</h2>
            <div className="scenarios-page__wrapper">
                {scenarios.map(scenario=> (
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