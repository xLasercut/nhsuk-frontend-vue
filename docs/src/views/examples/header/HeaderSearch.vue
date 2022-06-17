<template>
  <nhs-header
    show-search
    :search-results="searchResults()"
    v-model:search-text="searchText"
    @submit-search="onSubmitSearch"
  >
    <nhs-header-item href="https://www.nhs.uk/conditions"> Health A-Z </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/live-well/"> Live Well </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/conditions/social-care-and-support/">
      Care and support
    </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/news/"> Health news </nhs-header-item>
    <nhs-header-item href="https://www.nhs.uk/service-search"> Services near you </nhs-header-item>
  </nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { NhsHeaderSearchResult } from '../../../../../package/dist/header/interfaces';

export default defineComponent({
  setup() {
    const state = reactive({
      searchItems: [
        {
          text: 'Item one',
          value: 'item_one'
        },
        {
          text: 'Item two',
          value: 'item_two'
        },
        {
          text: 'Car one',
          value: 'car_one'
        }
      ],
      searchText: ''
    });

    function searchResults() {
      return state.searchItems.filter((item) => {
        return item.text.toLowerCase().includes(state.searchText.toLowerCase()) && state.searchText;
      });
    }

    function onSubmitSearch(event: NhsHeaderSearchResult) {
      alert(event);
    }

    return { ...toRefs(state), searchResults, onSubmitSearch };
  }
});
</script>
