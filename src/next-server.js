import { createServer } from 'http';
import next from 'next';
import { join } from 'path';
import { parse } from 'url';
import appRoot from 'app-root-path';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() =>
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (pathname === '/service-worker.js') {
      app.serveStatic(req, res, join(appRoot.toString(), '.next', pathname));
    } else {
      app.render(req, res, '/');
    }
  }).listen(port, err => {
    if (err) {
      throw err;
    }

    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  }),
);
