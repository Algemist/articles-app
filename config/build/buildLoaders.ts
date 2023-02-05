import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader =  {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            }
        ]
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                  modules: {
                      auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                      localIdentName: option.isDev
                          ? '[path][name]__[local]--[hash:base64:5]'
                          : '[hash:base64:8]'
                  }
              }
            },
            "sass-loader",
        ],
    };

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    return [
        fileLoader,
        svgLoader,
        typescriptLoader,
        cssLoader,
    ];
}