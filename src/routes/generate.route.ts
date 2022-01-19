import { Router } from 'express';
import { generateEmail } from '../controllers/generate.controller';
import { getVictums } from '../controllers/victum.controller';
import { isAuthorized } from '../middlwares/auth.mid';
import { createVictumMid } from '../middlwares/generate.mid';

const generateRouter = Router();

// TODO add class-validator for entities
generateRouter.post('/create', isAuthorized, createVictumMid, generateEmail);

generateRouter.get('/victums', isAuthorized, getVictums);

export { generateRouter };