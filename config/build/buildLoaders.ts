import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { buildSvgLoaders } from './loaders/buildSvgLoaders';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(option: BuildOptions): webpack.RuleSetRule[] {
    const { isDev } = option;

    const svgLoader = buildSvgLoaders();

    const codeBabelLoader = buildBabelLoader({ ...option, isTsx: false });
    const tsxCodeBabelLoader = buildBabelLoader({ ...option, isTsx: true });

    const reactRefreshLoader = {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
            {
                loader: require.resolve('babel-loader'),
                options: {
                    plugins: [
                        isDev && require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                },
            },
        ],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = buildCssLoaders(isDev);

    return [
        fileLoader,
        svgLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        reactRefreshLoader,
        cssLoader,
    ];
}
