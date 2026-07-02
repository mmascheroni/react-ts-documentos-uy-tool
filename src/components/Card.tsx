import type { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
};

export function Card({ children, className = "" }: CardProps) {
    return (
        <div
            className={`
                rounded-lg
                border
                border-zinc-800
                bg-zinc-900/40
                backdrop-blur
                p-4
                text-zinc-100
                shadow-sm
                ${className}
            `}
        >
            {children}
        </div>
    );
}