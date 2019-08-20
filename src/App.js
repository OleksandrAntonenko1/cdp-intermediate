import React from 'react';
import CourseForm from "./routes/CourseForm";
import Courses from "./routes/Courses";
import Login from "./routes/Login";
import NoMatch from "./routes/NoMatch";
import Header from './components/Header/Header'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Container fluid>
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
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}
