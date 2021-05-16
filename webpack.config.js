const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = (env, argv) => {
  const { mode } = argv;
  const isProduction = mode === "production";

  return {
    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
      path: path.resolve(__dirname, "build"),
      filename: isProduction ? "[name].[contenthash].js" : "main.js",
    },
    devServer: {
      contentBase: path.resolve(__dirname, "build"),
      compress: true,
      port: 3000,
      historyApiFallback: true,
    },
    devtool: "source-map",
    resolve: {
      extensions: [".js", ".json", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-optional-chaining"],
          },
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpeg|j?g|svg|gif|eot|woff2|woff|ttf)?$/,
          use: "file-loader",
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })],
  };
};

module.exports = config;
