testable-js-project
===================

This is a really basic framework for creating a testable Javascript project.

Dependencies
------------

This project relies on the following stuff for testing:

* [Node.js](http://nodejs.org/)
* [Grunt](http://gruntjs.com)
* [Jasmine](http://pivotal.github.com/jasmine/)
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [Testacular](http://http://vojtajina.github.com/testacular/)
* [gruntacular](https://github.com/OpenWebStack/gruntacular)

Usage
-----

The first thing you'll want, if you don't already have it, to install Node.js. You can do that with [Brew](http://mxcl.github.com/homebrew/) on OS X, or use one of the installers available on the [Node.js downloads page](http://nodejs.org/downloads/).

Ok, now fork this repo.

After that, you'll want to get the Grunt CLI (also called `grunt-cli`). This is the newer (~0.4.x) version of grunt; if you're using 0.3.x, you're need to remove it with `npm uninstall -g grunt`.

To install the latest version of `grunt-cli`:

    $ npm install -g grunt-cli@master

Once you've got that installed, you can install all of the other dependencies locally in the project using NPM. To do this, you'll want to

    $ cd [PROJECT_FOLDER]
    $ npm install
    
This will put all of the Node modules into the `node_modules` folder in the project for you. Note that this includes installing a local copy of Testacular. If you want to use a global copy, comment or remove the Testacular entry from the `devDependencies` object in `package.json` and install Testacular globally like this:

    $ npm install -g testacular

How to Write Tests
------------------

[To do]

License
-------

This project is free software. It comes without any warranty, to
the extent permitted by applicable law. You can redistribute it
and/or modify it under the terms of the Do What The Fuck You Want
To Public License, Version 2, as published by Sam Hocevar. See
http://sam.zoy.org/wtfpl/COPYING for more details.
