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
        return {youtubeId: 'dxq-7RcC0Tc'};
    }

    componentDidMount() {
        if (!this.props.playing) {
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
                    <title>BNR - persistent component</title>
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

    protected _buildState(props: {}, initialBuild: boolean): YoutubeState {
        return {
            initialYoutubeId: 'dxq-7RcC0Tc',
            youtubeId: YoutubeStore.getYoutubeId()
        };
    }
}
