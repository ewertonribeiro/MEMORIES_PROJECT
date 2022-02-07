import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { API } from '../../Api/api';
import axios from 'axios';

interface Posts {
  title?: string;
  message?: string;
  creator?: string;
  tags?: string;
  selectedFile?: string | ArrayBuffer | null;
  createdAt: Date;
  _id: string;
  likecount: number;
}

interface newPost {
  title?: string;
  message?: string;
  creator?: string;
  tags?: string;
  selectedFile?: string | ArrayBuffer | null;
}

const api = new API();

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

export const PostsSlice = createSlice({
  name: 'Posts',
  initialState: {
    posts: [] as Posts[],
    status: 'idle' || 'loading' || 'failed',
  },
  reducers: {
    fetchPosts: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(FetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload;
      })
      .addCase(CreatePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreatePost.fulfilled, (state) => {
        state.status = 'idle';
      });
  },
});

export const { fetchPosts } = PostsSlice.actions;

export default PostsSlice.reducer;
