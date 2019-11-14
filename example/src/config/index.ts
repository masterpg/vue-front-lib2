import { BaseConfig, setConfig } from 'vue-front-lib2/src'
import firebaseConfig from '../../firebase.config'

//========================================================================
//
//  Internal
//
//========================================================================

class AppConfig extends BaseConfig {
  constructor() {
    super(firebaseConfig, {
      protocol: String(process.env.VUE_APP_API_PROTOCOL),
      host: String(process.env.VUE_APP_API_HOST),
      port: Number(process.env.VUE_APP_API_PORT),
      basePath: String(process.env.VUE_APP_API_BASE_PATH),
    })
  }
}

//========================================================================
//
//  Exports
//
//========================================================================

export let config: AppConfig

export function initConfig(): void {
  config = new AppConfig()
  setConfig(config)
}
