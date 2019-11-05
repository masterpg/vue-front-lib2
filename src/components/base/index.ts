import { BaseDialog, BaseHistoryDialogManager, Dialog } from './dialog'
import { BaseComponent } from './base-component'
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

export { BaseComponent, BaseDialog, BaseHistoryDialogManager, Dialog, NoCache, Resizable }
