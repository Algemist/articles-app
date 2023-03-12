import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode } = options;
    return {
        mode,
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
            publicPath: '/',
        },
        module: {
            rules: buildLoaders(options),
        },
        devtool: options.isDev ? 'inline-source-map' : undefined,
        plugins: buildPlugins(options),
        resolve: buildResolvers(options),
        devServer: options.isDev ? buildDevServer(options) : undefined,
    };
}
