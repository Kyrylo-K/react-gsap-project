import React, { Component } from 'react';
import { Typography, Button, Box, Grid, Card, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from '../styles/footer_css';

const Footer = (props) => {

  const { classes } = props;

  return (
    <React.Fragment>
      <Grid className={ classes.footer_top } container>
        <Grid className={ classes.footer_logo } sm={12} xs={12} md={6} xl={2} lg={2}>
          <img src="/assets/img/logo_footer.png"/>
        </Grid>
        <Grid className={ classes.footer_discover} sm={12} xs={12} md={6} xl={3} lg={3}>
          <Typography className={ classes.footer_heading}>
            Discover
          </Typography>
          <Grid container>
            <Grid sm={6} xs={6} md={6} xl={6} lg={6}>
              <Typography className={ classes.footer_link}><Link to="#">Electronics</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Restaurants</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Shopping</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Food & Beverage</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Clinics</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Perfumes</Link></Typography>
            </Grid>
            <Grid sm={6} xs={6} md={6} xl={6} lg={6}>
              <Typography className={ classes.footer_link}><Link to="#">Services</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Education</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Health & Beauty</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">E-commerce</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Fitness</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Cafe</Link></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm={0} xs={0} md={0} xl={1} lg={1} />
        <Grid className={ classes.footer_discover} sm={12} xs={12} md={6} xl={3} lg={3}>
          <Typography className={ classes.footer_heading}>
            Offers
          </Typography>
          <Grid container>
            <Grid sm={6} xs={6} md={6} xl={6} lg={6}>
              <Typography className={ classes.footer_link}><Link to="#">Cafe</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">E-commerce</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Education</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Food & Beverage</Link></Typography>
            </Grid>
            <Grid sm={6} xs={6} md={6} xl={6} lg={6}>
              <Typography className={ classes.footer_link}><Link to="#">Health & Beauty</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Perfumes</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Restaurants</Link></Typography>
              <Typography className={ classes.footer_link}><Link to="#">Shopping</Link></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid sm={0} xs={0} md={0} xl={1} lg={1} />
        <Grid className={ classes.footer_discover} sm={12} xs={12} md={4} xl={2} lg={2}>
          <Grid container>
            <Typography className={ classes.footer_heading}>
              Get In Touch
            </Typography>
          </Grid>
          <Grid container className={ classes.get_touch }>
            <Typography className={ classes.footer_link}><Link to="#">info@reachnetwork.co</Link></Typography>
            <Link to="#"><i class="fab fa-facebook-f"></i></Link>
            <Link to="#"><i class="fab fa-instagram"></i></Link>
            <Link to="#"><i class="fab fa-twitter"></i></Link>
            <Link to="#"><i class="fab fa-linkedin-in"></i></Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid className={ classes.footer_medium } container>
        <Box>
          <Button><img src="/assets/img/appstore.png" /></Button>
        </Box>
        <Box flexGrow={1}>
          <Button><img src="/assets/img/googleplay.png" /></Button>
        </Box>
        <Box>
          <Typography variant="body2" className={ classes.footer_policy }>
            Terms of use <i class="fas fa-circle"></i> Privacy Policy
          </Typography>
        </Box>
      </Grid>
      <hr className={ classes.hr }/>
      <Typography variant="body2" className={ classes.footer_bottom }>
        @ 2021 Reach Network, All Rights Reserved
      </Typography>
    </React.Fragment>
  );
};

export default withStyles(styles)(Footer);