"use client";
// src/pages/CalendarPage.tsx
import React, { useState } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/es";
import { Button, Title } from "@/ui/components/common";
import { DeleteIcon, PlusIcon } from "@/ui/components/icons";
import { EventForm } from "@/ui/components/calendar/EventForm";
import { useEventFormStore } from "@/store/calendar/EventFormStore";
import Popup from "@/ui/components/common/Popup";
import { useEventStore } from "@/store/calendar/EventStore";
import { deleteEventoById, getEventosByAutoescuelaId } from "@/lib/db/evento";

interface Evento {
    evento_id?: string;
    usuario_id?: string;
    sede_autoescuela_id?: string;
    title: string;
    start: string; // Cambiado a string para compatibilidad con input
    end: string; // Cambiado a string para compatibilidad con input
    description?: string;
}
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
    const {
        events: eventos,
        selectEvent: selectEvento,
        setEvents,
        setSelectEvent,
    } = useEventStore((state) => state);

    const { isEventForm, openEventForm } = useEventFormStore((state) => state);
    const [buttonDelete, setButtonDelete] = useState<boolean>(false);

    const selectEvent = (e: any) => {
        setSelectEvent(e);
        setButtonDelete(true);
    };

    const deleteEvent = () => {
        const {evento_id} = selectEvento;
        deleteEventoById(evento_id);
        const userSession = sessionStorage.getItem("userConnected");
        if(!userSession) return;
        const userConnected = JSON.parse(userSession);
        const eventosBySedeAutoescuelaId = getEventosByAutoescuelaId(userConnected.sede_autoescuela_id);
        setEvents(eventosBySedeAutoescuelaId);
        setButtonDelete(false);
    };

    return (
        <>
            {isEventForm && (
                <Popup className="z-20">
                    <EventForm />
                </Popup>
            )}
            <Title>Calendario</Title>
            <div className="min-h-[810px] relative">
                <Calendar
                    className="bg-primary mt-4"
                    localizer={localizer}
                    onSelectEvent={(e) => selectEvent(e)}
                    views={["month", "week", "day"]}
                    events={eventos}
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
                <Button
                    onClick={openEventForm}
                    className="absolute flex justify-center items-center bg-third -bottom-5 z-10 -right-5 rounded-full w-[80px] h-[80px] hover:bg-third-light"
                >
                    <PlusIcon width="40" height="40" />
                </Button>
                {buttonDelete && (
                    <Button
                        onClick={deleteEvent}
                        className="absolute flex justify-center items-center bg-[#ec6666] -bottom-5 z-10 -left-5 rounded-full w-[80px] h-[80px] hover:bg-denied-dark"
                    >
                        <DeleteIcon width="40" height="40" />
                    </Button>
                )}
            </div>
        </>
    );
};

export default CalendarPage;
