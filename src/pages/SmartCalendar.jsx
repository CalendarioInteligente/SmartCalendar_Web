import React, { useState, useEffect } from "react";

import Calendar from 'react-calendar';
import "../components/Calendar.css"
import "./SmartCalendar.css"
import EventWindow from "../components/EventWindow";

const SmartCalendar = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [day, setDay] = useState(new Date());
  const [eventos, setEventos] = useState([]);

  // useEffect(() => {
  //     async function fetchData() {
  //         const validation = await authenticate();

  //         if (!validation) {
  //             navigate('/login')
  //         }
  //     };
  //     fetchData();    
  // }, [])

  useEffect(() => {
    setEventos([
    {
      "titulo": "teste1",
      "descricao": "descricao123",
      "data": day.toISOString(),
      "id": 1
    },
    {
      "titulo": "teste1",
      "descricao": "descricao123",
      "data": day.toISOString(),
      "id": 2
    },
    {
      "titulo": "teste1",
      "descricao": "descricao123",
      "data": day.toISOString(),
      "id": 3
    }
  ])
  }, [])

  function onClickDay(value) {
    setDay(value);
    setShowWindow(true);
  }

  function closeWindow() {
      setShowWindow(false);
  }

  return (
    <div className="main-page-container">
      <div className="calendar-window-container">
        <Calendar onClickDay={onClickDay} value={day} />
        <EventWindow date={day.toISOString().substr(0, 10)} closeWindow={closeWindow}/>
      </div>
      <div className="eventos-container">
        <h3 style={{textAlign: "center"}}>Eventos</h3>
        <hr />
        <ul>
        {eventos ? eventos.map((evento) => {
          return <li key={evento.id}>
           <p style={{}}>{evento.titulo}</p>  <p>Data: {evento.data}</p>
           <p>{evento.descricao}</p>
          </li>
        }) : <p>Sem eventos</p>}
        </ul>
      </div>
      {/*showWindow ? <EventWindow date={day.toISOString().substr(0, 10)} closeWindow={closeWindow}/> : null*/}
    </div>
  )
}

  
export default SmartCalendar;