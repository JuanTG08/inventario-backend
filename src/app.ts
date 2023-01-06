// Importamos las librerias
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
// import authMdlw from './middleware/token.auth.middleware';
import conn from './config/connection';

// Obtenemos las variables de configuraciones
import env from './config/config';

// Creamos la variable APP para el inicio del servidor
const app = express();

// Configuraciones previas
app.set('port', env.PORT_SERVER);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
conn();

/*
*
*   Rutas
*
*/
// Importamos las rutas ***
import index_router from './routes/index.routes';

app.use('/', index_router);

export default app;