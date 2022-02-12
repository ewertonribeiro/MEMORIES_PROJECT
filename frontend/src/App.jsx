import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './Images/memories.png';

import { Form } from './Components/Form/Form.jsx';
import { Posts } from './Components/Posts/Posts.jsx';
import useStyles from './style.js';

import { useEffect } from 'react';

import { useAppDispatch } from './Redux/ReduxHooks';
import { FetchPosts } from './Redux/Reducers/PostReducer-Thunks';

function App() {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(FetchPosts());
  }, []);

  return (
    <Container maxWidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>
          MEMORIES
        </Typography>
        <img className={classes.image} src={memories} alt='Logo' height='60' />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
