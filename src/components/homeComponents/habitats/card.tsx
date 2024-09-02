import { ReactNode } from "react";

interface CardHabitatProps {
    source: string;
    title: string;
    children: ReactNode;
}

export default function CardHabitat({ source, title, children }: CardHabitatProps): JSX.Element {
    return (
        <div className="habitat-item">
            <img src={source} alt={title} className="habitat-image" />
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}
