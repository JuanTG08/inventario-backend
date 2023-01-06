import { Request, Response } from "express";
import Client from "../model/entity/client.entity";
import ClientModel from '../model/client.model';

class IndexCtrl {
    static async index(req: Request, res: Response) {
        const cliente = ClientModel.create({
            cedula: 1072744262,
            nombre: 'Juan',
            apellido_1: 'Abc',
            codigo_ciudad: '001',
            estado_cliente: 1,
        });
        return res.json(cliente);
    }
}
export default IndexCtrl;