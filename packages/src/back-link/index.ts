import NhsBackLink from './NhsBackLink.vue'
import {App, Plugin} from 'vue'

const NhsBackLinkPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsBackLink.name, NhsBackLink)
  }
}

export {
  NhsBackLink,
  NhsBackLinkPlugin
}
