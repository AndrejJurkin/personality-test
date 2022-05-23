import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";

const IS_PROD = process.env.NODE_ENV === "production";
const GA_ID = IS_PROD ? "" : "";
const GA_SRC = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Update Default Title in _app.js</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Script src={GA_SRC} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
