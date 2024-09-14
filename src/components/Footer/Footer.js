import './Footer.css'
import logo from '../../images/logo.svg'
function Footer() {
    return (
        <footer className='footer'>
            <section className="logo">
                <img src={logo} alt='logo'></img>
            </section>
            <section className="navigation">
                <h3>Doormat Navigation</h3>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Home</li>
                </ul>
            </section>
            <section className="contact">
                <h3>Contact</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
            <section className="social_media">
                <h3>Social Media Links</h3>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </section>
        </footer>
    );
}

export default Footer;