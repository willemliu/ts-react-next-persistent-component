import React, { PureComponent } from "react";
import Head from 'next/head';
import Header from "../components/Header";

/**
 * Home page.
 */
export default class Index extends PureComponent<any, any> {
    static async getInitialProps() {
        return {
            initialYoutubeId: 'dxq-7RcC0Tc',
            youtubeId: 'dxq-7RcC0Tc'
        };
    }

    componentDidMount() {
        if (!this.props.isPlaying) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        this.props.onYoutubeIdChange(this.props.initialYoutubeId);
    }

    render() {
        return (
            <>
                <Head>
                    <title>BNR {this.props.youtubeId}- persistent component</title>
                </Head>
                <Header/>
                <div className="body">
                    <h1>Home</h1>
                    {this.props.initialYoutubeId !== this.props.activeYoutubeId ? (
                        <a onClick={this.changeYoutubeId}>Change video to: {this.props.initialYoutubeId}</a>
                    ) : null}
                </div>
            </>
        );
    }
}
