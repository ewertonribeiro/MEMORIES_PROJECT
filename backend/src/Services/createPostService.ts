import { Post } from '../Models/MongooseSchemas';
import { PostModel } from '../Models/PostModel';

export class CreatePostService {
  constructor() {}

  async handle(post: Post): Promise<Post> {
    try {
      const NewPost = new PostModel(post);

      await NewPost.save();
      return NewPost;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}
