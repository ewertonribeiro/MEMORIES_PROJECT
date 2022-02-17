import { PostModel } from '../Models/PostModel';
import mongoose from 'mongoose';

export class DeletePostService {
  constructor() {}

  async handle(_id: string) {
    try {
      if (!mongoose.isValidObjectId(_id)) throw new Error('This Id is Invalid');

      await PostModel.findByIdAndDelete(_id, { new: true });

      return { message: 'Post Sucefully Deleted' };
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
