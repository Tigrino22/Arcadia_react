type DropdownLinkProps = {
    name: string;
    svg?: React.ReactNode;
    link?: string;

}


export default function DropdownLink({link = "#", name = "link", svg = null}: DropdownLinkProps): JSX.Element {

    return (
        <li>
            <a href={ link } className="dropdown__link">
                { svg } { name }
            </a>
        </li>
    );
}