import { create } from "zustand";
interface Usuario {
    usuario_id: string;
    sede_autoescuela_id: string;
    rol_id: "admin" | "profesor" | "estudiante" | "";
    usuario_dni: string;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono?: string;
    usuario_contrasenya: string;
}

interface State {
    // Para abrir el formulario
    isUserEditForm: boolean;
    // Contenido del formulario
    contentUserEditForm: Usuario | null;
    statusUserEditPopup: "none" | "pending"  | "accept";

    // setear el formulario de edicion
    setContentUserEditForm: (user: Usuario) => void;
    // Contenido cuando presiones el boton de editar usuario se rellene
    // contentUserEditForm: Usuario | null,
    // setContentUserEditForm: (contentUser: Usuario) => void; 
    openUserEditForm: () => void;
    closeUserEditForm: () => void;
    setStatusUserEditFormPopup: (newStatus: "none" | "pending"  | "accept") => void;
}

export const useUserEditFormStore = create<State>((set) => ({
    isUserEditForm: false,
    contentUserEditForm: null,
    statusUserEditPopup: "none",
    setContentUserEditForm: (user: Usuario) => set({contentUserEditForm: user}),
    openUserEditForm: () => set({ isUserEditForm: true }),
    closeUserEditForm: () => set({ isUserEditForm: false }),
    setStatusUserEditFormPopup: (newStatus) => set({statusUserEditPopup: newStatus}) 

}));
