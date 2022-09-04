import React, { useEffect } from "react";
import Head from "next/head";
import "./index.css";
import Nav from "../components/Nav";
import Search from "../components/Search";
function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Falcon test - LiTing </title>
        <meta name="viewpoer" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Search />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ width: "20vw" }}>
          <Nav />
        </div>
        <div style={{ width: "80vw" }}>
          <Component {...pageProps} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
