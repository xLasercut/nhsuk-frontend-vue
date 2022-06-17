<template>
  <nhs-header
    :search-results="filteredSearchResults()"
    v-model:search-text="searchText"
    @submit-search="submitSearch"
    show-search
    v-if="showHeader"
  ></nhs-header>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from 'vue';
import { filteredComponentRoutes } from '../../router/components';
import router from '../../router';

export default defineComponent({
  setup() {
    const state = reactive({
      searchText: ''
    });

    function filteredSearchResults() {
      return filteredComponentRoutes
        .filter((item) => {
          const itemName = item.name || '';
          return (
            itemName.toString().toLowerCase().includes(state.searchText.toLowerCase()) &&
            state.searchText
          );
        })
        .map((item) => {
          return {
            text: item.name,
            value: item.path
          };
        })
        .slice(0, 10);
    }

    function submitSearch(event: any): void {
      router.push(event.value);
    }

    const showHeader = computed((): boolean => {
      return !router.currentRoute.value.fullPath.includes('/examples/');
    });

    return { ...toRefs(state), filteredSearchResults, submitSearch, showHeader };
  }
});
</script>
