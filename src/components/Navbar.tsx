import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();

    const linkClass = (path: string) =>
        `px-3 py-1.5 rounded-md text-sm transition ${
            location.pathname === path
                ? "bg-zinc-800 text-white"
                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/60 backdrop-blur-md">
            <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between">

                <h1 className="text-sm font-semibold tracking-tight text-zinc-100">
                    Documentos UY Tool
                </h1>

                <nav className="flex gap-1">
                    <Link to="/" className={linkClass("/")}>Home</Link>
                    <Link to="/rut" className={linkClass("/rut")}>RUT</Link>
                    <Link to="/cedula" className={linkClass("/cedula")}>Cédula</Link>
                </nav>

            </div>
        </header>
    );
}