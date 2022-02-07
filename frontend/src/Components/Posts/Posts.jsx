import { Post } from './Post/Post';
import useStyles from './style.js';

import { useAppSelector, useAppDispatch } from '../../Redux/ReduxHooks';
import { useEffect } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import { FetchPosts } from '../../Redux/Reducers/PostsReducer';

// interface PostSingle {
//   title?: string;
//   message?: string;
//   creator?: string;
//   tags?: string;
//   selectedFile?: string | ArrayBuffer | null;
//   createdAt: Date;
//   _id: string;
//   likecount: number;
// }

export function Posts() {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const posts = useAppSelector((store) => store.posts.posts);

  useEffect(() => {
    dispatch(FetchPosts());
  }, []);
  return (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}
    >
      <Grid item xs={12} sm={6} md={6}>
        <Post />
      </Grid>
    </Grid>
  );
}
