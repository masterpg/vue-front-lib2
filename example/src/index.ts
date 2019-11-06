import 'animate.css/animate.css'
import '@/index.sass'

import '@/quasar'
import '@/quasar.extras'
import { i18n, initI18n } from '@/base/i18n'
import { initRouter, router } from '@/base/router'
import AppPage from '@/index.vue'
import Component from 'vue-class-component'
import Vue from 'vue'
import { initAPI } from '@/api'
import { initConfig } from '@/base/config'
import { initLogic } from '@/logic'
import { initStore } from '@/store'

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])

async function init() {
  initConfig()
  initRouter()
  initAPI()
  initStore()
  initLogic()
  await initI18n()

  new Vue({
    el: '#app',
    render: h => h(AppPage),
    router,
    i18n,
  })
}
init()
