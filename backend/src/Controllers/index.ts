import { GetPostController } from './GetPostController';
import { GetPostsService } from '../Services/GetPostsService';
import { CreatePostController } from './CreatePostController';
import { CreatePostService } from '../Services/createPostService';

//Get Post
const getPostService = new GetPostsService();
const getPostController = new GetPostController(getPostService);
////

const createPostService = new CreatePostService();
const createPostController = new CreatePostController(createPostService);

export { getPostController, createPostController };
