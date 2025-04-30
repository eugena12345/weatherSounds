const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         name: '[name].[hash].[ext]', 
      //         outputPath: 'assets/', 
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.svg$/, // Обрабатывать .svg файлы
        type: 'asset/resource',
        //use: ['file-loader'], // Копировать файлы в выходную директорию
      },
      {
        test: /\.(mp3|wav|ogg)$/, // Обрабатывать аудиофайлы
        type: 'asset/resource', // Копировать файлы в выходную директорию
        //use: ['file-loader'], //
        generator: {
          filename: 'assets/audio/[name][ext]', // Путь для скопированных файлов
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'), 
    port: 3000, 
    open: true, 
    hot: true,  
    compress: true,
  },

  mode: "development",
};
