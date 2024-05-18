import { Sidebar } from "@/ui/components/sidebar/Sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    // Aca verificar 
    return (
        <main className="flex h-dvh text-secondary">
            <Sidebar />
            <div className="w-full bg-primary-light p-4 md:p-12">
                <div className="bg-primary rounded p-5">{children}</div>
            </div>
        </main>
    );
}
