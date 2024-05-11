import { create } from "zustand";

interface State {
    isUserRegistrationForm: boolean;
    openUserRegistrationForm: () => void;
    closeUserRegistrationForm: () => void;
}

export const useUserRegistrationFormStore = create<State>((set) => ({
    isUserRegistrationForm: false,
    
    openUserRegistrationForm: () => set({ isUserRegistrationForm: true }),
    closeUserRegistrationForm: () => set({ isUserRegistrationForm: false }),
}));
