import NhsMain from './NhsMain.vue'
import NhsCol from './NhsCol.vue'
import NhsRow from './NhsRow.vue'
import {App, Plugin} from 'vue'

const NhsMainPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsMain.name, NhsMain)
  }
}

const NhsColPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsCol.name, NhsCol)
  }
}

const NhsRowPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsRow.name, NhsRow)
  }
}

export {
  NhsRow,
  NhsCol,
  NhsMain,
  NhsMainPlugin,
  NhsColPlugin,
  NhsRowPlugin
}
