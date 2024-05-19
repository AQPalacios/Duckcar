import { FC } from "react";
import { LogoutIcon } from "../icons";
import { useUserConnectionStore } from "@/store/login/UserConnectionStore";
import { useRouter } from "next/navigation";

export const SidebarLogout: FC = () => {
    const { setUserDisconnected } = useUserConnectionStore((state) => state);
    const router = useRouter();
    const logout = () => {
        sessionStorage.removeItem("userConnected")
        setUserDisconnected();
        router.replace("/");
    };
    return (
        <button
            onClick={logout}
            className="flex justify-start items-center gap-3 p-2 hover:bg-primary-light text-secundary hover:rounded ease-in duration-100"
        >
            <LogoutIcon />
            <span className="hidden md:block ">Logout</span>
        </button>
    );
};
