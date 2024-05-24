import { isUsuarioExist } from "../lib/db"
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

export const isEmailExist = (email: string, id: string | undefined) => {
    if (!regexEmail.test(email)) return;
    const usuarioDB = isUsuarioExist();
    if (!usuarioDB) return;
    const usuarios: Usuario[] = JSON.parse(usuarioDB);
    const usuario = usuarios.filter((usuario) => usuario.usuario_email === email && usuario.usuario_id !== id);
    if(usuario.length > 0) return usuario;
    return undefined;
};

export const isRolValid = (rolName: string) => {
    if(rolName === "admin" || rolName === "profesor" || rolName === "estudiante"){
        return true;
    }
    return false;
}

export const isTelefonoValid = (telefono: string): boolean => {
    if(regexTelefono.test(telefono)){
        return true;
    }
    return false;
}

export const validateDni = (dni: string, id: string | undefined) => {
    if(!regexDNI.test(dni)) return;
    // Tomas los usuarios de la base de datos
    const usuariosDB = isUsuarioExist();
    if(!usuariosDB) return;
    const usuarios: Usuario[] = JSON.parse(usuariosDB);
    const usuario = usuarios.filter((u) => u.usuario_dni === dni && u.usuario_id !== id);
    if(usuario.length > 0) return usuario;
    return undefined;

}