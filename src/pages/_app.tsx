import React from "react";
import App from "next/app";
import { globalStyles } from "@common/styles/styles.global";

class Site extends App {
  render() {
    globalStyles();

    const { Component, pageProps, router } = this.props;

    return <Component {...pageProps} key={router.asPath} />;
  }
}

export default Site;
