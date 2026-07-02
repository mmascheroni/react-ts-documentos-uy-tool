import { CI_WEIGHTS } from "./constants";
import {
    limpiarCedula,
    normalizarCedula,
    obtenerNumeroCedula,
    obtenerDigitoVerificador
} from "./formatter";

import type { CedulaValidationResult } from "./types";


export function calcularDigitoVerificador(numero: string): number {

    const limpio = limpiarCedula(numero);

    if (limpio.length !== 7) {
        throw new Error("El número de cédula debe contener exactamente 7 dígitos.");
    }

    let suma = 0;

    for (let i = 0; i < CI_WEIGHTS.length; i++) {

        suma += (Number(limpio[i]) * CI_WEIGHTS[i]) % 10;

    }

    const resto = suma % 10;

    if (resto === 0) {
        return 0;
    }

    return 10 - resto;

}


export function validarCedula(cedula: string): CedulaValidationResult {

    const normalizada = normalizarCedula(cedula);

    if (normalizada.length !== 8) {

        return {
            isValid: false,
            message: "La cédula debe contener 8 dígitos.",
            cedula: normalizada,
            numero: "",
            digitoIngresado: -1,
            digitoCalculado: -1
        };

    }

    const numero = obtenerNumeroCedula(normalizada);

    const digitoIngresado = Number(
        obtenerDigitoVerificador(normalizada)
    );

    const digitoCalculado = calcularDigitoVerificador(numero);

    return {

        isValid: digitoIngresado === digitoCalculado,

        message:
            digitoIngresado === digitoCalculado
                ? "Cédula válida."
                : "Dígito verificador incorrecto.",

        cedula: normalizada,

        numero,

        digitoIngresado,

        digitoCalculado

    };

}