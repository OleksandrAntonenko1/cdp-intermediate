import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Snackbar,
  IconButton
} from "@material-ui/core";
import useStyles from "../helpers/commonStyles";
import { login } from "../redux/authentication/actions";
import validateInput from "../helpers/validations/login";
import CloseIcon from "@material-ui/icons/Close";

const Login = props => {
  const {
    history: { push },
    login
  } = props;
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const onSnackbarClose = () => {
    setErrors({});
  };

  const isValid = () => {
    const { errors, isValid } = validateInput(email, password);

    if (!isValid) {
      setErrors(errors);
    }

    return isValid;
  };

  const onPasswordChange = ({ target: { value } }) => {
    setPassword(value);
  };

  const onEmailChange = ({ target: { value } }) => {
    setEmail(value);
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (isValid()) {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: JSON.stringify({ email, password })
      });
      if (response.status === 200) {
        login();
        push("/courses");
      } else {
        const { error } = await response.json();
        setErrors({ serverError: error });
      }
    }
  };

  return (
    <main className={classes.layout}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h4" align="center">
          Login
        </Typography>
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <Grid container spacing={3} component="div">
            <Grid item xs={12} component="div">
              <TextField
                error={errors.hasOwnProperty("email")}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                helperText={errors.email}
                onChange={onEmailChange}
              />
            </Grid>
            <Grid item xs={12} component="div">
              <TextField
                error={errors.hasOwnProperty("password")}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                helperText={errors.password}
                onChange={onPasswordChange}
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
        </form>
        <Snackbar
          action={[
            <IconButton
              key="close"
              aria-label="close"
              color="inherit"
              onClick={onSnackbarClose}
            >
              <CloseIcon />
            </IconButton>
          ]}
          message={errors.serverError}
          open={errors.hasOwnProperty("serverError")}
        />
      </Paper>
    </main>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(
  null,
  { login }
)(Login);
