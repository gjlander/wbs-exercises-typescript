import { Router } from 'express';
import { createUser, deleteUser, getUserById, getUsers, updateUser } from '../controllers/users.js';
import validateBody from '../middleware/validateBody.js';
import { userSchema } from '../zod/schemas.js';
// import fileUploader from '../middleware/fileUploader.js';
import formMiddleWare from '../middleware/formMiddleware.js';
import cloudUploader from '../middleware/cloudUploader.js';
const userRouter = Router();

userRouter.route('/').get(getUsers).post(validateBody(userSchema), createUser);
userRouter
  .route('/:id')
  .get(getUserById)
  .put(formMiddleWare, cloudUploader, validateBody(userSchema), updateUser)
  .delete(deleteUser);

export default userRouter;
