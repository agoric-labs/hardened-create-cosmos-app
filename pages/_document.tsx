import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          src='https://cdn.jsdelivr.net/npm/@endo/init'
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}