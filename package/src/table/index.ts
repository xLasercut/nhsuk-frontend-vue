import NhsTable from './NhsTable.vue'
import {App, Plugin} from 'vue'

const NhsTablePlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsTable.name, NhsTable)
  }
}

export {
  NhsTable,
  NhsTablePlugin
}
