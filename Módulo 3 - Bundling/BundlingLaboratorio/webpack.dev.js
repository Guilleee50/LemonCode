import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import path from 'path';
import url from 'url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
        ],
    },
    devtool: "eval-source-map",
    devServer: {
        port: 8080,
        hot: true,
    },
});