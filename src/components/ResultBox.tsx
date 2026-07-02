import type { ReactNode } from "react";

type ResultBoxProps = {
    type?: "success" | "error" | "info";
    children: ReactNode;
};

export function ResultBox({
    type = "info",
    children,
}: ResultBoxProps) {
    const styles = {
        success: "bg-green-50 border-green-400 text-green-800",
        error: "bg-red-50 border-red-400 text-red-800",
        info: "bg-gray-50 border-gray-300 text-gray-800",
    };

    return (
        <div className={`border rounded-md p-4 ${styles[type]}`}>
            {children}
        </div>
    );
}