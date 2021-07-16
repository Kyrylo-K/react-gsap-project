export const styles = {
  download_section: {
    backgroundColor: "rgba(7, 120, 189, 0.1)",
    padding: "0px 210px"
  },
  download_phone_img: {
    "& img": {
      width: 361,
      height: 648,
    }
  },
  download_des: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  download_heading: {
    maxWidth: 550,
    fontFamily: "EuclidCircularB",
    fontSize: 48,
    fontWeight: "bold",
    textAlign: "left",
    color: "#282828"
  },
  download_description: {
    maxWidth: 585,
    fontFamily: "EuclidCircularB",
    fontSize: 18,
    textAlign: "left",
    color: "#282828",
    marginTop: 8
  },
  downloads: {
    display: "flex",
    "& img": {
      width: 180,
      height: 52,
      marginRight: 15,
      marginTop: 24
    },
    textAlign: "left"
  },
  '@media screen and (max-device-width: 800px)': {
    download_section: {
      padding: "0px 0px",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }
  },
  '@media screen and (max-device-width: 560px)': {
    download_heading: {
      fontSize: 32
    },
    download_phone_img: {
      "& img": {
        width: 261,
        height: 548,
      }
    },
  },
  '@media screen and (max-device-width: 400px)': {
    download_heading: {
      fontSize: 24
    },
    downloads: {
      display: "flex",
      paddingLeft: 10,
      "& img": {
        width: 160,
        height: 45,
        marginRight: 15,
        marginTop: 24
      },
      textAlign: "left"
    },
    download_des: {
      width: 320
    }
  },
};