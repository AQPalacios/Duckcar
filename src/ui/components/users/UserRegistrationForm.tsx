import { FC } from "react";
import { Button, Title } from "../common";
import { CloseIcon } from "../icons";
import { useUserRegistrationFormStore } from "@/store";

export const UserRegistrationForm: FC = () => {
    const closeUserRegistrationForm = useUserRegistrationFormStore((state) => state.closeUserRegistrationForm)
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hola");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-[100vw] lg:w-[600px] p-2">
                <div className="flex flex-col gap-5 bg-primary-light p-5 rounded h-full">
                    <Title>
                        <div className="flex justify-between">
                            Datos Personales
                            <Button onClick={closeUserRegistrationForm}>
                                <CloseIcon />
                            </Button>
                        </div>
                    </Title>
                    <div className="flex flex-col gap-1">
                        <span className="text-lg">
                            DNI <span className="text-denied">*</span>
                        </span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>
                            Nombre <span className="text-denied">*</span>
                        </span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>
                            Apellidos <span className="text-denied">*</span>
                        </span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>
                            Teléfono <span className="text-denied">*</span>
                        </span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>
                            Email <span className="text-denied">*</span>
                        </span>
                        <input
                            type="email"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                        />
                    </div>

                    <div>
                        <div>
                            Rol <span className="text-denied">*</span>
                        </div>

                        <div className="flex justify-between w-full">
                            <div className="space-x-1">
                                <input
                                    type="radio"
                                    id="estudiante"
                                    name="rol"
                                    value="estudiante"
                                />
                                <label htmlFor="estudiante">Estudiante</label>
                            </div>

                            <div className="space-x-1">
                                <input
                                    type="radio"
                                    id="profesor"
                                    name="rol"
                                    value="profesor"
                                />
                                <label htmlFor="profesor">Profesor</label>
                            </div>
                            <div className="space-x-1">
                                <input
                                    type="radio"
                                    id="admin"
                                    name="rol"
                                    value="admin"
                                />
                                <label htmlFor="admin">Administrador</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="p-2 bg-primary hover:bg-input-color rounded">
                        Registrar
                    </button>
                </div>
            </div>
        </form>
    );
};
