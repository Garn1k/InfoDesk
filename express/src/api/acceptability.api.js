import express from 'express';
import {AcceptabilityController} from '../controller';

const router = express.Router();

router.get('/', AcceptabilityController.get);
router.post('/', AcceptabilityController.post);
router.put('/', AcceptabilityController.put);
router.delete('/', AcceptabilityController.delete);

export default router;