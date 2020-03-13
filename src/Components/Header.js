import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FabelioLogo from '../fabelio-icon.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src={FabelioLogo} width="48" height="48"/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Price Monitoring
          </Typography>
          <Button component={Link} to="/submission" color="inherit">Submission</Button>
          <Button component={Link} to="/item-list" color="inherit">Item List</Button>
          <Button component={Link} to="/detail/1" color="inherit">Detail</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
