import { BaseLogicContainer, StorageUploadManager, setLogic } from 'vue-front-lib2/src/logic'
import { getAPIType, setAPIType } from '@/api'
import { Component } from 'vue-property-decorator'
import { ShopLogic } from '@/logic/types'
import { ShopLogicImpl } from '@/logic/modules/shop'
import Vue from 'vue'

export let logic: LogicContainer

export function initLogic(): void {
  logic = new LogicContainer()
  setLogic(logic)

  Object.defineProperty(Vue.prototype, '$logic', {
    value: logic,
    writable: false,
    configurable: true,
  })
}

@Component
class LogicContainer extends BaseLogicContainer {
  private m_apiType = getAPIType()

  get apiType(): 'gql' | 'rest' {
    return this.m_apiType
  }

  set apiType(value: 'gql' | 'rest') {
    setAPIType(value)
    this.m_apiType = value
  }

  readonly shop: ShopLogic = new ShopLogicImpl()
}

export * from '@/logic/types'
export { StorageUploadManager }
