import webpack from 'webpack';

export function buildSvgLoaders(): webpack.RuleSetRule {
    return {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: ['@svgr/webpack'],
    };
}
