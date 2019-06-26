<template>
  <nhs-header
    :service="service" transactional long-name
  ></nhs-header>
</template>

<script>
  export default {
    data() {
      return {
        service: {
          name: 'Find out why your NHS data matters',
          href: '/'
        }
      }
    }
  }
</script>