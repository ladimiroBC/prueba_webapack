const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename:'images'
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.png$/,
        //test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        type:'asset/resource',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
  },
};
