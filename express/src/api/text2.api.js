import express from 'express';
import {Text2Controller} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', Text2Controller.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,Text2Controller.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), Text2Controller.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), Text2Controller.delete);

export default router;