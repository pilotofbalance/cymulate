import { connect, model } from 'mongoose';
import { CONFIG } from '../config';

const initDb = async () => {
    try {
        const db = await connect(CONFIG.DB_HOST);
        console.log('mongodb: successfully connected!');
    } catch (error) {
        // TODO need to support reconnection and grasefull fail
        throw Error('mongodb: unnable to connect')
    }
}

export { initDb };