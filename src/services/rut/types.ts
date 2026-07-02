export interface RutValidationResult {
    isValid: boolean;
    message: string;
    rut: string;
    empresa: string;
    sucursal: string;
    digitoIngresado: number;
    digitoCalculado: number;
}