"use client";
// src/pages/CalendarPage.tsx
import React from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Button, Title } from "@/ui/components/common";
import { PlusIcon } from "@/ui/components/icons";

// Configure dayjs to use Spanish locale
dayjs.locale("es");

// Create the localizer using dayjs
const localizer = dayjsLocalizer(dayjs);

// Example events array
const events = [
    {
        title: "Evento de Prueba",
        start: dayjs("2024-05-25T12:00:00").toDate(),
        end: dayjs("2024-05-26T12:00:00").toDate(),
    },
    {
        title: "Evento de Prueba 2",
        start: dayjs("2024-05-25T12:00:00").toDate(),
        end: dayjs("2024-05-25T16:00:00").toDate(),
    },
];

const CalendarPage: React.FC = () => {
    return (
        <>
            <Title>Calendario</Title>
            <div className="min-h-[810px] relative">
                <Calendar
                    className="bg-primary mt-4"
                    localizer={localizer}
                    views={["month", "week", "day"]}
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
                <Button className="absolute flex justify-center items-center bg-third -bottom-5 z-10 -right-5 rounded-full w-[80px] h-[80px] hover:bg-third-light">
                    <PlusIcon width="40" height="40" />
                </Button>
            </div>
        </>
    );
};

export default CalendarPage;
