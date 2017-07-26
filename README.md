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
