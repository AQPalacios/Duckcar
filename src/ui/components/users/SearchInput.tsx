"use client";
import { FC, useState } from "react";
import { SearchIcon } from "../icons";
import { useUserStore } from "@/store/users/UsersStore";
import { getUserConnected } from "@/utils/userConnected/userConnected";
import { getUsuariosBySedeAutoescuelaId } from "@/lib/db";
interface Usuario {
    usuario_id: string;
    sede_autoescuela_id: string;
    rol_id: string;
    usuario_dni: string;
    usuario_nombre: string;
    usuario_email: string;
    usuario_telefono?: string;
    usuario_contrasenya: string;
}

export const SearchInput: FC = () => {
    const [searchInput, setSearchInput] = useState<string>("");
    const { users, setUsers } = useUserStore((state) => state);
    const userConnected = getUserConnected();
    const usersByAutoescuelaId: Usuario[] = getUsuariosBySedeAutoescuelaId(
        userConnected.sede_autoescuela_id
    );

    const searchData = (searchName: string) => {
        if (searchName === "") {
            setUsers(usersByAutoescuelaId);
        } else {
            const arrayNewUsers = usersByAutoescuelaId.filter((user) =>
                user.usuario_nombre.toLowerCase().includes(searchName.toLowerCase())
            );
            if(arrayNewUsers.length === 0){

            }else{
                setUsers(arrayNewUsers)
            }
        }
    };

    const handleChange = (event: any) => {
        event.preventDefault();
        const newSearchInput = event.target.value;
        searchData(newSearchInput);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="relative w-full xl:w-1/2">
                <input
                    type="text"
                    placeholder="Buscar por nombre"
                    className=" bg-primary-light p-2 rounded-lg w-full outline-none hover:bg-input-color focus:bg-input-color"
                    onChange={handleChange}
                />
                {/* <button type="submit">
                    <SearchIcon className="absolute top-1 right-1 bg-input-color p-1.5 rounded hover:bg-primary" />
                </button> */}
            </form>
        </>
    );
};
