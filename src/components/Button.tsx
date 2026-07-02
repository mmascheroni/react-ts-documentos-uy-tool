type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "success" | "danger";
};

export function Button({
    variant = "primary",
    className = "",
    ...props
}: ButtonProps) {
    const base =
        "px-4 py-2 rounded-md text-sm font-medium transition text-white transition cursor-pointer";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700",
        success: "bg-emerald-600 hover:bg-emerald-700",
        danger: "bg-red-600 hover:bg-red-700",
    };

    return (
        <button
            className={`${base} ${variants[variant]} ${className}`}
            {...props}
        />
    );
}