var path = require("path");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const isProd = process.env.NODE_ENV === "production";

const config = {
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: "inline-source-map",
  entry: {
    Layout: "./src/index.tsx",
    Main1: "./src/components/Main1.tsx",
    Main2: "./src/components/Main2.tsx",
    Modules: "./src/modules.ts",
  },
  output: {
    path: path.resolve(__dirname, "./webpack"),
    filename: "[name].js",
    chunkFilename: "[name]-[hash:6].bundle.js",
    publicPath: "webpack/",
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".less"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    concatenateModules: true,
    flagIncludedChunks: true,
    innerGraph: false,
    mangleExports: false,
    mangleWasmImports: true,
    minimize: true,
    minimizer: [new TerserWebpackPlugin(), "..."],
    moduleIds: false,
    portableRecords: true,
    removeAvailableModules: true,
    runtimeChunk: "single",
    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-router-dom)[\\/]/,
          name: "react-vendor",
          chunks: "all",
          maxInitialRequests: Infinity,
          minSize: 0,
        },
      },
    },
  },
};

if (isProd) {
  config.optimization = {
    minimizer: [new TerserWebpackPlugin()],
  };
} else {
  config.devServer = {
    port: 9000,
    open: true,
    hot: true,
    compress: true,
    stats: "errors-only",
    overlay: true,
  };
}

module.exports = config;
