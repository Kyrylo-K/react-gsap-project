import React, { Component, useRef, useEffect } from 'react';
import { Typography, Button, Box, Grid, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from '../styles/grab_css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Grab = (props) => {

  gsap.registerPlugin(ScrollTrigger);

  const { classes } = props;
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const tl = gsap.timeline();

    tl.to(
      '.Grab-grab_img_paypal-44',
      {
        opacity: 1,
        x: -200,
        y: -10,
        duration: 1,
        scrollTrigger: {
          trigger: ".Grab-grab-39",
          start: "top bottom",
          end: "center center",
          scrub: true,
        }
      }
    );
    tl.to(
      '.Grab-grab_img_blog-45',
      {
        opacity: 1,
        y: -200,
        x: 100,
        duration: 1,
        scrollTrigger: {
          trigger: ".Grab-grab-39",
          start: "top bottom",
          end: "center center",
          scrub: true,
        }
      }
    );
    tl.fromTo(
      '.Grab-grab_img_phone_background-47',
      {
        x: 0
      },
      {
        x: -230,
        duration: 1,
        scrollTrigger: {
          trigger: ".Grab-grab_img_phone_src-46",
          start: "center bottom",
          end: "center top",
          scrub: true,
        }
      }
    );
    tl.to(
      '.Grab-social_contact_detail-52',
      {
        left: 100,
        opacity: 1,
        duration: 0.1,
        scrollTrigger: {
          trigger: ".Grab-social_contact_form-48",
          start: "center bottom",
          end: "center center",
          scrub: true,
        }
      }
    );
    tl.to(
      '.Grab-social_contact_more-56',
      {
        left: 225,
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".Grab-social_contact_form-48",
          start: "center bottom",
          end: "center center",
          scrub: true,
        }
      }
    );
    tl.to(
      '.Grab-social_contact_twitter-55',
      {
        left: 150,
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".Grab-social_contact_form-48",
          start: "top center",
          end: "center center",
          scrub: true,
        }
      }
    );
    tl.to(
      '.Grab-social_contact_instagram-54',
      {
        left: 75,
        opacity: 1,
        duration: 0.2,
        scrollTrigger: {
          trigger: ".Grab-social_contact_form-48",
          start: "top center",
          end: "center center",
          scrub: true,
        }
      }
    );
    ScrollTrigger.matchMedia({
      "(min-width: 375px) and (max-width: 767px)": function() {
        const tl = gsap.timeline();

        tl.fromTo(
          '.Grab-grab_img_phone_background-47',
          {
            x: 0
          },
          {
            x: -133,
            duration: 1,
            scrollTrigger: {
              trigger: ".Grab-grab_img_phone_src-46",
              start: "center bottom",
              end: "center top",
              scrub: true,
            }
          }
        );
        tl.to(
          '.Grab-social_contact_detail-52',
          {
            left: 70,
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: ".Grab-social_contact_form-48",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.Grab-social_contact_more-56',
          {
            left: 150,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
              trigger: ".Grab-social_contact_form-48",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.Grab-social_contact_twitter-55',
          {
            left: 100,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
              trigger: ".Grab-social_contact_form-48",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.Grab-social_contact_instagram-54',
          {
            left: 50,
            opacity: 1,
            duration: 0.2,
            scrollTrigger: {
              trigger: ".Grab-social_contact_form-48",
              start: "bottom bottom",
              end: "center center",
              scrub: true,
            }
          }
        );
      }
    });
  }, []);

  return (
    <React.Fragment>
      <Grid className={ classes.grab } container >
        <Grid className={ classes.grab_img } sm={12} xs={12} md={12} xl={6} lg={12}>
          <Grid className={ classes.grab_img_grab }>
            <img src="/assets/img/group1966.png" className={ classes.grab_img_src }/>
            <img src="/assets/img/frame2216.png" className={ classes.grab_img_paypal } />
            <img src="/assets/img/frame2219.png" className={ classes.grab_img_blog } />
          </Grid>
        </Grid>
        <Grid  className={ classes.grab_des } sm={12} xs={12} md={12} xl={6} lg={12}>
          <Typography variant="h4" className={ classes.grab_heading }>
            Grab all your links & social media in one place
          </Typography>
          <Typography variant="body2" className={ classes.grab_description }>
            Add social media & unlimited custom links such as ( personal website - personal blog - ordering portal - etc...)
          </Typography>
        </Grid>
      </Grid>

      <Grid className={ `${classes.grab} ${classes.grab_personalize} `} container >
        <Grid  className={ classes.grab_des } sm={12} xs={12} md={12} xl={6} lg={12}>
          <Typography variant="h4" className={ classes.grab_heading }>
            Personalize your page appearance the way you like
          </Typography>
          <Typography variant="body2" className={ classes.grab_description }>
            You can customize your profile appearance by changing profile background, fonts and social buttons styles.
          </Typography>
        </Grid>
        <Grid className={ classes.grab_img } sm={12} xs={12} md={12} xl={6} lg={12}>
          <img src="/assets/img/personalize_left.png" className={ classes.grab_img_phone_left } />
          <Grid className={ `${classes.grab_img_phone_src} ${classes.grab_img_src}` } >
            <img src="/assets/img/phone_background.png" className={ classes.grab_img_phone_background } />
          </Grid>
          <img src="/assets/img/personalize_right.png" className={ classes.grab_img_phone_right } />
        </Grid>
      </Grid>

      <Grid className={ classes.grab } container >
        <Grid className={ classes.grab_img } sm={12} xs={12} md={12} xl={6} lg={12}>
          <Grid className={ classes.social_contact_form }>
            <Grid className={ classes.social_contact_form_top }>
              <img src="/assets/img/social_contact_person.png" className={ classes.social_contact_person } />
              <img src="/assets/img/social_contact_detail.png" className={ classes.social_contact_detail } />
            </Grid>
            <Grid className={ classes.social_contact_form_bottom }>
              <img src="/assets/img/social_contact_facebook.png" className={ classes.social_contact_facebook } />
              <img src="/assets/img/social_contact_instagram.png" className={ classes.social_contact_instagram } />
              <img src="/assets/img/social_contact_twitter.png" className={ classes.social_contact_twitter } />
              <img src="/assets/img/social_contact_more.png" className={ classes.social_contact_more } />
            </Grid>
          </Grid>
        </Grid>
        <Grid  className={ classes.grab_des } sm={12} xs={12} md={12} xl={6} lg={12}>
          <Typography variant="h4" className={ classes.grab_heading }>
            Make people access your social contact in one click
          </Typography>
          <Typography variant="body2" className={ classes.grab_description }>
            People can save your prefared social links to their phone contacts with one click.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Grab);