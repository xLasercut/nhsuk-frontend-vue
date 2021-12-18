import NhsExpander from './NhsExpander.vue'
import NhsExpanderGroup from './NhsExpanderGroup.vue'
import {App, Plugin} from 'vue'

const NhsExpanderPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsExpander.name, NhsExpander)
  }
}

const NhsExpanderGroupPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsExpanderGroup.name, NhsExpanderGroup)
  }
}

export {
  NhsExpander,
  NhsExpanderGroup,
  NhsExpanderPlugin,
  NhsExpanderGroupPlugin
}
