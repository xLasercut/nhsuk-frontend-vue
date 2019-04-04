<template>
  <nhs-main>
    <nhs-row>
      <nhs-button @click="changeRoute('/layout')">Layout</nhs-button>
    </nhs-row>
    <nhs-row>
      <nhs-button @click="changeRoute('/information')">Information</nhs-button>
    </nhs-row>
    <nhs-row>
      <nhs-button @click="changeRoute('/navigation')">Navigation</nhs-button>
    </nhs-row>
    <nhs-row>
      <nhs-button @click="changeRoute('/form')">Form</nhs-button>
    </nhs-row>
    <nhs-row>
      <nhs-button @click="changeRoute('/typography')">Typography</nhs-button>
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