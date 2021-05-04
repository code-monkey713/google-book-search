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
    margin: '10px 0px 0px 0px',
    padding: theme.spacing(4),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  card: {
    padding: '15px',
    background: '#e8eaf6',
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
                // onClick={console.log('search button was pressed')}
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
          {/* {books.map((book)=>( */}
          <Card className={classes.card}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  book title
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  book authors
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  book description
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image={'imagelink'}
                title="API image"
              />
            </CardActionArea>
          </Card>
          {/* ))} */}
        </Paper>
      </Grid>
    </div>
  );
};
