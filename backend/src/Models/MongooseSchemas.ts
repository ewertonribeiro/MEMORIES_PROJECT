import { Schema } from 'mongoose';

export interface Post {
  title: string;
  message: string;
  creator: string;
  tags?: string;
  selectedFile: string;
  likecount?: number;
  createdAt: Date;
}

const PostSchema = new Schema<Post>({
  title: { type: String, required: true },
  message: { type: String, required: true },
  creator: String,
  tags: { type: String, required: false, default: [] },
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
  likecount: {
    type: Number,
    default: 0,
  },
});

export { PostSchema };
