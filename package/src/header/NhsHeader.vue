<template>
  <header :class="classes" role="banner" v-bind="$attrs">
    <div class="nhsuk-width-container nhsuk-header__container">
      <header-logo
        :home-href="homeHref"
        :service="service"
        :organisation="organisation"
        :aria-label="ariaLabel"
        :show-transactional="showTransactional()"
        :showNav="showNav"
        :showSearch="showSearch"
      ></header-logo>
      <header-transactional v-if="showTransactional()" :service="service"></header-transactional>

      <div :class="headerContentClasses" id="content-header" v-if="showNav || showSearch">
        <header-menu
          :show-search="showSearch"
          :show-nav="showNav"
          :nav-open="navOpen"
        ></header-menu>
        <header-search
          v-if="showSearch"
          :search-action="searchAction"
          :search-input-name="searchInputName"
          :search-menu-open="searchOpen"
          :search-results="searchResults"
          :search-text="searchText"
          @update:search-text="$emit('update:search-text', $event)"
          @submit-search="$emit('submit-search', $event)"
        ></header-search>
      </div>
    </div>

    <header-nav :nav-open="navOpen" v-if="showNav" :home-href="homeHref" :home-text="homeText">
      <slot></slot>
    </header-nav>
  </header>
</template>

<script lang="ts">
import HeaderLogo from './components/HeaderLogo.vue';
import HeaderNav from './components/HeaderNav.vue';
import HeaderSearch from './components/HeaderSearch.vue';
import HeaderTransactional from './components/HeaderTransactional.vue';
import HeaderMenu from './components/HeaderMenu.vue';
import { computed, defineComponent, PropType, provide, reactive, toRefs } from 'vue';
import { NhsHeaderOrganisation, NhsHeaderService, NhsHeaderSearchResult } from './interfaces';
import { NHS_HEADER_INJECTS } from './constants';

export default defineComponent({
  inheritAttrs: false,
  name: 'nhs-header',
  emits: ['submit-search', 'update:search-text'],
  props: {
    showSearch: {
      type: Boolean,
      default: false
    },
    showNav: {
      type: Boolean,
      default: false
    },
    transactional: {
      type: Boolean,
      default: false
    },
    service: {
      type: Object as PropType<NhsHeaderService>,
      default: (): NhsHeaderService => {
        return {};
      }
    },
    organisation: {
      type: Object as PropType<NhsHeaderOrganisation>,
      default: (): NhsHeaderOrganisation => {
        return {};
      }
    },
    ariaLabel: {
      type: String,
      default: (): string => {
        return 'NHS homepage';
      }
    },
    homeHref: {
      type: String,
      default: (): string => {
        return '/';
      }
    },
    whiteHeader: {
      type: Boolean,
      default: (): boolean => {
        return false;
      }
    },
    whiteNav: {
      type: Boolean,
      default: (): boolean => {
        return false;
      }
    },
    searchAction: {
      type: String,
      default: (): string => {
        return 'https://www.nhs.uk/search/';
      }
    },
    searchInputName: {
      type: String,
      default: (): string => {
        return 'q';
      }
    },
    homeText: {
      type: String,
      default: (): string => {
        return 'Home';
      }
    },
    searchResults: {
      type: Array as PropType<Array<NhsHeaderSearchResult>>,
      default: (): Array<NhsHeaderSearchResult> => {
        return [];
      }
    },
    searchText: {
      type: String,
      default: (): string => {
        return '';
      }
    }
  },
  components: { HeaderNav, HeaderSearch, HeaderLogo, HeaderTransactional, HeaderMenu },
  setup(props) {
    const state = reactive({
      navOpen: false,
      searchOpen: false
    });

    function toggleNav() {
      state.navOpen = !state.navOpen;
    }

    function toggleSearch() {
      state.searchOpen = !state.searchOpen;
    }

    provide(NHS_HEADER_INJECTS.toggleNav, toggleNav);
    provide(NHS_HEADER_INJECTS.toggleSearch, toggleSearch);

    function showTransactional(): boolean {
      return props.transactional && !props.showSearch && !props.showNav;
    }

    const classes = computed((): string => {
      const classes = ['nhsuk-header'];
      if (showTransactional()) {
        classes.push('nhsuk-header--transactional');
      }

      if (props.organisation.name) {
        classes.push('nhsuk-header--organisation');
      }

      if (props.whiteHeader) {
        classes.push('nhsuk-header--white');
      }

      if (props.whiteNav) {
        classes.push('nhsuk-header--white-nav');
      }

      return classes.join(' ');
    });

    const headerContentClasses = computed((): string => {
      const classes = ['nhsuk-header__content'];

      if (state.searchOpen) {
        classes.push('js-show');
      }

      return classes.join(' ');
    });

    return { classes, showTransactional, ...toRefs(state), headerContentClasses };
  }
});
</script>
