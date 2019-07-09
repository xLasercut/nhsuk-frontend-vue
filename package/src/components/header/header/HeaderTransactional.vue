<template>
  <div :class="classes">
    <link-switcher class="nhsuk-header__transactional-service-name--link" :href="href">
      {{service.name}}
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
      service: {
        type: Object
      },
      longName: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      classes() {
        var classes = ['nhsuk-header__transactional-service-name']

        if (this.longName) {
          classes.push('nhsuk-header__transactional-service-name--long')
        }

        return classes.join(' ')
      },
      href() {
        if (this.service.href) {
          return this.service.href
        }
        return '/'
      }
    }
  }
</script>