import React from 'react';
import CourseForm from "./routes/CourseForm";
import Courses from "./routes/Courses";
import Login from "./routes/Login";
import NoMatch from "./routes/NoMatch";

import './App.css';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
