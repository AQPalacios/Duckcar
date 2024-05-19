"use client";
import { useUserConnectionStore } from "@/store";
import { Sidebar } from "@/ui/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();
    const { setUserConnected } = useUserConnectionStore((state) => state);

    useEffect(() => {
        const verifyConnected = () => {
            const userSessionStorage = sessionStorage.getItem("userConnected")
            if(userSessionStorage){
                const user = JSON.parse(userSessionStorage);
                setUserConnected(user);
            }else{
                router.push("/");
            }
        };
        verifyConnected();
    }, [router, setUserConnected]);

    return (
        <>
            <main className="flex h-dvh text-secondary">
                <Sidebar />
                <div className="w-full bg-primary-light p-4 md:p-12">
                    <div className="bg-primary rounded p-5">{children}</div>
                </div>
            </main>
        </>
    );
}
