import express from 'express';
import {AcceptabilityController} from '../controller';

const router = express.Router();

router.get('/', AcceptabilityController.get);
router.post('/', );
router.put('/', );
router.delete('/', );

export default router;