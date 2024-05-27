"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
    initAutoescuelas,
    initRol,
    initSedeAutoescuelas,
    initUsuario,
} from "@/lib/db";
import { initEvento } from "@/lib/db/evento";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const router = useRouter();

    useEffect(() => {
        initAutoescuelas();
        initRol();
        initSedeAutoescuelas();
        initUsuario();
        initEvento();
        console.log("Base de datos iniciada");
    }, []);

    useEffect(() => {
        const verifyConnected = () => {
            const userSessionStorage = sessionStorage.getItem("userConnected");
            if (userSessionStorage) {
                router.push("/dashboard");
            }
        };

        verifyConnected();
    }, [router]);

    return (
        <html lang="es">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
