import NhsReviewDate from './NhsReviewDate.vue'
import {App, Plugin} from 'vue'

const NhsReviewDatePlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsReviewDate.name, NhsReviewDate)
  }
}

export {
  NhsReviewDate,
  NhsReviewDatePlugin
}
