import React from "react";
import Head from "next/head";
import "/styles/scss/nextjs-material-kit.scss?v=1.2.0";

const MyApp = ({ Component, pageProps }) => {


  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Product View</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;