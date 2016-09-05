var webpack = require('webpack');
var path = require('path');
var dedupePlugin = new webpack.optimize.DedupePlugin();
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
});
var commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: "common",
    filename: 'common.js'
});
var CopyWebpackPlugin = require('copy-webpack-plugin');
var copyWebpackPlugin = new CopyWebpackPlugin([{
    from: path.join(__dirname, 'src', 'vendor'),
    to: path.join(__dirname, 'build', 'vendor'),
}, {
    from: path.join(__dirname, 'src', 'imgs', 'favicon.ico'),
    to: path.join(__dirname, 'build'),
}]);
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var imageminPlugin = new ImageminPlugin({
    disable: true,
    optipng: {
        optimizationLevel: 4
    },
    gifsicle: {
        optimizationLevel: 1
    },
    jpegtran: {
        progressive: false
    },
    svgo: {},
    pngquant: null,
    plugins: []
});

module.exports = {
    plugins: [
        commonsChunkPlugin,
        dedupePlugin,
        copyWebpackPlugin,
        uglifyJsPlugin,
        imageminPlugin
    ],
    entry: {
        index: ['./src/tsx/index.tsx'],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build'),
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg|gif|ico)$/,
            loader: "url?limit=1024&name=[hash:16].[ext]"
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=1024&mimetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10024&mimetype=application/font-woff2"
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=1024&mimetype=application/octet-stream"
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=1024&mimetype=image/svg+xml"
        }, {
            test: /\.tsx?$/,
            loader: "ts-loader"
        }]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "jQuery": "jQuery"
    }
};