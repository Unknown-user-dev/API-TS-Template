import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';

export class Database {
    connection: mysql.Connection;

    constructor(connection: mysql.Connection) {
        this.connection = connection;
    }

    async registerUser(username: string, password: string): Promise<void> {
        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const sql = `
                INSERT INTO users (username, password)
                VALUES (?, ?)
            `;
            await this.connection.execute(sql, [username, hashedPassword]);
            console.log('Utilisateur inscrit avec succès.');
        } catch (error) {
            console.error('Erreur lors de l\'inscription de l\'utilisateur :', error);
            throw error;
        }
    }
}
