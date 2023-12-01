import React, { useState, useEffect } from "react";

import Calendar from 'react-calendar';
import "../components/Calendar.css"
import "./SmartCalendar.css"
import EventWindow from "../components/EventWindow";
import toIsoString from "../utils/locale-isostring";

// Truncate string when showing the event list
function truncateString(text) {
  const MAX_SIZE = 100;
  let truncated = text.substr(0, MAX_SIZE);

  if (text.length > MAX_SIZE) {
    truncated = truncated + '...';
  }

  return truncated
}

const SmartCalendar = () => {
  const [day, setDay] = useState(new Date());
  const [eventos, setEventos] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(-1);

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
      "descricao": "lorem ipsum diaosjdasiojdao",
      "data": toIsoString(day),
      "id": 0
    },
    {
      "titulo": "teste1",
      "descricao": "descricao123",
      "data": toIsoString(day),
      "id": 1
    },
    {
      "titulo": "teste1",
      "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad in eius, facilis labore fugiat officiis dolore assumenda enim a ullam dignissimos repellat itaque placeat, beatae qui eaque quas, cum rem!",
      "data": toIsoString(day),
      "id": 2
    }
  ])
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
          <button className="small-button remover-button" onClick={e => setSelectedEvent(-1)}>REMOVER</button>
          <button className="small-button confirmar-button" onClick={e => setSelectedEvent(-1)}>CONFIRMAR</button>
        </div>
      </div>
    )
  }

  function displayEventList() {
    return <>
      <h3 style={{textAlign: "center"}}>Eventos</h3>
      <hr />
      <ul>
        {eventos ? eventos.map((evento, i) => {
          return <li className="evento" key={evento.id} onClick={() => {handleClickEvent(evento)}}>

           <div className="evento-header">
            <h3>{evento.titulo}</h3>  
            <b style={{marginLeft: "auto"}}>Agendado para: {getFormattedDate(evento.data)}</b>
           </div>

           <hr/>
           <p style={{marginTop: 10, marginBottom: 10}}>{truncateString(evento.descricao)}</p>
           <hr/>

           <div className="evento-buttons">
            <button style={{marginLeft: "auto"}}className="editar-button small-button">EDITAR</button>
            <button className="remover-button small-button">REMOVER</button>
           </div>
          </li>
        }) : <p>Sem eventos</p>}
    </ul>
    </>
  }

  return (
    <div className="main-page-container">
      { selectedEvent >= 0 ? null :
      <div className="calendar-window-container">
        <Calendar onClickDay={onClickDay} value={day} />
        <EventWindow date={day.toISOString().substr(0, 10)}/>
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