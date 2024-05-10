import { Title } from "@/ui/components/common";
import { SearchInput } from "@/ui/components/users/SearchInput";
import { UserRegistrationForm } from "@/ui/components/users/UserRegistrationForm";

export default function UsersPage() {
    return (
        <div className="flex flex-col gap-3">
            <Title>Usuarios</Title>
            <SearchInput />
            <UserRegistrationForm />
        </div>
    );
}
