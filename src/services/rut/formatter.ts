
export function cleanRut(rut: string): string {
    return rut.replace(/\D/g, "");
}


export function getEmpresa(rut: string): string {
    const limpio = cleanRut(rut);

    return limpio.substring(0, 8);
}


export function getSucursal(rut: string): string {
    const limpio = cleanRut(rut);

    return limpio.substring(8, 11);
}


export function getDigitoVerificador(rut: string): string {
    const limpio = cleanRut(rut);

    return limpio.substring(11);
}

export function formatRut(rut: string): string {
    const limpio = cleanRut(rut);

    if (limpio.length !== 12) {
        return limpio;
    }

    return `${limpio.substring(0, 2)}.${limpio.substring(2, 5)}.${limpio.substring(5, 8)}.${limpio.substring(8, 11)}-${limpio.substring(11)}`;
}


export function normalizeRut(rut: string): string {
    return cleanRut(rut);
}