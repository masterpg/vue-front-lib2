import 'animate.css/animate.css'
import '@/index.sass'

import './quasar'
import 'vue-front-lib2/lib/vue-front-lib2.css'
import ViewFrontLib, { fuga, hoge } from 'vue-front-lib2'
import AppPage from '@/index.vue'
import Component from 'vue-class-component'
import Vue from 'vue'

Vue.use(ViewFrontLib)
hoge()
fuga()

Component.registerHooks(['beforeRouteEnter', 'beforeRouteLeave', 'beforeRouteUpdate'])

async function init() {
  new Vue({
    el: '#app',
    render: h => h(AppPage),
  })
}
init()
