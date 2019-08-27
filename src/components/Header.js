import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import MenuIcon from "@material-ui/icons/Menu";
import { Link as routerLink } from "react-router-dom";
import {
  Breadcrumbs,
  IconButton,
  Typography,
  Toolbar,
  AppBar,
  Link
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  breadcrumbs: {
    color: theme.palette.common.white,
    margin: "auto"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          component={routerLink}
          aria-label="menu"
          to="/courses"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Breadcrumbs
          className={classes.breadcrumbs}
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
          component="div"
        >
          <Link color="inherit" to="/courses" component={routerLink}>
            Courses
          </Link>
          <Typography>Breadcrumb</Typography>
        </Breadcrumbs>
        <Link
          className={classes.menuButton}
          component={routerLink}
          color="inherit"
          to="/login"
        >
          Login
        </Link>
        <Link component={routerLink} color="inherit" to="/login">
          Logout
        </Link>
      </Toolbar>
    </AppBar>
  );
}
