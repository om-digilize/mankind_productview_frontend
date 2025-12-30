import { container } from "/styles/jss/nextjs-material-kit.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "510px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  sectionBasics: {
    display: "flex",
    justifyContent: "center"
  },
  errorSection: {
    padding: '0.5rem',
    borderRadius: "6px",
    display: "flex",
    position: "absolute",
    alignItems: "center",
    backgroundColor: "rgba(255, 0, 0, 0.6)",
    color: "white",
    "@media (min-width: 840px)": {
      top: "53.4%",
      left: "32.5%",
      width: "35%", // Adjusted width for larger screens4
    },
    "@media (max-width: 830px)": {
      top: "62%",
      margin: "-60px  0px",
      width: "100%", // Adjusted width for larger screens
    },
    zIndex: 4
  },
  errorParagraph: {
    fontSize: "12px",
    lineHeight: 1
  },
  expiryContent: {
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    gap: "0.2rem"
  },
  errorHeading: {
    fontSize: "14px",
    lineHeight: 1.2,
    fontWeight: "bold",
  },
  mainRaised: {
    borderRadius: "6px",

    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",

    "@media (max-width: 830px)": {
      margin: "-60px 17px 10px",
      width: "100%", // Optional: Add mobile-specific width adjustments
    },

    "@media (min-width: 840px)": {
      margin: "-60px 40px 10px",

      width: "35%", // Adjusted width for larger screens
    },
  },

  contactSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px"
  },
  sectionSubContainer: {
    display: "flex", justifyContent: "center"
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  },

  img: {
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  productLabels: {
    display: 'grid',
    justifyItems: "center",
    alignContent: "center",
    "@media (min-width: 840px)": {
      width: "10%"
    },
    "@media (max-width: 830px)": {
      width: "25%"

    },
  },
  imgSection: {
    height: "20%",
    position: "absolute",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    top: "13%",
    margin: "3.5rem 0.3rem",
    "@media (max-width: 830px)": {
      right: "5%",
    },
    "@media (min-width:840px)": {
      right: "35%"
    },
    cursor: "pointer",
  },
  title: {
    display: "flex",
    justifyContent: "center"
  },
};

export default componentsStyle;
