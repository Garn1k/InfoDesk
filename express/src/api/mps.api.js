import express from 'express';
import {MpsController} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', MpsController.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,MpsController.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), MpsController.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), MpsController.delete);

export default router;