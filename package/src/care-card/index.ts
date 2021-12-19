import NhsCareCard from './NhsCareCard.vue'
import {App, Plugin} from 'vue'

const NhsCareCardPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsCareCard.name, NhsCareCard)
  }
}

export {
  NhsCareCard,
  NhsCareCardPlugin
}
