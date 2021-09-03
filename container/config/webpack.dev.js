const { merge } = require('webpack-merge');
const HtmlWPPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies }= require('../package.json');

const commonConfig = require ('./webpack.common')

const htmlWPPlugin = new HtmlWPPlugin({
    template: './public/index.html'
})

const moduleFederation = new ModuleFederationPlugin({
    name: 'container',
    remotes: {
        marketing: 'marketing@http://localhost:8082/remoteEntry.js',
    },
    shared: dependencies
})

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [ htmlWPPlugin, moduleFederation ]
};


module.exports = merge(commonConfig, devConfig);

