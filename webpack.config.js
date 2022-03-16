const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// Archivo de configuracion de webpack
module.exports = {
  mode: "development", // development  (nomin), prod(min)
  devtool: false, //nos permite ver de mejor manera el codigo en nuestro output
  entry: "./src/index.js", // ubicacion de nuestro codigo fuente (donde inicia todo)
  output: {
    filename: "main.[hash].bundle.js", // nombre del archivo que deseamos generar para nuestro bundle
    path: path.resolve(__dirname, "bundle"), //almacenamos nuestro output en un nuevo directorio dentro de nuestro root path
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: "main.[hash].bundle.css" }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, // definimos el tipo de archivo para nuestra regla
        use: [MiniCssExtractPlugin.loader, "css-loader"], //utilizamos un loader para poder crear el bundle, tienen un orden
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'images',
        },
      },
    ],
  },
};
