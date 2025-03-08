import express from 'express';
import {UsersController} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', UsersController.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,UsersController.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), UsersController.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), UsersController.delete);

export default router;