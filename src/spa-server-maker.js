const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require('path');
const appRoot = require('app-root-path');

const app = express();
const port = 3000;

module.exports = (done, base = appRoot.toString()) => {
  const root = path.join(base, '/build');

  app.use(express.static(root));
  app.use(fallback('index.html', { root }));

  const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);

    if (done) {
      done();
    }
  });

  return server;
};
