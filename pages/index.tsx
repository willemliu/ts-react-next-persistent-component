import React, { PureComponent } from "react";
import Head from 'next/head';
import Header from "../components/Header";

export default class Index extends PureComponent<any, any> {
    render() {
        return (
            <>
                <Head>
                    <title>BNR - persistent component</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div className="body">
                    <Header/>
                    Home
                </div>
                <style jsx global>{`
                    html, body {
                        padding: 0;
                        margin: 0;
                    }
                `}</style>
            </>
        );
    }
}
