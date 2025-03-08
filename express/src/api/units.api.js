import express from 'express';
import {UnitsController} from '../controller';
import AuthMiddleware from '../auth/auth.middleware';

const router = express.Router();

router.get('/', UnitsController.get);
router.post('/',AuthMiddleware.authenticateFor(["admin","superAdmin"]) ,UnitsController.post);
router.put('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), UnitsController.put);
router.delete('/:id', AuthMiddleware.authenticateFor(["admin","superAdmin"]), UnitsController.delete);

export default router;