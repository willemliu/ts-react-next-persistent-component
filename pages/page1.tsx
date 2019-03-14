import React, { PureComponent } from "react";
import Head from 'next/head';
import Header from "../components/Header";

export default class Page1 extends PureComponent<any, any> {
    private static youtubeId = 'MfD67KCFxqI';
    
    static async getInitialProps() {
        return {youtubeId: this.youtubeId};
    }

    componentDidMount() {
        if (!this.props.playing) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        if (this.props.handleYoutubeIdChange) { this.props.handleYoutubeIdChange(Page1.youtubeId); }
    }

    render() {
        return (
            <>
                <Head>
                    <title>BNR Page 1 - persistent component</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="body">
                    <Header/>
                    <h1>Page 1</h1>
                    <a onClick={this.changeYoutubeId}>Change video {this.props.youtubeId}</a>
                </div>
            </>
        );
    }
}