module.exports = {
  entry: {
    'app': [
      './node_modules/angular2/node_modules/@reactivex/rxjs',
      './node_modules/angular2/node_modules/zone.js',
      './node_modules/angular2/node_modules/reflect-metadata',
      './dist/public/app/app.component.js'
    ]
  },
  output: {
    path: __dirname,
    filename: "dist/public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      }
    ]
  }
};
