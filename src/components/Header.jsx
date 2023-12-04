import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Header.css'
import user from '../imagens/user.png';
import { useEffect } from 'react';
import axios from '../api/axios';
import authenticate from '../api/authenticate';
import { useState } from 'react';
import notification_img from '../imagens/notification.png';
import truncateString from '../utils/truncate-string';

const URL_LOGOUT = '/api/logout'

const Header = (props) => {
    const navigate = useNavigate()
    const [showNotifications, setShowNotifications] = useState(false);

    const handleNotification = () => {
        setShowNotifications(!showNotifications);
    };

    async function handleLogout(e) {
        e.preventDefault();

        try {
            const response = await axios.post(URL_LOGOUT);
        } catch {}

        props.setAutenticado(false);
        localStorage.removeItem("session")
        //navigate('/');
    }

    const notifications = [
        {
            "id": 1,
            "titulo": "teste",
            "descricao": truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque vero itaque debitis, reprehenderit molestias, odit, nihil nobis sit ut omnis. Molestiae alias laudantium optio doloribus ex dicta temporibus deserunt?"),
            "data": new Date().toISOString(),
            "seen": false,
        },
        {
            "id": 2,
            "titulo": "teste",
            "descricao": truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque vero itaque debitis, reprehenderit molestias, odit, nihil nobis sit ut omnis. Molestiae alias laudantium optio doloribus ex dicta temporibus deserunt?"),
            "data": new Date().toISOString(),
            "seen": false,
        },
        {
            "id": 3,
            "titulo": "teste",
            "descricao": truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque vero itaque debitis, reprehenderit molestias, odit, nihil nobis sit ut omnis. Molestiae alias laudantium optio doloribus ex dicta temporibus deserunt?"),
            "data": new Date().toISOString(),
            "seen": false,
        },
        {
            "id": 4,
            "titulo": "teste",
            "descricao": truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque vero itaque debitis, reprehenderit molestias, odit, nihil nobis sit ut omnis. Molestiae alias laudantium optio doloribus ex dicta temporibus deserunt?"),
            "data": new Date().toISOString(),
            "seen": false,
        },
        {
            "id": 5,
            "titulo": "teste",
            "descricao": truncateString("Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem cumque vero itaque debitis, reprehenderit molestias, odit, nihil nobis sit ut omnis. Molestiae alias laudantium optio doloribus ex dicta temporibus deserunt?"),
            "data": new Date().toISOString(),
            "seen": false,
        },
    ]
    
    function displayNotifications() {
        return (
        <div className= "notification-content">
            {notifications.map((e) => {
                return <li className='notification' key={e.id}>
                    <p><b>{e.titulo}</b></p>
                    <p>{e.descricao}</p>
                    <hr/>
                </li>
            })}
        </div>
        )
    }

    return (
        <header>
            <nav>
                <ul>
                    <Link to="/" className="calendario">Smart Calendar</Link>
                </ul>
                <ul id= "notification-bnt">
                    <img src= {notification_img} alt= "notification_icon" onClick= {handleNotification} id= "notification-icon" />
                    {showNotifications && displayNotifications()}
                </ul>
                <ul>
                    { props.autenticado ? <Link to="/"><a onClick={e => handleLogout(e)} href="" style={{paddingRight: "10px"}}>Logout</a></Link> : <Link to="/login"><img src={user} alt="user_image" id="user-icon"/></Link> }
                </ul>
            </nav>
        </header>
    )
}

export default Header;