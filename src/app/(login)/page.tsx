import { initAutoescuelas, initRol, initSedeAutoescuelas, initUsuario } from "@/lib/db";
import { Login } from "@/ui/components/login/Login";
import { useEffect } from "react";

export default async function LoginPage() {
    // useEffect(() => {
    //     initAutoescuelas();
    //     initRol();
    //     initSedeAutoescuelas();
    //     initUsuario();
    // }, []);

    return (
        <div className="flex justify-center mt-52">
            <Login />
        </div>
    );
}
