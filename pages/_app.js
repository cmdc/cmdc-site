import App from "next/app";
import React, { createContext } from "react";
import Head from "next/head";
import Script from "next/script";

import { ThemeProvider as ThemeProviderNew } from "styled-components";
import { ThemeContextProvider, useThemeContext } from "../context/theme";
import { CursorContextProvider } from "../context/cursor";
import { MenuContextProvider } from "../context/menu";
import IndexCookieConsent from "../components/CookieConsent/IndexCookieConsent";
import GlobalStyles from "../styles/global";
import darkTheme from "../styles/themes/dark";
import lightTheme from "../styles/themes/light";
import AppBar from "../components/AppBar";
import Cursor from "../components/Cursor";
import Menu from "../components/Menu";
import SiteOfTheDay from "../components/SiteOfTheDay";

import "../styles/globals.css";

const IndexApp = ({ Component, pageProps }) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
        />
      </Head>
      <GlobalContext.Provider value={global?.attributes}>
        <ThemeContextProvider>
          <MenuContextProvider>
            <CursorContextProvider>
              <ThemedApp>
                <IndexCookieConsent />
                <Header />
                <Menu />
                <Component {...pageProps} />
                <Cursor />
              </ThemedApp>
            </CursorContextProvider>
          </MenuContextProvider>
        </ThemeContextProvider>
      </GlobalContext.Provider>
    </>
  );
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

const Header = () => <AppBar direction="down" renderAs="header" />;

const ThemedApp = ({ children }) => {
  const [state] = useThemeContext();
  console.log("state: ", state);
  state.theme = "dark";
  const currentTheme = themes[state.theme];

  return (
    <ThemeProviderNew theme={currentTheme}>
      <GlobalStyles />
      {children}
    </ThemeProviderNew>
  );
};

// Store Strapi Global object in context
export const GlobalContext = createContext({});

IndexApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);

  return {
    ...appProps,
    pageProps: {},
  };
};

export default IndexApp;
