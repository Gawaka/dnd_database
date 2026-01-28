import './characterSection.scss'

interface CharacterSectionProps{
    state: boolean;
    arr: string[],
    onClick: ()=> void;
    className: string;
    classNameItem: string;
    activeItem: { section: 'skills' | 'features' | 'spells'; value: string } | null;
    text: string;
    section: 'skills'|'features'|'spells';
    onMouseEnter: (item: string)=> void;
    onMouseLeave: ()=> void;
};

export function CharacterSection({state, arr, onClick, className, classNameItem, activeItem, text, onMouseEnter, onMouseLeave}: CharacterSectionProps) {

    return(
        <>
            <section className={className}>
                <h3 
                    className={`${state ? 'character-sheet__title--toggled unscroll' : 'character-sheet__title--toggled'}`}
                    onClick={onClick}
                    >
                    {text}
                </h3>
                <ul  className={`${className}-items`}>
                    {arr.map((item, i)=> (
                        state ? <li
                            className={`${className}-${classNameItem} ${activeItem?.value === item ? `${className}-${classNameItem}--active-item` : ''}`}
                            key={i}
                            onMouseEnter={()=> onMouseEnter(item)}
                            onMouseLeave={onMouseLeave}
                        >
                            {item}
                        </li> : null
                    ))}
                </ul>
            </section>
        </>
    )
}