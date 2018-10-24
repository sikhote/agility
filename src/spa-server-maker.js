const express = require('express');
const fallback = require('express-history-api-fallback');
const path = require('path');
const appRoot = require('app-root-path');

const app = express();
const port = 3000;

module.exports = done => {
  const root = path.join(appRoot, '/build');

  app.get('/', (req, res) => res.send('This server only serves /docs'));
  app.use('/docs', express.static(root));
  app.use('/docs', fallback('index.html', { root }));

  const server = app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);

    if (done) {
      done();
    }
  });

  return server;
};
