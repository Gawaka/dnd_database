import './button.scss';

interface ButtonProps {
    text: string;
    className: string;
    onClick: ()=> void;
}

export function Button({onClick, text, className}: ButtonProps ) {
    return(
            <button
            className={className}
            onClick={onClick}
            >
                {text}
            </button>
    )
};