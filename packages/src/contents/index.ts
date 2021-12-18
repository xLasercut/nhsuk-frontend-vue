import NhsContents from './NhsContents.vue'
import NhsContentsItem from './NhsContentsItem.vue'
import {App, Plugin} from 'vue'

const NhsContentsPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsContents.name, NhsContents)
  }
}

const NhsContentsItemPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsContentsItem.name, NhsContentsItem)
  }
}

export {
  NhsContents,
  NhsContentsItem,
  NhsContentsPlugin,
  NhsContentsItemPlugin
}
