import Vue from 'vue'
import App from './App.vue'
import VueClipboard from 'vue-clipboard2'
import VueI18n from 'vue-i18n'
import messages from './i18n'

import './components/index'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.use(VueI18n)

const lang = navigator.language || navigator.browserLanguage
const i18n = new VueI18n({
  locale: lang === 'zh-CN' ? 'cn' : 'en',
  messages
})

new Vue({
  i18n,
  render: h => h(App)
}).$mount('#app')
