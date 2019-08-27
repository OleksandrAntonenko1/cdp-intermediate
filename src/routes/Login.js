import React from "react";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography
} from "@material-ui/core";
import useStyles from "../helpers/commonStyles";

const Login = () => {
  const classes = useStyles();

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Login
        </Typography>
        <Grid container spacing={3} component="div">
          <Grid item xs={12} component="div">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
          </Grid>
          <Grid item xs={12} component="div">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item xs={12} component="div">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </main>
  );
};

Login.propTypes = {};

export default Login;
