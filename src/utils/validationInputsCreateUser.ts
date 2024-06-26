import { isUsuarioExist } from "../lib/db";
import { regexDNI, regexEmail, regexTelefono } from "./regex/regex";

interface Usuario {
    usuario_id: string;
    sede_autoescuela_id: string;
    rol_id: string;
    usuario_dni: string;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono?: string;
    usuario_contrasenya: string;
}

export const isEmailExist = (email: string) => {
    if (!regexEmail.test(email)) return;
    const usuarioDB = isUsuarioExist();
    if (!usuarioDB) return;
    const usuarios: Usuario[] = JSON.parse(usuarioDB);
    const usuario = usuarios.find((usuario) => usuario.usuario_email === email);
    return usuario;
};

export const isRolValid = (rolName: string) => {
    if (
        rolName === "admin" ||
        rolName === "profesor" ||
        rolName === "estudiante"
    ) {
        return true;
    }
    return false;
};

export const isTelefonoValid = (telefono: string): boolean => {
    if (regexTelefono.test(telefono)) {
        return true;
    }
    return false;
};

export const validateDni = (dni: string) => {
    if (!regexDNI.test(dni)) return;
    const usuariosDB = isUsuarioExist();
    if (!usuariosDB) return;
    const usuarios: Usuario[] = JSON.parse(usuariosDB);
    const usuario = usuarios.find((u) => u.usuario_dni === dni);
    return usuario;
};
