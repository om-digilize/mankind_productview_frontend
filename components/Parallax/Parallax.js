import React from "react"; // nodejs library that concatenates classes
import classNames from "classnames"; // nodejs library to set properties for components
import PropTypes from "prop-types"; // @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";

// core components
import styles from "/styles/jss/nextjs-material-kit/components/parallaxStyle.js";

const useStyles = makeStyles(styles);

export default function Parallax(props) {
  const isDesktop = useMediaQuery("(min-width:940px)");
  const [transform, setTransform] = React.useState("translate3d(0,0px,0)");
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener("scroll", resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener("scroll", resetTransform);
      }
    };
  });
  const resetTransform = () => {
    var windowScrollTop = window.pageYOffset / 3;
    setTransform("translate3d(0," + windowScrollTop + "px,0)");
  };
  const { filter, className, children, style, image, small, responsive } =
    props;
  const classes = useStyles();
  const parallaxClasses = classNames({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [classes.parallaxResponsive]: responsive,
    [className]: className !== undefined,
  });
  return (
    <div className={parallaxClasses} style={{ ...style, transform: transform }}>
      <div
        style={{
          width: isDesktop ? "35%" : "100%",
          //maxHeight: "400px", // Adjust as needed
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "58px",
        }}
      >
        <img
          src={image}
          alt="Product"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            width: "auto",
            height: "auto",
            objectFit: "contain",
            display: "block",
            // borderRadius: 20,
          }}
        />
      </div>

      {children}
    </div>
  );
}

Parallax.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
  responsive: PropTypes.bool,
};
