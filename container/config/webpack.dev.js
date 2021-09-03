const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { dependencies }= require('../package.json');

const commonConfig = require ('./webpack.common')

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
    plugins: [ moduleFederation ]
};


module.exports = merge(commonConfig, devConfig);

