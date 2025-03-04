import express from 'express';
import {AcceptabilityController} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', AcceptabilityController.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,AcceptabilityController.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), AcceptabilityController.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), AcceptabilityController.delete);

export default router;