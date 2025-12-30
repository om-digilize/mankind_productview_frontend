const cardStyle = {
  card: {
    border: "0",
    borderRadius: "6px",
    margin: "20px 17px 10px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear",
    "@media (max-width: 830px)": {
      width: "95%",
      // width: "100%"
    },
    "@media (min-width: 840px)": {

      width: "35%",

    },
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none",
  },
  cardCarousel: {
    overflow: "hidden",
  },
};

export default cardStyle;
