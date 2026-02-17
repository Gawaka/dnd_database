
import './statsDescription.scss';

export interface EntityData {
    id: string;
    name: string;
    description: string;
    originalName?: string;
    // Додаткові поля, які можуть бути, а можуть і не бути
    school?: string;
    ability?: string;
    level?: number;
    range?: string;
    source?: string;
    type?: string;
}

interface StatsDescriptionProps {
    activeItem: string | null;
    data: EntityData | undefined;
    // section: string;
}

export function StatsDescription({ activeItem, data, }: StatsDescriptionProps) {
    const isActive = activeItem !== null && data !== undefined;

    if (!isActive || !data) return null;

    return (
        <div className="description">
            <div className="description__text-wrapper">
                <h6 className="description__title">{data.name} <strong>({data.id && data.id.length <= 3 ? data.id || data.originalName : data.type})</strong></h6>
                <p className="description__text">{data.school ? <strong>{"Школа: " + data.school}</strong> : null}</p>
                <p className="description__text">{data.description}</p>
            </div>
        </div>
    );
}