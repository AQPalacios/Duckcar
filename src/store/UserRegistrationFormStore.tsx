import {create} from "zustand";

interface UserRegistrationFromState{
    isOpen: boolean
}

export const useUserRegistrationFormStore =  create<UserRegistrationFromState> (() => ({
    isOpen : false,
    
}))