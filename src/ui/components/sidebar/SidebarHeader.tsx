import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const SidebarHeader: FC = () => {
    return (
        <>
            <Link href={"/dashboard"}>
                <div className="flex flex-col justify-center items-center w-full gap-4">
                    <Image
                        src={"/logo-sin-fondo-sin-titulo.png"}
                        alt="DuckCar Logo"
                        width={120}
                        height={120}
                    />
                    <h1 className="text-2xl text-secundary hidden  md:block">
                        DuckCar
                    </h1>
                </div>
            </Link>
            <hr />
        </>
    );
};
