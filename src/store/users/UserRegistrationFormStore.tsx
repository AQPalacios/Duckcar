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
    isUserRegistrationForm: boolean;
    // Mostrar mensaje de usuario creado correctamente(No tiene que estar aqui, crear un nuevo storage)
    statusUserRegistrationPopup: "none" | "pending"  | "accept";
    // Contenido cuando presiones el boton de editar usuario se rellene
    contentUserRegistrationForm: Usuario | null,
    setContentUserRegistrationForm: (contentUser: Usuario) => void; 
    openUserRegistrationForm: () => void;
    closeUserRegistrationForm: () => void;
    setStatusUserRegistrationForm: (newStatus: "none" | "pending"  | "accept") => void;
}

export const useUserRegistrationFormStore = create<State>((set) => ({
    isUserRegistrationForm: false,
    statusUserRegistrationPopup: "none",
    contentUserRegistrationForm: null,
    setContentUserRegistrationForm: (contentUser: Usuario) => set({contentUserRegistrationForm: contentUser}),
    openUserRegistrationForm: () => set({ isUserRegistrationForm: true }),
    closeUserRegistrationForm: () => set({ isUserRegistrationForm: false }),
    setStatusUserRegistrationForm: (newStatus) => set({statusUserRegistrationPopup: newStatus}) 
}));
