import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Paper,
  Card,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  CardMedia,
  TextField,
  Button,
} from '@material-ui/core/';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: '10px 0px 35px 0px',
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  card: {
    padding: '15px',
    background: '#e8eaf6',
    margin: '10px 0px 0px 0px',
  },
  inputColor: {
    background: 'white',
  },
  media: {
    padding: '5px',
    width: '150px',
    height: '200px',
  },
}));

export const BookSearch = (props) => {
  const classes = useStyles();

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  const searchBooks = (title) => {
    API.searchBook(title)
      .then((res) => setBooks(res.data.items))
      .catch((err) => console.log(err));
  };

  const saveBook = (book) => {
    let authors = '';
    book.volumeInfo.authors
      ? (authors = book.volumeInfo.authors[0])
      : (authors = 'No Authors Listed');

    API.saveBook({
      title: book.volumeInfo.title,
      authors: authors,
      description: book.volumeInfo.description,
      image:
        book.volumeInfo.imageLinks?.smallThumbnail ||
        'https://via.placeholder.com/100x140',
      link: book.volumeInfo.infoLink,
    }).then(() => {
      alert('Your book has been saved to the database!');
    });
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Book Search
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                id="outlined-search"
                label="Enter book title here"
                type="search"
                variant="outlined"
                fullWidth
                className={classes.inputColor}
                onChange={(e) => setSearch(e.target.value)}
              />
            </CardActions>
            <CardActions>
              <Button
                onClick={() => searchBooks(search)}
                variant="contained"
                color="secondary"
              >
                Search
              </Button>
            </CardActions>
          </Card>
        </Paper>
        <div style={{ margin: 10 }}>
          <p className="grayout">Search results will populate here!</p>
        </div>
        <Paper className={classes.paper}>
          {/* Function to map all the search result goes here! */}
          {books.map((book) => (
            <Card className={classes.card}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.volumeInfo.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.volumeInfo.authors
                      ? book.volumeInfo.authors[0]
                      : 'No Author Listed'}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.volumeInfo.description}
                  </Typography>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  image={
                    book.volumeInfo.imageLinks?.smallThumbnail ||
                    'https://via.placeholder.com/100x140'
                  }
                  title="API image"
                />
              </CardActionArea>
              <div className="buttonContainer">
                <Button
                  href={book.volumeInfo.infoLink}
                  target="_blank"
                  size="small"
                  color="primary"
                  variant="outlined"
                >
                  {props.viewBtn}
                </Button>
                <Button
                  onClick={() => saveBook(book)}
                  size="small"
                  color="primary"
                  variant="outlined"
                >
                  {props.saveBtn}
                </Button>
              </div>
            </Card>
          ))}
        </Paper>
      </Grid>
    </div>
  );
};
