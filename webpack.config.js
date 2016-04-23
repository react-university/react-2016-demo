const path              = require('path');
const webpack           = require('webpack');

const WEBPACK_TARGET = process.env.WEBPACK_TARGET;

const cwd = process.cwd();

const config = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    `./${WEBPACK_TARGET}/src/index.jsx`
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    modulesDirectories: [cwd, 'node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  devServer: {
    contentBase: './public',
    hot: true,
    historyApiFallback: true,
  },
  devtool: 'eval-source-map',
  noInfo: true,
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot!babel'
      },
      {
          test: /\.json$/,
          exclude: /node_modules/,
          loader: 'json'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!autoprefixer?browsers=last 2 versions'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  const productionPlugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ];
  productionPlugins.forEach((plugin) => config.plugins.push(plugin));
}

if (process.env.LINT) {
  config.module.preLoaders = [
    {
      test: /\.jsx$/,
      loader: 'eslint',
      include: [__dirname],
      exclude: [path.join(__dirname, './', 'node_modules'), path.join(__dirname, './', 'lib')]
    }
  ];
}

module.exports = config;
