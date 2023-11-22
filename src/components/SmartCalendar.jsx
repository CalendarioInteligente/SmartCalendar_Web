import React, { useState } from "react";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./SmartCalendar.css"
import Button from "./Button";

const EventWindow = (props) => {

  function handleEvent(e) {
    e.preventDefault();
    props.onClose()
  }

  return (
      <form className="login-container" style={{display: "block", width: "100%", minHeight: 200, borderRadius: 0, boxShadow: "none", backgroundImage: "none", backgroundColor: "white"}}>
        <input type="date" name="" id="" value={new Date.parse(props.date)}/>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo" id="titulo" />
        <label htmlFor="descricao">Descrição</label>
        <input type="text" name="descricao" id="descricao" />
        <label htmlFor="horario">Horario</label>
        <input type="time" name="horario" id="horario" />
        <br/><br/>
        <Button style={{marginTop: 29}} onClick={handleEvent} className="bntLogin">Adicionar</Button>
      </form>
  )
}

const SmartCalendar = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [day, setDay] = useState(new Date());

  function onClickDay(value) {
    console.log(value)
    setDay(value);
    setShowWindow(true);

    console.log(day);
  }

function onClose() {
    setShowWindow(false);
}

  return (
    <div className="main-page-container">
      <Calendar onClickDay={onClickDay} value={day} />
      {showWindow ? <EventWindow date={day} onClose={onClose}/> : null}
    </div>
  )
}

  
export default SmartCalendar;