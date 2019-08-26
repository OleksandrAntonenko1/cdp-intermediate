import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Breadcrumbs,
  IconButton,
  Button,
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
          aria-label="menu"
          href="/"
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
          <Link color="inherit" href="/courses" component="a">
            Courses
          </Link>
          <Typography>Breadcrumb</Typography>
        </Breadcrumbs>
        <Button color="inherit" href="/">
          Login
        </Button>
        <Button color="inherit" href="/">
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
}
