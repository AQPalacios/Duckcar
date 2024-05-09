import { Sidebar } from "@/ui/components/sidebar/Sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex w-100 h-dvh">
            <Sidebar />
            <div className="w-full bg-primary-light">
                {children}
            </div>
        </main>
    )
}
