interface PopupProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function Popup({ children, className, onClick }: PopupProps) {
    return (
        <div
            className={`fixed top-0 left-0 w-screen h-screen bg-background-popup flex justify-center items-center ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
