import DropdownItem from './headerComponents/dropdownItem';
import MenuLink from './headerComponents/menuLink';
import NavMenu from './headerComponents/navMenu';
import NavToggle from './headerComponents/navToggle';

export default function Header() {

    /*=============== SHOW MENU ===============*/
    const showMenu = (toggleId: string, navId: string) => {
        const toggle = document.getElementById(toggleId),
            nav = document.getElementById(navId)

        toggle?.addEventListener('click', () => {
            // Add show-menu className to nav menu
            nav?.classList.toggle('show-menu')
            // Add show-icon to show and hide menu icon
            toggle.classList.toggle('show-icon')
        })
    }

    showMenu('nav-toggle', 'nav-menu');


    return (
        // <!--=============== HEADER ===============-->
        <header className="header">
            <nav className="nav container">

                {/* <!--=============== TITLE ===============--> */}
                <div className="nav__data">
                    <MenuLink link={'/'} name={'Arcadia'} svg={<i className="ri-seedling-line"></i>} className='nav__logo' />

                    <NavToggle />
                </div>

                {/* <!--=============== NAV MENU ===============--> */}

                <NavMenu>
                    <MenuLink link={'/'} name={'Accueil'} className='nav__link' />
                    <MenuLink link={'/habitats'} name={'Habitats'} className='nav__link' />
                    <MenuLink link={'/services'} name={'Services'} className='nav__link' />
                    <MenuLink link={'/contact'} name={'Contact'} className='nav__link' />

                    <DropdownItem name='Compte' />
                </NavMenu>

            </nav>
        </header>
    );
}