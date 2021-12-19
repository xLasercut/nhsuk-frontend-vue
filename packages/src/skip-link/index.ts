import NhsSkipLink from './NhsSkipLink.vue'
import {App, Plugin} from 'vue'

const NhsSkipLinkPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsSkipLink.name, NhsSkipLink)
  }
}

export {
  NhsSkipLink,
  NhsSkipLinkPlugin
}
