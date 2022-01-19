import { Router } from 'express';
import { generateToken } from '../controllers/jwt.controller';
import { isUserExists } from '../middlwares/auth.mid';

const authRouter = Router();

authRouter.post('/login', isUserExists, generateToken);

export { authRouter };