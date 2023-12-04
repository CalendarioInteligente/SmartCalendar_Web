import React, { useState, useEffect } from "react";

import Calendar from 'react-calendar';
import "../components/Calendar.css"
import "./SmartCalendar.css"
import EventWindow from "../components/EventWindow";
import toIsoString from "../utils/locale-isostring";
import axios from "../api/axios";
import authenticate from "../api/authenticate";
import truncateString from "../utils/truncate-string";

const SmartCalendar = () => {
  const [day, setDay] = useState(new Date());
  const [eventos, setEventos] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(-1);

  async function getAgendamentos() {
    const auth_response = await authenticate();

    if (!auth_response) {
      return;
    }

    const API_GET_AGENDAMENTOS = '/api/user/' + auth_response.data.userId + '/agendamentos';
    let data;

    try {
      let response = await axios.get(API_GET_AGENDAMENTOS);
      data = JSON.parse(response.data.data)
    } catch {

    }

    setEventos(data)
  }

  useEffect(() => {
    getAgendamentos();
  }, [])

  function getFormattedDate(iso_date) {
    const datetime = new Date(iso_date)
    return datetime.toLocaleDateString() + " as " + datetime.toLocaleTimeString();
  }

  function handleClickEvent(e) {
    setSelectedEvent(e.id)
    setTitulo(e.titulo);
    setDescricao(e.descricao);

    const datetime = toIsoString(new Date(e.data));
    
    setData(datetime.substr(0, 10))
    setHorario(datetime.substr(11, 5))
  }

  async function updateEvent(event_id) {
    const API_PUT_URL = '/api/agendamentos/' + event_id

    const parsedDate = toIsoString(new Date(Date.parse(data + ' ' + horario)));

    const params = {
      titulo: titulo,
      descricao: descricao,
      data: parsedDate
    }

    try {
      const response = await axios.put(API_PUT_URL, JSON.stringify(params));
      setSelectedEvent(-1);
      getAgendamentos();
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

  async function deleteEvent(event_id, element) {

    if (element) {
      element.stopPropagation()
    }

    const API_DELETE_URL = '/api/agendamentos/' + event_id

    try {
      const response = await axios.delete(API_DELETE_URL);
    } catch(e) {
      console.log(e.request)
    }

    setSelectedEvent(-1);
    getAgendamentos();
  }

  function onClickDay(value) {
    setDay(value);
  }

  const [titulo, setTitulo] = useState("")
  const [descricao, setDescricao] = useState("")
  const [data, setData] = useState()
  const [horario, setHorario] = useState()

  function displayEvent() {

    return (
      <div className="display-evento">
        Titulo:
        <input autoComplete="off" type="text" name="titulo" id="titulo" onChange={(e) => setTitulo(e.target.value)} value={titulo}/>
        <hr/>
        <br/>
        Descrição:
        <textarea autoComplete="off" name="descricao" id="descricao" cols="30" rows="10" onChange={(e) => setDescricao(e.target.value)} value={descricao}></textarea>

        <br/>
        <br/>
        <div style={{display: "flex", }}>
          <div>
            Data:<br/>
            <input type="date" name="data" id="data" value={data} onChange={e => setData(e.target.value)}/>
          </div>
          <div style={{marginLeft: "auto"}}>
            Horário:<br/>
            <input type="time" name="horario" id="horario" value={horario} onChange={e => setHorario(e.target.value)}/>
          </div>
        </div>

        <div id="display-evento-buttons">
          <button className="small-button" onClick={e => setSelectedEvent(-1)}>VOLTAR</button>
          <button className="small-button remover-button" onClick={() => deleteEvent(selectedEvent)}>REMOVER</button>
          <button className="small-button confirmar-button" onClick={() => updateEvent(selectedEvent)}>CONFIRMAR</button>
        </div>
      </div>
    )
  }

  function displayEventList() {
    return <>
      <h3 style={{textAlign: "center"}}>Eventos</h3>
      <hr />
      <ul>
        {eventos.length > 0 ? eventos.map((evento, i) => {
          return <li className="evento" key={evento.id} onClick={() => {handleClickEvent(evento)}}>

           <div className="evento-header">
            <h3>{evento.titulo}</h3>  
            <b style={{marginLeft: "auto"}}>Agendado para: {getFormattedDate(evento.data)}</b>
           </div>

           <hr/>
           <p style={{marginTop: 10, marginBottom: 10}}>{truncateString(evento.descricao)}</p>
           <hr/>

           <div className="evento-buttons">
            <button style={{marginLeft: "auto"}}className="editar-button small-button" onClick={((e) => e.stopPropagation())}>EDITAR</button>
            <button className="remover-button small-button" onClick={(e) => deleteEvent(evento.id, e)}>REMOVER</button>
           </div>
          </li>
        }) : <p style={{color: "black", textAlign: "center", fontSize: "30px", paddingTop: "20px"}}>Sem eventos</p>}
    </ul>
    </>
  }

  return (
    <div className="main-page-container">
      { selectedEvent >= 0 ? null :
      <div className="calendar-window-container">
        <Calendar onClickDay={onClickDay} value={day} />
        <EventWindow onClick={getAgendamentos} date={day.toISOString().substr(0, 10)}/>
      </div>
      }
      <div className="eventos-container">
        {selectedEvent < 0 ? displayEventList() : displayEvent()}
      </div>
      {/*showWindow ? <EventWindow date={day.toISOString().substr(0, 10)} closeWindow={closeWindow}/> : null*/}
    </div>
  )
}

  
export default SmartCalendar;