type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            className={`
                w-full
                bg-zinc-900
                border
                border-zinc-800
                text-zinc-100
                placeholder:text-zinc-500
                px-3
                py-2
                rounded-md
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                ${className}
            `}
            {...props}
        />
    );
}