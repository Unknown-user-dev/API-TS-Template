import express from 'express';
import mysql from 'mysql2/promise';
import apiRouter from './routes/api';
import { Database } from './utils/database';
import { dbConfig } from "./dbConfig";

const app = express();
const port = 3000;

app.use(express.json());

app.use('/api', apiRouter);

async function startServer() {
    const connection = await mysql.createConnection(dbConfig);
    const database = new Database(connection);

    app.listen(port, () => {
        console.log(`Serveur en écoute sur le port ${port}`);
    });
}

startServer();
