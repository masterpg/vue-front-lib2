import URI from 'urijs'

export let config: Config

export function setConfig(value: BaseConfig): void {
  config = value
}

interface FirebaseOptions {
  apiKey: string
  authDomain: string
  databaseURL?: string
  projectId?: string
  storageBucket?: string
  messagingSenderId?: string
  appId: string
}

export interface Config {
  api: {
    protocol: string
    host: string
    port: number
    basePath: string
    baseURL: string
  }

  firebase: FirebaseOptions
}

export abstract class BaseConfig implements Config {
  constructor(firebaseOptions: FirebaseOptions) {
    this.firebase = firebaseOptions
    firebase.initializeApp(this.firebase!)
  }

  readonly firebase: FirebaseOptions

  get api() {
    const apiEnv = {
      protocol: String(process.env.VUE_APP_API_PROTOCOL),
      host: String(process.env.VUE_APP_API_HOST),
      port: Number(process.env.VUE_APP_API_PORT),
      basePath: String(process.env.VUE_APP_API_BASE_PATH),
    }

    const baseURL = new URI()
    if (apiEnv.protocol) baseURL.protocol(apiEnv.protocol)
    if (apiEnv.host) baseURL.hostname(apiEnv.host)
    if (apiEnv.port) baseURL.port(apiEnv.port.toString(10))
    if (apiEnv.basePath) baseURL.path(apiEnv.basePath)
    baseURL.query('')

    return {
      ...apiEnv,
      baseURL: baseURL.toString().replace(/\/$/, ''),
    }
  }
}
