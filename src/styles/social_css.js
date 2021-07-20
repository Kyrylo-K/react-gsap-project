export const styles = {
  mediagroup: {
    position: "relative",
    maxWidth: "708px",
    margin: "auto",
    width: "80%",
    height: "72px",
  },
  mediaicons: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: "translateX(-50%)",
    "&:nth-child(2)": {
      left: "25%",
    },
    "&:nth-child(3)": {
      left: "50%",
    },"&:nth-child(4)": {
      left: "75%",
    },"&:nth-child(5)": {
      left: "100%",
    },
  },
  line_group_top: {
    display: "flex",
    justifyContent: "center",
    height: 120
  },
  line_group_bottom: {
    display: "flex",
    justifyContent: "center",
    height: 450
  },
  line_top: {
    width: "100%",
  },
  line_mid: {
    width: "100%",
  },
  line_top_img: {
    height: 164,
    maxWidth: 708
  },
  line_mid_img: {
    maxWidth: 708
  },
  line_bottom: {
  },
  line_bottom_img: {
    height: 1100,
    width: 6,
    paddingTop: 0,
    paddingLeft: 4,
  },
  media_phone: {
    marginTop: "60px",
    marginBottom: "150px",
    display: "flex",
    justifyContent: "center"
  },
  phone_form: {
    backgroundImage: `url(${"/assets/img/frame1927.png"})`,
    width: 343,
    height: 430,
    paddingTop: 200,
    position: "relative"
  },
  media_icon: {
    position: "absolute",
    opacity: 0,
    left: 30
  },
  media_music: {},
  media_linkedin: {},
  media_call: {},
  media_alarm: {},
  media_facebook: {},
  '@media screen and (min-width: 1970px) and (max-width: 2880px)': {
    line_top_img: {
      // paddingLeft: 72,
      width: "80%",
      height: 350
    },
    line_bottom_img: {
      paddingLeft: 4,
    },
    media_phone: {
      // paddingLeft: 72
    },
    line_mid_img: {
      // paddingLeft: 72,
      width: "80%"
    },
    line_group_top: {
      height: 350
    },
    line_group_bottom: {
      height: 450
    }
  },
  '@media screen and (min-width: 768px) and (max-width: 1969px)': {
    line_top_img: {
      paddingLeft: 72,
      width: "80%",
      height: 150
    },
    line_bottom: {
      paddingLeft: 72,
    },
    line_bottom_img: {
      paddingLeft: 4,
    },
    line_mid: {
      paddingLeft: 36,
    },
    media_phone: {
      paddingLeft: 72
    },
    line_mid_img: {
      width: "80%",
    },
    line_group_top: {
      height: 150
    },
    line_group_bottom: {
      height: 250
    },
  },
  '@media screen and (min-width: 500px) and (max-width: 700px)': {
    line_top_img: {
      height: 300,
    },
    line_group_top: {
      height: 300
    },
    line_group_bottom: {
      height: 500
    },
    line_group_bottom: {
      paddingTop: 0,
      height: 350
    }
  },
  '@media screen and (max-width: 500px)': {
    mediaicons: {
      padding: "0px 20px"
    },
    media_phone: {
      marginTop: "60px",
    },
    line_top_img: {
      width: "80%"
    },
    line_mid_img: {
      width: "80%",
      paddingTop: 40,
    },
    mediagroup: {
      height: 40
    },
    line_bottom_img: {
      height: 400,
      width: 4
    },
    line_group_bottom: {
      height: 300
    }
  },
  '@media screen and (max-width: 767px)': {
    mediaicons: {
      padding: "0px 20px"
    },
    media_phone: {
      marginTop: "60px",
    },
    line_top_img: {
      width: "80%"
    },
    line_mid_img: {
      width: "80%"
    },
    mediagroup: {
      height: 40
    },
    line_bottom_img: {
      height: 400,
      width: 4
    },
    line_group_bottom: {
      height: 300
    }
  },
};