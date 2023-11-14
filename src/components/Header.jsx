import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/" className="calendario">Smart Calendar</Link>
                </ul>
                <ul id="login-btn">
                    <Link to="/login"><img src="./user.png" alt="user_image" id="user-image"/></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
