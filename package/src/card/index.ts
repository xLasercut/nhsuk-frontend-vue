import NhsCard from './NhsCard.vue'
import NhsCardGroup from './NhsCardGroup.vue'
import {App, Plugin} from 'vue'

const NhsCardPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsCard.name, NhsCard)
  }
}

const NhsCardGroupPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsCardGroup.name, NhsCardGroup)
  }
}

export {
  NhsCard,
  NhsCardGroup,
  NhsCardPlugin,
  NhsCardGroupPlugin
}
