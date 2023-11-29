import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Header.css'
import user from '../imagens/user.png';
import { useEffect } from 'react';
import axios from '../api/axios';
import authenticate from '../api/authenticate';
import { useState } from 'react';
import notification_img from '../imagens/notification.png';

const URL_LOGOUT = '/api/logout'

const Header = () => {
    const [autenticado, setAutenticado] = useState(false);
    const navigate = useNavigate()
    const [showNotifications, setShowNotifications] = useState(false);

    const handleNotification = () => {
        setShowNotifications(!showNotifications);
    };

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

    const notifications = [
        {
            "id": 1,
            "titulo": "teste",
            "data": new Date().toISOString(),
            "seen": false,
        },
        {
            "id": 2,
            "titulo": "teste2",
            "data": new Date().toISOString(),
            "seen": false,
        }
    ]

    return (
        <header>
            <nav>
                <ul>
                    <Link to="/" className="calendario">Smart Calendar</Link>
                </ul>
                <ul id= "notification-bnt">
                    <img src= {notification_img} alt= "notification_icon" onClick= {handleNotification} id= "notification-icon" />

                    {showNotifications && (
                        <div className= "notification-content">
                            <p>Notificação 1</p>
                            <p>Notificação 2</p>
                        </div>
                    )}

                    { autenticado ? <a onClick={handleLogout} href="">Logout</a> : <Link to="/login"><img src={user} alt="user_image" id="user-icon"/></Link> }
                </ul>
            </nav>
        </header>
    )
}

export default Header;