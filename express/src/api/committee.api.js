import express from 'express';
import {CommitteeController} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', CommitteeController.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,CommitteeController.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), CommitteeController.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), CommitteeController.delete);

export default router;