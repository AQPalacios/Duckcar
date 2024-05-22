import { create } from "zustand";
interface Usuario {
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
    // Mostrar mensaje de usuario creado correctamente(No tiene que estar aqui, crear un nuevo storage)
    // statusUserEditPopup: "none" | "pending"  | "accept";
    // Contenido cuando presiones el boton de editar usuario se rellene
    // contentUserEditForm: Usuario | null,
    // setContentUserEditForm: (contentUser: Usuario) => void; 
    openUserEditForm: () => void;
    closeUserEditForm: () => void;
    // setStatusUserEditForm: (newStatus: "none" | "pending"  | "accept") => void;
}

export const useUserEditFormStore = create<State>((set) => ({
    isUserEditForm: false,
    // statusUserEditPopup: "none",
    // contentUserEditForm: null,
    // setContentUserEditForm: (contentUser: Usuario) => set({contentUserEditForm: contentUser}),
    openUserEditForm: () => set({ isUserEditForm: true }),
    closeUserEditForm: () => set({ isUserEditForm: false }),
    // setStatusUserEditForm: (newStatus) => set({statusUserEditPopup: newStatus}) 
}));
