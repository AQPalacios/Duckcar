"use client";
import React, { MouseEvent } from "react";

interface ButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: "button" | "submit" | "reset";
}

export default function Button({
    children,
    onClick,
    className,
    type,
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`p-2 bg-primary-light hover:bg-input-color rounded ${className}`}
        >
            {children}
        </button>
    );
}
