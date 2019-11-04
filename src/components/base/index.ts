import { BaseComponent } from './base-component'
import { BaseDialog, Dialog } from './dialog'
import { NoCache } from '../../base/decorators'
import { Resizable } from './resizable'

/**
 * Mixinのサンプルです。
 * @param superclass
 */
export const SampleMixin = <T extends new (...args: any[]) => {}>(superclass: T) =>
  class extends superclass {
    constructor(...args: any[]) {
      super(args)
    }
  }

export { BaseComponent, BaseDialog, Dialog, NoCache, Resizable }
