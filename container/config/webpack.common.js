const HtmlWPPlugin = require('html-webpack-plugin');

const htmlWPPlugin = new HtmlWPPlugin({
    template: './public/index.html'
})

module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    },

    plugins: [ htmlWPPlugin ]
}