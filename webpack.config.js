const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:"development",
    entry: path.join(__dirname, "./src/client/index.tsx"), //Define the entry point for the project
    output: {   //Define where the compliation package would be placed
        filename: "bundle.js",
        path: path.join(__dirname, "./build")
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: 'Output Management',
        template: path.join("./src/client", "index.html")
        }),
    ],
}