const withTypescript = require("@zeit/next-typescript");
const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = withTypescript({
    target: process.env.NOW_SERVERLESS === 'false' ? 'server' : 'serverless',
    pageExtensions: ["jsx", "js", "ts", "tsx"]
});
