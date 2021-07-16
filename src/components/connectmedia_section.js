import React, { Component, useEffect } from 'react';
import { Typography, Button, Box, Grid, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from '../styles/connect_css';

const ConnectMedia = (props) => {

  const { classes } = props;

  return (
    <Grid className={ classes.connect }>
      <Typography variant="h4" className={ classes.connect_heading }>
        Connect All Your Social Media In One Link
      </Typography>
      <Typography variant="body2" className={ classes.connect_desc }>
        Connect all your social media in one link
      </Typography>
      <Button variant="contained" color="primary" id="free_btn" className={ classes.connect_button}>
        Get started for free
      </Button>
      <Typography className={ classes.connect_link}>
        Have Reach account?
        <Link className={ classes.connect_link_log }>Log In</Link>
      </Typography>
    </Grid>
  );
};

export default withStyles(styles)(ConnectMedia);