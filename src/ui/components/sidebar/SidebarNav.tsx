import Link from "next/link";
import { FC } from "react";
import { CalendarIcon, HomeIcon, RolIcon, UsersIcon } from "../icons";

export const SidebarNav: FC = () => {
    return (
        <nav className="flex flex-col gap-2 h-[500px]">
            <Link
                href={"/dashboard"}
                className="flex justify-start items-center gap-3 p-2 hover:bg-primary-light text-secundary hover:rounded ease-in duration-100"
            >
                <HomeIcon />
                <div className="hidden sm:block md:block ">Dashboard</div>
            </Link>

            <Link
                href={"/rol"}
                className="flex justify-start items-center gap-3 hover:bg-primary-light text-secundary p-2 hover:rounded ease-in duration-100"
            >
                <RolIcon />
                <div className="hidden sm:block md:block ">Roles</div>
            </Link>

            <Link
                href={"/users"}
                className="flex justify-start items-center gap-3 hover:bg-primary-light text-secundary p-2 hover:rounded ease-in duration-100"
            >
                <UsersIcon />
                <div className="hidden sm:block md:block ">Usuarios</div>
            </Link>

            <Link
                href={"/calendar"}
                className="flex justify-start items-center gap-3 hover:bg-primary-light text-secundary p-2 hover:rounded ease-in duration-100"
            >
                <CalendarIcon />
                <div className="hidden sm:block md:block ">Calendario</div>
            </Link>
        </nav>
    );
};
