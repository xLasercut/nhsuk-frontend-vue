import NhsHeader from './NhsHeader.vue'
import NhsHeaderItem from './NhsHeaderItem.vue'
import {App, Plugin} from 'vue'

const NhsHeaderPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsHeader.name, NhsHeader)
  }
}

const NhsHeaderItemPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsHeaderItem.name, NhsHeaderItem)
  }
}

export {
  NhsHeader,
  NhsHeaderItem,
  NhsHeaderPlugin,
  NhsHeaderItemPlugin
}
