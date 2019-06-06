// eslint-disable-next-line
import api from '@/services/api';

export default {
  index() {
    return api().get('test');
  }
};
