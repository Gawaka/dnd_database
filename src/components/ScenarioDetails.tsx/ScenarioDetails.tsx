
import type { Scenario } from '../../types/scenario';
import './scenarioDetails.scss';

interface ScenarioDetailsProps {
    scenario: Scenario;
};

export function ScenarioDetails({scenario}: ScenarioDetailsProps) {

    return(
        <section className="scenario-details">
            <div className="scenario-details__wrapper">
                <div className="scenario-details__scenario">
                    <h4 className="scenario-details__scenario-title">{scenario.name}</h4>
                    <div className="scenario-details__art-box">
                        {scenario.arts.map(art=> (<img src={art} alt={scenario.name}/>))}
                    </div>
                    <div className="scenario-details__info-box">
                        <p><strong>Жанр: </strong>{scenario.genres.join(', ')}</p>
                        <p><strong>Опис: </strong>{scenario.description}</p>
                        <p><strong>Бекграунд: </strong>{scenario.background}</p>
                        <ul className="scenario-details__mechanics-list">
                            <h3 className="scenario-details__mechanics-title"><strong>Унікальні механіки</strong></h3>
                            <li className="scenario-details__mechanics-item">
                                <p>{scenario.mechanics.name}</p>
                                <p>{scenario.mechanics.description}</p>
                            </li>
                        </ul>
                        <section className="scenario-details__npcs-section">
                            <h3 className="scenario-details__npc-title"><strong>НПС</strong></h3>
                            <ul className="scenario-details__npcs-list">
                                {scenario?.npcs?.map((npc, i) => (
                                    <li key={i} className="scenario-details__npc-item">
                                        <article className="scenario-details__npc-card">
                                            <h4 className="scenario-details__npc-card-name">{npc.name}</h4>
                                            <span className="scenario-details__npc-card-role">{npc.role}</span>
                                            <p className="scenario-details__npc-card-description">{npc.description}</p>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <section className="scenario-details__acts-section">
                            <h3 className="scenario-details__acts-title"><strong>АКТИ</strong></h3>
                            <ul className="scenario-details__acts-list">
                                {scenario.acts.map((act, i)=> (
                                    <li className='scenario-details__act' key={i}>
                                        <article className="scenario-details__act-card">
                                            <h4 className="scenario-details__act-title">{act.title}</h4>
                                            <p><span>Локації: </span> {act.location}</p>
                                            <p><span>Опис: </span>{act.description}</p>
                                            <p><span>Ціль: </span> {act.goal}</p>
                                            <p><span>завершення: </span> {act.complication}</p>
                                        </article>
                                    </li>
                                ))}
                            </ul>
                        </section>
                        <p><strong>Нагороди: </strong>{scenario.rewards.loot} {'XP'} {scenario.rewards.xp}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};