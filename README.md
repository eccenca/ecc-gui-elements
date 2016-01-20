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

## Usage with Sass CLI tools

There are two main CLI tools for Sass:

- [Ruby Sass](https://github.com/sass/sass): install it by `gem install sass`
- [Node Sass](https://github.com/sass/node-sass): install it by `npm install -g node-sass` (appr. 20 times faster than Ruby Sass)

Always use `src/main.sass.scss` as import or source.
