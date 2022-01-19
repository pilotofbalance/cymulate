import {Request, Response, NextFunction} from 'express';
import { generateTokenService } from '../services/jwt.service';

const generateToken = (req: any, res: Response, next: NextFunction) => {
    try {
      const { user } = req; 
      const token = generateTokenService(user);
      res.status(200).send({token});
    } catch(error) {
      next(error);
    }
  }

  export { generateToken }