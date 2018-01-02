module.exports = {
    entry: {
        'app/scripts/contentscript':'./app/scripts/contentscript.js',
        'app/scripts/popup':'./app/scripts/popup.js',
        'app/scripts/index':'./app/scripts/index.js'
    },
    output: {
        filename: '[name].bundle.js'
    },
    externals: {
        "ramda": "R"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules|bower_components/,
        }, {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules|bower_components/,
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    devtool: 'source-map'
};