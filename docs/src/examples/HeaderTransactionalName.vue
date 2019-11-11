<template>
  <nhs-header
    :transactional-service="transactionalService" transactional
  ></nhs-header>
</template>

<script>
  export default {
    data() {
      return {
        transactionalService: {
          name: 'Register with a GP',
          href: '/'
        }
      }
    }
  }
</script>