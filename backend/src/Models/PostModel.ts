import { PostSchema, Post } from './MongooseSchemas';
import { model } from 'mongoose';

const PostModel = model<Post>('PostMessage', PostSchema);

export { PostModel };
