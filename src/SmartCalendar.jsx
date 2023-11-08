import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

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
