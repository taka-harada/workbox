const path = require('path')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const dist = __dirname + '/dist'

module.exports = {
  mode: 'development', // webpack4以降はモード指定が必須？
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map', //ブラウザでのデバッグ用にソースマップを出力する

  module: {
    rules: [
      {
        // test:/\.(js|jsx)$/,
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //       url: false,
        //       importLoaders: 2
        //     },
        //   },
        //   {
        //     loader: 'sass-loader',
        //   }
        // ],
      },
      {
        test: /\.html$/,
        use:  [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      }
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: 'images/[name].[ext]'
      //     }
      //   }
      // },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
   //   new CleanWebpackPlugin(['dist']),
  //   new WorkboxWebpackPlugin.GenerateSW ()
    new WorkboxWebpackPlugin.GenerateSW({
      globDirectory: dist,
      globPatterns: [
        '**/*.{html,js}',
        'images/*.{png,gif,webp,svg}'
      ],
      swDest: dist + '/sw.js',
      //clientClaim: true,
      //skipWaiting: true,
      runtimeCaching: [
        {
          // urlPattern: new RegExp('^https://bst-cdn-image.s3-ap-northeast-1.amazonaws.com/'),
          // urlPattern: new RegExp('^' + 'https://bst-cdn-image\.s3-ap-northeast-1\.amazonaws\.com/' + '.*'),
          urlPattern: /^https:\/\/bst-cdn-image\.s3-ap-northeast-1\.amazonaws\.com.*$/,
          // urlPattern: new RegExp('^https://bst-cdn-image.s3-ap-northeast-1.amazonaws.com/(.*)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'cdn-s3',
            expiration: {
              maxEntries: 10,
              maxAgeSeconds: 240 * 60 * 60
            },
            cacheableResponse: { statuses: [0, 200] },
          }
        }
      ],
    })
  ],

  //webpack dev server用の設定
  devServer: {
    contentBase: path.join(__dirname, 'dist'), //コンテンツのルートディレクトリ
    port: 8084,
    watchContentBase: true, //コンテンツの変更を監視する
    open: true

  }
}
