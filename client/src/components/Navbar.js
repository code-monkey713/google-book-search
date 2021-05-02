import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyle = makeStyles({
  link: {
    color: 'white',
    padding: '0px 15px 0px 15px',
  },
});

export const Navbar = () => {
  const classes = useStyle();

  return (
    <AppBar position="static">
      <Toolbar className={classes.blue}>
        <Typography variant="h6" className={classes.title}>
          Google Books
        </Typography>

        <Link href="/" className={classes.link}>
          Search
        </Link>

        <Link href="/saved" className={classes.link}>
          Saved
        </Link>
      </Toolbar>
    </AppBar>
  );
};
