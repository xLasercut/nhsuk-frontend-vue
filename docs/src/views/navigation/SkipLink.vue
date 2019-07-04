<template>
  <nhs-main>
    <code-block file="SkipLink" />

    <argument-table heading="skip-link" :data-slots="slots" />
  </nhs-main>
</template>

<script>
  export default {
    data() {
      return {
        slots: [
          {
            name: 'default',
            description: 'default vue slots'
          }
        ]
      }
    }
  }
</script>