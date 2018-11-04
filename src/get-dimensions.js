import isBrowser from './is-browser';

export default () => ({
  width: isBrowser ? window.innerWidth : 0,
  height: isBrowser ? window.innerHeight : 0,
});
