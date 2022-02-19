import { Post } from '../Models/MongooseSchemas';
import { PostModel } from '../Models/PostModel';
import mongoose from 'mongoose';

export class EditPostService {
  constructor() {}

  async handle(post: Post) {
    const { _id } = post;
    const { creator, message, title, tags, selectedFile } = post;
    try {
      if (!mongoose.isValidObjectId(_id)) throw new Error('This Id is Invalid');

      const updatedPost = { creator, selectedFile, message, title, tags };
      await PostModel.findByIdAndUpdate(_id, updatedPost, { new: true });

      return updatedPost;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
