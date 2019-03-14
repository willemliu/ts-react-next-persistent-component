import React, { PureComponent } from "react";
import Head from 'next/head';
import Header from "../components/Header";

export default class Page2 extends PureComponent<any, any> {
    private static youtubeId = '1roy4o4tqQM';
    
    static async getInitialProps() {
        return {youtubeId: this.youtubeId};
    }

    componentDidMount() {
        if (!this.props.playing) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        if (this.props.handleYoutubeIdChange) { this.props.handleYoutubeIdChange(Page2.youtubeId); }
    }

    render() {
        return (
            <>
                <Head>
                    <title>BNR Page 2 - persistent component</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="body">
                    <Header/>
                    <h1>Page 2</h1>
                    <a onClick={this.changeYoutubeId}>Change video {this.props.youtubeId}</a>
                </div>
            </>
        );
    }
}