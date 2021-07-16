export const styles = {
  grab: {
    padding: "50px 160px",
  },
  grab_des: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30
  },
  grab_heading: {
    fontFamily: "NunitoSans",
    fontSize: "48px",
    fontWeight: "800",
    lineHeight: "1.25",
    color: "#282828",
    maxWidth: "551px",
    textAlign: "left"
  },
  grab_description: {
    maxWidth: "551px",
    textAlign: "left",
    fontFamily: "NunitoSans",
    fontSize: "18px",
    opacity: "0.7",
    color: "#282828",
    lineHeight: "1.5",
    marginTop: "10px"
  },
  grab_img: {
    display: "flex",
    position: "relative"
  },
  grab_img_paypal: {
    position: "absolute",
    left: "250px",
    bottom: "0px"
  },
  grab_img_blog: {
    position: "absolute",
    left: "200px",
    bottom: "100px"
  },
  grab_img_phone_src: {
    maxWidth: 230,
    maxHeight: 420,
    width: 230,
    border: "10px solid #282828",
    borderRadius: "20px",
    overflow: "hidden",
    "& img": {
      width: "300%",
      height: "100%"
    }
  },
  grab_img_phone_background: {
  },
  social_contact_form: {
    borderRadius: 10,
    backgroundColor: "#0778bd",
    marginLeft: 50,
    width: 500,
    height: 276,
    position: "relative"
  },
  social_contact_form_top: {
    position: "absolute",
    top: 30,
    left: 30
  },
  social_contact_form_bottom: {
    position: "absolute",
    top: 170,
    left: 30,
    "& img": {
      height: 60,
      width: 60
    }
  },
  social_contact_person: {
    position: "absolute",
    zIndex: 1,
  },
  social_contact_detail: {
    position: "absolute",
    opacity: 0
  },
  social_contact_facebook: {
    position: "absolute",
    zIndex: 1
  },
  social_contact_instagram: {
    position: "absolute",
    // opacity: 0
  },
  social_contact_twitter: {
    position: "absolute"
  },
  social_contact_more: {
    position: "absolute"
  },
  '@media screen and (max-device-width: 1024px)': {
    grab_personalize: {
      flexDirection: "column-reverse"
    },
    grab_img: {
      display: "flex",
      justifyContent: "center"
    }
  },
  '@media screen and (max-device-width: 800px)': {
    grab: {
      padding: "50px 0px",
    },
    grab_heading: {
      fontSize: 24
    },
    grab_des: {
      padding: "0px 50px"
    },
    grab_img_paypal: {
      position: "absolute",
      left: 350,
      bottom: 15,
      height: 50
    },
    grab_img_blog: {
      position: "absolute",
      left: 300,
      bottom: 80,
      height: 100
    },
  },
  '@media screen and (max-device-width: 460px)': {
    grab_img_src: {
      width: 343,
      height: 254
    },
    grab_img_paypal: {
      height: 30,
      width: 180,
      bottom: 5,
      opacity: 0,
      left: 200,
    },
    grab_img_blog: {
      height: 60,
      width: 180,
      bottom: -20,
      left: 100,
      opacity: 0,
    },
    social_contact_form: {
      width: 300,
      height: 200,
      margin: 0
    },
    social_contact_form_top: {
      top: 20,
      left: 20
    },
    social_contact_person: {
      height: 60
    },
    social_contact_detail: {
      width: 150
    },
    social_contact_form_bottom: {
      top: 130,
      left: 20,
      "& img": {
        height: 40,
        width: 40
      }
    },
    grab_img_phone_src: {
      width: 153,
      height: 254
    },
    grab_img_phone_left: {
      height: 254
    },
    grab_img_phone_right: {
      height: 254
    },
  }
};