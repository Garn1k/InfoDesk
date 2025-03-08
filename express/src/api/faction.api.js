import express from 'express';
import {FactionController} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', FactionController.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,FactionController.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), FactionController.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), FactionController.delete);

export default router;