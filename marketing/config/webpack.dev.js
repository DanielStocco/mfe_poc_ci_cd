const { merge } = require('webpack-merge');
const HtmlWPPlugin = require('html-webpack-plugin');
const ModuleFederation = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies }= require('../package.json');


const commonConfig = require ('./webpack.common')


const moduleFederationPlugin = new ModuleFederation({
    name: 'marketing',
    filename: 'remoteEntry.js',
    exposes: {
        './MarketingApp': './src/bootstrap'
    },
    shared: dependencies
})

const htmlWPPlugin = new HtmlWPPlugin({
    template: './public/index.html'
})


const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [ moduleFederationPlugin, htmlWPPlugin ]
};


module.exports = merge(commonConfig, devConfig);