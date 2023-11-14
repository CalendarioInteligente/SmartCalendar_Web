import React, { useState } from "react";
import "./SmartCalendar.css"

const SmartCalendar = () => {
    const date = new Date();
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getYear());

    const generateCalendario = (year, month) => {
        const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta"]

        const date = new Date(year, month, 0);

        // Pega os dias do mês
        const numberOfDays = date.getDate();

        // Em que dia da semana o primeiro dia começa
        const firstDayOfWeekDigit = date.getDay();

        // Em que dia da semana o ultimo dia termina
        const lastDayOfWeekDigit = new Date(year, month, numberOfDays).getDay();

        // Gera uma lista 
        const dias = []
        
        dias.push([])
        for (let i = firstDayOfWeekDigit; i <= 7; i++) {
            dias[0].push(i);
        }

        return (
            <table>
                <tr>
                {diasSemana.map(v => (
                    <th key={v}>{v}</th>
                ))}
                </tr>
                {}
            </table>
        )
    }
  
    return (
      <table className="smart-calendar">
        {generateCalendario(year, month)}
      </table>
    )
  }

  
export default SmartCalendar;

/**
 * import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

/*
const SmartCalendar = () => {
  const events = [
    {
      title: "Evento 1",
      start: new Date(),
      end: new Date(),
    },
    {
      title: "Evento 2",
      start: moment().add(1, "days").toDate(),
      end: moment().add(1, "days").toDate(),
    },
  ];

  return (
    <div>
      <h1>Calendário Inteligente</h1>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default SmartCalendar;

*/
