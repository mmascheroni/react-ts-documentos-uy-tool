import { calcularDigitoVerificador } from "./validator";


export function generarCedula(numero: string): string {

    if (!/^\d{7}$/.test(numero)) {
        throw new Error("El número debe contener exactamente 7 dígitos.");
    }

    const dv = calcularDigitoVerificador(numero);

    return numero + dv;
}


export function generarNumeroAleatorio(): string {

    const numero = Math.floor(Math.random() * 10000000);

    return numero.toString().padStart(7, "0");
}


export function generarCedulaAleatoria(): string {

    const numero = generarNumeroAleatorio();

    return generarCedula(numero);

}