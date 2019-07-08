import React, { PureComponent } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import { getClient, getIsServer } from '../utils/app';
import { Log } from '../utils/log';

export const config = {
    amp: 'hybrid',
};

export default class Page1 extends PureComponent<any, any> {
    static async getInitialProps() {
        Log.info({ client: getClient(), view: 'page1', server: getIsServer() });

        return {
            initialYoutubeId: 'MfD67KCFxqI',
            youtubeId: 'MfD67KCFxqI',
        };
    }

    componentDidMount() {
        // Log.info({client: getClient(), view: 'page1'});
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
                        BNR Page 1 {this.props.youtubeId} - persistent component
                    </title>
                </Head>
                <Header />
                <div className="body">
                    <h1>Page 1</h1>
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
