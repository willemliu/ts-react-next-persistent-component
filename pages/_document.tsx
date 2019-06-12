import Document, { Html, Main, NextScript } from 'next/document';
import React from 'react';
import AppHead from '../components/AppHead';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <AppHead/>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}
