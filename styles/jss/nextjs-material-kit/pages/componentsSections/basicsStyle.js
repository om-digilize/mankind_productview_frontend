import { container, title } from "/styles/jss/nextjs-material-kit.js";

const basicsStyle = {
  sections: {
    padding: "20px 0"

  },
  container,
  title: {
    textDecoration: "none"
  },
  subContainer: {
    display: "grid",
    gridTemplateColumns: "50% 50%"
  },
  space50: {
    height: "50px",
    display: "block"
  },
  space70: {
    height: "70px",
    display: "block"
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF"
  },
  section: {
    display: "grid",
    alignItems: "center",
    gridTemplateColumns: "50% 50%",
  },
  subSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  cautionSection: {
    display: "flex",
    flexDirection: "column",
    alignItem: "center",
    justifyContent: "center"
  },
};

export default basicsStyle;
