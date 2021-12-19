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
import {NhsImage, NhsImagePlugin} from './image'
import {NhsListPanel, NhsListPanelItem, NhsListPanelItemPlugin, NhsListPanelPlugin} from './list-panel'
import {NhsNavAz, NhsNavAzItem, NhsNavAzItemPlugin, NhsNavAzPlugin} from './nav-az'
import {NhsPagination, NhsPaginationPlugin} from './pagination'
import {NhsReviewDate, NhsReviewDatePlugin} from './review-date'
import {NhsSkipLink, NhsSkipLinkPlugin} from './skip-link'
import {NhsSummaryList, NhsSummaryListItem, NhsSummaryListItemPlugin, NhsSummaryListPlugin} from './summary-list'
import {NhsTable, NhsTablePlugin} from './table'
import {NhsTag, NhsTagPlugin} from './tag'
import {NhsWarningCallout, NhsWarningCalloutPlugin} from './warning-callout'
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
  NhsImagePlugin,
  NhsListPanelPlugin,
  NhsListPanelItemPlugin,
  NhsNavAzPlugin,
  NhsNavAzItemPlugin,
  NhsPaginationPlugin,
  NhsReviewDatePlugin,
  NhsSkipLinkPlugin,
  NhsSummaryListPlugin,
  NhsSummaryListItemPlugin,
  NhsTablePlugin,
  NhsTagPlugin,
  NhsWarningCalloutPlugin
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
  NhsImage,
  NhsListPanel,
  NhsListPanelItem,
  NhsNavAz,
  NhsNavAzItem,
  NhsPagination,
  NhsReviewDate,
  NhsSkipLink,
  NhsSummaryList,
  NhsSummaryListItem,
  NhsTable,
  NhsTag,
  NhsWarningCallout
}
