export default function HomeSlideContent({ title, content, link, linkName }: 
    { title: string, content: string, link: string, linkName: string }): JSX.Element {

    return (
        <div className="content">
            <h3>{title}</h3>
            <p>{content}</p>
            <a href={link} className="btn">{linkName}</a>
        </div>
    );
}