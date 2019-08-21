import React from 'react';
import CourseForm from "./routes/CourseForm";
import Courses from "./routes/Courses";
import Login from "./routes/Login/Login";
import NoMatch from "./routes/NoMatch";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Container from '@material-ui/core/Container';
import {makeStyles} from '@material-ui/core/styles';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
  }
}));

export default () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header/>
        <Container
          component="main"
          maxWidth="xs"
        >
          <Switch>
            <Route
              path={'/'}
              exact
              component={Login}
            />
            <Route
              path={`/courses`}
              exact
              component={Courses}
            />
            <Route
              path={`/add-course`}
              exact
              component={CourseForm}
            />
            <Route component={NoMatch}/>
          </Switch>
        </Container>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
