const withOffline = require('next-offline');
const withTypescript = require("@zeit/next-typescript");
const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");
const { join } = require('path');

module.exports = withTypescript(withOffline({
    target: process.env.NOW_SERVERLESS === 'false' ? 'server' : 'serverless',
    pageExtensions: ["jsx", "js", "ts", "tsx"],
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [{
            urlPattern: /^https?.*/,
            handler: 'NetworkFirst',
            options: {
                cacheName: 'https-calls',
                networkTimeoutSeconds: 15,
                expiration: {
                    maxEntries: 150,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                },
                cacheableResponse: {
                    statuses: [0, 200],
                },
            },
        }]
    }
}));
