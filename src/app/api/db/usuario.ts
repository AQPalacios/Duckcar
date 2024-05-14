import { getRol } from "./rol";
import { getSedeAutoescuelas } from "./sede_autoescuela";

const createUniqueIdUsuario = (numero: Number = 0): string => {
    const randomId = Math.random().toString(36).slice(2, 11);
    // Obtener una marca de tiempo única
    const timestamp = Date.now().toString(36);
    // Combinar el número aleatorio y la marca de tiempo para crear un ID único
    const uniqueId = "usuario_" + randomId + timestamp + numero;
    // Devolver el ID único generad
    return uniqueId;
};


const isUsuarioExist = (): string | null => {
    const isExist = localStorage.getItem("usuario");
    if (isExist) return isExist;
    return null;
};

export const initUsuario = (): void => {
    const sedeAutoescuelas = getSedeAutoescuelas();
    const roles = getRol();
    if (isUsuarioExist()) return;

    localStorage.setItem(
        "usuario",
        JSON.stringify([
            {
                usuario_id: "superadmin",
                sede_autoescuela_id: "superadmin",
                rol_id: "superadmin",
                usuario_dni: "superadmin",
                usuario_nombre: "superadmin",
                usuario_email: "superadmin",
                usuario_telefono: "superadmin",
                usuario_contrasenya: "superadmin",
            },
            {
                usuario_id: "admin",
                sede_autoescuela_id: "superadmin",
                rol_id: "superadmin",
                usuario_dni: "superadmin",
                usuario_nombre: "superadmin",
                usuario_email: "superadmin",
                usuario_telefono: "superadmin",
                usuario_contrasenya: "superadmin",
            },
            {
                rol_id: createUniqueIdUsuario(7),
                rol_nombre: "profesor",
                rol_permisos: {},
            },
            {
                rol_id: createUniqueIdUsuario(8),
                rol_nombre: "estudiante",
                rol_permisos: {},
            },
        ])
    );
};