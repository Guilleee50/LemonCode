import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import path from 'path';
import url from 'url';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default merge(common, {
    mode: "production",
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
        }),
    ]
});