import React from "react";
import App, { Container } from 'next/app';
import YoutubeEmbed from "../components/YoutubeEmbed";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

declare var process: any;

class AppContainer extends ComponentBase<any, YoutubeState> {
    private useState = !!process.browser // We should use props when rendered on server. Use state when rendered in client.
    state: any = {
        youtubeId: "Tyb47Bteohg"
    }

    protected _buildState(props: {}, initialBuild: boolean): YoutubeState {
        this.useState = initialBuild ? this.state.useState : true;
        return {
            youtubeId: YoutubeStore.getYoutubeId(),
            isPlaying: YoutubeStore.getIsPlaying()
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <style jsx global>{`
                    html, body {
                        padding: 0;
                        margin: 0;
                    }
                    .body a {
                        cursor: pointer;
                        display: block;
                        text-decoration: underline;
                        padding: 1rem 0;
                    }
                `}</style>

                <Component playing={this.state.isPlaying}/>
                <YoutubeEmbed youtubeId={this.useState ? this.state.youtubeId : pageProps.youtubeId}/>
            </>
        );
    }
}

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
