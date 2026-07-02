import { useState } from "react";

import { RutValidator } from "../components/RutValidator";
import { RutGenerator } from "../components/RutGenerator";

export default function Rut() {
    const [mode, setMode] = useState<"validar" | "generar">("validar");

    return (
        <div className="space-y-6">

            <h1 className="text-2xl font-bold">RUT</h1>

            {/* Tabs */}
            <div className="inline-flex rounded-md border border-zinc-800 bg-zinc-900 overflow-hidden ">
    
            <button
                onClick={() => setMode("validar")}
                className={`
                    px-4 py-2 text-sm transition cursor-pointer
                    ${
                        mode === "validar"
                            ? "bg-zinc-800 text-white"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }
                `}
            >
                Validar
            </button>

            <button
                onClick={() => setMode("generar")}
                className={`
                    px-4 py-2 text-sm transition cursor-pointer
                    ${
                        mode === "generar"
                            ? "bg-zinc-800 text-white"
                            : "text-zinc-400 hover:text-white hover:bg-zinc-800"
                    }
                `}
            >
                Generar
            </button>

        </div>

            <div className="border rounded-lg p-4">
                {mode === "validar" ? (
                    <RutValidator />
                ) : (
                    <RutGenerator />
                )}
            </div>

        </div>
    );
}