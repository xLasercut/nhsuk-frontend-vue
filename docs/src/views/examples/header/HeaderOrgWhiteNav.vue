<template>
  <nhs-header show-nav show-search :organisation="organisation" white-header white-nav>
    <nhs-header-item href="#">Your hospital visit</nhs-header-item>
    <nhs-header-item href="#">Wards and departments</nhs-header-item>
    <nhs-header-item href="#">Conditions and treatments</nhs-header-item>
    <nhs-header-item href="#">Our people</nhs-header-item>
    <nhs-header-item href="#">Our research</nhs-header-item>
  </nhs-header>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({
      organisation: {
        name: 'Anytown Anyplace',
        split: 'Anywhere',
        descriptor: 'NHS Foundation Trust'
      }
    })

    return { ...toRefs(state) }
  }
})
</script>
