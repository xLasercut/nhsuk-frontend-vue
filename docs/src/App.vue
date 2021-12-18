<template>
  <nhs-header
    show-nav
    show-search
    :search-results="filterSearchResults()"
    v-model:search-text="searchText"
  >
    <nhs-header-item href="/">test</nhs-header-item>
  </nhs-header>
  <nhs-main></nhs-main>
  <nhs-footer></nhs-footer>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {defineComponent, reactive, toRefs, watch} from 'vue'
import {NhsHeaderSearchResult} from 'nhsuk-frontend-vue/src/header/components/interfaces'

export default defineComponent({
  components: {HelloWorld},
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

    function filterSearchResults(): Array<NhsHeaderSearchResult> {
      return state.searchResults.filter((item) => {
        return item.text.toLowerCase().includes(state.searchText.toLowerCase()) && state.searchText
      })
    }

    return {...toRefs(state), filterSearchResults}
  }
})
</script>
