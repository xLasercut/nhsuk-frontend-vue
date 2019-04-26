<template>
  <div :class="classes">
    <link-switcher class="nhsuk-header__transactional-service-name--link" :href="href">
      {{transactionalService.name}}
    </link-switcher>
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
      classes() {
        var classes = ['nhsuk-header__transactional-service-name']
        if (this.transactionalService.longName) {
          classes.push('nhsuk-header__transactional-service-name--long')
        }
        return classes.join(' ')
      },
      href() {
        if (this.transactionalService.href) {
          return this.transactionalService.href
        }
        return '/'
      }
    }
  }
</script>