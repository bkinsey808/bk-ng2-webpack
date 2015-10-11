#bk-ng2-webpack

## Synopsis

This is a simple demo how to setup a project that uses TypeScript, Express 4, Angular 2, Sass 3, Gulp 3, webpack, BrowserSync, and nodemon.

For server side live reloading, this project requires [nodemon](https://github.com/remy/nodemon)

## Installation
1. Clone this repository
2. cd into the directory
3. run `npm i`
4. run `tsd install`
5. run `gulp build`

Alternatively, for Linux based operating systems you can run `./scripts/setup.sh`

This will install your node dependencies, TypeScript definitions, will run an initial build, and will install frontend dependencies.

## Use bundled mode in production (with bundling, e.g. without http/2)
WIP

## Use unbundled mode in production (without bundling, e.g. for http/2)
WIP

## Hack the code

WIP

There might be other strategies which will be better than this double watch system.
I'm open to other ideas.

Here is how this project is currently set up:
1. run `gulp` (which watches for ts file changes, and transpiles them)
2. run `webpack --progress --colors --watch` which allows webpack to monitor the transpiled js.

The live reloading server is listening at `http://localhost:3001`
