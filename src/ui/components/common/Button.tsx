import { MouseEventHandler } from "react";

interface ButtonProps{
    className?: string,
    children: React.ReactNode,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export default function Button({children, onClick, className} : ButtonProps) {
    return (
        <>
            <button onClick={onClick} className={`p-2 bg-primary-light hover:bg-input-color rounded ${className}`}>
                {children}
            </button>
            
        </>
    );
}
