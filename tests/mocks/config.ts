import { BaseConfig, setConfig } from '../../src'
import firebaseConfig from '../../firebase.config'

class TestConfig extends BaseConfig {
  constructor() {
    super(firebaseConfig, {
      protocol: String(process.env.VUE_APP_API_PROTOCOL),
      host: String(process.env.VUE_APP_API_HOST),
      port: Number(process.env.VUE_APP_API_PORT),
      basePath: String(process.env.VUE_APP_API_BASE_PATH),
    })
  }
}

export let config: TestConfig

export function initConfig(): void {
  config = new TestConfig()
  setConfig(config)
}
