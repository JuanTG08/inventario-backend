import { Sequelize } from "sequelize";
import env from "./config";
import sqlKey from "./sqlKey";

const conn = async () => {
    try {
        await sqlKey.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

export default conn;