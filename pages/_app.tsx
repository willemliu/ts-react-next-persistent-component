import React from "react";
import App, { Container } from 'next/app';
import YoutubeEmbed from "../components/YoutubeEmbed";

declare var process: any;

export default class PersistentApp extends App {
    state: any = {
        playing: false,
        youtubeId: "Tyb47Bteohg",
        useState: !!process.browser // We should use props when rendered on server. Use state when rendered in client.
    }

    static async getInitialProps({ Component, ctx }: any) {
        let pageProps = {}
    
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }
    
        return { pageProps }
    }

    handlePlaying = () => {
        this.setState({playing: true});
    }

    handleStopped = () => {
        this.setState({playing: false});
    }

    handleYoutubeIdChange = (youtubeId: string) => {
        this.setState({
            youtubeId: youtubeId,
            useState: true
        });
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
                        padding: 1rem 0;
                    }
                `}</style>

                <Component {...pageProps} handleYoutubeIdChange={this.handleYoutubeIdChange} playing={this.state.playing}/>
                <YoutubeEmbed youtubeId={this.state.useState ? this.state.youtubeId : pageProps.youtubeId} onPlaying={this.handlePlaying} onStopped={this.handleStopped}/>
            </Container>
        );
    }
}
