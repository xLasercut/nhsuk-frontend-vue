<template>
  <div :class="classes" v-if="service" v-bind="$attrs">
    <nhs-link-switcher class="nhsuk-header__transactional-service-name--link" :href="href">
      {{ service.name }}
    </nhs-link-switcher>
  </div>
</template>

<script lang="ts">
import {NhsLinkSwitcher} from '../../shared/link-switcher'
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  components: {NhsLinkSwitcher},
  props: {
    service: {
      required: true
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = ['nhsuk-header__transactional-service-name']

      if (props.service.name.length > 22) {
        classes.push('nhsuk-header__transactional-service-name--long')
      }

      return classes.join(' ')
    })

    const href = computed(() => {
      if (props.service.href) {
        return props.service.href
      }
      return '/'
    })

    return {classes, href}
  }
})
</script>
