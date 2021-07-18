import React, { Component, useRef, useEffect } from 'react';
import { Typography, Button, Box, Grid, CardMedia, Card, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from '../styles/social_css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const SocialMedia = (props) => {

  gsap.registerPlugin(ScrollTrigger);

  const { classes } = props;
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const tl = gsap.timeline();

    tl.to(
      '.SocialMedia-mediaicons-23',
      {
        y: 200,
        duration: 2,
        scrollTrigger: {
          trigger: ".ConnectMedia-connect-16",
          start: "top top",
          end: "center top",
          scrub: true,
        }
      }
    );

    tl.to(
      '.SocialMedia-line_top_img-27',
      {
        height: 20,
        paddingTop: 144,
        duration: 2,
        scrollTrigger: {
          trigger: ".ConnectMedia-connect-16",
          start: "top top",
          end: "center top",
          scrub: true,
        }
      }
    );

    tl.to(
      '.SocialMedia-mediaicons-23',
      {
        left: "50%",
        scrollTrigger: {
          trigger: ".ConnectMedia-connect-16",
          start: "center top",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    tl.to(
      '.SocialMedia-line_top_img-27',
      {
        width: 0,
        scrollTrigger: {
          trigger: ".ConnectMedia-connect-16",
          start: "center top",
          end: "bottom top",
          scrub: true,
        }
      }
    );

    tl.to(
      '.SocialMedia-media_music-33',
      {
        opacity: 1,
        scrollTrigger: {
          trigger: ".SocialMedia-media_phone-30",
          start: "center center",
          end: "top top",
          scrub: true,
        }
      }
    )
    .to(
      '.SocialMedia-media_linkedin-34',
      {
        opacity: 1,
        y: 60,
        scrollTrigger: {
          trigger: ".SocialMedia-media_phone-30",
          start: "center center",
          end: "top top",
          scrub: true,
        }
      }
    )
    .to(
      '.SocialMedia-media_call-35',
      {
        opacity: 1,
        y: 120,
        scrollTrigger: {
          trigger: ".SocialMedia-media_phone-30",
          start: "center center",
          end: "top top",
          scrub: true,
        }
      }
    )
    .to(
      '.SocialMedia-media_alarm-36',
      {
        opacity: 1,
        y: 180,
        scrollTrigger: {
          trigger: ".SocialMedia-media_phone-30",
          start: "center center",
          end: "top top",
          scrub: true,
        }
      }
    )
    .to(
      '.SocialMedia-media_facebook-37',
      {
        opacity: 1,
        y: 240,
        scrollTrigger: {
          trigger: ".SocialMedia-media_phone-30",
          start: "center center",
          end: "top top",
          scrub: true,
        }
      }
    );

    ScrollTrigger.matchMedia({
      "(min-width: 1024px)": function () {
        const tl = gsap.timeline();
        tl.to(
          '.SocialMedia-mediaicons-23',
          {
            y: 750,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "top center",
              end: "center center",
              scrub: true,
            }
          }
        );
      },
      "(min-width: 375px) and (max-width: 768px)": function() {
        const tl = gsap.timeline();
        tl.to(
          '.SocialMedia-line_bottom_img-29',
          {
            height: 0,
            paddingTop: 900,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "top bottom",
              end: "top center",
              scrub: true,
            }
          }
        );
        tl.to(
          '.SocialMedia-mediaicons-23',
          {
            y: 1100,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "top bottom",
              end: "top center",
              scrub: true,
            }
          }
        );

        tl.to(
          '.SocialMedia-media_linkedin-34',
          {
            opacity: 1,
            y: 30,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "center center",
              end: "top top",
              scrub: true,
            }
          }
        )
        .to(
          '.SocialMedia-media_call-35',
          {
            opacity: 1,
            y: 60,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "center center",
              end: "top top",
              scrub: true,
            }
          }
        )
        .to(
          '.SocialMedia-media_alarm-36',
          {
            opacity: 1,
            y: 90,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "center center",
              end: "top top",
              scrub: true,
            }
          }
        )
        .to(
          '.SocialMedia-media_facebook-37',
          {
            opacity: 1,
            y: 120,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "center center",
              end: "top top",
              scrub: true,
            }
          }
        );
      },
      "(max-width: 1240px) and (min-width: 768px)": function() {
        const tl = gsap.timeline();

        tl.to(
          '.SocialMedia-mediaicons-23',
          {
            y: 1300,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "top bottom",
              end: "top center",
              scrub: true,
            }
          }
        );

        tl.to(
          '.SocialMedia-line_bottom_img-29',
          {
            height: 0,
            paddingTop: 1100,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "top bottom",
              end: "top center",
              scrub: true,
            }
          }
        );
      },
      "(min-width: 1240px)": function() {
        const tl = gsap.timeline();

        tl.to(
          '.SocialMedia-mediaicons-23',
          {
            y: 1300,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "center bottom",
              end: "top center",
              scrub: true,
            }
          }
        );

        tl.to(
          '.SocialMedia-line_bottom_img-29',
          {
            height: 0,
            paddingTop: 1100,
            scrollTrigger: {
              trigger: ".SocialMedia-media_phone-30",
              start: "center bottom",
              end: "top center",
              scrub: true,
            }
          }
        );
      },
    });

  }, []);

  return (
    <Grid className={ classes.socialmedia } ref={ ref }>
      <Grid className={ classes.mediagroup }>
        <img src="/assets/img/frame8.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame7.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame6.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame5.png" className={ classes.mediaicons }/>
        <img src="/assets/img/frame4.png" className={ classes.mediaicons }/>
      </Grid>
      <Grid className={ classes.line_group_top }>
        <Grid className={ classes.line_top }>
          <img src="/assets/img/line_top.png" className={ classes.line_top_img }/>
        </Grid>
      </Grid>
      <Grid className={ classes.line_group_bottom }>
        <Grid className={ classes.line_bottom }>
          <img src="/assets/img/line_bottom.png" className={ classes.line_bottom_img } />
        </Grid>
      </Grid>
      <Grid className={ classes.media_phone }>
        <Grid className={ classes.phone_form }>
          <img src="/assets/img/media_music.png" className={ `${classes.media_icon} ${classes.media_music}` }/>
          <img src="/assets/img/media_linkedin.png" className={ `${classes.media_icon} ${classes.media_linkedin}` }/>
          <img src="/assets/img/media_call.png" className={ `${classes.media_icon} ${classes.media_call}` }/>
          <img src="/assets/img/media_alarm.png" className={ `${classes.media_icon} ${classes.media_alarm}` }/>
          <img src="/assets/img/media_facebook.png" className={ `${classes.media_icon} ${classes.media_facebook}` }/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(SocialMedia);