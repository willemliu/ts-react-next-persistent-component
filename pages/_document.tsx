import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="description" content="This is an example project showcasing the use of Next.JS to create a persistant player which survives navigation"/>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}
