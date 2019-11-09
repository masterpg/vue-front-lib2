import { BaseStoreContainer, setStore } from 'vue-front-lib2/src'
import { CartModule, ProductModule } from '@/logic/store/types'
import { CartModuleImpl } from '@/logic/store/modules/cart'
import { Component } from 'vue-property-decorator'
import { ProductModuleImpl } from '@/logic/store/modules/product'

//========================================================================
//
//  Internal
//
//========================================================================

@Component
class StoreContainer extends BaseStoreContainer {
  readonly product: ProductModule = new ProductModuleImpl()
  readonly cart: CartModule = new CartModuleImpl()
}

//========================================================================
//
//  Exports
//
//========================================================================

export let store: StoreContainer

export function initStore(): void {
  store = new StoreContainer()
  setStore(store)
}

export * from '@/logic/store/types'
