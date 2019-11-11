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
          name: 'Find out why your NHS data matters',
          href: '/'
        }
      }
    }
  }
</script>