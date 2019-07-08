import React from 'react';
import App, { Container } from 'next/app';
import AppContainer from '../components/AppContainer';
import { ThemeProvider } from 'styled-components';

export const config = {
    amp: 'hybrid',
};

const theme = {
    colors: {
        primary: '#191919',
    },
};

export default class PersistentApp extends App {
    static async getInitialProps({ Component, ctx }: any) {
        let pageProps: any = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        return (
            <Container>
                <ThemeProvider theme={theme}>
                    <AppContainer {...this.props} />
                </ThemeProvider>
            </Container>
        );
    }
}
