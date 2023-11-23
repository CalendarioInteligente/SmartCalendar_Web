import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authenticate from "../api/authenticate.js";
import SmartCalendar from "../components/SmartCalendar.jsx"

const CalendarPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const validation = await authenticate();

            if (!validation) {
                navigate('/login')
            }
        };
        fetchData();    
    }, [])
    

    return (
        <SmartCalendar/>
    )
}

export default CalendarPage;