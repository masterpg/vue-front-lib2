import { BaseConfig, setConfig } from 'vue-front-lib2/src/base/config'

export let config: AppConfig

export function initConfig(): void {
  config = new AppConfig()
  setConfig(config)
}

class AppConfig extends BaseConfig {
  constructor() {
    super({
      apiKey: '<API_KEY>',
      authDomain: '<PROJECT_ID>.firebaseapp.com',
      databaseURL: 'https://<DATABASE_NAME>.firebaseio.com',
      projectId: '<PROJECT_ID>',
      storageBucket: '<BUCKET>.appspot.com',
      messagingSenderId: '<SENDER_ID>',
      appId: '<APP_ID>',
    })
  }
}
