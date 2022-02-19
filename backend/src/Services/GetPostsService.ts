import { Post } from '../Models/MongooseSchemas';
import { PostModel } from '../Models/PostModel';

export class GetPostsService {
  constructor() {}

  async handle(): Promise<Post[] | []> {
    try {
      const posts = await PostModel.find();

      return posts;
    } catch (e: any) {
      throw new Error(e.message);
    }
  }
}
