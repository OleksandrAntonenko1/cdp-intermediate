import React from "react";
import PropTypes from "prop-types";
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
import { Link as routerLink } from "react-router-dom";

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

const CourseCard = ({ title, duration, id, description, createDate }) => {
  const classes = useStyles();
  const formattedDate = new Date(createDate).toLocaleDateString();
  const formattedDuration =  `${(parseInt(duration, 10)/ 60).toFixed()} hour ${duration % 60} min`;

  return (
    <Card className={classes.card}>
      <Grid container component="div">
        <Grid item component="div" xs={9}>
          <CardHeader
            title={
              <Grid container component="div">
                <Grid item xs component="div">
                  <Typography variant="h5" component="h2">
                    {title}
                  </Typography>
                </Grid>
                <Grid item component="div">
                  <Typography color="textSecondary">{formattedDuration}</Typography>
                </Grid>
              </Grid>
            }
            subheader={formattedDate}
          />
          <CardContent>{description}</CardContent>
        </Grid>
        <Grid item component="div" xs>
          <CardActions>
            <Grid container component="div">
              <Grid item xs={12} component="div">
                <Button
                  component={routerLink}
                  variant="outlined"
                  className={classes.button}
                  type="button"
                  to={`/courses/${id}`}
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
                  onClick={() => {
                    console.log("delete");
                  }}
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
};

CourseCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  createDate: PropTypes.string.isRequired
};

export default CourseCard;
