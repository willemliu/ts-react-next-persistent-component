const withOffline = require('next-offline');
const withTypescript = require("@zeit/next-typescript");
const CopyWebpackPlugin = require('copy-webpack-plugin');
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
        }],
        importScripts: ['/static/sw-push-listener.js']
    },
    webpack: (config) => {
        // this will output your push listener file to .next folder
        // check CopyWebpackPlugin docs if you want to change the destination (e.g. /static or /.next/static)
        config.plugins.push(new CopyWebpackPlugin([{from: 'static/sw-push-listener.js', src: '.next/sw-push-listener.js'}]));
        config.node = {fs: 'empty'};
        return config;
    }
}));
