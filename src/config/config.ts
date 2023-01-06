import { config } from 'dotenv';
import { Dialect } from 'sequelize';
import IEnv from '../interfaces/IEnv';
config();
const env: IEnv = {
    PORT_SERVER : process.env.PORT_SERVER || 8000,
    DATABASE_DATABASE_NAME : process.env.DATABASE_DATABASE_NAME,
    DATABASE_USER : process.env.DATABASE_USER,
    DATABASE_PASSWORD : process.env.DATABASE_PASSWORD,
    DATABASE_HOST_URL : process.env.DATABASE_HOST_URL,
    DATABASE_TYPE_DATABASE: <Dialect>process.env.DATABASE_TYPE_DATABASE,
}
export default env;