import express from 'express';
import { signup, login, logout, getMe } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

// Logout route
router.post('/logout', logout);

// Get authenticated user's data
router.get('/me', authMiddleware, getMe);

export default router;