# Octobox Browser Extension

**Note: This is a repository for the browser extension code only for artwork and other Octobox repositories visit the [Assembly page](https://assembly.com/octobox).**

Octobox is a web app that helps people collect images, bookmarks and notes in a simple and visually pleasing way. It requires a Dropbox account and uses it almost exclusively for storage.

The app is live and functional! You can create an account at [http://app.useoctobox.com](http://app.useoctobox.com).

To read about current areas of focus and contributing to the project head over to the [Assembly page](https://assembly.com/octobox).

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/). You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

### Tools Prerequisites
* NPM - Node.js package manager; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ npm install -g bower
```
* Grunt - Download and Install [Grunt](http://gruntjs.com).

```
$ npm install -g grunt-cli
```
* SASS - [SASS](http://sass-lang.com) is a CSS extension language used for styling Octobox frontend. You'll need the latest version of the SASS Ruby gem in order to build the stylesheets.

```
$ sudo gem install sass
```


## Running the project
After downloading the repo and installing these dependencies you'll need to run:

```
$ npm install 
$ bower install
```
to download all the necessary project packages. After this step is complete, run `grunt` from the project directory to fire up a server that will run both the frontend and backend. You can then visit `http://localhost:3000/` to access Octobox. 

## Troubleshooting
During install some of you may encounter some issues.

Most issues can be solved by one of the following tips, but if are unable to find a solution feel free to contact us via the repository issue tracker or the links provided below.

#### Update NPM, Bower or Grunt
Sometimes you may find there is a weird error during install like npm's *Error: ENOENT*. Usually updating those tools to the latest version solves the issue.

* Updating NPM:
```
$ npm update -g npm
```

* Updating Grunt:
```
$ npm update -g grunt-cli
```

* Updating Bower:
```
$ npm update -g bower
```

#### Cleaning NPM and Bower cache
NPM and Bower has a caching system for holding packages that you already installed.
We found that often cleaning the cache solves some troubles this system creates.

* NPM Clean Cache:
```
$ npm cache clean
```

* Bower Clean Cache:
```
$ bower cache clean
```

## Running the Extension

TODO: write instructions on how to run the extension on Chrome.

## More Information
Visit Octobox project page on [Assembly](http://www.assembly.com/octobox/).

## License
[The AGPL v3 License](http://www.gnu.org/licenses/agpl-3.0.html)


