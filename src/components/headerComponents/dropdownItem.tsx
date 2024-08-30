import DropdownLink from "./dropdownLink"

type DropdownItemType = {
    name: string
}

export default function DropdownItem({name}: DropdownItemType): JSX.Element {

    return (
        
        < li className = "dropdown__item" >
        <div className="nav__link">
            <span><i className="ri-user-line"></i> { name }</span> <i className="ri-arrow-down-s-line dropdown__arrow"></i>
        </div>

        <ul className="dropdown__menu">

            <DropdownLink
                link="#"
                name="Habitats"
                svg={<i className="ri-tree-line"></i>}
            />
            <DropdownLink
                link="#"
                name="Services"
                svg={<i className="ri-restaurant-line"></i>}
            />
            <DropdownLink
                link="#"
                name="Animaux"
                svg={<i className="ri-evernote-fill"></i>}
            />
            <DropdownLink
                link="#"
                name="Horaires"
                svg={<i className="ri-time-line"></i>}
            />
            <DropdownLink
                link="#"
                name="Rapports vétérinaires"
                svg={<i className="ri-folder-3-line"></i>}
            />
            <DropdownLink
                link="#"
                name="Statistiques"
                svg={<i className="ri-pie-chart-line"></i>}
            />
            <DropdownLink
                link="#"
                name="Déconnexion"
                svg={<i className="ri-close-line"></i>}
            />
        </ul>
    </li >
    );
}