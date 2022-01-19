import {Request, Response, NextFunction} from 'express';
import { generateEmailService } from '../services/email.service';
import { generateTokenService } from '../services/jwt.service';

const generateEmail = async (req: any, res: Response, next: NextFunction) => {
    try {
      const { victum } = req; 
      await generateEmailService(victum);
      res.status(200).send({});
    } catch(error) {
      next(error);
    }
  }

  export { generateEmail }