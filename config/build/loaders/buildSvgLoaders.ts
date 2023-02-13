import webpack from 'webpack';

export function buildSvgLoaders(): webpack.RuleSetRule {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };
}
