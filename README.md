# Eccenca style core (ecc-style-core)

Style core for all projects.
Includes libraries from:

- [Material Design Lite (forked)](https://github.com/eccenca/material-design-lite)
- [Material Design icons](http://google.github.io/material-design-icons/)
- [Roboto Font](https://github.com/FontFaceKit/roboto)

## Usage with Node

- Install into your app `npm install --save ecc-style-core`.
- Import in your bootstrapper with `import 'ecc-style-core';`, or
- Use Webpack's `require` method with `src/main.node.scss`.

### Use style configuration in your modules

You can import the global default configuration by using it from ``ecc-style-core``:

1. install node module: ``npm install ecc-style-core --save``
2. import it your component SCSS file: ``@import '~ecc-style-core/src/configuration.default'``

## Usage with Sass CLI tools

There are two main CLI tools for Sass:

- [Ruby Sass](https://github.com/sass/sass): install it by `gem install sass`
- [Node Sass](https://github.com/sass/node-sass): install it by `npm install -g node-sass` (appr. 20 times faster than Ruby Sass)

Always use `src/main.sass.scss` as import or source.
