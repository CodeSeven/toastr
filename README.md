# toastr
**toastr** is a Javascript library for non-blocking notifications.

The goal is to create a simple core library that can be customized and extended.


## Current Version
3.0.0 - Pre-release

Toastr v3.0.0 is under development. This branch should not be considered stable until further notice.

## Design Specification

*This is an evolving specification.*

toastr will:

- be written in native ES6
- use `gulp` for builds
- be transpiled to ES5 strict (via `gulp` script)
- be available to the browser as a module.
- use native DOM selectors
- perform animations via the [WebAnimations API](https://w3c.github.io/web-animations/) (using polyfills where necessary)
- be tested via Mocha / Chai

toastr will not:

- have a dependency on jQuery

## Authors
**John Papa**

+ [http://twitter.com/John_Papa](http://twitter.com/John_Papa)

**Tim Ferrell**

+ [http://twitter.com/ferrell_tim](http://twitter.com/ferrell_tim)

**Stephen Bero**

+ [http://www.stephenbero.com/](http://www.stephenbero.com/)

## Credits
Inspired by https://github.com/Srirangan/notifer.js/.

## Copyright
Copyright © 2012-2015

## License
toastr is under MIT license - http://www.opensource.org/licenses/mit-license.php