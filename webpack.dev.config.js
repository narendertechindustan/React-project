var webpack = require('webpack');   
var path = require('path');

var parentDir = path.join(__dirname, './');

module.exports = {
    entry: './src/index.js',
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },{
                test: /\.(less|css)$/,
                loaders: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: require.resolve('url-loader'),
                options: {
                  limit: 10000,
                  name: 'src/images/[name].[hash:8].[ext]',
                },
            }
        ]
    },
    output: {
        pathinfo: true,
        filename: 'assets/js/bundle.js'
        //publicPath: '/'
    },
    devServer: {
        contentBase: parentDir,
        historyApiFallback: true
    }
}

