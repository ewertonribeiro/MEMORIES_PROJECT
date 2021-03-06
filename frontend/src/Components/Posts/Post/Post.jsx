import useStyles from './style.js';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import { useAppDispatch } from '../../../Redux/ReduxHooks';
import {
  incrementLike,
  setselectedId,
  deletepost,
} from '../../../Redux/Reducers/PostsReducer';

import {
  IncrementLike,
  DeletePost,
} from '../../../Redux/Reducers/PostReducer-Thunks';

// type ReceivedPost = {
//   createdAt: Date;
//   creator: string;
//   title: string;
//   message: string;
//   likecount: number;
//   tags: string;
//   _id: string;
//   selectedFile: string;
// };

// interface Post {
//   post: ReceivedPost;
// }

// interface IIncrementedId {
//   _id: string;
//   likecount: number;
// }

export function Post({ post }) {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  function getPostId() {
    dispatch(setselectedId(post._id));
  }

  async function handleLike() {
    dispatch(incrementLike(post._id));
    dispatch(IncrementLike({ _id: post._id, likecount: post.likecount }));
  }

  function handleDelete() {
    dispatch(deletepost(post._id));
    dispatch(DeletePost(post._id));
  }

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title='Post'
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>{post.creator}</Typography>
        <Typography variant='body2'>{post.createdAt}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={getPostId}>
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary' component='h2'>
          {`# ${post.tags}`}
        </Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        {post.title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={handleLike}>
          <ThumbUpAltIcon fontSize='small' /> Like {post.likecount}{' '}
        </Button>
        <Button size='small' color='primary' onClick={handleDelete}>
          <DeleteIcon fontSize='small' /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}
