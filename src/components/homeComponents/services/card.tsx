import { ReactNode } from "react";

interface CardServiceProps {
    title: string;
    children: ReactNode;
    image?: string; // Image optionnelle
}

export default function CardService({ title, children, image }: CardServiceProps): JSX.Element {
    return (
        <div className="service-item">
            {image && <img src={image} alt={title} className="service-image" />}
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}
