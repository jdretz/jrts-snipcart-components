const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
            {
                loader: "ts-loader"
            }
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.ENV !== "production" ?
          'style-loader':
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib'),
    libraryTarget: "umd",
    library: "jrtsSnipcartComponents"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};