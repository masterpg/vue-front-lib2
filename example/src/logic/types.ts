import { CartItem, CheckoutStatus, Product } from '@/store'

//----------------------------------------------------------------------
//
//  Logic
//
//----------------------------------------------------------------------

export interface ShopLogic {
  products: Product[]

  pullProducts(): Promise<void>

  cartItems: CartItem[]

  pullCartItems(): Promise<void>

  cartTotalPrice: number

  checkoutStatus: CheckoutStatus

  addItemToCart(productId: string): Promise<void>

  removeItemFromCart(productId: string): Promise<void>

  checkout(): Promise<void>
}

export * from 'vue-front-lib2/src/logic/types'
export { CartItem, CheckoutStatus, Product }
