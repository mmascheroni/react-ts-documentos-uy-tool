export interface CedulaValidationResult {
    isValid: boolean;
    message: string;
    cedula: string;
    numero: string;
    digitoIngresado: number;
    digitoCalculado: number;
}