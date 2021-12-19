import NhsNavAz from './NhsNavAz.vue'
import NhsNavAzItem from './NhsNavAzItem.vue'
import {App, Plugin} from 'vue'

const NhsNavAzPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsNavAz.name, NhsNavAz)
  }
}

const NhsNavAzItemPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsNavAzItem.name, NhsNavAzItem)
  }
}

export {
  NhsNavAz,
  NhsNavAzItem,
  NhsNavAzPlugin,
  NhsNavAzItemPlugin
}
