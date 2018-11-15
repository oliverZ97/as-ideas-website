# Ideas Engineering Home Page

This is our long running homepage project. Although we have some repos with different version of our homepage, this should be the most actual one.

* CI: http://ideas-ci/go/tab/pipeline/history/as-ideas-engineering-website-3
* PROD: http://axelspringerideas.de/ 
* STAGE: https://ideas-engineering-stage.herokuapp.com/ _*MASTER branch is directly deployt to stage*_

* Created with "Create React App" --> read about it to understand the structure and build tools
* We use React and SASS

## Quickstart

Make sure you have XCode and NPM installed. If not - do so. This project uses NPM, Gatsby and we assume you are at least a bit familiar with these technologies. If you need to install those technologies get a packaging tool like Homebrew to install them.

For MAC:
```bash
xcode-select --install
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install npm
```

Install all required libraries and dependencies with NPM:

```bash
brew install npm
```

Start a development server with some cool stuff like hot reloading (on ``localhost:8000``):

```bash
npm run start
```

To build and minify all assets run (the build directory wil be ``./public/``):

```bash
npm run build
```

## Gatsbyjs

If you run a gatsby development server with ``npm run start`` you will see two urls one is ``localhost:8000``
and other is ``localhost:8000/___graphql``.

Now open your browser and enter ``localhost:8000/___graphql``.You will see a GraphiQL interface.


* Gatsby uses Graphql and Sources for Graphql to query any data
* The are plugins (configured under ``gatsby-config.js``) for new sources and to transform sources

## Project structure

* Deploying Stage to Heroku: cf. https://www.gatsbyjs.org/docs/deploying-to-heroku/
    * ``app.json``
    * ``static.json``
* NPM 
    * ``package.json``
    * ``package-lock.json``
* Gatsby
    * ``gatsby-config.js`` the configuration of gatsby and its plugins
    * ``gatsby-browser.js`` everything which will run IN the browser at runtime
    * ``gatsby-node.js`` everything at compile time, while the static pages are generated
* Source files ``/src``
    * ``src/_variables.scss`` global SASS variables
    * ``src/html.js`` the general template, aka the index.html
    * ``src/pages`` everything here will result in a HTML page
    * ``src/data`` the data for  programmtically generation of pages form **gatsby-node.js**
    * ``src/templaes`` templates for programmtically generated pages form **gatsby-node.js**


## Publishing to prod
```
scp -r ./public/* ec2-user@ec2-18-184-76-12.eu-central-1.compute.amazonaws.com:/usr/share/nginx/apps/
```
