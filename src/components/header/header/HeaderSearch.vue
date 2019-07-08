<template>
  <div class="nhsuk-header__search">
    <button class="nhsuk-header__search-toggle" id="toggle-search" aria-controls="search" aria-label="Open search">
      <nhs-icon icon="search"></nhs-icon>
      <span class="nhsuk-u-visually-hidden">Search</span>
    </button>
    <div class="nhsuk-header__search-wrap" id="wrap-search">
      <form class="nhsuk-header__search-form" id="search" action="/search/" method="get" role="search" @submit.prevent="submitSearch()" ref="searchForm">
        <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
        <div class="autocomplete-container" id="autocomplete-container"></div>
        <input class="nhsuk-search__input" id="search-field" name="search-field" type="text" placeholder="Search" autocomplete="off">
        <button class="nhsuk-search__submit" type="submit">
          <nhs-icon icon="search"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Search</span>
        </button>
        <button class="nhsuk-search__close" id="close-search">
          <nhs-icon icon="close"></nhs-icon>
          <span class="nhsuk-u-visually-hidden">Close search</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
  import NhsIcon from '../../icon/NhsIcon.vue'
  import autocomplete from '../../../../node_modules/nhsuk-frontend/packages/components/header/autocomplete'

  export default {
    props: {
      searchConfig: {
        type: Object,
        required: true
      }
    },
    components: { NhsIcon },
    methods: {
      suggestionTemplate(result) {
        const truncateLength = 36;
        const dots = result.length > truncateLength ? '...' : '';
        const resultTruncated = result.substring(0, truncateLength) + dots;
        const svgIcon = '<svg class="nhsuk-icon nhsuk-icon__search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path></svg>';
        const resultsHref = '<a>' + resultTruncated + '</a>';

        return svgIcon + resultsHref;
      },
      submitSearch() {
        if (this.$router) {
          var search = document.getElementById('search-field').value
          this.$router.push(`/search/?search-field=${search}`)
        }
        else {
          this.$refs.searchForm.submit()
        }
      }
    },
    mounted() {
      var config = this.searchConfig
      config['templates'] = {
        suggestion: this.suggestionTemplate
      }
      autocomplete(config)
    }
  }
</script>