import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Header.css'
import user from '../imagens/user.png';
import { useEffect } from 'react';
import axios from '../api/axios';
import authenticate from '../api/authenticate';
import { useState } from 'react';

const URL_LOGOUT = '/api/logout'

const Header = () => {
    const [autenticado, setAutenticado] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            setAutenticado(await authenticate());
        };
        fetchData();    
    }, [])

    async function handleLogout() {
        try {
            const response = await axios.post(URL_LOGOUT);
        } catch {}

        setAutenticado(false);
        localStorage.removeItem("session")
        navigate('/');
    }

    return (
        <header>
            <nav>
                <ul>
                    <Link to="/" className="calendario">Smart Calendar</Link>
                </ul>
                <ul id="login-btn">
                    { autenticado ? <a onClick={handleLogout} href="">Logout</a> : <Link to="/login"><img src={user} alt="user_image" id="user-image"/></Link> }
                    
                </ul>
            </nav>
        </header>
    )
}

export default Header;