const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'new-menu.js'
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              'style-loader', 
              'css-loader', 
              'sass-loader',
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
          { 
            test: /\.hbs$/, loader: "handlebars-loader" 
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'svg-url-loader',
                options: {
                  limit: 10000,
                },
              },
            ],
          },
        ],
      },
    plugins: [
      new HtmlWebpackPlugin({template: 'src/index.html'}),
      new MiniCssExtractPlugin({filename: 'styles.css'}),
      new CleanWebpackPlugin(),
  ],  
    devServer: {
        port: 4444,
        open: true,
        stats: 'errors-only',
    }
};
    