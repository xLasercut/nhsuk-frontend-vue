<template>
  <div :class="classes" v-bind="$attrs">
    <header-logo-org
      :organisation="organisation"
      v-if="isOrgLogo"
      :home-href="homeHref"
    ></header-logo-org>
    <header-logo-normal
      :aria-label="ariaLabel"
      :home-href="homeHref"
      :service="service"
      v-if="!isOrgLogo"
      :show-transactional="showTransactional"
    ></header-logo-normal>
  </div>
</template>

<script lang="ts">
import HeaderLogoNormal from './logo/HeaderLogoNormal.vue'
import HeaderLogoOrg from './logo/HeaderLogoOrg.vue'
import { computed, defineComponent, PropType } from 'vue'
import { NhsHeaderOrganisation, NhsHeaderService } from '../interfaces'

export default defineComponent({
  inheritAttrs: false,
  emits: [],
  components: { HeaderLogoNormal, HeaderLogoOrg },
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
      type: Object as PropType<NhsHeaderService>,
      required: true
    },
    showTransactional: {
      type: Boolean,
      required: true
    },
    organisation: {
      type: Object as PropType<NhsHeaderOrganisation>,
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
    const classes = computed((): string => {
      const classes = ['nhsuk-header__logo']

      if (!props.showSearch && !props.showNav) {
        classes.push('nhsuk-header__logo--only')
      }

      return classes.join(' ')
    })

    const isOrgLogo = computed((): boolean => {
      return Object.keys(props.organisation).length > 0
    })

    return { classes, isOrgLogo }
  }
})
</script>
