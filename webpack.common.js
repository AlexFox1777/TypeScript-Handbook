const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // entry: The main file of our React application
    entry: "./src/index.tsx",
    output: {
        // The filename pattern to use for generated files
        filename: "bundle.js",
        // The root directory to store output files in
        path: path.resolve(__dirname, "dist"),
    },

    // Enables source-map generation in development mode
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },

    module: {
        rules: [
            // use babel-loader to load jsx and tsx files
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },

    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new CleanWebpackPlugin(),
    ],
};
