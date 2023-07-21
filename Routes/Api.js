import express from 'express';
import { postUser, getUser } from "../Controllers/userController.js";

export const router = express.Router();

router.post('/save', postUser);
router.get('/get', getUser);