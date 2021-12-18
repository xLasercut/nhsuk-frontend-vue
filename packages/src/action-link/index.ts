import NhsActionLink from './NhsActionLink.vue'
import {App, Plugin} from 'vue'

const NhsActionLinkPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsActionLink.name, NhsActionLink)
  }
}

export {
  NhsActionLink,
  NhsActionLinkPlugin
}
