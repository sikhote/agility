import { get } from 'lodash';
import isBrowser from './is-browser';

export default () => {
  const locale = isBrowser
    ? get(navigator, 'languages[0]') || navigator.language
    : 'en';

  return locale.includes('-') ? locale.split('-')[0] : locale;
};
