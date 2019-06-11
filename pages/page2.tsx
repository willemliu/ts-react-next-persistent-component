import React from "react";
import Head from 'next/head';
import Header from "../components/Header";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

export default class Page2 extends ComponentBase<any, YoutubeState> {
    static async getInitialProps() {
        return {youtubeId: '1roy4o4tqQM'};
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
                    <title>BNR Page 2 - persistent component</title>
                </Head>
                <Header/>
                <div className="body">
                    <h1>Page 2</h1>
                    {this.state.initialYoutubeId !== this.state.youtubeId ? (
                        <a onClick={this.changeYoutubeId}>Change video to: {this.state.initialYoutubeId}</a>
                    ) : null}
                </div>
            </>
        );
    }

    protected _buildState(props: {}, initialBuild: boolean): YoutubeState {
        return {
            initialYoutubeId: '1roy4o4tqQM',
            youtubeId: YoutubeStore.getYoutubeId()
        };
    }
}
