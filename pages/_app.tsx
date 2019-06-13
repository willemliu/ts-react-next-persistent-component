import React from "react";
import App, { Container } from 'next/app';
import AppContainer from "../components/AppContainer";

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
                <AppContainer {...this.props}/>
            </Container>
        );
    }
}
