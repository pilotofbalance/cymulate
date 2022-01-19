import { Request, Response, NextFunction} from 'express';
import { createVictum } from '../services/victum.service';

// TODO extend request type
async function createVictumMid(req: any, res: Response, next: NextFunction) {
    const { email } = req.body;
    try {
        const victum = await createVictum({email});
        req.victum = victum;
        next();
    } catch(error) {
        next(error);
    }
}

export { createVictumMid } 