// Creamos la instancia de la ruta por defecto en express
import { Router } from "express";
// Importamos funciones de nuestro controlador
import IndexCtrl from '../controller/index.controller';

const router = Router();


/*
    CRUD
    C: CREATE
    R: REALOAD
    U: UPDATE
    D: DELETE | DISABLE
*/

router.route('/index')
    .get(IndexCtrl.index) // Creamos un nuevo usuario


export default router;