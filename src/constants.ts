import mysql from 'mysql2/promise';
import { dbConfig } from './dbConfig';
import { Database } from './utils/database';

const connectionPool = mysql.createPool(dbConfig);

export const db = new Database(connectionPool);

export const getConnection = async () => {
    return connectionPool.getConnection();
};
