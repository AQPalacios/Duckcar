export default function Popup({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen bg-background-popup flex justify-center items-center">
            {children}
        </div>
    );
}
