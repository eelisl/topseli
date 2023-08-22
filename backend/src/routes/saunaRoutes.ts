import express, { Request } from 'express';
import * as saunaController from '../controllers/saunaController';

const router = express.Router();

interface SaunaRequest extends Request {
    bestTime?: string;
}

router.get('/best-time', saunaController.getBestTime);

export default router;