export const styles = {
  footer_top: {
    padding: "50px 156px"
  },
  footer_heading: {
    textAlign: "left",
    fontSize: 22,
    fontWeight: 900,
    color: "#282828",
    marginBottom: 20
  },
  footer_link: {
    textAlign: "left",
    margin: "20px 0px",
    "& a": {
      textDecoration: "none",
      fontSize: 16,
      color: "#282828",
      "&:hover": {
        textDecoration: "underline",
        color: "#0778bd"
      }
    }
  },
  footer_discover: {
    textAlign: "left"
  },
  get_touch: {
    display: "block",
    "& i": {
      marginRight: "40px",
      fontSize: 24,
      marginTop: 20
    },
    "& a": {
      textDecoration: "none",
      color: "#282828",
      "&:hover": {
        color: "#0778bd"
      }
    }
  },
  footer_medium: {
    marginTop: 30,
    padding: "0px 200px",
    "& div": {
      textAlign: "left",
      "& img": {
        width: 120,
        height: 35,
        marginRight: 20
      },
      "& i": {
        fontSize: 6
      }
    }
  },
  hr: {
    margin: "30px 10%"
  },
  footer_bottom: {
    marginBottom: 30
  },
  '@media screen and (max-width: 865px)': {
    footer_medium: {
      paddingLeft: "35%",
    },
    footer_policy: {
      textAlign: "center",
      margin: "10px 30px"
    }
  },
  '@media screen and (max-width: 745px)': {
    footer_top: {
      padding: 50
    },
    footer_medium: {
      padding: "0px 50px"
    }
  },
  '@media screen and (max-width: 400px)': {
    footer_medium: {
      "& div": {
        "& img": {
          width: 100,
          height: 30,
          marginRight: 20
        },
      }
    },
  }
};