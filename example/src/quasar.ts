import {
  ClosePopup,
  Dialog,
  Loading,
  Notify,
  QAvatar,
  QBar,
  QBtn,
  QBtnToggle,
  QCard,
  QCardActions,
  QCardSection,
  QCheckbox,
  QDialog,
  QDrawer,
  QExpansionItem,
  QForm,
  QHeader,
  QIcon,
  QImg,
  QInput,
  QItem,
  QItemLabel,
  QItemSection,
  QLayout,
  QLinearProgress,
  QList,
  QMenu,
  QPage,
  QPageContainer,
  QScrollArea,
  QSeparator,
  QSpace,
  QSplitter,
  QToolbar,
  QToolbarTitle,
  QTooltip,
  Quasar,
  Ripple,
} from 'quasar'
import { components, config, directives, plugins } from 'vue-front-lib2/src/quasar'
import Vue from 'vue'

Vue.use(Quasar, {
  components: {
    ...components,
    // QBtn,
    // QAvatar,
    // QBar,
    // QBtn,
    QBtnToggle,
    QCard,
    QCardActions,
    QCardSection,
    // QCheckbox,
    QDialog,
    QDrawer,
    QExpansionItem,
    QForm,
    QHeader,
    // QIcon,
    QImg,
    QInput,
    QItem,
    QItemLabel,
    QItemSection,
    QLayout,
    // QLinearProgress,
    QList,
    QMenu,
    QPage,
    QPageContainer,
    QScrollArea,
    // QSeparator,
    // QSpace,
    // QSplitter,
    QToolbar,
    QToolbarTitle,
    // QTooltip,
  },
  config: {
    ...config,
    notify: {},
    loading: {},
  },
  directives: {
    ...directives,
    ClosePopup,
    Ripple,
  },
  plugins: {
    ...plugins,
    Loading,
    Notify,
  },
})
