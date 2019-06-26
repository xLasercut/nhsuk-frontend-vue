<template>
  <nhs-header
    :service="service" transactional
  ></nhs-header>
</template>

<script>
  export default {
    data() {
      return {
        service: {
          name: 'Register with a GP',
          href: '/'
        }
      }
    }
  }
</script>