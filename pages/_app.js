import App from "next/app";
import React, { createContext, useEffect } from "react";
import Router, { useRouter } from "next/router";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import Script from "next/script";

import PageChange from "../components/PageChange/PageChange";
import IndexCookieConsent from "../components/CookieConsent/IndexCookieConsent";

import "../styles/globals.css";

import { pageview } from "../lib/gtag";
import { createRoot } from "react-dom/client";

Router.events.on("routeChangeStart", (url) => {
  const root = createRoot(document.getElementById("page-transition"));
  document.body.classList.add("body-page-transition");
  document.getElementById("page-content").style.visibility = "hidden";
  root.render(<PageChange path={url} />);
});
Router.events.on("routeChangeComplete", () => {
  const root = createRoot(document.getElementById("page-transition"));
  root.unmount();
  document.body.classList.remove("body-page-transition");
  document.getElementById("page-content").style.visibility = "visible";
});
Router.events.on("routeChangeError", () => {
  const root = createRoot(document.getElementById("page-transition"));
  root.unmount();
  document.body.classList.remove("body-page-transition");
  document.getElementById("page-content").style.visibility = "visible";
});

// Store Strapi Global object in context
export const GlobalContext = createContext({});

function IndexApp({ Component, pageProps: { session, ...pageProps } }) {
  const { global } = pageProps;
  const Layout = Component.layout || (({ children }) => <>{children}</>);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    //When the component is mounted, subscribe to router changes and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
        />
      </Head>
      <Layout>
        <GlobalContext.Provider value={global?.attributes}>
          <IndexCookieConsent />
          <ThemeProvider
            enableSystem={true}
            defaultTheme="dark"
            attribute="class"
          >
            <Component {...pageProps} />
          </ThemeProvider>
        </GlobalContext.Provider>
      </Layout>
    </React.Fragment>
  );
}

IndexApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return {
    ...appProps,
    pageProps: {},
  };
};

export default IndexApp;
