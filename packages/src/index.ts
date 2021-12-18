import {NhsActionLink, NhsActionLinkPlugin} from './action-link'
import {NhsBackLink, NhsBackLinkPlugin} from './back-link'
import {
  NhsBreadcrumb,
  NhsBreadcrumbBacklink,
  NhsBreadcrumbBacklinkPlugin,
  NhsBreadcrumbItem,
  NhsBreadcrumbItemPlugin,
  NhsBreadcrumbPlugin
} from './breadcrumb'
import {NhsButton, NhsButtonPlugin} from './button'
import {NhsCard, NhsCardGroup, NhsCardGroupPlugin, NhsCardPlugin} from './card'
import {NhsCareCard, NhsCareCardPlugin} from './care-card'
import {NhsContents, NhsContentsItem, NhsContentsItemPlugin, NhsContentsPlugin} from './contents'
import {NhsDetails, NhsDetailsPlugin} from './details'
import {NhsDodont, NhsDodontPlugin} from './dodont'
import {NhsErrorSummary, NhsErrorSummaryPlugin} from './error-summary'
import {NhsExpander, NhsExpanderGroup, NhsExpanderGroupPlugin, NhsExpanderPlugin} from './expander'
import {NhsFieldset, NhsFieldsetPlugin} from './fieldset'
import {NhsFooter, NhsFooterItem, NhsFooterItemPlugin, NhsFooterPlugin} from './footer'
import {NhsCol, NhsColPlugin, NhsMain, NhsMainPlugin, NhsRow, NhsRowPlugin} from './grid'
import {NhsHeader, NhsHeaderItem, NhsHeaderItemPlugin, NhsHeaderPlugin} from './header'
import {NhsHero, NhsHeroPlugin} from './hero'
import {NhsIcon, NhsIconPlugin} from './icon'
import {App, Plugin} from 'vue'
import {NhsukFrontendVueOptions} from './interfaces'

const plugins = [
  NhsActionLinkPlugin,
  NhsBackLinkPlugin,
  NhsBreadcrumbPlugin,
  NhsBreadcrumbItemPlugin,
  NhsBreadcrumbBacklinkPlugin,
  NhsButtonPlugin,
  NhsCardPlugin,
  NhsCardGroupPlugin,
  NhsCareCardPlugin,
  NhsContentsPlugin,
  NhsContentsItemPlugin,
  NhsDetailsPlugin,
  NhsDodontPlugin,
  NhsErrorSummaryPlugin,
  NhsExpanderPlugin,
  NhsExpanderGroupPlugin,
  NhsFieldsetPlugin,
  NhsFooterPlugin,
  NhsFooterItemPlugin,
  NhsMainPlugin,
  NhsColPlugin,
  NhsRowPlugin,
  NhsHeaderPlugin,
  NhsHeaderItemPlugin,
  NhsHeroPlugin,
  NhsIconPlugin,
]

const NhsukFrontendVue: Plugin = {
  install: (app: App, options: NhsukFrontendVueOptions = {}) => {
    for (const plugin of plugins) {
      plugin.install?.(app)
    }

    app.provide('router', options.router)
  }
}

export default NhsukFrontendVue

export {
  NhsActionLink,
  NhsBackLink,
  NhsBreadcrumb,
  NhsBreadcrumbItem,
  NhsBreadcrumbBacklink,
  NhsButton,
  NhsCard,
  NhsCardGroup,
  NhsCareCard,
  NhsContents,
  NhsContentsItem,
  NhsDetails,
  NhsDodont,
  NhsErrorSummary,
  NhsExpander,
  NhsExpanderGroup,
  NhsFieldset,
  NhsFooter,
  NhsFooterItem,
  NhsRow,
  NhsCol,
  NhsMain,
  NhsHeader,
  NhsHeaderItem,
  NhsHero,
  NhsIcon,
}
