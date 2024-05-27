import { create } from "zustand";

interface State {
    isEventForm: boolean,
    // statusEventForm: boolean,
    openEventForm: () => void,
    closeEventForm: () => void,
}

export const useEventFormStore = create<State>((set) => ({
    isEventForm: false,
    openEventForm: () => set({isEventForm: true}),
    closeEventForm: () => set({isEventForm: false})
}))
