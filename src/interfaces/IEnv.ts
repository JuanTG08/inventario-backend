import { Dialect } from "sequelize/types/sequelize";

export default interface IEnv {
    PORT_SERVER: number | string;
    DATABASE_DATABASE_NAME: string;
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST_URL: string;
    DATABASE_TYPE_DATABASE: Dialect;
}