// import './quasar'
import * as components from '@/components'
import { PluginObject } from 'vue'
import { Vue as _Vue } from 'vue-property-decorator'

export default {
  install(Vue: typeof _Vue, options?: any): void {
    const list = [components]
    for (const item of list) {
      for (const [name, c] of Object.entries(item)) {
        console.log(`${name}`)
        Vue.component(name, c)
      }
    }
  },
} as PluginObject<any>

export * from '@/library'
