const path = require('path')


module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader',
        options: {configFile: 'tsconfig.exclude.json'},
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js'  ],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    }
  },
  output: {
    filename: 'mme.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
};
