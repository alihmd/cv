module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    module: {
      rules: [{
        test: /\.md$/i,
        use: 'raw-loader',
      }],
    },
  },
};
