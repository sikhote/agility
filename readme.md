[![NPM version](https://img.shields.io/npm/v/parlor.svg)](https://www.npmjs.com/package/parlor)
[![CircleCI Build Status](https://img.shields.io/circleci/project/github/sikhote/parlor/master.svg?label=CircleCI)](https://circleci.com/gh/sikhote/parlor)
[![Dependency Status](https://david-dm.org/sikhote/parlor.svg)](https://david-dm.org/sikhote/parlor)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Blazing Fast](https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg)](https://twitter.com/acdlite/status/974390255393505280)

# parlor
A collection of tools for creating [React](https://github.com/facebook/react/) and [Next.js](https://github.com/zeit/next.js/) apps.

## install
`yarn add parlor` or `npm i -S parlor`

## usage
Detailed examples can be found at the [interplay.app](https://github.com/sikhote/interplay.app) repository.

### syncRouting
Sync some routing on a single page app within `_app.js` of a Next app.
```
...
import { syncRouting } from 'parlor';
import { matches, getCurrentPath, pages } from '../lib/routing';
...

class ReduxApp extends NextApp {
  ...
  componentDidMount() {
    syncRouting({ matches, getCurrentPath, pages });
  }
  ...
}
```

### next-server
A replacement for `server.js` within a Next app that always renders the root page.
```
$ node node_modules/parlor/dist/next-server.js
```

### spa-server-maker
Use to generate a SPA server that serves the `build` directory's `index.html` and static files. This is useful running a server for E2E tests through [Nightwatch.js](http://nightwatchjs.org/).
```
const spaServerMaker = require('parlor/dist/spa-server-maker.js');
const appRoot = require('app-root-path');

const server = spaServerMaker(done, appRoot.toString());
server.close();
```

### spa-server
Starts an SPA server using `spa-server-maker`.
```
$ node node_modules/parlor/dist/spa-server.js
```

## requirements
- [Node 8 LTS](https://nodejs.org/)
- [Yarn 1.9.4](https://yarnpkg.com/)
- Peer dependencies: `next`

## commands
- `yarn` to install NPM packages
- `yarn prettier` to clean code
- `yarn eslint` to check code is clean
- `yarn ci` to run all continuous integration tests
- `yarn babel` to convert code from `src` to `dist`
- `yarn publisher` - to convert code and then start publishing
