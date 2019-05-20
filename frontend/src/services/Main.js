import api from '@/services/api'

export default {
  get () {
    return api().get('gui_panel.html')
  },
  post (data) {
    return api().post('gui_panel.html', data)
  }
}
