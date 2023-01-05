import { config } from 'dotenv';
import IEnv from '../interfaces/IEnv';
config();
const env: IEnv = {
    PORT_SERVER : process.env.PORT_SERVER || 8000,
}
export default env;