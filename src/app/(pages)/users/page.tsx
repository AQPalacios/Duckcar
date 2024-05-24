"use client";
import { useUserRegistrationFormStore } from "@/store";
import { useUserEditFormStore } from "@/store/users/UserEditFormStore";
import { Title } from "@/ui/components/common";
import Popup from "@/ui/components/common/Popup";
import { ActionBar } from "@/ui/components/users/ActionBar";
import { UserEditForm } from "@/ui/components/users/UserEditForm";
import { UserRegistrationForm } from "@/ui/components/users/UserRegistrationForm";
import { UsersTable } from "@/ui/components/users/UsersTable";

export default function UsersPage() {
    const { isUserRegistrationForm } = useUserRegistrationFormStore(
        (state) => state
    );
    const { isUserEditForm } = useUserEditFormStore((state) => state);
    return (
        <div className="flex flex-col gap-3 h-[calc(100vh-150px)]">
            <Title>Usuarios</Title>
            <ActionBar />
            <hr />
            <UsersTable />
            {isUserRegistrationForm && (
                <Popup>
                    <UserRegistrationForm />
                </Popup>
            )}
            {isUserEditForm && (
                <Popup>
                    <UserEditForm />
                </Popup>
            )}
        </div>
    );
}
