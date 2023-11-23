import React, { useState } from "react";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./SmartCalendar.css"
import Button from "./Button";
import axios from "../api/axios";

const POST_EVENT_URL = '/api/agendamentos/'

const EventWindow = (props) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [horario, setHorario] = useState(new Date().getTime());

  async function handleEvent(e) {
    e.preventDefault();

    // Concatena a data e o horario e envia para o restful
    const parsedDate = new Date(Date.parse(props.date + ' ' + horario)).toISOString();

    const params = {
      titulo: titulo,
      descricao: descricao,
      data: parsedDate,
      tipo: 0
    }

    try {
      const response = await axios.post(POST_EVENT_URL, JSON.stringify(params));

      console.log(JSON.stringify(response?.data))
    } catch (err) {
      console.error(err);
      if (!err?.response) {
        // No server response
      } else if (err.response?.status === 400) {
        // Missing email or password
      } else if (err.response?.status === 401) {
        // Unauthorized
      } else {
        // Login failed
      }
    }

    props.closeWindow()
  }

  return (
      <form className="login-container" style={{display: "block", width: "100%", minHeight: 200, borderRadius: 0, boxShadow: "none", backgroundImage: "none", backgroundColor: "white"}}>
        <label htmlFor="data">Data</label>
        <input type="date" name="data" id="data" value={props.date} required readOnly/>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo" id="titulo" required onChange={(e) => setTitulo(e.target.value)} />
        <label htmlFor="descricao">Descrição</label>
        <input type="text" name="descricao" id="descricao" required onChange={(e) => setDescricao(e.target.value)} />
        <label htmlFor="horario">Horario</label>
        <input type="time" name="horario" id="horario" required onChange={(e) => setHorario(e.target.value)} />
        <br/><br/>
        <Button style={{marginTop: 29}} onClick={handleEvent} className="bntLogin">Adicionar</Button>
      </form>
  )
}

const SmartCalendar = () => {
  const [showWindow, setShowWindow] = useState(false);
  const [day, setDay] = useState(new Date());

  function onClickDay(value) {
    setDay(value);
    setShowWindow(true);
  }

function closeWindow() {
    setShowWindow(false);
}

  return (
    <div className="main-page-container">
      <Calendar onClickDay={onClickDay} value={day} />
      {showWindow ? <EventWindow date={day.toISOString().substr(0, 10)} closeWindow={closeWindow}/> : null}
    </div>
  )
}

  
export default SmartCalendar;