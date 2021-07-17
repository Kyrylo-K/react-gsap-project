export const styles = {
  mediagroup: {
    position: "relative",
    maxWidth: "708px",
    margin: "auto",
    width: "80%",
    height: "72px"
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
    // paddingLeft: 70,
    width: "100%",
  },
  line_top_img: {
    height: 164,
    width: "100%"
  },
  line_bottom: {
  },
  line_bottom_img: {
    height: 1100,
    width: "100%",
    paddingTop: 0
  },
  media_phone: {
    marginTop: "660px",
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
  '@media screen and (min-width: 640px)': {
    line_top_img: {
      paddingLeft: 72,
      width: 708
    },
    line_bottom: {
      paddingLeft: 72
    },
  },
  '@media screen and (max-width: 640px)': {
    mediaicons: {
      padding: "0px 20px"
    },
    media_phone: {
      marginTop: "360px",
    },
    line_top_img: {
      width: "80%"
    },
  },
  '@media screen and (max-width: 560px)': {
    mediaicons: {
      padding: "0px 10px"
    },
    phone_form: {
      width: 293,
      height: 430,
      backgroundImage: `url(${"/assets/img/frame1927.png"})`,
      backgroundSize: "contain"
    }
  },
  '@media screen and (max-width: 520px)': {
    mediaicons: {
      width: 40,
      height: 40
    },
    media_phone: {
      width: 166,
      height: 305,
      margin: "auto",
      marginTop: 360,
      overflow: "hidden"
    },
    media_icon: {
      height: 25,
      width: 110
    },
    phone_form: {
      width: 243,
      height: 330,
      paddingTop: 100
    },
    socialmedia: {
      paddingBottom: 100
    },
    line_top_img: {
      height: 164,
      width: "80%"
    },
  },
};