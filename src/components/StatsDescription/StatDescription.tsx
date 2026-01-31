
import './statDescription.scss';

interface StatDescriptionProps {
    activeItem: string | null; 
    stat: { id: string; name: string; description: string } | undefined;
}

export function StatDescription({ activeItem, stat }: StatDescriptionProps) {
    const isActive = activeItem === stat?.id;

    if (!isActive || !stat) return null;

    return (
        <div className="description">
            <div className="description__text-wrapper">
                <h6 className="description__title">{stat.name} <strong>({stat.id})</strong></h6>
                <p className="description__text">{stat.description}</p>
            </div>
        </div>
    );
}