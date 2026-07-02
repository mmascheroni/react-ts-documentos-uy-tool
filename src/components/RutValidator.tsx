import { useState } from "react";
import { validateRut } from "../services/rut";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ResultBox } from "../components/ResultBox";

export function RutValidator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<any>(null);

    function handleValidate() {
        setResult(validateRut(input));
    }

    return (
        <div className="space-y-4">

            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        handleValidate();
                    }
                }}
                placeholder="Ej: 215084310018"
            />

            <Button onClick={handleValidate}>
                Validar
            </Button>

            {result && (
                <ResultBox type={result.isValid ? "success" : "error"}>
                    <p className="font-bold">
                        {result.isValid ? "✔ RUT válido" : "✖ RUT inválido"}
                    </p>

                    <p>Empresa: {result.empresa}</p>
                    <p>Sucursal: {result.sucursal}</p>
                    <p>DV ingresado: {result.digitoIngresado}</p>
                    <p>DV calculado: {result.digitoCalculado}</p>
                </ResultBox>
            )}
        </div>
    );
}