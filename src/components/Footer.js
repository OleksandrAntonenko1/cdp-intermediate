import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(3),
    marginTop: "auto"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://material-ui.com/" component="a">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {". Built with "}
        <Link color="inherit" href="https://material-ui.com/" component="a">
          Material-UI.
        </Link>
      </Typography>
    </footer>
  );
}
