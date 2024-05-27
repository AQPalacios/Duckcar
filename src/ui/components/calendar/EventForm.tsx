"use client";
import { FC, useEffect, useState } from "react";
import { Button, Title } from "../common";
import { CloseIcon } from "../icons";
import { useEventFormStore } from "@/store/calendar/EventFormStore";
import dayjs from "dayjs";
import { getUserConnected } from "@/utils/userConnected/userConnected";
import { createEvento, getEventosByAutoescuelaId } from "@/lib/db/evento";
import { useEventStore } from "@/store/calendar/EventStore";

interface Usuario {
    usuario_id?: string;
    sede_autoescuela_id: string;
    rol_id: string;
    usuario_dni: string;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono?: string;
    usuario_contrasenya: string;
}

export const EventForm: FC = () => {
    const { setEvents } = useEventStore((state) => state);
    const userConnected: Usuario = getUserConnected();
    const { closeEventForm } = useEventFormStore((state) => state);
    const [inputValues, setInputValues] = useState({
        title: "",
        start: dayjs().format("YYYY-MM-DDTHH:mm"),
        end: "",
        description: "",
    });

    const {
        title,
        start,
        end,
        description,
    } = inputValues;

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const newInputValues = {
            ...inputValues,
            [name]: value,
        };

        if (name === "start" && value > end) {
            newInputValues["end"] = value;
        }

        setInputValues(newInputValues);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        createEvento({
            usuario_id: userConnected.usuario_id,
            sede_autoescuela_id: userConnected.sede_autoescuela_id,
            title,
            start,
            end,
            description,
        });

        const eventosByAutoescuelaId = getEventosByAutoescuelaId(userConnected.sede_autoescuela_id);
        setEvents(eventosByAutoescuelaId);
        closeEventForm();
        console.log(userConnected);
        console.log(inputValues);
        // Aquí puedes manejar el envío del formulario
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-[100vw] lg:w-[600px] p-2">
                <div className="flex flex-col gap-5 bg-primary-light p-5 rounded h-full">
                    <Title>
                        <div className="flex justify-between">
                            Crear Evento
                            <Button onClick={closeEventForm}>
                                <CloseIcon />
                            </Button>
                        </div>
                    </Title>

                    <div className="flex flex-col gap-1">
                        <span className="text-lg">
                            Título <span className="text-denied">*</span>
                        </span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                            name="title"
                            onChange={handleChange}
                            value={title}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>
                            Fecha de Inicio{" "}
                            <span className="text-denied">*</span>
                        </span>
                        <input
                            type="datetime-local"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                            min={dayjs().format("YYYY-MM-DDTHH:mm")}
                            name="start"
                            onChange={handleChange}
                            value={start}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>
                            Fecha de Fin <span className="text-denied">*</span>
                        </span>
                        <input
                            type="datetime-local"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                            min={start}
                            name="end"
                            onChange={handleChange}
                            value={end}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>Descripción</span>
                        <textarea
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color min-h-[150px]"
                            maxLength={200}
                            name="description"
                            onChange={handleChange}
                            value={description}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="p-2 bg-primary hover:bg-input-color rounded"
                    >
                        Crear evento
                    </button>
                </div>
            </div>
        </form>
    );
};
