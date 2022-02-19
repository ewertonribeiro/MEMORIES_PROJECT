import mongoose from 'mongoose';
import { Post } from '../Models/MongooseSchemas';
import { PostModel } from '../Models/PostModel';

interface IResponse {
  sucess: string;
}

export class incrementLikeService {
  constructor() {}

  async handle({ _id, likecount }: Post): Promise<IResponse> {
    try {
      if (!mongoose.isValidObjectId(_id))
        throw new Error('The Provided Id Is not valid!');

      if (likecount === undefined) {
        throw new Error('You information is wrong');
      }

      await PostModel.findByIdAndUpdate(
        _id,
        { likecount: (likecount += 1) },
        { new: true }
      );

      const response = {
        sucess: 'Like Incremented',
      } as IResponse;

      return response;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
