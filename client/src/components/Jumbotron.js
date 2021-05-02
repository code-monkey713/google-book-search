import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Jumbotron = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <div className="jumbo-wrap">
            <Typography variant="h3" component="h2">
              {'(React) Google Books Search'}
            </Typography>
            <Typography variant="body3" component="p">
              Search for and Save Books of Interest
            </Typography>
          </div>
        </Paper>
      </Grid>
    </div>
  );
};
