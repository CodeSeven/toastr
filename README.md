# toastr
**toastr** is a Javascript library for Gnome / Growl type non-blocking notifications. jQuery is required. The goal is to create a simple core library that can be customized and extended.

## Current Version
1.3.1

## Demo
- Demo can be found at http://codeseven.github.io/toastr/demo.html

- [Demo using FontAwesome icons with toastr](http://plnkr.co/edit/6W9URNyyp2ItO4aUWzBB?p=preview)

## CDNjs
Toastr is hosted at CDN JS

#### Debug
- [//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/js/toastr.js](//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/js/toastr.js)
- [//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/css/toastr.css](//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/css/toastr.css)

#### Minified
- [//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/js/toastr.min.js](//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/js/toastr.min.js) 
- [//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/css/toastr.min.css](//cdnjs.cloudflare.com/ajax/libs/toastr.js/1.3.1/css/toastr.min.css)


## NuGet Gallery
http://nuget.org/packages/toastr

## [Bower](http://bower.io/)
bower install toastr

## Quick start

###3 Easy Steps
For other API calls, see the [demo](http://codeseven.github.io/toastr/demo.html).

1. Link to toastr.css `<link href="toastr.css" rel="stylesheet"/>`

2. Link to toastr.js `<script src="toastr.js"></script>`

3. use toastr to display a toast for info, success, warning or error

		// Display an info toast with no title
		toastr.info('Are you the 6 fingered man?')

### Other Options
	// Display a warning toast, with no title
	toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
	
	// Display a success toast, with a title
	toastr.success('Have fun storming the castle!', 'Miracle Max Says')
	
	// Display an error toast, with a title
	toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
		
	// Clears the current list of toasts
	toastr.clear()

	// Show newest toast at bottom (top is default)
	toastr.options.newestOnTop = false;

	// Define a callback for when the toast fades in/out
	toastr.options.onFadeIn = function() { console.log('hello'); }
	toastr.options.onFadeOut = function() { console.log('goodbye'); }

## Building Toastr

To build the minified and css versions of Toastr you will need [node](http://nodejs.org) installed.

Install the [Grunt](http://gruntjs.com/) command line. This might require `sudo`.

```shell
npm install -g grunt-cli
```

Then, from the main project folder run this command. This should not require `sudo`.

```shell
npm install
```

At this point the dependencies have been installed and you can build Toastr

```shell
grunt
```

## Authors
**Hans Fjällemark**

+ http://twitter.com/hfjallemark

**John Papa**

+ http://twitter.com/John_Papa

## Credits
Inspired by https://github.com/Srirangan/notifer.js/.


## Copyright
Copyright © 2012 [Hans Fjällemark](http://twitter.com/hfjallemark) & [John Papa](http://twitter.com/John_Papa).

## License 
toastr is under MIT license - http://www.opensource.org/licenses/mit-license.php
