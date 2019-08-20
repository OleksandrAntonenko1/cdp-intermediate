import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

const Login = props => {
  return (
    <Row >
      <Col xs='6'>
        <Form>
          <Form.Group controlId="login">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="text"
              placeholder="Login"
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
          >
            Submit
            </Button>
        </Form>
      </Col>
    </Row>
  );
};

Login.propTypes = {

};

export default Login;
