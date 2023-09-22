import express from 'express';
const router = express.Router();

import registerRouter from './api/register';

router.use('/register', registerRouter);

export default router;
