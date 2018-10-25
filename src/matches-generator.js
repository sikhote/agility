const pathMatch = require('path-match');

const route = pathMatch();
const matchesGenerator = (query, matches = []) => {
  matches.push(route(query));
  const lastSlashIndex = query.lastIndexOf('/');
  return lastSlashIndex === -1
    ? matches
    : matchesGenerator(query.substring(0, lastSlashIndex), matches);
};

export default matchesGenerator;
