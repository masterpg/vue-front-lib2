<style lang="sass" scoped>
@import './styles/app.variables'

.header
  background-color: $indigo-5

  .photo
    width: 32px
    height: 32px
    border-radius: 50%

.menu-list
  min-width: 150px

.container
  height: 100vh

.drawer-scroll-area
  height: 100%

// ----->
/**
 * Animate.cssにある既存のアニメーションをコピーして変更している。
 * コピー元: node_modules/animate.css/animate.css
 */
@keyframes tada
  from
    transform: scale3d(1, 1, 1)

  10%, 20%
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)

  30%, 70%
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)

  50%, 80%
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)

  to
    transform: scale3d(1, 1, 1)

.tada
  animation-name: tada
// <-----

// ----->
/**
 * tada と bounceOutRight のアニメーションスピードを調整
 */
.animated.tada.faster
  animation-duration: 700ms

.animated.bounceOutRight.faster
  animation-duration: 700ms
// <-----

/**
 * フェードイン/アウトのサンプル。このアニメーションを有効にするには、下記のコメントを外し、
 * transitionタグの enter-active-class と leave-active-class を削除るとこのアニメーションが有効になる。
 */
//.view-enter-active, .view-leave-active
//  transition: opacity 0.2s ease
//
//.view-enter, .view-leave-to
//  opacity: 0
</style>

<template>
  <q-layout view="lHh Lpr lFf" @component-resize.native="m_onComponentResize">
    <q-header elevated class="glossy header">
      <q-toolbar>
        <q-btn flat dense round aria-label="Menu" icon="menu" @click="m_leftDrawerOpen = !m_leftDrawerOpen" />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div class="app-mr-16">Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="m_leftDrawerOpen" :width="300" :breakpoint="500" show-if-above bordered content-class="bg-grey-2">
      <q-scroll-area class="drawer-scroll-area">
        <!-- Demo -->
        <q-expansion-item v-model="m_demoExpanded" icon="star" label="Demo" expand-separator>
          <q-list padding>
            <template v-for="(item, index) in m_demoItems">
              <q-item :key="index" v-ripple :to="item.path" class="app-ml-20" clickable>
                <q-item-section>{{ item.title }}</q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-expansion-item>
        <!-- Components -->
        <q-expansion-item v-model="m_componentsExpanded" icon="fas fa-cubes" label="Components" expand-separator>
          <q-list padding>
            <template v-for="(item, index) in m_componentsItems">
              <q-item :key="index" v-ripple :to="item.path" class="app-ml-20" clickable>
                <q-item-section>{{ item.title }}</q-item-section>
              </q-item>
            </template>
          </q-list>
        </q-expansion-item>
      </q-scroll-area>
    </q-drawer>

    <q-page-container class="container">
      <transition name="view" mode="out-in" enter-active-class="animated tada faster" leave-active-class="animated bounceOutRight faster">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { BaseComponent, ResizableMixin } from '@/components'
import { Component, Watch } from 'vue-property-decorator'
import { NoCache } from '@/base/decorators'
import { Route } from 'vue-router/types/router'
import { mixins } from 'vue-class-component'
import { router } from '@/base/router'

enum DialogType {
  SignIn = 'signIn',
  AccountDelete = 'accountDelete',
  EmailChange = 'emailChange',
}

@Component({
  components: {},
})
export default class AppPage extends mixins(BaseComponent, ResizableMixin) {
  //----------------------------------------------------------------------
  //
  //  Lifecycle hooks
  //
  //----------------------------------------------------------------------

  async created() {}

  //----------------------------------------------------------------------
  //
  //  Variables
  //
  //----------------------------------------------------------------------

  private m_demoExpanded: boolean = true

  private m_demoItems: Array<{ title: string; path: string; icon?: string }> = [
    {
      title: 'ABC',
      path: router.views.demo.abc.path,
    },
    // {
    //   title: 'Shop',
    //   path: router.views.demo.shop.path,
    // },
    // {
    //   title: 'Cloud Storage',
    //   path: router.views.demo.storage.path,
    // },
  ]

  private m_componentsExpanded: boolean = true

  private m_componentsItems: Array<{ title: string; path: string }> = [
    {
      title: 'Tree View',
      path: router.views.components.treeView.path,
    },
  ]

  private m_leftDrawerOpen: boolean = false

  //--------------------------------------------------
  //  Elements
  //--------------------------------------------------

  //----------------------------------------------------------------------
  //
  //  Internal methods
  //
  //----------------------------------------------------------------------

  //----------------------------------------------------------------------
  //
  //  Event listeners
  //
  //----------------------------------------------------------------------

  private m_onComponentResize(e) {
    console.log('app-view:', e)
  }

  private m_dialogOnClosed() {
    router.closeDialog()
  }
}
</script>

<i18n>
en:
  reload: "Reload"
ja:
  reload: "再読み込み"
</i18n>
