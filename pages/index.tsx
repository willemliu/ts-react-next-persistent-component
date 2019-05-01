import React from "react";
import Head from 'next/head';
import Header from "../components/Header";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

export default class Index extends ComponentBase<any, YoutubeState> {
    static async getInitialProps() {
        return {youtubeId: this.youtubeId};
    }

    private static youtubeId = 'dxq-7RcC0Tc';

    componentDidMount() {
        if (!this.props.playing) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        YoutubeStore.setYoutubeId(Index.youtubeId);
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
                    {this.state.youtubeId && Index.youtubeId !== this.state.youtubeId ? (
                        <a onClick={this.changeYoutubeId}>Change video to: {Index.youtubeId}</a>
                    ) : null}
                </div>
            </>
        );
    }

    protected _buildState(props: {}, initialBuild: boolean): YoutubeState {
        return {
            youtubeId: YoutubeStore.getYoutubeId()
        };
    }
}
