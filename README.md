# Currency Exchange

A React app that lets you get real time currency exchange info on the fly, caching to reduce API calls.
Built using `https://api.exchangerate.host` free awesome/fast API

## To deploy to Github Pages

1.  Edit package.json file, add the following scripts:

```json
  "homepage": "http://<username>.github.io/<reponame>",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
```

2. Install gh-pages as dev dependency:

```shell
    $ npm install --save-dev gh-pages
```

3. Create Production build:

```shell
    $ npm run deploy
```

4. Stage, Commit and Push to remote origin:

```shell
    $ git commit -am "commit message here"
```

## Run locally

```shell
    $ npm start
```
