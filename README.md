Example of a gallery
===================================
An example of a "small ad gallery" view using Backbone.js, Require,js, Handlebars templates

### Run locally
* from the root of the project "sol", run `python -m SimpleHTTPServer 8000`

### Requirements
* [node.js](http://nodejs.org/) for npm (node package manager) so you can get the other compilation tools
* [grunt-cli](http://gruntjs.com/getting-started) command line interface for automation

### Instructions
* From project root, run `npm install`
* Make template changes in `src/templates/raw`
* Run `grunt` or `grunt handlebars` to compile the handlebars templates
* Template will be compiled in `src/templates/compiled`

### Application implementation
* Shource code is located in /src
* Data is located in folder /data
* Access the application using index.html
* BDD/TDD test should be written in /test folder
* Gruntfile.js is the build recipe
