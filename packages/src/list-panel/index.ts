import NhsListPanel from './NhsListPanel.vue'
import NhsListPanelItem from './NhsListPanelItem.vue'
import {App, Plugin} from 'vue'

const NhsListPanelPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsListPanel.name, NhsListPanel)
  }
}

const NhsListPanelItemPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsListPanelItem.name, NhsListPanelItem)
  }
}

export {
  NhsListPanel,
  NhsListPanelItem,
  NhsListPanelPlugin,
  NhsListPanelItemPlugin
}
