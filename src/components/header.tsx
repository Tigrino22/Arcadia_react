import { useEffect, useRef } from 'react';
// import DropdownItem from './headerComponents/dropdownItem';
import MenuLink from './headerComponents/menuLink';
import NavMenu from './headerComponents/navMenu';
import NavToggle from './headerComponents/navToggle';
import SocialMedia from './headerComponents/socialMedia';

export default function Header() {


    /*=============== SHOW MENU ===============*/

    const useMenuToggle = (toggleId: string, navId: string) => {
        const handleClickRef = useRef<(event: MouseEvent) => void>();
    
        useEffect(() => {
            const toggle = document.getElementById(toggleId);
            const nav = document.getElementById(navId);
    
            if (toggle && nav) {
                handleClickRef.current = () => {
                    nav.classList.toggle('show-menu');
                    toggle.classList.toggle('show-icon');
                };
    
                const handleClick = handleClickRef.current;
    
                toggle.addEventListener('click', handleClick);
    
                return () => {
                    toggle.removeEventListener('click', handleClick);
                };
            }
        }, [toggleId, navId]);
    };

    useMenuToggle('nav-toggle', 'nav-menu');


    return (
        // <!--=============== HEADER ===============-->
        <header className="header">
            <nav className="nav container">

                {/* <!--=============== TITLE ===============--> */}
                <div className="nav__data">
                    <MenuLink link={'/'} name={'Arcadia'} className='nav__logo' />
                    <SocialMedia />
                    <NavToggle />
                </div>

                {/* <!--=============== NAV MENU ===============--> */}

                <NavMenu>
                    <MenuLink link={'/'} name={'Accueil'} className='nav__link' />
                    <MenuLink link={'/habitats'} name={'Habitats'} className='nav__link' />
                    <MenuLink link={'/services'} name={'Services'} className='nav__link' />
                    <MenuLink link={'/contact'} name={'Contact'} className='nav__link' />

                    {/* <DropdownItem name='Compte' /> */}

                    <MenuLink link={'/login'} name={'Connexion'} className='nav__link' svg={<i className="ri-user-line"></i>} />
                </NavMenu>

            </nav>
        </header>
    );
}