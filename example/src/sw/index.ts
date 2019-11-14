import { BaseSWManager, setSW } from 'vue-front-lib2/src'

//========================================================================
//
//  Internal
//
//========================================================================

class AppSWManager extends BaseSWManager {}

//========================================================================
//
//  Exports
//
//========================================================================

export let sw: AppSWManager

export async function initSW(): Promise<void> {
  sw = new AppSWManager()
  setSW(sw)
}
