import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Paper, Grid, TextField } from "@material-ui/core";
import { KeyboardDatePicker } from "@material-ui/pickers";
import TransferList from "../components/TransferList";
import useCommonStyles from "../helpers/commonStyles";

const useStyles = makeStyles(theme => ({
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1)
  }
}));

export default function Checkout() {
  const classes = useStyles();
  const commonClasses = useCommonStyles();

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  function handleDateChange(date) {
    setSelectedDate(date);
  }

  return (
    <main className={commonClasses.layout}>
      <Paper className={commonClasses.paper}>
        <Typography component="h1" variant="h4" align="center">
          Add new Course
        </Typography>
        <Grid container spacing={3} component="div">
          <Grid item xs={12} component="div">
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={12} component="div">
            <TextField
              required
              id="description"
              name="description"
              label="description"
              multiline
              fullWidth
              autoComplete="description"
            />
          </Grid>
          <Grid item xs={12} component="div">
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="DD/MM/YYYY"
              margin="normal"
              id="date-picker-inline"
              label="Date picker inline"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{ "aria-label": "change date" }}
            />
          </Grid>
          <Grid item xs={12} component="div">
            <TextField
              id="minutes"
              label="minutes"
              value={2}
              onChange={() => {}}
              type="number"
              className={classes.textField}
              InputLabelProps={{ shrink: true }}
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} component="div">
            <TransferList />
          </Grid>
        </Grid>
        <div className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {}}
            className={classes.button}
          >
            Save
          </Button>
          <Button
            onClick={() => {}}
            variant="outlined"
            className={classes.button}
          >
            Cancel
          </Button>
        </div>
      </Paper>
    </main>
  );
}
