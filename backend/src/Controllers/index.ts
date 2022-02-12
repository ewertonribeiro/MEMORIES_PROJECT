import { GetPostController } from './GetPostController';
import { GetPostsService } from '../Services/GetPostsService';
import { CreatePostController } from './CreatePostController';
import { CreatePostService } from '../Services/createPostService';
import { EditPostController } from './EditPostControoler';
import { EditPostService } from '../Services/EditPostService';
import { IncrementLikeController } from './IncrementLikeController';
import { incrementLikeService } from '../Services/IncrementlikeService';

//Get Post
const getPostService = new GetPostsService();
const getPostController = new GetPostController(getPostService);
////

//Create Post
const createPostService = new CreatePostService();
const createPostController = new CreatePostController(createPostService);
////

//Edit Post
const editPostService = new EditPostService();
const editPostController = new EditPostController(editPostService);
////

//Increment Like
const IncrementLikeService = new incrementLikeService();
const incrementLikeController = new IncrementLikeController(
  IncrementLikeService
);

export {
  getPostController,
  createPostController,
  editPostController,
  incrementLikeController,
};
