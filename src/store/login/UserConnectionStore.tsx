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
    setUserDisconnected: () => void;
}

export const useUserConnectionStore = create<State>((set) => {
    return {
        userConnected: null,

        setUserConnected: (user: Usuario) => {
            set({ userConnected: user });
            console.log("Usuario guardado en el estado global");
        },

        setUserDisconnected: () => {
            set({userConnected: null});
            console.log("Usuario eliminado del estado global");
        }
    };
});
