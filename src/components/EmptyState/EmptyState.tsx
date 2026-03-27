import './emptyState.scss';
import image from '../../../public/dice.svg'

interface EmptystateProps{
    text: string;
    image: string;
    className: string;
}

export function EmptyState({text, className}: EmptystateProps) {

    return(
        <div className={className}>
            <h4 className={`${className}__title`}>{text}</h4>
            <img className={`${className}__image`} src={image} alt="dice"/>
        </div>
    )
}