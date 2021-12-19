<template>
  <nhs-header show-search></nhs-header>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      headerLinks: [
        {
          text: "Layout",
          href: "/layout"
        },
        {
          text: "Information",
          href: "/information"
        },
        {
          text: "Navigation",
          href: "/navigation"
        },
        {
          text: "Form",
          href: "/form"
        },
        {
          text: "Typography",
          href: "/typography"
        }
      ]
    })

    return {...toRefs(state)}
  }
})
</script>
