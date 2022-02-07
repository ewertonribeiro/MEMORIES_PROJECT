import { useState } from 'react';

import useStyles from './style.js';

import { TextField, Button, Typography, Paper } from '@material-ui/core';

import { API } from '../../Api/api';
import { useAppDispatch } from '../../Redux/ReduxHooks';
import { CreatePost } from '../../Redux/Reducers/PostsReducer';
// interface Posts {
//   title?: string;
//   message?: string;
//   creator?: string;
//   tags?: string;
//   selectedFile?: string | ArrayBuffer | null;
// }

// const Api = new API();

export function Form() {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const [postData, setPostData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!postData) return;

    dispatch(CreatePost(postData));
    clear();
  }

  async function handlePhoto(e) {
    if (!e.target.files) {
      return;
    }
    const reader = new FileReader();
    const file = e.target.files[0];

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPostData({ ...postData, selectedFile: reader.result });
    };
  }

  function clear() {
    setPostData({
      creator: '',
      message: '',
      tags: '',
      selectedFile: null,
      title: '',
    });
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.form} ${classes.root}`}
        onSubmit={handleSubmit}
      >
        <Typography variant='h2'>Creating a Memory!</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData?.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData?.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData?.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData?.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <input
            type='file'
            placeholder='Select a Photo!'
            name='photo'
            accept='image/*'
            onChange={(e) => handlePhoto(e)}
          />
          <Button
            className={classes.buttonSubmit}
            type='submit'
            variant='contained'
            size='large'
            color='primary'
            fullWidth
          >
            Submit
          </Button>

          <Button
            onClick={clear}
            variant='contained'
            size='small'
            color='secondary'
            fullWidth
          >
            Clear
          </Button>
        </div>
      </form>
    </Paper>
  );
}
