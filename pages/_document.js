import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render () {


    return (
      <html lang='ru'>
        <Head>

					<meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content={
              'user-scalable=no, initial-scale=1, ' +
              'minimum-scale=1, maximum-scale=1, width=device-width, height=device-height'
            }
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
	const originalRenderPage = ctx.renderPage
  const initialProps = await Document.getInitialProps(ctx)
  return initialProps

}


export default MyDocument
