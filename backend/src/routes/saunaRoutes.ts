import express, { Request, Response } from 'express';

const router = express.Router();

interface SaunaRequest extends Request {
    bestTime?: string;
}

router.get('/best-time', (req: SaunaRequest, res: Response) => {

    res.json({
        bestTime: req.bestTime
    });
});

export default router;