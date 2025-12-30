import {
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader
} from "/styles/jss/nextjs-material-kit.js";

const cardHeaderStyle = {
  cardHeader: {

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3px",
    padding: "1rem 15px",
    marginLeft: "25px",
    marginRight: "25px",
    marginTop: "-20px",
    border: "0",
    marginBottom: "-10"
  },
  cardHeaderPlain: {
    marginLeft: "0px",
    marginRight: "0px"
  },
  warningCardHeader,
  successCardHeader,
  dangerCardHeader,
  infoCardHeader,
  primaryCardHeader
};

export default cardHeaderStyle;
