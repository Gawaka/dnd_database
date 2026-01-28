import type { Character } from "../../types/character";
import { Button } from "../Button/Button";
import { CharacterSheet } from "../CharacterSheet/CharacterSheet";
import '../Details/details.scss';

interface DetailsProps {
    character: Character;
    onClose: ()=> void
};

export function Details({character, onClose}: DetailsProps) {

    return(
        <div className="details">
            <div className="details__title-wrapper">
                <h2 className="details__title">Hero details</h2>
                <h2 className="details__title--name">{character.name}</h2>
                <p><strong>Level:</strong> {character.level}</p>
            </div>
            <img src={character.image} alt={character.name} className="details__image"/>
            <div className="details__character-info">
                <div className="details__character-general-info">
                    <p><strong>Class:</strong> {character.class.name}</p>
                    <p><strong>Race:</strong> {character.race.name}</p>
                    <p><strong>Hit dice: </strong>D{character.class.hitDie}</p>
                </div>
                <p className="details__bio">{character.bio}</p>
                <p><strong>Світогляд:</strong> {character.worldview}</p>
                <p><strong>Характер:</strong> {character.nature}</p>
                <p><strong>Ціль:</strong> {character.goal}</p>
            </div>
            <CharacterSheet character={character}/>
            <Button className="button" text="Hide info" onClick={onClose}/>
        </div>
    )
}