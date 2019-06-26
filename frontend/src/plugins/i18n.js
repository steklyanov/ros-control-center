import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
    en: {
      Pose: 'Pose',
      OpenLid: 'Open lid',
      CloseLid: 'Close lid',
    },
    ru: {
      Pose: 'Позиция',
      OpenLid: 'Открыть крышку',
      CloseLid: 'Закрыть крышку',
    }

  }
});
