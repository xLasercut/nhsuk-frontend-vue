<template>
  <nhs-header show-nav show-search :organisation="organisation">
    <nhs-header-item href="#">Your hospital visit</nhs-header-item>
    <nhs-header-item href="#">Wards and departments</nhs-header-item>
    <nhs-header-item href="#">Conditions and treatments</nhs-header-item>
    <nhs-header-item href="#">Our people</nhs-header-item>
    <nhs-header-item href="#">Our research</nhs-header-item>
  </nhs-header>
</template>

<script>
  export default {
    data() {
      return {
        organisation: {
          name: 'Anytown Anyplace',
          split: 'Anywhere',
          descriptor: 'NHS Foundation Trust'
        }
      }
    }
  }
</script>