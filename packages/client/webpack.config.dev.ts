import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as Webpack from 'webpack';
import * as BundleAnalyzerPlugin from 'webpack-bundle-analyzer';
import * as WebpackDevServer from 'webpack-dev-server';

const PACKAGE_ROOT = path.resolve(__dirname);

const config: Webpack.Configuration & {
  devServer: WebpackDevServer.Configuration;
} = {
  devServer: {
    contentBase: './src',
    historyApiFallback: true,
    hot: true,
  },
  devtool: 'source-map',
  entry: path.resolve(PACKAGE_ROOT, 'src/main.tsx'),
  mode: 'development',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(PACKAGE_ROOT, 'dist'),
  },
  plugins: [
    new BundleAnalyzerPlugin.BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(PACKAGE_ROOT, 'src/index.html'),
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
  target: 'web',
};

export default config;
