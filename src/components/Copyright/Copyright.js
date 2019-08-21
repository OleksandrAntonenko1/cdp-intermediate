import React from 'react';
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const Copyright = props => {
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
    >
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://material-ui.com/"
      >
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Built with '}
      <Link
        color="inherit"
        href="https://material-ui.com/"
      >
        Material-UI.
      </Link>
    </Typography>
  );
};

Copyright.propTypes = {};

export default Copyright;
