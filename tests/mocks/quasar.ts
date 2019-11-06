import { components, config, directives, plugins } from '../../src/quasar'
import { Quasar } from 'quasar'
import Vue from 'vue'

Vue.use(Quasar, {
  components: {
    ...components,
  },
  config: {
    ...config,
  },
  directives: {
    ...directives,
  },
  plugins: {
    ...plugins,
  },
})
