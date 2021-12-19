<template>
  <site-header></site-header>
  <router-view></router-view>
  <site-footer></site-footer>
</template>

<script lang="ts">
import SiteFooter from './components/app/SiteFooter.vue'
import SiteHeader from './components/app/SiteHeader.vue'
import {defineComponent, reactive, toRefs, watch} from 'vue'
import {NhsHeaderSearchResult} from 'nhsuk-frontend-vue/src/header/components/interfaces'

export default defineComponent({
  components: {SiteFooter, SiteHeader},
  setup(props) {
    const state = reactive({
      searchResults: [
        {
          text: 'test',
          value: 'test'
        },
        {
          text: 'test2',
          value: 'test2'
        },
        {
          text: 'test3',
          value: 'test3'
        },
        {
          text: 'nhs',
          value: 'test3'
        },
        {
          text: 'nhs covid',
          value: 'test3'
        }
      ],
      searchText: ''
    })

    watch(() => state.searchText, (val) => {
      console.log(val)
    })

    function submitSearch(event): void {
      console.log(event)
    }

    function filterSearchResults(): Array<NhsHeaderSearchResult> {
      return state.searchResults.filter((item) => {
        return item.text.toLowerCase().includes(state.searchText.toLowerCase()) && state.searchText
      })
    }

    return {...toRefs(state), filterSearchResults, submitSearch}
  }
})
</script>
