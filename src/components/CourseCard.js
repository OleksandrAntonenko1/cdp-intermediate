import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardContent,
  CardActions,
  CardHeader,
  Button,
  Card,
  Grid
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 275,
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  button: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(),
    width: "100%"
  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container component="div">
        <Grid item component="div" xs={9} justify="space-between">
          <CardHeader
            title={
              <Grid container component="div">
                <Grid item xs component="div">
                  <Typography variant="h5" component="h2">
                    Course 1
                  </Typography>
                </Grid>
                <Grid item component="div">
                  <Typography color="textSecondary">1h 28m</Typography>
                </Grid>
              </Grid>
            }
            subheader="26/08/2019"
          />
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor enim
            eveniet maiores? Aut beatae et excepturi expedita fugit illum, modi
            nobis provident quas quod reprehenderit rerum sequi temporibus
            voluptas voluptate?
          </CardContent>
        </Grid>
        <Grid item component="div" xs>
          <CardActions>
            <Grid container component="div">
              <Grid item xs={12} component="div">
                <Button
                  variant="outlined"
                  className={classes.button}
                  type="button"
                  href="/add-course"
                >
                  Edit
                </Button>
              </Grid>
              <Grid item xs={12} component="div">
                <Button
                  variant="outlined"
                  color="secondary"
                  className={classes.button}
                  type="button"
                >
                  Delete
                </Button>
              </Grid>
            </Grid>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}
