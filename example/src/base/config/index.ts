import { BaseConfig, setConfig } from 'vue-front-lib2/src/base/config'

export let config: AppConfig

export function initConfig(): void {
  config = new AppConfig()
  setConfig(config)
}

class AppConfig extends BaseConfig {
  constructor() {
    super({
      apiKey: 'AIzaSyCy7fBdZ124bZq7flc8pS7c9deBozp_rfs',
      authDomain: 'vue-base-project-7295.firebaseapp.com',
      databaseURL: 'https://vue-base-project-7295.firebaseio.com',
      projectId: 'vue-base-project-7295',
      storageBucket: 'vue-base-project-7295.appspot.com',
      messagingSenderId: '1046408958180',
      appId: '1:1046408958180:web:d83d34b29a37de42',
    })
  }
}
