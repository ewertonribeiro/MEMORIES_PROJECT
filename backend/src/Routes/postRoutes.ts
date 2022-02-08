import { Router } from 'express';
import {
  getPostController,
  createPostController,
  editPostController,
} from '../Controllers';

export const postRouter = Router();

postRouter.get('/', (req, res) => getPostController.getPosts(req, res));

postRouter.post('/createpost', (req, res) =>
  createPostController.createPost(req, res)
);

postRouter.patch('/editpost', (req, res) =>
  editPostController.editpost(req, res)
);
