import NhsSummaryList from './NhsSummaryList.vue'
import NhsSummaryListItem from './NhsSummaryListItem.vue'
import {App, Plugin} from 'vue'

const NhsSummaryListPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsSummaryList.name, NhsSummaryList)
  }
}

const NhsSummaryListItemPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsSummaryListItem.name, NhsSummaryListItem)
  }
}

export {
  NhsSummaryList,
  NhsSummaryListItem,
  NhsSummaryListPlugin,
  NhsSummaryListItemPlugin
}
