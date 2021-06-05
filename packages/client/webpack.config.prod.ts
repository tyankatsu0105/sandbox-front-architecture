import HtmlWebpackPlugin from 'html-webpack-plugin';
import * as path from 'path';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as Webpack from 'webpack';
import * as WebpackDevServer from 'webpack-dev-server';

const PACKAGE_ROOT = path.resolve(__dirname);

const config: Webpack.Configuration & WebpackDevServer.Configuration = {
  entry: path.resolve(PACKAGE_ROOT, 'src/main.tsx'),
  mode: 'production',
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
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: PACKAGE_ROOT + '/src/index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
};

export default config;
