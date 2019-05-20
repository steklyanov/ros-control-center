import api from '@/services/api'

export default {
  get () {
    return api().get('main')
  },
  post (data) {
    return api().post('main', data)
  }
}
