import Document, { Html, Main, NextScript } from 'next/document';
import React from 'react';
import AppHead from '../components/AppHead';
import { setClient, setIsServer } from '../utils/app';
import { ServerStyleSheet } from 'styled-components';

declare var process: any;

export const config = {
    amp: 'hybrid',
};

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        setIsServer(true);

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App: any) => (props: any) =>
                        sheet.collectStyles(<App {...props} />),
                });

            if (ctx.req.query && ctx.req.query.isPwa === 'true') {
                setClient('PWA');
            }
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                ENVIRONMENT: process.env.ENVIRONMENT,
                styles: [
                    ...(initialProps.styles as any),
                    ...sheet.getStyleElement(),
                ],
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html lang="en">
                <AppHead />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
