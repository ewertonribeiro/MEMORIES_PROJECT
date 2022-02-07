import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import PostsReducer from '../Reducers/PostsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    posts: PostsReducer,
  },
  middleware: [logger, thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
