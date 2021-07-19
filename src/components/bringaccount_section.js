import React, { Component, useRef, useEffect } from 'react';
import { Typography, Button, Box, Grid, Card, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from '../styles/bringaccount_css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BringAccount = (props) => {

  gsap.registerPlugin(ScrollTrigger);

  const { classes } = props;
  const ref = useRef(null);
  
  useEffect(() => {
    const element = ref.current;
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": function() {
        const tl = gsap.timeline();
        tl.to(
          '.BringAccount-pin_image-73',
          {
            y: 450,
            scale: 1,
            duration: 2,
            scrollTrigger: {
              trigger: ".BringAccount-bringaccount_phone-74",
              start: "top center",
              end: "top top",
              scrub: true,
            }
          }
        );
        tl.to(".BringAccount-bringaccount_phone_back-75", {
          scale: 10,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: ".BringAccount-bringaccount_phone-74",
            start: "center center",
            end: "top top",
            scrub: true,
          }
        });
      },
      "(min-width: 421px) and (max-width: 768px)": function() {
        const tl = gsap.timeline();
        tl.to(
          '.BringAccount-pin_image-73',
          {
            y: 250,
            scale: 1,
            duration: 2,
            scrollTrigger: {
              trigger: ".BringAccount-bringaccount_phone-74",
              start: "center bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(".BringAccount-bringaccount_phone_back-75", {
          scale: 10,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: ".BringAccount-bringaccount_phone-74",
            start: "center center",
            end: "top top",
            scrub: true,
          }
        });
      },
      "(min-width: 375px) and (max-width: 420px)": function() {
        const tl = gsap.timeline();
        tl.to(
          '.BringAccount-pin_image-73',
          {
            y: 350,
            scale: 1,
            duration: 2,
            scrollTrigger: {
              trigger: ".BringAccount-bringaccount_phone-74",
              start: "top center",
              end: "top top",
              scrub: true,
            }
          }
        );
        tl.to(".BringAccount-bringaccount_phone_back-75", {
          scale: 10,
          duration: 2,
          opacity: 0,
          scrollTrigger: {
            trigger: ".BringAccount-bringaccount_phone-74",
            start: "center center",
            end: "top top",
            scrub: true,
          }
        });
      },
    });
  }, []);

  return (
    <React.Fragment>
      <Grid className={ classes.bringaccount_des }>
        <Typography className={ classes.bringaccount_heading } variant="h4">
          Bring Your Social Accounts To Real Life Using Reach Top
        </Typography>
        <Typography className={ classes.bringaccount_description } variant="body2">
          Transfer all your social accounts to a portable NFC Pins - Cards - Key Chains
        </Typography>
      </Grid>

      <Grid className={ classes.bringaccount_pin }>
        <img src="/assets/img/whitepin.png" className={ classes.pin_image } />
      </Grid>

      <Grid className={ classes.bringaccount_phone }>
        <img src="/assets/img/green_back.png" className={ classes.bringaccount_phone_back_img } />
        <img src="/assets/img/circle.png" className={ classes.bringaccount_phone_back } />
      </Grid>

      <Grid className={ classes.reach_des }>
        <Typography className={ classes.reach_heading } variant="h4">
          Get Reach Top
        </Typography>
        <Typography className={ classes.reach_description } variant="body2">
          Fastest way to share your social media and contact info
        </Typography>
      </Grid>

      <Grid>
        <Button variant="contained" color="primary" className={ classes.buy_button}>
          Buy now
        </Button>
      </Grid>

      <Grid className={ classes.actions } container>
        <Grid sm={12} xs={12} md={6} xl={3} lg={3}>
          <Box boxShadow={5} className={ classes.card }>
            <img src="/assets/img/business-card.png" />
            <Typography variant="h5" className={ classes.typo_h5 }>
              Digital Business Card
            </Typography>
            <Typography variant="body2" className={ classes.typo_body2 }>
              Users can access all your contact details by scanning your tag.
            </Typography>
          </Box>
        </Grid>
        <Grid sm={12} xs={12} md={6} xl={3} lg={3}>
          <Box boxShadow={5} className={ classes.card }>
            <img src="/assets/img/facebook.png" />
            <Typography variant="h5" className={ classes.typo_h5 }>
              Social Accounts
            </Typography>
            <Typography variant="body2" className={ classes.typo_body2 }>
              You can add any social account page to your card.
            </Typography>
          </Box>
        </Grid>
        <Grid sm={12} xs={12} md={6} xl={3} lg={3}>
          <Box boxShadow={5} className={ classes.card }>
            <img src="/assets/img/share.png" />
            <Typography variant="h5" className={ classes.typo_h5 }>
              Control Your Information
            </Typography>
            <Typography variant="body2" className={ classes.typo_body2 }>
              You have full access to share selected social media with users.
            </Typography>
          </Box>
        </Grid>
        <Grid sm={12} xs={12} md={6} xl={3} lg={3}>
          <Box boxShadow={5} className={ classes.card }>
            <img src="/assets/img/network.png" />
            <Typography variant="h5" className={ classes.typo_h5 }>
              Get Connected
            </Typography>
            <Typography variant="body2" className={ classes.typo_body2 }>
              Get users see all your social and professional profiles by one scan.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(BringAccount);