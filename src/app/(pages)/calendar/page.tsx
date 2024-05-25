"use client";
// src/pages/CalendarPage.tsx
import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Title } from "@/ui/components/common";

// Configure dayjs to use Spanish locale
dayjs.locale("es");

// Create the localizer using dayjs
const localizer = dayjsLocalizer(dayjs);

// Example events array
const events = [
    {
        title: "Evento de Prueba",
        start: new Date(),
        end: new Date(),
    },
];

const CalendarPage: React.FC = () => {
    return (
        <>
            <Title>Calendario</Title>
            <div className="min-h-[810px]">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 800, width: "100%" }}
                    messages={{
                        next: "Siguiente",
                        previous: "Anterior",
                        today: "Hoy",
                        month: "Mes",
                        week: "Semana",
                        day: "Día",
                        agenda: "Agenda",
                        date: "Fecha",
                        time: "Hora",
                        event: "Evento",
                        noEventsInRange: "No hay eventos en este rango.",
                    }}
                />
            </div>
        </>
    );
};

export default CalendarPage;
