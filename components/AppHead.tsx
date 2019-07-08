import React from 'react';
import { Head } from 'next/document';
import { useAmp } from 'next/amp';
import { setClient, getClient } from '../utils/app';
import { Log } from '../utils/log';

export const config = {
    amp: 'hybrid',
};

const loggly = `var _LTracker = _LTracker || [];
_LTracker.push({
    'logglyKey': 'c44e0143-3257-4a8f-a4b3-a3df1aefd79f',
    'sendConsoleErrors' : true,
    'tag' : 'loggly-jslogger'
});`;

export default function AppHead() {
    if (useAmp()) {
        setClient('AMP');
        Log.info({ client: getClient() });
    }

    return (
        <Head>
            <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
            {useAmp() ? null : (
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1,user-scalable=1"
                />
            )}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="theme-color" content="#000000" />
            <meta
                name="description"
                content="This is an example project showcasing the use of Next.JS to create a persistant player which survives navigation"
            />
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
            {useAmp() ? (
                <script
                    async
                    custom-element="amp-youtube"
                    src="https://cdn.ampproject.org/v0/amp-youtube-0.1.js"
                />
            ) : null}
            {useAmp() ? null : (
                <>
                    <script
                        type="text/javascript"
                        src="//cloudfront.loggly.com/js/loggly.tracker-latest.min.js"
                        async
                    />
                    <script dangerouslySetInnerHTML={{ __html: loggly }} />
                </>
            )}
        </Head>
    );
}
