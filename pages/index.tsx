import React from "react";
import Head from 'next/head';
import Header from "../components/Header";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

/**
 * Home page.
 */
export default class Index extends ComponentBase<any, YoutubeState> {
    static async getInitialProps() {
        return {
            youtubeId: 'dxq-7RcC0Tc'
        };
    }

    componentDidMount() {
        if (!YoutubeStore.getIsPlaying()) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        YoutubeStore.setYoutubeId(this.state.initialYoutubeId);
    }

    render() {
        return (
            <>
                <Head>
                    <title>BNR {this.state.youtubeId}- persistent component</title>
                </Head>
                <Header/>
                <div className="body">
                    <h1>Home</h1>
                    {this.state.initialYoutubeId !== this.state.youtubeId ? (
                        <a onClick={this.changeYoutubeId}>Change video to: {this.state.initialYoutubeId}</a>
                    ) : null}
                </div>
            </>
        );
    }

    protected _buildState(props: any, initialBuild: boolean): YoutubeState {
        return {
            initialYoutubeId: 'dxq-7RcC0Tc',
            youtubeId: YoutubeStore.getYoutubeId()
        };
    }
}
