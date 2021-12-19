import NhsErrorSummary from './NhsErrorSummary.vue'
import {App, Plugin} from 'vue'

const NhsErrorSummaryPlugin: Plugin = {
  install: (app: App) => {
    app.component(NhsErrorSummary.name, NhsErrorSummary)
  }
}

export {
  NhsErrorSummary,
  NhsErrorSummaryPlugin
}
