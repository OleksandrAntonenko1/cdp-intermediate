import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Icon from '@material-ui/icons/Spa';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
}));

const Header = props => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Icon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {

};

export default Header;
