import { AuthLogic, StorageLogic } from './types'
import { AuthLogicImpl } from './modules/auth'
import { StorageLogicImpl, StorageUploadManager } from './modules/storage'
import Vue from 'vue'

export abstract class BaseLogicContainer extends Vue {
  readonly storage: StorageLogic = new StorageLogicImpl()

  readonly auth: AuthLogic = new AuthLogicImpl()
}

export let logic: BaseLogicContainer

export function setLogic(value: BaseLogicContainer): void {
  logic = value
}

export * from './types'
export * from './base'
export { StorageUploadManager }
