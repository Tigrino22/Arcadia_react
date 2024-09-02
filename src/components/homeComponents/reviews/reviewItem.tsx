import { ReactNode } from "react";

interface ReviewItemProps {
    author: string;
    content: ReactNode;
}

export default function ReviewItem({ author, content }: ReviewItemProps): JSX.Element {
    return (
        <div className="review-item">
            <p>{content}</p>
            <footer>
                <cite>- {author}</cite>
            </footer>
        </div>
    );
}
