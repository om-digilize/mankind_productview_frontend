import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'grid',
    paddingTop: "5rem",
    gridTemplateRows: "30% 30%",
    justifyItems: "center",
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: 'center'
    },
  },
  image: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '60%',
      // height: "50%"
    },
  },
  content: {
    height: "35%",
    // padding: "0rem 3.5rem",
    display: 'flex',
    flexDirection: 'column',
    // justifyContent: 'center'

  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'end',

    },
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#36B4A4', // Teal-green color from image
    // marginBottom: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
  },

  subheading: {

    fontSize: '0.8rem',
    color: '#333',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.25rem',
      textAlign: 'center',
    },
  },
}));

const Error404 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box>
      <Header brand="Arbuda Agrochemicals Pvt Ltd"
        rightLinks={<HeaderLinks />}
        fixed
        color="white"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
      />

      <Box className={classes.root}>
        {/* Left Image */}

        <Box className={classes.imageWrapper}>
          <Box
            component="img"
            src="/404.png" // Make sure image is available in public folder
            alt="Product Code Not Found"
            className={classes.image}
          />

        </Box>


        {/* Right Content */}
        <Box className={classes.content}>
          <Typography variant={isSmallScreen ? 'h5' : 'h3'} className={classes.heading}>
            CAUTION!
          </Typography>
          <Typography variant="body1" className={classes.subheading}>
            This product code could not be found in our records. <br />
            Please verify with the authorized seller for further confirmation.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Error404;