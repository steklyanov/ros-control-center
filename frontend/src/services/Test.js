import api from '@/services/api'
export default {
  fetchNodes () {
    return api().get('test')
  }
}
