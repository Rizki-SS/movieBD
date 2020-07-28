const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CopyPlugin = require('copy-webpack-plugin');
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    module: {
        rules: [{
            test: /\.js$/,
            exclude: "/node_modules/",
            use: [{
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }]
        }]
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'public/image'),
                to: path.resolve(__dirname, 'dist/public/image')
            }, ],
        }),
    ]
})