// Importamos las librerias
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
// import authMdlw from './middleware/token.auth.middleware';

// Creamos la variable APP para el inicio del servidor
const app = express();

// Configuraciones previas
app.set('port', 8000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

/*
*
*   Rutas
*
*/
// Importamos las rutas ***
import index_router from './routes/index.routes';

app.use('/', index_router);

export default app;