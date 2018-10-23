# agility
A collection of tools for creating [React](https://github.com/facebook/react/) and [Next.js](https://github.com/zeit/next.js/) apps.

## requirements
- [Node 8 LTS](https://nodejs.org/)
- [Yarn 1.9.4](https://yarnpkg.com/)

## tools
- `next-server.js` - allows a simple server that always renders the root page every time
- `spa-server-maker` - creates a server from the `build` folder and serves `index.html` for all requests
- `spa-server` - starts an spa server using `spa-server-maker`
- `sync-routing` - for use within the `_app.js` of a [Next.js](https://github.com/zeit/next.js/) app

## commands
- `yarn` to install NPM packages
- `yarn pretty` to clean code
- `yarn lint` to check code is clean
- `yarn ci` to run all continuous integration tests
