import { FC, useState } from "react";
import { Button, Title } from "../common";
import { CloseIcon } from "../icons";
import { useUserConnectionStore, useUserRegistrationFormStore } from "@/store";
import { createUsuario, getUsuariosBySedeAutoescuelaId } from "@/lib/db";
import { isEmailExist, isRolValid } from "@/utils/validationInputsCreateUser";
import { regexDNI, regexNombre, regexTelefono } from "@/utils/regex/regex";
import { useUserStore } from "@/store/users/UsersStore";
interface Usuario {
    sede_autoescuela_id: string;
    rol_id: "admin" | "profesor" | "estudiante" | "";
    usuario_dni: string;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono?: string;
    usuario_contrasenya: string;
}

export const UserRegistrationForm: FC = () => {
    const closeUserRegistrationForm = useUserRegistrationFormStore(
        (state) => state.closeUserRegistrationForm
    );

    const { userConnected } = useUserConnectionStore((state) => state);
    const { setUsers } = useUserStore((state) => state);
    const [inputValues, setInputValues] = useState<Usuario>({
        sede_autoescuela_id: userConnected?.sede_autoescuela_id || "",
        rol_id: "",
        usuario_dni: "",
        usuario_nombre: "",
        usuario_email: "",
        usuario_telefono: "",
        usuario_contrasenya: "",
    });

    const {
        rol_id,
        usuario_dni,
        usuario_nombre,
        usuario_email,
        usuario_telefono,
        usuario_contrasenya,
    } = inputValues;

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
        // Verificar DNI
        if (!regexDNI.test(usuario_dni)) return;
        // Verificar Nombre
        if (!regexNombre.test(usuario_nombre)) return;
        // Verificar Contraseña
        if (usuario_contrasenya.length <= 4) return;
        // Verificar Email
        if (isEmailExist(usuario_email) !== undefined) return;
        // Verificar Telefono
        if (usuario_telefono) {
            if (!regexTelefono.test(usuario_telefono)) return;
        }
        // Verficiar rol
        if (!isRolValid(rol_id)) return;
        const userSessionStorage = sessionStorage.getItem("userConnected");
        if(userSessionStorage){
            const user = JSON.parse(userSessionStorage);
            createUsuario(inputValues);
            const usuarioBySedeAutoescuelaId = getUsuariosBySedeAutoescuelaId(user.sede_autoescuela_id);
            setUsers(usuarioBySedeAutoescuelaId);
            // TODO Hacer popup para verificar un usuario ha sido registrado
            // TODO limpiar los datos del formulario para crear un usuario
        }
    };

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
                            name="usuario_dni"
                            onChange={handleChange}
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
                            name="usuario_nombre"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span>
                            Teléfono <span className="text-denied">*</span>
                        </span>
                        <input
                            type="text"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            name="usuario_telefono"
                            onChange={handleChange}
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
                            name="usuario_email"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <span>
                            Contraseña <span className="text-denied">*</span>
                        </span>
                        <input
                            type="password"
                            className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                            required
                            name="usuario_contrasenya"
                            onChange={handleChange}
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
                                    name="rol_id"
                                    value="estudiante"
                                    onChange={handleChange}
                                />
                                <label htmlFor="estudiante">Estudiante</label>
                            </div>

                            <div className="space-x-1">
                                <input
                                    type="radio"
                                    id="profesor"
                                    name="rol_id"
                                    value="profesor"
                                    onChange={handleChange}
                                />
                                <label htmlFor="profesor">Profesor</label>
                            </div>
                            <div className="space-x-1">
                                <input
                                    type="radio"
                                    id="admin"
                                    name="rol_id"
                                    value="admin"
                                    onChange={handleChange}
                                />
                                <label htmlFor="admin">Administrador</label>
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="p-2 bg-primary hover:bg-input-color rounded"
                    >
                        Registrar
                    </button>
                </div>
            </div>
        </form>
    );
};
