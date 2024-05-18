"use client";
import React, { FC, useEffect, useState } from "react";
import { Button, Title } from "../common";
import {
    getUsuariobyEmailAndPassword,
    initAutoescuelas,
    initRol,
    initSedeAutoescuelas,
    initUsuario,
} from "@/lib/db";
import { useUserConnected } from "@/store/login/Login";

interface InputValues {
    email: string;
    password: string;
}

export const Login: FC = () => {
    const [inputValues, setInputValues] = useState<InputValues>({
        email: "",
        password: "",
    });

    useEffect(() => {
        initAutoescuelas();
        initRol();
        initSedeAutoescuelas();
        initUsuario();
    }, []);

    const doLogin = useUserConnected((state) => state.setUserConnected);

    const { email, password } = inputValues;

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const newInputValues = {
            ...inputValues,
            [name]: value,
        };
        setInputValues(newInputValues);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        if (!regex.test(email)) return;
        if (password.length <= 4) return;
        console.log("Hacer Login");
        console.log(inputValues);
        
        const user = getUsuariobyEmailAndPassword(inputValues);
        if(user !== undefined){
            doLogin(user);
        }
        
    };

    return (
        <div className="flex flex-col justify-around gap-2 w-96 h-[400px] p-10 rounded bg-primary">
            <Title className="text-3xl text-center font-bold text-secondary">
                Login
            </Title>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <span className="text-base text-secondary">Email</span>
                    <input
                        type="email"
                        className="p-2 text-sm rounded border border-primary bg-primary-light outline-none hover:bg-input-color text-secondary focus:bg-input-color"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-base text-secondary">Contraseña</span>
                    <input
                        type="password"
                        className="p-2 text-sm rounded border border-primary bg-primary-light outline-none hover:bg-input-color text-secondary focus:bg-input-color"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <Button type="submit" className="text-secondary">
                    Entrar
                </Button>
            </form>
        </div>
    );
};
