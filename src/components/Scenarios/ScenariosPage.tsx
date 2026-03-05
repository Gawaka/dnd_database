import { scenarios } from '../../data/scenarios';
import { Button } from '../Button/Button';
import './scenariosPage.scss';

export function ScenariosPage() {

    return(
        <section className='scenarios-page'>
            <h2 className='scenarios-page__title'>Scenarios</h2>
            <div className="scenarios-page__scenarios-wrapper">
                {scenarios.map(item=> (
                    <div className="scenarios-page__scenario" key={item.id}>
                        <h3 className="scenarios-page__name">{item.name}</h3>
                        <img className="scenarios-page__avatar" src={item.avatar} alt={item.name}/>
                        <div className="scenarios-page__info">
                            <p className="scenarios-page__genres"><strong>Жанр: </strong>{item.genres.join(', ')}</p>
                            <p className="scenarios-page__description"><strong>Опис: </strong>{item.description}</p>
                            <p className="scenarios-page__level"><strong>Рівень гравців: </strong>{item.recommendedLevel}</p>
                        </div>
                        <Button text='More info' className='button' onClick={()=> onclick}/>
                    </div>
                ))}
            </div>
        </section>
    )
}