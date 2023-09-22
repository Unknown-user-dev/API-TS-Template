import express from 'express';
import { db, getConnection } from '../../constants';

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).send('Invalid username or password');
        }

        const connection = await getConnection();

        await db.registerUser(username, password);

        connection.release();

        res.send('User registered successfully');
    } catch (error) {
        console.error('Erreur lors de l\'inscription de l\'utilisateur :', error);
        res.status(500).send('Erreur lors de l\'inscription de l\'utilisateur');
    }
});

export default router;
