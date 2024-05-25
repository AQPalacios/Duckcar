"use client";
import { FC } from "react";
import { Button } from "../common";
import { SearchInput } from "./SearchInput";
import { PlusIcon } from "../icons";
import { useUserRegistrationFormStore } from "@/store";

export const ActionBar: FC = () => {
    const openUserRegistrationForm = useUserRegistrationFormStore(
        (state) => state.openUserRegistrationForm
    );

    return (
        <div className="flex justify-between items-center gap-3 p-1">
            <div className="flex gap-1">
                <Button className="">
                    <span className="hidden xl:block">Estudiante</span>
                    <span className="xl:hidden">E</span>
                </Button>
                <Button>
                    <span className="hidden xl:block">Profesor</span>
                    <span className="xl:hidden">P</span>
                </Button>
            </div>
            <SearchInput />
            <Button onClick={openUserRegistrationForm} className="bg-third hover:bg-third-light">
                <PlusIcon />
            </Button>
        </div>
    );
};
