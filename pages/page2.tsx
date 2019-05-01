import React from "react";
import Head from 'next/head';
import Header from "../components/Header";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

export default class Page2 extends ComponentBase<any, YoutubeState> {
    static async getInitialProps() {
        return {youtubeId: this.youtubeId};
    }

    private static youtubeId = '1roy4o4tqQM';

    componentDidMount() {
        if (!this.props.playing) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        YoutubeStore.setYoutubeId(Page2.youtubeId);
    }

    render() {
        return (
            <>
                <Head>
                    <title>BNR Page 2 - persistent component</title>
                </Head>
                <Header/>
                <div className="body">
                    <h1>Page 2</h1>
                    {this.state.youtubeId && Page2.youtubeId !== this.state.youtubeId ? (
                        <a onClick={this.changeYoutubeId}>Change video to: {Page2.youtubeId}</a>
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
