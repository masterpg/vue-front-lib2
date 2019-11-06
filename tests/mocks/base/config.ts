import { BaseConfig, setConfig } from '../../../src/base/config'
import firebaseConfig from '../../../firebase.config'

export let config: TestConfig

export function initConfig(): void {
  config = new TestConfig()
  setConfig(config)
}

class TestConfig extends BaseConfig {
  constructor() {
    super(firebaseConfig)
  }
}
