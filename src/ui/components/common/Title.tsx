export default function Title({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <h1 className="text-2xl">{children}</h1>
    )
}
