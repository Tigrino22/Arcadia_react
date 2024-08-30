import { Children, ReactNode } from "react";
import MenuLink from "./menuLink";
import DropdownItem from "./dropdownItem";

type NavMenuProps = {
    children: ReactNode;
};

export default function NavMenu({ children }: NavMenuProps) {
    return (
        <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
                {Children.map(children, (child, index) => {
                    // Vérifie le type du composant enfant
                    if ((child as JSX.Element).type === MenuLink) {
                        return <MenuLink key={index} {...(child as JSX.Element).props} />;
                    } else if ((child as JSX.Element).type === DropdownItem) {
                        return <DropdownItem key={index} {...(child as JSX.Element).props} />;
                    }
                    return null;
                })}
            </ul>
        </div>
    );
}
