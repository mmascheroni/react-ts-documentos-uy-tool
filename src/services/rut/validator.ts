import { RUT_WEIGHTS } from "./constants";
import {
    cleanRut,
    getEmpresa,
    getSucursal,
    getDigitoVerificador
} from "./formatter";

import type { RutValidationResult } from "./types";


export function calculateDigitoVerificador(base: string): number {

    const limpio = cleanRut(base);

    if (limpio.length !== 11) {
        throw new Error("La base del RUT debe contener exactamente 11 dígitos.");
    }

    let suma = 0;

    for (let i = 0; i < RUT_WEIGHTS.length; i++) {

        suma += Number(limpio[i]) * RUT_WEIGHTS[i];

    }

    const resto = suma % 11;

    const dv = 11 - resto;

    if (dv === 11) return 0;

    if (dv === 10) return 1;

    return dv;
}

export function validateRut(rut: string): RutValidationResult {

    const limpio = cleanRut(rut);

    if (limpio.length !== 12) {

        return {
            isValid: false,
            message: "El RUT debe contener 12 dígitos.",
            rut: limpio,
            empresa: "",
            sucursal: "",
            digitoIngresado: -1,
            digitoCalculado: -1
        };

    }

    const base = limpio.substring(0, 11);

    const dvIngresado = Number(getDigitoVerificador(limpio));

    const dvCalculado = calculateDigitoVerificador(base);

    return {

        isValid: dvIngresado === dvCalculado,

        message:
            dvIngresado === dvCalculado
                ? "RUT válido."
                : "Dígito verificador incorrecto.",

        rut: limpio,

        empresa: getEmpresa(limpio),

        sucursal: getSucursal(limpio),

        digitoIngresado: dvIngresado,

        digitoCalculado: dvCalculado

    };

}