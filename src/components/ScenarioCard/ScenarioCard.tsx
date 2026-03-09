import type { Scenario } from '../../types/scenario';
import { Button } from '../Button/Button';
import './scenarioCard.scss';

interface ScenarioCardProps {
    scenario: Scenario;
    isActive: boolean;
    onSelect: ()=> void;
    key: any;
};



export function ScenarioCard({scenario, isActive, onSelect}: ScenarioCardProps) {

    return(
        <div className={`scenario-card ${isActive ? 'scenario-card--active' : ''}`} onClick={onSelect}>
                <div className="scenario-card__scenario-wrapper">
                    <div className="scenario-card__scenario" >
                        <h3 className="scenario-card__name">{scenario.name}</h3>
                        <img className="scenario-card__avatar" src={scenario.avatar} alt={scenario.name}/>
                        <div className="scenario-card__info">
                            <p className="scenario-card__genres"><strong>Жанр: </strong>{scenario.genres.join(', ')}</p>
                            <p className="scenario-card__description"><strong>Опис: </strong>{scenario.description}</p>
                            <p className="scenario-card__level"><strong>Рівень гравців: </strong>{scenario.recommendedLevel}</p>
                        </div>
                        <Button text='More info' className='button' onClick={()=> onclick}/>
                    </div>
                </div>
        </div>
    )
}