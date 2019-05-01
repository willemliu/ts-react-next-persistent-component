import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

declare var process: any;

export default class AppContainer extends ComponentBase<any, YoutubeState> {
    state: any = {
        youtubeId: "Tyb47Bteohg"
    };
    private useState = !!process.browser; // We should use props when rendered on server. Use state when rendered in client.

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <style jsx={true} global={true}>{`
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

    protected _buildState(props: {}, initialBuild: boolean): YoutubeState {
        this.useState = initialBuild ? this.state.useState : true;
        return {
            youtubeId: YoutubeStore.getYoutubeId(),
            isPlaying: YoutubeStore.getIsPlaying()
        };
    }
}
