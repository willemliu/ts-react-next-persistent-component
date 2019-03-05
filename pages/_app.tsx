import React from "react";
import App, { Container } from 'next/app';
import YoutubeEmbed from "../components/YoutubeEmbed";

export default class PersistentApp extends App {
    static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <YoutubeEmbed/>
                <Component {...pageProps} />
            </Container>
        );
    }
}