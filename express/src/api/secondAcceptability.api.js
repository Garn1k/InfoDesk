import express from 'express';
import {SecondAcceptabilityController} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';


const router = express.Router();

router.get('/', SecondAcceptabilityController.get);
router.post('/', AuthMiddleware.authenticateFor(["admin","superAdmin"]), SecondAcceptabilityController.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), SecondAcceptabilityController.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), SecondAcceptabilityController.delete);

export default router;