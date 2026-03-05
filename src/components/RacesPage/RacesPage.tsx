import { fetchRaces } from '../../utils/api';
import { useEffect, useState } from 'react';
import { racesAvatars } from '../../utils/utils';
import type { Race } from '../../types/raceApiData';
import './racesPage.scss';

export function RacesPage() {
const [races, setRaces] = useState<Race[]>([]);

    useEffect(()=> {
        fetchRaces()
            .then((data: Race[])=> {
                const enrichedRaces = data.map(item=> {
                    const avatarObj = racesAvatars.find(avatar=> avatar.id === item.index);
                    
                    return {
                        ...item, avatar: avatarObj?.img
                    }
                });
                setRaces(enrichedRaces);
                    console.log(enrichedRaces);
            })
    }, []);    

    return(
        <section className='races-card'>
            <h3 className='races-card__title'>Races</h3>
            <div className="races-card__wrapper">                
                <ul className="races-card__items">
                    {races.map((race, i)=> (
                        <li className='races-card__item' key={i}>
                            <h4>{race.name}</h4>
                            <img src={race.avatar} alt={race.index} />
                            <div className="races-card__info-wrapper">
                                <p><strong>Description: </strong>{race.alignment}</p>
                                <p>{`${race.language_desc}. ${race.age}`}</p>
                                <p></p>
                                <p>
                                    <strong>Size: </strong>
                                    {`${race.size}. ${race.size_description}`}
                                </p>
                                <p><strong>Speed:</strong> {race.speed} ft</p>
                                {race.subraces && race.subraces.length > 0 ? (
                                    <div className="subraces-list">
                                    <ul>
                                        {race.subraces.map((sub: any) => (
                                        <li key={sub.index}>
                                            <strong>{sub.name}: </strong> {sub.desc}
                                        </li>
                                        ))}
                                    </ul>
                                    </div>
                                ) : (
                                    <p><i>This race don't have subraces.</i></p>
                                )}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}