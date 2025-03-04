import express from 'express';
import {SecondAcceptabilityController} from '../controller';

const router = express.Router();

router.get('/', SecondAcceptabilityController.get);
router.post('/', SecondAcceptabilityController.post);
router.put('/', SecondAcceptabilityController.put);
router.delete('/', SecondAcceptabilityController.delete);

export default router;