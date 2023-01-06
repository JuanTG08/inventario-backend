export interface IClient {
    cedula: number;
    nombre: string;
    apellido_1: string;
    apellido_2?: string;
    codigo_ciudad: string;
    estado_cliente: number;
}