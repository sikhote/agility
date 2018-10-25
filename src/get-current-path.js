import isBrowser from './is-browser';

export default () => {
  const path = isBrowser && window.location.pathname.replace(/\/$/, '');
  return isBrowser ? path || '/' : '';
};
