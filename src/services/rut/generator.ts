import { calculateDigitoVerificador } from "./validator";

export function generateRut(
    empresa: string,
    sucursal: string = "001"
): string {

    if (!/^\d{8}$/.test(empresa)) {
        throw new Error("La empresa debe tener exactamente 8 dígitos.");
    }

    if (!/^\d{3}$/.test(sucursal)) {
        throw new Error("La sucursal debe tener exactamente 3 dígitos.");
    }

    const base = empresa + sucursal;

    const dv = calculateDigitoVerificador(base);

    return base + dv;
}

export function generateNumeroEmpresaAleatorio(): string {

    const numero = Math.floor(Math.random() * 100000000);

    return numero.toString().padStart(8, "0");
}


export function generateSucursal(numero: number = 1): string {

    if (numero < 0 || numero > 999) {
        throw new Error("La sucursal debe estar entre 0 y 999.");
    }

    return numero.toString().padStart(3, "0");
}


export function generateRutAleatorio(): string {

    const empresa = generateNumeroEmpresaAleatorio();

    const sucursal = generateSucursal();

    return generateRut(empresa, sucursal);

}