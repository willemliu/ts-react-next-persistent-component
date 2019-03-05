import React from "react";
import App, { Container } from 'next/app';
import YoutubeEmbed from "../components/YoutubeEmbed";

export default class PersistentApp extends App {
    state: any = {
        playerUrl: "https://www.youtube.com/embed/Tyb47Bteohg"
    }

    static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx)
        }
    
        return { pageProps }
    }

    handlePlayerUrlChange = (playerUrl: string) => {
        this.setState({playerUrl});
    }

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <style jsx global>{`
                    html, body {
                        padding: 0;
                        margin: 0;
                    }
                    a {
                        cursor: pointer;
                        display: block;
                        text-decoration: underline;
                    }
                `}</style>

                <YoutubeEmbed url={this.state.playerUrl}/>
                <Component {...pageProps} handlePlayerUrlChange={this.handlePlayerUrlChange}/>
            </Container>
        );
    }
}

