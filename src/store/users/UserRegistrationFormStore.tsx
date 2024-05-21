import { create } from "zustand";

interface State {
    isUserRegistrationForm: boolean;
    statusUserRegistrationPopup: "none" | "pending"  | "accept";
    openUserRegistrationForm: () => void;
    closeUserRegistrationForm: () => void;
    setStatusUserRegistrationForm: (newStatus: "none" | "pending"  | "accept") => void;
}

export const useUserRegistrationFormStore = create<State>((set) => ({
    isUserRegistrationForm: false,
    statusUserRegistrationPopup: "none",
    openUserRegistrationForm: () => set({ isUserRegistrationForm: true }),
    closeUserRegistrationForm: () => set({ isUserRegistrationForm: false }),
    setStatusUserRegistrationForm: (newStatus) => set({statusUserRegistrationPopup: newStatus}) 
}));
