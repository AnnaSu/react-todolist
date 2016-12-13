var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var rucksack = require('rucksack-css');

module.exports = {
    devtool: '#eval-source-map',
    entry: {
        js: [
            './Client/boot.js'
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
            'react-router'
        ]
    },
    output: {
        path: path.resolve(__dirname, './assets'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    module: {
        loaders: [{
                test: /.jsx?$/,
                loaders: ['react-hot-loader', 'babel-loader'],
                include: [
                    path.resolve(__dirname, 'Client'),
                    path.resolve(__dirname, 'Common'),
                ]
            }, {
                test: /.scss$/,
                loader: ExtractTextPlugin.extract('style', [
                    'css?modules&importLoaders=1&camelCase&localIdentName=[name]_[local]_[hash:base64:3]',
                    'postcss',
                    'sass'
                ])
            }, 
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.png(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/png" }
        ]
    },
    postcss: function() {
        return {
            plugins: rucksack([autoprefixer])
        };
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new ExtractTextPlugin("main.css"),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
        })
    ],
    devServer: {
        contentBase: './',
        publicPath: '/assets/',
        lazy: false,
        hot: true,
        inline: true,
        quite: true,
        info: false
    }
}
