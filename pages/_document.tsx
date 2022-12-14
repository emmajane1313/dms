import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta name="og:url" content="https://dms.digitalax.xyz/" />
          <meta name="og:title" content="Drop Merchant Supply" />
          <meta
            name="og:description"
            content="For the creative collector on the edge of joining a new merchant society."
          />
          <meta name="og:image" content="https://dms.digitalax.xyz/card.png/" />
          <meta name="twitter:card" content="summary" />
          <meta name="og:url" content="https://dms.digitalax.xyz/" />
          <meta name="og:image" content="https://dms.digitalax.xyz/card.png/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@igitalax_" />
          <meta name="twitter:creator" content="@digitalax_" />
          <meta
            name="twitter:image"
            content="https://dms.digitalax.xyz/card.png/"
          />
          <meta name="twitter:url" content="https://dms.digitalax.xyz/" />
          <link
            rel="preload"
            href="/fonts/Animosa-ExtraBold.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Animosa-Regular.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Animosa-ExtraLight.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Animosa-Light.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Awkward.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Economica-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Economica-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/LiberationMono-Regular.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/LiberationMono-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                @font-face {
                    font-family: "Animosa Extra Bold";
                    font-weight: 400;
                    src: url("./fonts/Animosa-ExtraBold.otf");
                }

                @font-face {
                  font-family: "Animosa Regular";
                  font-weight: 400;
                  src: url("./fonts/Animosa-Regular.otf");
                }

                @font-face {
                  font-family: "Animosa Light";
                  font-weight: 400;
                  src: url("./fonts/Animosa-Light.otf");
                }

                @font-face {
                  font-family: "Awkward";
                  font-weight: 400;
                  src: url("/fonts/Awkward.ttf");
                }

                @font-face {
                  font-family: "Economica Regular";
                  font-weight: 400;
                  src: url("/fonts/Economica-Regular.ttf");
                }

                @font-face {
                  font-family: "Economica Bold";
                  font-weight: 400;
                  src: url("/fonts/Economica-Bold.ttf");
                }

                @font-face {
                  font-family: "Liberation Mono Regular";
                  font-weight: 400;
                  src: url("/fonts/LiberationMono-Regular.ttf");
                }

                @font-face {
                  font-family: "Animosa Extra Light";
                  font-weight: 400;
                  src: url("/fonts/Animosa-ExtraLight.otf");
                }

                @font-face {
                  font-family: "Liberation Mono Bold";
                  font-weight: 400;
                  src: url("/fonts/LiberationMono-Bold.ttf");
                }
            `,
            }}
          ></style>
        </Head>
        <body>
          <script>0</script>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
