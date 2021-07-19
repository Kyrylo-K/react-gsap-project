export const styles = {
  connect: {
    backgroundImage: `url(${"/assets/img/connect.jpg"})`,
    padding: "152px 0px 100px"
  },
  connect_heading: {
    fontSize: "calc(40px + 2vmin)",
    maxWidth: "673px",
    fontWeight: "800",
    margin: "auto",
    fontFamily: "NunitoSans"
  },
  connect_desc: {
    fontFamily: "NunitoSans",
    fontSize: "18px",
    margin: "10px"
  },
  connect_button: {
    width: "222px",
    height: "56px",
    backgroundColor: "#0778bd",
    border: "solid 1px #0778bd",
    fontSize: "17px",
    margin: "20px 0px 15px 0px",
    textTransform: "none",
    fontWeight: "bold"
  },
  connect_link: {
    fontSize: "14px",
    fontFamily: "EuclidCircularB",
    color: "#282828"
  },
  connect_link_log: {
    fontSize: "14px",
    fontFamily: "EuclidCircularB",
    color: "#282828",
    marginLeft: "5px"
  },
  '@media screen and (max-width: 760px)': {
    connect: {
      padding: "152px 30px 0px",
      marginBottom: 70
    },
    connect_heading: {
      fontSize: "calc(20px + 2vmin)"
    }
  }
};