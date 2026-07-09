type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className = "", ...props }: InputProps) {
    return (
        <input
            className={`
                bg-sky-900
                border
                border-white
                text-zinc-100
                placeholder:text-white
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