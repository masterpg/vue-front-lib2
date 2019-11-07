import { BaseStoreContainer, setStore } from 'vue-front-lib2/src/logic/store'
import { CartModule, ProductModule } from '@/logic/store/types'
import { CartModuleImpl } from '@/logic/store/modules/cart'
import { Component } from 'vue-property-decorator'
import { ProductModuleImpl } from '@/logic/store/modules/product'

export let store: StoreContainer

export function initStore(): void {
  store = new StoreContainer()
  setStore(store)
}

@Component
export class StoreContainer extends BaseStoreContainer {
  readonly product: ProductModule = new ProductModuleImpl()
  readonly cart: CartModule = new CartModuleImpl()
}

export * from '@/logic/store/types'
