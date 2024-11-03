import { createI18n } from 'vue-i18n'
import en from './en'
import vi from './vi'
import VueCookies from 'vue-cookies'

const LOCALE_DEFAULT = 'vi'

const messages = {
  vi,
  en,
}

const locale = VueCookies.get('locale') || 'vi'

const i18n = createI18n({
  locale: locale,
  fallbackLocale: LOCALE_DEFAULT,
  messages,
})

export default i18n
