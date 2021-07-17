export const styles = {
  appBar: {
    position: "sticky",
    top: "0",
    backgroundColor: "#ffffff",
    height: "72px",
    padding: "0px 156.4px",
    display: "flex",
    '& .MuiToolbar-regular': {
      minHeight: "72px"
    },
    overflow: "hidden",
    position: "relative",
  },
  logo: {
    fontSize: 16,
    color: "#0479c1",
    padding: "26px 0px",
  },
  header_typo: {
    color: "#0479c1"
  },
  link: {
    textDecoration: "none",
    color: "#0a0a12",
    fontSize: 20,
    fontFamily: "EuclidCircularB",
    fontWeight: "600",
    "&:hover": {
      color: "#0778bd",
      transition: "0.3s"
    }
  },
  sign_btn: {
    backgroundColor: "#0778bd",
    marginLeft: "20px",
    textTransform: "none"
  },
  pricing: {
    textAlign: "left",
    marginLeft: "50px",
    flexGrow: 1
  },
  bars: {
    fontSize: 28,
    color: "black",
    marginLeft: 20,
    display: "none"
  },
  mobile: {
    margin: "auto",
    borderRadius: 10,
    position: "sticky",
    top: 0,
    zIndex: 5,
    backgroundColor: "#ffffff"
  },
  myLinks: {
    "& ul": {
      listStyleType: "none",
      textAlign: "left",
      "& li": {
        margin: 20
      },
      "& li a": {
        textDecoration: "none",
        color: "black",
        fontSize: 24,
      }
    },
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1)",
    paddingBottom: 10
  },

  '@media screen and (max-width: 800px)': {
    pricing: {
      display: "none",
      flexGrow: 0
    },
    login: {
      visibility: "hidden",
      flexGrow: 1
    },
    bars: {
      display: "block"
    },
    appBar: {
      padding: "0px 10px",
      height: 72,
      width: "100%"
    }
  },
  '@media screen and (max-width: 400px)': {
    sign_btn: {
      marginLeft: 0
    }
  }
};
