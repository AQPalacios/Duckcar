import { create } from "zustand";

interface State{
    events: any,
    selectEvent: any,
    setEvents: (eventos: any) => void,
    setSelectEvent: (evento: any) => void,
}

export const useEventStore = create<State>((set) => ({
    events: [],
    selectEvent: null,
    setEvents: (eventos: any) => set({events: eventos}),
    setSelectEvent: (evento: any) => set({selectEvent: evento})
}))