import { create } from "zustand";

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

interface State {
    userConnected: Usuario | null;
    setUserConnected: (user: Usuario) => void;
}

export const useUserConnected = create<State>((set) => {
    return {
        userConnected: null,

        setUserConnected: (user: Usuario) => {
            set({ userConnected: user });
            sessionStorage.setItem("userConnected", JSON.stringify(user));
            console.log("Estado global preparado");
        },


    };
});
