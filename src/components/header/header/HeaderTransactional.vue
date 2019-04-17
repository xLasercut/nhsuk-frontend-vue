<template>
  <div :class="transactionalClass">
    <link-switcher class="nhsuk-header__transactional-service-name--link" :href="transactionalService.href | '/'">{{transactionalService.name}}</link-switcher>
  </div>
</template>

<script>
  import LinkSwitcher from '../../../shared/LinkSwitcher.vue'

  export default {
    components: {
      LinkSwitcher
    },
    props: {
      transactionalService: {
        type: Object
      }
    },
    computed: {
      transactionalClass() {
        if (this.transactionalService.longName) {
          return "nhsuk-header__transactional-service-name nhsuk-header__transactional-service-name--long"
        }
        return "nhsuk-header__transactional-service-name"
      }
    }
  }
</script>