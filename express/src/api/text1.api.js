import express from 'express';
import {Text1Controller} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', Text1Controller.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,Text1Controller.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), Text1Controller.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), Text1Controller.delete);

export default router;