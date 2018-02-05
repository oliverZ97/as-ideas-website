# Ideas Engineering Home Page

This is our long running homepage project. Although we have some repos with different version of our homepage, this should be the most actual one.

* Created with "Create React App" --> read about it to understand the structure and build tools
* We use React and SASS

## Quickstart

* ``npm install``
* ``npm start`` or ``npm build``


## Setup

This project uses NPM, Yarn, Webpack, React and we assume you are at least a bit familiar with these techbologies. This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) and modified (ejected) to include additional benefits not present in Create React App. We added [SASS](https://medium.com/front-end-hacking/how-to-add-sass-or-scss-to-create-react-app-c303dae4b5bc), [Tailwind CSS](https://tailwindcss.com/), [PurgeCSS](https://github.com/FullHuman/purgecss), [PurgeCSS whitelister](https://github.com/qodesmith/purgecss-whitelister), [CSSNano](http://cssnano.co/) to webpack's build and/or dev scripts.

If you want to update or edit our webpack config, [check out](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) the readme of create-react-app. Also if you want to understand how CSS styling. images, fonts, test or other things works, see the readme.

Clone the repository, _cd_ yourself into the cloned folder and run:

```bash
yarn install
```

or 

```bash
npm install
```

## Development

Start a development server with some cool stuff like hot reloading:

```bash
yarn start (or npm run start)
```

## Production Build

To build and minify all assets run:

```bash
yarn build (or npm run build)
```

## Direct deployment to stage

```bash
scp -r build/* root@ideas-ws:/usr/share/nginx/html/website/
```