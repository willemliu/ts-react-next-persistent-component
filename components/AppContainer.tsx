import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";
import { setClient } from "../utils/app";

declare var process: any;

export default class AppContainer extends ComponentBase<any, YoutubeState> {
    state: any = {};
    private isBrowser = !!process.browser; // We should use props when rendered on server. Use state when rendered in client.

    constructor(props: any) {
        super(props);
        if (this.isBrowser) {
            if (window.location.search.indexOf('isPwa=true') > -1) {
                setClient('PWA');
            }
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Component {...pageProps}/>
                <YoutubeEmbed youtubeId={this.isBrowser ? this.state.youtubeId : pageProps.youtubeId}/>
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
        this.isBrowser = initialBuild ? this.state.useState : true;
        return {
            initialYoutubeId: '',
            youtubeId: YoutubeStore.getYoutubeId(),
            isPlaying: YoutubeStore.getIsPlaying()
        };
    }
}
