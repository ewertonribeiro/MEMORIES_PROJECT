import { Post } from './Post/Post';
import useStyles from './style.js';

import { useAppSelector } from '../../Redux/ReduxHooks';

import { useEffect , useState } from 'react';

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

  const posts = useAppSelector((store) => store.posts.posts);

  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(posts);
  }, [posts]);

  return !Posts.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.mainContainer}
      container
      alignItems='stretch'
      spacing={3}
    >
      {Posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
