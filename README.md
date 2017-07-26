# Esk8Builder
Repository for the esk8builder tool

Running Version

https://shusain.github.io/Esk8Builder/

Continuous Integration/Deployment (CI/CD) of this repository is handled by travis
[![Build Status](https://travis-ci.org/shusain/Esk8Builder.svg?branch=master)](https://travis-ci.org/shusain/Esk8Builder)

To contribute to this repository first step is to sign up or sign in to github.  Go into the [app/scripts](app/scripts)
directory and look for the appropriate top level category folder.  In the particular category folder such as
[app/scripts/esc](app/scripts/esc) find the sub-category .js file or open the top level file for that category if modifying
the description for the whole category (top level files in each category folder start with an _).

Click the edit icon in the top right of the file you want to modify, make changes and submit them to be incorporated in the main
repository here.  Once changes are accepted the CI/CD will process the scripts and minify everything to deploy to the gh-pages
view linked above (deployment takes about 2 minutes after a change is accepted).

---

For the nerds/developers interested in working on the code itself:

Prerequisites for the project are having node/npm and gulp installed

  1 Clone the repository
  2 Run `npm install` in the project root to get dependencies for building/running the site
  3 Run `gulp` default task is to build the project then start watching the files for changes to auto-refresh the build and browser when files are changed to make development go more rapidly.

Once you verify your changes are working can push your code to a fork and put in a PR for me to accept the changes, if you plan to contribute often and are a member/regular on the esk8 forums ping me and I will add your github account as a contributor on this project so you can merge changes yourself.  Any changes merged into the master branch are seen by travis CI and it runs the gulp build then deploys the dist folder to the gh-pages branch so it goes live a few minutes after changes are submitted to the master branch.

The project uses Angular 1.x(6 right now) and bootstrap 4.  The JS files are all passed through babel for processing ES2015 style functions and template strings (using template strings so easier for regular people to contribute text without being cautious about escaping quotes or line breaks)