export const styles = {
  bringaccount_des: {
    marginTop: "150px",
    display: "inline-block"
  },
  bringaccount_heading: {
    fontFamily: "NunitoSans",
    fontSize: "40px",
    fontWeight: "800",
    lineHeight: "1.25",
    color: "#282828",
    maxWidth: "520px",
  },
  bringaccount_description: {
    maxWidth: "400px",
    marginTop: "15px",
    display: "inline-block",
    fontFamily: "NunitoSans",
    fontSize: "18px",
    opacity: "0.7",
    color: "#282828",
    lineHeight: "1.5",
    marginTop: "10px",
  },
  bringaccount_pin: {
    margin: "40px 0px"
  },
  reach_des: {
    marginTop: "70px",
    display: "inline-block"
  },
  reach_heading: {
    fontFamily: "NunitoSans",
    fontSize: "32px",
    fontWeight: "800",
    lineHeight: "1.25",
    color: "#282828",
    maxWidth: "520px",
  },
  reach_description: {
    maxWidth: "400px",
    marginTop: "15px",
    display: "inline-block",
    fontFamily: "NunitoSans",
    fontSize: "18px",
    opacity: "0.7",
    color: "#282828",
    lineHeight: "1.5",
    marginTop: "10px",
  },
  buy_button: {
    border: "1px solid #0778bd",
    color: "#0778bd",
    backgroundColor: "#ffffff",
    padding: "12px 32px",
    marginTop: "16px",
    textTransform: "none",
    fontSize: 17,
    letterSpacing: 0.34,
    fontWeight: "bold",
    '&:hover': {
      color: "#ffffff"
    }
  },
  actions: {
    padding: "64px 186px 204px"
  },
  card: {
    margin: "0px 20px",
    padding: 40,
    textAlign: "left",
    height: 171,
    marginBottom: 30
  },
  typo_h5: {
    marginTop: 15,
    fontSize: 20,
    fontFamily: "NunitoSans",
    fontWeight: 800,
    color: "#282828"
  },
  typo_body2: {
    marginTop: 5,
    fontSize: 16,
    fontFamily: "NunitoSans",
    color: "#282828"
  },
  pin_image: {
    position: "relative",
    zIndex: 3
  },
  bringaccount_phone: {
    position: "relative",
  },
  bringaccount_phone_back: {
    zIndex: -1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    width: 100,
    height: 100,
  },
  // '@media screen and (max-width: 770px)': {
    
  // },
  '@media screen and (max-width: 400px)': {
    bringaccount_heading: {
      fontSize: 24,
      padding: "0px 20px"
    },
    bringaccount_phone_back_img: {
      width: 170
    },
    bringaccount_phone_back: {
      width: 30
    },
    actions: {
      padding: "64px 20px 20px"
    },
    reach_des: {
      padding: "0px 20px"
    },
    pin_image: {
      width: 100
    },
  },
  '@media screen and (min-width: 375px) and (max-width: 770px)': {
    pin_image: {
      width: 70
    },
    bringaccount_phone_back_img: {
      width: 200
    },
    bringaccount_phone_back: {
      width: 70,
      height: 70
    },
    actions: {
      padding: "50px 50px 0px"
    },
  }
};