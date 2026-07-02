export function limpiarCedula(cedula: string): string {
    return cedula.replace(/\D/g, "");
}


export function normalizarCedula(cedula: string): string {

    const limpia = limpiarCedula(cedula);

    if (limpia.length === 7) {
        return limpia.padStart(8, "0");
    }

    return limpia;

}


export function obtenerNumeroCedula(cedula: string): string {

    const normalizada = normalizarCedula(cedula);

    return normalizada.substring(0, 7);

}

export function obtenerDigitoVerificador(cedula: string): string {

    const normalizada = normalizarCedula(cedula);

    return normalizada.substring(7);

}


export function formatearCedula(cedula: string): string {

    const normalizada = normalizarCedula(cedula);

    if (normalizada.length !== 8) {
        return normalizada;
    }

    return `${Number(normalizada.substring(0, 7)).toLocaleString("es-UY")}-${normalizada.substring(7)}`;

}