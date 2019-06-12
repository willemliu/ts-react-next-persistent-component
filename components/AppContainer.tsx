import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

declare var process: any;

export default class AppContainer extends ComponentBase<any, YoutubeState> {
    state: any = {};
    private isServer = !!process.browser; // We should use props when rendered on server. Use state when rendered in client.

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Component {...pageProps}/>
                <YoutubeEmbed youtubeId={this.isServer ? this.state.youtubeId : pageProps.youtubeId}/>
                <style jsx global>{`
                    html, body {
                        display: flex;
                        justify-content: space-around;
                    }
                    @media only screen and (min-width: 861px) {
                        body {
                            margin: 0;
                            max-width: 800px;
                        }
                    }
                    @media only screen and (min-width: 1280px) {
                        body {
                            max-width: 1024px;
                        }
                    }
                    .body a {
                        cursor: pointer;
                        display: block;
                        text-decoration: underline;
                        padding: 1rem 0;
                    }
                `}</style>
            </>
        );
    }

    protected _buildState(props: any, initialBuild: boolean): YoutubeState {
        this.isServer = initialBuild ? this.state.useState : true;
        return {
            initialYoutubeId: '',
            youtubeId: YoutubeStore.getYoutubeId(),
            isPlaying: YoutubeStore.getIsPlaying()
        };
    }
}
