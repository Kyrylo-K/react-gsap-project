import React, { Component, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Grid, Box, withStyles} from '@material-ui/core';
import { BrowserRouter as Switch, Route, Link } from 'react-router-dom';

import { styles } from "../styles/header_css";

const Header = (props) => {
  const { classes } = props;

  const [isOpen, setOpened] = useState(false);

  function menuClicked(e) {
    setOpened(!isOpen);
  }

  const Menu = () => {
    return (
      <Grid className={ classes.myLinks} >
        <ul>
          <li><Link href="#">Pricing</Link></li>
          <li><Link href="#">Log In</Link></li>
        </ul>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid className={ classes.mobile} >
        <AppBar className={ classes.appBar } position="static">  
          <Toolbar>
            <Box>
              <img src="/assets/img/logo.png"/>
            </Box>
            <Box className={ classes.pricing }>
              <Link to='#' className={ `${classes.pricing_link} ${classes.link}` }>
                Pricing
              </Link>
            </Box>
            <Box className={ classes.login }>
              <Link to='#' className={ `${classes.login_link} ${classes.link}` }>
                Log in
              </Link>
            </Box>
            <Box>
              <Button variant="contained" color="primary" href="#" className={ classes.sign_btn }>
                Sign up free
              </Button>
            </Box>
            <Box>
              <i className={`fas fa-bars ${classes.bars}`} onClick={menuClicked}></i>
            </Box>
          </Toolbar>
        </AppBar>

        {isOpen && <Menu />}
      </Grid>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);