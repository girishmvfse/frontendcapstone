import './Header.css';
import Nav from './Nav';
import logo from '../../images/logo.svg'

function Header() {
    return (
        <header className='header'>
            <img className="logo" src={logo} alt='logo'></img>
            <Nav></Nav>
        </header>
    );
}

export default Header;