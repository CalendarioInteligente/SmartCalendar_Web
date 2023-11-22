import { Link } from 'react-router-dom';
import './Header.css'
import user from '../imagens/user.png';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/" className="calendario">Smart Calendar</Link>
                </ul>
                <ul id="login-btn">
                    <Link to="/login"><img src={user} alt="user_image" id="user-image"/></Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
