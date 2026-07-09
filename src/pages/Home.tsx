import { Link } from "react-router-dom";
import { Button } from "../components/Button";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center text-center py-16">

            <p className="mt-4 max-w-2xl text-zinc-200">
                Herramienta para validar y generar documentos uruguayos como
                RUT y Cédula de Identidad de forma rápida y sencilla.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/rut">
                    <Button className="min-w-40">
                        Ir a RUT
                    </Button>
                </Link>

                <Link to="/cedula">
                    <Button variant="success" className="min-w-40">
                        Ir a Cédula
                    </Button>
                </Link>
            </div>

        </div>
    );
}