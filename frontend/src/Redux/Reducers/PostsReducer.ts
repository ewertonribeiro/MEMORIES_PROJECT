import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CreatePost,
  FetchPosts,
  EditPost,
  IncrementLike,
  DeletePost,
} from './PostReducer-Thunks';

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

export const PostsSlice = createSlice({
  name: 'Posts',
  initialState: {
    posts: [] as Posts[],
    status: 'idle' || 'loading' || 'failed',
    selectedPostId: null,
  },
  reducers: {
    setselectedId: (state, action) => {
      state.selectedPostId = action.payload;
    },
    clearSelectedPostId: (state) => {
      state.selectedPostId = null;
    },
    incrementLike: (state, action) => {
      state.posts = state.posts.map((post) =>
        post._id === action.payload
          ? { ...post, likecount: (post.likecount += 1) }
          : post
      );
    },
    deletepost: (state, action) => {
      const id = state.posts.findIndex((post) => post._id === action.payload);

      state.posts = state.posts.splice(1, id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        FetchPosts.fulfilled,
        (state, action: PayloadAction<Posts[]>) => {
          state.status = 'idle';
          state.posts = action.payload;
        }
      )
      .addCase(CreatePost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreatePost.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(EditPost.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(EditPost.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(IncrementLike.fulfilled, (state) => {
        state.status = 'idle';
      })
      .addCase(DeletePost.fulfilled, (state) => {
        state.status = 'completed';
      });
  },
});

export const { setselectedId, clearSelectedPostId, incrementLike, deletepost } =
  PostsSlice.actions;

export default PostsSlice.reducer;
