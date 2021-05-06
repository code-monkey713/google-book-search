import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  CardMedia,
  Button,
} from '@material-ui/core/';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '10px 0px 0px 0px',
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  card: {
    padding: '15px',
    background: '#e8eaf6',
    margin: '10px 0px 0px 0px',
  },
  media: {
    padding: '5px',
    width: '150px',
    height: '150px',
  },
}));

export const SavedCard = (props) => {
  const classes = useStyles();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      // add a modal to warn the book with 'title' has been deleted
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            {/* begin mapping of all saved books from server */}
            {books.map((book) => (
              <Card className={classes.card}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='h2'>
                      {book.title}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {book.authors}
                    </Typography>
                    <Typography
                      variant='body2'
                      color='textSecondary'
                      component='p'
                    >
                      {book.description}
                    </Typography>
                    <CardMedia
                      className={classes.media}
                      image={book.image}
                      title='API image'
                    />
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    href={book.link}
                    target='_blank'
                    size='small'
                    color='primary'
                    variant="outlined"
                  >
                    {props.btnView}
                  </Button>
                  <Button
                    onClick={() => deleteBook(book._id)}
                    size='small'
                    color='secondary'
                    variant="outlined"
                  >
                    {props.btnDelete}
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
