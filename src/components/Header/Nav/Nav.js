import { useState } from 'react';
import './Nav.css';
import { isMobile } from 'react-device-detect';
import { Link } from "react-router-dom";
import hamburger_icon from '../../../images/hamburger_menu_icon.svg'

const Nav = () => {

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMobileMenu = menu => {
        setMobileMenu(true)
    }
    return (
        <nav>
            <ul className='navigation'>
                <li><Link to="/">
                    Home
                </Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/booking">
                    Booking
                </Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <section id="hamburger-icon" onClick={() => toggleMobileMenu(this)}>
                {mobileMenu ? <ul className="mobile-menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul> : <img src={hamburger_icon} />}
            </section>
        </nav >

    );
}

export default Nav;