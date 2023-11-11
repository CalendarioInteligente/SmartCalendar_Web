import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <Link to="/">Página Inicial</Link>
                </ul>
                <ul id="login-btn">
                    <Link to="/login">Login</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
