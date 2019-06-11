import React from 'react';
import { Head } from "next/document";
import { withAmp, useAmp } from 'next/amp';

function AppHead(props: any) {
    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
            {useAmp() ? null : <meta name="viewport" content="width=device-width, initial-scale=1,maximum-scale=1,user-scalable=no"/>}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color" content="#000000"/>
            <meta name="description" content="This is an example project showcasing the use of Next.JS to create a persistant player which survives navigation"/>
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
            {useAmp() ? <script async custom-element="amp-youtube" src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"/> : null}
        </Head>
    );
}

export default withAmp(AppHead, { hybrid: true });
