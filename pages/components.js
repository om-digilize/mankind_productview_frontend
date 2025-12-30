import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// core components
import Header from "/components/Header/Header.js";
import HeaderLinks from "/components/Header/HeaderLinks.js";

import Parallax from "/components/Parallax/Parallax.js";
import { Divider, Box } from "@material-ui/core"
import { useTheme, useMediaQuery } from '@material-ui/core';
// sections for this page
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { RiFileSettingsFill } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import Card from "/components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
// import SectionBasics from "/pages-sections/Components-Sections/SectionBasics.js";
import { IoDocumentAttachOutline } from "react-icons/io5";

import { GrNotes } from "react-icons/gr";
import { FiAlertCircle } from "react-icons/fi";
import styles from "/styles/jss/nextjs-material-kit/pages/components.js";
import { useRouter } from "next/router.js";
import Loader from '../components/Loader.js'
import api from '../apis.js'
const useStyles = makeStyles(styles);

export default function Components(props) {
  const { id } = props
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();
  const cardAnimaton = React.useRef("cardHidden");
  const [isLoading,setIsLoading]=React.useState(false)

  const { ...rest } = props;

  // async function downloadFile(file) {
  //   try {
  //     setIsLoading(true)
  //     const fileName = file.split('/').pop().split('?')[0];
  //     console.log(fileName)
  //     const response = await api(`/getImage?imageName=${encodeURIComponent(fileName)}`, 'blob');
  //     console.log(response)
  //     if (!response) {
  //       setIsLoading(false)
  //       router.push('/500')
  //     }
  //     if (response.status == 200) {
  //       setIsLoading(false)
  //       const link = document.createElement('a');
  //       link.href = URL.createObjectURL(response.data)
  //       link.download = fileName
  //       document.body.appendChild(link)
  //       link.click()
  //       document.body.removeChild(link)
  //     }
  //     else if (response.status == 500) {
  //       setIsLoading(false)
  //       router.push('/500')
  //     }
  //     else if (response.status == 404) {
  //       setIsLoading(false)
  //       router.push('/404')
  //     }
  //   }
  //   catch (err) {
  //     console.log(err);
  //     setIsLoading(false)
  //     router.push('/500')
  //   }

  // }
  return (<div>

    {/* <Header
      brand="Digilize Solutions"
      rightLinks={<HeaderLinks />}
      fixed
      color="white"
      changeColorOnScroll={{
        height: 400,
        color: "white",
      }}
      companyLogo={props?.data?.company?.company_logo}
      {...rest}
    /> */}


    {/* <Parallax image={props?.data?.product_history?.product_image}  >

      <Box className={classes.imgSection}>
        {props.data?.product_history?.leaflet!='' || props?.data?.product_history?.leaflet!=undefined ?
          (<div className={classes.productLabels}>
          <GrNotes size={30} onClick={async() => { await downloadFile(props.data?.product_history?.leaflet) }} />
          <p className={classes.header5}>Leaflet</p>
        </div>):<></>}

        {
          props?.data?.product_history?.label!='' && props?.data?.product_history?.label!=undefined?
        (<div className={classes.productLabels}>
          <IoDocumentAttachOutline size={32} onClick={async () => await downloadFile(props?.data?.product_history?.label)} />
          <p className={classes.header5}>Label</p>
        </div>):<></>
        }
      </Box>

    </Parallax> */}
{/* <Parallax image={props?.data?.product_history?.product_image}>
  <Box className={classes.imgSection}>
    
    {props?.data?.product_history?.leaflet && (
      <div className={classes.productLabels}>
        <GrNotes size={30} onClick={async () => await downloadFile(props.data.product_history.leaflet)} />
        <p className={classes.header5}>Leaflet</p>
      </div>
    )}

    {props?.data?.product_history?.label && (
      <div className={classes.productLabels}>
        <IoDocumentAttachOutline size={32} onClick={async () => await downloadFile(props.data.product_history.label)} />
        <p className={classes.header5}>Label</p>
      </div>
    )}

  </Box>
</Parallax> */}

    {/* {Date.parse(props?.data?.expiry_date) - Date.now() < 0 && < Box  >
      <div className={classes.errorSection}>
        <div style={{ margin: "0rem 0.5rem" }}>
          <FiAlertCircle size={25} />
        </div>
        <div className={classes.expiryContent}>

          <div className={classes.errorHeading}>
            This product has expired and is no longer suitable for use.
          </div>

          <p className={classes.errorParagraph}>
            Please dispose of it responsibly or contact support for further assistance.
          </p>
        </div>

      </div>
    </Box>} */}
    {/* <div className={classes.sectionBasics}>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionBasics product={props?.data} id={id} />
      </div>
    </div> */}
     {/* <div >
        <SectionBasics product={props?.data} id={id} />
    </div> */}
    {/* <Box spacing={1}>
      <Box xs={12} sm={6} md={4} className={classes.sectionSubContainer} >
        <Card className={classes[cardAnimaton.current]}>
          <form className={classes.form}>
            <CardHeader
              color="primary"
              className={classes.cardHeader}

            >
              <RiFileSettingsFill size={50} />
              Batch Information
            </CardHeader>
            <CardBody>
              <Divider light={true} />
              <div id="batch">
                <div>
                  <h3>
                    <small><b>
                      Batch No
                    </b>
                    </small>
                  </h3>
                  <p>{props?.data?.batch_no || "Not Available"}</p>
                </div>
                <div>
                  <h3>
                    <small>
                      <b>
                        Mfg Date
                      </b>
                    </small>
                  </h3>
                  <p>
                    {props?.data &&
                      new Date(props?.data?.manufacturing_date).toLocaleDateString(
                        "en-GB"
                      ) || "Not Available"}
                  </p>
                </div>
                <div>
                  <h3>
                    <small>
                      <b>
                        Expiry Date
                      </b>
                    </small>
                  </h3>
                  <p>
                    {props?.data &&
                      new Date(props?.data?.expiry_date).toLocaleDateString("en-GB") || "Not Available"}
                  </p>
                </div>
              </div>
            </CardBody>
          </form>
        </Card>
      </Box>
    </Box> */}

    {/* <Box justify="center">
      <Box xs={12} sm={6} md={4} className={classes.sectionSubContainer} >
        <Card className={classes[cardAnimaton.current]}>
          <form className={classes.form}>
            <CardHeader
              color="primary"
              className={classes.cardHeader}

            >
              <MdOutlinePrecisionManufacturing size={50} />
              Manufacturer  Information

            </CardHeader>
            <CardBody>
              <Divider />
              <div id="manufacturer">
                <div>
                  <h3>
                    <small>
                      <b>
                        Mfg Name
                      </b>
                    </small>
                  </h3>
                  <p>{props?.data?.locations?.mfg_name || "Not Available"}</p>
                </div>

                <div>
                  <h3>
                    <small>
                      <b>
                        Mfg License No
                      </b>
                    </small>
                  </h3>
                  <p>{props?.data?.locations?.mfg_licence_no || "Not Available"}</p>
                </div>
                <div>
                  <h3>
                    <small>
                      <b>
                        Mfg Address
                      </b>
                    </small>
                  </h3>
                  <p>{props?.data?.locations?.address || "Not Available"}</p>
                </div>
              </div>
            </CardBody>
          </form>
        </Card>
      </Box>
    </Box> */}
{/* 
    <Box justify="center">
      <Box xs={12} sm={6} md={4} className={classes.sectionSubContainer} >
        <Card className={classes[cardAnimaton.current]}>
          <form className={classes.form}>
            <CardHeader
              color="primary"
              className={classes.cardHeader}

            >
              <RiCustomerServiceFill size={50} />
              Customer Care

            </CardHeader>
            <CardBody>
              <Divider />
              <div id="customercare">
                <div>
                  <h3>
                    <small>
                      <b>
                        Company Name
                      </b>
                    </small>
                  </h3>
                  <p>{props?.data?.company?.company_name || "Not Available"}</p>
                </div>
                <div>
                  <h3>
                    <small>
                      <b>

                        Email Address
                      </b>
                    </small>
                  </h3>
                  <p>
                    {props?.data &&
                      props?.data?.company?.email
                      || "Not Available"}
                  </p>
                </div>
                <div>
                  <h3>
                    <small>
                      <b>
                        Phone No
                      </b>
                    </small>
                  </h3>
                  <p>
                    {props?.data &&
                      props?.data?.company?.contact || "Not Available"}
                  </p>
                </div>
                <div>
                  <h3>
                    <small>
                      <b>
                        Address
                      </b>
                    </small>
                  </h3>
                  <p>{props?.data?.company?.address || "Not Available"}</p>
                </div>
              </div>
            </CardBody>
          </form>
        </Card>
      </Box>
    </Box> */}

    {/* <Box justify="center" >
      <Box xs={10} sm={6} md={4} className={classes.sectionSubContainer}>
        <Card className={classes[cardAnimaton.current]}>
          <form className={classes.form}>
            <CardHeader
              color="primary"
              className={classes.cardHeader}
            >
              <IoMdContact size={50} />
              Contact Us
            </CardHeader>
            <CardBody>
              <Divider />
              <div id="contactus">
                <div className={classes.contactSection}
                >
                  <div>
                    <h3>
                      <small>
                        <b>

                          Email Address
                        </b>
                      </small>
                    </h3>
                    <p>
                      {props?.data &&
                        props?.data?.company?.email
                        || "Not Available"}
                    </p>

                  </div>
                  <div>
                    <h3>
                      <small>
                        <b>
                          Phone No.
                        </b>
                      </small>
                    </h3>
                    <p>
                      {props?.data &&
                        props?.data?.company?.contact || "Not Available"}
                    </p>

                  </div>
                </div>
                <div>
                  <h3>
                    <small>
                      <b>
                        Address
                      </b>
                    </small>
                  </h3>

                  <p>{props?.data?.company?.address || "Not Available"}</p>                </div>
              </div>
            </CardBody>
          </form>
        </Card>
      </Box>
    </Box> */}
    {isLoading && <Loader/>}
  </div >
  );
}
