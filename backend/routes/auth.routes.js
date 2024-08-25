import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js';

const router = express.Router();

//! when we hit the /api/auth/signin endpoint, we will get the response 'You hit the signin endpoint'
router.post('/signup', signup);

router.post('/login', login);

router.post('/logout', logout);

export default router;