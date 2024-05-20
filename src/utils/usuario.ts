import { isUsuarioExist } from "../lib/db"
import { regexEmail } from "./regex/regex";

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

export const isPasswordExist = (password: string) => {
    const usuarioDB = isUsuarioExist();
    if(usuarioDB){
        const usuarios: Usuario[] = JSON.parse(usuarioDB);
        const usuario = usuarios.find((usuario) => usuario.usuario_contrasenya === password) ;
        return usuario;
    }
}

export const isEmailExist = (email: string) => {
    if(regexEmail.test(email)){
        const usuarioDB = isUsuarioExist();
        if(usuarioDB){
            const usuarios: Usuario[] = JSON.parse(usuarioDB);
            const usuario = usuarios.find((usuario) => usuario.usuario_email === email);
            return usuario;
        }
    }
}

export const isRolValid = (rolName: string) => {
    if(rolName === "admin" || rolName === "profesor" || rolName === "estudiante"){
        return true;
    }
    return false;
}