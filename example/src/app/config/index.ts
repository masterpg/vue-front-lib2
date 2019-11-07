import { BaseConfig, setConfig } from 'vue-front-lib2/src/app/config'
import firebaseConfig from '../../../firebase.config'

export let config: AppConfig

export function initConfig(): void {
  config = new AppConfig()
  setConfig(config)
}

class AppConfig extends BaseConfig {
  constructor() {
    super(firebaseConfig)
  }
}
