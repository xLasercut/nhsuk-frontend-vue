import NhsHero from './NhsHero.vue'
import {App, Plugin} from 'vue'

const NhsHeroPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsHero.name, NhsHero)
  }
}

export {
  NhsHero,
  NhsHeroPlugin
}
