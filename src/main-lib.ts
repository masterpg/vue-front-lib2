import HelloWorld from '@/components/HelloWorld.vue'
import { PluginObject } from 'vue'
import { Vue as _Vue } from 'vue-property-decorator'

export default {
  install(Vue: typeof _Vue, options?: any): void {
    const components = {
      HelloWorld, // <mdc-button/> として使える
    }
    for (const [name, c] of Object.entries(components)) {
      console.log(`${name}`)
      Vue.component(name, c)
    }
  },
} as PluginObject<any>
