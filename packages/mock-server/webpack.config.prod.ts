import * as path from 'path';
import * as Webpack from 'webpack';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as WebpackDevServer from 'webpack-dev-server';
import WebpackNodeExternals from 'webpack-node-externals';

const PACKAGE_ROOT = path.resolve(__dirname);

const config: Webpack.Configuration & WebpackDevServer.Configuration = {
  mode: 'production',
  entry: path.resolve(PACKAGE_ROOT, 'src/main.ts'),
  output: {
    path: path.resolve(PACKAGE_ROOT, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    plugins: [new TsconfigPathsPlugin()],
  },
  target: 'node',
  externalsPresets: {
    node: true,
  },
  externals: [
    WebpackNodeExternals({
      modulesDir: path.resolve(__dirname, '../../node_modules'),
    }) as any,
  ],
};

export default config;
