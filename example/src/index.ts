import 'animate.css/animate.css'
import '@/index.sass'

import '@/quasar'
import '@/quasar.extras'
import { i18n, initI18n } from '@/i18n'
import { initRouter, router } from '@/router'
import AppPage from '@/index.vue'
import Component from 'vue-class-component'
import Vue from 'vue'
import { initAPI } from '@/logic/api'
import { initConfig } from '@/config'
import { initLogic } from '@/logic'
import { initSW } from '@/sw'
import { initStore } from '@/logic/store'

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])

async function init() {
  initConfig()
  initSW()
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
