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

export function Post() {
  // const {
  //   _id,
  //   likecount,
  //   createdAt,
  //   creator,
  //   message,
  //   selectedFile,
  //   tags,
  //   title,
  // } = post as PostSingle;

  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
        }
        title='Post'
      />
      <div className={classes.overlay}>
        <Typography variant='h6'>Ewerton</Typography>
        <Typography variant='body2'></Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small'>
          <MoreHorizIcon fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography
          variant='body2'
          color='textSecondary'
          component='h2'
        ></Typography>
      </div>
      <Typography
        className={classes.title}
        gutterBottom
        variant='h5'
        component='h2'
      >
        Ferias
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          bla bla bla
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary'>
          <ThumbUpAltIcon fontSize='small' /> Like 0{' '}
        </Button>
        <Button size='small' color='primary'>
          <DeleteIcon fontSize='small' /> Delete
        </Button>
      </CardActions>
    </Card>
  );
}
