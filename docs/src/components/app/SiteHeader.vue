<template>
  <nhs-header :search-results="headerLinks"  show-search></nhs-header>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      headerLinks: [
        {
          text: "Layout",
          value: "/layout"
        },
        {
          text: "Information",
          value: "/information"
        },
        {
          text: "Navigation",
          value: "/navigation"
        },
        {
          text: "Form",
          value: "/form"
        },
        {
          text: "Typography",
          value: "/typography"
        }
      ]
    })

    return {...toRefs(state)}
  }
})
</script>
