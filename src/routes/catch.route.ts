import { Router } from 'express';
import { getVictums, updateVictum } from '../controllers/victum.controller';

const catchRouter = Router();

catchRouter.get('/:id', updateVictum);

export { catchRouter };