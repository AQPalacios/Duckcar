import { create } from "zustand";

interface State{
    events: any,
    setEvents: (eventos: any) => void,
}

export const useEventStore = create<State>((set) => ({
    events: [],
    setEvents: (eventos: any) => set({events: eventos})
}))