module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'jshint'
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(jpg|png|gif|svg)$/,
                include: /images/,
                loader: 'url'
            }
        ]
    },
    jshint: {
        esversion: 6
    }
};