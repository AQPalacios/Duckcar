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
    users: Usuario[] | null;
    setUsers: (usuarios: Usuario[] | null) => void
}

export const useUserStore = create<State>((set) => ({
    users: null,
    setUsers: (usuarios) => set({users: usuarios})
}));
