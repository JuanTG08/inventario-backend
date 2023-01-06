import { Sequelize } from "sequelize";
import env from "./config";

const sqlKey = new Sequelize(env.DATABASE_DATABASE_NAME, env.DATABASE_USER, env.DATABASE_PASSWORD, {
    host: env.DATABASE_HOST_URL,
    dialect: env.DATABASE_TYPE_DATABASE
});

export default sqlKey;