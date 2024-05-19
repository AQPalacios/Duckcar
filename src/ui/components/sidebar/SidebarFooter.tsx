"use client";
import { FC } from "react";
import { SidebarLogout } from "./SidebarLogout";
import { SidebarUserInfo } from "./SidebarUserInfo";

export const SidebarFooter: FC = () => {

    return (
        <>
            <hr />
            <footer className="flex flex-col gap-2 ">
                <SidebarUserInfo />
                <SidebarLogout />
            </footer>
        </>
    );
};
