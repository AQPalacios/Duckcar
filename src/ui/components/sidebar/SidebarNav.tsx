import Link from "next/link";
import { FC } from "react";
import { CalendarIcon, HomeIcon, RolIcon, UsersIcon } from "../icons";

export const SidebarNav: FC = () => {
    return (
        <nav className="sidebar-nav flex flex-col gap-2 h-[500px] overflow-hidden overflow-y-auto">
            <Link
                href={"/dashboard"}
                className="flex justify-start items-center gap-3 p-2 hover:bg-primary-light text-secondary hover:rounded ease-in duration-100"
            >
                <HomeIcon />
                <div className="hidden md:block ">Dashboard</div>
            </Link>

            <Link
                href={"/roles"}
                className="flex justify-start items-center gap-3 hover:bg-primary-light text-secondary p-2 hover:rounded ease-in duration-100"
            >
                <RolIcon />
                <div className="hidden md:block ">Roles</div>
            </Link>

            <Link
                href={"/users"}
                className="flex justify-start items-center gap-3 hover:bg-primary-light text-secondary p-2 hover:rounded ease-in duration-100"
            >
                <UsersIcon />
                <div className="hidden md:block ">Usuarios</div>
            </Link>

            <Link
                href={"/calendar"}
                className="flex justify-start items-center gap-3 hover:bg-primary-light text-secondary p-2 hover:rounded ease-in duration-100"
            >
                <CalendarIcon />
                <div className="hidden md:block ">Calendario</div>
            </Link>
            {/*  */}
        </nav>
    );
};
