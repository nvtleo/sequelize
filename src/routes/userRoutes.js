import express from 'express';
import { getUser } from '../controllers/userControllers.js';
const userRouter = express.Router();
userRouter.get("/get-user", getUser);
export default userRouter;