import { getAutoescuelas } from "./autoescuela";

interface SedeAutoescuela {
    sede_autoescuela_id?: string;
    autoescuela_id: string;
    sede_autoescuela_nombre: string;
    sede_autoescuela_direccion: string;
    sede_autoescuela_codigo_postal: string;
    sede_autoescuela_localidad: string;
    sede_autoescuela_provincia: string;
    sede_autoescuela_comunidad_autonoma: string;
    sede_autoescuela_telefono?: string;
    sede_autoescuela_email?: string;
}

const createUniqueIdSedeAutoescuela = (): string => {
    const randomId = Math.random().toString(36).slice(2, 11);
    // Obtener una marca de tiempo única
    const timestamp = Date.now();
    // Combinar el número aleatorio y la marca de tiempo para crear un ID único
    const uniqueId = "sede_autoescuela_" + randomId + "_" + timestamp;
    // Devolver el ID único generado
    return uniqueId;
};

const isSedeAutoescuelasExist = (): string | null => {
    const isExist = localStorage.getItem("sede_autoescuela");
    if (isExist) return isExist;
    return null;
};

export const initSedeAutoescuelas = (): void => {
    const autoescuelas = getAutoescuelas();
    if (isSedeAutoescuelasExist()) return;
    localStorage.setItem(
        "sede_autoescuelas",
        JSON.stringify([
            {
                sede_autoescuela_id: createUniqueIdSedeAutoescuela(),
                autoescuela_id: autoescuelas[0].autoescuela_id,
                sede_autoescuela_nombre: "AUTOESCUELA LOS PEORES",
                sede_autoescuela_direccion: "CALLE DOCTOR MORAGÁS, 3, - 1ºD",
                sede_autoescuela_codigo_postal: "15006",
                sede_autoescuela_localidad: "A CORUÑA",
                sede_autoescuela_provincia: "A CORUÑA",
                sede_autoescuela_comunidad_autonoma: "GALICIA",
                sede_autoescuela_telefono: "981294119",
                sede_autoescuela_email: "autoescuelamarte@autoescuelamarte.com",
            },
            {
                sede_autoescuela_id: createUniqueIdSedeAutoescuela(),
                autoescuela_id: autoescuelas[1].autoescuela_id,
                sede_autoescuela_nombre: "AUTOESCUELA LOS MEJORES",
                sede_autoescuela_direccion: "AV. VILACHÁN, 13 BAJO",
                sede_autoescuela_codigo_postal: "15830",
                sede_autoescuela_localidad: "NEGREIRA",
                sede_autoescuela_provincia: "A CORUÑA",
                sede_autoescuela_comunidad_autonoma: "GALICIA",
                sede_autoescuela_telefono: "981885426",
                sede_autoescuela_email: "autoescolaantoniosl@gmail.com",
            },
        ])
    );
};

export const createSedeAutoescuela = ({
    autoescuela_id,
    sede_autoescuela_nombre,
    sede_autoescuela_direccion,
    sede_autoescuela_codigo_postal,
    sede_autoescuela_localidad,
    sede_autoescuela_provincia,
    sede_autoescuela_comunidad_autonoma,
    sede_autoescuela_telefono,
    sede_autoescuela_email,
}: SedeAutoescuela) => {
    const storedSedeAutoescuela = isSedeAutoescuelasExist();
    if (storedSedeAutoescuela) {
        const sedeAutoescuelas: SedeAutoescuela[] = JSON.parse(
            storedSedeAutoescuela
        );
        const newSedeAutoescuelas = [
            ...sedeAutoescuelas,
            {
                sede_autoescuela_id: createUniqueIdSedeAutoescuela(),
                autoescuela_id,
                sede_autoescuela_nombre,
                sede_autoescuela_direccion,
                sede_autoescuela_codigo_postal,
                sede_autoescuela_localidad,
                sede_autoescuela_provincia,
                sede_autoescuela_comunidad_autonoma,
                sede_autoescuela_telefono,
                sede_autoescuela_email,
            },
        ];
        localStorage.setItem(
            "sede_autoescuelas",
            JSON.stringify(newSedeAutoescuelas)
        );
        return;
    }

    console.log(
        "La sede autoescuela no se puedo crear porque no existe la base de datos de autoescuela"
    );
};
