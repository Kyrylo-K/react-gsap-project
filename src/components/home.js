import React, { Component, useLayoutEffect, useState } from 'react';

import Header from './header';
import ConnectMedia from './connectmedia_section';
import SocialMedia from './socialmedia_section';
import Grab from './grab_section';
import BringAccount from './bringaccount_section';
import Footer from './footer';
import DownLoad from './download_section';

const Home = (props) => {
  return (
    <React.Fragment>
      <Header />
      <ConnectMedia />
      <SocialMedia />
      <Grab />
      <BringAccount />
      <DownLoad />
      <Footer />
    </React.Fragment>
  );
};

export default Home;