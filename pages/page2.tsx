import React, { PureComponent } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { Log } from '../utils/log';
import { getClient, getIsServer } from '../utils/app';

export const config = {
    amp: 'hybrid',
};

export default class Page2 extends PureComponent<any, any> {
    static async getInitialProps() {
        Log.info({ client: getClient(), view: 'page2', server: getIsServer() });

        return {
            initialYoutubeId: '1roy4o4tqQM',
            youtubeId: '1roy4o4tqQM',
        };
    }

    componentDidMount() {
        // Log.info({client: getClient(), view: 'page2'});
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
                        BNR Page 2 {this.props.youtubeId} - persistent component
                    </title>
                </Head>
                <Header />
                <div className="body">
                    <h1>Page 2</h1>
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
