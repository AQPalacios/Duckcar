import { useUserConnectionStore } from "@/store";
import { FC } from "react";

export const SidebarUserInfo: FC = () => {
    const { userConnected } = useUserConnectionStore((state) => state);
    const getUserInfoConnected = () => {
        if(!userConnected) return;
        const {usuario_nombre} = userConnected;
        return usuario_nombre;
    }
    const userName = getUserInfoConnected();
    return (
        <>
            <div>
                {userName}
            </div>
        </>
    );
};
