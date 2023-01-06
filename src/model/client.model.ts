import { IClient } from '../interfaces/IClient';
import Client from './entity/client.entity';

class ClientModel {
    static create(client: IClient) {
        try {
            const _client = Client.build(<any>client);
            return _client;
        } catch (error) {
            return false;
        }
    }
}

export default ClientModel;