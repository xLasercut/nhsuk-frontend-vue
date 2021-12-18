import NhsFooter from './NhsFooter.vue'
import NhsFooterItem from './NhsFooterItem.vue'
import {App, Plugin} from 'vue'

const NhsFooterPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsFooter.name, NhsFooter)
  }
}

const NhsFooterItemPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsFooterItem.name, NhsFooterItem)
  }
}

export {
  NhsFooter,
  NhsFooterItem,
  NhsFooterPlugin,
  NhsFooterItemPlugin
}
