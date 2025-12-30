import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import image500 from '../public/500.png';
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: "grid",
        gridTemplateRows: "40% auto",
        paddingTop: '5rem',
        rowGap: "2.5rem",
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
    },
    image: {
        width: '100%',
        maxWidth: '500px',
        height: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'center',
        },
    },
    content: {
        // padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            justifyContent: 'start',
        },
        [theme.breakpoints.up('md')]: {
            justifyContent: 'center',
        },
        textAlign: 'center',
        height: '100%',
    },
    heading: {
        fontSize: '1.5rem',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#36B4A4',
        [theme.breakpoints.up('sm')]: {
            fontSize: '3rem',
        },
    },
    subheading: {
        marginBottom: theme.spacing(1),
        fontSize: '1rem',
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.75rem',
        },
    },
}));

const Error500 = () => {
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
                <Box
                    component="img"
                    src={image500.src}
                    alt="500 Error"
                    className={classes.image}
                />
                <Box className={classes.content}>
                    <Typography
                        variant={isSmallScreen ? 'h6' : 'h3'}
                        className={classes.heading}
                    >
                        Our system hit a snag!
                    </Typography>
                    <Typography
                        variant={isSmallScreen ? 'body2' : 'h5'}
                        className={classes.subheading}
                    >
                        Please give us a moment and try again.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Error500;