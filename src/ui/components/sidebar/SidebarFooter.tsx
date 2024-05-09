import { FC } from "react";
import { LogoutIcon } from "../icons";

export const SidebarFooter: FC = () => {
    return (
        <>
            <hr />
            <footer className="flex flex-col gap-2 ">
                <button className="flex justify-start items-center gap-3 p-2 hover:bg-primary-light text-secundary hover:rounded ease-in duration-100">
                    <LogoutIcon />
                    <span className="hidden sm:block md:block ">Logout</span>
                </button>
                <div>Datos del usuario</div>
            </footer>
        </>
    );
};
