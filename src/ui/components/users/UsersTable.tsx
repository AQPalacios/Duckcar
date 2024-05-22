import Image from "next/image";
import { FC, useState } from "react";
import { Button } from "../common";
import { DeleteIcon, EditIcon } from "../icons";
import { useUserStore } from "@/store/users/UsersStore";
import { deleteUsuarioById, getUsuariobyId, getUsuariosBySedeAutoescuelaId } from "@/lib/db";
import { getUserConnected } from "@/utils/userConnected/userConnected";
import Popup from "../common/Popup";
import { useUserRegistrationFormStore } from "@/store";
import { useUserEditFormStore } from "@/store/users/UserEditFormStore";

export const UsersTable: FC = () => {
    const { users, setUsers } = useUserStore((state) => state);

    const [openModalVerifyDeleteUser, setOpenModalVerifyDeleteUser] =
        useState<boolean>(false);
        
    const { 
        isUserRegistrationForm, 
        openUserRegistrationForm 
    } = useUserRegistrationFormStore((state) => state);

    const { 
        openUserEditForm,
        isUserEditForm,
        closeUserEditForm 
    } = useUserEditFormStore((state) => state);

    const [userId, setUserId] = useState<string>("");

    const roleOrder = ["admin", "profesor", "estudiante"];

    const handleEditInfoUser = (userId: string) => {
        openUserEditForm();
        const user = getUsuariobyId(userId);
        console.log(user);
        console.log(userId);
    };

    const handleOpenModalVerifyDeleteUser = (userId: string) => {
        setUserId(userId);
        setOpenModalVerifyDeleteUser(true);
    };

    const handleDeleteUser = (userId: string) => {
        /**
         * Elimina el usuario de la base de datos
         * Carga la lista de los usuario de la sede
         * Cierra el modal
         */
        deleteUsuarioById(userId);
        const userConnected = getUserConnected();
        const usersBySedeAutoescuela = getUsuariosBySedeAutoescuelaId(
            userConnected.sede_autoescuela_id
        );
        setUsers(usersBySedeAutoescuela);
        setOpenModalVerifyDeleteUser(false);
    };

    return (
        <>
            {openModalVerifyDeleteUser && (
                <Popup className="z-10">
                    <div className="w-[350px] h-[150px] bg-primary-light rounded-lg p-4 flex flex-col justify-between">
                        <div className="text-center">
                            Eliminar el usuario permanentemente
                        </div>
                        <div className="flex justify-between mx-5">
                            <button
                                className="bg-primary p-2 w-[100px] rounded hover:bg-input-color"
                                onClick={() => handleDeleteUser(userId)}
                            >
                                Si
                            </button>
                            <button
                                className="border border-primary p-2 w-[100px] rounded hover:bg-input-color"
                                onClick={() =>
                                    setOpenModalVerifyDeleteUser(false)
                                }
                            >
                                No
                            </button>
                        </div>
                    </div>
                </Popup>
            )}

            <div className="scroll relative grid bg-primary-light rounded overflow-auto ">
                <div className="sticky top-0 grid grid-cols-12 space-x-4 bg-primary-light h-[50px]">
                    <div className="col-span-2 text-lg flex items-center justify-center">
                        DNI
                    </div>
                    <div className="col-span-2 text-lg flex items-center justify-center">
                        Teléfono
                    </div>
                    <div className="col-span-3 text-lg flex items-center justify-center">
                        Usuario
                    </div>
                    <div className="col-span-2 text-lg flex items-center justify-center">
                        Rol
                    </div>
                    <div className="col-span-3 text-lg flex items-center justify-center"></div>
                </div>
                {users
                    ?.sort((a, b) => {
                        return (
                            roleOrder.indexOf(a.rol_id) -
                            roleOrder.indexOf(b.rol_id)
                        );
                    })
                    .map((user) => {
                        return (
                            <div
                                key={user.usuario_id}
                                className="rounded text-sm"
                            >
                                <div className=" hover:bg-input-color grid grid-cols-12 space-x-4 p-1.5">
                                    <div className="col-span-2 flex items-center justify-center">
                                        {user.usuario_dni}
                                    </div>
                                    <div className="col-span-2 flex items-center justify-center">
                                        {user.usuario_telefono}
                                    </div>
                                    <div className="col-span-3 flex items-center justify-center w-full">
                                        <div className="flex gap-2 text-start rounded w-full">
                                            <Image
                                                src={
                                                    "/logo-sin-fondo-sin-titulo.webp"
                                                }
                                                alt="Imagen de usuario"
                                                width={50}
                                                height={50}
                                            />
                                            <div className="flex flex-col">
                                                <span>
                                                    {user.usuario_nombre}
                                                </span>
                                                <span className="text-sm">
                                                    {user.usuario_email}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-2 flex items-center justify-center">
                                        {user.rol_id}
                                    </div>
                                    <div className=" col-span-3 flex items-center justify-end gap-2">
                                        <Button
                                            className="hover:bg-primary"
                                            onClick={() =>
                                                handleOpenModalVerifyDeleteUser(
                                                    user.usuario_id
                                                )
                                            }
                                        >
                                            <DeleteIcon />
                                        </Button>
                                        <Button
                                            className="hover:bg-primary"
                                            onClick={() =>
                                                handleEditInfoUser(
                                                    user.usuario_id
                                                )
                                            }
                                        >
                                            <EditIcon />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </>
    );
};
