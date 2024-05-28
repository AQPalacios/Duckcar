// interface Evento {
//     evento_id?: string,
//     usuario_id?: string,
//     sede_autoescuela_id?: string,
//     title: string;
//     start: string; // Cambiado a string para compatibilidad con input
//     end: string; // Cambiado a string para compatibilidad con input
//     description?: string;
// }

import dayjs from "dayjs";

export const createUniqueIdEvento = (numero: Number = 0): string => {
    const randomId = Math.random().toString(36).slice(2, 11);
    // Obtener una marca de tiempo única
    const timestamp = Date.now().toString(36);
    // Combinar el número aleatorio y la marca de tiempo para crear un ID único
    const uniqueId = "evento_" + randomId + timestamp + numero;
    // Devolver el ID único generad
    return uniqueId;
};

export const isEventoDatabaseExist = (): string | null => {
    const isExist = localStorage.getItem("evento");
    if (isExist) return isExist;
    return null;
};

export const initEvento = (): void => {
    const storedEvento = isEventoDatabaseExist();
    if(storedEvento) return;
    localStorage.setItem("evento", JSON.stringify([]));
}

export const createEvento = ({
    usuario_id,
    sede_autoescuela_id,
    title,
    start,
    end,
    description
}: any) => {
    const storedEvento = isEventoDatabaseExist() ;
    if(!storedEvento) return;
    const eventos = JSON.parse(storedEvento) ;
    const newEvento = [
        ...eventos,
        {
            evento_id: createUniqueIdEvento(),
            usuario_id,
            sede_autoescuela_id,
            title,
            start,
            end,
            description
        }
    ]
    localStorage.setItem("evento", JSON.stringify(newEvento));
    console.log("Evento guardado en la base de datos");
}

export const deleteEventoById = (eventoId: string) => {
    const storedEvento =  isEventoDatabaseExist()
    if(!storedEvento) return;
    const eventos = JSON.parse(storedEvento);
    const newEventos = eventos.filter((e: any) => e.evento_id !== eventoId)
    console.log(newEventos);
    localStorage.setItem("evento", JSON.stringify(newEventos));
}

export const getEventosByAutoescuelaId = (autoescuelaId: string) => {
    const storedEvento =  isEventoDatabaseExist()
    if(!storedEvento) return;
    const eventos = JSON.parse(storedEvento);
    const eventosByAutoescuelaId = eventos.filter((evento : any) => evento.sede_autoescuela_id === autoescuelaId);
    const formatearEventos = eventosByAutoescuelaId.map((e: any) => {
        return {
            evento_id: e.evento_id,
            usuario_id: e.usuario_id,
            sede_autoescuela_id: e.sede_autoescuela_id,
            title: e.title,
            start: dayjs(e.start).toDate(),
            end: dayjs(e.end).toDate(),
            description: e.description
        }
    })
    console.log(formatearEventos);
    return formatearEventos;
}

