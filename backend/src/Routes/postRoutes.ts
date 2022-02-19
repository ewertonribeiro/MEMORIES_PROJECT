import { Router } from 'express';
import {
  getPostController,
  createPostController,
  editPostController,
  incrementLikeController,
  deletePostController,
} from '../Controllers';

export const postRouter = Router();

postRouter.get('/', (req, res) => getPostController.getPosts(req, res));

postRouter.post('/createpost', (req, res) =>
  createPostController.createPost(req, res)
);

postRouter.patch('/editpost', (req, res) =>
  editPostController.editpost(req, res)
);

postRouter.put('/incrementlike', (req, res) =>
  incrementLikeController.incrementLike(req, res)
);

postRouter.delete('/:_id/deletepost', (req, res) =>
  deletePostController.deletepost(req, res)
);
