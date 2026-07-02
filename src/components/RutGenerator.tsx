import { useState } from "react";
import { generateRut, generateRutAleatorio } from "../services/rut";

import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

export function RutGenerator() {
    const [mode, setMode] = useState<"random" | "manual">("random");

    const [empresa, setEmpresa] = useState("");
    const [sucursal, setSucursal] = useState("001");
    const [rut, setRut] = useState("");

    function handleRandom() {
        setRut(generateRutAleatorio());
    }

    function handleManual() {
        setRut(generateRut(empresa, sucursal));
    }

    return (
        <div className="space-y-4">

            {/* Toggle */}
            <div className="inline-flex rounded-md border border-zinc-800 bg-zinc-900 overflow-hidden">

                <button
                    onClick={() => setMode("random")}
                    className={`
                        px-4 py-2 text-sm transition cursor-pointer
                        ${
                            mode === "random"
                                ? "bg-zinc-800 text-white"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                        }
                    `}
                >
                    Aleatorio
                </button>

                <button
                    onClick={() => setMode("manual")}
                    className={`
                        px-4 py-2 text-sm transition cursor-pointer
                        ${
                            mode === "manual"
                                ? "bg-zinc-800 text-white"
                                : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                        }
                    `}
                >
                    Manual
                </button>

            </div>

            {/* CONTENT */}
            {mode === "manual" && (
                <div className="grid grid-cols-2 gap-2">
                    <Input
                        value={empresa}
                        onChange={(e) => setEmpresa(e.target.value)}
                        placeholder="Empresa (8 dígitos)"
                    />

                    <Input
                        value={sucursal}
                        onChange={(e) => setSucursal(e.target.value)}
                        placeholder="Sucursal"
                    />
                </div>
            )}

            {/* BUTTON */}
            {mode === "random" ? (
                <div className="flex justify-center">
                    <Button onClick={handleRandom}>
                        Generar RUT aleatorio
                    </Button>
                </div>
            ) : (
                <Button onClick={handleManual}>
                    Generar RUT manual
                </Button>
            )}

            {/* RESULT */}
            {rut && (
                <Card>
                    <p className="text-sm text-zinc-400">
                        RUT generado
                    </p>

                    <p className="text-xl font-semibold tracking-wide">
                        {rut}
                    </p>
                </Card>
            )}

        </div>
    );
}