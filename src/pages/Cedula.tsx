import { useState } from "react";
import { CedulaValidator } from "../components/CedulaValidator";
import { CedulaGenerator } from "../components/CedulaGenerator";

export default function Cedula() {
    const [mode, setMode] = useState<"validar" | "generar">("validar");

    return (
        <div className="space-y-6">

            <h1 className="text-2xl font-bold">Cédula</h1>

            {/* Tabs */}
            <div className="inline-flex rounded-md border border-zinc-800 bg-zinc-900 overflow-hidden">

                <button
                    onClick={() => setMode("validar")}
                    className={`px-4 py-2 text-sm cursor-pointer transition ${
                        mode === "validar"
                            ? "bg-zinc-800 text-white"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                >
                    Validar
                </button>

                <button
                    onClick={() => setMode("generar")}
                    className={`px-4 py-2 text-sm cursor-pointer transition ${
                        mode === "generar"
                            ? "bg-zinc-800 text-white"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }`}
                >
                    Generar
                </button>

            </div>

            {/* Content */}
            <div className="border border-zinc-800 rounded-lg p-4 bg-zinc-900/40">
                {mode === "validar" ? (
                    <CedulaValidator />
                ) : (
                    <CedulaGenerator />
                )}
            </div>

        </div>
    );
}