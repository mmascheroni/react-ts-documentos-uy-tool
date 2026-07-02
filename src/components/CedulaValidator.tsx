import { useState } from "react";
import { validarCedula } from "../services/ci";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { ResultBox } from "../components/ResultBox";

export function CedulaValidator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState<any>(null);

    function handleValidate() {
        setResult(validarCedula(input));
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
                placeholder="Ej: 12345678"
            />

            <Button onClick={handleValidate}>
                Validar
            </Button>

            {result && (
                <ResultBox type={result.isValid ? "success" : "error"}>

                    <p className="font-bold">
                        {result.isValid ? "✔ Cédula válida" : "✖ Cédula inválida"}
                    </p>

                    <p>Número: {result.numero}</p>
                    <p>DV ingresado: {result.digitoIngresado}</p>
                    <p>DV calculado: {result.digitoCalculado}</p>

                </ResultBox>
            )}

        </div>
    );
}