import { useState } from "react";
import { generarCedula, generarCedulaAleatoria } from "../services/ci";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function CedulaGenerator() {
    const [numero, setNumero] = useState("");
    const [cedula, setCedula] = useState("");

    function handleGenerate() {
        setCedula(generarCedula(numero));
    }

    function handleRandom() {
        setCedula(generarCedulaAleatoria());
    }

    return (
        <div className="space-y-4">

            {/* <Input
                value={numero}
                onChange={(e) => setNumero(e.target.value)}
                placeholder="Ej: 1234567"
            /> */}


            <Button onClick={handleRandom} variant="primary">
                Generar cédula aleatoria
            </Button>

            {cedula && (
                <Card>
                    <p className="font-bold">Cédula generada</p>
                    <p className="text-lg">{cedula}</p>
                </Card>
            )}

        </div>
    );
}