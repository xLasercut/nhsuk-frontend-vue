<template>

  <div class="nhsuk-header__search" v-bind="$attrs">
    <button class="nhsuk-header__search-toggle" id="toggle-search" aria-controls="search" aria-label="Open search">
      <nhs-icon icon="search"></nhs-icon>
      <span class="nhsuk-u-visually-hidden">Search</span>
    </button>
    <div class="nhsuk-header__search-wrap" id="wrap-search">
      <form class="nhsuk-header__search-form" id="search" :action="searchAction" method="get" role="search">
        <label class="nhsuk-u-visually-hidden" for="search-field">Search the NHS website</label>
        <input class="nhsuk-search__input" id="search-field" :name="searchInputName" type="search" placeholder="Search" autocomplete="off">
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
import {defineComponent, inject} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  props: {
    searchConfig: {
      type: Object,
      default() {
        return {}
      }
    },
    searchAction: {
      type: String,
      required: true
    },
    searchInputName: {
      type: String,
      required: true
    }
  },
  components: { NhsIcon },
  setup(props) {
    function submitSearch() {
      let router = inject('router')
      if (router) {
        let search = document.getElementById('search-field').value
        router.push(`/search/?search-field=${search}`)
      }
      else {
        console.log('test')
      }
    }

    return {submitSearch}
  }
})
</script>
