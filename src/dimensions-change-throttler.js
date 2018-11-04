import { throttle } from 'lodash';

export default throttle(callback => callback(), 1000, {
  trailing: true,
});
