import Document, { Html, Main, NextScript } from 'next/document';
import React from 'react';
import AppHead from '../components/AppHead';
import { setClient } from '../utils/app';
import { ServerStyleSheet } from 'styled-components';
import { Log } from "../utils/log";
import {Loggly} from 'winston-loggly-bulk';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        // Server only execution
        Log.add(new Loggly({
            token: 'c44e0143-3257-4a8f-a4b3-a3df1aefd79f',
            inputToken: 'c44e0143-3257-4a8f-a4b3-a3df1aefd79f',
            level: 'info',
            subdomain: 'fdmg',
            tags: ["Winston-NodeJS"],
            json: true
        }));

        try {
            ctx.renderPage = () =>
            originalRenderPage({
            enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />)
            });

            if (ctx.req.query && ctx.req.query.isPwa === 'true') {
                setClient('PWA');
            }
            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [...initialProps.styles as any, ...sheet.getStyleElement()]
            };
        } finally {
            sheet.seal();
        }
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
