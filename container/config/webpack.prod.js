const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies }= require('../package.json');

const commonConfig = require ('./webpack.common');

const domain = process.env.PRODUCTION_DOMAIN

const moduleFederation = new ModuleFederationPlugin({
    name: 'container',
    remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
    },
    shared: dependencies
})

const devConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath:'/container/latest/'
    },
    plugins: [ moduleFederation ]
};


module.exports = merge(commonConfig, devConfig);

