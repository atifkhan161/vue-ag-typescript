# vue-ag-typescript
Ag grid example for vuejs with typescript


Open up your `package.json` and add a script named `build` to run Webpack.
Your `"scripts"` field should look something like this:

```json
"scripts": {
    "build": "webpack",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

Once we add an entry point, we'll be able to build by running

```sh
npm run build
```

and have builds get triggered on changes by running

```sh
npm run build -- --watch
```