import { NavLink } from 'react-router-dom';

type menuLinkType = {
    link: string;
    name: string;
    className?: string;
    svg?: React.ReactNode
}

export default function MenuLink ({link, name, className, svg }: menuLinkType): JSX.Element {

    return (<li>
        <NavLink to= { link } className={ ({isActive}) => {
            return [
                isActive ? "active" : "",
                className
            ].join(" ");
        } }>{ name } { svg }</NavLink>
    </li>);
}