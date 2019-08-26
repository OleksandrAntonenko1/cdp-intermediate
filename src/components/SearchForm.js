import React from "react";
import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import Icon from "@material-ui/icons/Spa";

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    margin: theme.spacing(1)
  },
  icon: {
    marginRight: theme.spacing(2)
  }
}));

const SearchForm = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.form} component="div">
      <Grid item xs component="div">
        <form>
          <TextField
            id="standard-textarea"
            className={classes.textField}
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            type="submit"
          >
            Search
          </Button>
        </form>
      </Grid>
      <Grid item component="div">
        <Button variant="contained" className={classes.button} type="submit">
          <Icon className={classes.icon} />
          Add new course
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchForm;
