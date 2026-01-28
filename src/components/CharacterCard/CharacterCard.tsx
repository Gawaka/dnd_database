import type { Character } from "../../types/character";
// import { Details } from "../Details/Details";
import './characterCard.scss';

interface CharacterCardProps {
    character: Character;
    isActive: boolean;
    onSelect: ()=> void;
};

export function CharacterCard({character, onSelect, isActive}: CharacterCardProps) {

    return(
        <div className={`char-card ${isActive ? 'char-card--active' : ''}`} onClick={onSelect}>
            <h2 className="char-card__name">{character.name}</h2>
            <img src={character.image} alt={character.name} className='char-card__avatar'/>
                <p className="char-card__class">{character.class.name}</p>
                <p className="char-card__race">{character.race.name}</p>
        </div>
    )
}