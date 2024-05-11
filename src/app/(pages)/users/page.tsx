"use client";
import { Title } from "@/ui/components/common";
import Popup from "@/ui/components/common/Popup";
import { ActionBar } from "@/ui/components/users/ActionBar";
import { UserRegistrationForm } from "@/ui/components/users/UserRegistrationForm";
import { UsersTable } from "@/ui/components/users/UsersTable";

export default function UsersPage() {
    
    return (
        <div className="flex flex-col gap-3 h-[calc(100vh-150px)]">
            <Title>Usuarios</Title>
            <ActionBar />
            <hr />
            <UsersTable />
            <Popup >
                <UserRegistrationForm />
            </Popup>
        </div>
    );
}
