import React, { useState } from "react";
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
      data: parsedDate
    }

    try {
      const response = await axios.post(POST_EVENT_URL, JSON.stringify(params));

      props.closeWindow()
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
  }

  return (
      <form className="adicionar-evento-container">
        <label htmlFor="data">Data</label>
        <input type="date" name="data" id="data" className="calendar-input" value={props.date} required readOnly/>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo" id="titulo" required className="calendar-input" onChange={(e) => setTitulo(e.target.value)} autoComplete="off"/>
        <label htmlFor="descricao">Descrição</label>
        <input type="text" name="descricao" id="descricao" className="calendar-input" required onChange={(e) => setDescricao(e.target.value)} autoComplete="off"/>
        <label htmlFor="horario">Horario</label>
        <input type="time" name="horario" id="horario" className="calendar-input" required onChange={(e) => setHorario(e.target.value)} />
        <br/><br/>
        <Button style={{marginTop: 29}} onClick={handleEvent} className="bntLogin">Adicionar</Button>
      </form>
  )
}

export default EventWindow;