import { Request, Response, NextFunction} from 'express';
import { verifyTokenService } from '../services/jwt.service';
import { findUser } from '../services/user.service';
import { NotFound, Unauthorized } from '../utils/errors';

// TODO extend Request type
async function isUserExists(req: any, res: Response, next: NextFunction) {
    const { email, password, role } = req.body;
    try {
        const user = await findUser({email, password, role});
        if(!user) throw new NotFound(`user not found ${email}`);
        req.user = user;
        next();
    } catch(error) {
        next(error);
    }
}

async function isAuthorized(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ','');
    try {
        if(!token) throw new Unauthorized('unouthorized user');
        verifyTokenService(token!)
        next();
    } catch(error) {
        next(error);
    }
}


export { isAuthorized, isUserExists } 