import { createAsyncThunk } from '@reduxjs/toolkit';
import { API } from '../../Api/api';

const api = new API();

type ReceivedPost = {
  createdAt: Date;
  creator: string;
  title: string;
  message: string;
  likecount: number;
  tags: string;
  _id: string;
  selectedFile: string;
};

interface Post {
  post: ReceivedPost;
}

interface newPost {
  title?: string;
  message?: string;
  creator?: string;
  tags?: string;
  selectedFile?: string | ArrayBuffer | null;
}

export const FetchPosts = createAsyncThunk('Posts/FetchPosts', async () => {
  const data = await api.getPosts('posts');
  return data;
});

export const CreatePost = createAsyncThunk(
  'Posts/CreatePost',
  async (post: newPost) => {
    const data = await api.createPost('posts/createpost', post);

    return data;
  }
);

export const EditPost = createAsyncThunk(
  'Posts/EditPost',
  async (post: newPost) => {
    const data = await api.editPost(post);

    return data;
  }
);

interface IIncrementLike {
  _id: string;
  likecount: number;
}
export const IncrementLike = createAsyncThunk(
  'posts/incrementLike',
  async ({ _id, likecount }: IIncrementLike) => {
    const data = await api.incrementLike(_id, likecount);

    return data;
  }
);

export const DeletePost = createAsyncThunk(
  'posts/DeletePost',
  async (_id: string) => {
    try {
      await api.deletePost(_id);

      return _id;
    } catch (error: any) {
      console.log(error);
    }
  }
);
