"use client";
import React, { FC, useState } from "react";

interface InputValues {
    email: string;
    password: string;
}

export const Login: FC = () => {
    const [inputValues, setInputValues] = useState<InputValues>({
        email: "",
        password: "",
    });

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
        // TODO severAction que haga el login
    };

    return (
        <div className="flex flex-col justify-around gap-2 w-96 h-[400px] p-10 rounded border border-primary">
            <h1 className="text-2xl text-center font-bold">Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                    <span className="text-base">Email</span>
                    <input
                        type="email"
                        className="p-2 text-sm rounded border border-primary"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-base">Contraseña</span>
                    <input
                        type="password"
                        className="p-2 text-sm rounded border border-primary"
                        placeholder="Contraseña"
                        name="password"
                        value={password}
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="btn"

                >
                    Entrar
                </button>
            </form>
        </div>
    );
};
