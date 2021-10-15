<template>
  <div :class="classes" v-bind="$attrs">
    <header-logo-org :organisation="organisation" v-if="organisation" :home-href="homeHref"></header-logo-org>
    <header-logo-normal :aria-label="ariaLabel" :home-href="homeHref" :service="service" v-if="!organisation" :show-transactional="showTransactional"></header-logo-normal>
  </div>
</template>

<script>
import HeaderLogoNormal from './logo/HeaderLogoNormal.vue'
import HeaderLogoOrg from './logo/HeaderLogoOrg.vue'
import {computed, defineComponent} from 'vue'

export default defineComponent({
  inheritAttrs: false,
  components: {
    HeaderLogoNormal, HeaderLogoOrg
  },
  props: {
    ariaLabel: {
      type: String,
      required: true
    },
    homeHref: {
      type: String,
      required: true
    },
    service: {
      required: true
    },
    showTransactional: {
      type: Boolean,
      required: true
    },
    organisation: {
      required: true
    },
    showNav: {
      type: Boolean,
      required: true
    },
    showSearch: {
      type: Boolean,
      required: true
    }
  },
  setup(props) {
    const classes = computed(() => {
      let classes = ['nhsuk-header__logo']

      if (!props.showSearch && !props.showNav) {
        classes.push('nhsuk-header__logo--only')
      }

      return classes.join(' ')
    })

    return {classes}
  }
})
</script>
