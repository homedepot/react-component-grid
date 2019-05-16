require('babel-polyfill');
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';

let config = {};
if (isProd) {
    config = {
        entry: path.join(__dirname, './src/grid/componentGrid.js'),
        mode: 'production',
        output: {
            filename: 'componentGrid.js',
            path: path.join(__dirname, './lib/grid'),
            library: pkg.name,
            libraryTarget: 'umd',
            publicPath: '/lib/grid/',
            umdNamedDefine: true,
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
        ],
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: {
                        loader: 'babel-loader',
                    },
                    exclude: /node_modules/,
                },
            ],
        },
        externals: {
            // Don't bundle react or react-dom
            react: {
                commonjs: 'react',
                commonjs2: 'react',
                amd: 'React',
                root: 'React',
            },
            'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                amd: 'ReactDOM',
                root: 'ReactDOM',
            },
        },
    };
} else {
    config = {
        entry: ['babel-polyfill', path.join(__dirname, './src/examples/search/components/index.js')],
        mode: 'development',
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('development'),
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, './index.html'),
            }),
        ],
        devServer: {
            contentBase: path.join(__dirname, './src/examples/search/components/'),
            compress: true,
            port: 1234,
            hot: true,
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: {
                        loader: 'babel-loader',
                    },
                    exclude: /node_modules/,
                },
            ],
        },
    };
}

module.exports = config;
