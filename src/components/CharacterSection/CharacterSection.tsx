import { StatsDescription } from "../StatsDescription/StatsDescription";

interface CharacterSectionProps{
    state: boolean;
    arr: any[],
    onClick: ()=> void;
    className: string;
    classNameItem: string;
    activeItem: { section: 'skills'|'features'|'spells'|'stats'| 'inventory'; value: string } | null;
    text: string;
    section: 'skills'|'features'|'spells'|'inventory';
    onMouseEnter: (item: string)=> void;
    onMouseLeave: ()=> void;
    fullData: any;
};

export function CharacterSection({state, arr, onClick, className, classNameItem, activeItem, text, onMouseEnter, onMouseLeave, fullData}: CharacterSectionProps) {

    return(
        <>
            <section className={className}>
                <h3 
                    className={`${state ? 'character-sheet__title--toggled unscroll' : 'character-sheet__title--toggled'}`}
                    onClick={onClick}
                    >
                    {text}
                </h3>
                    <ul className={`${className}-items`}>
                        {arr.map((item, i) => {
                            console.log(item);
                            return (
                                state ? (
                                    <li
                                        className={`${className}-${classNameItem} ${activeItem?.value === (typeof item === 'string' ? item : item.id) ? `${className}-${classNameItem}--active-item` : ''}`}
                                        key={i}
                                        onMouseEnter={() => {
                                            const valueToSend = typeof item === 'string' ? item : item.id;
                                            onMouseEnter(valueToSend);
                                        }}
                                        onMouseLeave={onMouseLeave}
                                    >
                                        {typeof item === 'string' ? item : item.name}
                                        
                                        <StatsDescription
                                            data={activeItem?.value === item ? fullData : undefined}
                                            activeItem={activeItem?.value || null}
                                        />
                                    </li>
                                ) : null
                            );
                        })}
                    </ul>
            </section>
        </>
    )
}