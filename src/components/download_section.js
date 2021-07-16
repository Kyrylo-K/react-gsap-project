import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from "../styles/download_css";

const DownLoad = (props) => {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid container className={ classes.download_section }>
        <Grid sm={12} xs={12} md={12} xl={6} lg={6} className={ classes.download_phone_img }>
          <img src="assets/img/phone.png"/>
        </Grid>
        <Grid sm={12} xs={12} md={12} xl={6} lg={6} className={ classes.download_des }>
          <Typography className={ classes.download_heading } variant="h5">
            Download Reach app & join the community now!
          </Typography>
          <Typography className={ classes.download_description } variant="body2">
            Join thousand of brands & influencers and reach them
          </Typography>
          <Grid className={ classes.downloads }>
            <Button><img src="/assets/img/appstore.png" /></Button>
            <Button><img src="/assets/img/googleplay.png" /></Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(DownLoad);