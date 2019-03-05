import React, { PureComponent } from "react";
import Head from 'next/head';
import Header from "../components/Header";

export default class Index extends PureComponent<any, any> {
    onClick = () => {
        if (this.props.handlePlayerUrlChange) { this.props.handlePlayerUrlChange('https://www.youtube.com/embed/MfD67KCFxqI'); }
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
                    Page 1
                    <a onClick={this.onClick}>Change player url</a>
                </div>
            </>
        );
    }
}