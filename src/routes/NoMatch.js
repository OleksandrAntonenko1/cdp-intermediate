import React from "react";
import { Paper, Typography } from "@material-ui/core";
import useStyles from "../helpers/commonStyles";

const NoMatch = () => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h1" align="center">
          404
        </Typography>
        <Typography component="p" variant="h4" align="center">
          This is not the page you are looking for.
        </Typography>
      </Paper>
    </main>
  );
};

export default NoMatch;
