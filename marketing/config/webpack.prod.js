const { merge } = require('webpack-merge');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies }= require('../package.json');

const commonConfig = require ('./webpack.common');

const moduleFederationPlugin = new ModuleFederation({
    name: 'marketing',
    filename: 'remoteEntry.js',
    exposes: {
        './MarketingApp': './src/bootstrap'
    },
    shared: dependencies
})

const config = {
    mode: 'production',
    output: { filename: '[name].[contenthash].js' },
    plugins: [ moduleFederationPlugin ]
};


module.exports = merge(commonConfig, config);







