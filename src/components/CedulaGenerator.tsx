import { useState } from "react";
import { generarCedulaAleatoria } from "../services/ci";

import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function CedulaGenerator() {
    const [cedula, setCedula] = useState("");

    function handleRandom() {
        setCedula(generarCedulaAleatoria());
    }

    return (
        <div className="space-y-4">


            <Button onClick={handleRandom} variant="success">
                Generar cédula aleatoria
            </Button>

            {cedula && (
                <Card>
                    <p className="text-sm text-zinc-400">Cédula generada</p>
                    <p className="text-xl font-semibold tracking-wide">{cedula}</p>
                </Card>
            )}

        </div>
    );
}