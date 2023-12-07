import React, { useEffect, useState } from "react";
import Button from "./Button";
import axios from "../api/axios";
import toIsoString from "../utils/locale-isostring";

const POST_EVENT_URL = '/api/agendamentos/'

const EventWindow = (props) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [horario, setHorario] = useState();
  const [errMsg, setErrMsg] = useState("");

  useState(() => {
    setHorario(toIsoString(new Date()).substr(11, 5));
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [titulo, descricao, horario])

  async function handleEvent(e) {
    e.preventDefault();

    // Concatena a data e o horario e envia para o restful
    const parsedDate = toIsoString(new Date(Date.parse(props.date + ' ' + horario)));

    const params = {
      titulo: titulo,
      descricao: descricao,
      data: parsedDate
    }

    try {
      const response = await axios.post(POST_EVENT_URL, JSON.stringify(params));

      setTitulo('')
      setDescricao('')
      setErrMsg('')
      props?.onClick()
    } catch (err) {
      console.error(err);
      setErrMsg('Falha ao enviar evento, verifique se a data é valida.')
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
        <input type="text" name="titulo" id="titulo" required className="calendar-input" value={titulo} onChange={(e) => setTitulo(e.target.value)} autoComplete="off"/>
        <label htmlFor="descricao">Descrição</label>
        <input type="text" name="descricao" id="descricao" className="calendar-input" value={descricao} required onChange={(e) => setDescricao(e.target.value)} autoComplete="off"/>
        <label htmlFor="horario">Horario</label>
        <input type="time" name="horario" id="horario" className="calendar-input" value={horario} required defaultValue={horario} onChange={(e) => setHorario(e.target.value)} />
        <br/><br/>
        {errMsg ? <p style={{color: "red", fontSize:"18px", textAlign: "center"}} >{errMsg}</p> : null}
        <Button style={{marginTop: 29}} onClick={handleEvent} className="bntLogin">Adicionar</Button>
      </form>
  )
}

export default EventWindow;