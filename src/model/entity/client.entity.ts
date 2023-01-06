import { DataTypes, Model } from "sequelize";
import sqlKey from "../../config/sqlKey";


class Client extends Model {};
Client.init({
    cedula: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    apellido_2: {
        type: DataTypes.STRING,
        allowNull: true
    },
    codigo_ciudad: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize: sqlKey,
    modelName: 'clientes',
    createdAt: false,
    updatedAt: false,
});

export default Client;