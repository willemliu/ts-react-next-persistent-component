import React, { PureComponent } from "react";
import Head from 'next/head';
import Header from "../components/Header";

export default class Page1 extends PureComponent<any, any> {
    private static url = 'https://www.youtube.com/embed/MfD67KCFxqI';
    
    static async getInitialProps() {
        return {playerUrl: this.url};
    }

    onClick = () => {
        if (this.props.handlePlayerUrlChange) { this.props.handlePlayerUrlChange(Page1.url); }
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
                    <a onClick={this.onClick}>Change player url</a>
                </div>
            </>
        );
    }
}