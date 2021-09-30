import React from "react";
import { AppProps } from "next/app";
import { globalStyles } from "@styles/styles.global";

const Site = ({ Component, pageProps }: AppProps) => {
  globalStyles();

  return <Component {...pageProps} />;
};

export default Site;
