const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map', // Use a faster but less detailed source map
  resolve: {
    alias: {
      'monaco-editor': 'monaco-editor/esm/vs/editor/editor.api'
    }
  },
  plugins: [
    new MonacoWebpackPlugin({
      languages: ['json'],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Assuming you have Babel configured for your JavaScript/JSX files
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.worker\.(c|m)?js$/i,
        use: [
          {
            loader: 'worker-loader',
            options: { inline: 'fallback' },
          },
        ],
      },
    ],
  },
};
