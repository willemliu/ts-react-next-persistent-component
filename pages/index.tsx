import React from "react";
import Head from 'next/head';
import Header from "../components/Header";
import YoutubeStore, { YoutubeState } from "../stores/YoutubeStore";
import { ComponentBase } from "resub";

export default class Index extends ComponentBase<any, YoutubeState> {
    private static youtubeId = 'Tyb47Bteohg';
    
    protected _buildState(props: {}, initialBuild: boolean): YoutubeState {
        return {
            youtubeId: YoutubeStore.getYoutubeId()
        }
    }
    
    static async getInitialProps() {
        return {youtubeId: this.youtubeId};
    }

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
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header/>
                <div className="body">
                    <h1>Home</h1>
                    <a onClick={this.changeYoutubeId}>Change video {this.props.youtubeId} : {this.state.youtubeId}</a>
                </div>
            </>
        );
    }
}
