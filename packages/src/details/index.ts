import NhsDetails from './NhsDetails.vue'
import {App, Plugin} from 'vue'

const NhsDetailsPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsDetails.name, NhsDetails)
  }
}

export {
  NhsDetails,
  NhsDetailsPlugin
}
