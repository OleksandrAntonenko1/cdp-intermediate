import React from "react";
import CourseForm from "./routes/CourseForm";
import Courses from "./routes/Courses";
import Login from "./routes/Login";
import NoMatch from "./routes/NoMatch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { Switch, Route, BrowserRouter } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <BrowserRouter>
        <div className={classes.root}>
          <Header />
          <Container component="main" maxWidth="lg">
            <Switch>
              <Route path={"/login"} exact component={Login} />
              <Route path={`/courses`} exact component={Courses} />
              <Route path={`/courses/new`} exact component={CourseForm} />
              <Route path={`/courses/:id`} exact component={CourseForm} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </BrowserRouter>
    </MuiPickersUtilsProvider>
  );
};
