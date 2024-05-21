import Image from "next/image";
import { FC } from "react";
import { Button } from "../common";
import { DeleteIcon, EditIcon } from "../icons";
import { useUserStore } from "@/store/users/UsersStore";
import { deleteUsuarioById } from "@/lib/db";

export const UsersTable: FC = () => {
    const { users, setUsers } = useUserStore((state) => state);
    const roleOrder = ["admin", "profesor", "estudiante"];

    const handleEditInfoUser = (userId: string) => {
        console.log(userId);
    }

    const handleDeleteUser = (userId: string) => {
        /**
         * 
         */
        // TODO Poner un popup para confirmar la eliminacion del usuario
        const nuevosUsuarios = deleteUsuarioById(userId);
        setUsers(nuevosUsuarios);
    }
    
    return (
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
                        <div key={user.usuario_id} className="rounded text-sm">
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
                                            <span>{user.usuario_nombre}</span>
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
                                    <Button className="hover:bg-primary" onClick={() => handleDeleteUser(user.usuario_id)}>
                                        <DeleteIcon />
                                    </Button>
                                    <Button className="hover:bg-primary" onClick={() => handleEditInfoUser(user.usuario_id)}>
                                        <EditIcon />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};
