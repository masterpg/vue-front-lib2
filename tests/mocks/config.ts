import { BaseConfig, setConfig } from '../../src'
import firebaseConfig from '../../firebase.config'

class TestConfig extends BaseConfig {
  constructor() {
    super(firebaseConfig)
  }
}

export let config: TestConfig

export function initConfig(): void {
  config = new TestConfig()
  setConfig(config)
}
