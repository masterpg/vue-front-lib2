import { UserModule } from './types'
import { UserModuleImpl } from './modules/user'
import Vue from 'vue'

export abstract class BaseStoreContainer extends Vue {
  readonly user: UserModule = new UserModuleImpl()
}

export let store: BaseStoreContainer

export function setStore(value: BaseStoreContainer): void {
  store = value
}

export * from './types'
export * from './base'
