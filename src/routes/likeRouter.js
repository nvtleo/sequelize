import express from 'express';
import { getLike } from './../controllers/Res.js';
const likeRouter = express.Router();
likeRouter.get("/get-like", getLike);
export default likeRouter;