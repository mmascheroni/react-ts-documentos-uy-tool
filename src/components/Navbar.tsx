import { Link, useLocation } from "react-router-dom";
import logoDocumentoUY from "../assets/logo-documentos-uy.png";

export default function Navbar() {
    const location = useLocation();

    const linkClass = (path: string) =>
        `px-3.5 py-2.5 rounded-md text-sm transition ${
            location.pathname === path
                ? "bg-sky-900/90 text-white border-b-4 border-sky-400"
                : "text-white hover:text-white hover:bg-sky-900"
        }`;

    return (
        <header className="sticky top-0 z-50 border-b border-zinc-800 bg-sky-600 backdrop-blur-md">
            <div className="max-w-5xl h-20 mx-auto px-3.5 py-2 flex items-center justify-between ml-8">

                <h1 className="cursor-pointer transition hover:scale-105 hover:rotate-1.5">
                    <img src={logoDocumentoUY} alt="Logo Documentos UY" className="rounded-xl w-18 h-16" />
                </h1>

                <nav className="flex gap-1">
                    <Link to="/" className={linkClass("/")}><b>| Home </b></Link>
                    <Link to="/rut" className={linkClass("/rut")}><b>RUT</b></Link>
                    <Link to="/cedula" className={linkClass("/cedula")}><b>Cédula |</b></Link>
                </nav>

            </div>
        </header>
    );
}