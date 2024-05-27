"use client";
import { getUsuariosBySedeAutoescuelaId } from "@/lib/db";
import { getEventosByAutoescuelaId } from "@/lib/db/evento";
import { useUserConnectionStore } from "@/store";
import { useEventStore } from "@/store/calendar/EventStore";
import { useUserStore } from "@/store/users/UsersStore";
import { Sidebar } from "@/ui/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const { setUserConnected } = useUserConnectionStore((state) => state);
    const { setUsers } = useUserStore((state) => state);
    const { setEvents } = useEventStore((state) => state);
    useEffect(() => {
        const verifyConnected = () => {
            const userSessionStorage = sessionStorage.getItem("userConnected");
            if (userSessionStorage) {
                const user = JSON.parse(userSessionStorage);
                const usersBySedeAutoescuela = getUsuariosBySedeAutoescuelaId(
                    user.sede_autoescuela_id
                );
                const eventosByAutoescuelaId = getEventosByAutoescuelaId(
                    user.sede_autoescuela_id
                );
                setUserConnected(user);
                setUsers(usersBySedeAutoescuela);
                if(eventosByAutoescuelaId !== undefined){
                    setEvents(eventosByAutoescuelaId)
                }

            } else {
                router.push("/");
            }
        };
        verifyConnected();
    }, [router, setUserConnected, setUsers, setEvents]);

    return (
        <>
            <main className="flex h-dvh text-secondary">
                <Sidebar />
                <div className="w-full bg-primary-light p-4 md:p-12 relative">
                    <div className="bg-primary rounded p-5">{children}</div>
                </div>
            </main>
        </>
    );
}
