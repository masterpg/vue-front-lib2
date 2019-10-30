import 'animate.css/animate.css'
import '@/index.sass'

import '@/quasar'
import { i18n, initI18n } from '@/base/i18n'
import { initRouter, router } from '@/base/router'
import AppPage from '@/index.vue'
import Component from 'vue-class-component'
import Vue from 'vue'

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])

async function init() {
  initRouter()
  await initI18n()

  new Vue({
    el: '#app',
    render: h => h(AppPage),
    router,
    i18n,
  })
}
init()
