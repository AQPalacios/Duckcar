// import {sql, db} from "@vercel/postgres";
// import { NextResponse } from "next/server";

// export async function GET(request: Request){
//     const response = await sql`SELECT * FROM autoescuela`;
//     return NextResponse.json({response});
// }

interface Autoescuela {
    autoescuela_id: string;
    autoescuela_nombre: string;
}

const createUniqueIdAutoescuela = (): string => {
    const randomId = Math.random().toString(36).slice(2, 11);
    // Obtener una marca de tiempo única
    const timestamp = Date.now();
    // Combinar el número aleatorio y la marca de tiempo para crear un ID único
    const uniqueId ="autoescuela_" + randomId + "_" + timestamp;
    // Devolver el ID único generado
    return uniqueId;
};

const isAutoescuelasExist = (): string | null => {
    const isExist = localStorage.getItem("autoescuelas");
    if (isExist) return isExist;
    return null;
};

export const initAutoescuelas = (): void => {
    if (isAutoescuelasExist()) return;
    localStorage.setItem(
        "autoescuelas",
        JSON.stringify([
            {
                autoescuela_id: createUniqueIdAutoescuela(),
                autoescuela_nombre: "AUTOESCUELA LOS PEORES S.L",
            },
            {
                autoescuela_id: createUniqueIdAutoescuela(),
                autoescuela_nombre: "AUTOESCUELA LOS MEJORES S.L",
            },
        ])
    );
};

export const createAutoescuela = (autoescuelaNombre: string) => {
    const storedAutoescuela = isAutoescuelasExist();
    if (storedAutoescuela) {
        const autoescuelas: Autoescuela[] = JSON.parse(storedAutoescuela);
        const newAutoescuela = [
            ...autoescuelas,
            {
                autoescuela_id: createUniqueIdAutoescuela(),
                autoescuela_nombre: autoescuelaNombre,
            },
        ];
        localStorage.setItem("autoescuelas", JSON.stringify(newAutoescuela));
        return;
    }

    console.log(
        "La autoescuela no se puedo crear porque no existe la base de datos de autoescuela"
    );
};

export const getAutoescuelas = () => {
    const storedAutoescuela = isAutoescuelasExist();
    if(storedAutoescuela){
        return JSON.parse(storedAutoescuela);
    }
    console.log("Error al obtener las autoescuelas");
}