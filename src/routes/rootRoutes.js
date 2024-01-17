import express from 'express';
import userRouter from './userRoutes.js';
import likeRouter from './likeRouter.js';
import unLikeRouter from './unlikeRouter.js';
const rootRouter = express.Router();
rootRouter.use("/user", userRouter);
rootRouter.use("/user", likeRouter)
rootRouter.use("/user", unLikeRouter)
export default rootRouter;