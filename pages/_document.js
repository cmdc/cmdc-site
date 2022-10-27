import Document, { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* eslint-disable-next-line */}
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="index,follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no"
          />
          {/* <meta
            name="theme-color"
            media="(prefers-color-scheme: light)"
            content="white"
          /> */}
          <meta
            name="theme-color"
            media="(prefers-color-scheme: dark)"
            content="black"
          />
          <meta name="apple-mobile-web-app-status-bar" content="#74FEFF" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="96x96"
            href="/logo/logo-96x96.png"
          />
          <link rel="stylesheet" href="https://use.typekit.net/yzi3byl.css" />

          {/* Google Analytics */}
          <script
            async
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <div id="page-content" className="min-h-screen">
            <Main />
          </div>
          <NextScript />
        </body>
      </Html>
    );
  }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

export default MyDocument;
