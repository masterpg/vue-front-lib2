import { Constructor } from 'web-base-lib'
import { Dialog } from '../../../base/component'
import { Route } from 'vue-router'
import Vue from 'vue'
import { Watch } from 'vue-property-decorator'
import { router } from '../../../router'

/**
 * URLで表示するタイプのダイアログを管理するクラスです。
 * このタイプのダイアログを管理する必要がある場合、
 * 本クラスを継承し、必要な抽象メンバーを実装してください。
 */
export abstract class BaseHistoryDialogManager extends Vue {
  //----------------------------------------------------------------------
  //
  //  Variables
  //
  //----------------------------------------------------------------------

  /**
   * 管理すべきダイアログを取得します。
   *
   * 実装例:
   * ```
   * protected get dialogs(): { [dialogName: string]: Dialog } {
   *   return {
   *     [SampleOneDialog.name]: this.$refs.sampleOneDialog as Dialog,
   *     [SampleTwoDialog.name]: this.$refs.sampleTwoDialog as Dialog,
   *   }
   * }
   * ```
   */
  protected abstract readonly dialogs: { [dialogName: string]: Dialog }

  //----------------------------------------------------------------------
  //
  //  Methods
  //
  //----------------------------------------------------------------------

  /**
   * ダイアログを開きます。
   * @param dialogType ダイアログのクラスを指定。
   * @param dialogParams ダイアログに渡すパラメータを指定。
   */
  open<PARAMS>(dialogType: Constructor<Dialog>, dialogParams?: PARAMS) {
    router.addDialogInfoToURL(dialogType.name, dialogParams)
  }

  //----------------------------------------------------------------------
  //
  //  Event listeners
  //
  //----------------------------------------------------------------------

  @Watch('$route')
  private m_$routeOnChange(to: Route, from: Route) {
    const info = router.getDialogInfo(to)
    if (!info) return

    const dialog = this.dialogs[info.dialogName]
    if (!dialog) {
      console.warn(`There is no dialog named ${info.dialogName}.`)
      return
    }

    dialog.open(info.dialogParams).then(() => {
      router.removeDialogInfoFromURL()
    })
  }
}
