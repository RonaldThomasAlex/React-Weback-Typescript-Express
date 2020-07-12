const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, "./src/client/index.tsx"), //Define the entry point for the project
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
          {
            ///ts tsx file loaders
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
          {
            //css file loader
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            //Loader for image files
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192,
                },
              },
            ],
          },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),//Plugin that will clean the build folder
        new HtmlWebpackPlugin({
        title: 'Output Management',
        template: path.join("./src/client", "index.html")
        }),
    ],
    output: {   //Define where the compliation package would be placed
      filename: "bundle.js",
      path: path.join(__dirname, "./build")
  },
}