import React from "react";
import Head from 'next/head';
import Header from "../components/Header";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

export default class Page1 extends ComponentBase<any, YoutubeState> {
    static async getInitialProps() {
        return {youtubeId: this.youtubeId};
    }

    private static youtubeId = 'MfD67KCFxqI';

    componentDidMount() {
        if (!this.props.playing) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        YoutubeStore.setYoutubeId(Page1.youtubeId);
    }

    render() {
        return (
            <>
                <Head>
                    <title>BNR Page 1 - persistent component</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header/>
                <div className="body">
                    <h1>Page 1</h1>
                    {this.state.youtubeId && Page1.youtubeId !== this.state.youtubeId ? (
                        <a onClick={this.changeYoutubeId}>Change video to: {Page1.youtubeId}</a>
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
