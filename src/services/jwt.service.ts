import jwt from 'jsonwebtoken';
import { CONFIG } from '../config';

const generateTokenService = (user: any) => {
    return jwt.sign({data: user.email}, CONFIG.SOLT, { expiresIn: '1h' });
}

const verifyTokenService = (token: string) => {
    return jwt.verify(token, CONFIG.SOLT);
}

export { generateTokenService, verifyTokenService };