interface TitleProps {
    children: React.ReactNode;
    className?: string;
}

export default function Title({ children, className }: TitleProps) {
    return (
        <>
            <h1 className={`text-2xl ${className}`}>{children}</h1>
            <hr />
        </>
    );
}
