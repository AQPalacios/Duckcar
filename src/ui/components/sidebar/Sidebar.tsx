import { FC } from "react";
import { SidebarNav } from "./SidebarNav";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarFooter } from "./SidebarFooter";

export const Sidebar: FC = () => {
    return (
        <div className="flex flex-col justify-between bg-primary px-5 py-14 w-[80px] sm:w-[200px] md:w-[270px] ease-in duration-200">
            <SidebarHeader />
            {/* <hr /> */}
            <SidebarNav />
            {/* <hr /> */}
            <SidebarFooter />
        </div>
    );
};
