import React, { PureComponent } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { getClient, getIsServer } from '../utils/app';
import { Log } from '../utils/log';

export const config = {
    amp: 'hybrid',
};

/**
 * Home page.
 */
export default class Index extends PureComponent<any, any> {
    static async getInitialProps() {
        Log.info({ client: getClient(), view: '/', server: getIsServer() });
        return {
            initialYoutubeId: 'dxq-7RcC0Tc',
            youtubeId: 'dxq-7RcC0Tc',
        };
    }

    componentDidMount() {
        // Log.info({client: getClient(), view: '/'});
        if (!this.props.isPlaying) {
            this.changeYoutubeId();
        }
    }

    changeYoutubeId = () => {
        this.props.onYoutubeIdChange(this.props.initialYoutubeId);
    };

    render() {
        return (
            <>
                <Head>
                    <title>
                        BNR {this.props.youtubeId}- persistent component
                    </title>
                </Head>
                <Header />
                <div className="body">
                    <h1>Home</h1>
                    {this.props.initialYoutubeId !==
                    this.props.activeYoutubeId ? (
                        <a onClick={this.changeYoutubeId}>
                            Change video to: {this.props.initialYoutubeId}
                        </a>
                    ) : null}
                </div>
            </>
        );
    }
}
