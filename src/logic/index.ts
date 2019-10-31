import { AuthLogic, StorageLogic } from './types'
import { StorageLogicImpl, StorageUploadManager } from './modules/storage'
import { AuthLogicImpl } from './modules/auth'
import Vue from 'vue'

export let logic: BaseLogicContainer

export function setLogic(value: BaseLogicContainer): void {
  logic = value
}

export abstract class BaseLogicContainer extends Vue {
  readonly storage: StorageLogic = new StorageLogicImpl()

  readonly auth: AuthLogic = new AuthLogicImpl()
}

export * from './types'
export * from './base'
export { StorageUploadManager }
