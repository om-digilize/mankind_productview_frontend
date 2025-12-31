import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  useMediaQuery,
} from "@material-ui/core";
import { useRouter } from "next/router";

import { GrNotes } from "react-icons/gr";
import { IoDocumentAttachOutline } from "react-icons/io5";

import imageRed from "../../public/public/logo_red.png";
import imageBlue from "../../public/public/logo_blue.png";
import imageGreen from "../../public/public/logo_green.png";
import imageYellow from "../../public/public/logo_yellow.png";

import styles from "/styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import api from "../../apis";
import Loader from "../../components/Loader.js"

const useStyles = makeStyles(styles);

export default function SectionBasics(props) {
  const classes = useStyles();
  const router = useRouter();
  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [isLoading, setIsLoading] = useState(false);
  const [productImageUrl, setProductImageUrl] = useState(null);
  const [companyLogoUrl, setCompanyLogoUrl] = useState(null);

  const product = props?.data;

  console.log("producrt imagesss::", product.product_history.product_image);

  console.log("backned dataaa:", props);

  const cautionLogoMap = {
    red: imageRed,
    blue: imageBlue,
    green: imageGreen,
    yellow: imageYellow,
    gray: null,
  };

  useEffect(() => {
      let isMounted = true;
    const loadImages = async () => {
      try {
        setIsLoading(true);
        setProductImageUrl(null);
      setCompanyLogoUrl(null);
        if (product?.product_history?.product_image) {
          const res = await api(
            `/getImage?imageName=${product.product_history.product_image}`,
            "blob"
          );
           if (isMounted) {
          setProductImageUrl(URL.createObjectURL(res.data));
        }
        }
        if (product?.company?.company_logo) {
          const res = await api(
            `/getImage?imageName=${product.company.company_logo}`,
            "blob"
          );
          if (isMounted) {
          setCompanyLogoUrl(URL.createObjectURL(res.data));
        }
        }
      } catch (err) {
        console.error("Image load error", err);
      }
      finally {
      if (isMounted) setIsLoading(false);
    }
    };

    loadImages();

    return () => {
      isMounted = false;
      if (productImageUrl) URL.revokeObjectURL(productImageUrl);
      if (companyLogoUrl) URL.revokeObjectURL(companyLogoUrl);
    };
  }, [product]);

  async function downloadFile(file) {
    try {
      setIsLoading(true)
      const fileName = file.split('/').pop().split('?')[0];
      console.log(fileName)
      const response = await api(`/getImage?imageName=${encodeURIComponent(fileName)}`, 'blob');
      console.log(response)
      if (!response) {
        setIsLoading(false)
        router.push('/500')
      }
      if (response.status == 200) {
        setIsLoading(false)
        const link = document.createElement('a');
        link.href = URL.createObjectURL(response.data)
        link.download = fileName
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
      else if (response.status == 500) {
        setIsLoading(false)
        router.push('/500')
      }
      else if (response.status == 404) {
        setIsLoading(false)
        router.push('/404')
      }
    }
    catch (err) {
      console.log(err);
      setIsLoading(false)
      router.push('/500')
    }

  }

  if (!product) return null;

  const tableCellStyle = {
    border: "1px solid #646360",
    textAlign: "center",
    verticalAlign: "middle",
    fontSize: isMobile ? 13 : isTablet ? 16 : 22,
    padding: isMobile ? "6px" : "12px",
    wordBreak: "break-word",
  };

  return (
    <div
      style={{
        maxWidth: 1080,
        margin: "auto",
        padding: isMobile ? 10 : 20,
        background: "#fff",
        border: "2px solid #646360",
        fontFamily: "Arial, sans-serif",

      }}
    >
      <div style={{ border: "2px solid #646360", padding: isMobile ? 10 : 20 }}>
        {/* TOP SECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            ggap: isMobile ? 10 : 30,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* PRODUCT IMAGE */}
          <div style={{ width: isMobile ? "40%" : "45%", textAlign: "center" }}>
            {productImageUrl && (
              <img
                // src="/product.png"
                src={productImageUrl}
                alt="Product"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: isMobile ? 180 : 450,
                  objectFit: "contain",
                }}
              />
            )}
          </div>

          {/* RIGHT SIDE */}
          <div
            style={{
              width: isMobile ? "55%" : "85%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: isMobile ? 8 : 20,
              textAlign: "center",
            }}
          >
            <img
              src={companyLogoUrl || "/company.png"}
              alt="Company Logo"
              style={{
                width: isMobile ? 90 : 180,
                height: "auto",
                // marginBottom: isMobile ? 10 : 30,
              }}
            />

            <div
              style={{
                fontSize: isMobile ? 13 : isTablet ? 20 : 25,
                fontWeight: "bold",
                color: "#646360",
                lineHeight: 1.3,
              }}
            >
              This is Genuine <br /> Mankind Product.
            </div>

            <img
              src="/tick.png"
              alt="Second Logo"
              style={{
                width: isMobile ? 50 : 120,
                height: "auto",
              }}
            />
          </div>
        </div>

        {/* TABLE */}
        <div style={{ marginTop: 30 }}>
          <TableContainer component={Paper} style={{ boxShadow: "none", width: "100%", padding: 10 }}>
            <Table sx={{ borderCollapse: "collapse", width: "100%", padding: 0, margin: 0 }}>
              <TableBody>
                {renderTableRow("Product Name", product?.product_history?.product_name, tableCellStyle)}
                {renderTableRow("Marketed By", product?.company?.company_name, tableCellStyle)}
                {renderTableRow("Unique Code", product?.uniqueCode, tableCellStyle)}
                {renderTableRow("Batch No.", product?.batch_no, tableCellStyle)}
                {renderTableRow(
                  "Date of Manufacture",
                  product?.manufacturing_date
                    ? new Date(product.manufacturing_date).toLocaleDateString("en-GB")
                    : "Not Available",
                  tableCellStyle
                )}
                {renderTableRow(
                  "Expiry Date",
                  product?.expiry_date
                    ? new Date(product.expiry_date).toLocaleDateString("en-GB")
                    : "Not Available",
                  tableCellStyle
                )}
                {renderTableRow("Customer Care No.", product?.company?.contact, tableCellStyle)}
                {renderTableRow("Customer Care Email id", product?.company?.email, tableCellStyle)}
                {renderTableRow("Registration No.", product?.product_history?.registration_no, tableCellStyle)}
                {renderTableRow("Manufactured By", product?.locations?.mfg_name, tableCellStyle)}
                {renderTableRow("Antidote Statement", product?.product_history?.antidote_statement, tableCellStyle)}

                <TableRow>
                  <TableCell style={tableCellStyle}>Cautionary Symbol</TableCell>
                  <TableCell style={tableCellStyle}>
                    {product?.product_history?.caution_logo &&
                      cautionLogoMap[product.product_history.caution_logo] ? (
                      <img
                        src={cautionLogoMap[product.product_history.caution_logo].src}
                        alt="Caution"
                        style={{ height: 40 }}
                      />
                    ) : (
                      "Not Applicable "
                    )}
                  </TableCell>
                </TableRow>
                {product?.product_history?.leaflet && (
                  <FileTableRow
                    label="Leaflet"
                    file={product?.product_history?.leaflet}
                    icon={<GrNotes />}
                    onClick={downloadFile}
                    cellStyle={tableCellStyle}
                  />
                )}

                {product?.product_history?.label && (
                  <FileTableRow
                    label="Label"
                    file={product.product_history.label}
                    icon={<IoDocumentAttachOutline />}
                    onClick={downloadFile}
                    cellStyle={tableCellStyle}
                  />
                )}
                {product?.product_history?.product_info_url &&
                  renderTableRow(
                    "Product Information URL",
                    <a
                      href={product.product_history.product_info_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1976d2", textDecoration: "underline" }}
                    >
                      {product.product_history.product_info_url}
                    </a>,
                    tableCellStyle
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      {isLoading && <Loader />}
    </div>
  );
}


const renderTableRow = (label, value, cellStyle) => (
  <TableRow>
    <TableCell style={cellStyle}>{label}</TableCell>
    <TableCell style={cellStyle}>{value || "Not Available"}</TableCell>
  </TableRow>
);

const FileTableRow = ({ label, file, icon, onClick, cellStyle }) => (
  <TableRow>
    <TableCell style={cellStyle}>{label}</TableCell>
    <TableCell style={cellStyle}>
      {file ? (
        <div
          onClick={() => onClick(file)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            cursor: "pointer",
          }}
        >
          {icon} View {label}
        </div>
      ) : (
        "Not Available"
      )}
    </TableCell>
  </TableRow>
);
