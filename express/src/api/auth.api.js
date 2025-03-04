import express from 'express';
import AuthController from '../auth/auth.controller';
const router = express.Router();

router.post('/login', AuthController.login);
// router.post('/refresh', AuthController.refresh);

export default router;