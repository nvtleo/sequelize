import express from 'express';
import { getUnLike } from '../controllers/Res.js';
const unLikeRouter = express.Router();
unLikeRouter.get("/get-unlike", getUnLike);
export default unLikeRouter;