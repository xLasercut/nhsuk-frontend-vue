<template>
  <nhs-main>
    <nhs-row>
      <nhs-button @click="changeRoute('/layout/home')">Layout</nhs-button>
    </nhs-row>
    <nhs-row>
      <nhs-button @click="changeRoute('/information/home')">Information</nhs-button>
    </nhs-row>
  </nhs-main>
</template>

<script>
  export default {
    methods: {
      changeRoute(route) {
        this.$router.push(route)
      }
    }
  }
</script>