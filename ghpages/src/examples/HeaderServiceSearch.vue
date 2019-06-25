<template>
  <nhs-header :service="service" show-search></nhs-header>
</template>

<script>
  export default {
    data() {
      return {
        service: {
          name: 'Digital service manual'
        }
      }
    }
  }

</script>