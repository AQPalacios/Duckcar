import { FC, useState } from "react";
import { Button, Title } from "../common";
import { CloseIcon } from "../icons";
import { useUserConnectionStore, useUserRegistrationFormStore } from "@/store";
import { isEmailExist, isRolValid } from "@/utils/validationInputsCreateUser";
import { regexDNI, regexNombre, regexTelefono } from "@/utils/regex/regex";
import { useUserStore } from "@/store/users/UsersStore";
import clsx from "clsx";
import { useUserEditFormStore } from "@/store/users/UserEditFormStore";

interface Usuario {
    sede_autoescuela_id: string;
    rol_id: "admin" | "profesor" | "estudiante" | "";
    usuario_dni: string;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono?: string;
    usuario_contrasenya: string;
}

export const UserEditForm: FC = () => {
    const {
        isUserEditForm,
        openUserEditForm,
        closeUserEditForm
    } = useUserEditFormStore((state) => state);

    const { userConnected } = useUserConnectionStore((state) => state);
    const { setUsers } = useUserStore((state) => state);
    const initialState: Usuario = {
        sede_autoescuela_id: userConnected?.sede_autoescuela_id || "",
        rol_id: "",
        usuario_dni: "",
        usuario_nombre: "",
        usuario_email: "",
        usuario_telefono: "",
        usuario_contrasenya: "",
    };
    
    const [inputValues, setInputValues] = useState<Usuario>(initialState);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        const newInputValues = {
            ...inputValues,
            [name]: value,
        };
        setInputValues(newInputValues);
    };

    const {
        rol_id,
        usuario_dni,
        usuario_nombre,
        usuario_email,
        usuario_telefono,
        usuario_contrasenya,
    } = inputValues;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Verificar DNI
        if (!regexDNI.test(usuario_dni)) return;
        console.log("Dni valido");
        // Verificar Nombre
        if (!regexNombre.test(usuario_nombre)) return;
        console.log("Nombre valido");
        // Verificar Contraseña
        if (usuario_contrasenya.length <= 4) return;
        console.log("contraseña valida");
        // Verificar Email
        if (isEmailExist(usuario_email) !== undefined) return;
        console.log("email valido");
        // Verificar Telefono
        if (usuario_telefono) {
            if (!regexTelefono.test(usuario_telefono)) return;
        }
        console.log("Telefono valido");
        // Verficiar rol
        if (!isRolValid(rol_id)) return;
        console.log("rol valido");
        const userSessionStorage = sessionStorage.getItem("userConnected");
        if (userSessionStorage) {
            // const user = JSON.parse(userSessionStorage);
            // Crea un usuario en la base de datos
            // createUsuario(inputValues);
            // const usuariosBySedeAutoescuelaId = getUsuariosBySedeAutoescuelaId(
            //     user.sede_autoescuela_id
            // );
            // Actualiza el estado global de los usuarios
            // setUsers(usuariosBySedeAutoescuelaId);

            // setInputValues({
            //     sede_autoescuela_id: userConnected?.sede_autoescuela_id || "",
            //     rol_id: "",
            //     usuario_dni: "",
            //     usuario_nombre: "",
            //     usuario_email: "",
            //     usuario_telefono: "",
            //     usuario_contrasenya: "",
            // });
            console.log("Limpiando formulario");
            // Mostrar mensaje de creado correctamente
            // setStatusUserRegistrationForm("accept");

            // setTimeout(() => {
            //     setStatusUserRegistrationForm("none");
            // }, 2000);
        }
    };

    return (
        <>
            {/* <div
                className={clsx("fade-in-out-down text-center", {
                    "flex justify-center items-center": statusUserRegistrationPopup === "accept",
                    "hidden": statusUserRegistrationPopup === "none",
                })}
            >
                Usuario creado correctamente
            </div> */}
            <form onSubmit={handleSubmit}>
                <div className="w-[100vw] lg:w-[600px] p-2">
                    <div className="flex flex-col gap-5 bg-primary-light p-5 rounded h-full">
                        <Title>
                            <div className="flex justify-between">
                                Datos Personales
                                <Button onClick={closeUserEditForm}>
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
                                value={inputValues.usuario_dni}
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
                                value={inputValues.usuario_nombre}
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
                                value={inputValues.usuario_telefono}
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
                                value={inputValues.usuario_email}
                            />
                        </div>

                        <div className="flex flex-col gap-1">
                            <span>
                                Contraseña{" "}
                                <span className="text-denied">*</span>
                            </span>
                            <input
                                type="password"
                                className="bg-primary text-white outline-none p-2 rounded focus:bg-input-color hover:bg-input-color"
                                required
                                name="usuario_contrasenya"
                                onChange={handleChange}
                                value={inputValues.usuario_contrasenya}
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
                                        checked={inputValues.rol_id === "estudiante"}
                                    />
                                    <label htmlFor="estudiante">
                                        Estudiante
                                    </label>
                                </div>

                                <div className="space-x-1">
                                    <input
                                        type="radio"
                                        id="profesor"
                                        name="rol_id"
                                        value="profesor"
                                        onChange={handleChange}
                                        checked={inputValues.rol_id === "profesor"}
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
                                        checked={inputValues.rol_id === "admin"}
                                    />
                                    <label htmlFor="admin">Administrador</label>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="p-2 bg-primary hover:bg-input-color rounded"
                        >
                            Actualizar
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};
