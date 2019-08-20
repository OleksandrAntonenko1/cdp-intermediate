import React from 'react';
import PropTypes from 'prop-types';
import {
  Navbar,
} from 'react-bootstrap';

const Header = props => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logo192.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        {' React Bootstrap'}
      </Navbar.Brand>
    </Navbar>
  );
};

Header.propTypes = {

};

export default Header;
