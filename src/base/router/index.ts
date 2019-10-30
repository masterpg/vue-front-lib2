import { Route } from 'vue-router/types/router'
import Vue from 'vue'
import VueRouter from 'vue-router'
const assign = require('lodash/assign')

Vue.use(VueRouter)

let router!: BaseRouter

export function setRouter(value: BaseRouter): void {
  router = value
}

export abstract class ViewRoute<T extends ViewRoute = any> {
  constructor(public readonly parent?: T) {}

  abstract readonly path: string

  abstract readonly component?: any

  protected replaceRouteParams(...params: string[]): string {
    let result = this.path
    // 例: "/post/:year/:month"がパスの場合、
    //     ":year"と":month"をparamsで置き換える
    const pattern = /(:\w+)/
    for (const param of params) {
      result = result.replace(pattern, param)
    }
    return result
  }
}

export abstract class BaseRouter extends VueRouter {
  /**
   * ダイアログを開くための情報をURLに付与して遷移します。
   * 例: https://example.com/views/abc-page?dialogName=signIn&dialogParams=%257B%2522account%2522%253A%2522taro%2522%257D
   *
   * @param name ダイアログの名前
   * @param params ダイアログに渡すパラメータ
   */
  openDialog(name: string, params?: string | {} | any[]): void {
    let dialogParams: {} | undefined
    if (params) {
      dialogParams = encodeURIComponent(JSON.stringify(params))
    }
    const query = assign({}, this.currentRoute.query, {
      dialogName: name,
      dialogParams,
    })
    this.push({
      path: this.currentRoute.path,
      query,
    })
  }

  /**
   * ダイアログを開くための情報をURLから除去して遷移します。
   *
   * このメソッドはダイアログを閉じた際に使用することを想定しています。
   * `openDialog()`でダイアログを開くと、URLにダイアログを開くための情報が
   * URLに付与されます。この状態でブラウザをリロードするとアプリケーション
   * 起動時にダイアログが開くことになります。
   *
   * このような挙動が望ましい場合もありますが、そうでない場合もあります。
   * このメソッドを呼び出すと、URLからダイアログを開くための情報を除去するため、
   * アプリケーションリロード時にダイアログが開くという挙動を回避することができます。
   */
  closeDialog(): void {
    const query = assign({}, this.currentRoute.query)
    delete query.dialogName
    delete query.dialogParams
    this.push({
      path: this.currentRoute.path,
      query,
    })
  }

  /**
   * URLからダイアログを開くための情報を取得して返します。
   * @param route
   */
  getDialog(route: Route): { name: string; params?: {} } | undefined {
    const name = route.query.dialogName as string | undefined
    if (!name) return

    let params: {} | undefined
    const paramsStr = route.query.dialogParams as string
    if (paramsStr) {
      params = JSON.parse(decodeURIComponent(paramsStr))
    }
    return { name, params }
  }
}
