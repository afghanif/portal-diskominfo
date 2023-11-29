import NextDocument, { Html, Head, Main, NextScript } from "next/document";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="stylesheet" href="/css/style.css" />
          <script src="/js/darkMode.bundle.js"></script>
          <link rel="stylesheet" href="/leaflet/leaflet.css" />
          <script src="/leaflet/leaflet.js"></script>
        <script src="https://widget.taggbox.com/embed-lite.min.js" type="text/javascript"></script>
        </Head>
        <body className="overflow-x-hidden font-body text-jacarta-500 dark:bg-jacarta-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
